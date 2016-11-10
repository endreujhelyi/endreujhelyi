# 9. Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".


text = "abcde"

def coder(text):
    if len(text) == 1:
        return text
    else:
        return text[0] + "*" + coder(text[1::])

print (coder(text))
