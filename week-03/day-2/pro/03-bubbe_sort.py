# bubble_sort([3,9,4,5,2,1])
# expected output: [1,2,3,4,5,9]

boo = [3,9,4,5,2,1]

def bubble_bubble(list_bubble):
    for i in range(len(list_bubble)):
        for x in range(len(list_bubble)-1):
            if list_bubble[x] > list_bubble[x+1]:
                list_bubble[x], list_bubble[x+1] = list_bubble[x+1], list_bubble[x]
    return list_bubble

print(bubble_bubble(boo))



# VERSION 2.0 -- not completed yet!

def bubble_bubble2(list_bubble):
    sorted = False
    while not sorted:
        sorted = True
        for x in range(len(list_bubble)):
            if list_bubble[x] > list_bubble[x + 1]:
                sorted = False
                hold = list_bubble[x + 1]
                list_bubble[x + 1] = list_bubble[x]
                list_bubble[x] = hold

print(bubble_bubble2(boo))
