# Grayscale -- Kenny Li & Soojin Choi
# SoftDev2 pd8
# K06 -- Yummy Mongo Py
# 2019-02-28

import pymongo

SERVER_ADDR = "157.230.230.46"
connection = pymongo.MongoClient(SERVER_ADDR)
db = connection.test
collection = db.restaurants

def specify_borough(borough):
    return list(collection.find({"borough":borough}))

def specify_zip(zipcode):
    return list(collection.find({"address.zipcode":zipcode}))

def specify_zipgrade(zipcode, grade):
    query = {"$and":
                [
                    {"address.zipcode":zipcode}, 
                    {"grades.0.grade":grade}
                ]
            }
    return list(collection.find(query))

def specify_zipscore(zipcode, score):
    query = {"$and":
                [
                    {"address.zipcode":zipcode}, 
                    {"grades.0.score": {"$lt":score}}
                ]
            }
    return list(collection.find(query))

def specify_DunkinDonuts(zipcode):
    query = {"$and":
                [
                    {"name":"Dunkin Donuts"}, 
                    {"address.zipcode":zipcode}
                ]
            }
    return list(collection.find(query))

print(specify_borough("Brooklyn"))
print(specify_zip("10282"))
print(specify_zipgrade("10282","A"))
print(specify_zipscore("10282",10))
print(specify_DunkinDonuts("11223"))