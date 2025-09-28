// Multi-language support
const translations = {
    en: {
        // Brand and Navigation
        brand: "TradeGuard AI",
        "nav.home": "Home",
        "nav.features": "Features",
        "nav.architecture": "Architecture",
        "nav.solutions": "Solutions",
        "nav.pricing": "Pricing",
        "nav.about": "About",
        "nav.contact": "Contact",
        "nav.demo": "Request Demo",
        
        // Hero Section
        "hero.title": "AI-Powered Customs Clearance Revolution",
        "hero.subtitle": "Transform your trade compliance with our intelligent document processing system. Boost efficiency 3-5x while reducing errors to less than 1%.",
        "hero.cta1": "Start Free Trial",
        "hero.cta2": "Watch Demo",
        
        // Stats
        "stats.efficiency": "Efficiency Boost",
        "stats.error": "Error Rate",
        "stats.accuracy": "Data Accuracy",
        
        // Features
        "features.title": "Core AI Capabilities",
        "features.subtitle": "Our comprehensive AI platform addresses every aspect of customs document processing and risk management.",
        "feature1.title": "Multi-Modal Document Recognition",
        "feature1.desc": "Intelligent processing of PDFs, images, and scanned documents with 98%+ accuracy across all formats.",
        "feature2.title": "Structured Data Processing",
        "feature2.desc": "Transform unstructured information into standardized, verified customs declaration elements.",
        "feature3.title": "8-Dimension Risk Scanner",
        "feature3.desc": "Comprehensive risk analysis including HS code classification, pricing, consistency, and policy compliance.",
        "features.viewall": "View All Features",
        
        // CTA
        "cta.title": "Ready to Transform Your Customs Operations?",
        "cta.subtitle": "Join leading customs brokers and enterprises who have revolutionized their compliance workflows with our AI platform.",
        "cta.trial": "Start Free Trial",
        "cta.contact": "Contact Sales",
        
        // Footer
        "footer.desc": "Revolutionizing customs compliance through AI-powered automation and expert collaboration.",
        "footer.product": "Product",
        "footer.company": "Company",
        "footer.connect": "Connect",
        
        // Features Page
        "features.hero.title": "Comprehensive AI Features for Customs Compliance",
        "features.hero.subtitle": "Discover how our 5 core modules work together to transform your customs clearance process from manual, error-prone operations to intelligent, automated workflows.",
        "features.overview.title": "5 Core AI Modules",
        "features.overview.subtitle": "Each module is designed to address specific pain points in the customs clearance workflow, working seamlessly together to deliver unprecedented efficiency and accuracy.",
        
        // Process Steps
        "process.step1": "Document Upload",
        "process.step1.desc": "Multi-format input",
        "process.step2": "Recognition",
        "process.step2.desc": "AI extraction",
        "process.step3": "Structuring",
        "process.step3.desc": "Data mapping",
        "process.step4": "Risk Scan",
        "process.step4.desc": "8-dimension analysis",
        "process.step5": "Decision",
        "process.step5.desc": "AI recommendations",
        
        // Module Details
        "module1.title": "Multi-Modal Document Recognition",
        "module1.description": "Our advanced AI system intelligently processes documents in any format - PDFs, images, scanned copies - with industry-leading accuracy rates exceeding 98%.",
        "module1.feature1.title": "Universal Format Support",
        "module1.feature1.desc": "Process PDFs, JPEGs, PNGs, TIFFs, and even poor-quality scanned documents with consistent accuracy.",
        "module1.feature2.title": "Intelligent Document Classification",
        "module1.feature2.desc": "Automatically identifies document types: invoices, packing lists, certificates of origin, and more.",
        "module1.feature3.title": "Multi-Language OCR",
        "module1.feature3.desc": "Supports English, Chinese, Japanese, Vietnamese, and 20+ other languages with native accuracy.",
        "module1.stats.title": "Performance Metrics",
        "module1.stats.accuracy": "Data Extraction Accuracy",
        "module1.stats.speed": "Processing Time per Document",
        
        "module2.title": "Structured Data Processing",
        "module2.description": "Transform unstructured document content into standardized, validated customs declaration elements that comply with global trade regulations.",
        "module2.feature1.title": "Intelligent Field Mapping",
        "module2.feature1.desc": "Automatically maps extracted data to customs declaration fields across different countries and regulations.",
        "module2.feature2.title": "Data Validation & Cleansing",
        "module2.feature2.desc": "Validates formats, calculates totals, and ensures data integrity before risk analysis.",
        "module2.feature3.title": "Standard Format Output",
        "module2.feature3.desc": "Generates standardized JSON/XML outputs compatible with existing customs systems and ERPs.",
        
        "module3.title": "8-Dimension Risk Scanner Engine",
        "module3.description": "Comprehensive risk analysis across eight critical dimensions to identify potential compliance issues before they become costly problems.",
        "risk.dimension1": "HS Code Classification",
        "risk.dimension1.desc": "Validates tariff classifications using deep learning models trained on customs databases.",
        "risk.dimension2": "Price Reasonableness",
        "risk.dimension2.desc": "Compares declared values against global commodity price databases and historical data.",
        "risk.dimension3": "Document Consistency",
        "risk.dimension3.desc": "Cross-validates information across invoices, packing lists, and certificates.",
        "risk.dimension4": "Policy Compliance",
        "risk.dimension4.desc": "Checks against current trade policies, sanctions, and regulatory requirements.",
        "risk.dimension5": "Origin Verification",
        "risk.dimension5.desc": "Validates country of origin claims and preferential trade agreement eligibility.",
        "risk.dimension6": "License & Permits",
        "risk.dimension6.desc": "Identifies required import/export licenses and regulatory approvals.",
        "risk.dimension7": "Logistics Validation",
        "risk.dimension7.desc": "Validates shipping routes, transport modes, and delivery timelines.",
        "risk.dimension8": "Historical Patterns",
        "risk.dimension8.desc": "Analyzes historical trade patterns and flags anomalous transactions.",
        
        "module4.title": "AI-Driven Decision Support",
        "module4.description": "Receive clear, actionable recommendations with full explanations and regulatory references. Our AI doesn't just flag issues - it tells you exactly how to fix them.",
        "module4.feature1.title": "Explainable Recommendations",
        "module4.feature1.desc": "Every suggestion comes with detailed reasoning, regulatory citations, and step-by-step remediation guidance.",
        "module4.feature2.title": "Priority-Based Workflow",
        "module4.feature2.desc": "Issues are automatically prioritized by risk level and potential financial impact, helping you focus on what matters most.",
        "module4.feature3.title": "One-Click Corrections",
        "module4.feature3.desc": "Accept AI suggestions with a single click, automatically updating all related fields and maintaining audit trails.",
        "module4.ai.title": "AI Transparency",
        "module4.ai.desc": "Our explainable AI (XAI) ensures every recommendation is fully auditable and compliant with regulatory requirements for decision transparency.",
        
        "module5.title": "Knowledge & Collaboration Management",
        "module5.description": "Build your organization's customs expertise through continuous learning and seamless team collaboration. Every interaction makes the system smarter.",
        "module5.feature1.title": "Organizational Memory",
        "module5.feature1.desc": "Captures all decisions, corrections, and expert knowledge to build your company's institutional memory.",
        "module5.feature2.title": "Expert Review Workflows",
        "module5.feature2.desc": "Structured approval processes with role-based permissions and escalation paths for complex cases.",
        "module5.feature3.title": "Continuous Learning",
        "module5.feature3.desc": "Machine learning models improve with every expert correction, creating a data flywheel effect.",
        "module5.flywheel.title": "Data Flywheel Effect",
        "module5.flywheel.desc": "More usage → Better AI → More accurate results → Higher adoption → More data → Even better AI",
        
        // Integration
        "integration.title": "Seamless Integration & Performance",
        "integration.subtitle": "Our platform integrates with your existing systems and delivers measurable improvements from day one.",
        "integration.api.title": "RESTful API Integration",
        "integration.api.desc": "Connect with existing ERP, TMS, and customs systems through our comprehensive API suite.",
        "integration.cloud.title": "Cloud-Native Architecture",
        "integration.cloud.desc": "Scalable, secure, and always up-to-date. Deploy in days, not months.",
        "integration.security.title": "Enterprise Security",
        "integration.security.desc": "SOC 2 Type II compliant with end-to-end encryption and audit trails.",
        
        // Performance
        "performance.title": "Proven Performance Metrics",
        "performance.efficiency": "Processing Efficiency",
        "performance.error": "Error Rate",
        "performance.accuracy": "Data Accuracy",
        "performance.cost": "Cost Reduction",
        
        "features.cta.title": "Experience the Future of Customs Compliance",
        "features.cta.subtitle": "See how our 5 core modules work together to transform your customs operations. Start your free trial today.",
        "features.cta.trial": "Start Free Trial",
        "features.cta.demo": "Schedule Demo",
        
        // Architecture Page
        "architecture.hero.title": "AI-Native Architecture for Customs Intelligence",
        "architecture.hero.subtitle": "Discover how our revolutionary fusion of Large Language Models, Knowledge Graphs, and Multi-Modal AI creates the most advanced customs compliance platform in the industry.",
        "architecture.overview.title": "Triple-Fusion AI Architecture",
        "architecture.overview.subtitle": "Unlike traditional systems that add AI as an afterthought, we built our platform from the ground up around three core AI technologies working in perfect synergy.",
        
        // Tech Components
        "tech.llm.title": "Large Language Models",
        "tech.llm.desc": "Advanced natural language understanding for complex trade documents and regulatory text interpretation.",
        "tech.kg.title": "Knowledge Graphs",
        "tech.kg.desc": "Structured relationship mapping between commodities, regulations, entities, and trade rules for explainable reasoning.",
        "tech.multimodal.title": "Multi-Modal AI",
        "tech.multimodal.desc": "Computer vision and OCR capabilities for processing diverse document formats with industry-leading accuracy.",
        
        "architecture.flow.title": "End-to-End Processing Architecture",
        "architecture.flow.subtitle": "Follow the intelligent data journey from document upload to actionable compliance recommendations.",
        
        "architecture.deepdive.title": "Technical Implementation Details",
        "architecture.deepdive.subtitle": "Understand the sophisticated engineering that powers our AI-native customs compliance platform.",
        
        "llm.deepdive.title": "Advanced Language Understanding",
        "llm.deepdive.description": "Our fine-tuned language models excel at understanding complex trade terminology, multi-language documents, and nuanced regulatory language.",
        "llm.capabilities.title": "Core Capabilities",
        "llm.performance.title": "Performance Metrics",
        
        "kg.deepdive.title": "Structured Reasoning Engine",
        "kg.deepdive.description": "Our knowledge graph models complex relationships between products, regulations, countries, and trade rules, enabling explainable AI decisions.",
        "kg.entities.title": "Key Entities & Relationships",
        "kg.scale.title": "Scale & Performance",
        
        "multimodal.deepdive.title": "Advanced Document Intelligence",
        "multimodal.deepdive.description": "State-of-the-art computer vision models process any document format with human-level accuracy, understanding both content and layout.",
        "multimodal.pipeline.title": "Processing Pipeline",
        "multimodal.accuracy.title": "Accuracy Benchmarks",
        
        "architecture.advantages.title": "Why Our Architecture Wins",
        "architecture.advantages.subtitle": "Understanding the strategic advantages of our AI-native approach over traditional systems and simple AI wrappers.",
        "comparison.traditional.title": "Traditional Systems",
        "comparison.simple.title": "Simple AI Wrappers",
        "comparison.ours.title": "TradeGuard AI",
        
        // LLM Capabilities
        "arch.llm.capability1": "Multi-domain fine-tuning on customs and trade datasets",
        "arch.llm.capability2": "Context-aware entity extraction with 98.5% accuracy",
        "arch.llm.capability3": "Semantic similarity matching for product classification",
        "arch.llm.capability4": "Real-time regulation interpretation and mapping",
        "arch.llm.metric1": "Entity Extraction Accuracy",
        "arch.llm.metric2": "Supported Languages",
        
        // Multi-Modal AI Pipeline
        "arch.multimodal.step1.title": "Image Preprocessing",
        "arch.multimodal.step1.desc": "Noise reduction, skew correction, enhancement",
        "arch.multimodal.step2.title": "Layout Detection",
        "arch.multimodal.step2.desc": "Table identification, text blocks, form fields",
        "arch.multimodal.step3.title": "Multi-Language OCR",
        "arch.multimodal.step3.desc": "Character recognition with context awareness",
        "arch.multimodal.step4.title": "Content Structuring",
        "arch.multimodal.step4.desc": "Logical grouping and relationship mapping",
        
        // Knowledge Graph
        "arch.kg.category1": "Products",
        "arch.kg.category2": "Regulations",
        "arch.kg.product1": "• HS Classification hierarchy",
        "arch.kg.product2": "• Material compositions",
        "arch.kg.product3": "• Manufacturing processes",
        "arch.kg.regulation1": "• Tariff schedules",
        "arch.kg.regulation2": "• Trade agreements",
        "arch.kg.regulation3": "• Licensing requirements",
        "arch.kg.metric1": "Entities & Relationships",
        
        // Architecture Comparison
        "arch.comparison.traditional.point1": "Rule-based processing breaks with new formats",
        "arch.comparison.traditional.point2": "Manual template creation for each document type",
        "arch.comparison.traditional.point3": "No learning capability or adaptation",
        "arch.comparison.traditional.point4": "Complex implementation and maintenance",
        "arch.comparison.simple.point1": "Black box decisions without explanations",
        "arch.comparison.simple.point2": "Hallucination risks in critical compliance",
        "arch.comparison.simple.point3": "No regulatory knowledge integration",
        "arch.comparison.simple.point4": "Limited accuracy on domain-specific tasks",
        "arch.comparison.ours.point1": "Explainable AI with full audit trails",
        "arch.comparison.ours.point2": "Continuous learning from expert feedback",
        "arch.comparison.ours.point3": "Deep regulatory knowledge integration",
        "arch.comparison.ours.point4": "Enterprise-grade accuracy and reliability",
        
        "architecture.cta.title": "Experience Our Advanced AI Architecture",
        "architecture.cta.subtitle": "See how our triple-fusion AI technology transforms customs compliance. Schedule a technical deep-dive with our team.",
        "architecture.cta.demo": "Technical Demo",
        "architecture.cta.whitepaper": "Download Whitepaper",
        
        // Solutions Page
        "solutions.hero.title": "Tailored Solutions for Every Trade Compliance Need",
        "solutions.hero.subtitle": "From customs brokers to multinational enterprises, our AI platform adapts to your specific workflows and compliance requirements.",
        "solutions.brokers.title": "Customs Brokers",
        "solutions.brokers.desc": "Scale your operations and serve more clients with AI-powered document processing and risk management.",
        "solutions.brokers.feature1": "Process 3-5x More Shipments",
        "solutions.brokers.feature1.desc": "Handle peak volumes without hiring additional staff",
        "solutions.brokers.feature2": "Reduce Review Time by 80%",
        "solutions.brokers.feature2.desc": "Focus experts on high-risk cases only",
        "solutions.brokers.feature3": "Minimize Compliance Risks",
        "solutions.brokers.feature3.desc": "Catch errors before customs submission",
        "solutions.brokers.cta": "Explore Broker Solutions",
        "solutions.enterprise.title": "Enterprise Companies",
        "solutions.enterprise.desc": "Integrate seamlessly with existing ERP systems for enterprise-wide compliance management.",
        "solutions.enterprise.feature1": "ERP Integration",
        "solutions.enterprise.feature1.desc": "Connect with SAP, Oracle, and other enterprise systems",
        "solutions.enterprise.feature2": "Global Compliance",
        "solutions.enterprise.feature2.desc": "Manage regulations across multiple countries",
        "solutions.enterprise.feature3": "Advanced Analytics",
        "solutions.enterprise.feature3.desc": "Executive dashboards and compliance insights",
        "solutions.enterprise.cta": "Explore Enterprise Solutions",
        "solutions.logistics.title": "Logistics Providers",
        "solutions.logistics.desc": "Offer value-added compliance services to differentiate your logistics offerings.",
        "solutions.logistics.feature1": "White-label Solution",
        "solutions.logistics.feature1.desc": "Brand the platform as your own service",
        "solutions.logistics.feature2": "New Revenue Streams",
        "solutions.logistics.feature2.desc": "Monetize compliance expertise and data",
        "solutions.logistics.feature3": "Customer Retention",
        "solutions.logistics.feature3.desc": "Sticky compliance services increase loyalty",
        "solutions.logistics.cta": "Explore Logistics Solutions",
        
        // Pricing Page
        "pricing.hero.title": "Simple, Transparent Pricing",
        "pricing.hero.subtitle": "Choose the plan that scales with your business. All plans include our core AI features with transparent usage-based pricing.",
        "pricing.professional.title": "Professional",
        "pricing.professional.desc": "Perfect for small teams and growing brokers",
        "pricing.professional.price": "$250",
        "pricing.professional.period": "/month",
        "pricing.professional.users": "Up to 3 users, 200 shipments/month",
        "pricing.professional.feature1": "Multi-modal document recognition",
        "pricing.professional.feature2": "Basic risk scanning (4 dimensions)",
        "pricing.professional.feature3": "Standard support",
        "pricing.professional.feature4": "Basic analytics dashboard",
        "pricing.professional.missing1": "Advanced collaboration tools",
        "pricing.professional.missing2": "API access",
        "pricing.professional.cta": "Start Free Trial",
        "pricing.professional.additional": "Additional shipments: $5 each",
        "pricing.business.title": "Business",
        "pricing.business.desc": "Ideal for mid-size brokers and enterprises",
        "pricing.business.price": "$1,200",
        "pricing.business.period": "/month",
        "pricing.business.users": "Up to 10 users, 1,500 shipments/month",
        "pricing.business.popular": "Most Popular",
        "pricing.business.feature1": "All Professional features",
        "pricing.business.feature2": "Full 8-dimension risk engine",
        "pricing.business.feature3": "Advanced collaboration tools",
        "pricing.business.feature4": "Priority support",
        "pricing.business.feature5": "Advanced analytics & reporting",
        "pricing.business.feature6": "Basic API access",
        "pricing.business.cta": "Start Free Trial",
        "pricing.business.additional": "Additional shipments: $3 each",
        "pricing.enterprise.title": "Enterprise",
        "pricing.enterprise.desc": "For large organizations with custom needs",
        "pricing.enterprise.price": "Custom",
        "pricing.enterprise.users": "Unlimited users and shipments",
        "pricing.enterprise.feature1": "All Business features",
        "pricing.enterprise.feature2": "Private cloud deployment",
        "pricing.enterprise.feature3": "Full API suite & webhooks",
        "pricing.enterprise.feature4": "Custom integrations",
        "pricing.enterprise.feature5": "Dedicated customer success manager",
        "pricing.enterprise.feature6": "24/7 premium support",
        "pricing.enterprise.cta": "Contact Sales",
        "pricing.enterprise.additional": "Volume discounts available",
        "pricing.includes.title": "All Plans Include",
        "pricing.includes.security": "Enterprise Security",
        "pricing.includes.security.desc": "SOC 2 compliance and data encryption",
        "pricing.includes.cloud": "Cloud Infrastructure",
        "pricing.includes.cloud.desc": "99.9% uptime SLA",
        "pricing.includes.training": "Training & Onboarding",
        "pricing.includes.training.desc": "Comprehensive team training included",
        "pricing.includes.updates": "Regular Updates",
        "pricing.includes.updates.desc": "Continuous AI model improvements",
        "pricing.faq.title": "Frequently Asked Questions",
        "pricing.faq.subtitle": "Get answers to common questions about our pricing and platform.",
        "pricing.faq.usage.title": "How is usage calculated?",
        "pricing.faq.usage.answer": "Usage is calculated per shipment processed through our system. Each shipment includes all related documents (invoice, packing list, certificates, etc.). Additional processing beyond your plan limits is charged per shipment.",
        "pricing.faq.change.title": "Can I upgrade or downgrade my plan?",
        "pricing.faq.change.answer": "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle. We'll prorate any differences in pricing.",
        "pricing.faq.trial.title": "What's included in the free trial?",
        "pricing.faq.trial.answer": "The free trial includes full access to your chosen plan for 14 days, including up to 50 test shipments. No credit card required to start. You can upgrade to a paid plan anytime during or after the trial.",
        "pricing.faq.volume.title": "Do you offer volume discounts?",
        "pricing.faq.volume.answer": "Yes, we offer volume discounts for high-volume customers and multi-year contracts. Enterprise customers can benefit from custom pricing based on their specific needs and usage patterns.",
        "pricing.faq.security.title": "How secure is my data?",
        "pricing.faq.security.answer": "We maintain SOC 2 Type II compliance with end-to-end encryption for all data. Your trade data is processed securely and never shared with third parties. Enterprise customers can also choose private cloud deployment options.",
        "pricing.cta.title": "Ready to Get Started?",
        "pricing.cta.subtitle": "Join thousands of customs professionals who trust TradeGuard AI for their compliance needs.",
        "pricing.cta.trial": "Start Free Trial",
        "pricing.cta.contact": "Contact Sales",
        
        // About Page
        "about.hero.title": "Transforming Global Trade Through AI Innovation",
        "about.hero.subtitle": "We're on a mission to make international trade more efficient, accurate, and accessible through cutting-edge artificial intelligence technology.",
        "about.mission.title": "Our Mission",
        "about.mission.content1": "To eliminate the inefficiencies and errors that plague international trade compliance, empowering businesses of all sizes to participate confidently in global commerce.",
        "about.mission.content2": "Traditional customs clearance processes are stuck in the past - manual, error-prone, and impossible to scale. We believe that AI can transform these critical workflows, making them faster, more accurate, and more accessible to businesses worldwide.",
        "about.mission.content3": "By combining advanced AI technologies with deep domain expertise, we're building the future of trade compliance - one where human experts are empowered by intelligent systems rather than overwhelmed by paperwork.",
        "about.stats.trade": "Annual Trade Volume Managed by Our Customers",
        "about.stats.docs": "Documents Processed",
        "about.stats.countries": "Countries Supported",
        "about.stats.satisfaction": "Customer Satisfaction",
        "about.values.title": "Our Values",
        "about.values.subtitle": "The principles that guide everything we do and every decision we make.",
        "about.values.innovation": "Innovation First",
        "about.values.innovation.desc": "We constantly push the boundaries of what's possible with AI, always seeking better solutions to complex trade challenges.",
        "about.values.trust": "Trust & Security",
        "about.values.trust.desc": "Trade data is sensitive. We maintain the highest standards of security and transparency in everything we do.",
        "about.values.success": "Customer Success",
        "about.values.success.desc": "Our success is measured by our customers' success. We're partners in transforming their operations.",
        "about.team.title": "Leadership Team",
        "about.team.subtitle": "Meet the experienced professionals driving innovation in trade compliance.",
        "about.team.ceo": "CEO & Co-Founder",
        "about.team.ceo.bio": "Former head of AI at a Fortune 500 logistics company. PhD in Computer Science from MIT. 15+ years in trade technology.",
        "about.team.cto": "CTO & Co-Founder",
        "about.team.cto.bio": "Former Principal Engineer at Google. Expert in large-scale ML systems and knowledge graphs. Stanford CS graduate.",
        "about.team.vp": "VP of Compliance",
        "about.team.vp.bio": "20+ years in customs brokerage and international trade. Former customs officer. Expert in global trade regulations.",
        "about.presence.title": "Global Presence",
        "about.presence.subtitle": "Supporting international trade from offices around the world.",
        "about.office.sf": "San Francisco, USA",
        "about.office.sf.desc": "Headquarters & R&D",
        "about.office.sf.team": "50+ Engineers",
        "about.office.shanghai": "Shanghai, China",
        "about.office.shanghai.desc": "Asia-Pacific Hub",
        "about.office.shanghai.team": "25+ Specialists",
        "about.office.london": "London, UK",
        "about.office.london.desc": "European Operations",
        "about.office.london.team": "20+ Professionals",
        "about.office.hcmc": "Ho Chi Minh City, Vietnam",
        "about.office.hcmc.desc": "Southeast Asia",
        "about.office.hcmc.team": "15+ Team Members",
        "about.cta.title": "Ready to Transform Your Trade Operations?",
        "about.cta.subtitle": "Join the companies already revolutionizing their customs compliance with TradeGuard AI.",
        "about.cta.trial": "Start Free Trial",
        "about.cta.contact": "Contact Our Team",
        
        // Contact Page
        "contact.hero.title": "Let's Transform Your Customs Operations Together",
        "contact.hero.subtitle": "Ready to revolutionize your trade compliance? Our team is here to help you get started with TradeGuard AI.",
        "contact.form.title": "Get in Touch",
        "contact.form.firstname": "First Name",
        "contact.form.lastname": "Last Name",
        "contact.form.email": "Business Email",
        "contact.form.phone": "Phone Number",
        "contact.form.company": "Company Name",
        "contact.form.jobtitle": "Job Title",
        "contact.form.companytype": "Company Type",
        "contact.form.companytype.placeholder": "Select your company type",
        "contact.form.companytype.broker": "Customs Broker",
        "contact.form.companytype.forwarder": "Freight Forwarder",
        "contact.form.companytype.logistics": "Logistics Provider",
        "contact.form.companytype.manufacturer": "Manufacturer",
        "contact.form.companytype.importer": "Importer/Exporter",
        "contact.form.companytype.enterprise": "Enterprise Corporation",
        "contact.form.companytype.other": "Other",
        "contact.form.volume": "Monthly Shipment Volume",
        "contact.form.volume.placeholder": "Select volume range",
        "contact.form.volume.1": "1 - 100 shipments",
        "contact.form.volume.2": "101 - 500 shipments",
        "contact.form.volume.3": "501 - 1,000 shipments",
        "contact.form.volume.4": "1,001 - 5,000 shipments",
        "contact.form.volume.5": "5,000+ shipments",
        "contact.form.inquiry": "Inquiry Type",
        "contact.form.inquiry.placeholder": "What can we help you with?",
        "contact.form.inquiry.demo": "Request a Demo",
        "contact.form.inquiry.trial": "Start Free Trial",
        "contact.form.inquiry.pricing": "Pricing Information",
        "contact.form.inquiry.integration": "Integration Questions",
        "contact.form.inquiry.partnership": "Partnership Opportunities",
        "contact.form.inquiry.support": "Technical Support",
        "contact.form.inquiry.other": "Other",
        "contact.form.message": "Message",
        "contact.form.message.placeholder": "Tell us more about your needs and how we can help...",
        "contact.form.newsletter": "I'd like to receive updates about TradeGuard AI products and industry insights. You can unsubscribe at any time.",
        "contact.form.submit": "Send Message",
        "contact.form.privacy": "By submitting this form, you agree to our Privacy Policy and Terms of Service.",
        "contact.other.title": "Other Ways to Reach Us",
        "contact.quick.title": "Quick Actions",
        "contact.quick.trial": "Start Free Trial (No Credit Card Required)",
        "contact.quick.demo": "Schedule a Personalized Demo",
        "contact.offices.title": "Global Offices",
        "contact.office.hq": "Headquarters - Suzhou",
        "contact.office.hq.address": "Suzhou Industrial Park, Xinqi Innovation Port E603-E612\nSuzhou, Jiangsu 215000, China",
        "contact.office.asia": "Shanghai Office",
        "contact.office.asia.address": "Floor 2-3, Tower E, Jinrong Coast Center, 440 North Bund\nHongkou District, Shanghai 200000, China",
        "contact.office.shenzhen": "Shenzhen Office",
        "contact.office.shenzhen.address": "Room 212, Overseas Chinese Friendship Building, 12 Yejia Road\nBao'an District, Shenzhen 518000, China",
        "contact.office.qingdao": "Qingdao Office",
        "contact.office.qingdao.address": "Room 110, Fudong Building, 8 Licang Road\nLicang District, Qingdao 266000, China",
        "contact.support.title": "Support Hours",
        "contact.support.sales": "Sales Inquiries:",
        "contact.support.sales.hours": "24/7 Global Coverage",
        "contact.support.technical": "Technical Support:",
        "contact.support.technical.hours": "Business Hours (All Regions)",
        "contact.support.emergency": "Emergency Support:",
        "contact.support.emergency.hours": "Enterprise Customers Only",
        "contact.direct.title": "Direct Contacts",
        "contact.direct.sales": "Sales:",
        "contact.direct.sales.email": "missattic.ai@gmail.com",
        "contact.direct.support": "Support:",
        "contact.direct.support.email": "missattic.ai@gmail.com",
        "contact.direct.partners": "Partnerships:",
        "contact.direct.partners.email": "missattic.ai@gmail.com",
        "contact.faq.title": "Frequently Asked Questions",
        "contact.faq.subtitle": "Quick answers to common questions before you reach out.",
        "contact.faq.start.title": "How quickly can we get started?",
        "contact.faq.start.answer": "Most customers are up and running within 1-2 weeks. Our team handles the setup and provides comprehensive training.",
        "contact.faq.integrate.title": "Do you integrate with existing systems?",
        "contact.faq.integrate.answer": "Yes, we integrate with major ERP systems (SAP, Oracle), TMS platforms, and customs systems via our RESTful APIs.",
        "contact.faq.trial.title": "What's included in the free trial?",
        "contact.faq.trial.answer": "14-day full access to your chosen plan with up to 50 test shipments and dedicated onboarding support.",
        "contact.faq.secure.title": "Is my data secure?",
        "contact.faq.secure.answer": "We maintain SOC 2 Type II compliance with end-to-end encryption. Your data is never shared and you maintain full ownership."
    },
    
    zh: {
        // Brand and Navigation
        brand: "贸易卫士AI",
        "nav.home": "首页",
        "nav.features": "功能特性",
        "nav.architecture": "技术架构",
        "nav.solutions": "解决方案",
        "nav.pricing": "定价",
        "nav.about": "关于我们",
        "nav.contact": "联系我们",
        "nav.demo": "申请演示",
        
        // Hero Section
        "hero.title": "AI驱动的海关通关革命",
        "hero.subtitle": "通过我们的智能文档处理系统转变您的贸易合规流程。效率提升3-5倍，错误率降至1%以下。",
        "hero.cta1": "免费试用",
        "hero.cta2": "观看演示",
        
        // Stats
        "stats.efficiency": "效率提升",
        "stats.error": "错误率",
        "stats.accuracy": "数据准确率",
        
        // Features
        "features.title": "核心AI能力",
        "features.subtitle": "我们的综合AI平台涵盖海关文档处理和风险管理的各个方面。",
        "feature1.title": "多模态文档识别",
        "feature1.desc": "智能处理PDF、图片和扫描文档，在所有格式下均达到98%+的准确率。",
        "feature2.title": "结构化数据处理",
        "feature2.desc": "将非结构化信息转换为标准化、经过验证的海关申报要素。",
        "feature3.title": "8维风险扫描",
        "feature3.desc": "包括HS编码分类、定价、一致性和政策合规的全面风险分析。",
        "features.viewall": "查看所有功能",
        
        // CTA
        "cta.title": "准备好转变您的海关运营了吗？",
        "cta.subtitle": "加入那些已经通过我们的AI平台革新其合规工作流程的领先报关行和企业。",
        "cta.trial": "免费试用",
        "cta.contact": "联系销售",
        
        // Footer
        "footer.desc": "通过AI驱动的自动化和专家协作革命海关合规。",
        "footer.product": "产品",
        "footer.company": "公司",
        "footer.connect": "联系",
        
        // Features Page
        "features.hero.title": "全面的海关合规AI功能",
        "features.hero.subtitle": "了解我们的5个核心模块如何协同工作，将您的海关通关流程从人工易错操作转变为智能化的自动化工作流程。",
        "features.overview.title": "5大核心AI模块",
        "features.overview.subtitle": "每个模块都旨在解决海关通关工作流程中的特定痛点，无缝协作以提供前所未有的效率和准确性。",
        
        // Process Steps
        "process.step1": "文档上传",
        "process.step1.desc": "多格式输入",
        "process.step2": "识别",
        "process.step2.desc": "AI提取",
        "process.step3": "结构化",
        "process.step3.desc": "数据映射",
        "process.step4": "风险扫描",
        "process.step4.desc": "8维分析",
        "process.step5": "决策",
        "process.step5.desc": "AI建议",
        
        // Module Details
        "module1.title": "多模态文档识别",
        "module1.description": "我们的先进AI系统智能处理任何格式的文档 - PDF、图片、扫描件 - 准确率超过98%，达到行业领先水平。",
        "module1.feature1.title": "通用格式支持",
        "module1.feature1.desc": "处理PDF、JPEG、PNG、TIFF，甚至是质量较差的扫描文档，都能保持一致的准确性。",
        "module1.feature2.title": "智能文档分类",
        "module1.feature2.desc": "自动识别文档类型：发票、装箱单、原产地证书等。",
        "module1.feature3.title": "多语言OCR",
        "module1.feature3.desc": "支持英语、中文、日语、越南语和20+其他语言，具有本地化准确性。",
        "module1.stats.title": "性能指标",
        "module1.stats.accuracy": "数据提取准确率",
        "module1.stats.speed": "每份文档处理时间",
        
        "module2.title": "结构化数据处理",
        "module2.description": "将非结构化文档内容转换为符合全球贸易法规的标准化、经过验证的海关申报要素。",
        "module2.feature1.title": "智能字段映射",
        "module2.feature1.desc": "自动将提取的数据映射到不同国家和法规的海关申报字段。",
        "module2.feature2.title": "数据验证和清理",
        "module2.feature2.desc": "验证格式、计算总数，确保风险分析前的数据完整性。",
        "module2.feature3.title": "标准格式输出",
        "module2.feature3.desc": "生成与现有海关系统和ERP兼容的标准化JSON/XML输出。",
        
        "module3.title": "8维风险扫描引擎",
        "module3.description": "跨八个关键维度进行全面风险分析，在潜在合规问题成为代价高昂的问题之前识别它们。",
        "risk.dimension1": "HS编码分类",
        "risk.dimension1.desc": "使用在海关数据库上训练的深度学习模型验证税则分类。",
        "risk.dimension2": "价格合理性",
        "risk.dimension2.desc": "将申报价值与全球商品价格数据库和历史数据进行比较。",
        "risk.dimension3": "单证一致性",
        "risk.dimension3.desc": "交叉验证发票、装箱单和证书之间的信息。",
        "risk.dimension4": "政策合规性",
        "risk.dimension4.desc": "检查当前贸易政策、制裁和监管要求。",
        "risk.dimension5": "原产地验证",
        "risk.dimension5.desc": "验证原产国声明和优惠贸易协定资格。",
        "risk.dimension6": "许可证和许可",
        "risk.dimension6.desc": "识别所需的进出口许可证和监管审批。",
        "risk.dimension7": "物流验证",
        "risk.dimension7.desc": "验证运输路线、运输方式和交付时间表。",
        "risk.dimension8": "历史模式",
        "risk.dimension8.desc": "分析历史贸易模式并标记异常交易。",
        
        "module4.title": "AI驱动的决策支持",
        "module4.description": "接收清晰、可操作的建议，包含完整的解释和法规参考。我们的AI不仅标记问题 - 还准确告诉您如何解决它们。",
        "module4.feature1.title": "可解释的建议",
        "module4.feature1.desc": "每个建议都附带详细推理、法规引用和逐步修复指导。",
        "module4.feature2.title": "基于优先级的工作流程",
        "module4.feature2.desc": "问题按风险级别和潜在财务影响自动排序，帮助您专注于最重要的事项。",
        "module4.feature3.title": "一键修正",
        "module4.feature3.desc": "一键接受AI建议，自动更新所有相关字段并维护审计追踪。",
        "module4.ai.title": "AI透明性",
        "module4.ai.desc": "我们的可解释AI（XAI）确保每个建议都完全可审计，符合决策透明度的监管要求。",
        
        "module5.title": "知识与协作管理",
        "module5.description": "通过持续学习和无缝团队协作建立您组织的海关专业知识。每次互动都让系统更智能。",
        "module5.feature1.title": "组织记忆",
        "module5.feature1.desc": "捕获所有决策、修正和专家知识，构建您公司的机构记忆。",
        "module5.feature2.title": "专家审查工作流程",
        "module5.feature2.desc": "结构化的审批流程，具有基于角色的权限和复杂案例的升级路径。",
        "module5.feature3.title": "持续学习",
        "module5.feature3.desc": "机器学习模型随每次专家修正而改进，创造数据飞轮效应。",
        "module5.flywheel.title": "数据飞轮效应",
        "module5.flywheel.desc": "更多使用 → 更好的AI → 更准确的结果 → 更高采用率 → 更多数据 → 更好的AI",
        
        // Integration
        "integration.title": "无缝集成与性能",
        "integration.subtitle": "我们的平台与您现有系统集成，从第一天起就提供可衡量的改进。",
        "integration.api.title": "RESTful API集成",
        "integration.api.desc": "通过我们全面的API套件连接现有的ERP、TMS和海关系统。",
        "integration.cloud.title": "云原生架构",
        "integration.cloud.desc": "可扩展、安全且始终最新。数天内部署，而非数月。",
        "integration.security.title": "企业安全",
        "integration.security.desc": "SOC 2 Type II合规，具有端到端加密和审计追踪。",
        
        // Performance
        "performance.title": "经过验证的性能指标",
        "performance.efficiency": "处理效率",
        "performance.error": "错误率",
        "performance.accuracy": "数据准确性",
        "performance.cost": "成本降低",
        
        "features.cta.title": "体验海关合规的未来",
        "features.cta.subtitle": "了解我们的5个核心模块如何协同工作转变您的海关运营。立即开始免费试用。",
        "features.cta.trial": "免费试用",
        "features.cta.demo": "安排演示",
        
        // Architecture Page
        "architecture.hero.title": "面向海关智能的AI原生架构",
        "architecture.hero.subtitle": "了解我们革命性的大语言模型、知识图谱和多模态AI融合技术如何创造业内最先进的海关合规平台。",
        "architecture.overview.title": "三重融合AI架构",
        "architecture.overview.subtitle": "与将AI作为事后添加的传统系统不同，我们从零开始围绕三个核心AI技术完美协同构建我们的平台。",
        
        // Tech Components
        "tech.llm.title": "大语言模型",
        "tech.llm.desc": "用于复杂贸易文档和法规文本解释的先进自然语言理解。",
        "tech.kg.title": "知识图谱",
        "tech.kg.desc": "商品、法规、实体和贸易规则之间的结构化关系映射，支持可解释推理。",
        "tech.multimodal.title": "多模态AI",
        "tech.multimodal.desc": "用于处理多样化文档格式的计算机视觉和OCR能力，具有行业领先的准确性。",
        
        "architecture.flow.title": "端到端处理架构",
        "architecture.flow.subtitle": "跟踪从文档上传到可操作合规建议的智能数据旅程。",
        
        "architecture.deepdive.title": "技术实施详情",
        "architecture.deepdive.subtitle": "了解驱动我们AI原生海关合规平台的复杂工程。",
        
        "llm.deepdive.title": "先进语言理解",
        "llm.deepdive.description": "我们的微调语言模型擅长理解复杂的贸易术语、多语言文档和细致的法规语言。",
        "llm.capabilities.title": "核心能力",
        "llm.performance.title": "性能指标",
        
        "kg.deepdive.title": "结构化推理引擎",
        "kg.deepdive.description": "我们的知识图谱建模产品、法规、国家和贸易规则之间的复杂关系，实现可解释的AI决策。",
        "kg.entities.title": "关键实体与关系",
        "kg.scale.title": "规模与性能",
        
        "multimodal.deepdive.title": "先进文档智能",
        "multimodal.deepdive.description": "最先进的计算机视觉模型以人类级别的准确性处理任何文档格式，理解内容和布局。",
        "multimodal.pipeline.title": "处理管道",
        "multimodal.accuracy.title": "准确性基准",
        
        "architecture.advantages.title": "为什么我们的架构获胜",
        "architecture.advantages.subtitle": "了解我们的AI原生方法相对于传统系统和简单AI包装器的战略优势。",
        "comparison.traditional.title": "传统系统",
        "comparison.simple.title": "简单AI包装器",
        "comparison.ours.title": "贸易卫士AI",
        
        // LLM Capabilities
        "arch.llm.capability1": "海关和贸易数据集的多领域微调",
        "arch.llm.capability2": "具有98.5%准确率的上下文感知实体提取",
        "arch.llm.capability3": "用于产品分类的语义相似性匹配",
        "arch.llm.capability4": "实时法规解释和映射",
        "arch.llm.metric1": "实体提取准确率",
        "arch.llm.metric2": "支持的语言",
        
        // Multi-Modal AI Pipeline
        "arch.multimodal.step1.title": "图像预处理",
        "arch.multimodal.step1.desc": "噪声降低、倾斜校正、增强",
        "arch.multimodal.step2.title": "布局检测",
        "arch.multimodal.step2.desc": "表格识别、文本块、表单字段",
        "arch.multimodal.step3.title": "多语言OCR",
        "arch.multimodal.step3.desc": "具有上下文感知的字符识别",
        "arch.multimodal.step4.title": "内容结构化",
        "arch.multimodal.step4.desc": "逻辑分组和关系映射",
        
        // Knowledge Graph
        "arch.kg.category1": "产品",
        "arch.kg.category2": "法规",
        "arch.kg.product1": "• HS分类层次结构",
        "arch.kg.product2": "• 材料成分",
        "arch.kg.product3": "• 制造工艺",
        "arch.kg.regulation1": "• 关税表",
        "arch.kg.regulation2": "• 贸易协定",
        "arch.kg.regulation3": "• 许可要求",
        "arch.kg.metric1": "实体与关系",
        
        // Architecture Comparison
        "arch.comparison.traditional.point1": "基于规则的处理在新格式下失效",
        "arch.comparison.traditional.point2": "为每种文档类型手动创建模板",
        "arch.comparison.traditional.point3": "无学习能力或适应性",
        "arch.comparison.traditional.point4": "复杂的实施和维护",
        "arch.comparison.simple.point1": "没有解释的黑盒决策",
        "arch.comparison.simple.point2": "关键合规中的幻觉风险",
        "arch.comparison.simple.point3": "无法规知识集成",
        "arch.comparison.simple.point4": "特定领域任务准确性有限",
        "arch.comparison.ours.point1": "具有完整审计跟踪的可解释AI",
        "arch.comparison.ours.point2": "从专家反馈中持续学习",
        "arch.comparison.ours.point3": "深度法规知识集成",
        "arch.comparison.ours.point4": "企业级准确性和可靠性",
        
        "architecture.cta.title": "体验我们的先进AI架构",
        "architecture.cta.subtitle": "了解我们的三重融合AI技术如何转变海关合规。与我们的团队安排技术深入了解。",
        "architecture.cta.demo": "技术演示",
        "architecture.cta.whitepaper": "下载白皮书",
        
        // Solutions Page
        "solutions.hero.title": "针对每种贸易合规需求的定制解决方案",
        "solutions.hero.subtitle": "从报关行到跨国企业，我们的AI平台适应您的特定工作流程和合规要求。",
        "solutions.brokers.title": "报关行",
        "solutions.brokers.desc": "通过AI驱动的文档处理和风险管理扩大您的运营规模并服务更多客户。",
        "solutions.brokers.feature1": "处理量提升3-5倍",
        "solutions.brokers.feature1.desc": "在不增加人员的情况下处理高峰业务量",
        "solutions.brokers.feature2": "审核时间减少80%",
        "solutions.brokers.feature2.desc": "让专家只专注于高风险案例",
        "solutions.brokers.feature3": "最小化合规风险",
        "solutions.brokers.feature3.desc": "在海关提交前发现错误",
        "solutions.brokers.cta": "探索报关行解决方案",
        "solutions.enterprise.title": "企业公司",
        "solutions.enterprise.desc": "与现有ERP系统无缝集成，实现企业级合规管理。",
        "solutions.enterprise.feature1": "ERP集成",
        "solutions.enterprise.feature1.desc": "与SAP、Oracle和其他企业系统连接",
        "solutions.enterprise.feature2": "全球合规",
        "solutions.enterprise.feature2.desc": "管理多个国家的法规",
        "solutions.enterprise.feature3": "高级分析",
        "solutions.enterprise.feature3.desc": "执行仪表板和合规洞察",
        "solutions.enterprise.cta": "探索企业解决方案",
        "solutions.logistics.title": "物流供应商",
        "solutions.logistics.desc": "提供增值合规服务，使您的物流产品脱颖而出。",
        "solutions.logistics.feature1": "白标解决方案",
        "solutions.logistics.feature1.desc": "将平台打造为您自己的服务品牌",
        "solutions.logistics.feature2": "新收入流",
        "solutions.logistics.feature2.desc": "将合规专业知识和数据货币化",
        "solutions.logistics.feature3": "客户保留",
        "solutions.logistics.feature3.desc": "粘性合规服务提高客户忠诚度",
        "solutions.logistics.cta": "探索物流解决方案",
        
        // Pricing Page
        "pricing.hero.title": "简单透明的定价",
        "pricing.hero.subtitle": "选择与您业务规模相匹配的计划。所有计划都包含我们的核心AI功能和透明的基于使用量的定价。",
        "pricing.professional.title": "专业版",
        "pricing.professional.desc": "适合小团队和成长型报关行",
        "pricing.professional.price": "￥1,750",
        "pricing.professional.period": "/月",
        "pricing.professional.users": "最多3个用户，每月200票",
        "pricing.professional.feature1": "多模态文档识别",
        "pricing.professional.feature2": "基础风险扫描（4个维度）",
        "pricing.professional.feature3": "标准支持",
        "pricing.professional.feature4": "基础分析仪表板",
        "pricing.professional.missing1": "高级协作工具",
        "pricing.professional.missing2": "API访问",
        "pricing.professional.cta": "开始免费试用",
        "pricing.professional.additional": "额外报关单：每票35元",
        "pricing.business.title": "商业版",
        "pricing.business.desc": "适合中型报关行和企业",
        "pricing.business.price": "￥8,400",
        "pricing.business.period": "/月",
        "pricing.business.users": "最多10个用户，每月1,500票",
        "pricing.business.popular": "最受欢迎",
        "pricing.business.feature1": "专业版所有功能",
        "pricing.business.feature2": "完整8维风险引擎",
        "pricing.business.feature3": "高级协作工具",
        "pricing.business.feature4": "优先支持",
        "pricing.business.feature5": "高级分析和报告",
        "pricing.business.feature6": "基础API访问",
        "pricing.business.cta": "开始免费试用",
        "pricing.business.additional": "额外报关单：每票21元",
        "pricing.enterprise.title": "企业版",
        "pricing.enterprise.desc": "适合有定制需求的大型组织",
        "pricing.enterprise.price": "定制",
        "pricing.enterprise.users": "无限用户和报关单",
        "pricing.enterprise.feature1": "商业版所有功能",
        "pricing.enterprise.feature2": "私有云部署",
        "pricing.enterprise.feature3": "完整API套件和Webhook",
        "pricing.enterprise.feature4": "定制集成",
        "pricing.enterprise.feature5": "专属客户成功经理",
        "pricing.enterprise.feature6": "24/7高级支持",
        "pricing.enterprise.cta": "联系销售",
        "pricing.enterprise.additional": "提供批量折扣",
        "pricing.includes.title": "所有计划都包含",
        "pricing.includes.security": "企业安全",
        "pricing.includes.security.desc": "SOC 2合规和数据加密",
        "pricing.includes.cloud": "云基础设施",
        "pricing.includes.cloud.desc": "99.9%正常运行时间SLA",
        "pricing.includes.training": "培训和入职",
        "pricing.includes.training.desc": "包含全面的团队培训",
        "pricing.includes.updates": "定期更新",
        "pricing.includes.updates.desc": "持续的AI模型改进",
        "pricing.faq.title": "常见问题",
        "pricing.faq.subtitle": "获取关于我们定价和平台常见问题的答案。",
        "pricing.faq.usage.title": "使用量是如何计算的？",
        "pricing.faq.usage.answer": "使用量按通过我们系统处理的报关单计算。每票报关单包括所有相关文档（发票、装箱单、证书等）。超出计划限制的额外处理按票收费。",
        "pricing.faq.change.title": "可以升级或降级我的计划吗？",
        "pricing.faq.change.answer": "是的，您可以随时更改计划。升级立即生效，降级在下个账单周期生效。我们会按比例计算价格差异。",
        "pricing.faq.trial.title": "免费试用包含什么？",
        "pricing.faq.trial.answer": "免费试用包括14天对您选择计划的完整访问，包括最多50票测试报关单。无需信用卡即可开始。您可以在试用期间或之后的任何时候升级到付费计划。",
        "pricing.faq.volume.title": "提供批量折扣吗？",
        "pricing.faq.volume.answer": "是的，我们为高使用量客户和多年合同提供批量折扣。企业客户可以根据其特定需求和使用模式获得定制价格。",
        "pricing.faq.security.title": "我的数据有多安全？",
        "pricing.faq.security.answer": "我们维持SOC 2 Type II合规，对所有数据进行端到端加密。您的贸易数据得到安全处理，绝不与第三方共享。企业客户还可以选择私有云部署选项。",
        "pricing.cta.title": "准备开始了吗？",
        "pricing.cta.subtitle": "加入数千名信任贸易卫士AI满足其合规需求的海关专业人士。",
        "pricing.cta.trial": "开始免费试用",
        "pricing.cta.contact": "联系销售",
        
        // About Page
        "about.hero.title": "通过AI创新变革全球贸易",
        "about.hero.subtitle": "我们的使命是通过尖端人工智能技术使国际贸易更高效、更准确、更易于使用。",
        "about.mission.title": "我们的使命",
        "about.mission.content1": "消除困扰国际贸易合规的低效率和错误，使各种规模的企业都能自信地参与全球商务。",
        "about.mission.content2": "传统的海关通关流程停滞在过去 - 手工、易错且不可扩展。我们相信AI可以改变这些关键工作流程，使其更快、更准确、对全世界企业更易于使用。",
        "about.mission.content3": "通过将先进的AI技术与深厚的领域专业知识相结合，我们正在构建贸易合规的未来 - 一个人类专家被智能系统赋能而非被文件工作淹没的世界。",
        "about.stats.trade": "客户管理的年贸易量",
        "about.stats.docs": "处理的文档",
        "about.stats.countries": "支持的国家",
        "about.stats.satisfaction": "客户满意度",
        "about.values.title": "我们的价值观",
        "about.values.subtitle": "指导我们所做的一切和每个决定的原则。",
        "about.values.innovation": "创新第一",
        "about.values.innovation.desc": "我们不断突破AI可能性的边界，始终为复杂的贸易挑战寻求更好的解决方案。",
        "about.values.trust": "信任与安全",
        "about.values.trust.desc": "贸易数据很敏感。我们在所做的一切中保持最高的安全和透明标准。",
        "about.values.success": "客户成功",
        "about.values.success.desc": "我们的成功通过客户的成功来衡量。我们是变革其运营的合作伙伴。",
        "about.team.title": "领导团队",
        "about.team.subtitle": "认识推动贸易合规创新的经验丰富的专业人士。",
        "about.team.ceo": "首席执行官兼联合创始人",
        "about.team.ceo.bio": "前财富500强物流公司AI负责人。麻省理工学院计算机科学博士。在贸易技术领域拥有15年以上经验。",
        "about.team.cto": "首席技术官兼联合创始人",
        "about.team.cto.bio": "前Google首席工程师。大规模机器学习系统和知识图谱专家。斯坦福大学计算机科学毕业生。",
        "about.team.vp": "合规副总裁",
        "about.team.vp.bio": "在报关和国际贸易方面拥有20年以上经验。前海关官员。全球贸易法规专家。",
        "about.presence.title": "全球布局",
        "about.presence.subtitle": "从世界各地的办事处支持国际贸易。",
        "about.office.sf": "美国旧金山",
        "about.office.sf.desc": "总部和研发中心",
        "about.office.sf.team": "50多名工程师",
        "about.office.shanghai": "中国上海",
        "about.office.shanghai.desc": "亚太区中心",
        "about.office.shanghai.team": "25多名专家",
        "about.office.london": "英国伦敦",
        "about.office.london.desc": "欧洲运营中心",
        "about.office.london.team": "20多名专业人士",
        "about.office.hcmc": "越南胡志明市",
        "about.office.hcmc.desc": "东南亚中心",
        "about.office.hcmc.team": "15多名团队成员",
        "about.cta.title": "准备变革您的贸易运营？",
        "about.cta.subtitle": "加入已经通过贸易卫士AI革命其海关合规的公司。",
        "about.cta.trial": "开始免费试用",
        "about.cta.contact": "联系我们团队",
        
        // Contact Page
        "contact.hero.title": "让我们一起变革您的海关运营",
        "contact.hero.subtitle": "准备革命您的贸易合规？我们的团队在这里帮助您开始使用贸易卫士AI。",
        "contact.form.title": "联系我们",
        "contact.form.firstname": "名字",
        "contact.form.lastname": "姓氏",
        "contact.form.email": "企业邮箱",
        "contact.form.phone": "电话号码",
        "contact.form.company": "公司名称",
        "contact.form.jobtitle": "职位",
        "contact.form.companytype": "公司类型",
        "contact.form.companytype.placeholder": "选择您的公司类型",
        "contact.form.companytype.broker": "报关行",
        "contact.form.companytype.forwarder": "货代",
        "contact.form.companytype.logistics": "物流供应商",
        "contact.form.companytype.manufacturer": "制造商",
        "contact.form.companytype.importer": "进出口商",
        "contact.form.companytype.enterprise": "企业集团",
        "contact.form.companytype.other": "其他",
        "contact.form.volume": "月报关量",
        "contact.form.volume.placeholder": "选择数量范围",
        "contact.form.volume.1": "1 - 100票",
        "contact.form.volume.2": "101 - 500票",
        "contact.form.volume.3": "501 - 1,000票",
        "contact.form.volume.4": "1,001 - 5,000票",
        "contact.form.volume.5": "5,000票以上",
        "contact.form.inquiry": "咨询类型",
        "contact.form.inquiry.placeholder": "我们可以为您提供什么帮助？",
        "contact.form.inquiry.demo": "申请演示",
        "contact.form.inquiry.trial": "开始免费试用",
        "contact.form.inquiry.pricing": "价格信息",
        "contact.form.inquiry.integration": "集成问题",
        "contact.form.inquiry.partnership": "合作机会",
        "contact.form.inquiry.support": "技术支持",
        "contact.form.inquiry.other": "其他",
        "contact.form.message": "留言",
        "contact.form.message.placeholder": "告诉我们更多关于您的需求以及我们如何帮助您...",
        "contact.form.newsletter": "我希望接收有关贸易卫士AI产品和行业见解的更新。您可以随时取消订阅。",
        "contact.form.submit": "发送消息",
        "contact.form.privacy": "提交此表单即表示您同意我们的隐私政策和服务条款。",
        "contact.other.title": "其他联系方式",
        "contact.quick.title": "快速操作",
        "contact.quick.trial": "开始免费试用（无需信用卡）",
        "contact.quick.demo": "安排个性化演示",
        "contact.offices.title": "全球办事处",
        "contact.office.hq": "总部 - 苏州",
        "contact.office.hq.address": "苏州工业园区星汽创新港E603-E612\n江苏苏州 215000, 中国",
        "contact.office.asia": "上海办事处",
        "contact.office.asia.address": "金融海岸中心E栋02-03室，北外滩440号\n虹口区, 上海 200000, 中国",
        "contact.office.shenzhen": "深圳办事处",
        "contact.office.shenzhen.address": "海外联谊大厦212室，业嘉路12号\n宝安区, 深圳 518000, 中国",
        "contact.office.qingdao": "青岛办事处",
        "contact.office.qingdao.address": "府东大厦110室，李沧路8号\n李沧区, 青岛 266000, 中国",
        "contact.support.title": "支持时间",
        "contact.support.sales": "销售咨询：",
        "contact.support.sales.hours": "24/7全球覆盖",
        "contact.support.technical": "技术支持：",
        "contact.support.technical.hours": "工作时间（所有地区）",
        "contact.support.emergency": "紧急支持：",
        "contact.support.emergency.hours": "仅限企业客户",
        "contact.direct.title": "直接联系方式",
        "contact.direct.sales": "销售：",
        "contact.direct.sales.email": "missattic.ai@gmail.com",
        "contact.direct.support": "支持：",
        "contact.direct.support.email": "missattic.ai@gmail.com",
        "contact.direct.partners": "合作：",
        "contact.direct.partners.email": "missattic.ai@gmail.com",
        "contact.faq.title": "常见问题",
        "contact.faq.subtitle": "在您联系之前的常见问题快速答案。",
        "contact.faq.start.title": "我们多快可以开始？",
        "contact.faq.start.answer": "大多数客户在1-2周内启动运行。我们的团队处理设置并提供全面培训。",
        "contact.faq.integrate.title": "与现有系统集成吗？",
        "contact.faq.integrate.answer": "是的，我们通过RESTful API与主要ERP系统（SAP、Oracle）、TMS平台和海关系统集成。",
        "contact.faq.trial.title": "免费试用包含什么？",
        "contact.faq.trial.answer": "14天对您选择计划的完整访问，最多50票测试报关单和专门的入职支持。",
        "contact.faq.secure.title": "我的数据安全吗？",
        "contact.faq.secure.answer": "我们维持SOC 2 Type II合规和端到端加密。您的数据从不共享，您保持完全所有权。"
    },
    
    ja: {
        // Brand and Navigation
        brand: "トレードガードAI",
        "nav.home": "ホーム",
        "nav.features": "機能",
        "nav.architecture": "アーキテクチャ",
        "nav.solutions": "ソリューション",
        "nav.pricing": "価格",
        "nav.about": "会社情報",
        "nav.contact": "お問い合わせ",
        "nav.demo": "デモ申込",
        
        // Hero Section
        "hero.title": "AI駆動の通関革命",
        "hero.subtitle": "インテリジェントな文書処理システムで貿易コンプライアンスを変革。効率を3-5倍向上させ、エラー率を1%未満に削減。",
        "hero.cta1": "無料トライアル開始",
        "hero.cta2": "デモを見る",
        
        // Stats
        "stats.efficiency": "効率向上",
        "stats.error": "エラー率",
        "stats.accuracy": "データ精度",
        
        // Features
        "features.title": "コアAI機能",
        "features.subtitle": "当社の包括的なAIプラットフォームは、税関書類処理とリスク管理のあらゆる側面に対応しています。",
        "feature1.title": "マルチモーダル文書認識",
        "feature1.desc": "PDF、画像、スキャン文書の知的処理で、すべての形式で98%以上の精度を実現。",
        "feature2.title": "構造化データ処理",
        "feature2.desc": "非構造化情報を標準化された検証済み税関申告要素に変換。",
        "feature3.title": "8次元リスクスキャナー",
        "feature3.desc": "HSコード分類、価格設定、一貫性、政策コンプライアンスを含む包括的なリスク分析。",
        "features.viewall": "すべての機能を見る",
        
        // CTA
        "cta.title": "税関業務を変革する準備はできていますか？",
        "cta.subtitle": "当社のAIプラットフォームでコンプライアンスワークフローを革新した主要な通関業者や企業に参加してください。",
        "cta.trial": "無料トライアル開始",
        "cta.contact": "営業に問い合わせ",
        
        // Footer
        "footer.desc": "AI駆動の自動化と専門家のコラボレーションによる税関コンプライアンスの革命。",
        "footer.product": "製品",
        "footer.company": "会社",
        "footer.connect": "接続",
        
        // Features Page
        "features.hero.title": "税関コンプライアンスのための包括的AI機能",
        "features.hero.subtitle": "5つのコアモジュールがどのように連携して、手作業でエラーが起こりやすい業務から知的で自動化されたワークフローへと税関通関プロセスを変革するかをご覧ください。",
        "features.overview.title": "5つのコアAIモジュール",
        "features.overview.subtitle": "各モジュールは税関通関ワークフローの特定の課題に対処するよう設計されており、シームレスに連携して前例のない効率と精度を提供します。",
        
        // Process Steps
        "process.step1": "文書アップロード",
        "process.step1.desc": "マルチフォーマット入力",
        "process.step2": "認識",
        "process.step2.desc": "AI抽出",
        "process.step3": "構造化",
        "process.step3.desc": "データマッピング",
        "process.step4": "リスクスキャン",
        "process.step4.desc": "8次元分析",
        "process.step5": "決定",
        "process.step5.desc": "AI推奨",
        
        // Module Details
        "module1.title": "マルチモーダル文書認識",
        "module1.description": "当社の先進AI システムは、あらゆる形式の文書（PDF、画像、スキャンコピー）を業界最高レベルの98%を超える精度で知的に処理します。",
        "module1.feature1.title": "汎用フォーマットサポート",
        "module1.feature1.desc": "PDF、JPEG、PNG、TIFF、さらには品質の悪いスキャン文書でも一貫した精度で処理。",
        "module1.feature2.title": "インテリジェント文書分類",
        "module1.feature2.desc": "文書タイプを自動識別：インボイス、パッキングリスト、原産地証明書など。",
        "module1.feature3.title": "多言語OCR",
        "module1.feature3.desc": "英語、中国語、日本語、ベトナム語、その他20以上の言語をネイティブレベルの精度でサポート。",
        "module1.stats.title": "パフォーマンス指標",
        "module1.stats.accuracy": "データ抽出精度",
        "module1.stats.speed": "文書あたりの処理時間",
        
        "module2.title": "構造化データ処理",
        "module2.description": "非構造化文書コンテンツを、グローバル貿易規制に準拠した標準化された検証済み税関申告要素に変換。",
        "module2.feature1.title": "インテリジェントフィールドマッピング",
        "module2.feature1.desc": "抽出されたデータを異なる国や規制の税関申告フィールドに自動マッピング。",
        "module2.feature2.title": "データ検証・クレンジング",
        "module2.feature2.desc": "形式を検証し、合計を計算し、リスク分析前にデータ整合性を確保。",
        "module2.feature3.title": "標準フォーマット出力",
        "module2.feature3.desc": "既存の税関システムやERPと互換性のある標準化されたJSON/XML出力を生成。",
        
        "module3.title": "8次元リスクスキャナーエンジン",
        "module3.description": "8つの重要な次元での包括的なリスク分析により、潜在的なコンプライアンス問題が高コストな問題になる前に特定。",
        "risk.dimension1": "HSコード分類",
        "risk.dimension1.desc": "税関データベースで訓練された深層学習モデルを使用して関税分類を検証。",
        "risk.dimension2": "価格合理性",
        "risk.dimension2.desc": "申告価格をグローバル商品価格データベースと履歴データと比較。",
        "risk.dimension3": "文書一貫性",
        "risk.dimension3.desc": "インボイス、パッキングリスト、証明書間の情報をクロス検証。",
        "risk.dimension4": "政策コンプライアンス",
        "risk.dimension4.desc": "現在の貿易政策、制裁、規制要件をチェック。",
        "risk.dimension5": "原産地検証",
        "risk.dimension5.desc": "原産国表示と特恵貿易協定の適格性を検証。",
        "risk.dimension6": "ライセンス・許可",
        "risk.dimension6.desc": "必要な輸出入ライセンスと規制承認を特定。",
        "risk.dimension7": "物流検証",
        "risk.dimension7.desc": "輸送ルート、輸送モード、配送タイムラインを検証。",
        "risk.dimension8": "履歴パターン",
        "risk.dimension8.desc": "履歴貿易パターンを分析し、異常な取引にフラグを立てる。",
        
        "module4.title": "AI駆動の意思決定支援",
        "module4.description": "完全な説明と規制参照付きの明確で実行可能な推奨事項を受け取る。当社のAIは問題にフラグを立てるだけでなく、正確にそれを修正する方法を教えます。",
        "module4.feature1.title": "説明可能な推奨事項",
        "module4.feature1.desc": "すべての提案には詳細な理由、規制引用、段階的な修復ガイダンスが付属。",
        "module4.feature2.title": "優先順位ベースのワークフロー",
        "module4.feature2.desc": "問題はリスクレベルと潜在的な財務影響によって自動的に優先順位付けされ、最も重要なことに集中できます。",
        "module4.feature3.title": "ワンクリック修正",
        "module4.feature3.desc": "AI提案をワンクリックで受け入れ、すべての関連フィールドを自動更新し、監査証跡を維持。",
        "module4.ai.title": "AI透明性",
        "module4.ai.desc": "当社の説明可能AI（XAI）は、すべての推奨事項が完全に監査可能で、決定透明性の規制要件に準拠することを保証。",
        
        "module5.title": "知識・コラボレーション管理",
        "module5.description": "継続学習とシームレスなチームコラボレーションを通じて組織の税関専門知識を構築。すべてのインタラクションがシステムをより賢くします。",
        "module5.feature1.title": "組織記憶",
        "module5.feature1.desc": "すべての決定、修正、専門知識を捕捉して、会社の機関記憶を構築。",
        "module5.feature2.title": "専門家レビューワークフロー",
        "module5.feature2.desc": "複雑なケースのロールベース権限とエスカレーションパスを持つ構造化承認プロセス。",
        "module5.feature3.title": "継続学習",
        "module5.feature3.desc": "機械学習モデルはすべての専門家修正で改善し、データフライホイール効果を生み出す。",
        "module5.flywheel.title": "データフライホイール効果",
        "module5.flywheel.desc": "より多い使用 → より良いAI → より正確な結果 → より高い採用 → より多いデータ → さらに良いAI",
        
        // Integration
        "integration.title": "シームレス統合とパフォーマンス",
        "integration.subtitle": "当社のプラットフォームは既存システムと統合し、初日から測定可能な改善を提供します。",
        "integration.api.title": "RESTful API統合",
        "integration.api.desc": "包括的APIスイートを通じて既存のERP、TMS、税関システムと接続。",
        "integration.cloud.title": "クラウドネイティブアーキテクチャ",
        "integration.cloud.desc": "スケーラブル、セキュア、常に最新。月ではなく日で展開。",
        "integration.security.title": "エンタープライズセキュリティ",
        "integration.security.desc": "エンドツーエンド暗号化と監査証跡を持つSOC 2 Type II準拠。",
        
        // Performance
        "performance.title": "実証されたパフォーマンス指標",
        "performance.efficiency": "処理効率",
        "performance.error": "エラー率",
        "performance.accuracy": "データ精度",
        "performance.cost": "コスト削減",
        
        "features.cta.title": "税関コンプライアンスの未来を体験",
        "features.cta.subtitle": "5つのコアモジュールが連携して税関業務を変革する方法をご覧ください。今すぐ無料トライアルを開始。",
        "features.cta.trial": "無料トライアル開始",
        "features.cta.demo": "デモのスケジュール",
        
        // Architecture Page
        "architecture.hero.title": "税関インテリジェンスのためのAIネイティブアーキテクチャ",
        "architecture.hero.subtitle": "大規模言語モデル、知識グラフ、マルチモーダルAIの革命的な融合が業界最先端の税関コンプライアンスプラットフォームをどのように創造するかをご覧ください。",
        "architecture.overview.title": "トリプル融合AIアーキテクチャ",
        "architecture.overview.subtitle": "AIを後付けとして追加する従来のシステムとは異なり、完璧なシナジーで機能する3つのコアAI技術を中心に、ゼロからプラットフォームを構築しました。",
        
        // Tech Components
        "tech.llm.title": "大規模言語モデル",
        "tech.llm.desc": "複雑な貿易文書と規制テキスト解釈のための高度な自然言語理解。",
        "tech.kg.title": "知識グラフ",
        "tech.kg.desc": "商品、規制、エンティティ、貿易ルール間の構造化関係マッピングによる説明可能な推論。",
        "tech.multimodal.title": "マルチモーダルAI",
        "tech.multimodal.desc": "業界最高レベルの精度で多様な文書フォーマットを処理するコンピュータビジョンとOCR機能。",
        
        "architecture.flow.title": "エンドツーエンド処理アーキテクチャ",
        "architecture.flow.subtitle": "文書アップロードから実行可能なコンプライアンス推奨事項までのインテリジェントなデータジャーニーを追跡。",
        
        "architecture.deepdive.title": "技術実装詳細",
        "architecture.deepdive.subtitle": "AIネイティブ税関コンプライアンスプラットフォームを動かす高度なエンジニアリングを理解。",
        
        "llm.deepdive.title": "高度言語理解",
        "llm.deepdive.description": "ファインチューンされた言語モデルは、複雑な貿易用語、多言語文書、ニュアンスのある規制言語の理解に優れています。",
        "llm.capabilities.title": "コア機能",
        "llm.performance.title": "パフォーマンス指標",
        
        "kg.deepdive.title": "構造化推論エンジン",
        "kg.deepdive.description": "知識グラフは製品、規制、国、貿易ルール間の複雑な関係をモデル化し、説明可能なAI決定を可能にします。",
        "kg.entities.title": "主要エンティティと関係",
        "kg.scale.title": "スケールとパフォーマンス",
        
        "multimodal.deepdive.title": "高度文書インテリジェンス",
        "multimodal.deepdive.description": "最先端のコンピュータビジョンモデルは、コンテンツとレイアウトの両方を理解し、人間レベルの精度であらゆる文書フォーマットを処理します。",
        "multimodal.pipeline.title": "処理パイプライン",
        "multimodal.accuracy.title": "精度ベンチマーク",
        
        "architecture.advantages.title": "なぜ当社のアーキテクチャが勝利するか",
        "architecture.advantages.subtitle": "従来システムとシンプルなAIラッパーに対するAIネイティブアプローチの戦略的優位性を理解。",
        "comparison.traditional.title": "従来システム",
        "comparison.simple.title": "シンプルAIラッパー",
        "comparison.ours.title": "トレードガードAI",
        
        // LLM Capabilities
        "arch.llm.capability1": "税関・貿易データセットでのマルチドメインファインチューニング",
        "arch.llm.capability2": "98.5%精度のコンテキスト認識エンティティ抽出",
        "arch.llm.capability3": "製品分類のための意味的類似性マッチング",
        "arch.llm.capability4": "リアルタイム規制解釈とマッピング",
        "arch.llm.metric1": "エンティティ抽出精度",
        "arch.llm.metric2": "サポート言語数",
        
        // Multi-Modal AI Pipeline
        "arch.multimodal.step1.title": "画像前処理",
        "arch.multimodal.step1.desc": "ノイズ低減、傾き補正、拡張",
        "arch.multimodal.step2.title": "レイアウト検出",
        "arch.multimodal.step2.desc": "テーブル識別、テキストブロック、フォームフィールド",
        "arch.multimodal.step3.title": "多言語OCR",
        "arch.multimodal.step3.desc": "コンテキスト認識による文字認識",
        "arch.multimodal.step4.title": "コンテンツ構造化",
        "arch.multimodal.step4.desc": "論理的グループ化と関係マッピング",
        
        // Knowledge Graph
        "arch.kg.category1": "製品",
        "arch.kg.category2": "規制",
        "arch.kg.product1": "• HS分類階層",
        "arch.kg.product2": "• 材料組成",
        "arch.kg.product3": "• 製造プロセス",
        "arch.kg.regulation1": "• 関税スケジュール",
        "arch.kg.regulation2": "• 貿易協定",
        "arch.kg.regulation3": "• ライセンス要件",
        "arch.kg.metric1": "エンティティと関係",
        
        // Architecture Comparison
        "arch.comparison.traditional.point1": "新しいフォーマットでルールベース処理が破綻",
        "arch.comparison.traditional.point2": "各文書タイプの手動テンプレート作成",
        "arch.comparison.traditional.point3": "学習能力や適応性なし",
        "arch.comparison.traditional.point4": "複雑な実装と保守",
        "arch.comparison.simple.point1": "説明のないブラックボックス決定",
        "arch.comparison.simple.point2": "重要なコンプライアンスでの幻覚リスク",
        "arch.comparison.simple.point3": "規制知識統合なし",
        "arch.comparison.simple.point4": "ドメイン固有タスクでの限定精度",
        "arch.comparison.ours.point1": "完全監査証跡付き説明可能AI",
        "arch.comparison.ours.point2": "専門家フィードバックからの継続学習",
        "arch.comparison.ours.point3": "深い規制知識統合",
        "arch.comparison.ours.point4": "企業グレードの精度と信頼性",
        
        "architecture.cta.title": "高度AIアーキテクチャを体験",
        "architecture.cta.subtitle": "トリプル融合AI技術が税関コンプライアンスをどのように変革するかをご覧ください。チームとの技術深掘りをスケジュール。",
        "architecture.cta.demo": "技術デモ",
        "architecture.cta.whitepaper": "ホワイトペーパーダウンロード",
        
        // Solutions Page
        "solutions.hero.title": "あらゆる貿易コンプライアンスニーズに合わせたソリューション",
        "solutions.hero.subtitle": "通関業者から多国籍企業まで、当社のAIプラットフォームは御社固有のワークフローとコンプライアンス要件に適応します。",
        "solutions.brokers.title": "通関業者",
        "solutions.brokers.desc": "AI駆動の文書処理とリスク管理で業務を拡大し、より多くの顧客にサービスを提供。",
        "solutions.brokers.feature1": "処理量を3-5倍に",
        "solutions.brokers.feature1.desc": "追加スタッフなしでピーク時の業務量に対応",
        "solutions.brokers.feature2": "審査時間を80%削減",
        "solutions.brokers.feature2.desc": "専門家を高リスクケースのみに集中",
        "solutions.brokers.feature3": "コンプライアンスリスクを最小化",
        "solutions.brokers.feature3.desc": "税関提出前にエラーを発見",
        "solutions.brokers.cta": "通関業者ソリューションを探索",
        "solutions.enterprise.title": "企業会社",
        "solutions.enterprise.desc": "既存ERPシステムとシームレスに統合し、企業全体のコンプライアンス管理を実現。",
        "solutions.enterprise.feature1": "ERP統合",
        "solutions.enterprise.feature1.desc": "SAP、Oracleおよび他の企業システムとの接続",
        "solutions.enterprise.feature2": "グローバルコンプライアンス",
        "solutions.enterprise.feature2.desc": "複数国の規制を管理",
        "solutions.enterprise.feature3": "高度な分析",
        "solutions.enterprise.feature3.desc": "エグゼクティブダッシュボードとコンプライアンスインサイト",
        "solutions.enterprise.cta": "企業ソリューションを探索",
        "solutions.logistics.title": "物流プロバイダー",
        "solutions.logistics.desc": "付加価値コンプライアンスサービスを提供し、物流サービスを差別化。",
        "solutions.logistics.feature1": "ホワイトラベルソリューション",
        "solutions.logistics.feature1.desc": "プラットフォームを自社サービスとしてブランディング",
        "solutions.logistics.feature2": "新しい収益源",
        "solutions.logistics.feature2.desc": "コンプライアンス専門知識とデータの収益化",
        "solutions.logistics.feature3": "顧客維持",
        "solutions.logistics.feature3.desc": "粘着性のあるコンプライアンスサービスがロイヤルティを向上",
        "solutions.logistics.cta": "物流ソリューションを探索",
        
        // Pricing Page
        "pricing.hero.title": "シンプルで透明な価格設定",
        "pricing.hero.subtitle": "ビジネスに合わせてスケールするプランを選択。すべてのプランに、透明な使用量ベース価格設定でコアAI機能が含まれます。",
        "pricing.professional.title": "プロフェッショナル",
        "pricing.professional.desc": "小規模チームと成長する通関業者に最適",
        "pricing.professional.price": "￥37,500",
        "pricing.professional.period": "/月",
        "pricing.professional.users": "最大3ユーザー、月200件の出荷",
        "pricing.professional.feature1": "マルチモーダル文書認識",
        "pricing.professional.feature2": "基本リスクスキャン（4次元）",
        "pricing.professional.feature3": "標準サポート",
        "pricing.professional.feature4": "基本分析ダッシュボード",
        "pricing.professional.missing1": "高度なコラボレーションツール",
        "pricing.professional.missing2": "APIアクセス",
        "pricing.professional.cta": "無料トライアル開始",
        "pricing.professional.additional": "追加出荷：各750円",
        "pricing.business.title": "ビジネス",
        "pricing.business.desc": "中規模の通関業者と企業に理想的",
        "pricing.business.price": "￥180,000",
        "pricing.business.period": "/月",
        "pricing.business.users": "最大10ユーザー、月1,500件の出荷",
        "pricing.business.popular": "最も人気",
        "pricing.business.feature1": "プロフェッショナル版すべての機能",
        "pricing.business.feature2": "完全8次元リスクエンジン",
        "pricing.business.feature3": "高度なコラボレーションツール",
        "pricing.business.feature4": "優先サポート",
        "pricing.business.feature5": "高度な分析とレポート",
        "pricing.business.feature6": "基本APIアクセス",
        "pricing.business.cta": "無料トライアル開始",
        "pricing.business.additional": "追加出荷：各450円",
        "pricing.enterprise.title": "エンタープライズ",
        "pricing.enterprise.desc": "カスタムニーズを持つ大規模組織向け",
        "pricing.enterprise.price": "カスタム",
        "pricing.enterprise.users": "無制限ユーザーと出荷",
        "pricing.enterprise.feature1": "ビジネス版すべての機能",
        "pricing.enterprise.feature2": "プライベートクラウドデプロイメント",
        "pricing.enterprise.feature3": "完全APIスイートとWebhook",
        "pricing.enterprise.feature4": "カスタム統合",
        "pricing.enterprise.feature5": "専任カスタマーサクセスマネージャー",
        "pricing.enterprise.feature6": "24/7プレミアムサポート",
        "pricing.enterprise.cta": "営業に問い合わせ",
        "pricing.enterprise.additional": "ボリューム割引利用可能",
        "pricing.includes.title": "すべてのプランに含まれるもの",
        "pricing.includes.security": "エンタープライズセキュリティ",
        "pricing.includes.security.desc": "SOC 2コンプライアンスとデータ暗号化",
        "pricing.includes.cloud": "クラウドインフラストラクチャ",
        "pricing.includes.cloud.desc": "99.9%稼働時間SLA",
        "pricing.includes.training": "トレーニングとオンボーディング",
        "pricing.includes.training.desc": "包括的なチームトレーニング込み",
        "pricing.includes.updates": "定期更新",
        "pricing.includes.updates.desc": "継続的なAIモデル改善",
        "pricing.faq.title": "よくある質問",
        "pricing.faq.subtitle": "価格設定とプラットフォームに関するよくある質問への回答。",
        "pricing.faq.usage.title": "使用量はどのように計算されますか？",
        "pricing.faq.usage.answer": "使用量は当社システムを通じて処理された出荷ごとに計算されます。各出荷にはすべての関連文書（請求書、パッキングリスト、証明書など）が含まれます。プラン限度を超えた追加処理は出荷ごとに課金されます。",
        "pricing.faq.change.title": "プランをアップグレードまたはダウングレードできますか？",
        "pricing.faq.change.answer": "はい、いつでもプランを変更できます。アップグレードはすぐに有効になり、ダウングレードは次の請求サイクルで有効になります。価格差は日割り計算します。",
        "pricing.faq.trial.title": "無料トライアルには何が含まれますか？",
        "pricing.faq.trial.answer": "無料トライアルには、選択したプランへの14日間の完全アクセスが含まれ、最大50件のテスト出荷が可能です。開始にクレジットカードは不要です。トライアル中またはその後いつでも有料プランにアップグレードできます。",
        "pricing.faq.volume.title": "ボリューム割引はありますか？",
        "pricing.faq.volume.answer": "はい、大量利用顧客や複数年契約にはボリューム割引を提供しています。エンタープライズ顧客は、特定のニーズと使用パターンに基づいたカスタム価格の恩恵を受けることができます。",
        "pricing.faq.security.title": "データはどの程度安全ですか？",
        "pricing.faq.security.answer": "すべてのデータにエンドツーエンド暗号化を適用し、SOC 2 Type II準拠を維持しています。貿易データは安全に処理され、第三者と共有されることはありません。エンタープライズ顧客はプライベートクラウドデプロイメントオプションも選択できます。",
        "pricing.cta.title": "始める準備はできましたか？",
        "pricing.cta.subtitle": "コンプライアンスニーズでトレードガードAIを信頼する数千人の税関専門家に参加してください。",
        "pricing.cta.trial": "無料トライアル開始",
        "pricing.cta.contact": "営業に問い合わせ",
        
        // About Page
        "about.hero.title": "AIイノベーションによるグローバル貿易の変革",
        "about.hero.subtitle": "最先端の人工知能技術により、国際貿易をより効率的で正確、かつアクセシブルにすることが私たちの使命です。",
        "about.mission.title": "私たちの使命",
        "about.mission.content1": "国際貿易コンプライアンスを悩ませる非効率性とエラーを排除し、あらゆる規模の企業がグローバルコマースに自信を持って参加できるようにすること。",
        "about.mission.content2": "従来の通関手続きは過去に留まっています - 手作業で、エラーが発生しやすく、スケールが不可能です。AIがこれらの重要なワークフローを変革し、より速く、より正確で、世界中の企業にとってよりアクセシブルにできると私たちは信じています。",
        "about.mission.content3": "高度なAI技術と深いドメイン専門知識を組み合わせることで、私たちは貿易コンプライアンスの未来を構築しています - 人間の専門家が書類作業に圧倒されるのではなく、インテリジェントシステムによって力を与えられる未来を。",
        "about.stats.trade": "顧客が管理する年間貿易量",
        "about.stats.docs": "処理された文書",
        "about.stats.countries": "サポート国",
        "about.stats.satisfaction": "顧客満足度",
        "about.values.title": "私たちの価値観",
        "about.values.subtitle": "私たちが行うすべてと、行うすべての決定を導く原則。",
        "about.values.innovation": "イノベーション第一",
        "about.values.innovation.desc": "私たちは常にAIで可能なことの境界を押し広げ、複雑な貿易課題により良いソリューションを常に求めています。",
        "about.values.trust": "信頼とセキュリティ",
        "about.values.trust.desc": "貿易データは機密です。私たちは行うすべてにおいて最高水準のセキュリティと透明性を維持します。",
        "about.values.success": "顧客成功",
        "about.values.success.desc": "私たちの成功は顧客の成功で測られます。私たちは彼らの業務変革のパートナーです。",
        "about.team.title": "リーダーシップチーム",
        "about.team.subtitle": "貿易コンプライアンスのイノベーションを推進する経験豊富な専門家にお会いください。",
        "about.team.ceo": "CEO兼共同創設者",
        "about.team.ceo.bio": "フォーチュン500物流企業の元AI責任者。MIT計算機科学博士。貿易技術分野で15年以上の経験。",
        "about.team.cto": "CTO兼共同創設者",
        "about.team.cto.bio": "元Googleプリンシパルエンジニア。大規模MLシステムと知識グラフの専門家。スタンフォード大学CS卒業。",
        "about.team.vp": "コンプライアンス担当副社長",
        "about.team.vp.bio": "通関業と国際貿易で20年以上の経験。元税関職員。グローバル貿易規制の専門家。",
        "about.presence.title": "グローバルプレゼンス",
        "about.presence.subtitle": "世界中のオフィスから国際貿易をサポート。",
        "about.office.sf": "サンフランシスコ、アメリカ",
        "about.office.sf.desc": "本社・R&D",
        "about.office.sf.team": "50名以上のエンジニア",
        "about.office.shanghai": "上海、中国",
        "about.office.shanghai.desc": "アジア太平洋ハブ",
        "about.office.shanghai.team": "25名以上のスペシャリスト",
        "about.office.london": "ロンドン、イギリス",
        "about.office.london.desc": "ヨーロッパオペレーション",
        "about.office.london.team": "20名以上のプロフェッショナル",
        "about.office.hcmc": "ホーチミン市、ベトナム",
        "about.office.hcmc.desc": "東南アジア",
        "about.office.hcmc.team": "15名以上のチームメンバー",
        "about.cta.title": "貿易業務を変革する準備はできていますか？",
        "about.cta.subtitle": "トレードガードAIで税関コンプライアンスをすでに革新している企業に参加してください。",
        "about.cta.trial": "無料トライアル開始",
        "about.cta.contact": "チームに連絡",
        
        // Contact Page
        "contact.hero.title": "一緒に税関業務を変革しましょう",
        "contact.hero.subtitle": "貿易コンプライアンスを革新する準備はできていますか？チームがトレードガードAIの開始をお手伝いします。",
        "contact.form.title": "お問い合わせ",
        "contact.form.firstname": "名",
        "contact.form.lastname": "姓",
        "contact.form.email": "ビジネスメール",
        "contact.form.phone": "電話番号",
        "contact.form.company": "会社名",
        "contact.form.jobtitle": "役職",
        "contact.form.companytype": "会社の種類",
        "contact.form.companytype.placeholder": "会社の種類を選択",
        "contact.form.companytype.broker": "通関業者",
        "contact.form.companytype.forwarder": "フレイトフォワーダー",
        "contact.form.companytype.logistics": "物流プロバイダー",
        "contact.form.companytype.manufacturer": "製造業者",
        "contact.form.companytype.importer": "輸入/輸出業者",
        "contact.form.companytype.enterprise": "企業法人",
        "contact.form.companytype.other": "その他",
        "contact.form.volume": "月間出荷量",
        "contact.form.volume.placeholder": "数量範囲を選択",
        "contact.form.volume.1": "1 - 100件",
        "contact.form.volume.2": "101 - 500件",
        "contact.form.volume.3": "501 - 1,000件",
        "contact.form.volume.4": "1,001 - 5,000件",
        "contact.form.volume.5": "5,000件以上",
        "contact.form.inquiry": "お問い合わせの種類",
        "contact.form.inquiry.placeholder": "どのようなお手伝いができますか？",
        "contact.form.inquiry.demo": "デモ申込",
        "contact.form.inquiry.trial": "無料トライアル開始",
        "contact.form.inquiry.pricing": "価格情報",
        "contact.form.inquiry.integration": "統合に関する質問",
        "contact.form.inquiry.partnership": "パートナーシップ機会",
        "contact.form.inquiry.support": "技術サポート",
        "contact.form.inquiry.other": "その他",
        "contact.form.message": "メッセージ",
        "contact.form.message.placeholder": "ニーズについて、どのようにお手伝いできるかを詳しくお聞かせください...",
        "contact.form.newsletter": "トレードガードAI製品と業界インサイトについての更新を受け取りたいと思います。いつでも配信停止できます。",
        "contact.form.submit": "メッセージを送信",
        "contact.form.privacy": "このフォームを送信することで、プライバシーポリシーと利用規約に同意したものとみなされます。",
        "contact.other.title": "その他の連絡方法",
        "contact.quick.title": "クイックアクション",
        "contact.quick.trial": "無料トライアル開始（クレジットカード不要）",
        "contact.quick.demo": "パーソナライズドデモのスケジュール",
        "contact.offices.title": "グローバルオフィス",
        "contact.office.hq": "本社 - 蘇州",
        "contact.office.hq.address": "蘇州工業園区星汽創新港E603-E612\n江蘇省蘇州 215000, 中国",
        "contact.office.asia": "上海オフィス",
        "contact.office.asia.address": "金融海岸中心E棟02-03室、北外灘440号\n虹口区, 上海 200000, 中国",
        "contact.office.shenzhen": "深圳オフィス",
        "contact.office.shenzhen.address": "海外聯誼大厦212室、業嘉路12号\n宝安区, 深圳 518000, 中国",
        "contact.office.qingdao": "青島オフィス",
        "contact.office.qingdao.address": "府東大厦110室、李滄路8号\n李滄区, 青島 266000, 中国",
        "contact.support.title": "サポート時間",
        "contact.support.sales": "営業お問い合わせ：",
        "contact.support.sales.hours": "24時間365日グローバルカバレッジ",
        "contact.support.technical": "技術サポート：",
        "contact.support.technical.hours": "営業時間（全地域）",
        "contact.support.emergency": "緊急サポート：",
        "contact.support.emergency.hours": "エンタープライズ顧客のみ",
        "contact.direct.title": "直接連絡先",
        "contact.direct.sales": "営業：",
        "contact.direct.sales.email": "missattic.ai@gmail.com",
        "contact.direct.support": "サポート：",
        "contact.direct.support.email": "missattic.ai@gmail.com",
        "contact.direct.partners": "パートナーシップ：",
        "contact.direct.partners.email": "missattic.ai@gmail.com",
        "contact.faq.title": "よくある質問",
        "contact.faq.subtitle": "お問い合わせ前によくある質問への迅速な回答。",
        "contact.faq.start.title": "どのくらい早く始められますか？",
        "contact.faq.start.answer": "ほとんどの顧客は1-2週間以内に稼働開始します。チームがセットアップを処理し、包括的なトレーニングを提供します。",
        "contact.faq.integrate.title": "既存システムと統合しますか？",
        "contact.faq.integrate.answer": "はい、RESTful APIを通じて主要ERPシステム（SAP、Oracle）、TMSプラットフォーム、税関システムと統合します。",
        "contact.faq.trial.title": "無料トライアルには何が含まれますか？",
        "contact.faq.trial.answer": "選択したプランへの14日間の完全アクセスと最大50件のテスト出荷、専任オンボーディングサポート。",
        "contact.faq.secure.title": "データは安全ですか？",
        "contact.faq.secure.answer": "エンドツーエンド暗号化でSOC 2 Type II準拠を維持します。データは決して共有されず、完全な所有権を維持します。"
    },
    
    vi: {
        // Brand and Navigation
        brand: "TradeGuard AI",
        "nav.home": "Trang chủ",
        "nav.features": "Tính năng",
        "nav.architecture": "Kiến trúc",
        "nav.solutions": "Giải pháp",
        "nav.pricing": "Bảng giá",
        "nav.about": "Về chúng tôi",
        "nav.contact": "Liên hệ",
        "nav.demo": "Yêu cầu Demo",
        
        // Hero Section
        "hero.title": "Cuộc Cách Mạng Thông Quan Hải Quan Bằng AI",
        "hero.subtitle": "Chuyển đổi quy trình tuân thủ thương mại của bạn với hệ thống xử lý tài liệu thông minh. Tăng hiệu quả 3-5 lần đồng thời giảm lỗi xuống dưới 1%.",
        "hero.cta1": "Bắt đầu dùng thử miễn phí",
        "hero.cta2": "Xem Demo",
        
        // Stats
        "stats.efficiency": "Tăng hiệu quả",
        "stats.error": "Tỷ lệ lỗi",
        "stats.accuracy": "Độ chính xác dữ liệu",
        
        // Features
        "features.title": "Khả năng AI Cốt lõi",
        "features.subtitle": "Nền tảng AI toàn diện của chúng tôi giải quyết mọi khía cạnh của xử lý tài liệu hải quan và quản lý rủi ro.",
        "feature1.title": "Nhận dạng tài liệu đa phương thức",
        "feature1.desc": "Xử lý thông minh các tệp PDF, hình ảnh và tài liệu quét với độ chính xác 98%+ trên tất cả định dạng.",
        "feature2.title": "Xử lý dữ liệu có cấu trúc",
        "feature2.desc": "Chuyển đổi thông tin không có cấu trúc thành các yếu tố khai báo hải quan đã được chuẩn hóa và xác minh.",
        "feature3.title": "Máy quét rủi ro 8 chiều",
        "feature3.desc": "Phân tích rủi ro toàn diện bao gồm phân loại mã HS, định giá, tính nhất quán và tuân thủ chính sách.",
        "features.viewall": "Xem tất cả tính năng",
        
        // CTA
        "cta.title": "Sẵn sàng chuyển đổi hoạt động hải quan của bạn?",
        "cta.subtitle": "Tham gia với các công ty môi giới hải quan và doanh nghiệp hàng đầu đã cách mạng hóa quy trình tuân thủ với nền tảng AI của chúng tôi.",
        "cta.trial": "Bắt đầu dùng thử miễn phí",
        "cta.contact": "Liên hệ bán hàng",
        
        // Footer
        "footer.desc": "Cách mạng hóa tuân thủ hải quan thông qua tự động hóa AI và hợp tác chuyên gia.",
        "footer.product": "Sản phẩm",
        "footer.company": "Công ty",
        "footer.connect": "Kết nối",
        
        // Features Page
        "features.hero.title": "Tính năng AI toàn diện cho tuân thủ hải quan",
        "features.hero.subtitle": "Khám phá cách 5 mô-đun cốt lõi của chúng tôi hoạt động cùng nhau để chuyển đổi quy trình thông quan hải quan từ các thao tác thủ công dễ lỗi thành quy trình làm việc tự động thông minh.",
        "features.overview.title": "5 Mô-đun AI Cốt lõi",
        "features.overview.subtitle": "Mỗi mô-đun được thiết kế để giải quyết các điểm đau cụ thể trong quy trình thông quan hải quan, hoạt động liền mạch cùng nhau để mang lại hiệu quả và độ chính xác chưa từng có.",
        
        // Process Steps
        "process.step1": "Tải lên tài liệu",
        "process.step1.desc": "Đầu vào đa định dạng",
        "process.step2": "Nhận dạng",
        "process.step2.desc": "Trích xuất AI",
        "process.step3": "Cấu trúc hóa",
        "process.step3.desc": "Ánh xạ dữ liệu",
        "process.step4": "Quét rủi ro",
        "process.step4.desc": "Phân tích 8 chiều",
        "process.step5": "Quyết định",
        "process.step5.desc": "Khuyến nghị AI",
        
        // Module Details
        "module1.title": "Nhận dạng tài liệu đa phương thức",
        "module1.description": "Hệ thống AI tiên tiến của chúng tôi xử lý thông minh tài liệu ở mọi định dạng - PDF, hình ảnh, bản sao quét - với tỷ lệ chính xác hàng đầu ngành vượt quá 98%.",
        "module1.feature1.title": "Hỗ trợ định dạng phổ quát",
        "module1.feature1.desc": "Xử lý PDF, JPEG, PNG, TIFF, và cả tài liệu quét chất lượng kém với độ chính xác nhất quán.",
        "module1.feature2.title": "Phân loại tài liệu thông minh",
        "module1.feature2.desc": "Tự động nhận dạng các loại tài liệu: hóa đơn, danh sách đóng gói, giấy chứng nhận xuất xứ, và nhiều hơn nữa.",
        "module1.feature3.title": "OCR đa ngôn ngữ",
        "module1.feature3.desc": "Hỗ trợ tiếng Anh, tiếng Trung, tiếng Nhật, tiếng Việt và hơn 20 ngôn ngữ khác với độ chính xác bản địa.",
        "module1.stats.title": "Chỉ số hiệu suất",
        "module1.stats.accuracy": "Độ chính xác trích xuất dữ liệu",
        "module1.stats.speed": "Thời gian xử lý mỗi tài liệu",
        
        "module2.title": "Xử lý dữ liệu có cấu trúc",
        "module2.description": "Chuyển đổi nội dung tài liệu không có cấu trúc thành các yếu tố khai báo hải quan đã được chuẩn hóa, xác minh tuân thủ quy định thương mại toàn cầu.",
        "module2.feature1.title": "Ánh xạ trường thông minh",
        "module2.feature1.desc": "Tự động ánh xạ dữ liệu đã trích xuất vào các trường khai báo hải quan trên các quốc gia và quy định khác nhau.",
        "module2.feature2.title": "Xác minh & làm sạch dữ liệu",
        "module2.feature2.desc": "Xác minh định dạng, tính toán tổng số và đảm bảo tính toàn vẹn dữ liệu trước phân tích rủi ro.",
        "module2.feature3.title": "Đầu ra định dạng chuẩn",
        "module2.feature3.desc": "Tạo ra đầu ra JSON/XML chuẩn hóa tương thích với hệ thống hải quan và ERP hiện có.",
        
        "module3.title": "Công cụ quét rủi ro 8 chiều",
        "module3.description": "Phân tích rủi ro toàn diện trên tám chiều quan trọng để xác định các vấn đề tuân thủ tiềm ẩn trước khi chúng trở thành vấn đề tốn kém.",
        "risk.dimension1": "Phân loại mã HS",
        "risk.dimension1.desc": "Xác minh phân loại thuế quan sử dụng mô hình học sâu được đào tạo trên cơ sở dữ liệu hải quan.",
        "risk.dimension2": "Tính hợp lý của giá",
        "risk.dimension2.desc": "So sánh giá trị khai báo với cơ sở dữ liệu giá hàng hóa toàn cầu và dữ liệu lịch sử.",
        "risk.dimension3": "Tính nhất quán tài liệu",
        "risk.dimension3.desc": "Xác minh chéo thông tin giữa hóa đơn, danh sách đóng gói và chứng chỉ.",
        "risk.dimension4": "Tuân thủ chính sách",
        "risk.dimension4.desc": "Kiểm tra các chính sách thương mại, lệnh trừng phạt và yêu cầu quy định hiện tại.",
        "risk.dimension5": "Xác minh xuất xứ",
        "risk.dimension5.desc": "Xác minh tuyên bố về nước xuất xứ và điều kiện đủ điều kiện cho hiệp định thương mại ưu đãi.",
        "risk.dimension6": "Giấy phép & Phép",
        "risk.dimension6.desc": "Xác định giấy phép xuất/nhập khẩu cần thiết và phê duyệt quy định.",
        "risk.dimension7": "Xác minh logistics",
        "risk.dimension7.desc": "Xác minh tuyến đường vận chuyển, phương thức vận tải và thời gian giao hàng.",
        "risk.dimension8": "Mẫu lịch sử",
        "risk.dimension8.desc": "Phân tích các mẫu thương mại lịch sử và đánh dấu các giao dịch bất thường.",
        
        "module4.title": "Hỗ trợ quyết định được điều khiển bởi AI",
        "module4.description": "Nhận các khuyến nghị rõ ràng, có thể thực hiện với giải thích đầy đủ và tham chiếu quy định. AI của chúng tôi không chỉ đánh dấu vấn đề - mà còn cho bạn biết chính xác cách khắc phục chúng.",
        "module4.feature1.title": "Khuyến nghị có thể giải thích",
        "module4.feature1.desc": "Mỗi đề xuất đều đi kèm với lý luận chi tiết, trích dẫn quy định và hướng dẫn khắc phục từng bước.",
        "module4.feature2.title": "Quy trình làm việc dựa trên ưu tiên",
        "module4.feature2.desc": "Các vấn đề được tự động ưu tiên theo mức độ rủi ro và tác động tài chính tiềm năng, giúp bạn tập trung vào những gì quan trọng nhất.",
        "module4.feature3.title": "Sửa chữa một cú nhấp chuột",
        "module4.feature3.desc": "Chấp nhận đề xuất AI chỉ với một cú nhấp chuột, tự động cập nhật tất cả các trường liên quan và duy trì dấu vết kiểm toán.",
        "module4.ai.title": "Tính minh bạch AI",
        "module4.ai.desc": "AI có thể giải thích (XAI) của chúng tôi đảm bảo mọi khuyến nghị đều có thể kiểm toán đầy đủ và tuân thủ các yêu cầu quy định về minh bạch quyết định.",
        
        "module5.title": "Quản lý kiến thức & hợp tác",
        "module5.description": "Xây dựng chuyên môn hải quan của tổ chức thông qua học tập liên tục và hợp tác nhóm liền mạch. Mỗi tương tác làm cho hệ thống thông minh hơn.",
        "module5.feature1.title": "Bộ nhớ tổ chức",
        "module5.feature1.desc": "Nắm bắt tất cả quyết định, sửa chữa và kiến thức chuyên gia để xây dựng bộ nhớ thể chế của công ty bạn.",
        "module5.feature2.title": "Quy trình xem xét chuyên gia",
        "module5.feature2.desc": "Quy trình phê duyệt có cấu trúc với quyền hạn dựa trên vai trò và đường dẫn leo thang cho các trường hợp phức tạp.",
        "module5.feature3.title": "Học tập liên tục",
        "module5.feature3.desc": "Mô hình học máy được cải thiện với mỗi lần sửa chữa của chuyên gia, tạo ra hiệu ứng bánh đà dữ liệu.",
        "module5.flywheel.title": "Hiệu ứng bánh đà dữ liệu",
        "module5.flywheel.desc": "Sử dụng nhiều hơn → AI tốt hơn → Kết quả chính xác hơn → Áp dụng cao hơn → Dữ liệu nhiều hơn → AI tốt hơn nữa",
        
        // Integration
        "integration.title": "Tích hợp liền mạch & Hiệu suất",
        "integration.subtitle": "Nền tảng của chúng tôi tích hợp với hệ thống hiện có và mang lại cải thiện có thể đo lường ngay từ ngày đầu tiên.",
        "integration.api.title": "Tích hợp API RESTful",
        "integration.api.desc": "Kết nối với hệ thống ERP, TMS và hải quan hiện có thông qua bộ API toàn diện của chúng tôi.",
        "integration.cloud.title": "Kiến trúc gốc đám mây",
        "integration.cloud.desc": "Có thể mở rộng, an toàn và luôn cập nhật. Triển khai trong vài ngày, không phải vài tháng.",
        "integration.security.title": "Bảo mật doanh nghiệp",
        "integration.security.desc": "Tuân thủ SOC 2 Type II với mã hóa đầu cuối và dấu vết kiểm toán.",
        
        // Performance
        "performance.title": "Chỉ số hiệu suất đã được chứng minh",
        "performance.efficiency": "Hiệu quả xử lý",
        "performance.error": "Tỷ lệ lỗi",
        "performance.accuracy": "Độ chính xác dữ liệu",
        "performance.cost": "Giảm chi phí",
        
        "features.cta.title": "Trải nghiệm tương lai của tuân thủ hải quan",
        "features.cta.subtitle": "Xem cách 5 mô-đun cốt lõi của chúng tôi hoạt động cùng nhau để chuyển đổi hoạt động hải quan của bạn. Bắt đầu dùng thử miễn phí ngay hôm nay.",
        "features.cta.trial": "Bắt đầu dùng thử miễn phí",
        "features.cta.demo": "Lên lịch Demo",
        
        // Architecture Page
        "architecture.hero.title": "Kiến trúc gốc AI cho Trí tuệ Hải quan",
        "architecture.hero.subtitle": "Khám phá cách sự kết hợp cách mạng của các Mô hình Ngôn ngữ Lớn, Đồ thị Kiến thức và AI Đa phương thức tạo ra nền tảng tuân thủ hải quan tiên tiến nhất trong ngành.",
        "architecture.overview.title": "Kiến trúc AI Kết hợp Ba",
        "architecture.overview.subtitle": "Không giống như các hệ thống truyền thống thêm AI như một suy nghĩ muộn màng, chúng tôi đã xây dựng nền tảng từ đầu xung quanh ba công nghệ AI cốt lõi hoạt động trong sự đồng bộ hoàn hảo.",
        
        // Tech Components
        "tech.llm.title": "Mô hình Ngôn ngữ Lớn",
        "tech.llm.desc": "Hiểu biết ngôn ngữ tự nhiên tiên tiến cho tài liệu thương mại phức tạp và giải thích văn bản quy định.",
        "tech.kg.title": "Đồ thị Kiến thức",
        "tech.kg.desc": "Ánh xạ mối quan hệ có cấu trúc giữa hàng hóa, quy định, thực thể và quy tắc thương mại để lý luận có thể giải thích.",
        "tech.multimodal.title": "AI Đa phương thức",
        "tech.multimodal.desc": "Khả năng thị giác máy tính và OCR để xử lý các định dạng tài liệu đa dạng với độ chính xác hàng đầu ngành.",
        
        "architecture.flow.title": "Kiến trúc xử lý từ đầu đến cuối",
        "architecture.flow.subtitle": "Theo dõi hành trình dữ liệu thông minh từ tải lên tài liệu đến khuyến nghị tuân thủ có thể thực hiện.",
        
        "architecture.deepdive.title": "Chi tiết triển khai kỹ thuật",
        "architecture.deepdive.subtitle": "Hiểu kỹ thuật tinh vi tạo nên nền tảng tuân thủ hải quan gốc AI của chúng tôi.",
        
        "llm.deepdive.title": "Hiểu biết ngôn ngữ tiên tiến",
        "llm.deepdive.description": "Các mô hình ngôn ngữ được tinh chỉnh của chúng tôi xuất sắc trong việc hiểu thuật ngữ thương mại phức tạp, tài liệu đa ngôn ngữ và ngôn ngữ quy định tinh tế.",
        "llm.capabilities.title": "Khả năng cốt lõi",
        "llm.performance.title": "Chỉ số hiệu suất",
        
        "kg.deepdive.title": "Công cụ lý luận có cấu trúc",
        "kg.deepdive.description": "Đồ thị kiến thức của chúng tôi mô hình hóa các mối quan hệ phức tạp giữa sản phẩm, quy định, quốc gia và quy tắc thương mại, cho phép quyết định AI có thể giải thích.",
        "kg.entities.title": "Thực thể & Mối quan hệ chính",
        "kg.scale.title": "Quy mô & Hiệu suất",
        
        "multimodal.deepdive.title": "Trí tuệ tài liệu tiên tiến",
        "multimodal.deepdive.description": "Các mô hình thị giác máy tính tiên tiến xử lý bất kỳ định dạng tài liệu nào với độ chính xác cấp con người, hiểu cả nội dung và bố cục.",
        "multimodal.pipeline.title": "Đường ống xử lý",
        "multimodal.accuracy.title": "Điểm chuẩn độ chính xác",
        
        "architecture.advantages.title": "Tại sao kiến trúc của chúng tôi thắng",
        "architecture.advantages.subtitle": "Hiểu các lợi thế chiến lược của phương pháp gốc AI của chúng tôi so với hệ thống truyền thống và bộ bao bọc AI đơn giản.",
        "comparison.traditional.title": "Hệ thống truyền thống",
        "comparison.simple.title": "Bộ bao bọc AI đơn giản",
        "comparison.ours.title": "TradeGuard AI",
        
        // LLM Capabilities
        "arch.llm.capability1": "Tinh chỉnh đa lĩnh vực trên bộ dữ liệu hải quan và thương mại",
        "arch.llm.capability2": "Trích xuất thực thể nhận biết ngữ cảnh với độ chính xác 98.5%",
        "arch.llm.capability3": "Khớp tương đồng ngữ nghĩa cho phân loại sản phẩm",
        "arch.llm.capability4": "Giải thích và ánh xạ quy định theo thời gian thực",
        "arch.llm.metric1": "Độ chính xác trích xuất thực thể",
        "arch.llm.metric2": "Ngôn ngữ được hỗ trợ",
        
        // Multi-Modal AI Pipeline
        "arch.multimodal.step1.title": "Tiền xử lý hình ảnh",
        "arch.multimodal.step1.desc": "Giảm nhiễu, hiệu chỉnh độ nghiêng, cải thiện",
        "arch.multimodal.step2.title": "Phát hiện bố cục",
        "arch.multimodal.step2.desc": "Nhận dạng bảng, khối văn bản, trường biểu mẫu",
        "arch.multimodal.step3.title": "OCR đa ngôn ngữ",
        "arch.multimodal.step3.desc": "Nhận dạng ký tự với nhận biết ngữ cảnh",
        "arch.multimodal.step4.title": "Cấu trúc nội dung",
        "arch.multimodal.step4.desc": "Nhóm logic và ánh xạ mối quan hệ",
        
        // Knowledge Graph
        "arch.kg.category1": "Sản phẩm",
        "arch.kg.category2": "Quy định",
        "arch.kg.product1": "• Cấu trúc phân loại HS",
        "arch.kg.product2": "• Thành phần vật liệu",
        "arch.kg.product3": "• Quy trình sản xuất",
        "arch.kg.regulation1": "• Biểu thuế",
        "arch.kg.regulation2": "• Hiệp định thương mại",
        "arch.kg.regulation3": "• Yêu cầu cấp phép",
        "arch.kg.metric1": "Thực thể & Mối quan hệ",
        
        // Architecture Comparison
        "arch.comparison.traditional.point1": "Xử lý dựa trên quy tắc bị hỏng với định dạng mới",
        "arch.comparison.traditional.point2": "Tạo mẫu thủ công cho từng loại tài liệu",
        "arch.comparison.traditional.point3": "Không có khả năng học hoặc thích ứng",
        "arch.comparison.traditional.point4": "Triển khai và bảo trì phức tạp",
        "arch.comparison.simple.point1": "Quyết định hộp đen không có giải thích",
        "arch.comparison.simple.point2": "Rủi ro ảo giác trong tuân thủ quan trọng",
        "arch.comparison.simple.point3": "Không tích hợp kiến thức quy định",
        "arch.comparison.simple.point4": "Độ chính xác hạn chế trong các tác vụ cụ thể",
        "arch.comparison.ours.point1": "AI có thể giải thích với đường dẫn kiểm toán đầy đủ",
        "arch.comparison.ours.point2": "Học tập liên tục từ phản hồi chuyên gia",
        "arch.comparison.ours.point3": "Tích hợp kiến thức quy định sâu",
        "arch.comparison.ours.point4": "Độ chính xác và độ tin cậy cấp doanh nghiệp",
        
        "architecture.cta.title": "Trải nghiệm kiến trúc AI tiên tiến của chúng tôi",
        "architecture.cta.subtitle": "Xem cách công nghệ AI kết hợp ba của chúng tôi chuyển đổi tuân thủ hải quan. Lên lịch tìm hiểu sâu kỹ thuật với đội ngũ của chúng tôi.",
        "architecture.cta.demo": "Demo kỹ thuật",
        "architecture.cta.whitepaper": "Tải xuống Sách trắng",
        
        // Solutions Page
        "solutions.hero.title": "Giải pháp được tùy chỉnh cho mọi nhu cầu tuân thủ thương mại",
        "solutions.hero.subtitle": "Từ các công ty môi giới hải quan đến doanh nghiệp đa quốc gia, nền tảng AI của chúng tôi thích ứng với quy trình làm việc và yêu cầu tuân thủ cụ thể của bạn.",
        "solutions.brokers.title": "Công ty Môi giới Hải quan",
        "solutions.brokers.desc": "Mở rộng hoạt động và phục vụ nhiều khách hàng hơn với xử lý tài liệu và quản lý rủi ro được hỗ trợ bởi AI.",
        "solutions.brokers.feature1": "Xử lý nhiều gấp 3-5 lần số lô hàng",
        "solutions.brokers.feature1.desc": "Xử lý khối lượng cao điểm mà không cần tuyển thêm nhân viên",
        "solutions.brokers.feature2": "Giảm thời gian xem xét 80%",
        "solutions.brokers.feature2.desc": "Tập trung chuyên gia vào chỉ những trường hợp rủi ro cao",
        "solutions.brokers.feature3": "Giảm thiểu rủi ro tuân thủ",
        "solutions.brokers.feature3.desc": "Phát hiện lỗi trước khi nộp cho hải quan",
        "solutions.brokers.cta": "Khám phá Giải pháp Môi giới",
        "solutions.enterprise.title": "Doanh nghiệp Lớn",
        "solutions.enterprise.desc": "Tích hợp liền mạch với hệ thống ERP hiện có để quản lý tuân thủ toàn doanh nghiệp.",
        "solutions.enterprise.feature1": "Tích hợp ERP",
        "solutions.enterprise.feature1.desc": "Kết nối với SAP, Oracle và các hệ thống doanh nghiệp khác",
        "solutions.enterprise.feature2": "Tuân thủ Toàn cầu",
        "solutions.enterprise.feature2.desc": "Quản lý quy định trên nhiều quốc gia",
        "solutions.enterprise.feature3": "Phân tích Nâng cao",
        "solutions.enterprise.feature3.desc": "Bảng điều khiển điều hành và thông tin chi tiết về tuân thủ",
        "solutions.enterprise.cta": "Khám phá Giải pháp Doanh nghiệp",
        "solutions.logistics.title": "Nhà cung cấp Logistics",
        "solutions.logistics.desc": "Cung cấp dịch vụ tuân thủ giá trị gia tăng để phân biệt các dịch vụ logistics của bạn.",
        "solutions.logistics.feature1": "Giải pháp Nhãn trắng",
        "solutions.logistics.feature1.desc": "Đánh thương hiệu nền tảng như dịch vụ của riêng bạn",
        "solutions.logistics.feature2": "Nguồn thu mới",
        "solutions.logistics.feature2.desc": "Kiếm tiền từ chuyên môn và dữ liệu tuân thủ",
        "solutions.logistics.feature3": "Giữ chân Khách hàng",
        "solutions.logistics.feature3.desc": "Dịch vụ tuân thủ bám dính tăng lòng trung thành",
        "solutions.logistics.cta": "Khám phá Giải pháp Logistics",
        
        // Pricing Page
        "pricing.hero.title": "Giá cả đơn giản, minh bạch",
        "pricing.hero.subtitle": "Chọn gói phù hợp với quy mô doanh nghiệp của bạn. Tất cả các gói đều bao gồm các tính năng AI cốt lõi với giá dựa trên sử dụng minh bạch.",
        "pricing.professional.title": "Chuyên nghiệp",
        "pricing.professional.desc": "Hoàn hảo cho các đội nhỏ và môi giới đang phát triển",
        "pricing.professional.price": "$250",
        "pricing.professional.period": "/tháng",
        "pricing.professional.users": "Tối đa 3 người dùng, 200 lô hàng/tháng",
        "pricing.professional.feature1": "Nhận dạng tài liệu đa phương thức",
        "pricing.professional.feature2": "Quét rủi ro cơ bản (4 chiều)",
        "pricing.professional.feature3": "Hỗ trợ tiêu chuẩn",
        "pricing.professional.feature4": "Bảng điều khiển phân tích cơ bản",
        "pricing.professional.missing1": "Công cụ cộng tác nâng cao",
        "pricing.professional.missing2": "Truy cập API",
        "pricing.professional.cta": "Bắt đầu dùng thử miễn phí",
        "pricing.professional.additional": "Lô hàng bổ sung: $5 mỗi lô",
        "pricing.business.title": "Kinh doanh",
        "pricing.business.desc": "Lý tưởng cho các môi giới và doanh nghiệp cỡ trung",
        "pricing.business.price": "$1,200",
        "pricing.business.period": "/tháng",
        "pricing.business.users": "Tối đa 10 người dùng, 1,500 lô hàng/tháng",
        "pricing.business.popular": "Phổ biến nhất",
        "pricing.business.feature1": "Tất cả tính năng Chuyên nghiệp",
        "pricing.business.feature2": "Công cụ rủi ro 8 chiều đầy đủ",
        "pricing.business.feature3": "Công cụ cộng tác nâng cao",
        "pricing.business.feature4": "Hỗ trợ ưu tiên",
        "pricing.business.feature5": "Phân tích và báo cáo nâng cao",
        "pricing.business.feature6": "Truy cập API cơ bản",
        "pricing.business.cta": "Bắt đầu dùng thử miễn phí",
        "pricing.business.additional": "Lô hàng bổ sung: $3 mỗi lô",
        "pricing.enterprise.title": "Doanh nghiệp",
        "pricing.enterprise.desc": "Cho các tổ chức lớn có nhu cầu tùy chỉnh",
        "pricing.enterprise.price": "Tùy chỉnh",
        "pricing.enterprise.users": "Người dùng và lô hàng không giới hạn",
        "pricing.enterprise.feature1": "Tất cả tính năng Kinh doanh",
        "pricing.enterprise.feature2": "Triển khai đám mây riêng",
        "pricing.enterprise.feature3": "Bộ API đầy đủ và webhook",
        "pricing.enterprise.feature4": "Tích hợp tùy chỉnh",
        "pricing.enterprise.feature5": "Quản lý thành công khách hàng chuyên dụng",
        "pricing.enterprise.feature6": "Hỗ trợ cao cấp 24/7",
        "pricing.enterprise.cta": "Liên hệ bán hàng",
        "pricing.enterprise.additional": "Có giảm giá theo số lượng",
        "pricing.includes.title": "Tất cả gói đều bao gồm",
        "pricing.includes.security": "Bảo mật Doanh nghiệp",
        "pricing.includes.security.desc": "Tuân thủ SOC 2 và mã hóa dữ liệu",
        "pricing.includes.cloud": "Hạ tầng Đám mây",
        "pricing.includes.cloud.desc": "SLA thời gian hoạt động 99.9%",
        "pricing.includes.training": "Đào tạo & Hướng dẫn",
        "pricing.includes.training.desc": "Bao gồm đào tạo đội ngũ toàn diện",
        "pricing.includes.updates": "Cập nhật Thường xuyên",
        "pricing.includes.updates.desc": "Cải tiến mô hình AI liên tục",
        "pricing.faq.title": "Câu hỏi thường gặp",
        "pricing.faq.subtitle": "Nhận câu trả lời cho các câu hỏi thường gặp về giá cả và nền tảng của chúng tôi.",
        "pricing.faq.usage.title": "Sử dụng được tính như thế nào?",
        "pricing.faq.usage.answer": "Sử dụng được tính theo mỗi lô hàng được xử lý qua hệ thống của chúng tôi. Mỗi lô hàng bao gồm tất cả các tài liệu liên quan (hóa đơn, danh sách đóng gói, chứng chỉ, v.v.). Việc xử lý bổ sung vượt quá giới hạn gói của bạn được tính phí theo lô hàng.",
        "pricing.faq.change.title": "Tôi có thể nâng cấp hoặc hạ cấp gói không?",
        "pricing.faq.change.answer": "Có, bạn có thể thay đổi gói bất cứ lúc nào. Nâng cấp có hiệu lực ngay lập tức, trong khi hạ cấp có hiệu lực vào chu kỳ thanh toán tiếp theo. Chúng tôi sẽ tính theo tỷ lệ bất kỳ chênh lệch giá nào.",
        "pricing.faq.trial.title": "Dùng thử miễn phí bao gồm gì?",
        "pricing.faq.trial.answer": "Dùng thử miễn phí bao gồm truy cập đầy đủ vào gói bạn đã chọn trong 14 ngày, bao gồm tối đa 50 lô hàng thử nghiệm. Không cần thẻ tín dụng để bắt đầu. Bạn có thể nâng cấp lên gói trả phí bất cứ lúc nào trong hoặc sau khi dùng thử.",
        "pricing.faq.volume.title": "Có giảm giá theo số lượng không?",
        "pricing.faq.volume.answer": "Có, chúng tôi cung cấp giảm giá theo số lượng cho khách hàng sử dụng nhiều và hợp đồng nhiều năm. Khách hàng doanh nghiệp có thể hưởng lợi từ giá tùy chỉnh dựa trên nhu cầu cụ thể và mô hình sử dụng của họ.",
        "pricing.faq.security.title": "Dữ liệu của tôi an toàn như thế nào?",
        "pricing.faq.security.answer": "Chúng tôi duy trì tuân thủ SOC 2 Type II với mã hóa đầu cuối cho tất cả dữ liệu. Dữ liệu thương mại của bạn được xử lý an toàn và không bao giờ được chia sẻ với bên thứ ba. Khách hàng doanh nghiệp cũng có thể chọn các tùy chọn triển khai đám mây riêng.",
        "pricing.cta.title": "Sẵn sàng bắt đầu?",
        "pricing.cta.subtitle": "Tham gia với hàng nghìn chuyên gia hải quan tin tưởng TradeGuard AI cho nhu cầu tuân thủ của họ.",
        "pricing.cta.trial": "Bắt đầu dùng thử miễn phí",
        "pricing.cta.contact": "Liên hệ bán hàng",
        
        // About Page
        "about.hero.title": "Chuyển đổi Thương mại Toàn cầu Thông qua Đổi mới AI",
        "about.hero.subtitle": "Chúng tôi có sứ mệnh làm cho thương mại quốc tế hiệu quả hơn, chính xác hơn và dễ tiếp cận hơn thông qua công nghệ trí tuệ nhân tạo tiên tiến.",
        "about.mission.title": "Sứ mệnh của chúng tôi",
        "about.mission.content1": "Loại bỏ sự kém hiệu quả và lỗi sai làm phiền hà việc tuân thủ thương mại quốc tế, trao quyền cho các doanh nghiệp thuộc mọi quy mô tham gia một cách tự tin vào thương mại toàn cầu.",
        "about.mission.content2": "Các quy trình thông quan hải quan truyền thống bị mắc kẹt trong quá khứ - thủ công, dễ xảy ra lỗi và không thể mở rộng. Chúng tôi tin rằng AI có thể chuyển đổi những quy trình làm việc quan trọng này, làm cho chúng nhanh hơn, chính xác hơn và dễ tiếp cận hơn đối với các doanh nghiệp trên toàn thế giới.",
        "about.mission.content3": "Bằng cách kết hợp công nghệ AI tiên tiến với chuyên môn sâu về lĩnh vực, chúng tôi đang xây dựng tương lai của việc tuân thủ thương mại - một tương lai mà các chuyên gia con người được trao quyền bởi các hệ thống thông minh thay vì bị choáng ngợp bởi công việc giấy tờ.",
        "about.stats.trade": "Khối lượng thương mại hàng năm được khách hàng quản lý",
        "about.stats.docs": "Tài liệu đã xử lý",
        "about.stats.countries": "Quốc gia được hỗ trợ",
        "about.stats.satisfaction": "Sự hài lòng của khách hàng",
        "about.values.title": "Giá trị của chúng tôi",
        "about.values.subtitle": "Các nguyên tắc hướng dẫn mọi thứ chúng tôi làm và mọi quyết định chúng tôi đưa ra.",
        "about.values.innovation": "Đổi mới Trước tiên",
        "about.values.innovation.desc": "Chúng tôi liên tục đẩy ranh giới của những gì có thể với AI, luôn tìm kiếm các giải pháp tốt hơn cho những thách thức thương mại phức tạp.",
        "about.values.trust": "Tin cậy & Bảo mật",
        "about.values.trust.desc": "Dữ liệu thương mại rất nhạy cảm. Chúng tôi duy trì các tiêu chuẩn cao nhất về bảo mật và minh bạch trong mọi việc chúng tôi làm.",
        "about.values.success": "Thành công Khách hàng",
        "about.values.success.desc": "Thành công của chúng tôi được đo lường bằng thành công của khách hàng. Chúng tôi là đối tác trong việc chuyển đổi hoạt động của họ.",
        "about.team.title": "Đội ngũ Lãnh đạo",
        "about.team.subtitle": "Gặp gỡ các chuyên gia giàu kinh nghiệm đang thúc đẩy đổi mới trong tuân thủ thương mại.",
        "about.team.ceo": "CEO & Đồng sáng lập",
        "about.team.ceo.bio": "Cựu trưởng phòng AI tại công ty logistics Fortune 500. Tiến sĩ Khoa học Máy tính từ MIT. Hơn 15 năm trong công nghệ thương mại.",
        "about.team.cto": "CTO & Đồng sáng lập",
        "about.team.cto.bio": "Cựu Kỹ sư Chính tại Google. Chuyên gia về hệ thống ML quy mô lớn và đồ thị kiến thức. Tốt nghiệp CS Stanford.",
        "about.team.vp": "Phó Chủ tịch Tuân thủ",
        "about.team.vp.bio": "Hơn 20 năm trong môi giới hải quan và thương mại quốc tế. Cựu quan chức hải quan. Chuyên gia về quy định thương mại toàn cầu.",
        "about.presence.title": "Hiện diện Toàn cầu",
        "about.presence.subtitle": "Hỗ trợ thương mại quốc tế từ các văn phòng trên khắp thế giới.",
        "about.office.sf": "San Francisco, Hoa Kỳ",
        "about.office.sf.desc": "Trụ sở chính & R&D",
        "about.office.sf.team": "Hơn 50 Kỹ sư",
        "about.office.shanghai": "Thượng Hải, Trung Quốc",
        "about.office.shanghai.desc": "Trung tâm Châu Á-Thái Bình Dương",
        "about.office.shanghai.team": "Hơn 25 Chuyên gia",
        "about.office.london": "London, Anh",
        "about.office.london.desc": "Hoạt động Châu Âu",
        "about.office.london.team": "Hơn 20 Chuyên gia",
        "about.office.hcmc": "TP. Hồ Chí Minh, Việt Nam",
        "about.office.hcmc.desc": "Đông Nam Á",
        "about.office.hcmc.team": "Hơn 15 Thành viên",
        "about.cta.title": "Sẵn sàng chuyển đổi hoạt động thương mại của bạn?",
        "about.cta.subtitle": "Tham gia với các công ty đã cách mạng hóa tuân thủ hải quan với TradeGuard AI.",
        "about.cta.trial": "Bắt đầu dùng thử miễn phí",
        "about.cta.contact": "Liên hệ đội ngũ",
        
        // Contact Page
        "contact.hero.title": "Hãy cùng nhau chuyển đổi hoạt động hải quan của bạn",
        "contact.hero.subtitle": "Sẵn sàng cách mạng hóa tuân thủ thương mại? Đội ngũ của chúng tôi sẵn sàng giúp bạn bắt đầu với TradeGuard AI.",
        "contact.form.title": "Liên hệ",
        "contact.form.firstname": "Tên",
        "contact.form.lastname": "Họ",
        "contact.form.email": "Email doanh nghiệp",
        "contact.form.phone": "Số điện thoại",
        "contact.form.company": "Tên công ty",
        "contact.form.jobtitle": "Chức vụ",
        "contact.form.companytype": "Loại công ty",
        "contact.form.companytype.placeholder": "Chọn loại công ty của bạn",
        "contact.form.companytype.broker": "Công ty Môi giới Hải quan",
        "contact.form.companytype.forwarder": "Công ty Chuyển tiếp Hàng hóa",
        "contact.form.companytype.logistics": "Nhà cung cấp Logistics",
        "contact.form.companytype.manufacturer": "Nhà sản xuất",
        "contact.form.companytype.importer": "Nhà nhập/xuất khẩu",
        "contact.form.companytype.enterprise": "Tập đoàn Doanh nghiệp",
        "contact.form.companytype.other": "Khác",
        "contact.form.volume": "Khối lượng lô hàng hàng tháng",
        "contact.form.volume.placeholder": "Chọn phạm vi khối lượng",
        "contact.form.volume.1": "1 - 100 lô hàng",
        "contact.form.volume.2": "101 - 500 lô hàng",
        "contact.form.volume.3": "501 - 1,000 lô hàng",
        "contact.form.volume.4": "1,001 - 5,000 lô hàng",
        "contact.form.volume.5": "Hơn 5,000 lô hàng",
        "contact.form.inquiry": "Loại yêu cầu",
        "contact.form.inquiry.placeholder": "Chúng tôi có thể giúp gì cho bạn?",
        "contact.form.inquiry.demo": "Yêu cầu Demo",
        "contact.form.inquiry.trial": "Bắt đầu dùng thử miễn phí",
        "contact.form.inquiry.pricing": "Thông tin giá cả",
        "contact.form.inquiry.integration": "Câu hỏi tích hợp",
        "contact.form.inquiry.partnership": "Cơ hội đối tác",
        "contact.form.inquiry.support": "Hỗ trợ kỹ thuật",
        "contact.form.inquiry.other": "Khác",
        "contact.form.message": "Tin nhắn",
        "contact.form.message.placeholder": "Hãy cho chúng tôi biết thêm về nhu cầu của bạn và cách chúng tôi có thể giúp đỡ...",
        "contact.form.newsletter": "Tôi muốn nhận thông tin cập nhật về sản phẩm TradeGuard AI và thông tin chi tiết về ngành. Bạn có thể hủy đăng ký bất cứ lúc nào.",
        "contact.form.submit": "Gửi tin nhắn",
        "contact.form.privacy": "Bằng cách gửi biểu mẫu này, bạn đồng ý với Chính sách Bảo mật và Điều khoản Dịch vụ của chúng tôi.",
        "contact.other.title": "Các cách liên hệ khác",
        "contact.quick.title": "Hành động nhanh",
        "contact.quick.trial": "Bắt đầu dùng thử miễn phí (Không cần thẻ tín dụng)",
        "contact.quick.demo": "Lên lịch Demo được cá nhân hóa",
        "contact.offices.title": "Văn phòng Toàn cầu",
        "contact.office.hq": "Trụ sở chính - Tô Châu",
        "contact.office.hq.address": "Khu công nghiệp Tô Châu, Cảng Đổi mới Xinqi E603-E612\nTô Châu, Giang Tô 215000, Trung Quốc",
        "contact.office.asia": "Văn phòng Thượng Hải",
        "contact.office.asia.address": "Tầng 2-3, Tòa E, Trung tâm Bờ biển Tài chính, 440 North Bund\nQuận Hồng Khẩu, Thượng Hải 200000, Trung Quốc",
        "contact.office.shenzhen": "Văn phòng Thâm Quyến",
        "contact.office.shenzhen.address": "Phòng 212, Tòa nhà Hữu nghị Hải ngoại, 12 Đường Yejia\nQuận Bảo An, Thâm Quyến 518000, Trung Quốc",
        "contact.office.qingdao": "Văn phòng Thanh Đảo",
        "contact.office.qingdao.address": "Phòng 110, Tòa nhà Fudong, 8 Đường Licang\nQuận Licang, Thanh Đảo 266000, Trung Quốc",
        "contact.support.title": "Giờ hỗ trợ",
        "contact.support.sales": "Yêu cầu bán hàng:",
        "contact.support.sales.hours": "Bảo hiểm toàn cầu 24/7",
        "contact.support.technical": "Hỗ trợ kỹ thuật:",
        "contact.support.technical.hours": "Giờ làm việc (Tất cả khu vực)",
        "contact.support.emergency": "Hỗ trợ khẩn cấp:",
        "contact.support.emergency.hours": "Chỉ dành cho khách hàng doanh nghiệp",
        "contact.direct.title": "Liên hệ trực tiếp",
        "contact.direct.sales": "Bán hàng:",
        "contact.direct.sales.email": "missattic.ai@gmail.com",
        "contact.direct.support": "Hỗ trợ:",
        "contact.direct.support.email": "missattic.ai@gmail.com",
        "contact.direct.partners": "Đối tác:",
        "contact.direct.partners.email": "missattic.ai@gmail.com",
        "contact.faq.title": "Câu hỏi thường gặp",
        "contact.faq.subtitle": "Câu trả lời nhanh cho các câu hỏi phổ biến trước khi bạn liên hệ.",
        "contact.faq.start.title": "Chúng ta có thể bắt đầu nhanh như thế nào?",
        "contact.faq.start.answer": "Hầu hết khách hàng đều hoạt động trong vòng 1-2 tuần. Đội ngũ của chúng tôi xử lý việc thiết lập và cung cấp đào tạo toàn diện.",
        "contact.faq.integrate.title": "Có tích hợp với hệ thống hiện có không?",
        "contact.faq.integrate.answer": "Có, chúng tôi tích hợp với các hệ thống ERP chính (SAP, Oracle), nền tảng TMS và hệ thống hải quan thông qua API RESTful.",
        "contact.faq.trial.title": "Dùng thử miễn phí bao gồm gì?",
        "contact.faq.trial.answer": "Truy cập đầy đủ 14 ngày vào gói bạn đã chọn với tối đa 50 lô hàng thử nghiệm và hỗ trợ hướng dẫn chuyên dụng.",
        "contact.faq.secure.title": "Dữ liệu của tôi có an toàn không?",
        "contact.faq.secure.answer": "Chúng tôi duy trì tuân thủ SOC 2 Type II với mã hóa đầu cuối. Dữ liệu của bạn không bao giờ được chia sẻ và bạn duy trì quyền sở hữu đầy đủ."
    }
};

