# 3. Given a non-negative int n,
# return the sum of its digits recursively (no loops).
# Note that mod (%) by 10 yields the rightmost digit (126 % 10 is 6),
# while divide (/) by 10 removes the rightmost digit (126 / 10 is 12).


def returner(n):
    if n < 10:
        return n
    else:
        return (n % 10) + returner(n // 10)


# user_input= input("Give me a non-negative int: ")
print (returner(475))
