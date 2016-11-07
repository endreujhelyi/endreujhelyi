# Create a method that decrypts texts/reversed_zen_lines.txt
def decrypt(file_name):
    new_file = ""
    f1 = open(file_name)
    lines = f1.readlines()
    f1.close()
    for line in lines:
        new_file += line[-2::-1] + "\n"
    return new_file

# print (decrypt('texts/reversed_zen_lines.txt'))
