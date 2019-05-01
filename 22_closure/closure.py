#Kenny Li
#SoftDev2 pd67
#K22 -- Closure
#2019-05-1

def repeat(word):
    def occurence(number):
        print (word * number)
    return occurence

r1 = repeat("hello")
r1(2)

r2 = repeat("goodbye")
r2(2)

repeat("cool")(3)

def make_counter():
    x = 0
    def increment(boolean = True):
        nonlocal x
        if boolean:
            x += 1
        print(x)
    return increment

ctr1 = make_counter()
ctr1()
ctr1()

ctr2 = make_counter()
ctr2()
ctr1()
ctr2()

ctr2(False)
ctr2(False)