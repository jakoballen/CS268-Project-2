import sqlite3

conn = sqlite3.connect('database.db')
print("Opened database successfully")
conn.execute('Drop TABLE IF EXISTS MESSAGES')
conn.execute('CREATE TABLE MESSAGES (user_name TEXT, email TEXT, message TEXT)')
print("Table created successfully")
conn.close()