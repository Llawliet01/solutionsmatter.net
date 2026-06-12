import re
import os

files_to_revert = [
    r"c:\Users\Yug\Desktop\intern_project_2\src\components\industries\HealthcareIndustry.js",
    r"c:\Users\Yug\Desktop\intern_project_2\src\components\industries\FinanceBankingIndustry.js",
    r"c:\Users\Yug\Desktop\intern_project_2\src\components\industries\ManufacturingIndustry.js",
    r"c:\Users\Yug\Desktop\intern_project_2\src\components\industries\RetailEcommerceIndustry.js",
    r"c:\Users\Yug\Desktop\intern_project_2\src\components\industries\SaasTechnologyIndustry.js"
]

css_file = r"c:\Users\Yug\Desktop\intern_project_2\src\app\industry-pages.css"

# 1. Revert components
for file_path in files_to_revert:
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    # Remove the Scroll reveal useEffect
    # We match:
    #   // Scroll reveal Intersection Observer
    #   useEffect(() => {
    #     ...
    #   }, []);
    pattern_ue = r"\s*// Scroll reveal Intersection Observer\s*useEffect\(\(\) => \{[\s\S]*?\}, \[\]\);"
    content_new, count_ue = re.subn(pattern_ue, "", content)
    if count_ue > 0:
        print(f"Removed scroll reveal useEffect from {os.path.basename(file_path)}")
    else:
        print(f"WARNING: scroll reveal useEffect NOT found in {os.path.basename(file_path)}")
        
    # Remove reveal-on-scroll and delay-* classes
    # Matches:
    # - reveal-on-scroll
    # - delay-100, delay-200, etc.
    # - delay-${(i % 4) * 100} or delay-${(idx % 4) * 100} or delay-${(i%4)*100}
    # - extra spaces around these classes
    
    # Let's remove reveal-on-scroll
    content_new = re.sub(r"\breveal-on-scroll\b", "", content_new)
    
    # Remove delay-100 to delay-500
    content_new = re.sub(r"\bdelay-\d+\b", "", content_new)
    
    # Remove dynamic delay-xxx
    content_new = re.sub(r"\bdelay-\$\{[^}]+\}", "", content_new)
    
    # Clean up className formatting:
    # Matches multiple spaces inside quotes or backticks and collapses them to a single space
    # And removes trailing/leading spaces inside className="..." or className={`...`}
    
    # 1. Inside regular quotes: className="  abc   def  " -> className="abc def"
    content_new = re.sub(r'className="([^"]*)"', lambda m: 'className="' + ' '.join(m.group(1).split()) + '"', content_new)
    
    # 2. Inside backticks: className={`  abc   def  `} -> className={`abc def`}
    content_new = re.sub(r'className=\{\`([^`]*)\`\}', lambda m: 'className={`' + ' '.join(m.group(1).split()) + '`}', content_new)
    
    # 3. Strip empty classNames: className="" or className={``}
    content_new = re.sub(r'className=""\s*', "", content_new)
    content_new = re.sub(r'className=\{\`\`\}\s*', "", content_new)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content_new)
    print(f"Cleaned up classes in {os.path.basename(file_path)}")

# 2. Revert CSS file
if os.path.exists(css_file):
    with open(css_file, "r", encoding="utf-8") as f:
        css_content = f.read()
        
    # Revert Case Study 3D Card Flip CSS to original state
    # We find the section: /* 1. 3D Card Flipping for Case Studies */ ... /* Custom Case Card Front Layout styles */
    css_flip_pattern = r"/\* 1\. 3D Card Flipping for Case Studies \*/[\s\S]*?(?=\n/\* Custom Case Card Front Layout styles \*/)"
    
    original_css_flip = """/* 1. 3D Card Flipping for Case Studies */
.case-flip-container {
  perspective: 1500px;
  width: 100%;
}
.case-card-inner {
  position: relative;
  width: 100%;
  transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
}
.case-flip-container.flipped .case-card-inner {
  transform: rotateY(180deg);
}
.case-card-front, .case-card-back {
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  border-radius: 24px;
  overflow: hidden;
}
.case-card-front {
  position: absolute;
  inset: 0;
  z-index: 2;
  transform: rotateY(0deg);
  transition: z-index 0s 0.3s;
}
.case-card-back {
  position: relative;
  z-index: 1;
  transform: rotateY(180deg);
  transition: z-index 0s 0.3s;
}
.case-flip-container.flipped .case-card-front {
  z-index: 1;
}
.case-flip-container.flipped .case-card-back {
  z-index: 2;
}

"""
    css_content_new, count_css_flip = re.subn(css_flip_pattern, original_css_flip, css_content)
    if count_css_flip > 0:
        print("Reverted 3D Card Flip CSS styles to original state.")
    else:
        print("WARNING: 3D Card Flip CSS styles pattern NOT found.")
        
    # Remove the Scroll Reveal CSS styles from the bottom
    css_scroll_pattern = r"/\* --- Scroll Reveal Animations --- \*/[\s\S]*$"
    css_content_new, count_css_scroll = re.subn(css_scroll_pattern, "", css_content_new)
    if count_css_scroll > 0:
        print("Removed Scroll Reveal CSS styles from the bottom of industry-pages.css.")
    else:
        print("WARNING: Scroll Reveal CSS styles pattern NOT found.")
        
    with open(css_file, "w", encoding="utf-8") as f:
        f.write(css_content_new)
else:
    print(f"CSS file not found: {css_file}")
