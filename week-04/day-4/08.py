# 8. Given a string, compute recursively a new string where all the 'x' chars have been removed.

text = "abcdex abcdex abcdex abcdex"

def coder(text):
    if len(text) == 0:
        return text
    elif text[0] == 'x' or text[0] == 'X':
        return '' + coder(text[1:])
    else:
        return text[0] + coder(text[1:])

print (coder(text))
