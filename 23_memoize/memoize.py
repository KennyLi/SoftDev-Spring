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

# 1,1,2,3,5,8,13,21,34,55
print("fib 10 expecting 55")
print(fib(10))

print("fib 7 expecting 13")
print(fib(7))

print("fib 5 expecting 5")
print(fib(5))
