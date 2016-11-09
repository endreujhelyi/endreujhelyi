from tkinter import *


top = Tk()
size = 300

canvas = Canvas(top, bg="black", height=size, width=size)

def square_drawer(a, b, color):
    canvas.create_rectangle(a * size/8, b * size/8, (a+1) * size/8, (b+1) * size/8, fill=color)

for x in range(8):
    for y in range(8):
        if (x + y) % 2 != 0:
            color='white'
        else:
            color='black'
        square_drawer(x, y, color)



canvas.pack()
top.mainloop()
