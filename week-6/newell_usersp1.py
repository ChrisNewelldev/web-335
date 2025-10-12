"""
Author: Chris Newell
Date: 2025-10-12
File Name: newell_usersp1.py
Description: Hands-On 4.2 (Exercise 6.3) - Python with MongoDB, Part I.
             Connects to MongoDB Atlas and performs basic find queries
             against the web335DB.users collection.
"""

from pymongo import MongoClient
from pprint import pprint

def main():
    # ---- 1) Build a connection string and connect to MongoDB Atlas ----
    # NOTE: Uses the credentials you provided in this course.
    uri = "mongodb+srv://christopherjpnewell_db_user:password3@web335cluster.sbfdyc0.mongodb.net/?retryWrites=true&w=majority&appName=web335Cluster"
    client = MongoClient(uri)

    try:
        # Access the course database
        db = client["web335DB"]
        users = db["users"]

        print("\n== Connected to MongoDB and selected web335DB.users ==")

        # ---- 2) Display all documents (projection: firstName, lastName) ----
        print("\nAll users (first & last name only):")
        for doc in users.find({}, {"_id": 0, "firstName": 1, "lastName": 1}):
            pprint(doc)

        # ---- 3) Display a document where the employeeId is 1011 ----
        print("\nUser with employeeId 1011:")
        doc_emp = users.find_one({"employeeId": 1011})
        pprint(doc_emp)

        # ---- 4) Display a document where the lastName is 'Mozart' ----
        print("\nUser with lastName 'Mozart':")
        doc_mozart = users.find_one({"lastName": "Mozart"})
        pprint(doc_mozart)

    finally:
        # Always close the client
        client.close()
        print("\n== Connection closed ==")


if __name__ == "__main__":
    main()
