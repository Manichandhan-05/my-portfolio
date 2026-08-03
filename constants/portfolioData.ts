import { Project, SkillCategory, EducationItem, ExperienceItem, Certification, TimelineItem, CurrentLearningItem } from '@/types';

export const HERO_DATA = {
  name: "Malyala Mani Chandhan",
  headline: "AI/ML Engineer • Python Backend Developer • Full Stack Developer",
  summary: "Architecting intelligent neural networks, real-time computer vision pipelines, and resilient Python microservices backends.",
  stats: [
    { label: "B.Tech CGPA", value: "8.7 / 10" },
    { label: "Core AI Projects", value: "5 Production-Grade" },
    { label: "Certifications", value: "4 Industry Badges" },
    { label: "Tech Stack", value: "Python, PyTorch, Next.js" },
  ]
};

export const ABOUT_DATA = {
  summary: "Computer Science & Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at VIT-AP University (CGPA 8.7). Driven by a fundamental principle: building high-performance AI systems that bridge theoretical research with robust production code. Experienced in deep learning manuscript OCR, predictive microservices, computer vision tracking, and scalable backend design.",
  coreValues: [
    {
      title: "Algorithmic Precision",
      description: "Designing neural architectures and data pipelines optimized for low latency and high computational efficiency.",
      icon: "Cpu"
    },
    {
      title: "End-to-End Delivery",
      description: "Taking models from custom dataset curation and loss formulation down to REST API deployment and cloud hosting.",
      icon: "Layers"
    },
    {
      title: "GenAI & Agentic AI",
      description: "Actively engineering RAG systems, vector search pipelines, and multi-agent workflows using modern frameworks.",
      icon: "Sparkles"
    },
    {
      title: "Engineering Integrity",
      description: "Writing clean, modular, tested code adhering to strict design patterns and production standards.",
      icon: "ShieldCheck"
    }
  ]
};

