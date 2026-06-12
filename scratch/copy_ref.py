import shutil
import os

src = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.tempmediaStorage\media_762745ad-7c93-4760-9bfe-8c2c5a307a4d_1781277343498.png"
dst = r"c:\Users\Yug\Desktop\intern_project_2\public\ref-image.png"

if os.path.exists(src):
    shutil.copy(src, dst)
    print("Copied successfully to", dst)
else:
    print("Source path does not exist:", src)
