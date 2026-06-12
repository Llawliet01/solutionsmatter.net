import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            content = data.get("content", "")
            if any(w in content.lower() for w in ["red text", "red background", "giant red", "text of img", "text of image"]):
                print(f"Line {i} | Type: {data.get('type')} | Content: {content[:200]}...")
        except Exception as e:
            pass
