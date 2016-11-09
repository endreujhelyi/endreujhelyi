# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from tkinter import *

top = Tk()
size = 300
lines = 3

canvas = Canvas(top, bg="#222", height=size, width=size)

def square_drawer(x, y):
    return canvas.create_rectangle(x, y, x+50, y+50, fill='coral')

square_drawer(20, 40)
square_drawer(130, 50)
square_drawer(220, 100)


canvas.pack()
top.mainloop()
