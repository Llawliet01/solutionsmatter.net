import re

file_path = r"c:\Users\Yug\Desktop\intern_project_2\src\data\blog.js"

with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

# Define the date and author combinations
metadata = [
    ("12", "JUNE", "Igor MARTY", "/images/avatar1.png"),
    ("15", "JUNE", "Sarah CONNER", "/images/avatar2.png"),
    ("18", "JUNE", "Alex MERGER", "/images/avatar3.png"),
    ("20", "JUNE", "Igor MARTY", "/images/avatar1.png"),
    ("22", "JUNE", "Sarah CONNER", "/images/avatar2.png"),
    ("24", "JUNE", "Alex MERGER", "/images/avatar3.png"),
    ("26", "JUNE", "Igor MARTY", "/images/avatar1.png"),
    ("28", "JUNE", "Sarah CONNER", "/images/avatar2.png"),
    ("30", "JUNE", "Alex MERGER", "/images/avatar3.png"),
    ("02", "JULY", "Igor MARTY", "/images/avatar1.png"),
    ("05", "JULY", "Sarah CONNER", "/images/avatar2.png")
]

# We want to find the blocks starting with `{` and inject them
banners_found = re.findall(r"banner:\s*'(/images/blog_[^']+)'", content)

for idx, banner_path in enumerate(banners_found):
    day, month, name, avatar = metadata[idx]
    meta_str = f"banner: '{banner_path}',\n    date: {{ day: '{day}', month: '{month}' }},\n    author: {{ name: '{name}', avatar: '{avatar}' }},"
    # Replace target string
    target = f"banner: '{banner_path}',"
    content = content.replace(target, meta_str, 1)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("Blog data updated successfully with author and date fields (with trailing commas)!")
