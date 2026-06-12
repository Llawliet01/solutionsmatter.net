export const solutions = [
  {
    slug: 'startup-mvp',
    title: 'Startup MVP Development',
    heroTitle: 'Launch Fast, Iterate Smart',
    heroSubtitle: 'Transform your innovative product ideas into a highly functional Minimum Viable Product (MVP) ready for user testing and investor pitches.',
    problem: 'Startups often face a high risk of failure due to delayed launch times, over-engineering features, or building solutions without direct market validation. Expending excessive resources before obtaining real-world user feedback can quickly drain budgets and limit options for essential pivots.',
    overview: 'Our Startup MVP Development program is engineered to build a functional version of your product targeting core customer pain points. By prioritizing high-value features and utilizing lightweight tech stacks, we help you launch into the market in weeks rather than months, setting up rapid feedback loops.',
    benefits: [
      'Fast time-to-market ensuring you launch before competition reacts',
      'Significantly reduced initial development costs and resource drain',
      'Direct, real-world user feedback to guide subsequent engineering phases',
      'A polished, functional product to show investors and early adopters',
      'Easily scalable codebase designed for rapid modular expansion'
    ],
    process: [
      { step: '01', name: 'Scope Definition', desc: 'Isolating the core value proposition and determining which features are critical for launch.' },
      { step: '02', name: 'Interactive Wireframing', desc: 'Designing streamlined user flows and mockups focused on ease of onboarding.' },
      { step: '03', name: 'Rapid Engineering', desc: 'Coding the core product with a scalable server architecture and third-party integrations.' },
      { step: '04', name: 'Launch & Telemetry', desc: 'Deploying the MVP with built-in analytics to monitor usage patterns and error tracking.' }
    ],
    relatedServices: [
      { slug: 'web-development', title: 'Web Development' },
      { slug: 'mobile-app-development', title: 'Mobile App Development' },
      { slug: 'ui-ux-design', title: 'UI/UX Design' }
    ],
    relatedIndustries: [
      { slug: 'saas', title: 'SaaS & Technology' },
      { slug: 'retail', title: 'Retail & E-Commerce' }
    ],
    relatedCaseStudies: [
      { slug: 'saas-analytics-platform', title: 'SaaS Analytics Platform' },
      { slug: 'e-commerce-mobile-transformation', title: 'E-commerce Mobile Transformation' }
    ]
  },
  {
    slug: 'business-automation',
    title: 'Business Process Automation',
    heroTitle: 'Streamline Workflows, Save Hours',
    heroSubtitle: 'Eliminate repetitive tasks and administrative bottlenecks by automating your core operational workflows.',
    problem: 'Manual data entry, fragmented email exchanges, and disconnected software systems create operational bottlenecks. They lead to frequent data errors, slow task execution, high labor costs, and prevent employees from focusing on high-value business development projects.',
    overview: 'We design and deploy custom automation pipelines that securely connect your separate software applications. By implementing smart automation rules, processing documents programmatically, and building customized employee dashboard portals, we eliminate manual friction.',
    benefits: [
      'Substantial reduction in task processing times and human data entry errors',
      'Seamless data sync across marketing, sales, and logistics programs',
      'Consistent task tracking and automated reminders preventing lost deals',
      'High business cost savings and improved staff productivity metrics',
      'Structured operational data logs for management audit reporting'
    ],
    process: [
      { step: '01', name: 'Workflow Mapping', desc: 'Documenting current manual tasks, identifying bottlenecks, and tracking document flows.' },
      { step: '02', name: 'Pipeline Architecture', desc: 'Designing data flow routes, integrations, validation scripts, and fail-safe logs.' },
      { step: '03', name: 'Integration Coding', desc: 'Connecting APIs, writing automation scripts, and configuring dashboard webhooks.' },
      { step: '04', name: 'Monitoring Setup', desc: 'Deploying automation engines with active alerts for connection failures.' }
    ],
    relatedServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'support-maintenance', title: 'Support & Maintenance' }
    ],
    relatedIndustries: [
      { slug: 'manufacturing', title: 'Manufacturing' }
    ],
    relatedCaseStudies: [
      { slug: 'manufacturing-erp-modernization', title: 'Manufacturing ERP Modernization' }
    ]
  },
  {
    slug: 'ai-solutions',
    title: 'AI Solutions',
    heroTitle: 'Intelligent Systems for Tomorrow',
    heroSubtitle: 'Integrate machine learning models, custom neural networks, and semantic AI interfaces directly into your enterprise software.',
    problem: 'Enterprises collect massive volumes of data but often struggle to extract actionable value. Without intelligent categorization, automated data extraction, or predictive forecasting models, companies miss out on critical market insights and suffer from slower decision speeds.',
    overview: 'Our AI Solutions bridge the gap between complex machine learning theory and practical business software. We design and integrate custom AI engines—ranging from patient diagnostics classifiers to retail forecasting models—that operate securely within your cloud infrastructure.',
    benefits: [
      'Automated extraction of insights from large unstructured datasets',
      'Custom LLM applications fine-tuned on secure corporate documents',
      'Highly accurate demand, sales, and inventory forecasts',
      'Enhanced user experiences through intelligent conversational interfaces',
      'Continuous system optimization powered by machine learning algorithms'
    ],
    process: [
      { step: '01', name: 'Use Case Scoping', desc: 'Identifying business sectors where machine learning can deliver the highest ROI.' },
      { step: '02', name: 'Dataset Curation', desc: 'Aggregating, cleaning, and labeling training data under high security standards.' },
      { step: '03', name: 'Model Training', desc: 'Fine-tuning model weights and validating model accuracy on distinct datasets.' },
      { step: '04', name: 'API Implementation', desc: 'Exposing models via highly optimized web endpoints for seamless software usage.' }
    ],
    relatedServices: [
      { slug: 'ai-automation', title: 'AI & Automation' },
      { slug: 'cloud-devops', title: 'Cloud & DevOps' }
    ],
    relatedIndustries: [
      { slug: 'healthcare', title: 'Healthcare' },
      { slug: 'finance', title: 'Finance & Banking' }
    ],
    relatedCaseStudies: [
      { slug: 'ai-driven-patient-diagnostics', title: 'AI-driven Patient Diagnostics' },
      { slug: 'secure-cloud-finance-migration', title: 'Secure Cloud Finance Migration' }
    ]
  },
  {
    slug: 'crm-erp',
    title: 'CRM & ERP Solutions',
    heroTitle: 'Integrated Operations Management',
    heroSubtitle: 'Consolidate customer management, sales pipelines, operations, and corporate finances into a unified custom CRM/ERP portal.',
    problem: 'Using separate, disjointed platforms for sales management, billing, and supply chain tracking leads to data fragmentation. Staff lose hours manually copy-pasting records, inventory logs fall out of sync, and management struggles to view consolidated business performance reports.',
    overview: 'We build custom CRM & ERP systems designed from the ground up for your specific business operations. By connecting lead flows, supply chains, ledger books, and shipping pipelines into a single database, we establish absolute data consistency and operational control.',
    benefits: [
      'Single database holding clean records across all departments',
      'Elimination of monthly licensing costs associated with pre-packaged SaaS',
      'Automated inventory monitoring and procurement order releases',
      'Real-time financial tracking and automated balance sheets',
      'Secure internal access privileges restricting sensitive records'
    ],
    process: [
      { step: '01', name: 'Operational Audit', desc: 'Auditing sales teams, warehouses, and financial desks to map data interactions.' },
      { step: '02', name: 'System Blueprinting', desc: 'Designing consolidated database schemas and mapping access permissions.' },
      { step: '03', name: 'Relational Development', desc: 'Coding custom modules and linking them to single-source database tables.' },
      { step: '04', name: 'Phased Deployment', desc: 'Migrating legacy records and deploying system modules to production sequentially.' }
    ],
    relatedServices: [
      { slug: 'crm-development', title: 'CRM Development' },
      { slug: 'erp-development', title: 'ERP Development' }
    ],
    relatedIndustries: [
      { slug: 'retail', title: 'Retail & E-Commerce' },
      { slug: 'manufacturing', title: 'Manufacturing' }
    ],
    relatedCaseStudies: [
      { slug: 'e-commerce-mobile-transformation', title: 'E-commerce Mobile Transformation' },
      { slug: 'manufacturing-erp-modernization', title: 'Manufacturing ERP Modernization' }
    ]
  },
  {
    slug: 'digital-transformation',
    title: 'Digital Transformation',
    heroTitle: 'Modernize Your Enterprise Technology',
    heroSubtitle: 'Transition legacy software systems, databases, and servers to scalable, high-security cloud architectures.',
    problem: 'Outdated legacy software systems expose enterprises to severe security vulnerabilities, high maintenance fees, and performance bottlenecks. They fail to scale, prevent team collaboration, and block integrations with modern mobile or AI frameworks.',
    overview: 'We lead comprehensive cloud migrations and system modernizations. We analyze legacy systems, rewrite codebases using modern architectures, migrate databases with zero record loss, and deploy high-availability cloud configurations with continuous monitoring.',
    benefits: [
      'Drastically reduced infrastructure and hardware maintenance costs',
      'Zero downtime migration strategies preserving continuous operations',
      'Modern web and mobile interfaces for enhanced employee efficiency',
      'Cloud scalability adapting instantly to varying database queries',
      'High-grade corporate compliance and database protection systems'
    ],
    process: [
      { step: '01', name: 'Legacy Systems Audit', desc: 'Reviewing outdated databases, code languages, and network vulnerabilities.' },
      { step: '02', name: 'Migration Modeling', desc: 'Designing parallel cloud databases, APIs, and data transfer pathways.' },
      { step: '03', name: 'Modernized Engineering', desc: 'Developing clean cloud codebases and matching old data rules.' },
      { step: '04', name: 'Data Validation Run', desc: 'Executing sample migrations to verify complete record accuracy.' }
    ],
    relatedServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'cloud-devops', title: 'Cloud & DevOps' }
    ],
    relatedIndustries: [
      { slug: 'finance', title: 'Finance & Banking' },
      { slug: 'manufacturing', title: 'Manufacturing' }
    ],
    relatedCaseStudies: [
      { slug: 'secure-cloud-finance-migration', title: 'Secure Cloud Finance Migration' },
      { slug: 'manufacturing-erp-modernization', title: 'Manufacturing ERP Modernization' }
    ]
  }
];
