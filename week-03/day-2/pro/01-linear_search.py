# linear_search([4,5,6], 6)
# expected output: 2

# linear_search([4,5,7], 6)
# expected output: -1

list1 = [4, 5, 6]
list2 = [4, 5, 7]

num = 6



# version 1.0

def linear_search(list, number):
    position = 0
    for x in list:
        if number == x:
            return position
        else:
            position += 1
    return -1

print(linear_search(list2, num))



# version 2.0

def linear_search(list, number):
    for x in range(len(list)):
        if number == list[x]:
            return x
    return -1

print(linear_search(list1, num))
