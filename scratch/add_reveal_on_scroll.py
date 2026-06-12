import os

files_to_update = {
    "HealthcareIndustry.js": [
        # useEffect insertion target
        ("return (", """  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return ("""),
        # Class replacements
        ('className={`hc2-challenge-card tilt-card-wrapper`}', 'className={`hc2-challenge-card tilt-card-wrapper reveal-on-scroll delay-${(i % 4) * 100}`}'),
        ('className="hc2-features-nav"', 'className="hc2-features-nav reveal-on-scroll"'),
        ('className="hc2-feature-detail"', 'className="hc2-feature-detail reveal-on-scroll delay-100"'),
        ('className={`hc2-pipeline-step`}', 'className={`hc2-pipeline-step reveal-on-scroll delay-${(i % 4) * 100}`}'),
        ('className="hc2-carousel-container"', 'className="hc2-carousel-container reveal-on-scroll"'),
        ('className="hc2-outcomes-left"', 'className="hc2-outcomes-left reveal-on-scroll"'),
        ('className="hc2-outcomes-right"', 'className="hc2-outcomes-right reveal-on-scroll delay-100"'),
        ('className="hc2-faq-left"', 'className="hc2-faq-left reveal-on-scroll"'),
        ('className="hc2-faq-right"', 'className="hc2-faq-right reveal-on-scroll delay-100"'),
        # Hardcoded stat cards in healthcare
        ('          <div className="premium-stat-card"', '          <div className="premium-stat-card reveal-on-scroll"'),
        ('            <div className="premium-stat-card"', '            <div className="premium-stat-card reveal-on-scroll delay-100"'),
    ],
    
    "FinanceBankingIndustry.js": [
        ("return (", """  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return ("""),
        ('className={`fb2-challenge-card tilt-card-wrapper`}', 'className={`fb2-challenge-card tilt-card-wrapper reveal-on-scroll delay-${(i % 4) * 100}`}'),
        ('className="fb2-arch-diagram"', 'className="fb2-arch-diagram reveal-on-scroll"'),
        ('className="fb2-comp-left"', 'className="fb2-comp-left reveal-on-scroll"'),
        ('className="fb2-comp-right"', 'className="fb2-comp-right reveal-on-scroll delay-100"'),
        ('className="fb2-faq-left"', 'className="fb2-faq-left reveal-on-scroll"'),
        ('className="fb2-faq-right"', 'className="fb2-faq-right reveal-on-scroll delay-100"'),
        # Stats
        ('            <div className="premium-stat-card"', '            <div className="premium-stat-card reveal-on-scroll"'),

        # We can search for static unique substrings for 2nd and 3rd card
        ("Verified Platform Uptime", "Verified Platform Uptime"), # placeholder dummy
        ("names.length)],\n          to: names[Math.floor(Math.random() * names.length)],\n          ms,\n          status: statuses[Math.floor(Math.random() * statuses.length)],\n        },\n        prev[0],\n        prev[1],\n      ]);\n    }, 3200);\n    return () => clearInterval(iv);\n  }, []);", "names.length)],\n          to: names[Math.floor(Math.random() * names.length)],\n          ms,\n          status: statuses[Math.floor(Math.random() * statuses.length)],\n        },\n        prev[0],\n        prev[1],\n      ]);\n    }, 3200);\n    return () => clearInterval(iv);\n  }, []);")
    ],
    
    "SaasTechnologyIndustry.js": [
        ("return (", """  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return ("""),
        # Arch blocks
        ('className="st2-arch-block front premium-node tilt-card-wrapper"', 'className="st2-arch-block front premium-node tilt-card-wrapper reveal-on-scroll"'),
        ('className="st2-arch-block front premium-node tilt-card-wrapper reveal-on-scroll" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>\n                <Globe', 'className="st2-arch-block front premium-node tilt-card-wrapper reveal-on-scroll delay-100" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>\n                <Globe'),
        ('className="st2-arch-block mid premium-node tilt-card-wrapper"', 'className="st2-arch-block mid premium-node tilt-card-wrapper reveal-on-scroll delay-200"'),
        ('className="st2-arch-block mid premium-node tilt-card-wrapper reveal-on-scroll delay-200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>\n                <Zap', 'className="st2-arch-block mid premium-node tilt-card-wrapper reveal-on-scroll delay-300" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>\n                <Zap'),
        ('className="st2-arch-block back accent premium-node tilt-card-wrapper"', 'className="st2-arch-block back accent premium-node tilt-card-wrapper reveal-on-scroll delay-400"'),
        ('className="st2-arch-block back premium-node tilt-card-wrapper"', 'className="st2-arch-block back premium-node tilt-card-wrapper reveal-on-scroll delay-500"'),
        # Stats
        ('            <div className="premium-stat-card"', '            <div className="premium-stat-card reveal-on-scroll"'),
        # FAQs
        ('className="st2-faq-left"', 'className="st2-faq-left reveal-on-scroll"'),
        ('className="st2-faq-right"', 'className="st2-faq-right reveal-on-scroll delay-100"'),
    ],
    
    "ManufacturingIndustry.js": [
        ("return (", """  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return ("""),
        ('className="mf2-compare-side premium before"', 'className="mf2-compare-side premium before reveal-on-scroll"'),
        ('className="mf2-compare-side premium after"', 'className="mf2-compare-side premium after reveal-on-scroll delay-100"'),
        ('className={`mf2-workflow-card`}', 'className={`mf2-workflow-card reveal-on-scroll delay-${(idx % 4) * 100}`}'),
        ('className="premium-stat-card"', 'className="premium-stat-card reveal-on-scroll"'),
        ('className="mf2-faq-left"', 'className="mf2-faq-left reveal-on-scroll"'),
        ('className="mf2-faq-right"', 'className="mf2-faq-right reveal-on-scroll delay-100"'),
    ],
    
    "RetailEcommerceIndustry.js": [
        ("return (", """  // Scroll reveal Intersection Observer
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    };
    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const targets = document.querySelectorAll('.reveal-on-scroll');
    targets.forEach((target) => observer.observe(target));
    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return ("""),
        ('className={`rt2-channel-card`}', 'className={`rt2-channel-card reveal-on-scroll delay-${(i % 4) * 100}`}'),
        ('className="rt2-inv-left"', 'className="rt2-inv-left reveal-on-scroll"'),
        ('className="rt2-inv-right"', 'className="rt2-inv-right reveal-on-scroll delay-100"'),
        ('className="rt2-funnel-step-premium"', 'className="rt2-funnel-step-premium reveal-on-scroll"'),
        ('className="premium-stat-card"', 'className="premium-stat-card reveal-on-scroll"'),
        ('className="rt2-sol-card large tilt-card-wrapper"', 'className="rt2-sol-card large tilt-card-wrapper reveal-on-scroll"'),
        ('className="rt2-sol-card tilt-card-wrapper"', 'className="rt2-sol-card tilt-card-wrapper reveal-on-scroll"'),
        ('className="rt2-faq-left"', 'className="rt2-faq-left reveal-on-scroll"'),
        ('className="rt2-faq-right"', 'className="rt2-faq-right reveal-on-scroll delay-100"'),
    ]
}

