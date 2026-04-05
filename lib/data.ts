// lib/data.ts — single source of truth for all portfolio content

export const siteConfig = {
  name: "Divyamaan Singh",
  tagline: "I build what I wish existed.",
  role: "AI/ML Engineer · Python Developer · Django Backend",
  description:
    "Crafting end-to-end ML pipelines, intelligent backends, and data-driven products that solve real problems.",
  location: "Mysuru, Karnataka",
  email: "divyamaan14@gmail.com",
  github: "https://github.com/Divyamaan69",
  domain: "divyamaan.com",
};

export const stats = [
  { value: "9.37", label: "MCA AI/ML CGPA" },
  { value: "1", label: "ML/NLP Project shipped" },
  { value: "2", label: "Production websites live" },
];

export const heroSkills = ["TensorFlow", "Django", "Python", "NLP", "Scikit-Learn", "MySQL"];

export const skills = [
  {
    icon: "🧠",
    name: "ML / Deep Learning",
    items: ["TensorFlow", "Keras", "Scikit-Learn", "XGBoost", "Neural Networks", "Collaborative Filtering", "NLP"],
  },
  {
    icon: "🐍",
    name: "Python Ecosystem",
    items: ["Python (Proficient)", "NumPy", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"],
  },
  {
    icon: "🌐",
    name: "Web Development",
    items: ["Django (REST APIs, ORM, MVT)", "HTML · CSS", "JavaScript (Beginner)", "Git / GitHub", "VS Code"],
  },
  {
    icon: "🗄️",
    name: "Databases & Infra",
    items: ["MySQL", "Relational Design", "GoDaddy Hosting", "cPanel", "DNS / SSL / Domain Config"],
  },
  {
    icon: "✍️",
    name: "Soft Skills",
    items: ["Problem Solving", "Quick Learning", "Technical Writing", "Research", "Communication", "Proactive Attitude"],
  },
  {
    icon: "📚",
    name: "Coursework",
    items: ["Machine Learning", "Predictive Analytics", "Neural Networks & Deep Learning", "RDBMS", "OS & Unix Shell"],
  },
];

export const projects = [
  {
    slug: "trumpline-ai",
    year: "2025",
    title: "TrumpLine — Tweet-to-Market AI",
    description:
      "A full-stack market intelligence app correlating Donald Trump's tweets with stock market direction using VADER sentiment analysis and a Gradient Boosting classifier. Built with Django + React.",
    tags: ["Python", "Django", "React", "NLP", "VADER", "Gradient Boosting", "Sentiment Analysis"],
    link: "https://github.com/Divyamaan69",
    linkLabel: "GitHub",
    featured: true,
  },
  {
    slug: "filebridge",
    year: "2025",
    title: "FileBridge — Local File Sync Dashboard",
    description:
      "A secure local file-sharing dashboard with HTTPS/TLS encryption, a tkinter desktop app, and QR code access. Built for fast, private, zero-cloud file transfer across devices on the same network.",
    tags: ["Python", "tkinter", "HTTPS", "TLS", "QR Code", "Networking"],
    link: "https://github.com/Divyamaan69",
    linkLabel: "GitHub",
    featured: true,
  },
  {
    slug: "book-recommendation",
    year: "2025 · Final Year",
    title: "Book Recommendation System",
    description:
      "A recommendation engine focused on Indian Literature, benchmarking collaborative filtering, content-based, and hybrid models. Includes comprehensive EDA, feature extraction, and algorithm performance comparison.",
    tags: ["Python", "ML/DL", "Pandas", "NumPy", "Recommendation Systems"],
    link: "https://github.com/Divyamaan69",
    linkLabel: "GitHub",
    featured: true,
  },
  {
    slug: "subek-associates",
    year: "2025 · Live",
    title: "Subek Agarwal & Associates",
    description:
      "End-to-end design and deployment of a professional website for a Chartered Accountancy firm. Handled DNS, SSL, cPanel, MX records, and subdomain config independently on GoDaddy shared hosting.",
    tags: ["Django", "HTML/CSS/JS", "GoDaddy", "Deployment", "Full-Stack"],
    link: "https://subekassociates.com",
    linkLabel: "Live Site",
    featured: true,
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Subek Agarwal & Associates",
    type: "On-site · Mysuru",
    period: "2025",
    bullets: [
      "Designed, built, and deployed a full production website for a Chartered Accountancy firm from scratch — live at subekassociates.com.",
      "Architected the Django backend including URL routing, views, templates, and static file management.",
      "Handled end-to-end deployment on GoDaddy shared hosting: DNS records, nameserver configuration, SSL certificate setup, cPanel management, and custom domain binding.",
      "Configured MX records, subdomains, and Git-based version control workflow independently.",
      "Delivered a client-ready product with zero prior infrastructure support — fully self-managed from development to go-live.",
    ],
  },

  {
    role: "Python Web Development Intern",
    company: "Meta Scifor Technologies",
    type: "Online",
    period: "Sep 2024 – Jun 2025",
    bullets: [
      "Completed intensive Django training covering MVC architecture, REST APIs, ORM, and backend frameworks.",
      "Built and deployed multiple full-stack Django projects demonstrating end-to-end Python backend proficiency.",
      "Collaborated on iterative project reviews, improving code quality against software development best practices.",
      "Developed strong time management and problem-solving skills in a fully remote, self-directed environment.",
    ],
  },
  {
    role: "Content Writer Intern",
    company: "Zealopus",
    type: "Online",
    period: "Sep – Dec 2022",
    bullets: [
      "Produced 300-word news articles across Health & Technology, Politics, Commerce, and Entertainment verticals.",
      "Applied targeted SEO keyword strategies to improve article discoverability and search rankings.",
      "Covered 6+ distinct editorial categories consistently under deadline.",
    ],
  },
  {
    role: "Research Assistant (Freelance)",
    company: "Independent",
    type: "Remote",
    period: "2022",
    bullets: [
      "Co-authored 3 academic research papers spanning mythology, ethnographic self-study, and architectural sociology.",
      "Conducted literature reviews, synthesized qualitative research, and structured findings into peer-ready manuscripts.",
    ],
  },
];

export const education = [
  {
    degree: "Master of Computer Applications — Artificial Intelligence & ML",
    school: "Jain Online (Great Learning) · Jain Deemed-to-be University, Bengaluru",
    year: "Completed 2025",
    gpa: "9.37",
    gpaLabel: "CGPA",
  },
  {
    degree: "Bachelor of Science — Physics, Chemistry, Mathematics",
    school: "Amrita Vishwa Vidyapeetham, Amrita School of Physical Sciences, Mysore",
    year: "2020 – 2023",
    gpa: "8.75",
    gpaLabel: "CGPA",
  },
];

export const interests = [
  "Artificial Intelligence", "Machine Learning", "Deep Learning",
  "Web Development", "Technical Writing", "Creative Writing",
  "Content Writing", "Journalism",
];

export const blogPlaceholders = [
  {
    slug: "benchmarking-ml-indian-literature",
    category: "AI",
    title: "Benchmarking ML Algorithms on Sparse Indian Literature Data",
    excerpt:
      "A deep-dive into how collaborative filtering, content-based, and hybrid models perform when the dataset is small, culturally niche, and highly sparse.",
    readTime: "8 min read",
    status: "upcoming",
  },
  {
    slug: "django-godaddy-shared-hosting",
    category: "Tutorial",
    title: "Deploying Django on GoDaddy Shared Hosting: The Complete Guide",
    excerpt:
      "Everything I learned the hard way — from cPanel Python app setup and DNS propagation to SSL certificates and custom domain binding.",
    readTime: "12 min read",
    status: "upcoming",
  },
  {
    slug: "trump-tweets-market-volatility",
    category: "AI",
    title: "How I discovered the connection between Trump's tweets and market volatility using AI",
    excerpt:
      "What started as a curiosity turned into a full ML pipeline — sentiment scores, stock price deltas, and a classifier that actually works.",
    readTime: "8 min read",
    status: "upcoming",
  },
];
