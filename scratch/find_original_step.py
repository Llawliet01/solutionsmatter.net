import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        try:
            data = json.loads(line)
            content = data.get("content", "")
            if data.get("type") == "USER_INPUT" and "what do u see in this image" in content:
                print(f"Line {i} | Step Index: {data.get('step_index')}")
                # Print the keys or first level elements of data
                for k, v in data.items():
                    if k != "content":
                        print(f"  {k}: {v}")
                    else:
                        print(f"  content: {v[:200]}")
        except Exception as e:
            pass
