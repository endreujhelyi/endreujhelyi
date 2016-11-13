# Create a Rectangle class
# That stores its size and its coordinates
# it should have a method called is_over, that takes an other Rectangle and
# returns True if the two rectangles are overlaping and returns False otherwise

class Rectangle():

    def __init__(self, x, y, width, height):
        self.x = x
        self.y = y
        self.width = width
        self.height = height

    def is_over(self, other):
        result = False
        print(other.x, other.y, other.width, other.height)
        if other.x >= self.x and other.x <= self.x + self.width and other.y >= self.y and other.y <= self.y + self.height:
            result = True

        elif other.x + other.width >= self.x and other.x + other.width <= self.x + self.width and other.y + other.height >= self.y and other.y + other.height <= self.y + self.height:
            result = True

        



        return result



rectangle1 = Rectangle(20, 20, 40, 40)
rectangle2 = Rectangle(10, 10, 30, 60)

print(rectangle1.is_over(rectangle2))
