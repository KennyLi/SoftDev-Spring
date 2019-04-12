# Kenny Li
# SoftDev2 pd7
# K16 -- Do You Even List?
# 2019-04-12

# Write a function that uses list comprehension to return whether a password meets a minimum threshold: it contains a mixture of upper- and lowercase letters, and at least one number
# Write a function that uses list comprehension to return a password's strength rating. This function should return a lower integer for a weak password and a higher integer for a stronger password. (Suggested scale: 1-10) Consider these criteria:
# mixture of upper- and lower-case
# inclusion of numerals
# inclusion of these non-alphanumeric chars


upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
lower = "abcdefghijklmnopqrstuvwxyz"
nums = "0123456789"
special = ".?!&#,;:-_*"

#Criteria - At least one uppercase, lowercase, numeral and number of uppercase + lowercase is at least 6
#Minimum Length is 8
def goodPassword(password):
    countUpper = len([x for x in password if x in upper])
    countLower = len([x for x in password if x in lower])
    countNums = len([x for x in password if x in nums])
    return countUpper > 0 and \
           countLower > 0 and \
           countNums > 0 and \
           countUpper + countLower > 6

print (goodPassword("asdvavDFASD123"))
print (goodPassword("aA1"))

#Criteria - 1 for lowercase, 1.5 for uppercase and numeral, 2 for special char
#sum the character's value and multiplied by 2/3 to fit a 1-10 scale after rounding
def ratePassword(password):
    rating = round(sum([1 if x in lower else 1.5 if x in upper else 1.5 if x in nums else 2 for x in password]) * 2 / 3)
    if rating <= 10:
        return rating
    else:
        return 10
    
print (ratePassword("asdvavDFASD123"))
print (ratePassword("aA1"))
print (ratePassword("a"))