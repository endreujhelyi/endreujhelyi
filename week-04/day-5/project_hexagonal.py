from tkinter import *
import math

top = Tk()
size = 600

canvas = Canvas(top, bg="#a55", height=size, width=size)
canvas.pack()



def draw_hexagon (x,y,side):
    ratio = side * (math.sqrt(3)/2)

    canvas.create_line(x, y, x+side, y, fill="#1ce")
    canvas.create_line(x+side, y, x+side+side/2, y+ratio, fill="#1ce")
    canvas.create_line(x+side+side/2, y+ratio, x+side, y+2*ratio, fill="#1ce")
    canvas.create_line(x+side, y+2*ratio, x, y+2*ratio, fill="#1ce")
    canvas.create_line(x, y+2*ratio, x-side/2, y+ratio, fill="#1ce")
    canvas.create_line(x-side/2, y+ratio, x, y,fill="#1ce")

def fractal_hexagon(x,y,side):
    if side < 1:
        return
    else:
        draw_hexagon(x,y,side)
        fractal_hexagon(x,y,side/3)
        fractal_hexagon(x+(side/3)*2,y,side/3)
        fractal_hexagon(x+(side/3)*2+side/3,y+(side*math.sqrt(3)/2)-(side/3*math.sqrt(3)/2),side/3)
        fractal_hexagon(x+(side/3)*2,y+(side*math.sqrt(3)/2)+(side/3*math.sqrt(3)/2),side/3)
        fractal_hexagon(x-(side/3)*2+side/3,y+(side*math.sqrt(3)/2)-(side/3*math.sqrt(3)/2),side/3)
        fractal_hexagon(x, y+(side*math.sqrt(3)/2) + (side/3*math.sqrt(3)/2), side/3)


fractal_hexagon(160, 100, 220)


top.mainloop()
