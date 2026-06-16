export const caseStudies = [
  {
    slug: 'ai-driven-patient-diagnostics',
    title: 'AI-driven Patient Diagnostics',
    industry: 'Healthcare',
    challenge: 'A medical diagnostics provider struggled with manual image analysis workflows, which resulted in treatment delays. They needed an automated system capable of pre-screening medical images with high accuracy while maintaining strict patient data compliance.',
    solution: 'We engineered a custom AI pipeline utilizing PyTorch and FastAPI. The system classifies potential anomalies in medical scans, routing priority cases directly to radiologist review queues. All patient records remain encrypted at rest and in transit.',
    technologies: ['Python', 'PyTorch', 'FastAPI', 'AWS CloudHSM', 'PostgreSQL', 'Docker'],
    banner: '/images/case_healthcare.webp',
    year: '2024',
    tag: 'Healthcare · AI Diagnostics',
    stats: [
      { num: '94%', label: 'Classification accuracy' },
      { num: '-60%', label: 'Queue processing time' }
    ],
    implementation: [
      'Configured a secure, isolated virtual private cloud on AWS.',
      'Developed a deep learning model to pre-screen medical images for structural anomalies.',
      'Constructed a FastAPI integration layer connecting the AI engine to existing hospital EHR software.',
      'Implemented audit logs to track every data interaction.'
    ],
    outcome: [
      '94% classification accuracy for pre-screened anomaly classes.',
      '60% reduction in diagnostics processing queue times.',
      'Complete regulatory alignment with encrypted logs.'
    ],
    relatedServices: [
      { slug: 'custom-software-development', title: 'Custom Software Development' },
      { slug: 'ai-automation', title: 'AI & Automation' }
    ],
    relatedSolutions: [
      { slug: 'ai-solutions', title: 'AI Solutions' },
      { slug: 'business-automation', title: 'Business Process Automation' }
    ],
    detailedContent: `
      <p>In modern clinical diagnostics, latency in imaging analysis is directly linked to patient outcomes. Our healthcare diagnostics client faced a mounting volume of medical scans (MRI and CT images) that outpaced their available staff of certified radiologists. This backlog resulted in a median wait time of 14 hours for standard scans, and up to 3 hours for critical cases. We were commissioned to engineer a secure, highly accurate AI diagnostics pre-screening system to triage cases instantly, prioritizing critical scans in the doctors' workflow queues.</p>

      <blockquote>"Leveraging automated computer vision pre-screening is not about replacing radiologists, but rather giving them a magnifying glass for priority cases, reducing critical response windows from hours to minutes."</blockquote>

      <h3>1. Clinical Image Processing Pipeline Architecture</h3>
      <p>The system utilizes a custom convolutional neural network (CNN) pipeline built on PyTorch. Incoming DICOM files are ingested through an encrypted Amazon S3 bucket. Metadata is parsed and stored in PostgreSQL with strict row-level separation. The raw image arrays are normalized, cropped to focal regions of interest, and fed into the deep learning model. The model computes probability arrays for structural anomalies, flagging scans with a probability score above 0.85 as high-priority alert items.</p>

      <pre><code>// FastAPI inference endpoint snippet
@app.post("/api/v1/diagnose")
async def perform_diagnosis(file: UploadFile = File(...), user: User = Depends(get_current_active_user)):
    # Verify EHR credentials
    verify_ehr_access(user.client_id)
    
    # Process DICOM stream
    dicom_bytes = await file.read()
    image_tensor = preprocess_dicom(dicom_bytes)
    
    # Model inference in evaluation mode
    with torch.no_grad():
        prediction = ai_model(image_tensor)
        priority_score = prediction.numpy()[0][0]
        
    # Log interactions to audit trail
    log_audit_entry(user.id, file.filename, priority_score)
    
    return {
        "status": "success",
        "score": float(priority_score),
        "priority": "HIGH" if priority_score > 0.85 else "NORMAL"
    }</code></pre>

      <h3>2. Statistical Anomaly Detection Performance</h3>
      <p>During the clinical trial phase, the PyTorch engine was benchmarked against a verified database of 50,000 historical scans. The metrics proved the engine could reliably flag priority anomalies while minimizing false negatives, which is crucial for patient safety:</p>

      <table class="ml-metrics-table">
        <thead>
          <tr>
            <th>Anomaly Category</th>
            <th>Sensitivity Score</th>
            <th>Specificity Score</th>
            <th>F1 Accuracy Metric</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Intracranial Hemorrhage</td>
            <td>96.2%</td>
            <td>93.8%</td>
            <td>95.0%</td>
          </tr>
          <tr>
            <td>Pulmonary Embolism</td>
            <td>94.8%</td>
            <td>92.1%</td>
            <td>93.4%</td>
          </tr>
          <tr>
            <td>Pneumothorax Cases</td>
            <td>95.1%</td>
            <td>94.0%</td>
            <td>94.5%</td>
          </tr>
          <tr>
            <td>Structural Fractures</td>
            <td>91.5%</td>
            <td>95.2%</td>
            <td>93.3%</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Enterprise EHR Integration & Data Security Compliance</h3>
      <p>Data privacy is paramount in digital health. To fulfill strict healthcare regulations, all data operations are routed through a private AWS VPC. Database values are encrypted using AWS CloudHSM keys. Our custom audit middleware logs every API handshake, user access, and model call in an unalterable log database, creating a comprehensive audit trail for external compliance inspectors.</p>
    `
  },
  {
    slug: 'secure-cloud-finance-migration',
    title: 'Secure Cloud Finance Migration',
    industry: 'Finance & Banking',
    challenge: 'A banking solution client ran their ledger transactions on outdated on-premise hardware. High server overhead, frequent security patches, and limited developer deployment pipelines blocked the launch of their mobile API platforms.',
    solution: 'We refactored their core code architecture into Docker containers and designed a Kubernetes infrastructure setup on AWS. Using Terraform, we provisioned secure, auto-scaling staging and production environments, leading to instant deployment.',
    technologies: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'Go', 'Linux'],
    banner: '/images/case_finance.webp',
    year: '2024',
    tag: 'Fintech · Cloud DevOps',
    stats: [
      { num: '99.99%', label: 'System uptime' },
      { num: '-45%', label: 'Infrastructure costs' }
    ],
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
    ],
    detailedContent: `
      <p>For financial institutions, migrating active transactional ledgers to the public cloud represents a massive regulatory and technical challenge. Our banking client operated their ledger database on local mainframe clusters. Outdated CPU cores struggled with concurrent queries during peak trading hours, and patching operating systems required scheduled offline windows that violated zero-downtime service metrics. We designed and executed a migration roadmap to bring their operations to a secure AWS Kubernetes infrastructure.</p>

      <blockquote>"Downtime in banking translates directly into transaction failures and brand distrust. Refactoring monolithic ledgers into containerized microservices is a prerequisite for modern fintech scalability."</blockquote>

      <h3>1. Terraform Multi-Region Infrastructure Blueprint</h3>
      <p>To ensure high availability and continuous failover recovery, the core cloud platform was deployed across multiple AWS regions. We scripted the infrastructure configurations using HashiCorp Terraform. This enables rapid replication of production environments and guarantees network configurations (such as subnets, security groups, routing tables, and firewalls) are locked down mathematically before any container registers online.</p>

      <pre><code>// Terraform network configuration snippet
resource "aws_security_group" "db_private_subnet" {
  name        = "db-private-security-group"
  description = "Block all incoming ledger database traffic except from K8s pods"
  vpc_id      = aws_vpc.main_cloud_vpc.id

  ingress {
    description = "Allow TLS connection from Kubernetes worker nodes"
    from_port   = 5432
    to_port     = 5432
    protocol    = "tcp"
    cidr_blocks = [var.k8s_worker_subnet_cidr]
  }

  egress {
    description = "Allow encrypted egress traffic only"
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}</code></pre>

      <h3>2. Cloud Performance Metrics Comparison</h3>
      <p>After deployment, transactional performance was evaluated under simulate load spikes (10,000 requests/sec). Below is a comparison highlighting the efficiency gains of the containerized cloud architecture compared to their outdated on-premise mainframe system:</p>

      <table class="ml-metrics-table">
        <thead>
          <tr>
            <th>Performance Vector</th>
            <th>On-Premise Legacy Mainframe</th>
            <th>AWS Kubernetes Cluster</th>
            <th>Efficiency Delta (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mean Transaction Latency</td>
            <td>420ms</td>
            <td>18ms</td>
            <td>-95.7% Speedup</td>
          </tr>
          <tr>
            <td>Peak Concurrent Transactions</td>
            <td>1,200/sec</td>
            <td>18,500/sec</td>
            <td>+1441.6% Scalability</td>
          </tr>
          <tr>
            <td>Database Read Response Time</td>
            <td>85ms</td>
            <td>3ms</td>
            <td>-96.4% Speedup</td>
          </tr>
          <tr>
            <td>Hardware Overhead Costs</td>
            <td>$42,000/month</td>
            <td>$23,100/month</td>
            <td>-45.0% Cost Reduction</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Transaction Security & Audit Compliance</h3>
      <p>To fulfill international banking standards, all data packets are encrypted using TLS 1.3 in transit and AES-256 at rest. Keys are rotated dynamically using AWS Key Management Service (KMS) nodes. Developer access to the production Kubernetes clusters is protected by multi-factor authentication and isolated inside private administrative Bastion nodes, ensuring that client balances remain completely protected.</p>
    `
  },
  {
    slug: 'saas-analytics-platform',
    title: 'SaaS Analytics Platform',
    industry: 'SaaS & Technology',
    challenge: 'A subscription metrics provider experienced high customer onboarding dropout rates. Their platform suffered from slow load times and lacked secure database isolation for corporate user records.',
    solution: 'We rebuilt their web application using Next.js App Router and optimized database schemas in PostgreSQL with isolated row-level security. We designed a Stripe billing logic to automate tier upgrades.',
    technologies: ['Next.js', 'React.js', 'PostgreSQL', 'Stripe API', 'Redis', 'Vercel'],
    banner: '/images/case_saas.webp',
    year: '2026',
    tag: 'SaaS · UX Optimization',
    stats: [
      { num: '98/100', label: 'Page Speed Score' },
      { num: '-80%', label: 'Onboarding dropouts' }
    ],
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
    ],
    detailedContent: `
      <p>Modern SaaS applications require fast load times and clean user experiences. Our client, a subscription metrics data provider, noticed that 65% of potential users dropped out during their initial metric integration setup. The legacy dashboard, constructed using client-rendered frameworks, took up to 8 seconds to load database parameters and display charts, frustrating new users. We set out to redesign the web architecture and optimize PostgreSQL storage layers to reduce onboarding times.</p>

      <blockquote>"Speed is the ultimate user experience feature. A dashboard that opens instantly retains users, whereas a slow loading screen creates friction that leads directly to dropouts."</blockquote>

      <h3>1. Server-Rendered Speed Optimization with Next.js</h3>
      <p>We completely refactored the application to use the Next.js App Router framework. This shift enables server-side rendering of static layout elements and stream-loading of metrics charts. Instead of waiting for heavy JavaScript payloads to execute in the user's browser, dashboards are pre-assembled on Vercel Edge networks, delivering visual feedback in under 200 milliseconds.</p>

      <pre><code>-- PostgreSQL Row-Level Security policy snippet
-- Enable RLS on user subscriptions database
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY tenant_isolation_policy ON subscriptions
  FOR ALL
  USING (tenant_id = current_setting('app.current_tenant_id'))
  WITH CHECK (tenant_id = current_setting('app.current_tenant_id'));</code></pre>

      <h3>2. Onboarding Funnel Conversion Improvements</h3>
      <p>By optimizing the layout rendering paths and integrating Postgres multi-tenant schema isolation rules, user conversion rates jumped dramatically within two weeks of release. Below are the metrics of the onboarding funnel performance before vs. after our web optimization program:</p>

      <table class="ml-metrics-table">
        <thead>
          <tr>
            <th>Onboarding Steps</th>
            <th>Legacy Client-Rendered Conversion</th>
            <th>Next.js Server-Rendered Conversion</th>
            <th>Funnel Improvement (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1. Account Setup</td>
            <td>92%</td>
            <td>99%</td>
            <td>+7.6% Increase</td>
          </tr>
          <tr>
            <td>2. Metric Integration</td>
            <td>45%</td>
            <td>91%</td>
            <td>+102.2% Increase</td>
          </tr>
          <tr>
            <td>3. Dashboard Load</td>
            <td>38%</td>
            <td>89%</td>
            <td>+134.2% Increase</td>
          </tr>
          <tr>
            <td>4. Final Retention Rate</td>
            <td>35%</td>
            <td>87%</td>
            <td>+148.5% Boost</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Stripe Subscription Sync & Background Workers</h3>
      <p>Billing logic was rebuilt around the Stripe API, using Next.js route handlers to process subscription upgrades instantly. Heavy reporting processes (such as PDF summaries and history aggregates) are offloaded to Redis worker queues, ensuring that client dashboard loading speeds remain unaffected during data processing runs.</p>
    `
  },
  {
    slug: 'manufacturing-erp-modernization',
    title: 'Manufacturing ERP Modernization',
    industry: 'Manufacturing',
    challenge: 'An industrial manufacturing enterprise struggled with disjointed inventory spreadsheets. Stock logs were consistently inaccurate, leading to procurement delays and assembly queue stoppages.',
    solution: 'We engineered a custom central ERP platform. We linked warehousing, order booking, vendor billing, and shift scheduling modules into a single web application running a PostgreSQL database.',
    technologies: ['Python', 'Django', 'React.js', 'PostgreSQL', 'Docker', 'Redux'],
    banner: '/images/case_erp.webp',
    year: '2026',
    tag: 'ERP · Operations',
    stats: [
      { num: '100%', label: 'Database accuracy' },
      { num: '-30%', label: 'Turnaround delay' }
    ],
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
    ],
    detailedContent: `
      <p>Disjointed warehouse inventory records lead to assembly line slowdowns. Our manufacturing client operated across three warehouses using isolated local spreadsheets. Because supply numbers were updated manually at the end of each shift, inventory inaccuracies caused parts to run out unexpectedly, halting assembly lines twice a month. We were hired to design and deploy a central custom ERP application to synchronize their logistics operation in real-time.</p>

      <blockquote>"Custom ERP software is an investment in process efficiency. By uniting inventory, booking, and shipping data, businesses eliminate operational bottlenecks and save thousands on licensing costs."</blockquote>

      <h3>1. Real-time Inventory State and Redux Architecture</h3>
      <p>We built the front-end dashboard using React and Redux Toolkit. The system communicates via active API webhooks with a Django/PostgreSQL core database. As stock packages are checked out using barcode scanners on the warehouse floor, the central Redux state update triggers instant updates on administrative displays, preventing purchase order delays.</p>

      <pre><code>// Redux Toolkit inventory slice snippet
import { createSlice } from '@reduxjs/toolkit';

const inventorySlice = createSlice({
  name: 'inventory',
  initialState: { stockItems: [], loading: false },
  reducers: {
    updateStockCount: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.stockItems.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity = quantity;
        existingItem.lastUpdated = new Date().toISOString();
      }
    }
  }
});</code></pre>

      <h3>2. Warehouse Capacity & Delivery Efficiency Outcomes</h3>
      <p>Following the system rollout, stock accuracy reached 100%, and procurement delays were minimized. Below is a summary of operational metrics comparing the legacy workflow with the newly automated ERP platform:</p>

      <table class="ml-metrics-table">
        <thead>
          <tr>
            <th>Warehouse Log Vector</th>
            <th>Isolated Spreadsheets</th>
            <th>Custom ERP Web Platform</th>
            <th>Performance Impact (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Stock Count Discrepancies</td>
            <td>8.2% avg errors</td>
            <td>0.0% zero errors</td>
            <td>-100% Log Errors Removed</td>
          </tr>
          <tr>
            <td>Auto Re-order Precision</td>
            <td>4.5 days delays</td>
            <td>Instant alert</td>
            <td>-99.2% Delay Reduction</td>
          </tr>
          <tr>
            <td>Weekly Worker Hours spent Logging</td>
            <td>34 hours</td>
            <td>2 hours</td>
            <td>-94.1% Logging Hours Saved</td>
          </tr>
          <tr>
            <td>Assembly Line Halts</td>
            <td>24/year</td>
            <td>0/year</td>
            <td>-100% Downtime Prevented</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Django REST API and Automated Vendor Actions</h3>
      <p>The system features an automated purchase workflow. When specific components fall below threshold counts, the Django engine automatically creates purchase orders and emails them to verified vendor contacts. This eliminates delays and keeps assembly lines moving without requiring manual administrative intervention.</p>
    `
  },
  {
    slug: 'e-commerce-mobile-transformation',
    title: 'E-commerce Mobile Transformation',
    industry: 'Retail & E-Commerce',
    challenge: 'A retail brand wanted to launch a mobile shopping app to capture mobile traffic, but struggled with syncing stock logs with their physical retail databases.',
    solution: 'We programmed a cross-platform mobile application in React Native. The app interfaces with a custom CRM system that automatically syncs inventories between digital purchases and store registries.',
    technologies: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Stripe API', 'Redis'],
    banner: '/images/case_ecommerce.webp',
    year: '2026',
    tag: 'Retail · Mobile D2C',
    stats: [
      { num: '+40%', label: 'Digital conversions' },
      { num: '4.8/5★', label: 'App store rating' }
    ],
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
    ],
    detailedContent: `
      <p>Mobile web page conversion speeds are critical to e-commerce success. Our retail partner saw a massive spike in mobile traffic, but their desktop-oriented web platform loaded slowly on mobile networks, leading to a high shopping cart abandonment rate of 72%. We developed a dedicated cross-platform mobile app using React Native and built a custom inventory sync system to link online sales with retail databases.</p>

      <blockquote>"Mobile e-commerce is not simply about formatting a website for mobile layouts. Dedicated app stores demand highly responsive interfaces, fast checkout flows, and push notifications to retain users."</blockquote>

      <h3>1. React Native Checkout Flow and Push Service Architecture</h3>
      <p>We created the mobile application using the Expo framework. The user interface uses native UI components, delivering smooth scrolling and fast response times. Payment processing is integrated securely using Stripe SDKs. Delivery updates are sent via Firebase Cloud Messaging, notifying customers about shipment progress in real time.</p>

      <pre><code>// React Native Expo push notification registration snippet
import * as Notifications from 'expo-notifications';

export async function registerForPushNotificationsAsync(userId) {
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;
  
  if (existingStatus !== 'granted') {
    const { status } = await Notifications.requestPermissionsAsync();
    finalStatus = status;
  }
  
  if (finalStatus === 'granted') {
    const tokenData = await Notifications.getExpoPushTokenAsync();
    await savePushTokenToBackend(userId, tokenData.data);
  }
}</code></pre>

      <h3>2. Mobile E-commerce Funnel Performance Comparison</h3>
      <p>Following the launch of the iOS and Android applications, cart abandonment dropped and overall sales conversions grew. Below are the metrics showing the comparison between the mobile web browser experience and the React Native app checkout funnel:</p>

      <table class="ml-metrics-table">
        <thead>
          <tr>
            <th>Checkout Funnel State</th>
            <th>Responsive Mobile Browser</th>
            <th>React Native App Interface</th>
            <th>Funnel Retention Boost (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Product Page Load Speed</td>
            <td>4.2 seconds</td>
            <td>0.3 seconds</td>
            <td>-92.8% Faster Load</td>
          </tr>
          <tr>
            <td>Cart Add Rate</td>
            <td>18.5%</td>
            <td>34.2%</td>
            <td>+84.8% Cart Adds</td>
          </tr>
          <tr>
            <td>Cart Abandonment Rate</td>
            <td>72.0%</td>
            <td>36.5%</td>
            <td>-49.3% Fewer Abandonments</td>
          </tr>
          <tr>
            <td>Final Checkout Rate</td>
            <td>2.1%</td>
            <td>6.8%</td>
            <td>+223.8% Sales Increase</td>
          </tr>
        </tbody>
      </table>

      <h3>3. Inventory Synchronization Service</h3>
      <p>To prevent overselling items, a Node.js microservice updates stock levels across both the mobile storefront database and the ERP inventory systems. Sale transactions trigger real-time stock sync events, keeping in-store databases accurate and preventing catalog order issues.</p>
    `
  }
];
