import os

target_files = [
    "HealthcareIndustry.js",
    "FinanceBankingIndustry.js",
    "ManufacturingIndustry.js",
    "RetailEcommerceIndustry.js",
    "SaasTechnologyIndustry.js"
]

project_dir = r"c:\Users\Yug\Desktop\intern_project_2"

for filename in target_files:
    file_path = os.path.join(project_dir, "src", "components", "industries", filename)
    if os.path.exists(file_path):
        with open(file_path, "r", encoding="utf-8") as f:
            content = f.read()
        observer = "IntersectionObserver" in content
        scroll_reveal_count = content.count("reveal-on-scroll")
        case_study_scroll_reveal = "case-flip-container reveal-on-scroll" in content
        print(f"{filename}:")
        print(f"  IntersectionObserver Hook present: {observer}")
        print(f"  reveal-on-scroll occurrences: {scroll_reveal_count}")
        print(f"  case-flip-container has reveal-on-scroll: {case_study_scroll_reveal}")
