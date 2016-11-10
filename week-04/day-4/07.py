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
