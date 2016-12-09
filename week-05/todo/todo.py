import sys
import todo_model, todo_view


class CommandAndExecute:

    def __init__(self):
        self.command_list = {
        '-l': self.lister,
        '-a': self.adder,
        '-r': self.remover,
        '-c': self.checker}
        
        self.is_running = True
        self.cdr = sys.argv
        self.rw = todo_model.FileModifier()
        self.disp = todo_view.Display()
        self.file = self.rw.file
        self.is_running = True
        self.validator()

    # checking the existence of the file
    def validator(self):
        try:
            self.rw.todo_reader()
        except FileNotFoundError:
            self.rw.todo_file_creator()
        self.command_checker()

    def command_checker(self):
        if len(self.cdr) == 1:
            self.disp.intro()
        elif self.cdr[1] in self.command_list:
            self.command_list[self.cdr[1]]()
        else:
            self.disp.unsupported()

    def lister(self):
        self.disp.listing(self.rw.todo_reader())

    def adder(self):
        if len(self.cdr) == 3:
            self.rw.todo_adder()
        else:
            self.disp.invalid()

    def remover(self):
        if len(self.cdr) == 2:
            self.disp.no_index()
        else:
            try:
                if int(self.cdr[2]) > len(self.rw.todo_reader()):
                    self.disp.out_of()
                else:
                    self.rw.todo_checker()
            except ValueError:
                self.disp.exception()

    def checker(self):
        if len(self.cdr) == 2:
            self.disp.no_index()
        else:
            try:
                if int(self.cdr[2]) > len(self.rw.todo_reader()):
                    self.disp.out_of()
                else:
                    self.rw.todo_checker()
            except ValueError:
                self.disp.exception()

todo = CommandAndExecute()
