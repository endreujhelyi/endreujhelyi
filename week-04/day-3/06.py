# create a 300x300 canvas.
# draw a green 10x10 square to its center.

from tkinter import *

top = Tk()
size = 300
lines = 3

canvas = Canvas(top, bg="#222", height=size, width=size)

canvas.create_rectangle((size/2)-5, (size/2)-5, (size/2)+5, (size/2)+5, fill='light green')


canvas.pack()
top.mainloop()
