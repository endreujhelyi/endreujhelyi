m1 = 124
m2 = 456
# tell if m1 and m2 are both even numbers

def is_even(x,y):
    if x % 2 == 0 and y % 2 == 0:
        return True
    else:
        return False

print (is_even(m1,m2))
