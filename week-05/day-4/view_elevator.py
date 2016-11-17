# Create a class the displays the Elevator art and navigation (list of commands)

import art
import os
import time

class Display:

    def __init__(self):
        self.art = art.building_parts

    def drawing(self, num_floor, position, people):

        os.system('cls' if os.name == 'nt' else 'clear')
        print ("Floor: " + str(position) + "   " + "People: " + str(people))

        print (self.art['top'])

        if position == 0:
            if people == 0:
                for i in range(num_floor):
                    print (self.art['no_lift'])
                print (self.art['ground_empty'])
            elif people > 0:
                for i in range(num_floor):
                    print (self.art['no_lift'])
                print (self.art['ground_full'])
            print (self.art['bottom'])
        elif position > 0:
            if people == 0:
                for i in range(num_floor, 0, -1):
                    if i == position:
                        print (self.art['nth_empty'])
                    else:
                        print (self.art['no_lift'])
            if people > 0:
                for i in range(num_floor, 0, -1):
                    if i == position:
                        print (self.art['nth_full'])
                    else:
                        print (self.art['no_lift'])
            print (self.art['ground_no_lift'])
            print (self.art['bottom'])
