# create a 300x300 black canvas.
# draw a red horizontal line to its middle.
# draw a green vertical line to its middle.

from tkinter import *

top = Tk()
x = 300

canvas = Canvas(top, bg="black", height=x, width=x)
canvas.create_line(0, x/2, x, x/2, fill='red')
canvas.create_line(x/2, 0, x/2, x, fill='green')

canvas.pack()
top.mainloop()
