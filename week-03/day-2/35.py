# create a function that returns it's input factorial

input = 4

# while loop

def factorial_return(fact_num):
    num = 1
    while fact_num > 0:
        num *= fact_num
        fact_num -= 1
    return num

print(factorial_return(input))



# for loop

def factorial_return2(fact_num):
    num = 1
    for i in range (1, fact_num+1):
        num *= i
    return num

print(factorial_return(input))
