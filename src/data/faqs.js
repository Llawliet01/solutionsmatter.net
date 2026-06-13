export const faqs = [
  {
    category: 'Services',
    question: 'What types of custom software development do you specialize in?',
    answer: 'We specialize in custom enterprise application engineering, API & systems integration, database design, and legacy system modernization. Our software is designed to scale and run securely in modern cloud infrastructures.',
    relatedService: { slug: 'custom-software-development', title: 'Custom Software Development' },
    tags: ['custom code', 'enterprise', 'modernization'],
    extra: 'services'
  },
  {
    category: 'Services',
    question: 'Do you build mobile applications for both iOS and Android?',
    answer: 'Yes, we develop high-performance cross-platform mobile apps using React Native. This allows us to deliver native-grade performance and access device hardware (GPS, notifications) using a shared codebase, reducing launch times and budgets.',
    relatedService: { slug: 'mobile-app-development', title: 'Mobile App Development' },
    tags: ['mobile', 'react-native', 'ios-android'],
    extra: 'mobile'
  },
  {
    category: 'Solutions',
    question: 'How quickly can you build and launch a Startup MVP?',
    answer: 'Our Startup MVP Development program is optimized for speed. Depending on scope, we can design, engineer, and deploy a fully functional MVP with core features in 4 to 8 weeks, helping you validate your concept and pitches early.',
    relatedService: { slug: 'saas-development', title: 'SaaS Development' },
    tags: ['mvp', 'speed-launch', 'startup'],
    extra: 'mvp-steps'
  },
  {
    category: 'Solutions',
    question: 'Can you automate our existing manual spreadsheets and tool workflows?',
    answer: 'Yes. Our Business Process Automation solutions connect your disjointed business tools via secure web APIs, automating data syncing, report generation, and notifications to remove operational friction.',
    relatedService: { slug: 'support-maintenance', title: 'Support & Maintenance' },
    tags: ['automation', 'api-sync', 'efficiency'],
    extra: 'automation'
  },
  {
    category: 'Process',
    question: 'What software development methodology do you follow?',
    answer: 'We utilize Agile development methodologies. We work in two-week iterative sprints, providing regular system updates and demonstrations. This keeps our development process transparent and adaptable to your feedback.',
    relatedService: { slug: 'ui-ux-design', title: 'UI/UX Design' },
    tags: ['agile', 'sprints', 'transparency'],
    extra: 'process-steps'
  },
  {
    category: 'Development',
    question: 'Which technology stack do you recommend for SaaS platforms?',
    answer: 'For modern SaaS applications, we recommend Next.js and React for the frontend, Node.js for backend microservices, and PostgreSQL for robust multi-tenant database systems, running containerized on AWS or Vercel.',
    relatedService: { slug: 'saas-development', title: 'SaaS Development' },
    tags: ['nextjs', 'postgresql', 'aws-vercel'],
    extra: 'tech-stack'
  },
  {
    category: 'Support',
    question: 'Do you provide maintenance and support after the software launches?',
    answer: 'Yes, we provide comprehensive 24/7 support and maintenance packages. We configure active server telemetry monitoring, deploy regular security patches, fix bugs, and run database backups to protect your application investments.',
    relatedService: { slug: 'support-maintenance', title: 'Support & Maintenance' },
    tags: ['maintenance', 'monitoring', 'security-patches'],
    extra: 'support'
  },
  {
    category: 'Process',
    question: 'How long does a typical software project take from start to finish?',
    answer: 'Project timelines vary based on scope and complexity. A simple web application or MVP typically takes 4–8 weeks. Mid-sized platforms with integrations generally require 3–5 months. Enterprise-grade systems with advanced workflows can take 6–12 months. We provide detailed project roadmaps during the discovery phase so you always know what to expect.',
    tags: ['timelines', 'planning', 'delivery']
  },
  {
    category: 'Process',
    question: 'How do you handle project communication and progress tracking?',
    answer: 'We assign a dedicated project manager to every engagement. Weekly sprint reviews, a shared project dashboard, and async communication via Slack or Microsoft Teams keep you informed at all times. You have full visibility into task completion, blockers, and upcoming milestones in real time.',
    tags: ['communication', 'project-management', 'slack-teams'],
    extra: 'communication'
  },
  {
    category: 'Services',
    question: 'Can you integrate AI and machine learning into our existing application?',
    answer: 'Yes. We integrate AI capabilities including natural language processing, predictive analytics, image recognition, and recommendation engines into existing systems via REST APIs and model deployment pipelines. We work with OpenAI, Google Vertex AI, and AWS SageMaker.',
    tags: ['ai-integration', 'llm', 'machine-learning'],
    extra: 'ai'
  },
  {
    category: 'Services',
    question: 'Do you develop e-commerce platforms and marketplace solutions?',
    answer: 'Absolutely. We build fully custom e-commerce platforms with multi-vendor support, dynamic product catalogs, secure payment gateways (Stripe, Razorpay, PayPal), real-time inventory management, and analytics dashboards — all tailored to your specific business model.',
    tags: ['ecommerce', 'marketplace', 'stripe'],
    extra: 'ecommerce'
  },
  {
    category: 'Development',
    question: 'Who owns the source code and intellectual property after the project?',
    answer: 'You do — completely. Upon project completion and final payment, all source code, design assets, and intellectual property are transferred fully to your ownership. We provide clean, well-documented handoff packages including deployment scripts and codebase walkthroughs.',
    tags: ['ip-ownership', 'source-code', 'handoff']
  },
  {
    category: 'Development',
    question: 'How do you ensure the security of the software you build?',
    answer: 'Security is embedded throughout our development lifecycle. We implement OWASP Top 10 protections, data encryption at rest and in transit, role-based access control, secure token authentication (JWT/OAuth2), input sanitization, and conduct penetration testing before every major release.',
    tags: ['security', 'owasp', 'encryption'],
    extra: 'security'
  },
  {
    category: 'Support',
    question: 'Can you take over and maintain software built by another team?',
    answer: 'Yes. We regularly onboard projects built by other teams. Our process begins with a thorough codebase audit to assess technical debt and security gaps, followed by a refactoring roadmap. We gradually take over maintenance and feature development while ensuring zero disruption to your live users.',
    tags: ['legacy-takeover', 'audit', 'maintenance']
  },
  {
    category: 'Solutions',
    question: 'What cloud platforms do you deploy and manage applications on?',
    answer: 'We are proficient with AWS, Google Cloud Platform, Microsoft Azure, and Vercel for frontend deployments. We design cloud-native architectures using managed services such as RDS, Lambda, ECS, and S3, ensuring high availability, disaster recovery, and auto-scaling for production workloads.',
    tags: ['cloud-native', 'aws-gcp', 'devops'],
    extra: 'cloud'
  }
];

export const faqCategories = ['Services', 'Solutions', 'Process', 'Development', 'Support'];
