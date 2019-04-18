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


def total_frequency(words, wordlist):
    return reduce((lambda x,y: x + y),[frequency(words,word) for word in wordlist])

print(total_frequency(words,tests))
                       

def most_frequent(words):
    return reduce((lambda x,y: x if frequency(words,x) > frequency(words,y) else y), words)

print(most_frequent(words))