export const EDUCATION_DATA: EducationItem = {
  institution: "VIT-AP University",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science Engineering with specialization in AI & ML",
  gpa: "8.7 / 10.0 CGPA",
  duration: "2022 - 2026",
  location: "Andhra Pradesh, India",
  coursework: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing",
    "Computer Vision & Image Processing",
    "Data Structures & Algorithms",
    "Operating Systems & Computer Networks",
    "Database Management Systems (RDBMS)",
    "Cloud Computing & Distributed Systems"
  ],
  highlights: [
    "Consistent Academic Performance with 8.7 CGPA",
    "Specialized coursework focus on Deep Learning Architectures and Neural Network Optimization",
    "Active participant in technical symposiums and AI research challenges"
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Data Analytics Job Simulation",
    company: "Tata Group (via Forage)",
    type: "Virtual Experience Program",
    duration: "2024",
    location: "Remote",
    description: "Completed an immersive data analytics simulation representing real-world business scenarios faced by Tata Group leadership.",
    bullets: [
      "Analyzed complex enterprise datasets to extract actionable business insights for executive decision-making.",
      "Formulated visual dashboards and exploratory data analysis (EDA) frameworks using data visualization best practices.",
      "Applied predictive thinking to identify trends, seasonal variations, and operational bottlenecks."
    ],
    skillsUsed: ["Data Analysis", "Business Insights", "Data Visualization", "Predictive Modeling", "Power BI"],
    disclaimer: "Completed as an industry job simulation via Forage to solve realistic enterprise analytics challenges."
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI / ML & GenAI",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", level: "Advanced", highlight: true },
      { name: "Deep Learning", level: "Advanced", highlight: true },
      { name: "Computer Vision", level: "Advanced", highlight: true },
      { name: "NLP", level: "Intermediate" },
      { name: "Transformers & LLMs", level: "Intermediate", highlight: true },
      { name: "RAG Systems", level: "Intermediate", highlight: true },
      { name: "LangChain", level: "Learning" },
      { name: "LangGraph", level: "Learning" },
    ]
  },
  {
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "Python", level: "Advanced", highlight: true },
      { name: "Java", level: "Intermediate" },
      { name: "SQL", level: "Advanced", highlight: true },
      { name: "JavaScript", level: "Intermediate" },
      { name: "TypeScript", level: "Intermediate" },
    ]
  },
  {
    title: "Backend & Cloud",
    iconName: "Server",
    skills: [
      { name: "Flask", level: "Advanced", highlight: true },
      { name: "REST APIs", level: "Advanced", highlight: true },
      { name: "FastAPI", level: "Learning" },
      { name: "MySQL", level: "Advanced" },
      { name: "Azure Cloud", level: "Intermediate", highlight: true },
      { name: "Docker", level: "Learning" },
    ]
  },
  {
    title: "Frontend",
    iconName: "Layout",
    skills: [
      { name: "Next.js 15/16", level: "Intermediate", highlight: true },
      { name: "React", level: "Intermediate", highlight: true },
      { name: "Tailwind CSS", level: "Advanced" },
      { name: "HTML5 / CSS3", level: "Advanced" },
    ]
  },
  {
    title: "Tools & Analytics",
    iconName: "Wrench",
    skills: [
      { name: "Git", level: "Advanced" },
      { name: "GitHub", level: "Advanced" },
      { name: "Power BI", level: "Intermediate" },
      { name: "OpenCV", level: "Advanced", highlight: true },
      { name: "TensorFlow", level: "Advanced", highlight: true },
      { name: "PyTorch", level: "Intermediate" },
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "telugu-manuscript-ocr",
    title: "AI Powered Telugu Manuscript OCR",
    subtitle: "End-to-end Deep Learning OCR for complex historical Telugu script recognition",
    category: "AI/ML",
    description: "A hybrid deep learning optical character recognition framework designed to transcribe historical and degraded Telugu manuscripts with high character-level precision.",
    problem: "Historical Telugu manuscripts feature complex ligatures, overlapping characters, and background degradation, causing standard OCR engines (like Tesseract) to fail completely.",
    solution: "Built a custom CRNN (Convolutional Recurrent Neural Network) architecture combining CNN feature extractors with Bidirectional GRUs and Connectionist Temporal Classification (CTC) loss for sequence recognition without requiring manual character segmentation.",
    architecture: [
      "OpenCV preprocessing pipeline (Binarization, Deskewing, Noise Reduction)",
      "CNN Feature Extraction Backbone leveraging Transfer Learning",
      "Bidirectional GRU layers for temporal context representation across characters",
      "CTC (Connectionist Temporal Classification) Loss layer for sequence decoding",
      "TensorFlow / Keras runtime deployment"
    ],
    features: [
      "Sequence-to-sequence text decoding without line-level manual labeling",
      "Robust preprocessing pipeline handling ink bleed-through and physical degradation",
      "Custom character vocabulary mapping tailored to ancient Telugu orthography",
      "Export capabilities to searchable JSON and plain text formats"
    ],
    challenges: [
      "Curating and annotating a balanced dataset of historical Telugu script variants.",
      "Eliminating gradient explosion during long sequence Bi-GRU backpropagation.",
      "Optimizing CTC loss convergence on highly ambiguous character combinations."
    ],
    techStack: ["TensorFlow", "CRNN", "CNN", "Bi-GRU", "CTC Loss", "Transfer Learning", "OpenCV", "Python"],
    image: "/assets/project_telugu_ocr.jpg",
    githubUrl: "https://github.com/manichandhan/Telugu-Manuscript-OCR",
    liveUrl: "https://github.com/manichandhan/Telugu-Manuscript-OCR",
    featured: true,
    metrics: [
      { label: "Accuracy Rate", value: "94.2%" },
      { label: "Inference Speed", value: "45ms/page" }
    ]
  },
  {
    id: "ecommerce-shipping-prediction-api",
    title: "E-commerce Shipping Prediction API",
    subtitle: "Production ML Microservice for real-time delivery estimation deployed on Azure",
    category: "Backend",
    description: "An enterprise Machine Learning microservice that predicts package delivery timelines based on order metrics, seller location, carrier performance, and historical logistics data.",
    problem: "E-commerce platforms face high customer churn due to inaccurate delivery estimates provided by static distance-based rules.",
    solution: "Engineered a predictive REST API powered by gradient boosted decision trees, wrapped in Flask, and deployed onto Azure Cloud with real-time payload validation and automated logging.",
    architecture: [
      "Scikit-learn / XGBoost training pipeline with automated hyperparameter tuning",
      "Flask REST API microservice with strict JSON Schema validation",
      "Azure App Service deployment with continuous integration",
      "Telemetry logging and feature importances monitoring"
    ],
    features: [
      "Real-time inference latency under 30ms for API consumers",
      "Comprehensive feature engineering including weather impact and carrier load factors",
      "Automated fallback rules for out-of-distribution postal codes",
      "RESTful OpenAPI / Swagger compliant endpoints"
    ],
    challenges: [
      "Handling extreme missing value proportions in seller dispatch logs.",
      "Preventing model prediction drift across peak holiday shopping periods.",
      "Configuring lightweight container memory bounds for cost-efficient Azure deployment."
    ],
    techStack: ["Python", "Flask", "Machine Learning", "REST API", "Azure", "Scikit-Learn", "JSON Schema"],
    image: "/assets/project_shipping_api.jpg",
    githubUrl: "https://github.com/manichandhan/Shipping-Prediction-API",
    liveUrl: "https://github.com/manichandhan/Shipping-Prediction-API",
    featured: true,
    metrics: [
      { label: "Latency", value: "< 30ms" },
      { label: "Prediction MAE", value: "0.4 Days" }
    ]
  },
  {
    id: "locallens-hyperlocal-ai-search",
    title: "LocalLens — Hyper-Local Inventory AI Search",
    subtitle: "Spatial AI engine for real-time local product discovery and store inventory query",
    category: "Full Stack",
    description: "An AI-driven hyper-local search discovery platform allowing users to find specific physical store items nearby using natural language queries and location intelligence.",
    problem: "Shoppers waste hours visiting local stores because brick-and-mortar merchants lack real-time searchable online inventories.",
    solution: "Designed LocalLens with semantic vector search capabilities and geolocation indexing, enabling buyers to type natural queries like 'organic almond milk under 500m' and receive instant store stock confirmation.",
    architecture: [
      "Next.js / React interactive frontend with map bounding visualization",
      "Python AI search service integrating embeddings for semantic product matching",
      "Spatial database querying for distance radius calculations",
      "Real-time stock status sync protocol"
    ],
    features: [
      "Semantic natural language product query parsing",
      "Real-time store radius distance mapping and turn-by-turn directions link",
      "Store merchant inventory management interface",
      "Responsive glassmorphism UI optimized for mobile shoppers"
    ],
    challenges: [
      "Balancing spatial GIS queries with high-dimensional vector search indices.",
      "Optimizing client-side map rendering performance during rapid panning."
    ],
    techStack: ["Next.js", "React", "Python", "AI", "Location Intelligence", "Real-Time Search", "Tailwind CSS"],
    image: "/assets/project_locallens.jpg",
    githubUrl: "https://github.com/manichandhan/LocalLens",
    liveUrl: "https://github.com/manichandhan/LocalLens",
    featured: true,
    metrics: [
      { label: "Query Time", value: "120ms" },
      { label: "Spatial Precision", value: "Radius < 50m" }
    ]
  },
  {
    id: "autonomous-projectile-interception-system",
    title: "Autonomous Projectile Interception System",
    subtitle: "High-speed Computer Vision & Hardware tracking software for trajectory intercept",
    category: "Computer Vision",
    description: "An integrated software + hardware system using real-time computer vision to detect, track, and calculate velocity vectors of fast-moving aerial targets for mechanical intercept.",
    problem: "Real-time physical target interception requires sub-10ms target acquisition, optical noise filtering, and predictive trajectory physics computation.",
    solution: "Developed an OpenCV target tracking pipeline coupled with Kalman filtering to predict parabolic trajectory coordinates in real time and communicate pan-tilt motor vectors to embedded hardware.",
    architecture: [
      "High FPS camera feed ingestion via OpenCV thread pool",
      "Color HSV space thresholding and adaptive contour detection",
      "Kalman Filter state estimation for motion vector prediction",
      "Serial UART protocol interfacing software calculations with microcontrollers"
    ],
    features: [
      "Real-time 60+ FPS optical object recognition and centroid lock",
      "Parabolic motion trajectory prediction arc projection",
      "Embedded hardware signal feedback loop",
      "Visual telemetry HUD with live target velocity and coordinates"
    ],
    challenges: [
      "Eliminating motion blur and frame drop latency during high-speed camera movement.",
      "Calibrating optical camera intrinsic matrices to real-world 3D spatial vectors."
    ],
    techStack: ["Computer Vision", "OpenCV", "Python", "Object Tracking", "Kalman Filter", "Embedded Hardware Integration"],
    image: "/assets/project_interception.jpg",
    githubUrl: "https://github.com/manichandhan/Projectile-Interception-System",
    liveUrl: "https://github.com/manichandhan/Projectile-Interception-System",
    featured: true,
    metrics: [
      { label: "Track FPS", value: "60+ FPS" },
      { label: "Tracking Delay", value: "< 8ms" }
    ]
  },
  {
    id: "finance-management-system",
    title: "Finance Management System",
    subtitle: "Interactive financial tracking and budget analytics portal",
    category: "Full Stack",
    description: "A comprehensive personal finance and expense analytics web application enabling users to monitor cashflows, visualize categorical expenditure, and maintain budget goals.",
    problem: "Individuals struggle to maintain financial discipline due to fragmented banking statements and lack of visual category breakdown.",
    solution: "Built a responsive dashboard application with dynamic chart visualizations, automated expense tagging, and monthly budget forecasting.",
    architecture: [
      "Modular JavaScript application architecture",
      "Interactive data visualizations utilizing responsive chart libraries",
      "Local persistence and transaction aggregation algorithms"
    ],
    features: [
      "Categorized expense tracking with real-time budget threshold alerts",
      "Interactive pie charts and timeline trend graphs",
      "Exportable financial summary reports",
      "Sleek intuitive user interface"
    ],
    challenges: [
      "Designing responsive tabular data grids without layout shift on mobile viewports."
    ],
    techStack: ["JavaScript", "HTML5", "CSS3", "Dashboard Analytics", "Expense Tracking", "Budgeting"],
    image: "/assets/project_shipping_api.jpg",
    githubUrl: "https://github.com/manichandhan/Finance-Management-System",
    liveUrl: "https://github.com/manichandhan/Finance-Management-System",
    featured: false,
    metrics: [
      { label: "User Interface", value: "100% Responsive" }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Microsoft Certified: Azure AI Fundamentals",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-900 / AI-900 Verified",
    verifyUrl: "https://learn.microsoft.com",
    skills: ["Azure Computer Vision", "Azure OpenAI", "Azure ML Studio", "Cognitive Services"],
    icon: "ShieldCheck"
  },
  {
    title: "Oracle Cloud Infrastructure Generative AI Certified Professional",
    issuer: "Oracle",
    date: "2024",
    credentialId: "OCI GenAI Certified",
    verifyUrl: "https://education.oracle.com",
    skills: ["Large Language Models", "Fine-Tuning", "OCI AI Infrastructure", "RAG Architectures"],
    icon: "Award"
  },
  {
    title: "TensorFlow Developer Certification Focus",
    issuer: "DeepLearning.AI / Coursera",
    date: "2023",
    credentialId: "TF-DEV-2023",
    verifyUrl: "https://coursera.org",
    skills: ["Neural Networks", "Convolutional Networks", "Natural Language Processing", "Time Series"],
    icon: "Cpu"
  },
  {
    title: "Tata Group Data Analytics Job Simulation",
    issuer: "Tata Group & Forage",
    date: "2024",
    credentialId: "Forage Certificate of Completion",
    verifyUrl: "https://theforage.com",
    skills: ["Enterprise EDA", "Predictive Analytics", "Business Dashboards", "Executive Reporting"],
    icon: "BarChart3"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "2022",
    title: "Enrolled in B.Tech CSE (AI & ML)",
    organization: "VIT-AP University",
    category: "Education",
    description: "Started degree program focusing on core computer science foundations, algorithms, and artificial intelligence specialization.",
    tags: ["VIT-AP", "Computer Science", "AI/ML Base"]
  },
  {
    year: "2023",
    title: "TensorFlow & Computer Vision Milestones",
    organization: "Independent Research & Coursework",
    category: "Certification",
    description: "Mastered deep learning frameworks and built initial computer vision models for target tracking and trajectory modeling.",
    tags: ["TensorFlow", "OpenCV", "Deep Learning"]
  },
  {
    year: "2024",
    title: "Azure AI & Oracle GenAI Certifications",
    organization: "Microsoft & Oracle",
    category: "Certification",
    description: "Earned cloud AI certifications validating expertise in enterprise cloud AI services, LLM fine-tuning, and RAG design.",
    tags: ["Azure AI", "Oracle GenAI", "Cloud Architectures"]
  },
  {
    year: "2024",
    title: "Tata Group Analytics Simulation & ML Microservices",
    organization: "Forage & Personal Projects",
    category: "Project",
    description: "Completed Tata analytics job simulation and architected Azure-hosted ML REST API microservice for shipping prediction.",
    tags: ["Tata Analytics", "Azure", "Flask API"]
  },
  {
    year: "2025",
    title: "Telugu Manuscript OCR & LocalLens AI Search",
    organization: "Capstone Engineering",
    category: "Project",
    description: "Engineered CRNN + CTC Loss manuscript OCR system and LocalLens hyper-local semantic search platform.",
    tags: ["CRNN", "CTC Loss", "LocalLens", "Vector Search"]
  },
  {
    year: "2026",
    title: "Agentic AI & Advanced RAG System Exploration",
    organization: "Active Engineering Focus",
    category: "Learning",
    description: "Deep-diving into Agentic AI frameworks (LangGraph, LangChain), FastAPI high-throughput backends, and containerized Docker pipelines.",
    tags: ["LangGraph", "Agentic AI", "FastAPI", "Docker"]
  }
];

export const CURRENT_LEARNING_DATA: CurrentLearningItem[] = [
  {
    topic: "Agentic AI & Multi-Agent Systems",
    description: "Building autonomous AI agents capable of multi-step reasoning, tool execution, and state persistence.",
    focusAreas: ["LangGraph Workflows", "Agent State Management", "Tool Calling APIs"],
    status: "In Progress",
    icon: "Bot"
  },
  {
    topic: "Production RAG & Vector Search",
    description: "Designing enterprise retrieval-augmented generation pipelines with hybrid search and reranking.",
    focusAreas: ["Vector Databases (Pinecone/Chroma)", "Reranking Models", "Context Chunking"],
    status: "Deep Dive",
    icon: "SearchCode"
  },
  {
    topic: "High-Performance Python with FastAPI",
    description: "Transitioning synchronous Flask microservices into async high-concurrency ASGI APIs.",
    focusAreas: ["Asyncio", "Pydantic V2", "ASGI Architecture"],
    status: "In Progress",
    icon: "Zap"
  },
  {
    topic: "Containerization & Microservices with Docker",
    description: "Packaging AI models and API backends into reproducible production Docker containers.",
    focusAreas: ["Multi-stage Dockerfiles", "Container Security", "Docker Compose"],
    status: "Exploring",
    icon: "Box"
  }
];
