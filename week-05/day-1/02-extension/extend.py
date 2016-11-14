# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
    return max(a, b, c)

# Returns the median value of a list given as param
def median(pool):
    pool = sorted(pool)
    if type(pool) != list:
        raise TypeError

    elif len(pool) % 2 == 1:
        return pool[int(((len(pool)) - 1) / 2)]
    else:
        return (pool[int(len(pool) / 2)] + pool[int((len(pool) / 2) - 1)]) / 2

# Returns true if the param is a vovel
def is_vovel(char):
    vovel_string = 'aeiouéáőűöüóí'

    if type(char) != str:
        raise ValueError
    elif char.lower() not in vovel_string:
        return False
    else:
        return True

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve_final = ""
    teve = hungarian
    for char in teve:
        if is_vovel(char):
            teve_final += char + 'v' + char
        else:
            teve_final += char
    return teve_final
