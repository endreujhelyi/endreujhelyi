# binary_search([4,5,6], 6)
# expected output: true

# binary_search([4,5,7], 6)
# expected output: false

num = 6
list1 = [4, 5, 6]
list2 = [4, 5, 7]

def binary_search(list_binary, number):
    first_part = 0
    second_part = len(list_binary) - 1
    digged = False

    while first_part <= second_part and not digged:
        middle = (first_part + second_part) // 2
        if list_binary[middle] == number:
            digged = True
        else:
            if number < list_binary[middle]:
                second_part = middle - 1
            else:
                first_part = middle + 1

    return digged

print (binary_search(list1, num))
