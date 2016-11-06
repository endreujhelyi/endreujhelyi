# create a function that takes a list and returns a new list with all the elements doubled


def list_dub (item):
    new_list = []
    for x in item:
        new_list.append(x * 2)
    return new_list



list = [1, 2, 3, 4, 5, 6]
print (list_dub(list))
