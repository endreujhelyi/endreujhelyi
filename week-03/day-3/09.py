# Create a function that prints a triangle like this:
#   *
#   **
#   ***
#   ****
#   *****
#   ******
# It should take a number as parameter that describes how many lines the triangle has

def triangle(num):

    for i in range (0, num):
        i += 1
        print(i*'*')


stars = 6
triangle(stars)
