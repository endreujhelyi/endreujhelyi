from tkinter import *

top = Tk()
size = 300

canvas = Canvas(top, bg="#1ce", height=size, width=size)

def square_drawer(a, b, color):
    canvas.create_rectangle(a, a, a+b, a+b, fill=color)

j = 10
for i in range(10, 61, 10):
    square_drawer(j, i, 'purple')
    j += i

canvas.pack()
top.mainloop()
