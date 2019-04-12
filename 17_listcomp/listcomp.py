firstL = []
for i in range(5):
    firstL.append(str(i*22))

firstLC = [str(i*22) for i in range(5)]

secondL = []
for i in range(5):
    secondL.append(i * 10 + 7)

secondLC = [i * 10 + 7 for i in range(5)]

def divisors(number):
    factors = []
    for i in range(number):
        if number % (i+1) == 0:
            factors.append(i+1)
    return factors

def divisors_lc(number):
    return [i+1 for i in range(number) if number % (i+1) == 0]

def composites(number):
    c = []
    for i in range(100):
        if len(divisors(i)) > 2:
            c.append(i)
    return c

def composites_lc(number):
    return [i for i in range(100) if len(divisors(i)) > 2]

def primes():
    p = []
    for i in range(100):
        if len(divisors(i)) == 2:
            p.append(i)
    return p

def primes_lc():
    return [i for i in range(100) if len(divisors(i)) == 2]

print(primes_lc())

def transpose(matrix):
    ans = []
    for c in range(len(matrix[0])):
        new_row = []
        ans.append(new_row)
        for r in matrix:
            new_row.append(r[c])
    return ans

def transpose_lc(matrix):
    return [[r[c] for r in matrix] for c in range(len(matrix[0]))]
print(transpose_lc([[1,2,3],[4,5,6],[7,8,9]]))

weird_wonky_pattern = []
for i in range(9):
    weird_wonky_pattern.append((i // 3) * (i % 3))

print([(i // 3) * (i % 3) for i in range(9)])
print(weird_wonky_pattern)
