for i in range (0, 9):
    if i <= 4:
        i += 1
        print(i*'*')
    else:
        i = abs(-9 + i)
        print(i*'*')
