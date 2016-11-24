from tkinter import PhotoImage

class GameImages:

    def __init__(self):
        self.dir_list = {
        'left': PhotoImage(file="imgs/hero-left.gif"),
        'right': PhotoImage(file="imgs/hero-right.gif"),
        'up': PhotoImage(file="imgs/hero-up.gif"),
        'down': PhotoImage(file="imgs/hero-down.gif")}
        self.map_tiles = {
        'f': PhotoImage(file="imgs/floor.gif"),
        'w': PhotoImage(file="imgs/wall.gif")}
        self.enemies_list = {
        'boss': PhotoImage(file="imgs/boss.gif"),
        'skeleton': PhotoImage(file="imgs/skeleton.gif")}
        self.key = {'key': PhotoImage(file="imgs/key.gif")}
