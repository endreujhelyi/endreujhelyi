from tkinter import *
from tkinter import font
import images, text

class Display:

    def __init__(self):
        self.root = Tk()
        self.text = self.root
        self.tile_size = 60
        size_x = self.tile_size * 13
        size_y = self.tile_size * 11
        self.canvas = Canvas(self.root, bg='#15060a', width=size_x, height=size_y)
        self.canvas.pack()
        self.canvas.focus_set()
        self.images = images.GameImages()
        self.dir_list = self.images.dir_list
        self.map_tiles = self.images.map_tiles
        self.enemies_list = self.images.enemies_list
        self.main_font = font.Font(family='Helvetica', size=20)
        self.value_font = font.Font(family='Helvetica', size=20, weight='bold')
        self.level_font = font.Font(family='Times New Roman', size=30, weight='bold')
        self.instructions = font.Font(family='Arial', size=12)

    def map_builder(self, level):
        x, y = 0, 0
        for line in range(len(level)):
            for key in level[line]:
                self.canvas.create_image(x, y, image=self.map_tiles[key], anchor=NW)
                x += self.tile_size
            x = 0
            y += self.tile_size
        self.canvas.create_line(10 * self.tile_size + 1, 0, 10 * self.tile_size + 1, 11 * self.tile_size + 10, width=10, fill="black")

    def hero_drawer(self, position, direction):
        self.canvas.create_image(position[0] * self.tile_size, position[1] * self.tile_size, image=self.dir_list[direction], anchor=NW)

    def enemy_drawer(self, position):
        self.canvas.create_image(position[1] * self.tile_size, position[2] * self.tile_size, image=self.enemies_list[position[0]], anchor=NW)

    def stat_printer(self, lvl, hero, map_lvl):
        self.canvas.create_image(602, 10, image=self.images.logo['tesla'], anchor=NW)
        self.canvas.create_image(620, 195, image=self.dir_list['down'], anchor=NW)
        level_number = self.canvas.create_text(10 * self.tile_size + 30, 150, fill="red", anchor=NW)
        name_of_stat = self.canvas.create_text(10 * self.tile_size + 20, self.tile_size + 200, fill="#888", anchor=NW)
        value_of_stat = self.canvas.create_text(10 * self.tile_size + 100, self.tile_size + 200, fill="#fff", anchor=NW)
        instructions = self.canvas.create_text(10 * self.tile_size + 10, self.tile_size * 9 - 10, fill="#ddd", anchor=NW)
        self.canvas.itemconfig(level_number, font=self.level_font, text="STAGE {}".format(map_lvl))
        self.canvas.itemconfig(name_of_stat, font=self.main_font, text=text.statistic['main_stat'])
        self.canvas.itemconfig(value_of_stat, font=self.value_font, text="{}\n{}\n{}\n{}\n".format(lvl, hero[0], hero[1], hero[2]))
        self.canvas.itemconfig(instructions, font=self.instructions, text=text.statistic['instructions'])

    def stat_printer_enemy(self, lvl, enemy):
        self.canvas.create_image(620, 360, image=self.enemies_list[enemy[0]], anchor=NW)
        self.canvas.delete('value')
        name_of_stat = self.canvas.create_text(10 * self.tile_size + 20, 3 * self.tile_size + 240, fill="#888", anchor=NW)
        value_of_stat = self.canvas.create_text(10 * self.tile_size + 100, 3 * self.tile_size + 240, tag="value", fill="#fff", anchor=NW)
        self.canvas.itemconfig(name_of_stat, font=self.main_font, text=text.statistic['main_stat'])
        self.canvas.itemconfig(value_of_stat, font=self.value_font, text="{}\n{}\n{}\n{}\n".format(lvl, enemy[1], enemy[2], enemy[3]))

    def key_drawer(self, have):
        if have == True:
            self.canvas.create_image(615, self.tile_size * 8 - 20, image=self.images.key['key'], anchor=NW)

    def show(self):
        self.root.mainloop()
