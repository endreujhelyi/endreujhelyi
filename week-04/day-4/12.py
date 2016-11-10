# 12. write a recursive function that can add numbers in
# [1, 2, [3, 4], 1, [1, [2, 4]]]


listed = [1, 2, [3, 4], 1, [1, [2, 4]]]

def adder_robot(listq):
    if len(listq) == 0:
        return 0
    elif type(listq[0]) == list:
        return adder_robot(listq[0]) + adder_robot(listq[1:])
    else:
        return listq[0] + adder_robot(listq[1:])

print (adder_robot(listed))
