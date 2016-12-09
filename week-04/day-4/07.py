# 7. Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.


text = "abcdex abcdex abcdex abcdex"

def coder(text):
    if len(text) == 0:
        return text
    elif text[0] == 'x':
        return 'y' + coder(text[1:])
    else:
        return text[0] + coder(text[1:])

print (coder(text))



## aniko version

def replace_x(string):
    if string == '':
        return ''
    else:
        return check_letter(string[0]) + replace_x(string[1:])

def check_letter(letter):
    if letter == 'x':
        return 'y'
    else:
        return letter

print(replace_x(text))
