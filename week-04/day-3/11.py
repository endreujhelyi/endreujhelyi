# create a 300x300 canvas.
# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

from tkinter import *
import webcolors

top = Tk()
size = 300

canvas = Canvas(top, bg="#0d355a", height=size, width=size)

def rainbow_rect(x, color):
    canvas.create_rectangle(size/2-x/2, size/2-x/2 , size/2+x/2, size/2+x/2, fill=color)

rainbow_colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'violet']


i = 6
while i >= 0:
    rainbow_rect((i+1)*(size/7), rainbow_colors[i])
    i -= 1

canvas.pack()
top.mainloop()
