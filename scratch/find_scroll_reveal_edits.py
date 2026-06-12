import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"
output_file = r"c:\Users\Yug\Desktop\intern_project_2\scratch\scroll_reveal_edits.json"
target_files = [
    "HealthcareIndustry.js",
    "FinanceBankingIndustry.js",
    "ManufacturingIndustry.js",
    "RetailEcommerceIndustry.js",
    "SaasTechnologyIndustry.js"
]

results = []

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if i < 6038:
            continue
        try:
            data = json.loads(line)
            tool_calls = data.get("tool_calls", [])
            for call in tool_calls:
                args = call.get("args", {})
                target = args.get("TargetFile", args.get("Target", ""))
                for tf in target_files:
                    if tf in target:
                        results.append({
                            "line": i,
                            "tool": call.get("name"),
                            "file": tf,
                            "args": args
                        })
        except Exception:
            pass

with open(output_file, "w", encoding="utf-8") as out:
    json.dump(results, out, indent=2)

print(f"Wrote {len(results)} results to {output_file}")

