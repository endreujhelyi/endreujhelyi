# create a 300x300 canvas.
# draw a box that has different colored lines on each edge.

from tkinter import *

top = Tk()
x = 300

canvas = Canvas(top, bg="#eee", height=x, width=x)
canvas.create_line(100, 100, 100, 200, fill='black')
canvas.create_line(100, 100, 200, 100, fill='blue')
canvas.create_line(200, 100, 200, 200, fill='red')
canvas.create_line(100, 200, 200, 200, fill='green')

canvas.pack()
top.mainloop()
