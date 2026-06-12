import os

project_dir = r"c:\Users\Yug\Desktop\intern_project_2"

# 1. HealthcareIndustry.js
hc_path = os.path.join(project_dir, "src", "components", "industries", "HealthcareIndustry.js")
if os.path.exists(hc_path):
    with open(hc_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    # We find from '  // Scenario carousel auto-rotation' or similar to '  const features = ['
    # Let's inspect the start and end tokens:
    # Start: '  // Scenario carousel auto-rotation' or '// Scenario carousel' or the first useEffect inside the function body
    # End: '  const features = ['
    # Let's do a find-and-replace for the entire hook area
    
    # Let's check if we can identify the exact start index of:
    # '  useEffect(() => {\n    const timer = setInterval(() => {'
    # and end index of '  return () => clearInterval(iv);\n  }, []);'
    
    # Let's search for unique surrounding markers
    start_marker = "  // Live vitals simulation"
    # Actually, let's check what variables are defined before the hooks:
    # const [activeFaq, setActiveFaq] = useState(null);
    # ...
    # const ecgRef = useRef(null);
    # const [activeScenario, setActiveScenario] = useState(0);
    # const [caseFlipped, setCaseFlipped] = useState(false);
    
    # Let's do a clean regex replacement or substring replacement.
    # We find index of "  const [activeFaq" and "  const features = ["
    # Everything in between is state variables + hooks. We can keep the state variables and write clean hooks.
    
    state_vars = """  const [activeFaq, setActiveFaq] = useState(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [vitals, setVitals] = useState({ hr: 72, spo2: 98, bp: '120/80', temp: 36.6 });
  const [scanQueue, setScanQueue] = useState([
    { id: 'SCN-4821', patient: 'J. Chen', type: 'Brain MRI', priority: 'URGENT', risk: 94 },
    { id: 'SCN-4822', patient: 'M. Torres', type: 'Chest X-Ray', priority: 'NORMAL', risk: 18 },
    { id: 'SCN-4823', patient: 'R. Patel', type: 'Spine CT', priority: 'REVIEW', risk: 62 },
  ]);
  const statsRef = useRef(null);
  const ecgRef = useRef(null);
  const [activeScenario, setActiveScenario] = useState(0);
  const [caseFlipped, setCaseFlipped] = useState(false);"""

    hc_hooks = """  // Scenario carousel auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveScenario(prev => (prev + 1) % scenarios.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [activeScenario]);

  // Live vitals simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setVitals(prev => ({
        hr: Math.max(65, Math.min(88, prev.hr + (Math.random() > 0.5 ? 1 : -1))),
        spo2: Math.max(96, Math.min(100, prev.spo2 + (Math.random() > 0.6 ? 1 : -1))),
        bp: prev.bp,
        temp: Number((Math.max(36.1, Math.min(37.2, prev.temp + (Math.random() > 0.5 ? 0.1 : -0.1)))).toFixed(1)),
      }));
    }, 2500);
    return () => clearInterval(iv);
  }, []);

  // Scroll reveal Intersection Observer
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

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };"""

    # We find the start of function body: "export default function HealthcareIndustry({ industry }) {"
    func_start = "export default function HealthcareIndustry({ industry }) {"
    start_idx = content.find(func_start)
    features_idx = content.find("  const features = [")
    
    if start_idx != -1 and features_idx != -1:
        new_content = content[:start_idx + len(func_start)] + "\n" + state_vars + "\n\n" + hc_hooks + "\n\n" + content[features_idx:]
        with open(hc_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully cleaned up HealthcareIndustry.js hooks.")
    else:
        print("ERROR: Could not find start or end markers in HealthcareIndustry.js")

# 2. FinanceBankingIndustry.js
fb_path = os.path.join(project_dir, "src", "components", "industries", "FinanceBankingIndustry.js")
if os.path.exists(fb_path):
    with open(fb_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    fb_state_vars = """  const [activeFaq, setActiveFaq] = useState(null);
  const [caseFlipped, setCaseFlipped] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const nextTxIdRef = useRef(9843);
  const [transactions, setTransactions] = useState([
    { id: 'TX-9842', amount: 284500, from: 'Institu-Corp', to: 'PayNode Ltd', ms: 6, status: 'cleared' },
    { id: 'TX-9841', amount: 12800, from: 'Jane D.', to: 'Wire Transfer', ms: 4, status: 'cleared' },
    { id: 'TX-9840', amount: 980000, from: 'CapitalFund', to: 'LedgerVault', ms: 9, status: 'flagged' },
  ]);
  const [threatFeed, setThreatFeed] = useState([
    { type: 'BLOCKED', ip: '198.51.100.4', reason: 'Rate limit - 2400 req/min', time: '14:02:11' },
    { type: 'OK', ip: '10.0.0.12', reason: 'API write validated', time: '14:02:14' },
    { type: 'BLOCKED', ip: '203.0.113.7', reason: 'Geo-block: TOR exit node', time: '14:02:18' },
  ]);
  const statsRef = useRef(null);"""

    fb_hooks = """  // Live transaction stream
  useEffect(() => {
    const names = ['Meridian Bank', 'Apex Capital', 'GlobalTrade Corp', 'SilverLake Fund', 'NovaPay Ltd'];
    const iv = setInterval(() => {
      const amt = Math.floor(1000 + Math.random() * 500000);
      const ms = Math.floor(3 + Math.random() * 12);
      const statuses = ['cleared', 'cleared', 'cleared', 'flagged'];
      const nextId = nextTxIdRef.current++;
      setTransactions(prev => [
        {
          id: 'TX-' + nextId,
          amount: amt,
          from: names[Math.floor(Math.random() * names.length)],
          to: names[Math.floor(Math.random() * names.length)],
          ms,
          status: statuses[Math.floor(Math.random() * statuses.length)],
        },
        prev[0],
        prev[1],
      ]);
    }, 3200);
    return () => clearInterval(iv);
  }, []);

  // Live threat feed
  useEffect(() => {
    const threats = [
      { type: 'BLOCKED', ip: '198.51.100.' + Math.floor(Math.random()*255), reason: 'Anomalous velocity: 8 transfers in 2s', time: '' },
      { type: 'OK', ip: '10.0.0.' + Math.floor(Math.random()*255), reason: 'Auth token validated via OAuth2', time: '' },
      { type: 'ALERT', ip: '45.33.32.' + Math.floor(Math.random()*255), reason: 'IP risk score: Elevated - monitoring', time: '' },
    ];
    const iv = setInterval(() => {
      const d = new Date();
      const t = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
      const pick = threats[Math.floor(Math.random() * threats.length)];
      setThreatFeed(prev => [{ ...pick, time: t }, prev[0], prev[1]]);
    }, 4000);
    return () => clearInterval(iv);
  }, []);

  // Scroll reveal Intersection Observer
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
  }, []);"""

    func_start = "export default function FinanceBankingIndustry({ industry }) {"
    start_idx = content.find(func_start)
    return_idx = content.find("  return (")
    
    if start_idx != -1 and return_idx != -1:
        new_content = content[:start_idx + len(func_start)] + "\n" + fb_state_vars + "\n\n" + fb_hooks + "\n\n" + content[return_idx:]
        with open(fb_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully cleaned up FinanceBankingIndustry.js hooks.")
    else:
        print("ERROR: Could not find start or end markers in FinanceBankingIndustry.js")

# 3. ManufacturingIndustry.js
mf_path = os.path.join(project_dir, "src", "components", "industries", "ManufacturingIndustry.js")
if os.path.exists(mf_path):
    with open(mf_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    mf_state_vars = """  const [activeFaq, setActiveFaq] = useState(null);
  const [activeStep, setActiveStep] = useState(null);
  const [caseFlipped, setCaseFlipped] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const workflowTrackRef = useRef(null);

  const [telemetry, setTelemetry] = useState({
    lineA: { temp: 22.4, speed: 88, status: 'nominal' },
    lineB: { temp: 24.1, speed: 78, status: 'nominal' },
    lineC: { temp: 48.9, speed: 0, status: 'offline' },
  });

  const [inventory, setInventory] = useState([
    { sku: 'COIL-402', name: 'Steel Coils (0.8mm)', qty: 45, threshold: 10, status: 'ok' },
    { sku: 'BOLT-M12', name: 'M12 Fasteners', qty: 8820, threshold: 2000, status: 'ok' },
    { sku: 'FILM-PA-1', name: 'Packaging Film', qty: 310, threshold: 400, status: 'low' },
  ]);
  const statsRef = useRef(null);"""

    mf_hooks = """  // Live telemetry simulation
  useEffect(() => {
    const iv = setInterval(() => {
      setTelemetry(prev => ({
        lineA: {
          ...prev.lineA,
          temp: Number((prev.lineA.temp + (Math.random() > 0.5 ? 0.3 : -0.3)).toFixed(1)),
          speed: Math.max(80, Math.min(95, prev.lineA.speed + (Math.random() > 0.5 ? 1 : -1))),
        },
        lineB: {
          ...prev.lineB,
          temp: Number((prev.lineB.temp + (Math.random() > 0.5 ? 0.2 : -0.2)).toFixed(1)),
          speed: Math.max(70, Math.min(85, prev.lineB.speed + (Math.random() > 0.5 ? 1 : -1))),
        },
        lineC: prev.lineC,
      }));
    }, 2800);
    return () => clearInterval(iv);
  }, []);

  // Scroll reveal Intersection Observer
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
  }, []);"""

    func_start = "export default function ManufacturingIndustry({ industry }) {"
    start_idx = content.find(func_start)
    workflow_idx = content.find("  const workflowSteps = [")
    
    if start_idx != -1 and workflow_idx != -1:
        # Also clean up the map loops inside the return block
        # We replace the map loop block to remove the nested useEffect hooks
        # Let's write mf_content cleanly first by doing a direct replacement of the function start up to workflowSteps
        new_content = content[:start_idx + len(func_start)] + "\n" + mf_state_vars + "\n\n" + mf_hooks + "\n\n" + content[workflow_idx:]
        
        # Now we need to remove any useEffects from inside the workflowStep map callback
        # Let's inspect if there are any useEffect occurrences remaining inside new_content.
        # We can run a second regex or replace to remove them if they exist.
        # Let's do that dynamically by finding where they are inside the JSX
        
        # The inner useEffect was:
        #     // Scroll reveal Intersection Observer
        #   useEffect(() => {
        #     ...
        #   }, []);
        #   return (
        #     <div key={idx} ...
        
        # We can search for 'STEP_ICONS[idx % STEP_ICONS.length];\n\n    // Scroll reveal' up to 'return ('
        import re
        pattern = r"const STEP_ICONS = \[Settings, Database, BarChart3, Cpu, Zap\];[\s\S]*?(?=return \()"
        replacement = "const STEP_ICONS = [Settings, Database, BarChart3, Cpu, Zap];\n                const Icon = STEP_ICONS[idx % STEP_ICONS.length];\n                const stepNum = String(idx + 1).padStart(2, '0');\n\n                "
        new_content = re.sub(pattern, replacement, new_content)
        
        with open(mf_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully cleaned up ManufacturingIndustry.js hooks.")
    else:
        print("ERROR: Could not find start or end markers in ManufacturingIndustry.js")

# 4. RetailEcommerceIndustry.js
rt_path = os.path.join(project_dir, "src", "components", "industries", "RetailEcommerceIndustry.js")
if os.path.exists(rt_path):
    with open(rt_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    rt_state_vars = """  const [activeFaq, setActiveFaq] = useState(null);
  const [caseFlipped, setCaseFlipped] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const [cartAlert, setCartAlert] = useState(null);
  const [activeTab, setActiveTab] = useState('traffic');

  const [liveMetrics, setLiveMetrics] = useState({
    conversions: 3.42,
    activeCarts: 182,
    orderVolume: 1420,
    checkouts: 12
  });

  const channels = [
    { icon: Globe, name: 'Web Storefront', desc: 'Next.js storefront scoring 98+ on Google Lighthouse speed benchmarks.' },
    { icon: Smartphone, name: 'Mobile App Node', desc: 'React Native architecture supporting push updates, offline cart, and instant biometric checkout.' },
    { icon: RefreshCw, name: 'Marketplace Sync', desc: 'Real-time sync adapters linking Shopify, Amazon, and eBay feeds to the central DB.' },
    { icon: Package, name: 'POS Systems', desc: 'In-store point-of-sale integration that syncs physical transactions to the central ledger.' },
  ];

  const funnelSteps = [
    { stage: 'Discovery', desc: 'SEO-optimized product pages + search shopping ads', rate: '100%' },
    { stage: 'Product View', desc: 'AR try-on, reviews, fast image delivery via CDN', rate: '68%' },
    { stage: 'Add to Cart', desc: 'One-tap add, persistent cart across devices', rate: '41%' },
    { stage: 'Checkout', desc: 'One-page checkout flow with digital wallet integration', rate: '28%' },
    { stage: 'Purchase', desc: 'Instant confirmation + automated email + loyalty points', rate: '18%' },
  ];

  const statsRef = useRef(null);"""

    rt_hooks = """  // Scroll reveal Intersection Observer
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
  }, []);"""

    func_start = "export default function RetailEcommerceIndustry({ industry }) {"
    start_idx = content.find(func_start)
    return_idx = content.find("  return (")
    
    if start_idx != -1 and return_idx != -1:
        new_content = content[:start_idx + len(func_start)] + "\n" + rt_state_vars + "\n\n" + rt_hooks + "\n\n" + content[return_idx:]
        with open(rt_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully cleaned up RetailEcommerceIndustry.js hooks.")
    else:
        print("ERROR: Could not find start or end markers in RetailEcommerceIndustry.js")

# 5. SaasTechnologyIndustry.js
saas_path = os.path.join(project_dir, "src", "components", "industries", "SaasTechnologyIndustry.js")
if os.path.exists(saas_path):
    with open(saas_path, "r", encoding="utf-8") as f:
        content = f.read()
        
    saas_state_vars = """  const [activeFaq, setActiveFaq] = useState(null);
  const [caseFlipped, setCaseFlipped] = useState(false);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;
    const angleX = (yc - y) / 12;
    const angleY = (x - xc) / 12;
    card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e) => {
    const card = e.currentTarget;
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  };

  const [typedLines, setTypedLines] = useState([]);
  const [activeTier, setActiveTier] = useState(1);
  const [consoleLogs, setConsoleLogs] = useState([
    { t: '11:42:01', type: 'INFO', msg: 'Tenant [tenant_982] session created via SSO' },
    { t: '11:42:05', type: 'OK', msg: 'Core billing invoice.payment_succeeded webhook processed' },
    { t: '11:42:09', type: 'WARN', msg: 'DB pool utilization high - auto-scaling triggered' },
  ]);
  const statsRef = useRef(null);"""

    saas_hooks = """  // Typewriter animation
  useEffect(() => {
    let timeouts = [];
    TYPEWRITER_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setTypedLines(prev => [...prev, line]);
      }, line.delay + i * 50);
      timeouts.push(t);
    });
    // Loop
    const loopTimeout = setTimeout(() => {
      setTypedLines([]);
      timeouts.forEach(t => clearTimeout(t));
    }, 6000);
    timeouts.push(loopTimeout);
    return () => timeouts.forEach(t => clearTimeout(t));
  }, [typedLines.length === 0 ? 0 : undefined]);

  // Live console logs
  useEffect(() => {
    const logPool = [
      { type: 'INFO', msg: 'User login via Identity SSO - tenant_482' },
      { type: 'OK', msg: 'In-memory cache hit: tenant_982_dashboard_data' },
      { type: 'OK', msg: 'Billing subscription upgraded: plan_pro - plan_enterprise' },
      { type: 'WARN', msg: 'Feature flag rollout: 12% of users on new_billing_ui' },
      { type: 'INFO', msg: 'Background job: invoice_generate completed in 142ms' },
    ];
    const iv = setInterval(() => {
      const d = new Date();
      const t = `${d.getHours().toString().padStart(2,'0')}:${d.getMinutes().toString().padStart(2,'0')}:${d.getSeconds().toString().padStart(2,'0')}`;
      const pick = logPool[Math.floor(Math.random() * logPool.length)];
      setConsoleLogs(prev => [{ ...pick, t }, prev[0], prev[1]]);
    }, 3500);
    return () => clearInterval(iv);
  }, []);

  // Scroll reveal Intersection Observer
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
  }, []);"""

    func_start = "export default function SaasTechnologyIndustry({ industry }) {"
    start_idx = content.find(func_start)
    return_idx = content.find("  return (")
    
    if start_idx != -1 and return_idx != -1:
        new_content = content[:start_idx + len(func_start)] + "\n" + saas_state_vars + "\n\n" + saas_hooks + "\n\n" + content[return_idx:]
        with open(saas_path, "w", encoding="utf-8") as f:
            f.write(new_content)
        print("Successfully cleaned up SaasTechnologyIndustry.js hooks.")
    else:
        print("ERROR: Could not find start or end markers in SaasTechnologyIndustry.js")
