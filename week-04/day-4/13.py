from tkinter import *



root = Tk()
size = 300

canvas = Canvas(root, bg="#111", height=size, width=size)
canvas.pack()

def draw_stuff (x,y,size):
    canvas.create_rectangle(x, y, x+size, y+size, fill="lime green")
    canvas.create_oval(x, y, x+size, y+size, fill="purple")
    canvas.create_polygon(x, y, x+size, y, x+size/2, y+height_ratio*size, fill="white")


# upside down triangle
# to point x,y
# in size size
# 3rd point is at y + sqrt(3)/2


def draw_triangle (x,y,size):
    height_ratio = 3**.5/2
    canvas.create_polygon(x, y, x+size, y, x+size/2, y+height_ratio*size, fill="white")



def rec_draw(x,y,size):
    if size < 10:
        return
    else:
        draw_stuff(x,y,size)
        rec_draw(x,y,size/3)
        rec_draw(x+size/2,y,size/2)




rec_draw(10,10,200)

root.mainloop()
