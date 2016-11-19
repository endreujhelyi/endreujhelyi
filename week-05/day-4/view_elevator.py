# Create a class the displays the Elevator art and navigation (list of commands)

import art
import os
import time

class Display:

    def __init__(self):
        self.art = art.building_parts

    def drawing(self, num_floor, position, people):

        os.system('cls' if os.name == 'nt' else 'clear')
        print ("Floor: " + str(position) + "/12   " + "People: " + str(people) + "/9")

        print (self.art['top'])

        if position == 0:
            if people == 0:
                for i in range(num_floor):
                    print (self.art['no_lift'])
                print (self.art['ground_full_1'] + self.art['elem'] + self.art['ground_full_2'] + str(position))
            elif people > 0:
                for i in range(num_floor):
                    print (self.art['no_lift'])
                print (self.art['ground_full_1'] + str(people) + self.art['ground_full_2'] + str(position))
            print (self.art['bottom'])
        elif position > 0:
            if people == 0:
                for i in range(num_floor, 0, -1):
                    if i == position:
                        print (self.art['nth_empty'] + str(position))
                    else:
                        print (self.art['no_lift'])
            if people > 0:
                for i in range(num_floor, 0, -1):
                    if i == position:
                        print (self.art['nth_full_1'] + str(people) + self.art['nth_full_2'] + str(position))
                    else:
                        print (self.art['no_lift'])
            print (self.art['ground_no_lift'])
            print (self.art['bottom'])

    def goodbye(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        print ('That\'s All Folks!')
