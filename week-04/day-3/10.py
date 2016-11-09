# create a 300x300 canvas.
# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# create a loop that draws 20 squares with that function.

from tkinter import *

top = Tk()
size = 300

canvas = Canvas(top, bg="#1ce", height=size, width=size)

def square_drawer(rec_size):
    number_of_squares = 20
    for _ in range(number_of_squares):
        rec_size -= 5
        canvas.create_rectangle((size/2)-rec_size,(size/2)-rec_size,(size/2)+rec_size,(size/2)+rec_size, fill='#c55')

square_drawer(100)


canvas.pack()
top.mainloop()
