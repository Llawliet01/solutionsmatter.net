export const industries = [
  {
    slug: 'healthcare',
    title: 'Healthcare',
    overview: 'The healthcare industry demands secure, high-compliance digital tools that streamline patient experiences, automate diagnostics, and protect medical records. We engineer custom health-tech solutions that prioritize security, stability, and intuitive workflows.',
    challenges: [
      'Strict security compliance for patient data records',
      'Fragmented data transfer pipelines between diagnostic networks',
      'High administrative overhead for medical booking and tracking',
      'Legacy clinical databases that slow down care delivery metrics'
    ],
    recommendedServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'ai-automation', title: 'AI & Automation' }
    ],
    recommendedSolutions: [
      { slug: 'ai-solutions', title: 'AI Solutions' },
      { slug: 'business-automation', title: 'Business Process Automation' }
    ],
    technologies: ['React.js', 'Python', 'FastAPI', 'PostgreSQL', 'AWS CloudHSM', 'PyTorch'],
    caseStudies: [
      { slug: 'ai-driven-patient-diagnostics', title: 'AI-driven Patient Diagnostics' }
    ]
  },
  {
    slug: 'finance',
    title: 'Finance & Banking',
    overview: 'Financial systems require high-availability hosting infrastructure, encrypted databases, and robust APIs. We construct digital finance systems ranging from automated ledger platforms to cloud banking migrations.',
    challenges: [
      'Constant cybersecurity threats and data breach vulnerabilities',
      'Processing large concurrent data queries with zero lag',
      'Inflexible server setups that limit API expansion plans',
      'High maintenance fees associated with legacy hosting servers'
    ],
    recommendedServices: [
      { slug: 'cloud-devops', title: 'Cloud & DevOps' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    recommendedSolutions: [
      { slug: 'digital-transformation', title: 'Digital Transformation' },
      { slug: 'ai-solutions', title: 'AI Solutions' }
    ],
    technologies: ['Go', 'Docker', 'Kubernetes', 'Terraform', 'PostgreSQL', 'AWS RDS', 'Linux'],
    caseStudies: [
      { slug: 'secure-cloud-finance-migration', title: 'Secure Cloud Finance Migration' }
    ]
  },
  {
    slug: 'retail',
    title: 'Retail & E-Commerce',
    overview: 'Modern retail relies on multi-channel customer pipelines and unified logistics tracking. We develop custom mobile retail apps, kanban CRM structures, and automated inventory syncing platforms.',
    challenges: [
      'Disconnected inventory logs across separate retail locations',
      'High client friction on mobile commerce purchase pathways',
      'Outdated sales record management that limits marketing decisions',
      'Lack of automated customer feedback tracking channels'
    ],
    recommendedServices: [
      { slug: 'mobile-app-development', title: 'Mobile App Development' },
      { slug: 'crm-development', title: 'CRM Development' }
    ],
    recommendedSolutions: [
      { slug: 'crm-erp', title: 'CRM & ERP Solutions' },
      { slug: 'startup-mvp', title: 'Startup MVP Development' }
    ],
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
    caseStudies: [
      { slug: 'e-commerce-mobile-transformation', title: 'E-commerce Mobile Transformation' }
    ]
  },

  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    overview: 'Streamline procurement, warehouse stock routing, and shop floor logistics with centralized ERP portals designed for heavy enterprise scaling.',
    challenges: [
      'Fragmented spreadsheets leading to inaccurate stock levels',
      'Slow manual processing of procurement purchase contracts',
      'Lack of real-time machinery telemetry tracking alerts',
      'Outdated employee scheduling tools causing production delays'
    ],
    recommendedServices: [
      { slug: 'erp-development', title: 'ERP Development' },
      { slug: 'custom-software-development', title: 'Custom Software Development' }
    ],
    recommendedSolutions: [
      { slug: 'crm-erp', title: 'CRM & ERP Solutions' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ],
    technologies: ['Python', 'Django', 'React.js', 'PostgreSQL', 'Docker', 'Redux'],
    caseStudies: [
      { slug: 'manufacturing-erp-modernization', title: 'Manufacturing ERP Modernization' }
    ]
  },
  {
    slug: 'saas',
    title: 'SaaS & Technology',
    overview: 'We design and develop multi-tenant software-as-a-service applications featuring stripe subscription integrations and modular admin panels.',
    challenges: [
      'Configuring logical tenant isolation at the database level',
      'Setting up multi-tier recurring billing gates',
      'High onboarding dropout rates due to slow frontend load speeds',
      'Managing feature flags and subscription logs across accounts'
    ],
    recommendedServices: [
      { slug: 'saas-development', title: 'SaaS Development' },
      { slug: 'ui-ux-design', title: 'UI/UX Design' }
    ],
    recommendedSolutions: [
      { slug: 'startup-mvp', title: 'Startup MVP Development' },
      { slug: 'digital-transformation', title: 'Digital Transformation' }
    ],
    technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Vercel'],
    caseStudies: [
      { slug: 'saas-analytics-platform', title: 'SaaS Analytics Platform' }
    ]
  }
];
