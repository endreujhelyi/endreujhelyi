# create a 300x300 canvas.
# fill it with four different size and color rectangles.

from tkinter import *

top = Tk()
size = 300
lines = 3

canvas = Canvas(top, bg="#222", height=size, width=size)

canvas.create_rectangle((size/3)-5, (size/2)-5, (size/2)+5, (size/2)+5, fill='light green')
canvas.create_rectangle((size/2)-5, (size/3)-5, (size/2)+5, (size/1)+5, fill='tomato')
canvas.create_rectangle((size/4)-5, (size/6)-5, (size/3)+5, (size/2)+5, fill='grey')
canvas.create_rectangle((size/2)-5, (size/4)-5, (size/2)+5, (size/3)+5, fill='light blue')


canvas.pack()
top.mainloop()
