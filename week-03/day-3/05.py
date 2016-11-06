# Create a `Stack` class that stores elements
# It should have a `size` method that returns number of elements it has
# It should have a `push` method that adds an element to the stack
# It should have a `pop` method that returns the last element form the stack and also deletes it from it

# please don`t use the built in methods

class Stack():

    aldi_storage = []

    def size (self):
        aldi_stock = 0
        for x in self.aldi_storage:
            aldi_stock += 1
        return aldi_stock

    def push (self, product):
        self.aldi_storage += [product]

    def pop (self):
        last_item = self.aldi_storage[-1]
        self.aldi_storage = self.aldi_storage[:-1]
        return last_item


element = Stack()

element.push("bread")
element.push("soy milk")
element.push("rice")
element.push("beam")

print (element.pop())
