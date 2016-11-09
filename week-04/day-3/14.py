# reproduce this: [https://github.com/greenfox-velox/velox-syllabus/blob/master/week-04/3-graphics/workshop/r1.png]
# divide the canvas into 4 parts and repeat the pattern.
# reproduce this: [https://github.com/greenfox-velox/velox-syllabus/blob/master/week-04/3-graphics/workshop/r2.png]
# can you make the colors change? make every line a different color.

from tkinter import *

top = Tk()
size = 300

canvas = Canvas(top, bg="#111", height=size, width=size)

def line_drawer():
    for i in range(0, size, 20):
        canvas.create_line(0, size-i, size-i, size, fill="green")
        canvas.create_line(0+i, 0, size, 0+i, fill="purple")

line_drawer()

"""
    canvas.create_line(0, 280, 280, 300)
    canvas.create_line(0, 260, 260, 300)
    canvas.create_line(0, 240, 240, 300)


    canvas.create_line(20, 0, 300, 20)
    canvas.create_line(40, 0, 300, 40)
    canvas.create_line(60, 0, 300, 60)
"""


canvas.pack()
top.mainloop()
