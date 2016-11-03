students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]
# create a function that takes a list of students,
# then returns how many candies are own by students
# under 10

def ill_find_you(inventory):
    limit = 10
    candies_sum = 0
    for x in inventory:
        if x['age'] < limit:
            candies_sum += x['candies']
    return candies_sum

print(ill_find_you(students))
