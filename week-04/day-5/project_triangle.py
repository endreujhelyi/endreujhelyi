from tkinter import *

top = Tk()
size = 610

canvas = Canvas(top, bg="#222", height=size, width=size)
canvas.pack()

def draw_triangle (x,y,size):
    canvas.create_line(x, y, x+size, y, fill="coral")
    canvas.create_line(x+size, y, x+size/2, y+size, fill="coral")
    canvas.create_line(x+size/2, y+size, x, y, fill="coral")

def fractal_triangle(x,y,size):
    if size < 5:
        return
    else:
        draw_triangle(x,y,size)
        fractal_triangle(x,y,size/2)
        fractal_triangle(x+size/2,y,size/2)
        fractal_triangle(x+size/4,y+size/2,size/2)

fractal_triangle(5, 5, size-5)


top.mainloop()
