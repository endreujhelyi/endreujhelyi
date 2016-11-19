import os
import texts


class Display:

    def __init__(self):
        # os.system('cls' if os.name == 'nt' else 'clear')
        pass

    def intro(self):
        print (texts.intro)

    # printin todo list
    def listing(self, todos):
        if len(todos) > 0:
            for i in range(len(todos)):
                print (str(i + 1) + " - " + todos[i])
        else:
            print (texts.empty['no_todo'])
        self.intro()

    # printing error messages
    def unsupported(self):
        print (texts.arg['unsupported'])
        self.intro()

    def invalid(self):
        print (texts.add['no_task'])

    def no_index(self):
        print (texts.remove['no_index'])

    def out_of(self):
        print (texts.remove['out_of_bound'])

    # printing exceptions
    def exception(self):
        print (texts.remove['not_number'])
