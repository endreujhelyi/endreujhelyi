# Create a new class called `Person` that has a first_name and a last_name (takes it in it's constructor)
# It should have a `greet` method that prints it's full name

# Create a `Student` class that is the child class of `Person`
# it should have a method to add grades
# it should have a `salute` method that prints it's full name and the average of it's grades as well

class Person():

    def __init__ (self, first_name, last_name ):
        self.first_name = first_name
        self.last_name = last_name

    def greet (self):
        print ("Hi, my name is %s %s" % (self.first_name, self.last_name))


class Student(Person):

    sum_grades = 0
    num_grades = 0

    def add_grade (self, grade):
        self.grade = grade
        self.sum_grades += self.grade
        self.num_grades += 1

    def salute (self):
        self.av_grades = self.sum_grades / self.num_grades
        print ("Hi, my name is %s %s and my average is %s." % (self.first_name, self.last_name, self.av_grades))


kid1 = Student("Joe", "Parson")

kid1.add_grade(2)
kid1.add_grade(3)
kid1.add_grade(4)
kid1.add_grade(5)
kid1.add_grade(2)
kid1.add_grade(3)
kid1.add_grade(4)

kid1.salute()



# ADD LIST!!
