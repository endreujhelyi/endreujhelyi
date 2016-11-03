names = ['Zakarias', 'Hans', 'Otto', 'Ole']
# create a function that returns the shortest string
# from a list

def shorter(list):
    min = list[0]
    for x in list:
        if len(x) < len(min):
            min = x
    return min

print(shorter(names))
