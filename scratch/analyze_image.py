from PIL import Image
from collections import Counter
import os

img_path = r"c:\Users\Yug\Desktop\intern_project_2\public\ref-image.png"

if os.path.exists(img_path):
    img = Image.open(img_path)
    print("Format:", img.format)
    print("Size:", img.size)
    print("Mode:", img.mode)
    
    # Resize to speed up color counting
    small_img = img.resize((150, 150))
    pixels = list(small_img.getdata())
    
    # Count RGB colors
    rgb_pixels = []
    for p in pixels:
        if len(p) >= 3:
            rgb_pixels.append(p[:3])
            
    counter = Counter(rgb_pixels)
    print("Top 20 dominant colors:")
    for color, count in counter.most_common(20):
        # Format as Hex
        hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
        print(f"Color: {color} | Hex: {hex_color} | Count: {count}")
else:
    print("Image not found")
