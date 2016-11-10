# 5. We have a number of bunnies and each bunny has two big floppy ears.
# We want to compute the total number of ears across all the bunnies
# recursively (without loops or multiplication).

def floppy_ears(n):
    if n == 1:
        return n * 2
    else:
        return floppy_ears(n-1) + 2

print (floppy_ears(123))
