from PIL import Image
import os

img_path = r"c:\Users\Yug\Desktop\intern_project_2\public\red-cropped2.png"

if os.path.exists(img_path):
    img = Image.open(img_path)
    print("Cropped Image Size:", img.size)
    
    # Let's downsample it to 100 columns and 20 rows
    cols = 120
    rows = 24
    small_img = img.resize((cols, rows))
    
    # We will print ASCII art representing red vs non-red pixels
    # Non-red pixels are transparent or background (alpha is 0 or red is low)
    # The image is RGBA because Mode was RGBA.
    for r in range(rows):
        line = ""
        for c in range(cols):
            pixel = small_img.getpixel((c, r))
            # If RGBA, check alpha first
            alpha = pixel[3] if len(pixel) == 4 else 255
            red = pixel[0]
            green = pixel[1]
            blue = pixel[2]
            
            # If alpha is low or not red-dominant, print space
            if alpha < 50 or red < 100 or red < 1.2 * green or red < 1.2 * blue:
                line += " "
            else:
                line += "#"
        print(line)
else:
    print("Cropped image not found")
