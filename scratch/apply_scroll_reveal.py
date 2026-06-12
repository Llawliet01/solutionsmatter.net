import json
import os

edits_file = r"c:\Users\Yug\Desktop\intern_project_2\scratch\scroll_reveal_edits.json"
project_dir = r"c:\Users\Yug\Desktop\intern_project_2"

with open(edits_file, "r", encoding="utf-8") as f:
    edits = json.load(f)

print(f"Loaded {len(edits)} tool calls.")

def clean_arg(val):
    if not isinstance(val, str):
        return val
    val_strip = val.strip()
    if val_strip.startswith('"') and val_strip.endswith('"'):
        try:
            return json.loads(val_strip)
        except Exception:
            return val_strip[1:-1]
    return val

for edit in edits:
    line = edit["line"]
    tool = edit["tool"]
    filename = edit["file"]
    args = edit["args"]
    
    file_path = os.path.join(project_dir, "src", "components", "industries", filename)
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    chunks = args.get("ReplacementChunks", [])
    if isinstance(chunks, str):
        chunks = clean_arg(chunks)
    if isinstance(chunks, str):
        chunks = json.loads(chunks, strict=False)

        
    print(f"\nProcessing {filename} (line {line} in logs) with {len(chunks)} chunks:")
    
    applied = 0
    skipped = 0
    failed = 0
    
    for i, chunk in enumerate(chunks):
        target_c = clean_arg(chunk.get("TargetContent", ""))
        repl_c = clean_arg(chunk.get("ReplacementContent", ""))
        
        # Skip Case Study card reveal-on-scroll chunks
        if "case-flip-container" in target_c or "case-flip-container" in repl_c:
            print(f"  Chunk {i}: SKIPPED (contains case-flip-container)")
            skipped += 1
            continue
            
        if target_c in content:
            content = content.replace(target_c, repl_c)
            print(f"  Chunk {i}: APPLIED")
            applied += 1
        else:
            # Try to see if it is already there
            if repl_c in content:
                print(f"  Chunk {i}: ALREADY APPLIED")
                applied += 1
            else:
                print(f"  Chunk {i}: FAILED (Target content not found)")
                failed += 1
                
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Finished {filename}: {applied} applied, {skipped} skipped, {failed} failed.")
