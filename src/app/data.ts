// All portfolio content lives here. Edit this one file to update the whole site.

export const PROFILE = {
  name: 'Nitika',
  title: 'Software Engineer',
  roles: ['Full-Stack Developer', 'AI / ML Enthusiast', 'Problem Solver'],
  tagline:
    'Full-stack engineer who enjoys building scalable products and giving them an intelligent edge with AI.',
  about: [
    "I'm a Computer Engineering graduate from Thapar Institute of Engineering and Technology, and I recently completed my internship as an Associate Software Engineer at MAQ Software.",
    'I enjoy working across the stack: designing REST APIs in ASP.NET Core, Spring Boot and FastAPI, building responsive interfaces in React and TypeScript, and shipping them with Docker, Kubernetes and CI/CD.',
    'Outside of product work, I am drawn to applied AI: retrieval-augmented generation, conversational agents, and emotion-aware voice interfaces that make technology more accessible.',
  ],
  email: 'nitika3064@gmail.com',
  phone: '+91-9896148295',
  linkedin: 'https://www.linkedin.com/in/nitika-6ab64024a/',
  github: 'https://github.com/Nitika13',
  leetcode: 'https://leetcode.com/u/nitika__/',
  photo: 'nitika.jpg',
};

export const STATS = [
  { value: '8.42', label: 'CGPA / 10' },
  { value: '300+', label: 'DSA problems solved' },
  { value: '3', label: 'Major projects' },
  { value: '2', label: 'NVIDIA certifications' },
];

export const EDUCATION = {
  school: 'Thapar Institute of Engineering and Technology',
  place: 'Patiala, Punjab',
  degree: 'Bachelor of Engineering, Computer Engineering',
  period: 'Sep 2022 – Jun 2026',
  score: 'CGPA: 8.42 / 10.00',
};

export interface Job {
  company: string;
  role: string;
  period: string;
  place: string;
  points: string[];
  stack: string[];
}

export const EXPERIENCE: Job[] = [
  {
    company: 'MAQ Software',
    role: 'Associate Software Engineer (Internship)',
    period: 'Jan 2026 – Jun 2026',
    place: 'Noida, India',
    points: [
      'Learned to work like a team and build stuff used by real people.',
      'The skill I sharpened: thinking in full stack, from SQL tables to React screens to backend APIs.',
      'The tech I got to try: AI agents and Azure, which went well beyond coursework.',
      'The habit I picked up: clean teamwork with feature branches, reviews and pipelines.',
      'The mindset I took away: build it, ship it, then make it better.',
    ], 
    stack: [
      'ASP.NET Core',
      'C#',
      'React',
      'TypeScript',
      'Power BI',
      'SQL Server',
      'FastAPI',
      'Azure',
      'Microsoft Fabric'
    ],
  },
];

export interface Link {
  label: string;
  url: string;
}

export interface Project {
  name: string;
  kind: string;
  blurb: string;
  points: string[];
  stack: string[];
  links: Link[];
  accent: 'teal' | 'amber' | 'violet';
}

