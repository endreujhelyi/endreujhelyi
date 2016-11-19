
import view_elevator
import model_elevator

class Controller:

    def __init__(self):
        #main commands
        self.command_list = {'d': self.people_in, 'a': self.people_out, 'w': self.level_up, 's': self.level_down, 'q': self.quit_game}

        self.is_running = True
        self.model = model_elevator.Model()
        self.display = view_elevator.Display()
        self.commands()

    def commands(self):
        while self.is_running:
            self.display.drawing(self.model.num_floors, self.model.position, self.model.people)

            #user input
            command = input()
            if command in self.command_list:
                self.command_list[command]()

    #command functions to the Model & View
    def people_in(self):
        self.model.add_people()

    def people_out(self):
        self.model.remove_people()

    def level_up(self):
        self.model.elevator_up()

    def level_down(self):
        self.model.elevator_down()

    def quit_game(self):
        self.is_running = False
        self.display.goodbye()

elevator_start = Controller()
