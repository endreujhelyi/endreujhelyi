def fighting_points_calc(self, enemy):
    enemy = self.enemy_points[enemy]
    hero_strike = self.hero_points[2] + self.random_dice() * 2
    enemy_strike = enemy[3] + self.random_dice() * 2
    while self.hero_points[0] > 0 and enemy[1] > 0:
        if enemy_strike > self.hero_points[0]:
            self.hero_points[0] -= enemy_strike
        if hero_strike > enemy[2]:
            enemy[1] -= hero_strike
