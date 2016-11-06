# Create a student Class
# that has a method `add_grade`, that takes a grade from 1 to 5
# an other method `get_average`, that returns the average of the
# grades

class Student():

    class_grades = 0
    class_members = 0

    def add_grade (self, grade):
        self.grade = grade
        if 1 <= grade <= 5 and grade % 1 == 0:
            self.class_grades += self.grade
            self.class_members += 1
        else:
            print ("Yoo man, this grade is invalid!")

    def get_average (self):
        return self.class_grades / self.class_members


student_grade = Student()

student_grade.add_grade(2)
student_grade.add_grade(3)
student_grade.add_grade(5)
student_grade.add_grade(5)
student_grade.add_grade(4)
student_grade.add_grade(4.4)
student_grade.add_grade(9)

print(student_grade.get_average())
