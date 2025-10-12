"""
Author: Chris Newell
Date: 2025-10-12
File Name: newell_usersp2.py
Description: Hands-On 5.2 (Exercise 7.3) - Python with MongoDB, Part II.
             Connects to MongoDB Atlas and performs CRUD on web335DB.users:
             - Insert a new user
             - Prove insert
             - Update email
             - Prove update
             - Delete the user
             - Prove delete
"""

from pymongo import MongoClient
from pprint import pprint
import datetime

def main():
    # ---- Connect to MongoDB Atlas ----
    uri = "mongodb+srv://christopherjpnewell_db_user:password3@web335cluster.sbfdyc0.mongodb.net/?retryWrites=true&w=majority&appName=web335Cluster"
    client = MongoClient(uri)

    try:
        db = client["web335DB"]
        users = db["users"]
        print("\n== Connected to MongoDB and selected web335DB.users ==")

        # ---- Step 3: Create a new user document ----
        new_user = {
            "employeeId": 2013,
            "firstName": "Joseph",
            "lastName": "Haydn",
            "email": "jhaydn@me.com",
            "dateCreated": datetime.datetime.utcnow()
        }
        insert_result = users.insert_one(new_user)
        print("\n[INSERT] inserted_id:", insert_result.inserted_id)

        # ---- Step 4: Prove the document was created ----
        print("\n[PROOF - FIND ONE BY employeeId=2013]")
        created_doc = users.find_one({"employeeId": 2013})
        pprint(created_doc)

        # ---- Step 5: Update the email address ----
        print("\n[UPDATE] Setting email to 'joseph.haydn@me.com' ...")
        users.update_one(
            {"employeeId": 2013},
            {"$set": {"email": "joseph.haydn@me.com"}}
        )

        # ---- Step 6: Prove the document was updated ----
        print("\n[PROOF - AFTER UPDATE]")
        updated_doc = users.find_one({"employeeId": 2013})
        pprint(updated_doc)

        # ---- Step 7: Delete the document ----
        print("\n[DELETE] Removing employeeId=2013 ...")
        delete_result = users.delete_one({"employeeId": 2013})
        print("Deleted count:", delete_result.deleted_count)

        # ---- Step 8: Prove the document was deleted ----
        print("\n[PROOF - AFTER DELETE] Should be None:")
        deleted_check = users.find_one({"employeeId": 2013})
        pprint(deleted_check)

    finally:
        client.close()
        print("\n== Connection closed ==")


if __name__ == "__main__":
    main()
