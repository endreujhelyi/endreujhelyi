# create a 300x300 canvas.
# draw its diagonals in green.

from tkinter import *

top = Tk()
x = 300

canvas = Canvas(top, bg="#333", height=x, width=x)
canvas.create_line(0, 0, x, x, fill='light green')
canvas.create_line(0, x, x, 0, fill='light green')


canvas.pack()
top.mainloop()
