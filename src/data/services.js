export const services = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    heroTitle: 'Tailored Enterprise Software Solutions',
    heroSubtitle: 'Build robust, scalable, and secure custom applications designed to match your unique business workflows and operations.',
    overview: 'In today\'s fast-paced digital landscape, off-the-shelf software often falls short of meeting specific operational requirements. Our custom software development services are designed to bridge this gap. We build custom-engineered applications from the ground up, prioritizing scalability, security, and high performance to support your enterprise growth.',
    overviewP2: 'We leverage modular development components, high data segregation architectures, and edge deployment platforms to build enterprise software that scales natively with user traffic. By implementing continuous integration systems and secure multi-tenant staging nodes, we ensure high operability and rapid deployment speeds.',
    overviewP3: 'Our solutions are built from the ground up — prioritizing robust security protocols and seamless API integrations. We align our workflows with your strategic targets to coordinate development sprints, verify system requirements, and deliver highly scalable applications that grow with your business.',
    capabilitiesDesc: 'From enterprise backends to microservices and legacy modernization, our custom software capabilities cover every layer of your technology stack.',
    faqIntro: 'Common questions about our custom software process, project scoping, architecture decisions, and technology choices.',
    benefits: [
      'Perfect alignment with your unique business workflows',
      'High scalability to accommodate growth without performance bottlenecks',
      'Enhanced security with tailored data protection mechanisms',
      'Lower long-term licensing and operational costs',
      'Seamless integration with your existing IT ecosystem'
    ],
    features: [
      { title: 'Enterprise Application Development', desc: 'Robust software architectures designed to manage complex business operations and scale seamlessly.' },
      { title: 'API & Systems Integration', desc: 'Securely connect heterogeneous systems, third-party services, and legacy platforms.' },
      { title: 'Legacy Modernization', desc: 'Upgrade and migrate outdated systems to modern cloud architectures with minimal business interruption.' },
      { title: 'Custom Database Design', desc: 'Create highly optimized databases designed for speed, durability, and high volume data queries.' }
    ],
    process: [
      { step: '01', name: 'Discovery & Analysis', desc: 'We deep dive into your business operations, requirements, and challenges to architect the optimal system.' },
      { step: '02', name: 'System Architecture', desc: 'Designing the technical framework, databases, and UI flows for scalability and security.' },
      { step: '03', name: 'Iterative Development', desc: 'Writing clean, testable code using modern agile methodologies and continuous integration.' },
      { step: '04', name: 'Rigorous Testing', desc: 'Executing comprehensive QA automation, load testing, and vulnerability assessments.' },
      { step: '05', name: 'Deployment & Launch', desc: 'Seamlessly deploying the solution into production with structured user training and handoff.' }
    ],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Python'],
    relatedSolutions: [
      { slug: 'digital-transformation', title: 'Digital Transformation' },
      { slug: 'business-automation', title: 'Business Process Automation' }
    ],
    relatedIndustries: [
      { slug: 'manufacturing', title: 'Manufacturing' },
      { slug: 'finance', title: 'Finance' },
      { slug: 'healthcare', title: 'Healthcare' }
    ]
  },
  {
    slug: 'web-development',
    title: 'Web Development',
    heroTitle: 'Modern Web Applications & Platforms',
    heroSubtitle: 'Develop lightning-fast, secure, and visually stunning web applications that offer seamless user experiences across devices.',
    overview: 'Our web development services focus on creating premium, responsive, and performance-optimized websites and apps. We leverage modern web frameworks and build with a focus on core web vitals, speed, security, and search engine visibility, ensuring your web presence drives business conversions.',
    overviewP2: 'We implement server-side rendering, edge caching networks, and optimized asset delivery pipelines to achieve near-perfect Core Web Vitals scores. Our frontend architecture separates concerns cleanly — ensuring your codebase stays maintainable as your product team and feature set grow.',
    overviewP3: 'Each project begins with an in-depth discovery of your content strategy, user flows, and performance benchmarks. We translate these into precise component hierarchies, accessible HTML semantics, and adaptive layouts that present your brand flawlessly across all devices and screen resolutions.',
    capabilitiesDesc: 'From SPAs and PWAs to content-managed portals, we craft web experiences that are blazing-fast, accessible, and built to convert visitors into customers.',
    faqIntro: 'Common questions about our web development process, technology choices, hosting setup, and performance optimization standards.',
    benefits: [
      'Optimized loading speed and high performance (Core Web Vitals compliant)',
      'Highly responsive UI designed for mobile, tablet, and desktop viewports',
      'SEO-friendly structure for maximum online search visibility',
      'State-of-the-art security practices to protect customer data',
      'Flexible layouts designed for modern brand styling and aesthetics'
    ],
    features: [
      { title: 'Single Page Applications (SPAs)', desc: 'Dynamic, highly interactive web applications built with React and modern client-side libraries.' },
      { title: 'Progressive Web Apps (PWAs)', desc: 'Mobile-like web applications that work offline and load instantly.' },
      { title: 'Corporate Portals', desc: 'Secure internal and external websites for client management and company collaboration.' },
      { title: 'CMS Implementations', desc: 'Flexible, headless content management systems for easy updates and editorial workflows.' }
    ],
    process: [
      { step: '01', name: 'Wireframing & UI Design', desc: 'Crafting responsive layouts, interactive mockups, and cohesive visual identities.' },
      { step: '02', name: 'Frontend Engineering', desc: 'Translating design mockups into semantic, high-performance HTML/CSS and Javascript.' },
      { step: '03', name: 'Backend Integration', desc: 'Developing secure server APIs, database engines, and content routing logic.' },
      { step: '04', name: 'Performance Optimization', desc: 'Minifying assets, implementing server rendering, and setting up edge caching networks.' },
      { step: '05', name: 'Release & Monitoring', desc: 'Launching to secure production environments with integrated telemetry monitoring.' }
    ],
    technologies: ['Next.js', 'React.js', 'Node.js', 'CSS Modules', 'GraphQL', 'Vercel', 'MongoDB'],
    relatedSolutions: [
      { slug: 'startup-mvp', title: 'Startup MVP Development' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ],
    relatedIndustries: [
      { slug: 'saas', title: 'SaaS' },
      { slug: 'retail', title: 'Retail' },
      { slug: 'education', title: 'Education' }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    heroTitle: 'Cross-Platform Mobile Applications',
    heroSubtitle: 'Build high-performance native and cross-platform mobile apps that engage users on iOS and Android platforms.',
    overview: 'Maximize your mobile reach with custom iOS and Android applications. We specialize in cross-platform mobile app development, creating applications that share a single codebase while delivering a completely native feel, high performance, and deep integration with mobile device hardware.',
    overviewP2: 'Cross-platform development with React Native allows us to deliver a single shared codebase while achieving native-grade performance on both iOS and Android. We configure native modules for camera, biometrics, push notifications, Bluetooth peripherals, and GPS to unlock full device capability.',
    overviewP3: 'Every screen and interaction is optimized for mobile ergonomics — thumb-reachable navigation, fluid micro-animations, and haptic feedback. We manage the full App Store and Google Play submission process, ensuring your application meets marketplace guidelines from the very first release.',
    capabilitiesDesc: 'From cross-platform React Native apps to IoT device interfaces, our mobile expertise delivers high-performance, device-native digital products.',
    faqIntro: 'Common questions about mobile platforms, React Native development, device integrations, and the app store submission process.',
    benefits: [
      'Faster time-to-market with shared cross-platform codebases',
      'Native-grade performance, touch interactions, and fluid animations',
      'Seamless access to device hardware (GPS, Camera, Push Notifications)',
      'Secure offline storage and sync capabilities',
      'Full compliance with Apple App Store and Google Play guidelines'
    ],
    features: [
      { title: 'Cross-Platform Apps', desc: 'High-performance applications built using React Native for native iOS and Android reach.' },
      { title: 'Mobile Commerce Platforms', desc: 'Secure, conversion-driven mobile shopping experiences with integrated payments.' },
      { title: 'Offline-First Apps', desc: 'Database syncing strategies that keep your mobile app functional without active internet.' },
      { title: 'IoT Mobile Interfaces', desc: 'Connect and control hardware assets and IoT sensors over BLE, WiFi, and NFC.' }
    ],
    process: [
      { step: '01', name: 'User Flow Mapping', desc: 'Designing intuitive pathways for mobile actions to minimize friction.' },
      { step: '02', name: 'Visual Interface Design', desc: 'Creating premium layouts optimized for thumb-reach and mobile screens.' },
      { step: '03', name: 'App Development', desc: 'Coding custom React Native applications and configuring native dependencies.' },
      { step: '04', name: 'Beta Distribution', desc: 'Deploying builds via TestFlight and Google Play Console for early stakeholder testing.' },
      { step: '05', name: 'App Store Submission', desc: 'Guiding deployment through store review processes to successful public release.' }
    ],
    technologies: ['React Native', 'Expo', 'iOS (Swift)', 'Android (Kotlin)', 'Firebase', 'SQLite', 'Node.js'],
    relatedSolutions: [
      { slug: 'startup-mvp', title: 'Startup MVP Development' }
    ],
    relatedIndustries: [
      { slug: 'retail', title: 'Retail' },
      { slug: 'healthcare', title: 'Healthcare' }
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    heroTitle: 'User Centric Experience Design',
    heroSubtitle: 'Craft premium, intuitive, and conversion-optimized interfaces that elevate your brand and delight your users.',
    overview: 'Great software starts with exceptional design. Our UI/UX design services balance business logic with clean layout aesthetics. We map customer journeys, conduct user research, and build detailed component design systems to deliver digital products that are a joy to use.',
    overviewP2: 'Our design process begins with deep user empathy — we conduct stakeholder interviews, map customer journeys, and build rich user personas before a single pixel is created. This research foundation ensures every layout decision is grounded in real behavioral data rather than aesthetic guesswork.',
    overviewP3: 'From atomic design component libraries to polished high-fidelity prototypes, we deliver comprehensive design systems that allow your engineering team to build consistently and quickly. Our designs are handed off with clear annotations, spacing specs, and export-ready assets for a frictionless development handoff.',
    capabilitiesDesc: 'From user research and journey mapping to interactive prototypes and design systems, our UX practice creates interfaces that convert visitors into loyal users.',
    faqIntro: 'Common questions about our design workflow, prototyping standards, design system delivery, and developer handoff process.',
    benefits: [
      'Deep user insights driving intuitive layout choices',
      'Cohesive design systems for consistent brand identity across products',
      'Improved user satisfaction and increased conversion rates',
      'Reduced development costs through validated interactive prototypes',
      'Strict adherence to WCAG accessibility guidelines'
    ],
    features: [
      { title: 'User Research & Mapping', desc: 'Conduct interviews, define user personas, and build comprehensive journey maps.' },
      { title: 'Interactive Prototyping', desc: 'High-fidelity, clickable prototypes demonstrating animations and system workflows.' },
      { title: 'Component Design Systems', desc: 'Re-usable atomic components for streamlined design-to-development handoffs.' },
      { title: 'UX Audits', desc: 'Evaluate existing platforms to identify friction points and optimization potentials.' }
    ],
    process: [
      { step: '01', name: 'Empathize & Define', desc: 'Researching target demographics to understand their pain points and preferences.' },
      { step: '02', name: 'Information Architecture', desc: 'Organizing website hierarchy and screen layouts for clear navigation pathways.' },
      { step: '03', name: 'Wireframing', desc: 'Creating low-fidelity layout plans to align on structural elements.' },
      { step: '04', name: 'Visual UI Styling', desc: 'Applying brand colors, fonts, card styles, and high-fidelity layouts.' },
      { step: '05', name: 'Interactive Testing', desc: 'Testing interface flow with target audiences to refine user interaction.' }
    ],
    technologies: ['Figma', 'Adobe XD', 'Prototyping', 'Design Tokens', 'Vanilla CSS', 'Framer Motion'],
    relatedSolutions: [
      { slug: 'startup-mvp', title: 'Startup MVP Development' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ],
    relatedIndustries: [
      { slug: 'saas', title: 'SaaS' },
      { slug: 'retail', title: 'Retail' }
    ]
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    heroTitle: 'Intelligent AI & Process Automation',
    heroSubtitle: 'Leverage machine learning, LLMs, and smart automations to boost operational efficiency and optimize decision making.',
    overview: 'Transform manual operations into intelligent, self-driving processes. Our AI & Automation services specialize in integrating state-of-the-art artificial intelligence models (LLMs, neural networks) and automated workflows (RPA) into your software pipelines, saving time and unlocking data-driven insights.',
    overviewP2: 'Our AI engineers integrate pre-trained foundation models — including GPT-4, Claude, and open-source LLMs — directly into your internal tools, customer portals, and operational dashboards. Model responses are sandboxed, monitored, and validated with custom guardrails to prevent hallucinations and ensure enterprise-grade reliability.',
    overviewP3: 'Beyond LLM integrations, we deploy robotic process automation (RPA) agents that mimic human actions across web browsers and desktop applications, eliminating repetitive manual work entirely. These workflows are instrumented, monitored, and continuously optimized to increase throughput as your business scales.',
    capabilitiesDesc: 'From LLM deployments and predictive analytics to RPA workflows, we make your operations smarter, faster, and significantly more cost-efficient.',
    faqIntro: 'Common questions about AI model integrations, automation pipelines, training data requirements, and production deployment strategies.',
    benefits: [
      'Drastic reduction in manual data processing and entry error rates',
      '24/7 autonomous operation for repetitive business workflows',
      'Data-driven predictions enabling pro-active business decisions',
      'Custom LLM integrations for intelligent customer services',
      'Rapid scaling of operational output without proportional hiring'
    ],
    features: [
      { title: 'Large Language Model (LLM) Integration', desc: 'Deploy customized LLMs for chat systems, semantic document search, and data extraction.' },
      { title: 'Predictive Analytics Systems', desc: 'Harness historical data patterns to forecast demands, inventory levels, or customer churn.' },
      { title: 'Robotic Process Automation (RPA)', desc: 'Deploy software agents that automate repetitive browser or desktop business tasks.' },
      { title: 'Natural Language Processing (NLP)', desc: 'Implement automated email sorting, sentiment analysis, and smart entity recognition.' }
    ],
    process: [
      { step: '01', name: 'Data Readiness Audit', desc: 'Assessing your data repositories for volume, formatting, and model suitability.' },
      { step: '02', name: 'Model Selection & Training', desc: 'Selecting pre-trained architectures and fine-tuning with corporate datasets.' },
      { step: '03', name: 'Pipeline Orchestration', desc: 'Building secure web APIs to connect AI modules to your core software applications.' },
      { step: '04', name: 'Guardrails & Safety', desc: 'Configuring validation schemas to prevent model hallucinations and secure data logs.' },
      { step: '05', name: 'Deployment & Monitoring', desc: 'Launching processes to cloud clusters with ongoing drift detection.' }
    ],
    technologies: ['Python', 'PyTorch', 'OpenAI API', 'Hugging Face', 'FastAPI', 'AWS SageMaker', 'LangChain'],
    relatedSolutions: [
      { slug: 'ai-solutions', title: 'AI Solutions' },
      { slug: 'business-automation', title: 'Business Process Automation' }
    ],
    relatedIndustries: [
      { slug: 'healthcare', title: 'Healthcare' },
      { slug: 'finance', title: 'Finance' },
      { slug: 'manufacturing', title: 'Manufacturing' }
    ]
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud & DevOps',
    heroTitle: 'Scalable Cloud Infrastructure & CI/CD',
    heroSubtitle: 'Optimize your cloud deployment pipeline with Infrastructure as Code, continuous integration, and rock-solid hosting architectures.',
    overview: 'Ensure 99.9% uptime and lightning-fast developer iteration loops. Our Cloud & DevOps services configure cloud ecosystems (AWS, GCP, Azure), automate testing/deployment pipelines, and implement containerized orchestration tools, enabling secure, scaling deployments.',
    overviewP2: 'We configure multi-region cloud environments using Infrastructure as Code principles (Terraform, Pulumi), making your infrastructure reproducible, version-controlled, and fully auditable. Load balancers, autoscaling groups, and distributed database clusters are designed to handle sudden traffic spikes without any service disruption.',
    overviewP3: 'Our CI/CD pipelines trigger automated test suites, container builds, and blue-green deployments on every code merge — compressing your release cycle from weeks to hours. Every pipeline includes cloud security scanning, SAST analysis, and dependency vulnerability checks to keep your production environment continuously protected.',
    capabilitiesDesc: 'From CI/CD automation and Kubernetes orchestration to cloud security audits and IaC scripting, we engineer infrastructure that scales reliably.',
    faqIntro: 'Common questions about cloud architecture design, DevOps pipeline setup, containerization strategies, and infrastructure cost management.',
    benefits: [
      'Substantially reduced deployment cycle times and developer overhead',
      'Automated autoscaling to handle unexpected consumer traffic spikes',
      'Enhanced system uptime and rapid recovery from outages',
      'Infrastructure as Code (IaC) for easily repeatable testing environments',
      'Continuous security monitoring and compliance guardrails'
    ],
    features: [
      { title: 'CI/CD Pipeline Automation', desc: 'Build pipelines that test, build, and deploy code updates automatically on every merge.' },
      { title: 'Container Orchestration', desc: 'Design microservices managed by Kubernetes and Docker for maximum resource density.' },
      { title: 'Infrastructure as Code (IaC)', desc: 'Codify infrastructure setups using Terraform to prevent environment configuration drifts.' },
      { title: 'Cloud Security Audits', desc: 'Secure cloud VPCs, manage IAM keys, and configure WAF network firewalls.' }
    ],
    process: [
      { step: '01', name: 'Infrastructure Audit', desc: 'Mapping current server assets, detecting bottlenecks, and auditing access logs.' },
      { step: '02', name: 'Pipeline Design', desc: 'Modeling git workflows, build steps, container configurations, and test suites.' },
      { step: '03', name: 'Terraform Scripting', desc: 'Writing clean IaC scripts to provision staging and production environments.' },
      { step: '04', name: 'Deployment Setup', desc: 'Connecting repository hooks to trigger cloud build containers automatically.' },
      { step: '05', name: 'Telemetry Dashboarding', desc: 'Configuring Datadog/Prometheus monitoring and pager alerts for system anomalies.' }
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux', 'Nginx'],
    relatedSolutions: [
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ],
    relatedIndustries: [
      { slug: 'finance', title: 'Finance' },
      { slug: 'saas', title: 'SaaS' }
    ]
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    heroTitle: 'Multi-Tenant SaaS Application Engineering',
    heroSubtitle: 'Architect and develop modern software-as-a-service platforms featuring secure multi-tenancy, subscription billing, and admin panels.',
    overview: 'Building a SaaS platform requires a distinct set of engineering decisions. From structuring isolated multi-tenant databases to designing stripe subscription logic, we provide full-cycle SaaS development services designed to get your subscription business launched, running, and scaling.',
    overviewP2: 'Multi-tenancy is the cornerstone of every SaaS product we build. We architect logical or physical tenant isolation depending on your compliance requirements, ensuring absolute data privacy between customers while keeping infrastructure costs manageable. Stripe subscriptions, feature flags, and tier-based access controls are built in from day one.',
    overviewP3: 'Our SaaS platforms ship with comprehensive admin control panels, usage analytics dashboards, and automated onboarding flows. We optimize for activation rate and long-term retention from the very first design sprint — building the instrumentation needed to understand user behavior and iterate quickly on features that matter most.',
    capabilitiesDesc: 'From multi-tenant architecture and subscription billing engines to customer analytics and admin portals, we build SaaS products that scale.',
    faqIntro: 'Common questions about SaaS architecture patterns, multi-tenancy models, Stripe integration, and product launch strategy.',
    benefits: [
      'Secure, high-performance database design with logical tenant isolation',
      'Turnkey billing engines with stripe subscription management',
      'Feature-flag configurations enabling modular product tiering',
      'Comprehensive system administration control panels',
      'Developer-friendly integrations for fast partner onboarding'
    ],
    features: [
      { title: 'Multi-Tenant Database Architectures', desc: 'Isolate user workspaces and protect data privacy with row-level security or distinct DB schemas.' },
      { title: 'Subscription & Billing Engines', desc: 'Stripe, Braintree, and Chargebee payment portals with recurring billing and automated dunning.' },
      { title: 'Customer Onboarding Analytics', desc: 'Embed dashboards to analyze onboarding friction points and usage patterns.' },
      { title: 'Admin & Support Portals', desc: 'Give company support agents full control over user provisioning, feature flags, and logs.' }
    ],
    process: [
      { step: '01', name: 'Product Scope Alignment', desc: 'Defining MVP milestones, user tiers, access privileges, and payment rules.' },
      { step: '02', name: 'Architecture Blueprinting', desc: 'Detailing multi-tenant isolation schemas and third-party SaaS integrations.' },
      { step: '03', name: 'Agile Coding', desc: 'Developing the modular frontend, backend microservices, and billing connections.' },
      { step: '04', name: 'Tenant Validation Testing', desc: 'Simulating complex tenant operations to guarantee absolute data segregation.' },
      { step: '05', name: 'Release Strategy', desc: 'Launching the MVP with analytical trackers configured to capture early usage data.' }
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis', 'Docker', 'AWS'],
    relatedSolutions: [
      { slug: 'startup-mvp', title: 'Startup MVP Development' },
      { slug: 'ai-solutions', title: 'AI Solutions' }
    ],
    relatedIndustries: [
      { slug: 'saas', title: 'SaaS' },
      { slug: 'finance', title: 'Finance' }
    ]
  },
  {
    slug: 'crm-development',
    title: 'CRM Development',
    heroTitle: 'Custom Customer Relationship Management Systems',
    heroSubtitle: 'Empower your sales, marketing, and customer service teams with a tailored CRM designed for your workflow.',
    overview: 'Off-the-shelf CRMs are often bloated, expensive, and difficult to adapt to specific sales paths. We develop custom CRM applications designed around your precise customer pipelines, lead scoring rules, communication channels, and reporting dashboards.',
    overviewP2: 'Unlike off-the-shelf CRM tools that charge per seat and restrict customization, our custom platforms are built entirely around your sales workflow. Every pipeline stage, lead scoring rule, and automation trigger reflects your actual business process — not a generic template your team has to awkwardly adapt around.',
    overviewP3: 'We integrate your CRM deeply with email (SMTP/IMAP), VOIP call logging, calendar scheduling, and marketing automation APIs. Complete communication histories — calls, emails, notes — are consolidated into a single contact record, giving your sales team the context they need to close deals faster and smarter.',
    capabilitiesDesc: 'From visual lead pipelines and sales automation triggers to communication dashboards and performance analytics, our CRM centralizes your sales engine.',
    faqIntro: 'Common questions about custom CRM development, existing data migration, third-party integrations, and sales automation capabilities.',
    benefits: [
      '100% tailored sales funnel reflecting your actual company workflow',
      'Zero monthly per-user licensing fees for sustainable team scaling',
      'Deep integration with email, VOIP systems, and calendar tools',
      'Custom lead scoring dashboards for focused outreach strategies',
      'Absolute control over database privacy and contact records'
    ],
    features: [
      { title: 'Lead & Contact Pipelines', desc: 'Intuitive kanban visual pipelines to track lead movements and contact histories.' },
      { title: 'Sales Automation Triggers', desc: 'Configure automatic follow-up emails, sales reminders, and team assignment rules.' },
      { title: 'Communication Dashboards', desc: 'Log emails, SMS messages, and VOIP voice call transcripts directly to contact sheets.' },
      { title: 'Performance Analytics', desc: 'Generate graphs analyzing sales conversion ratios, pipeline velocity, and team metrics.' }
    ],
    process: [
      { step: '01', name: 'Workflow Analysis', desc: 'Mapping your existing sales funnels, pipeline stages, and contact data points.' },
      { step: '02', name: 'Database Architecture', desc: 'Defining relational structures for companies, contacts, leads, and emails.' },
      { step: '03', name: 'Interface Design', desc: 'Styling high-fidelity, clean layouts matching sales rep operational speed.' },
      { step: '04', name: 'System Integrations', desc: 'Connecting SMTP email, calendar APIs, and text message gateways.' },
      { step: '05', name: 'Handoff & Onboarding', desc: 'Deploying the system and conducting team-wide training sessions.' }
    ],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'Twilio API', 'SendGrid', 'Redis', 'Tailored CSS'],
    relatedSolutions: [
      { slug: 'crm-erp', title: 'CRM & ERP Solutions' },
      { slug: 'business-automation', title: 'Business Process Automation' }
    ],
    relatedIndustries: [
      { slug: 'retail', title: 'Retail' },
      { slug: 'finance', title: 'Finance' }
    ]
  },
  {
    slug: 'erp-development',
    title: 'ERP Development',
    heroTitle: 'Custom Enterprise Resource Planning Systems',
    heroSubtitle: 'Consolidate inventory, procurement, finances, human resources, and operations into a single custom ERP system.',
    overview: 'Modern enterprises require central, integrated databases to run operations smoothly. Our custom ERP development services unify disjointed processes into a unified ecosystem, providing executive dashboards, automated stock tracking, procurement, and financials.',
    overviewP2: 'Building a custom ERP requires precise understanding of how each department shares and consumes data. We conduct on-site operational audits to map existing workflows before designing the relational database schema that ties inventory, procurement, finance, and HR data into a coherent single source of truth.',
    overviewP3: 'Our modular ERP architecture allows you to go live department by department — starting with the highest-priority modules and expanding incrementally without disrupting live operations. Each module ships with role-based access controls, audit logs, and export capabilities to meet operational transparency and compliance requirements.',
    capabilitiesDesc: 'From inventory tracking and procurement pipelines to financial ledgers and HR dashboards, our ERP solutions consolidate every business function into one platform.',
    faqIntro: 'Common questions about custom ERP architecture, multi-department module design, data migration from legacy systems, and phased deployment strategies.',
    benefits: [
      'Eliminate disjointed databases with a single, consolidated corporate system',
      'Real-time data synchronization across all company departments',
      'Automated supply chain management, warehousing, and inventory alerts',
      'Custom reporting structures for faster business decision mapping',
      'High security infrastructure for sensitive financial and operational logs'
    ],
    features: [
      { title: 'Inventory & Warehousing Modules', desc: 'Real-time stock level tracking, automated barcode generation, and re-order triggers.' },
      { title: 'Financials & Ledger Management', desc: 'Track billing, client invoicing, employee payroll, and ledger accounts.' },
      { title: 'Procurement Pipelines', desc: 'Manage vendor contacts, purchase orders, bids, and incoming shipments.' },
      { title: 'HR & Personnel Dashboards', desc: 'Organize employee schedules, task logs, leave sheets, and performance metrics.' }
    ],
    process: [
      { step: '01', name: 'Operational Audit', desc: 'Conducting site visits and auditing departments to map operational requirements.' },
      { step: '02', name: 'Consolidated Schema Design', desc: 'Blueprinting a highly relational database model to span all business metrics.' },
      { step: '03', name: 'Modular Programming', desc: 'Coding separate modules (Inventory, Finance, HR) and connecting them.' },
      { step: '04', name: 'Stress & Integrity Testing', desc: 'Testing concurrency, large database queries, and automatic backups.' },
      { step: '05', name: 'Gradual Rollout', desc: 'Deploying modules in phases to ensure continuous business operations.' }
    ],
    technologies: ['Django', 'Python', 'React.js', 'PostgreSQL', 'Docker', 'AWS RDS', 'Redux'],
    relatedSolutions: [
      { slug: 'crm-erp', title: 'CRM & ERP Solutions' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ],
    relatedIndustries: [
      { slug: 'manufacturing', title: 'Manufacturing' },
      { slug: 'finance', title: 'Finance' },
      { slug: 'retail', title: 'Retail' }
    ]
  },
  {
    slug: 'support-maintenance',
    title: 'Support & Maintenance',
    heroTitle: '24/7 Managed Software Support',
    heroSubtitle: 'Ensure your critical applications run smoothly with continuous monitoring, vulnerability patching, and bug fixes.',
    overview: 'Software requires continuous oversight to stay secure and functional. Our application support and maintenance services provide ongoing updates, bug mitigation, telemetry setups, and performance optimizations to protect your custom technology investments.',
    overviewP2: 'Our managed support agreements include proactive monitoring through Datadog, AWS CloudWatch, and Sentry — alerting your team and ours the moment CPU spikes, memory leaks, or error rate anomalies are detected. We maintain defined SLA response times for both critical production emergencies and scheduled maintenance tasks.',
    overviewP3: 'Beyond reactive bug fixes, we conduct regular scheduled audits of your application\'s performance benchmarks, dependency security advisories, and infrastructure cost efficiency. These insights feed into a quarterly optimization roadmap that continuously improves the stability and speed of your software investment.',
    capabilitiesDesc: 'From telemetry monitoring and security hot-patching to database optimization and disaster recovery drills, we keep your production systems running at peak.',
    faqIntro: 'Common questions about our support packages, SLA commitments, monitoring tool setup, and what our ongoing maintenance workflow looks like.',
    benefits: [
      'Peace of mind with 24/7 server telemetry and response SLAs',
      'Fast turnaround for critical bug fixes and hot-patch updates',
      'Proactive application optimization preventing speed degradation',
      'Automated daily backup systems and disaster recovery plans',
      'Ongoing compliance updates for data protection regulations (GDPR)'
    ],
    features: [
      { title: 'Server Telemetry Setup', desc: 'Continuous monitor configuration for server memory, error rates, and connection speeds.' },
      { title: 'Security Hot-Patching', desc: 'Immediate installation of package patches and security updates as threats arise.' },
      { title: 'Bug Remediation', desc: 'A dedicated helpdesk team to diagnose, verify, and resolve issues reported by users.' },
      { title: 'Database Optimization', desc: 'Ongoing indexing and maintenance to keep database queries running fast.' }
    ],
    process: [
      { step: '01', name: 'Asset Documentation', desc: 'Mapping your architecture, codebases, dependency configurations, and server keys.' },
      { step: '02', name: 'Telemetry Integration', desc: 'Installing logging frameworks and automatic alert tools.' },
      { step: '03', name: 'Scheduled Auditing', desc: 'Performing weekly checks on backups, server storage, and package alerts.' },
      { step: '04', name: 'Continuous Upgrades', desc: 'Implementing minor updates and UI improvements requested by your business.' },
      { step: '05', name: 'Disaster Drills', desc: 'Regular validation testing of database backup restorations and emergency failovers.' }
    ],
    technologies: ['Sentry', 'Datadog', 'AWS CloudWatch', 'GitHub', 'Linux Shell', 'Node.js', 'Nginx'],
    relatedSolutions: [
      { slug: 'business-automation', title: 'Business Process Automation' }
    ],
    relatedIndustries: [
      { slug: 'education', title: 'Education' },
      { slug: 'healthcare', title: 'Healthcare' },
      { slug: 'finance', title: 'Finance' }
    ]
  }
];
