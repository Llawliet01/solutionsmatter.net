import json

log_path = r"C:\Users\Yug\.gemini\antigravity-ide\brain\762745ad-7c93-4760-9bfe-8c2c5a307a4d\.system_generated\logs\transcript.jsonl"
target_files = [
    "HealthcareIndustry.js",
    "FinanceBankingIndustry.js",
    "ManufacturingIndustry.js",
    "RetailEcommerceIndustry.js",
    "SaasTechnologyIndustry.js",
    "industry-pages.css"
]

with open(log_path, "r", encoding="utf-8") as f:
    for i, line in enumerate(f):
        if i >= 6038:
            break
        try:
            data = json.loads(line)
            tool_calls = data.get("tool_calls", [])
            for call in tool_calls:
                args = call.get("args", {})
                target = args.get("TargetFile", args.get("Target", ""))
                # Check if this is one of our target files
                for tf in target_files:
                    if tf in target:
                        print(f"Line {i} | Tool: {call.get('name')} | Target: {tf}")
        except Exception as e:
            pass

