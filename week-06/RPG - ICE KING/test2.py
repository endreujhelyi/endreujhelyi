import random

move_list = {'left': lambda x, y: [x-1, y], 'right': lambda x, y: [x+1, y], 'up': lambda x, y: [x, y-1], 'down': lambda x, y: [x, y+1]}

print(move_list['left'](3, 3))

self.enemies_position = [['boss', 1, 1], ['skeleton', 1, 1], ['skeleton', 1, 1], ['skeleton', 1, 1]]

def movement_validator(self, direction, x, y):
    if (direction == 'down' or direction == 'right') and x <= 9 and y <= 10 and self.map[y][x] == 'f':
        return True
    elif (direction == 'left' or direction == 'up') and x >= 0 and y >= 0 and self.map[y][x] == 'f':
        return True
    return False




    def movement_validator(self, direction, x, y):
        for i in range(len(self.enemies_position)):
            if (self.enemies_position[i][1] == x and self.enemies_position[i][2] == y) or (self.enemies_position[i][1] == self.hero_position[0] and self.enemies_position[i][2] == self.hero_position[1]):
                return False
        if direction == 'down' and y <= 10 and self.map[y][x] == 'f':
            return True
        elif direction == 'right' and x <= 9 and self.map[y][x] == 'f':
            return True
        elif direction == 'left' and x >= 0 and self.map [y][x] == 'f':
            return True
        elif direction == 'up' and y >= 0 and self.map[y][x] == 'f':
            return True
        return False
