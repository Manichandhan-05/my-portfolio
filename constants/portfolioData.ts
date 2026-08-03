import { Project, SkillCategory, EducationItem, ExperienceItem, Certification, TimelineItem, CurrentLearningItem } from '@/types';

export const HERO_DATA = {
  name: "Malyala Mani Chandhan",
  headline: "AI/ML Engineer • Python Backend Developer • Full Stack Developer",
  summary: "Motivated AI & ML undergraduate with a strong foundation in neural architectures, computer vision, data analytics, and resilient Python backends.",
  stats: [
    { label: "B.Tech CGPA", value: "8.82 / 10" },
    { label: "Core Projects", value: "3 Production-Grade" },
    { label: "Certifications", value: "4 Verified Badges" },
    { label: "Tech Stack", value: "Python, TensorFlow, Azure" },
  ]
};

export const ABOUT_DATA = {
  summary: "Computer Science & Engineering undergraduate specializing in Artificial Intelligence and Machine Learning at Vellore Institute of Technology, Amaravathi (CGPA 8.82). Motivated to bridge theoretical machine learning research with real-world engineering through two-stage transfer learning OCR, predictive REST APIs, and computer vision motion tracking.",
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
      title: "Leadership & Collaboration",
      description: "Proven record leading event operations and outreach at NGC Club, VIT-AP University to streamline workflows.",
      icon: "ShieldCheck"
    }
  ]
};

