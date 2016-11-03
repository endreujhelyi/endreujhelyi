numbers = [3, 4, 5, 6, 7]
# write a function that filters the odd numbers
# from a list and returns a new list consisting
# only the evens

def filter_odds(n):
    even = []
    for x in n:
        if x % 2 == 0:
            even.append(x)
    print(even)

filter_odds(numbers)
