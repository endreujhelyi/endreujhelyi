import emoji
import sys


class FileModifier:

    def __init__(self):
        self.cdr = sys.argv
        self.file = 'todo_list.csv'

    def todo_file_creator(self):
        f = open(self.file, 'w+')
        f.write("hello")
        f.close()

    def todo_reader(self):
        f = open(self.file)
        result = f.readlines()
        f.close()
        return result

    def todo_adder(self):
        f = open(self.file, 'a')
        f.writelines("[  ] " + self.cdr[2] + "\n")
        f.close()

    def todo_remover(self):
        f = open(self.file, 'r')
        lines = f.readlines()
        f.close()
        f = open(self.file, 'w')
        for line in range(len(lines)):
            if line != (int(self.cdr[2])- 1):
                f.writelines(lines[line])
        f.close()

    def todo_checker(self):
        f = open(self.file, 'r')
        lines = f.readlines()
        f.close()
        f = open(self.file, 'w')
        for i in range(len(lines)):
            if i == (int(self.cdr[2]) - 1):
                if lines[i][:4] == "[  ]":
                    f.write("[" + emoji.emojize(':thumbs_up_sign:') + " ]" + lines[i][4::])
                else:
                    f.write("[  ]" + lines[i][4::])
            else:
                f.write(lines[i])
        f.close()
