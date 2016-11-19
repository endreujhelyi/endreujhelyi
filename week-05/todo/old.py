import sys, os
import emoji
import texts
import todo_model


class User:

    def __init__(self):
        print (texts.intro)


class CommandAndExecute:

    def __init__(self):
        self.command_list = ['-l', '-a', '-r', '-c']
        self.is_running = True
        self.cdr = sys.argv
        self.rw = FileModifier()
        self.validator()


    def validator(self):
        if not os.path.exists('todo_list.csv'):
            f = open('todos.txt', 'w')
            f.close()
            self.input_checker()
        else:
            self.input_checker()


    # checking input command
    def input_checker(self):
        self.elements = self.rw.todo_reader()

        if len(self.cdr) == 1 or (self.cdr[1] in self.command_list):
            if len(self.cdr) == 1:
                os.system('cls' if os.name == 'nt' else 'clear')
                print (texts.intro)
            elif self.cdr[1] == self.command_list[0]:
                os.system('cls' if os.name == 'nt' else 'clear')
                self.todo_listing()
                print (texts.intro)
            elif self.cdr[1] == self.command_list[1]:
                if len(self.cdr) == 3:
                    os.system('cls' if os.name == 'nt' else 'clear')
                    self.rw.todo_adder()
                    self.todo_listing()
                    print (texts.intro)
                else:
                    os.system('cls' if os.name == 'nt' else 'clear')
                    print (texts.add['no_task'])
                    print (texts.intro)
            elif self.cdr[1] == self.command_list[2]:
                if len(self.cdr) == 2:
                    os.system('cls' if os.name == 'nt' else 'clear')
                    print (texts.remove['no_index'])
                    print (texts.intro)
                else:
                    try:
                        if int(self.cdr[2]) > len(self.elements):
                            os.system('cls' if os.name == 'nt' else 'clear')
                            print (texts.remove['out_of_bound'])
                            print (texts.intro)
                        else:
                            os.system('cls' if os.name == 'nt' else 'clear')
                            self.rw.todo_remover()
                            self.todo_listing()
                            print (texts.intro)
                    except ValueError:
                        os.system('cls' if os.name == 'nt' else 'clear')
                        print (texts.remove['not_number'])
                        print (texts.intro)
            elif self.cdr[1] == self.command_list[3]:
                os.system('cls' if os.name == 'nt' else 'clear')
                if len(self.cdr) == 2:
                    print (texts.remove['no_index'])
                    print (texts.intro)
                else:
                    try:
                        if int(self.cdr[2]) > len(self.elements):
                            os.system('cls' if os.name == 'nt' else 'clear')
                            print (texts.remove['out_of_bound'])
                            print (texts.intro)
                        else:
                            os.system('cls' if os.name == 'nt' else 'clear')
                            self.rw.todo_checker()
                            self.todo_listing()
                            print (texts.intro)
                    except ValueError:
                        os.system('cls' if os.name == 'nt' else 'clear')
                        print (texts.remove['not_number'])
                        print (texts.intro)
        else:
            os.system('cls' if os.name == 'nt' else 'clear')
            raise TypeError (texts.arg['unsupported'])
            print (texts.intro)

    # listing of todo elements
    def todo_listing(self):
        os.system('cls' if os.name == 'nt' else 'clear')
        self.elements = self.rw.todo_reader()

        if len(self.elements) > 0:
            for i in range(len(self.elements)):
                print (str(i + 1) + " - " + self.elements[i])
        else:
            print (texts.empty['no_todo'])

class FileModifier():

    def __init__(self):
        self.elements = self.todo_reader()
        self.cdr = sys.argv

    def todo_reader(self):
        f = open('todo_list.csv')
        result = f.readlines()
        f.close()
        return result

    def todo_adder(self):
        f = open('todo_list.csv', 'a')
        f.writelines("[  ] " + sys.argv[2] + "\n")
        f.close()

    def todo_remover(self):
        f = open('todo_list.csv', 'r')
        lines = f.readlines()
        f.close()
        f = open('todo_list.csv', 'w')
        for line in range(len(lines)):
            if line != (int(self.cdr[2])- 1):
                f.writelines(lines[line])
        f.close()

    def todo_checker(self):
        f = open('todo_list.csv', 'r')
        lines = f.readlines()
        f.close()
        f = open('todo_list.csv', 'w')
        for i in range(len(lines)):
            if i == (int(self.cdr[2]) - 1):
                if lines[i][:4] == "[  ]":
                    f.write("[" + emoji.emojize(':thumbs_up_sign:') + " ]" + lines[i][4::])
                else:
                    f.write("[  ]" + lines[i][4::])
            else:
                f.write(lines[i])
        f.close()

todo = CommandAndExecute()
