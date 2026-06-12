from PIL import Image
import os
from collections import Counter

img_path = r"c:\Users\Yug\Desktop\intern_project_2\public\ref-image.png"

if os.path.exists(img_path):
    img = Image.open(img_path)
    pixels = list(img.getdata())
    
    colored_pixels = []
    for p in pixels:
        r, g, b = p[:3]
        # Check standard deviation or max-min difference
        diff = max(r, g, b) - min(r, g, b)
        if diff > 40:
            colored_pixels.append((r, g, b))
            
    print("Found colored pixels:", len(colored_pixels))
    if colored_pixels:
        counter = Counter(colored_pixels)
        print("Top 30 dominant colored pixels:")
        for color, count in counter.most_common(30):
            hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
            print(f"Color: {color} | Hex: {hex_color} | Count: {count}")
            
        # Let's find coordinates of colored pixels
        width, height = img.size
        min_x = width
        max_x = 0
        min_y = height
        max_y = 0
        for idx, p in enumerate(pixels):
            y = idx // width
            x = idx % width
            r, g, b = p[:3]
            if max(r, g, b) - min(r, g, b) > 40:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
        print(f"Colored bounding box: X={min_x} to {max_x}, Y={min_y} to {max_y}")
else:
    print("Image not found")
