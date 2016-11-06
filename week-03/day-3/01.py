# Create a `Circle` class that takes it's radius as cinstructor parameter
# It should have a `get_circumference` method that returns it's circumference
# It should have a `get_area` method that returns it's area

class Circle():

    pi = 3.14159265359

    def __init__ (self, radius):
        self.radius = radius

    def get_circumference(self):
        return self.radius * 2 * self.pi

    def get_area(self):
        return self.radius ** 2 * self.pi

circle_rad = Circle(3)
print(circle_rad.get_circumference())
print(circle_rad.get_area())
