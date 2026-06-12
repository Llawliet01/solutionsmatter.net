import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

def show_line(line_num):
    with open(log_path, "r", encoding="utf-8") as f:
        for i, line in enumerate(f):
            if i == line_num:
                data = json.loads(line)
                print(json.dumps(data, indent=2))
                break

print("--- Line 5882 ---")
show_line(5882)



