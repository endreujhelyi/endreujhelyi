# create a 300x300 canvas.
# make it look like a nigth sky:
# - The background should be black
# - The stars can be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)


from tkinter import *
import webcolors
import random


top = Tk()
size = 300

canvas = Canvas(top, bg="#111", height=size, width=size)

def rgb():
    rgb = []
    for i in range(3):
        rgb.append(random.randint(1, 255))
    return (webcolors.rgb_to_hex(rgb))

def line_drawer():
    for i in range(30):
        random_sqr = random.randint(0, size)
        random_sqry = random.randint(0, size)
        canvas.create_rectangle(random_sqr, random_sqry, random_sqr-2, random_sqry-2, fill=rgb())

line_drawer()


canvas.pack()
top.mainloop()
