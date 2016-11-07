# Create a method that decrypts the texts/duplicated_chars.txt

def decrypt(file_name):
    new_file = ""
    f1 = open(file_name)
    lines = f1.readlines()
    f1.close()
    for line in lines:
        for x in range(0, len(line), 2):
            new_file += line[x]
    return new_file
