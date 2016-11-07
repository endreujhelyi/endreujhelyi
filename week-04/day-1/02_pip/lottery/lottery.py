# Create a method that returns the five most frequent lottery number in a pretty table format

from collections import Counter
from prettytable import PrettyTable

def five_most_frequent(file_name):

    opener = open(file_name)
    lines = opener.readlines()
    opener.close()
    all_numbers = []
    frequent_numbers = []

    for numbers in lines:
        all_numbers += numbers.rstrip().split(';')[-5::]

    counter = Counter(all_numbers)
    most_common = counter.most_common()

    x = 0
    while x < 5:
        frequent_numbers.append(most_common[x])
        x += 1

    table = PrettyTable(["Numbers", "Frequency"])
    x = 0
    while x < 5:
        table.add_row(frequent_numbers[x])
        x += 1

    return table

print (five_most_frequent('otos.csv'))
