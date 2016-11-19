
import art
import os
import time

class Display:

    def __init__(self):
        self.art = art.building_parts
        self.text = art.texts

    def drawing(self, num_floor, position, people):
        os.system('cls' if os.name == 'nt' else 'clear')

        #header
        print ("Floor: " + str(position) + "/12   " + "People: " + str(people) + "/9")

        #draw the building
        print (self.art['top'])
        if position == 0:
            for i in range(num_floor):
                print (self.art['no_lift'])
            if people == 0:
                print (self.art['ground_full_1'] + self.art['elem'] + self.art['ground_full_2'] + str(position))
            elif people > 0:
                print (self.art['ground_full_1'] + str(people) + self.art['ground_full_2'] + str(position))
        elif position > 0:
            for i in range(num_floor, 0, -1):
                if i == position:
                    if people == 0:
                        print (self.art['nth_empty'] + str(position))
                    else:
                        print (self.art['nth_full_1'] + str(people) + self.art['nth_full_2'] + str(position))
                else:
                    print (self.art['no_lift'])
            print (self.art['ground_no_lift'])
        print (self.art['bottom'])

        #info panel
        print (self.text['intro'])

    def goodbye(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        print (self.text['outro'])