export const PROJECTS: Project[] = [
  {
    name: 'crateEve',
    kind: 'Full-stack freelancer marketplace',
    blurb: 'A layered N-tier marketplace with secure auth, analytics and AI-powered recommendations.',
    points: [
      '7+ REST API endpoints for auth, product management and analytics, tested with Postman.',
      'Secured with JWT authentication, bcrypt hashing and role-based access control (RBAC).',
      'PostgreSQL schema with Spring Data JPA and real-time notifications via React-Toastify.',
      'Flask / Gemini API microservice for product recommendations. Containerized with Docker Compose and deployed on Vercel and Render.',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Spring Security',
      'Spring Data JPA',
      'React.js',
      'Flask',
      'PostgreSQL',
      'Docker',
    ],
    links: [{ label: 'Live project', url: 'https://crate-eve.vercel.app/' }],
    accent: 'teal',
  },
  {
    name: 'Suspicious Chat Detector',
    kind: 'Machine learning classifier',
    blurb: 'Detects suspicious conversations in WhatsApp chat exports with 97.5% accuracy.',
    points: [
      'Machine learning chat classification system for WhatsApp exports up to 1 MB, reaching 97.5% accuracy.',
      'Created a custom dataset of 8,000+ messages.',
      'TF-IDF vectorization with Logistic Regression and Random Forest classifiers, served through a Streamlit app.',
    ],
    stack: ['Python', 'Streamlit', 'NLTK', 'pandas', 'scikit-learn', 'Seaborn', 'Jupyter'],
    links: [
      {
        label: 'Source code',
        url: 'https://github.com/Nitika13/Suspicious-Chat-Detector',
      },
    ],
    accent: 'amber',
  },
  {
    name: 'AssistiveTech',
    kind: 'College capstone',
    blurb:
      'An emotion-aware voice assistant supporting adaptive learning and social-skill development for children with learning difficulties.',
    points: [
      'Real-time speech-to-text and text-to-speech pipelines (Whisper, SpeechRecognition, gTTS) with live facial emotion detection using OpenCV.',
      'Emotional chatbot that detects sentiment with a fine-tuned DeBERTa-v3 and replies with supportive, personalized responses from Llama-3.2-1B-Instruct, adapting to each student’s emotional patterns.',
      'FastAPI backend serving the models.',
    ],
    stack: ['PyTorch', 'LangChain', 'Hugging Face', 'FastAPI', 'FAISS', 'OpenCV', 'Whisper'],
    links: [
      {
        label: 'Demo video',
        url: 'https://docs.google.com/videos/d/1Ye9_FxG_e08PBn6ctUWXHemglMW3mhXSetf2ZfBfIFA/play',
      },
    ],
    accent: 'violet',
  },
];

export interface SkillGroup {
  title: string;
  icon: string;
  items: string[];
}

export const SKILLS: SkillGroup[] = [
  {
    title: 'Languages',
    icon: '</>',
    items: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: '{ }',
    items: ['Spring Boot', 'React.js', 'LangChain', 'scikit-learn', 'pandas', 'NumPy'],
  },
  {
    title: 'Tools & Platforms',
    icon: '⚙',
    items: ['Git / GitHub', 'Postman', 'Docker', 'PostgreSQL', 'Linux', 'CUDA'],
  },
  {
    title: 'Core Concepts',
    icon: '◈',
    items: [
      'Data Structures & Algorithms',
      'OOP',
      'System Design',
      'DBMS',
      'Operating Systems',
      'SDLC (Agile / Scrum)',
      'Computer Networks',
      'Conversational AI',
    ],
  },
  {
    title: 'Soft Skills',
    icon: '✦',
    items: ['Problem-Solving', 'Communication', 'Teamwork'],
  },
];

export interface Cert {
  title: string;
  date: string;
  topics: string;
  url: string;
}

export const CERTS: Cert[] = [
  {
    title: 'NVIDIA: Getting Started with Accelerated Computing in CUDA C/C++',
    date: 'Sep 2025',
    topics: 'Parallel Programming, CUDA C/C++, Nsight Systems',
    url: 'https://drive.google.com/file/d/1sfKNi4xHy4lwiq2CLCKxBWPfEPJpOVAH/view',
  },
  {
    title: 'NVIDIA: Accelerating End-to-End Data Science Workflows',
    date: 'Jan 2025',
    topics: 'RAPIDS, XGBoost, Dask, Polars, DBSCAN, GPU-accelerated Data Processing & ML',
    url: 'https://drive.google.com/file/d/1WeDl5SfrbGJiEigqarazq7fMe-hF_PoA/view',
  },
];

export const ACHIEVEMENTS = [
  {
    text: 'Solved 300+ coding problems focused on data structures and algorithms.',
    link: { label: 'LeetCode profile', url: 'https://leetcode.com/u/nitika__/' } as Link,
  },
  {
    text: 'Participated in hackathons, and volunteered in college societies for event organization and community engagement.',
  },
  {
    text: 'Recipient of the TIET Merit Scholarship worth ₹1,70,000, awarded for first-year academic performance.',
  },
];
