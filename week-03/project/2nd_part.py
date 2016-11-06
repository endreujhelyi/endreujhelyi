# output = search_palindromes('dog goat dad duck doodle never')
# print(output) # it prints: ['og go', ' dad ', 'd d', 'dood', 'eve']

words_box = ('dog goat dad duck doodle never')

def search_palindromes (box):

    box = box.lower()
    palindrome_box = []

    for i in range(len(box)):
        for j in range(0, i):
            backward = box[j:i + 1]

            if backward == backward[::-1] and len(backward) >= 3:
                palindrome_box.append(backward)

    return palindrome_box

print (search_palindromes(words_box))
