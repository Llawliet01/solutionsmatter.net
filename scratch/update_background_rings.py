import os
import re

files_to_update = [
    r"src/components/solutions/StartupMvpSolution.js",
    r"src/components/solutions/DigitalTransformationSolution.js",
    r"src/components/solutions/CrmErpSolution.js",
    r"src/components/solutions/BusinessAutomationSolution.js",
    r"src/components/solutions/AiSolutionsSolution.js",
    r"src/components/industries/SaasTechnologyIndustry.js",
    r"src/components/industries/RetailEcommerceIndustry.js",
    r"src/components/industries/ManufacturingIndustry.js",
    r"src/components/industries/HealthcareIndustry.js",
    r"src/components/industries/FinanceBankingIndustry.js",
    r"src/app/services/[slug]/page.js"
]

base_dir = r"c:/Users/Yug/Desktop/intern_project_2"

for rel_path in files_to_update:
    abs_path = os.path.join(base_dir, rel_path)
    if not os.path.exists(abs_path):
        print(f"File not found: {abs_path}")
        continue
    
    with open(abs_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace count={4} or count={5} with count={12} inside BackgroundRings props
    new_content, count = re.subn(
        r'(<BackgroundRings[^>]+)count=\{[45]\}',
        r'\g<1>count={12}',
        content
    )
    
    if count > 0:
        with open(abs_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {rel_path} successfully (replaced {count} matches)")
    else:
        print(f"No match found in {rel_path}")
