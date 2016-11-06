# output = create_palindrome('pear')
# print(output) # it prints: pearraep

word = "pear"
word2 = "music"
word3 = "superman"
word4 = "1234567890"

def palindrome(item):
    i = -1
    for x in item:
        item += item[i]
        i -= 2
    return item

print (palindrome(word3))



# version 2.0 ------------------------------------|

def palindrome2(item):
    return item + item[::-1]

print (palindrome2(word2))
