import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if 8120 <= i <= 8140:
            try:
                data = json.loads(line)
                print(f"--- Line {i} | Type: {data.get('type')} ---")
                content = data.get('content', '')
                if content:
                    print(f"Content: {content[:1500]}")
            except Exception as e:
                pass
