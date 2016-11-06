# create a function that takes a list and returns a new list that is reversed

def list_sorter (item):
    new_list = item[::-1]
    return new_list

list = [1, 2, 3, 4, 5, 6]
print(list_sorter(list))



out_list = list_sorter(list)
out_list.append(7)
print (list)
print (out_list)
