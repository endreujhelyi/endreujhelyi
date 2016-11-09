# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *

top = Tk()
size = 300
lines = 3

canvas = Canvas(top, bg="#222", height=size, width=size)

def line_drawer(x, y):
    return canvas.create_line(x, y, x+50, y, fill='coral')

line_drawer(20, 40)
line_drawer(130, 50)
line_drawer(220, 100)


canvas.pack()
top.mainloop()
