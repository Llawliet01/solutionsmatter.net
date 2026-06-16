import re

file_path = r"c:\Users\Yug\Desktop\intern_project_2\src\data\blog.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Replace names
content = content.replace("'Igor MARTY'", "'Ishan Mehta'")
content = content.replace("'Sarah CONNER'", "'Shreya Sen'")
content = content.replace("'Alex MERGER'", "'Alok Mishra'")

# Replace emojis
content = content.replace("❌ Vulnerable Code", "Vulnerable Code")
content = content.replace("✅ Secure Code", "Secure Code")

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Blog data localized successfully!")
