import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"

with open(log_path, 'r', encoding='utf-8') as f:
    for i, line in enumerate(f):
        if i == 5997:
            data = json.loads(line)
            for tool in data.get('tool_calls', []):
                args = tool.get('args', {})
                print(args.get('ReplacementContent', args.get('CodeContent', '')))
            break
