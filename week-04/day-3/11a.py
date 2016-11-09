from tkinter import *

top = Tk()
size = 300

canvas = Canvas(top, bg="coral", height=size, width=size)

def square_drawer(side, number):
    extra = 10
    for i in range(0, number):
        canvas.create_rectangle(extra+(i*side), extra+(i*side), extra+((i+1)*side), extra+((i+1)*side), fill='purple')

square_drawer(10, 19)


canvas.pack()
top.mainloop()
