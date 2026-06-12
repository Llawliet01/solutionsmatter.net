import os
import glob

tempmedia_dir = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.tempmediaStorage"

files = glob.glob(os.path.join(tempmedia_dir, "*"))
files.sort(key=os.path.getmtime, reverse=True)

for f in files[:20]:
    print(f"{os.path.basename(f)} | Size: {os.path.getsize(f)} | Modified: {os.path.getmtime(f)}")
