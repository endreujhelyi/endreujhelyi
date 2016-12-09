
# create a function that takes a number and divides ten with it and prints the result
# it should print "fail" if it is divided by 0

def divider(user_num):
    try:
        return (10 / user_num)
    except ZeroDivisionError:
        return ('fail')

        

# write a function that takes a filename and returns the number of lines the
# file consists. It should return zero if the file not exists.

def line_counter(file_name):
    try:
        f = open(file_name, 'r')
        length = len(f.readlines())
        f.close()
        return length
    except IOError:
        return (0)



# Write a Person class that have a name and a birth_date property
# It should raise an error of the birthdate is less than 0 or more than 2016

class HorrorError(Exception):
    pass

class Person:

    def __init__(self, name, birth_date):
        self.name = name
        self.birth_date = birth_date
        self.birth_date_check()

    def birth_date_check(self):
        if 0 >= self.birth_date or self.birth_date > 2016:
            raise HorrorError
