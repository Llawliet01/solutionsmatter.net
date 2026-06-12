import os
import glob
from datetime import datetime

artifacts_dir = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d"

files = glob.glob(os.path.join(artifacts_dir, "*"))
for f in files:
    if os.path.isfile(f):
        mtime = os.path.getmtime(f)
        dt = datetime.fromtimestamp(mtime)
        # Check if modified since June 8, 2026
        if dt.year == 2026 and dt.month == 6 and dt.day >= 8:
            print(f"{os.path.basename(f)} | Size: {os.path.getsize(f)} | Modified: {dt} | Epoch: {mtime}")
