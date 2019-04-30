# Pear -- Jiayang Chen & Kenny Li
# SoftDev2 pd7
# K20 -- Reductio ad Absurdum
# 2019-04-18

from functools import reduce

f = open('book.txt')
words = f.read().split()
words = [word.lower().strip('-".,;!?:[](){}<>\|!@#$%^&*_=+') for word in words]
tests = ['the','bro','hello','about','is','be','to']

def frequency(words, word):
    return words.count(word.lower())

print(frequency(words,tests[0]))


def total_frequency(words, phrase):
    wordlist = phrase.lower().split()
    return reduce((lambda x,y: x+y), [1 if words[i:i+len(wordlist)] == wordlist else 0 \
                                          for i in range(len(words) - len(wordlist))])
print(total_frequency(words,'your time iS uP'))
print(total_frequency(words,'holy moly'))
print(total_frequency(words,'i saw'))
print(total_frequency(words,'not quite'))

def most_frequent(words):
    return reduce((lambda x,y: x if frequency(words,x) > frequency(words,y) else y), words)

print(most_frequent(words))
