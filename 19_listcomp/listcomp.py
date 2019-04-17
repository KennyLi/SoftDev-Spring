# Pear -- Jiayang Chen & Kenny Li
# SoftDev2 pd7
# K19 -- Ready, Set, Math!
# 2019-04-17

#A list of all elements in either A or B
def union(a, b):
#    return set(a+b)
    return a + [x for x in b if x not in a] #All elements in a and every element in b that is not in a

print(union([1,2,3],[2,3,4]))
print(union([2,3,4],[1,5,3]))
print(union([2,3,4],[2,3,4]))
                
#A list of all elements in A and B
def intersect(a, b):
    return [x for x in a if x in b] #Loop through all in a and add them to list if it is in b

print(intersect([1,2,3],[2,3,4]))
print(intersect([1,2,3],[4,5,6]))
print(intersect([2,3],[1,2,3,4]))

#A list of all elements in A but not in B
def set_difference(a, b):
    return [x for x in a if x not in b] #Loop through all in a and add them to list if it is not in b

print(set_difference([1,2,3],[2,3,4]))

#A list of all elements in either A or B but not both
def symmetric_difference(a, b):
    return set_difference(union(a,b),intersect(a,b))

print(symmetric_difference([1,2,3],[2,3,4]))

#Makes a tuple for each possible ordered pair
def cartesian_product(a,b):
    return [(x,y) for x in a for y in b]

print(cartesian_product([1,2],["red","white"]))
print(cartesian_product([1,2,24123,4,123,423,41,634],["red","white","orange","blue","yellow"]))
print(cartesian_product([1,2,3],[1,2,3]))

#Returns True if each set has the same elements
def equality(a,b):
    return len(intersect(a,b)) == len(a) and len(a) == len(b)

print(equality([1,2,3],[2,3,1]))
print(equality([1,2,3,4],[1,4,2]))
print(equality([1,2,3],[3,2,1]))