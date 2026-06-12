import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if 1610 <= i <= 1640:
            try:
                data = json.loads(line)
                print(f"--- Line {i} | Type: {data.get('type')} ---")
                tool_calls = data.get("tool_calls", [])
                if tool_calls:
                    for tc in tool_calls:
                        if "globals.css" in str(tc.get("args")):
                            print(f"  Tool: {tc.get('name')}")
                            # print target content and replacement content
                            args = tc.get('args', {})
                            print(f"  TargetContent: {args.get('TargetContent')}")
                            print(f"  ReplacementContent: {args.get('ReplacementContent')}")
            except Exception as e:
                pass
