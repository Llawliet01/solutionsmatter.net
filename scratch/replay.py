import json
import os

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"
backup_dir = r"C:\Users\Yug\Desktop\intern_project_2\scratch\backup"

os.makedirs(backup_dir, exist_ok=True)

target_files = [
    "HealthcareIndustry.js",
    "FinanceBankingIndustry.js",
    "ManufacturingIndustry.js",
    "RetailEcommerceIndustry.js",
    "SaasTechnologyIndustry.js",
    "industry-pages.css"
]

files = {}

def clean_arg(val):
    if not isinstance(val, str):
        return val
    val_strip = val.strip()
    if val_strip.startswith('"') and val_strip.endswith('"'):
        try:
            return json.loads(val_strip)
        except Exception:
            # Fallback
            return val_strip[1:-1]
    return val

with open(log_path, "r", encoding="utf-8") as f:
    for line_num, line in enumerate(f):
        if line_num >= 6038:
            print(f"Reached line {line_num}. Stopping replay.")
            break
        try:
            data = json.loads(line)
            # Only replay completed steps
            if data.get("status") != "DONE":
                continue
            tool_calls = data.get("tool_calls", [])
            for call in tool_calls:
                name = call.get("name")
                args = call.get("args", {})
                
                target = clean_arg(args.get("TargetFile", args.get("Target", "")))
                if not target:
                    continue
                
                # Normalize target name
                basename = os.path.basename(target)
                if basename not in target_files:
                    continue
                
                if name == "write_to_file":
                    code = clean_arg(args.get("CodeContent", ""))
                    files[basename] = code
                    print(f"Line {line_num} | write_to_file: {basename} ({len(code)} bytes)")
                    
                elif name == "replace_file_content":
                    target_content = clean_arg(args.get("TargetContent", ""))
                    replacement_content = clean_arg(args.get("ReplacementContent", ""))
                    if basename in files:
                        orig = files[basename]
                        if target_content in orig:
                            files[basename] = orig.replace(target_content, replacement_content)
                            print(f"Line {line_num} | replace_file_content: {basename} (Success)")
                        else:
                            print(f"Line {line_num} | replace_file_content WARNING: target not found in {basename}")
                    else:
                        print(f"Line {line_num} | replace_file_content WARNING: {basename} not initialized yet")
                        
                elif name == "multi_replace_file_content":
                    chunks = args.get("ReplacementChunks", [])
                    if isinstance(chunks, str):
                        chunks = clean_arg(chunks)
                    if isinstance(chunks, str):
                        try:
                            chunks = json.loads(chunks)
                        except Exception:
                            print(f"Line {line_num} | Error decoding chunks string for {basename}")
                            continue
                            
                    if basename in files:
                        orig = files[basename]
                        success_count = 0
                        for chunk in chunks:
                            target_c = clean_arg(chunk.get("TargetContent", ""))
                            repl_c = clean_arg(chunk.get("ReplacementContent", ""))
                            if target_c in orig:
                                orig = orig.replace(target_c, repl_c)
                                success_count += 1
                        files[basename] = orig
                        print(f"Line {line_num} | multi_replace_file_content: {basename} ({success_count}/{len(chunks)} chunks succeeded)")
                    else:
                        print(f"Line {line_num} | multi_replace_file_content WARNING: {basename} not initialized yet")
        except Exception as e:
            print(f"Error at line {line_num}: {e}")

# Write replayed files to backup directory
for name, content in files.items():
    out_path = os.path.join(backup_dir, name)
    with open(out_path, "w", encoding="utf-8") as out_f:
        out_f.write(content)
    print(f"Wrote backup file: {out_path} ({len(content)} bytes)")
