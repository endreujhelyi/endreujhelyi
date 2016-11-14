from collections import Counter



# Write a function, that takes two strings and returns a boolean value
# based on if the two strings are Anagramms or not.

def anagramm (str1, str2):
    str1_list = []
    str2_list = []
    for i in str1:
        if not i == " ":
            str1_list += i.lower()
    for i in str2:
        if not i == " ":
            str2_list += i.lower()

    return sorted(str1_list) == sorted(str2_list)



# Write a function, that takes a string as an argument and returns a dictionary
# with all letters in the string as keys, and numbers as values that shows how many
# occurrences there are.

def count_letters(strx):
    string_final = ""      #testing of empty string missing

    for i in strx:
        if i.isalpha():
            string_final += i.lower()

    return Counter(string_final)

print (count_letters(" "))
