import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            content = data.get("content", "")
            if "INSIGHTS" in content.upper() and i < 8285:
                print(f"Line {i}: {content[:150]}...")
        except Exception as e:
            pass
