students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Teodor', 'age': 3, 'candies': 2}
]

# create a function that counts the students that
# has more than 4 candies


# version no.1

def candies(kids):
    candy_kings = []
    for i in range(len(kids)):
        if kids[i]['candies'] > 4:
            candy_kings.append(kids[i]['name'])
    return candy_kings

print (candies(students))


# version no.2

def candies2(kids):
    candy_kings = 0
    for i in range(len(kids)):
        if kids[i]['candies'] > 4:
            candy_kings += 1
    return candy_kings

print (candies2(students))
