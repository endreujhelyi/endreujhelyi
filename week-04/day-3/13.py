# create a 300x300 canvas.
# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from tkinter import *

top = Tk()
size = 300

canvas = Canvas(top, bg="#1ce", height=size, width=size)

def line_drawer(x, y):
    for y in range(0, size+20, 20):
        for x in range(0, size+20, 20):
            if x == 0 or y == 0 or x == 300 or y == 300:
                canvas.create_line( x, y, (size/2), (size/2), fill="black")


line_drawer(0, 0)

canvas.pack()
top.mainloop()
