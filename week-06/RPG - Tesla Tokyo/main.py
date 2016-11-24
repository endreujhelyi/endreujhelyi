import model, view
from tkinter import *


class MainLoop:

    def __init__(self):
        self.display = view.Display()
        self.model = model.AreaStructure()
        self.display.root.bind('<Left>', self.move)
        self.display.root.bind('<Right>', self.move)
        self.display.root.bind('<Up>', self.move)
        self.display.root.bind('<Down>', self.move)
        self.display.root.bind('<space>', self.fighting)

    def move(self, event):
        # keyboard events numeric values
        if self.model.move_counter % 2 == 1:
            self.model.enemy_mover()
        char_code_list = {8124162: self.left_key, 8189699: self.right_key, 8320768: self.up_key, 8255233: self.down_key}
        char_code_list[event.keycode]()
        self.model.move_counter += 1
        if self.model.is_key_have == True and self.model.is_boss_dead == True:
            self.leveling()

    def start(self):
        self.model.enemy_starting()
        self.model.random_points()
        self.drawer('down')
        self.display.show()

    def restart(self):
        self.model.enemy_starting()
        self.drawer('down')

    def drawer(self, direction):
        self.display.canvas.delete('all')
        self.display.map_builder(self.model.map)
        self.display.key_drawer(self.model.is_key_have)
        for i in range(len(self.model.enemies_position)):
            self.display.enemy_drawer(self.model.enemies_position[i])
        self.display.hero_drawer(self.model.hero_position, direction)
        # statistic on the right
        self.display.stat_printer(self.model.hero_lvl, self.model.hero_points, self.model.map_lvl)

    def left_key(self):
        self.model.hero_mover('left')
        self.drawer('left')

    def right_key(self):
        self.model.hero_mover('right')
        self.drawer('right')

    def up_key(self):
        self.model.hero_mover('up')
        self.drawer('up')

    def down_key(self):
        self.model.hero_mover('down')
        self.drawer('down')

    def fighting(self, event):
        enemy_id = []
        for i in range(len(self.model.enemies_position)):
            if self.model.enemies_position[i][1] == self.model.hero_position[0] and self.model.enemies_position[i][2] == self.model.hero_position[1]:
                enemy_id.append(i)
        if len(enemy_id) > 0:
            self.display.stat_printer_enemy(self.model.map_lvl, self.model.enemy_points[enemy_id[0]])
            self.model.fighting_points_calc(enemy_id[0])

    def leveling(self):
        self.model.map_lvl += 1
        self.model.hero_position = [0, 0]
        self.model.enemies_position = [['boss', 1, 1], ['skeleton', 1, 1], ['skeleton', 1, 1], ['skeleton', 1, 1]]
        self.model.enemy_points = [['boss', 2 * self.model.map_lvl, self.model.map_lvl / 2, self.model.map_lvl], ['skeleton', 2 * self.model.map_lvl, self.model.map_lvl / 2, self.model.map_lvl], ['skeleton', 2 * self.model.map_lvl, self.model.map_lvl / 2, self.model.map_lvl], ['skeleton', 2 * self.model.map_lvl, self.model.map_lvl / 2, self.model.map_lvl]]
        self.model.is_key_have = False
        self.model.is_boss_dead = False
        self.restart()

app = MainLoop()
app.start()
