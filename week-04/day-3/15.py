# create a 300x300 canvas.
# create a function that takes 1 parameter:
# a list of [x, y] points
# and connects them with green lines.
# connect these to get a box: [[10, 10], [290,  10], [290, 290], [10, 290]]
# connect these: [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70],
# [120, 100], [85, 130], [50, 100]]

from tkinter import *


top = Tk()
size = 300

canvas = Canvas(top, bg="#707020", height=size, width=size)

box1 = [[10, 10], [290,  10], [290, 290], [10, 290]]
box2 = [[50, 100], [70, 70], [80, 90], [90, 90], [100, 70], [120, 100], [85, 130], [50, 100]]

def liner(listed):
    for x in range(len(listed)):
        canvas.create_line(listed[x-1][0], listed[x-1][1], listed[x][0], listed[x][1], fill ='green')

liner(box1)
liner(box2)


canvas.pack()
top.mainloop()
