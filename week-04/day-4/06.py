# 6. We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies
# (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say
# have 3 ears, because they each have a raised foot. Recursively return the
# number of "ears" in the bunny line 1, 2, ... n (without loops or
# multiplication).


def bunny_ears(n):
    if n == 1:
        return 2
    elif n % 2 == 0:
        return bunny_ears(n - 1) + 3
    else:
        return bunny_ears(n - 1) + 2


print (bunny_ears(12))
