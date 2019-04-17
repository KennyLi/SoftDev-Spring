# Pear -- Jiayang Chen & Kenny Li
# SoftDev2 pd7
# K18 -- Getting Clever with List Comprehension
# 2019-04-16

def triple(number):
    return [(x,y,z) for x in range(1,number) for y in range(x, number) for z in range(y,number) if x**2 + y**2 == z**2]

print(triple(100))

def quicksort(l):
    return l if (len(l) <= 1) else (quicksort([x for x in l[1:] if x <= l[0]]) + [l[0]] + quicksort([x for x in l[1:] if x > l[0]]))

print(quicksort([1,7,3,6,2,5,4,9,8,0]))