class LanguageManager {
    constructor() {
        this.currentLanguage = this.getStoredLanguage() || 'en';
        this.init();
    }

    init() {
        this.setupLanguageSelector();
        this.translatePage();
        this.setupNavbarScroll();
        this.setupSmoothScrolling();
        this.setupAnimations();
    }

    getStoredLanguage() {
        // Try to get from cookie first, then localStorage
        const cookieValue = this.getCookie('preferred-language');
        if (cookieValue) {
            return cookieValue;
        }
        return localStorage.getItem('preferred-language');
    }

    setStoredLanguage(language) {
        // Set both cookie and localStorage
        this.setCookie('preferred-language', language, 365); // 365 days
        localStorage.setItem('preferred-language', language);
    }

    getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    setCookie(name, value, days) {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
    }

    setupLanguageSelector() {
        // Update all language selectors on the page
        const selectors = document.querySelectorAll('#languageSelector');
        
        selectors.forEach(selector => {
            if (selector) {
                // Set initial value
                selector.value = this.currentLanguage;
                
                // Add change event listener
                selector.addEventListener('change', (e) => {
                    this.currentLanguage = e.target.value;
                    this.setStoredLanguage(this.currentLanguage);
                    this.translatePage();
                    
                    // Update all other language selectors on the page
                    selectors.forEach(sel => {
                        if (sel !== e.target) {
                            sel.value = this.currentLanguage;
                        }
                    });
                });
            }
        });
    }

