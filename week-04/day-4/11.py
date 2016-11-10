from tkinter import *
import random
import webcolors
import time


top = Tk()
size = 600

canvas = Canvas(top, bg="#111", height=size, width=size)
canvas.pack()


def rgb():
  return webcolors.rgb_to_hex([random.randrange(0,256) for _ in range(3)])

def fractal_squares(x, y, size):
    time.sleep(0.001)
    canvas.create_rectangle(x, y, x+size, y+size, outline=rgb())
    canvas.update()
    if size > 5:
        fractal_squares(x, y + size/3, size/3)
        fractal_squares(x + (size - size/3), y + size/3, size /3 )
        fractal_squares(x + size/3, y, size / 3)
        fractal_squares(x + size/3, y + (size - size/3), size/3)

fractal_squares(0, 0, size)


top.mainloop()
