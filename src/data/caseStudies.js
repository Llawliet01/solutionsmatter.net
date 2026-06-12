export const caseStudies = [
  {
    slug: 'ai-driven-patient-diagnostics',
    title: 'AI-driven Patient Diagnostics',
    industry: 'Healthcare',
    challenge: 'A medical diagnostics provider struggled with manual image analysis workflows, which resulted in treatment delays. They needed an automated system capable of pre-screening medical images with high accuracy while maintaining strict patient data compliance.',
    solution: 'We engineered a custom AI pipeline utilizing PyTorch and FastAPI. The system classifies potential anomalies in medical scans, routing priority cases directly to radiologist review queues. All patient records remain encrypted at rest and in transit.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'AWS CloudHSM', 'PostgreSQL', 'Docker'],
    implementation: [
      'Configured a HIPAA-compliant virtual private cloud on AWS.',
      'Developed a deep learning model to pre-screen medical images for structural anomalies.',
      'Constructed a FastAPI integration layer connecting the AI engine to existing hospital EHR software.',
      'Implemented audit logs to track every data interaction.'
    ],
    outcome: [
      '94% classification accuracy for pre-screened anomaly classes.',
      '60% reduction in diagnostics processing queue times.',
      'Complete HIPAA compliance alignment with encrypted logs.'
    ],
    relatedServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'ai-automation', title: 'AI & Automation' }
    ],
    relatedSolutions: [
      { slug: 'ai-solutions', title: 'AI Solutions' },
      { slug: 'business-automation', title: 'Business Process Automation' }
    ]
  },
  {
    slug: 'secure-cloud-finance-migration',
    title: 'Secure Cloud Finance Migration',
    industry: 'Finance & Banking',
    challenge: 'A banking solution client ran their ledger transactions on outdated on-premise hardware. High server overhead, frequent security patches, and limited developer deployment pipelines blocked the launch of their mobile API platforms.',
    solution: 'We refactored their core code architecture into Docker containers and designed a Kubernetes infrastructure setup on AWS. Using Terraform, we provisioned secure, auto-scaling staging and production environments, leading to instant deployment.',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Go', 'Linux'],
    implementation: [
      'Wrote Terraform scripts to declare complete network resources, subnets, and firewalls.',
      'Containerized legacy banking logic using lightweight alpine Docker builds.',
      'Configured secure CI/CD pipelines via GitHub Actions to automate code checks and deployments.',
      'Set up secure KMS keys to manage app secrets and encrypt active database nodes.'
    ],
    outcome: [
      '99.99% system uptime achieved through automated cloud load balancers.',
      '45% reduction in overall hardware infrastructure maintenance costs.',
      'Deploy cycle speed increased from twice monthly to daily on-demand releases.'
    ],
    relatedServices: [
      { slug: 'cloud-devops', title: 'Cloud & DevOps' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    relatedSolutions: [
      { slug: 'digital-transformation', title: 'Digital Transformation' },
      { slug: 'ai-solutions', title: 'AI Solutions' }
    ]
  },
  {
    slug: 'saas-analytics-platform',
    title: 'SaaS Analytics Platform',
    industry: 'SaaS & Technology',
    challenge: 'A subscription metrics provider experienced high customer onboarding dropout rates. Their platform suffered from slow load times and lacked secure database isolation for corporate user records.',
    solution: 'We rebuilt their web application using Next.js App Router and optimized database schemas in PostgreSQL with isolated row-level security. We designed a Stripe billing logic to automate tier upgrades.',
    technologies: ['Next.js', 'React.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Vercel'],
    implementation: [
      'Re-architected the web application using Next.js, achieving server-rendered speed optimizations.',
      'Designed a multi-tenant PostgreSQL schema utilizing row-level security policies.',
      'Connected Stripe billing APIs to handle modular user subscription tiers.',
      'Implemented Redis queues to process heavy data analytics requests in the background.'
    ],
    outcome: [
      'Website page speed score improved to 98/100 on Google PageSpeed Insights.',
      '80% reduction in user onboarding dropouts due to faster layouts.',
      'Seamless multi-tenant database isolation validating customer privacy.'
    ],
    relatedServices: [
      { slug: 'saas-development', title: 'SaaS Development' },
      { slug: 'ui-ux-design', title: 'UI/UX Design' }
    ],
    relatedSolutions: [
      { slug: 'startup-mvp', title: 'Startup MVP Development' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ]
  },
  {
    slug: 'manufacturing-erp-modernization',
    title: 'Manufacturing ERP Modernization',
    industry: 'Manufacturing',
    challenge: 'An industrial manufacturing enterprise struggled with disjointed inventory spreadsheets. Stock logs were consistently inaccurate, leading to procurement delays and assembly queue stoppages.',
    solution: 'We engineered a custom central ERP platform. We linked warehousing, order booking, vendor billing, and shift scheduling modules into a single web application running a PostgreSQL database.',
    technologies: ['Python', 'Django', 'React.js', 'PostgreSQL', 'Docker', 'Redux'],
    implementation: [
      'Conducted audits on assembly lines to map stock intake points.',
      'Programmed custom ERP modules in React for inventory, billing, and scheduling.',
      'Built automated re-order thresholds that trigger vendor purchase orders when stock runs low.',
      'Deployed the application in containerized environments for stable operation.'
    ],
    outcome: [
      '100% database accuracy achieved across three distributed warehouses.',
      '30% reduction in stock re-order turnaround times.',
      'Eliminated monthly user licensing overhead associated with off-the-shelf software.'
    ],
    relatedServices: [
      { slug: 'erp-development', title: 'ERP Development' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    relatedSolutions: [
      { slug: 'crm-erp', title: 'CRM & ERP Solutions' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ]
  },
  {
    slug: 'e-commerce-mobile-transformation',
    title: 'E-commerce Mobile Transformation',
    industry: 'Retail & E-Commerce',
    challenge: 'A retail brand wanted to launch a mobile shopping app to capture mobile traffic, but struggled with syncing stock logs with their physical retail databases.',
    solution: 'We programmed a cross-platform mobile application in React Native. The app interfaces with a custom CRM system that automatically syncs inventories between digital purchases and store registries.',
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
    implementation: [
      'Developed a responsive React Native app optimized for iOS and Android viewports.',
      'Built a custom CRM dashboard to sync inventories between retail branches.',
      'Integrated Stripe SDKs for secure credit card checkout workflows.',
      'Implemented push notification features to notify users of delivery updates.'
    ],
    outcome: [
      '40% increase in digital conversions within three months of release.',
      'Real-time automated stock updates across physical and web stores.',
      'Successful app store launches with 4.8/5 ratings.'
    ],
    relatedServices: [
      { slug: 'mobile-app-development', title: 'Mobile App Development' },
      { slug: 'crm-development', title: 'CRM Development' }
    ],
    relatedSolutions: [
      { slug: 'crm-erp', title: 'CRM & ERP Solutions' },
      { slug: 'startup-mvp', title: 'Startup MVP Development' }
    ]
  }
];