    translatePage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.getTranslation(key);
            if (translation) {
                // Handle different element types
                if (element.tagName === 'INPUT' && element.type === 'submit') {
                    element.value = translation;
                } else if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                    element.placeholder = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Update page title if available
        const titleKey = document.documentElement.getAttribute('data-translate-title');
        if (titleKey) {
            const titleTranslation = this.getTranslation(titleKey);
            if (titleTranslation) {
                document.title = titleTranslation;
            }
        }
    }

    getTranslation(key) {
        const langData = translations[this.currentLanguage];
        if (!langData) return translations.en[key] || key;
        return langData[key] || translations.en[key] || key;
    }

    setupNavbarScroll() {
        const navbar = document.getElementById('navbar');
        if (navbar) {
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('navbar-scroll');
                } else {
                    navbar.classList.remove('navbar-scroll');
                }
            });
        }
    }

    setupSmoothScrolling() {
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    setupAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        // Observe feature detail elements
        document.querySelectorAll('.feature-detail').forEach(el => {
            observer.observe(el);
        });

        // Observe tech cards
        document.querySelectorAll('.tech-card').forEach(el => {
            observer.observe(el);
        });

        // Stats counter animation
        this.animateCounters();
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stats-counter');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'countUp 2s ease-out forwards';
                }
            });
        });

        counters.forEach(counter => observer.observe(counter));
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        window.languageManager = new LanguageManager();
        console.log('LanguageManager initialized successfully');
    } catch (error) {
        console.error('Error initializing LanguageManager:', error);
    }
});

// Additional utility functions
function showDemo() {
    alert('Demo request feature would be implemented here');
}

function startTrial() {
    alert('Free trial signup would be implemented here');
}

function contactSales() {
    alert('Contact sales form would be implemented here');
}