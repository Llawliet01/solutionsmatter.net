import shutil
import os

src = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\media__1781286448644.png"
dst = r"c:\Users\Yug\Desktop\intern_project_2\public\ref-image2.png"

if os.path.exists(src):
    shutil.copy(src, dst)
    print("Copied successfully to", dst)
else:
    # Try tempmediaStorage too
    src2 = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.tempmediaStorage\media__1781286448644.png"
    if os.path.exists(src2):
        shutil.copy(src2, dst)
        print("Copied successfully from tempmediaStorage to", dst)
    else:
        print("Source path does not exist:", src)
