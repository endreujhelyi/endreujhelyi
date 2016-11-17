# Create an elevator controller class
# It should take an user input by listening to user input
# List of commands:
#
#  - Move elevator up
#  - Move elevator down
#  - Add people
#  - Remove people
#
#  Features to implement:
#   - Always draw the state of the elevator as depicted in "art.txt"
#   - [ x ] is the elevator. X means it has at least 1 person inside
#   - Moving floors should take time
#   - don't move beyond limits
#
# Create the class with MVC pattern in mind. It should get and store data in the model object
# and it should pass the data to the view objects

import model_elevator
import view_elevator
import art

class Controller:

    def __init__(self):
        self.command_list = ['-f', '-p', '-r']
        self.is_running = True

        self.model = model_elevator.Model()
        self.display = view_elevator.Display()
        self.commands()

    def commands(self):

        while self.is_running:

            self.display.drawing(self.model.num_floors, self.model.position, self.model.people)

            self.command = input(art.intro)
            if self.command in self.command_list:
                if self.command == self.command_list[0]:
                    self.goal_floor()
                elif self.command == self.command_list[1]:
                    self.people_in()
                elif self.command == self.command_list[2]:
                    self.people_out()

    def people_in(self):
        self.people = int(input("How many\n"))
        self.model.add_people(self.people)

    def people_out(self):
        self.people = int(input("Out?\n"))
        self.model.remove_people(self.people)

    def goal_floor(self):
        self.floor = int(input("Say that number!\n"))
        self.model.elevator_pos(self.floor)


elevator = Controller()
