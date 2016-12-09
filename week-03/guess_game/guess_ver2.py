import random
import texts

print( texts.intro['game_intro'])
def escape_from_hell(bottom, top, tries):

    number_of_guesses = 0
    tries_remaining = tries


### welcome sentences and adding name
    print ("\n" + text.\n")

    print ("OK human! My name is Beelzebub the King of the Hell.\nIf you wanna be free you have to guess the number that I\'m thinking of!\nBut before you die, let me know your name!\n")
    player_name = input()


    ## input field for the player name
    random_number = random.randint(bottom, top)
    print ("\nWell " + str(player_name) + ", let\'s get it started!\nYou have " + str(tries) + " chances to find that number between " + str(bottom) + " and " + str(top) + ".\nHurry, before I get angry. Soooo?")


    attemp = -1
### start of the loop
    while attemp != random_number:
        attemp = -1

        if tries_remaining > 1:
            attemp = int(input("What is the number?\n\n"))
            tries_remaining -= 1
        elif tries_remaining == 1:
            attemp = int(input("Soo, what is it " + str(player_name) + "?\n\n"))
            tries_remaining -= 1
        elif tries_remaining == 0:
            print ("HAHAHA, your soul is mine and lost forever!\n<<<<<--------- * -  --  - * --------->>>>>>\n")
            return False

    ## bad inputs
        if type(attemp) != int:
            if tries_remaining > 1:
                print ("\nDo you wanna die right now? This is not a whole number.")
            elif tries_remaining == 1:
                print ("\nDo you wanna die right now? This is not a whole number. This is your last chance.")
            else:
                print ("HAHAHA, your soul is mine and lost forever!\n<<<<<--------- * -  --  - * --------->>>>>>\n")
                return False

        elif attemp < bottom_number or attemp > top_number:
            if tries_remaining > 1:
                print ("You piss me off human! This number is not between " + str(bottom_number) + " and " + str(top_number) + ".")
            elif tries_remaining == 1:
                print ("You piss me off human! This number is not between " + str(bottom_number) + " and " + str(top_number) + ". This is your last chance.")
            else:
                return False


### number is found
        if attemp == random_number:
            print ("Noooooooooooo! How did you find my lucky number? " + str(random_number) + " is my favorite.\nPlease, play with me one more. I\'m so lonely! Soo?\nDo you wanna play again, or just walk away before I change my mind.")

            repeat = False
            next_game = 'nothin'

            while next_game == 'nothin':
                next_game = input("Yes or No?\n\n")
                if next_game[0].lower() == "y":
                    return escape_from_hell(bottom_number, top_number, tries_number)
                elif next_game[0].lower() == "n":
                    print ("See ya soon in the Hell!\n\n")
                    return False
                else:
                    next_game == 'nothin'

            while repeat == True:
                repeat = escape_from_hell(bottom_number, top_number, tries_number)




### number is too small
        elif attemp < random_number:
            if tries_remaining > 1:
                print("My number is bigger! You have only " + str(tries_remaining) + " chances to find it. Hurry up!")
            elif tries_remaining == 1:
                print("Hahaha, my number is bigger! 1 more left and you will pass away!\n.. FOREVER.... hahaha")
            else:
                pass


### number is too big
        else:
            if tries_remaining > 1:
                print("My number is smaller! You have only " + str(tries_remaining) + " chances to find it. Hurry up!")
            elif tries_remaining == 1:
                print("Hahaha, my number is smaller! 1 more left and you will pass away!\n.. FOREVER.... hahaha")
            else:
                pass





#######################################################
# ----- u can give the default numbers in the game here --------|
#######################################################

bottom_number = 1
top_number = 100
tries_number = 10

escape_from_hell(bottom_number, top_number, tries_number)
