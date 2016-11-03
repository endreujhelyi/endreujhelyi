# union([4,5,6], [1,2,3])
# expected output: [4,5,6,1,2,3]

# union([4,5,7], [4,1,7])
# expected output: [1,4,5,7]

list1 = [4, 5, 6]
list2 = [1, 2, 3]
list3 = [4, 5, 7]
list4 = [4, 1, 7]

def union(list_a, list_b):
    united = list_a
    for x in range(len(list_b)):
        if list_b[x] not in united:
            united.append(list_b[x])
    print (united)

union(list3, list4)
