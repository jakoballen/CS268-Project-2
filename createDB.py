import sqlite3

conn = sqlite3.connect('database.db')
print("Opened database successfully")
conn.execute('Drop TABLE IF EXISTS MESSAGES')
conn.execute('CREATE TABLE MESSAGES (user_name TEXT, email TEXT, message TEXT)')
print("Table created successfully")
conn.execute('Drop TABLE IF EXISTS NEWS')
conn.execute('CREATE TABLE NEWS (headline TEXT, url TEXT)')
print("Table created successfully")
conn.close()
