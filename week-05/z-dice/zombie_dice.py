import os
import random
import texts, dices
from collections import Counter

# Features
#  - get name from player(s)
#  - handle inputs
#  - track guesses
#  - handle restart
#  - display messages
#       + exceptions


# command line clear
# os.system('cls' if os.name == 'nt' else 'clear')

class Player:

    def __init__(self, name):
        self.name = ''
        self.brains_collected = 0


class Game:

    player_names = {}

    def __init__(self):

        print (texts.intro['game_intro'])
        self.number_of_players = input()

        # players' name
        print (texts.names_of_players['1st_players_name'])
        self.player.name = input()
        player_names[player.name] = 0

        print (texts.names_of_players['2nd_players_name'])
        self.player.name = input()
        player_names[player.name] = 0



    # throwing the dice || one function!

    # counting of players' brains
    # counting of shotguns per turn
    # counting of runners per turn


zombie_dice = Game(2)