export const EDUCATION_DATA: EducationItem = {
  institution: "Vellore Institute of Technology, Amaravathi",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science Engineering with specialization in AI & ML",
  gpa: "8.82 / 10.0 CGPA",
  duration: "Jul 2022 – Jun 2026",
  location: "Duggirala, Andhra Pradesh",
  coursework: [
    "Machine Learning & Deep Learning",
    "Natural Language Processing (NLP)",
    "Computer Vision & Image Processing",
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Model Deployment & Cloud Architecture"
  ],
  highlights: [
    "Consistent Top Academic Performance with 8.82 CGPA",
    "Specialized focus on Transfer Learning, Neural Sequence Modeling, and Computer Vision",
    "Active Student Leader as Event Operations & Outreach Lead at NGC Club"
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: "Data Analytics Job Simulation",
    company: "Tata Group (via Forage)",
    type: "Virtual Industry Simulation",
    duration: "Jan 2026",
    location: "Remote",
    description: "Completed an immersive data analytics simulation representing real-world business scenarios faced by Tata Group leadership.",
    bullets: [
      "Analyzed complex enterprise datasets to extract actionable business insights for executive decision-making.",
      "Formulated visual dashboards and exploratory data analysis (EDA) frameworks using data visualization best practices.",
      "Applied predictive thinking to identify trends, seasonal variations, and operational bottlenecks."
    ],
    skillsUsed: ["Data Analysis", "Business Insights", "Data Visualization", "Predictive Modeling", "Power BI"],
    disclaimer: "Completed as a virtual industry simulation via Forage to solve realistic enterprise analytics challenges."
  },
  {
    role: "Event Operations & Outreach Lead",
    company: "NGC Club, VIT-AP University",
    type: "Leadership & Involvement",
    duration: "Aug 2023 – May 2024",
    location: "VIT-AP University",
    description: "Led core operations and promotional outreach for major student technical and cultural events across campus.",
    bullets: [
      "Managed event operations including scheduling, registrations, and volunteer team coordination.",
      "Worked with organizing teams to streamline event workflows and execution.",
      "Created digital promotional material to enhance audience reach and engagement.",
      "Assisted in outreach strategies to improve student participation metrics."
    ],
    skillsUsed: ["Event Operations", "Team Leadership", "Digital Promotion", "Outreach Strategy", "Workflow Management"]
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: "AI / ML & Core Concepts",
    iconName: "BrainCircuit",
    skills: [
      { name: "Machine Learning", level: "Advanced", highlight: true },
      { name: "Deep Learning", level: "Advanced", highlight: true },
      { name: "Computer Vision", level: "Advanced", highlight: true },
      { name: "NLP", level: "Intermediate" },
      { name: "Data Structures & Algorithms", level: "Advanced", highlight: true },
      { name: "Model Deployment", level: "Intermediate", highlight: true },
      { name: "Object-Oriented Programming", level: "Advanced" },
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
    ]
  },
  {
    title: "Frameworks & Libraries",
    iconName: "Server",
    skills: [
      { name: "TensorFlow", level: "Advanced", highlight: true },
      { name: "Keras", level: "Advanced", highlight: true },
      { name: "PyTorch", level: "Intermediate" },
      { name: "Scikit-learn", level: "Advanced", highlight: true },
      { name: "OpenCV", level: "Advanced", highlight: true },
      { name: "Pandas", level: "Advanced" },
    ]
  },
  {
    title: "Cloud & Tools",
    iconName: "Wrench",
    skills: [
      { name: "Microsoft Azure (AI-900)", level: "Advanced", highlight: true },
      { name: "Oracle Cloud", level: "Intermediate", highlight: true },
      { name: "Flask", level: "Advanced", highlight: true },
      { name: "Git & GitHub", level: "Advanced", highlight: true },
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "telugu-manuscript-ocr",
    title: "Telugu Manuscript OCR: Two-Stage Transfer Learning Pipeline",
    subtitle: "End-to-end CRNN + CTC Loss deep learning model for historical manuscript transcription",
    category: "AI/ML",
    description: "Architected a custom Convolutional Recurrent Neural Network (CRNN) combining a 6-layer CNN for feature extraction and a 2-layer Bi-GRU (256 units) for sequence modeling.",
    problem: "Historical Telugu manuscripts contain unaligned text sequences and degraded physical pages where traditional OCR engines fail due to lack of character-level segmentation.",
    solution: "Implemented Connectionist Temporal Classification (CTC) loss to enable end-to-end transcription without character segmentation. Deployed a two-stage transfer learning pipeline, pre-training on 11,000 synthetic samples and fine-tuning on 1,000 real manuscript lines.",
    architecture: [
      "OpenCV preprocessing & deskewing pipeline",
      "6-Layer CNN backbone for spatial feature map extraction",
      "2-Layer Bi-GRU (256 units) for bidirectional temporal sequence modeling",
      "CTC (Connectionist Temporal Classification) Loss layer",
      "AdamW optimizer with recurrent dropout (Stable validation loss of 25.71)"
    ],
    features: [
      "End-to-end sequence transcription without manual character segmentation",
      "Two-stage transfer learning (11,000 synthetic pre-training + 1,000 real fine-tuning)",
      "Recurrent dropout optimization reducing validation loss to 25.71",
      "Python, TensorFlow, OpenCV, CNN, Bi-GRU stack"
    ],
    challenges: [
      "Balancing synthetic pre-training dataset generation with domain-specific manuscript noise.",
      "Preventing overfitting during fine-tuning on limited historical manuscript samples."
    ],
    techStack: ["Python", "TensorFlow", "OpenCV", "CNN", "CRNN", "Bi-GRU", "CTC Loss"],
    image: "/assets/project_telugu_ocr.jpg",
    githubUrl: "https://github.com/Manichandhan-05/Telugu-Manuscript-OCR",
    liveUrl: "https://github.com/Manichandhan-05/Telugu-Manuscript-OCR",
    featured: true,
    metrics: [
      { label: "Synthetic Pre-training", value: "11,000 Lines" },
      { label: "Validation Loss", value: "25.71 Stable" }
    ]
  },
  {
    id: "ecommerce-shipping-prediction-system",
    title: "E-commerce Shipping Prediction System",
    subtitle: "Flask REST API & Scikit-learn predictive ML model deployed on Microsoft Azure",
    category: "Backend",
    description: "Developed a machine learning model using Scikit-learn to predict delivery times with 92% accuracy on a dataset of 10,000 records, deployed as an Azure REST API microservice.",
    problem: "Logistics platforms encounter delivery delays caused by warehouse bottlenecks and shipping mode friction without real-time predictive lead time estimates.",
    solution: "Trained a supervised predictive model on historical shipping data and wrapped it in a Flask REST API microservice deployed on Microsoft Azure.",
    architecture: [
      "Scikit-learn model trained on 10,000 logistics records (92% accuracy)",
      "Flask REST API endpoint receiving JSON shipping inputs and returning lead times",
      "Microsoft Azure App Service cloud deployment",
      "Delay factor analysis covering shipping modes and warehouse locations"
    ],
    features: [
      "92% prediction accuracy on 10,000 delivery records dataset",
      "Flask REST API microservice receiving JSON payloads and returning instant estimates",
      "Microsoft Azure cloud hosting",
      "Key delay factor identification (shipping modes, warehouse bottlenecks)"
    ],
    challenges: [
      "Encoding categorical shipping modes and warehouse IDs without model bias.",
      "Ensuring sub-50ms API response time on Azure free tier hosting."
    ],
    techStack: ["Python", "Flask", "Scikit-learn", "Azure", "REST API"],
    image: "/assets/project_shipping_api.jpg",
    githubUrl: "https://github.com/Manichandhan-05/Shipping-Prediction-API",
    liveUrl: "https://github.com/Manichandhan-05/Shipping-Prediction-API",
    featured: true,
    metrics: [
      { label: "Accuracy", value: "92%" },
      { label: "Dataset Size", value: "10,000 Records" }
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
    techStack: ["Computer Vision", "OpenCV", "Python", "Object Tracking", "Kalman Filter"],
    image: "/assets/project_interception.jpg",
    githubUrl: "https://github.com/Manichandhan-05/Projectile-Interception-System",
    liveUrl: "https://github.com/Manichandhan-05/Projectile-Interception-System",
    featured: true,
    metrics: [
      { label: "Track FPS", value: "60+ FPS" },
      { label: "Tracking Delay", value: "< 8ms" }
    ]
  }
];

export const CERTIFICATIONS_DATA: Certification[] = [
  {
    title: "Tata Group Data Analytics Job Simulation",
    issuer: "Tata Group & Forage",
    date: "Jan 2026",
    credentialId: "Forage Verified Certificate",
    verifyUrl: "https://theforage.com",
    skills: ["Enterprise EDA", "Predictive Analytics", "Business Dashboards", "Executive Reporting"],
    icon: "BarChart3"
  },
  {
    title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
    issuer: "Microsoft",
    date: "2024",
    credentialId: "AZ-900 / AI-900 Certified",
    verifyUrl: "https://learn.microsoft.com",
    skills: ["Azure Computer Vision", "Azure OpenAI", "Azure ML Studio", "Cognitive Services"],
    icon: "ShieldCheck"
  },
  {
    title: "Oracle Cloud: Generative AI Professional",
    issuer: "Oracle",
    date: "2024",
    credentialId: "OCI GenAI Certified",
    verifyUrl: "https://education.oracle.com",
    skills: ["Large Language Models", "Fine-Tuning", "OCI AI Infrastructure", "RAG Architectures"],
    icon: "Award"
  },
  {
    title: "Google: TensorFlow Foundations",
    issuer: "Google / DeepLearning.AI",
    date: "2023",
    credentialId: "TF Foundations Certified",
    verifyUrl: "https://coursera.org",
    skills: ["Neural Networks", "Convolutional Networks", "NLP", "Time Series"],
    icon: "Cpu"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: "Jul 2022",
    title: "Enrolled in B.Tech CSE (AI & ML)",
    organization: "Vellore Institute of Technology, Amaravathi",
    category: "Education",
    description: "Began undergraduate engineering degree specializing in AI, Machine Learning, Data Structures, and Computer Vision.",
    tags: ["VIT-AP", "AI/ML Base", "CGPA 8.82"]
  },
  {
    year: "Aug 2023",
    title: "Appointed Operations Lead at NGC Club",
    organization: "NGC Club, VIT-AP University",
    category: "Learning",
    description: "Led event operations, registrations, volunteer coordination, and digital promotion strategies across major campus events.",
    tags: ["Leadership", "Event Operations", "Outreach"]
  },
  {
    year: "Jan 2023 – Dec 2023",
    title: "E-commerce Shipping Prediction System",
    organization: "Technical Project",
    category: "Project",
    description: "Engineered Scikit-learn predictive model (92% accuracy on 10,000 records) and deployed Flask REST API on Azure.",
    tags: ["Python", "Flask", "Azure", "92% Accuracy"]
  },
  {
    year: "Aug 2025 – Dec 2025",
    title: "Telugu Manuscript OCR Transfer Learning",
    organization: "Capstone Research Project",
    category: "Project",
    description: "Architected 6-layer CNN + 2-layer Bi-GRU + CTC Loss model with two-stage transfer learning (11,000 synthetic pre-training lines).",
    tags: ["TensorFlow", "CRNN", "Bi-GRU", "CTC Loss"]
  },
  {
    year: "Jan 2026",
    title: "Tata Group Data Analytics Simulation & AI Certifications",
    organization: "Tata Group & Cloud Vendors",
    category: "Certification",
    description: "Completed Tata analytics job simulation and earned Azure AI Fundamentals, Oracle GenAI, and Google TensorFlow credentials.",
    tags: ["Tata Analytics", "Azure AI", "Oracle GenAI", "Google TF"]
  }
];

export const CURRENT_LEARNING_DATA: CurrentLearningItem[] = [
  {
    topic: "Agentic AI & Multi-Agent Workflows",
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