project_dir = r"c:\Users\Yug\Desktop\intern_project_2"

# Post-process stats cards for Finance, SaaS, Manufacturing, Retail
# This script will manually process the premium-stat-card entries in files to add delay-100 and delay-200.
# We will do this by finding all 'premium-stat-card reveal-on-scroll' occurrences and adding stagger delays.

for filename, replacements in files_to_update.items():
    file_path = os.path.join(project_dir, "src", "components", "industries", filename)
    if not os.path.exists(file_path):
        print(f"File not found: {file_path}")
        continue
        
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    print(f"Applying replacements for {filename}...")
    success_count = 0
    for target, replacement in replacements:
        if target in content:
            content = content.replace(target, replacement)
            success_count += 1
        else:
            print(f"  WARNING: target content not found: {target[:50]}...")
            
    # Stagger manual stat cards if present
    # We find occurrences of 'premium-stat-card reveal-on-scroll' and replace subsequent ones with delay classes
    parts = content.split('className="premium-stat-card reveal-on-scroll"')
    if len(parts) >= 3:
        new_content = parts[0]
        # 1st card gets normal reveal
        new_content += 'className="premium-stat-card reveal-on-scroll"'
        new_content += parts[1]
        # 2nd card gets delay-100
        new_content += 'className="premium-stat-card reveal-on-scroll delay-100"'
        new_content += parts[2]
        # 3rd card gets delay-200
        new_content += 'className="premium-stat-card reveal-on-scroll delay-200"'
        new_content += "".join(parts[3:])
        content = new_content
        print("  Staggered manual premium-stat-cards.")

    # Stagger manual rt2-sol-card classes in Retail
    if filename == "RetailEcommerceIndustry.js":
        sol_parts = content.split('className="rt2-sol-card tilt-card-wrapper reveal-on-scroll"')
        if len(sol_parts) >= 4:
            new_content = sol_parts[0]
            new_content += 'className="rt2-sol-card tilt-card-wrapper reveal-on-scroll"'
            new_content += sol_parts[1]
            new_content += 'className="rt2-sol-card tilt-card-wrapper reveal-on-scroll delay-100"'
            new_content += sol_parts[2]
            new_content += 'className="rt2-sol-card tilt-card-wrapper reveal-on-scroll delay-200"'
            new_content += sol_parts[3]
            new_content += 'className="rt2-sol-card tilt-card-wrapper reveal-on-scroll delay-300"'
            new_content += "".join(sol_parts[4:])
            content = new_content
            print("  Staggered manual rt2-sol-cards.")
            
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(content)
        
    print(f"Finished {filename}: {success_count}/{len(replacements)} replacements applied.")
