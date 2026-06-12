import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if 8260 <= i <= 8295:
            try:
                data = json.loads(line)
                if data.get("type") == "USER_INPUT":
                    print(f"--- Step {i} ---")
                    print(f"Content: {data.get('content')}")
            except Exception as e:
                pass
