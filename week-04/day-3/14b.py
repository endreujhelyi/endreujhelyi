from tkinter import *

top = Tk()
size = 300

canvas = Canvas(top, bg="#111", height=size, width=size)

def line_drawer():
    for i in range(0, 150, 10):
        canvas.create_line(size/2, 0+i, size/2-i, size/2, fill="green")
        canvas.create_line(size/2, 0+i, size/2+i, size/2, fill="red")
        canvas.create_line(size/2+i, size/2, size/2, size-i, fill="blue")
        canvas.create_line(size/2-i, size/2, size/2, size-i, fill="yellow")

line_drawer()


canvas.pack()
top.mainloop()
