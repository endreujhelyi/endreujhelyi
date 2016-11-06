# Create a function that prints a diamond like this:
#       *
#      ***
#     *****
#    *******
#   *********
#  ***********
#   *********
#    *******
#     *****
#      ***
#       *
#
# It should take a number as parameter that describes how many lines the diamond has

def triangle (num):
    if num % 2 == 0:
        num += 1

    space = num // 2 + 1
    diamond_core = (num / 2) - 0.5
    j = num // 2 + 1

    for i in range (0, num):
        if i < diamond_core:
            i += 1
            space -= 1
            print ((space*' ') + (i*'*') + ((i-1)*'*'))
        elif i == diamond_core:
            i += 1
            space -= 1
            print ((space*' ') + (i*'*') + ((i-1)*'*'))
        else:
            space += 1
            j -= 1
            print ((space*' ') + (j*'*') + ((j-1)*'*'))

diamond = 10
triangle(diamond)



# alternative version ------------------------------|

width = 12

i = 1
while i < width * 2:
    if i < width:
        print (" " * (width - i) + " *" * i)
    else:
        print (" " * (i - width) + " *" * (2 * width - i))
    i += 1
