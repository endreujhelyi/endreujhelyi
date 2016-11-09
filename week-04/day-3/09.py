# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *

top = Tk()
size = 300
lines = 3

canvas = Canvas(top, bg="tomato", height=size, width=size)

def square_drawer(x):
    return canvas.create_rectangle((size/2)-x,(size/2)-x,(size/2)+x,(size/2)+x, fill='#222')

square_drawer(88)
square_drawer(55)
square_drawer(33)


canvas.pack()
top.mainloop()
