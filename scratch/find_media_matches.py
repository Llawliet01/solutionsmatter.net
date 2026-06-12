import os
import glob
from datetime import datetime

tempmedia_dir = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.tempmediaStorage"

files = glob.glob(os.path.join(tempmedia_dir, "*"))
# Let's print files created around 17:45 to 17:50 UTC on 2026-06-12
# UTC time of the step is 17:47:37
target_epoch = datetime(2026, 6, 12, 17, 47, 37).timestamp()
print("Target epoch:", target_epoch)

for f in files:
    mtime = os.path.getmtime(f)
    # convert mtime to datetime string
    dt = datetime.fromtimestamp(mtime)
    if dt.year == 2026 and dt.month == 6 and dt.day == 12:
        print(f"{os.path.basename(f)} | Size: {os.path.getsize(f)} | Modified: {dt} | Epoch: {mtime}")
