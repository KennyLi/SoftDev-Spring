import random

def make_HTML_heading(f):
    txt = f()
    def inner():
            return "<h1>" + txt + "</h1>"
    return inner

@make_HTML_heading
def greet():
    greetings = \
    ["Hello", "Welcome", "AYO!", "Hola", "Bonjour", "Word up"]
    return random.choice(greetings)

# print(greet())

def memoization(fxn):
    calculated = {}
    def inner(index):
        if index in calculated:
            return calculated[index]
        num = fxn(index)
        calculated[index] = num
        return num
    return inner

@memoization
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print(fib(100))
