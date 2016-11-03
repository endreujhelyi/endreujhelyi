numbers = [3, 4, 5, 6, 7]
# write a function that reverses a list


# for loop

def reverse_list2(list):
    rev_new = []
    for i in reversed(list):
        rev_new.append(i)
    return rev_new

print(reverse_list2(numbers))



# copy.copy import

import copy

def reverse_list3(list):
    x = copy.copy(list)
    x.reverse()
    return x

print(reverse_list3(numbers))



# easy loop

def reverse_list(n):
    rev_new = n.reverse()
    return rev_new

reverse_list(numbers)
print(numbers)
