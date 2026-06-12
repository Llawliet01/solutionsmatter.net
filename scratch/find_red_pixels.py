from PIL import Image
import os
from collections import Counter

img_path = r"c:\Users\Yug\Desktop\intern_project_2\public\ref-image.png"

if os.path.exists(img_path):
    img = Image.open(img_path)
    # Get all pixels
    pixels = list(img.getdata())
    
    red_pixels = []
    for p in pixels:
        r, g, b = p[:3]
        # Red is dominant: R is high, G and B are low relative to R
        if r > 100 and r > 1.3 * g and r > 1.3 * b:
            red_pixels.append((r, g, b))
            
    print("Found red-like pixels:", len(red_pixels))
    if red_pixels:
        # Counter of red pixels
        counter = Counter(red_pixels)
        print("Top 10 dominant red colors:")
        for color, count in counter.most_common(10):
            hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
            print(f"Color: {color} | Hex: {hex_color} | Count: {count}")
            
        # Also let's find the bounding box of these red pixels to see where they are
        width, height = img.size
        min_x = width
        max_x = 0
        min_y = height
        max_y = 0
        
        for idx, p in enumerate(pixels):
            y = idx // width
            x = idx % width
            r, g, b = p[:3]
            if r > 100 and r > 1.3 * g and r > 1.3 * b:
                if x < min_x: min_x = x
                if x > max_x: max_x = x
                if y < min_y: min_y = y
                if y > max_y: max_y = y
                
        print(f"Red bounding box: X={min_x} to {max_x}, Y={min_y} to {max_y}")
        # Crop the bounding box of red pixels and print out details
        if max_x > min_x and max_y > min_y:
            cropped = img.crop((min_x, min_y, max_x, max_y))
            cropped.save(r"c:\Users\Yug\Desktop\intern_project_2\public\red-cropped.png")
            print("Saved cropped red region to public/red-cropped.png")
            
            # Let's count colors inside cropped region
            cropped_pixels = list(cropped.getdata())
            cropped_red_pixels = [p[:3] for p in cropped_pixels if p[0] > 100 and p[0] > 1.3*p[1] and p[0] > 1.3*p[2]]
            counter_cropped = Counter(cropped_red_pixels)
            print("Top 5 red colors in cropped region:")
            for color, count in counter_cropped.most_common(5):
                hex_color = "#{:02x}{:02x}{:02x}".format(color[0], color[1], color[2])
                print(f"Color: {color} | Hex: {hex_color} | Count: {count}")
else:
    print("Image not found")
