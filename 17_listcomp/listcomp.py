# Pear -- Jiayang Chen & Kenny Li
# SoftDev2 pd7
# K17 -- PPFTLCW
# 2019-04-15

firstL = []
for i in range(5):
    firstL.append(str(i*22))

firstLC = [str(i*22) for i in range(5)]

secondL = []
for i in range(5):
    secondL.append(i * 10 + 7)

secondLC = [i * 10 + 7 for i in range(5)]

thirdL = []
for i in range(9):
    thirdL.append((i // 3) * (i % 3))

thirdLC = [(i // 3) * (i % 3) for i in range(9)]

def divisorsL(number):
    factors = []
    for i in range(number):
        if number % (i+1) == 0:
            factors.append(i+1)
    return factors

def divisorsLC(number):
    return [i+1 for i in range(number) if number % (i+1) == 0]

compositesL = []
for i in range(101):
    if len(divisorsLC(i)) > 2:
        compositesL.append(i)

compositesLC = [i for i in range(101) if len(divisorsLC(i)) > 2]


primesL = []
for i in range(101):
    if len(divisorsLC(i)) == 2:
        primesL.append(i)

primesLC = [i for i in range(101) if len(divisorsLC(i)) == 2]

def transposeL(matrix):
    newMatrix = []
    for c in range(len(matrix[0])):
        newRow = []
        newMatrix.append(newRow)
        for r in matrix:
            newRow.append(r[c])
    return newMatrix

def transposeLC(matrix):
    return [[r[c] for r in matrix] for c in range(len(matrix[0]))]

print("-------1-------")
print(firstL)
print(firstLC)

print("-------2-------")
print(secondL)
print(secondLC)

print("-------3-------")
print(thirdL)
print(thirdLC)

print("-------4-------")
print(compositesL)
print(compositesLC)

print("-------5-------")
print(primesL)
print(primesLC)

print("-------6-------")
print(divisorsL(24))
print(divisorsLC(24))

print("-------7-------")
print(transposeL([[1,2,3],[4,5,6],[7,8,9]]))
print(transposeLC([[1,2,3],[4,5,6],[7,8,9]]))


