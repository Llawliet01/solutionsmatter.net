import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if 8288 <= i <= 8292:
            try:
                data = json.loads(line)
                print(f"--- Step {i} ---")
                print(f"Source: {data.get('source')}")
                print(f"Type: {data.get('type')}")
                content = data.get('content')
                if content:
                    print(f"Content: {content[:3000]}")
            except Exception as e:
                pass
