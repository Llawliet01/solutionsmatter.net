from PIL import Image
from collections import Counter
import os

img_path = r"c:\Users\Yug\Desktop\intern_project_2\public\ref-image2.png"

if os.path.exists(img_path):
    img = Image.open(img_path)
    print("Format:", img.format)
    print("Size:", img.size)
    print("Mode:", img.mode)
    
    pixels = list(img.getdata())
    
    # Let's count colors that have strong color saturation (non-gray)
    colored_pixels = []
    for p in pixels:
        r, g, b = p[:3]
        if max(r, g, b) - min(r, g, b) > 30:
            colored_pixels.append((r, g, b))
            
    print("Colored pixels count:", len(colored_pixels))
    counter = Counter(colored_pixels)
    print("Top 20 non-gray colors:")
    for color, count in counter.most_common(20):
        hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
        print(f"Color: {color} | Hex: {hex_color} | Count: {count}")
        
    # Let's also check if there is an outline/stroke or fill
    # Print the bounding box of colored pixels
    width, height = img.size
    min_x, max_x = width, 0
    min_y, max_y = height, 0
    for idx, p in enumerate(pixels):
        y = idx // width
        x = idx % width
        r, g, b = p[:3]
        if max(r, g, b) - min(r, g, b) > 30:
            if x < min_x: min_x = x
            if x > max_x: max_x = x
            if y < min_y: min_y = y
            if y > max_y: max_y = y
            
    print(f"Colored bounding box: X={min_x} to {max_x}, Y={min_y} to {max_y}")
    if max_x > min_x and max_y > min_y:
        cropped = img.crop((min_x, min_y, max_x, max_y))
        cropped.save(r"c:\Users\Yug\Desktop\intern_project_2\public\red-cropped2.png")
        print("Cropped colored region saved to public/red-cropped2.png")
else:
    print("Image not found")
