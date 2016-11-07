# Create a method that decrypts texts/encoded_zen_lines.txt
def decrypt(file_name):
    new_file = ""
    f1 = open(file_name)
    lines = f1.readlines()
    f1.close()
    for line in lines:
        for x in line:
            if ord(x) != 32 and x != "\n":
                new_file += chr(ord(x) - 1)
            else:
                new_file += x
    return new_file


print(decrypt('texts/encoded_zen_lines.txt'))
