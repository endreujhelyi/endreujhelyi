import art
import random

class AreaStructure:

    def __init__(self):
        self.map = []
        self.move_counter = 0
        self.hero_position = [0, 0]
        self.enemies_position = [
        ['boss', 1, 1],
        ['skeleton', 1, 1],
        ['skeleton', 1, 1],
        ['skeleton', 1, 1]]
        self.restart_enemies_position = self.enemies_position

        #statistic
        self.map_lvl = 1
        self.hero_lvl = 1
        self.hero_points = [20, 2, 5]
        self.enemy_points = [
        ['boss', 2 * self.map_lvl, self.map_lvl / 2, self.map_lvl],
        ['skeleton', 2 * self.map_lvl, self.map_lvl / 2, self.map_lvl],
        ['skeleton', 2 * self.map_lvl, self.map_lvl / 2, self.map_lvl],
        ['skeleton', 2 * self.map_lvl, self.map_lvl / 2, self.map_lvl]]

        self.restart_enemy_points = self.enemy_points
        self.is_key_found = False
        self.is_boss_dead = False

    def random_map(self):
        self.map = random.choice(art.matrix)

    # enemy attributions
    def enemy_starting(self):
        for num in range(len(self.enemies_position)):
            self.enemy_positioner(num)

    def enemy_positioner(self, num):
        random_x = random.randrange(0, 9)
        random_y = random.randrange(0, 10)
        check = self.movement_validator('down', random_x + 1, random_y + 1)

        if check == True:
            self.enemies_position[num][1] += random_x
            self.enemies_position[num][2] += random_y
            if num == 1:
                self.enemy_points[1].append('key')
        else:
            self.enemy_positioner(num)

    def enemy_mover(self):
        for num in range(len(self.enemies_position)):
            self.enemy_mover_to(num, self.enemies_position[num][1], self.enemies_position[num][2])

    def enemy_mover_to(self, num, x, y):
        move_list = {
            'left': lambda x, y: [x-1, y],
            'right': lambda x, y: [x+1, y],
            'up': lambda x, y: [x, y-1],
            'down': lambda x, y: [x, y+1]}

        randomizer = random.choice(list(move_list.items()))
        random_move = randomizer[1](x, y)
        check = self.movement_validator(randomizer[0], random_move[0], random_move[1])

        if check == True:
            self.enemies_position[num][1] = random_move[0]
            self.enemies_position[num][2] = random_move[1]
        else:
            self.enemy_mover_to(num, x, y)

    def hero_mover(self, direction):
        direction_list = {
            'left': lambda x, y: [x-1, y],
            'right': lambda x, y: [x+1, y],
            'up': lambda x, y: [x, y-1],
            'down': lambda x, y: [x, y+1]
        }
        move_dir = direction_list[direction](self.hero_position[0], self.hero_position[1])

        check = self.movement_validator(direction, move_dir[0], move_dir[1])
        if check == True:
            self.hero_position[0] = move_dir[0]
            self.hero_position[1] = move_dir[1]

    def movement_validator(self, direction, x, y):
        if (direction == 'down' or direction == 'right') and x <= 9 and y <= 10 and self.map[y][x] == 'f':
            return True
        elif (direction == 'left' or direction == 'up') and x >= 0 and y >= 0 and self.map[y][x] == 'f':
            return True
        return False

    ###### FEATURES FUNCTIONS ######

    def random_dice(self):
        dice = random.randint(1, 6)
        return dice

    def random_points(self):
        dice = self.random_dice()
        self.hero_points[0] += (3 * dice)
        self.hero_points[1] *= dice
        self.hero_points[2] += dice

        for num in range(len(self.enemy_points)):
            dice = random.randint(1, 6)
            if self.enemy_points[num][0] == 'boss':
                self.enemy_points[num][1] *= dice + dice
                self.enemy_points[num][2] *= dice + (dice // 2)
                self.enemy_points[num][3] *= dice + self.map_lvl
            else:
                self.enemy_points[num][1] *= dice
                self.enemy_points[num][2] *= dice
                self.enemy_points[num][3] *= dice

    ### FIGHTING ###

    def fighting_points_calc(self, enemy_id):
        enemy = self.enemy_points[enemy_id]
        hero_strike = self.hero_points[2] + self.random_dice() * 2
        enemy_strike = enemy[3] + self.random_dice() * 2
        hero_alive = self.is_alive(self.hero_points[0])
        enemy_alive = self.is_alive(enemy[1])

        if hero_alive == True and enemy_alive == True:
            if enemy_strike > self.hero_points[0]:
                self.hero_points[0] -= enemy_strike
            if hero_strike > enemy[2]:
                enemy[1] -= hero_strike
        elif enemy_alive == False:
            self.hero_lvl += 1
            self.hero_level_up()
            if len(self.enemy_points[enemy_id]) == 5:
                self.is_key_found = True
            if self.enemy_points[enemy_id][0] == 'boss':
                self.is_boss_dead = True
            del self.enemy_points[enemy_id]
            del self.enemies_position[enemy_id]

    def is_alive(self, health):
        if health > 0:
            return True
        return False

    def hero_level_up(self):
        self.hero_points[0] += self.random_dice()
        self.hero_points[1] += self.random_dice()
        self.hero_points[2] += self.random_dice()
