import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if 8285 <= i <= 8305:
            try:
                data = json.loads(line)
                print(f"--- Step {i} ---")
                print(f"Source: {data.get('source')}")
                print(f"Type: {data.get('type')}")
                content = data.get('content', '')
                if content:
                    # truncate if extremely long
                    print(f"Content length: {len(content)}")
                    print(f"Content preview: {content[:2000]}")
                print(f"Tool calls: {data.get('tool_calls')}")
            except Exception as e:
                pass
