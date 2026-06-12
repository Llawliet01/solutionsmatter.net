import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if 8180 <= i <= 8205:
            try:
                data = json.loads(line)
                tool_calls = data.get("tool_calls", [])
                if tool_calls:
                    for tc in tool_calls:
                        if "BlogHero3D.js" in str(tc.get("args")):
                            print(f"Line {i} | Tool: {tc.get('name')}")
                            print(json.dumps(tc.get('args'), indent=2))
            except Exception as e:
                pass
