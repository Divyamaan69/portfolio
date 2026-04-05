export interface ProjectDetail {
    slug: string;
    title: string;
    year: string;
    status: string;
    tagline: string;
    tags: string[];
    link: string;
    linkLabel: string;
    what: string;
    why: string;
    how: string[];
    challenges: string[];
    outcome: string;
    stack: { category: string; items: string[] }[];
}

export const projectDetails: ProjectDetail[] = [
    {
        slug: "trumpline-ai",
        title: "TrumpLine — Tweet-to-Market AI",
        year: "2025",
        status: "Shipped",
        tagline: "Can a tweet move a stock? I built a system to find out.",
        tags: ["Python", "Django", "React", "NLP", "VADER", "Gradient Boosting", "Sentiment Analysis", "PostgreSQL"],
        link: "https://github.com/Divyamaan69",
        linkLabel: "View on GitHub",
        what: "TrumpLine is a full-stack market intelligence system that analyzes Donald Trump's tweets and attempts to predict stock price direction using NLP sentiment analysis and a Gradient Boosting classifier.",
        why: "The 2024 election cycle made it obvious that political speech — especially from high-visibility figures — moves markets. I wanted to quantify that relationship rather than just observe it anecdotally. The question was: can you build a pipeline that turns raw tweet text into a directional signal before the market prices it in?",
        how: [
            "Collected and preprocessed a dataset of Trump tweets paired with corresponding stock price deltas (open-to-close) for the same trading day.",
            "Applied VADER (Valence Aware Dictionary and sEntiment Reasoner) for tweet-level sentiment scoring — chosen for its strong performance on informal, short-form social media text.",
            "Engineered features from sentiment scores, tweet metadata (time of day, retweet count), and ticker mentions.",
            "Trained a Gradient Boosting classifier to predict directional movement (up/down) on the S&P 500 and selected individual stocks.",
            "Built a Django REST API backend and a React frontend dashboard for visualizing tweet sentiment vs. price movement over time.",
            "Connected the system to a PostgreSQL database for storing processed tweet records and model predictions.",
        ],
        challenges: [
            "Tweet data is extremely noisy — sarcasm, hyperbole, and political rhetoric don't map cleanly to sentiment scores.",
            "Market direction has hundreds of confounding factors; isolating the tweet signal required careful feature engineering.",
            "Aligning tweet timestamps to market hours and trading windows needed custom preprocessing logic.",
        ],
        outcome: "The classifier achieved directional accuracy meaningfully above baseline on high-engagement tweets — particularly those mentioning specific sectors or companies by name. The project is ongoing with plans to extend to real-time tweet streaming.",
        stack: [
            { category: "Backend", items: ["Python", "Django", "PostgreSQL"] },
            { category: "Frontend", items: ["React", "Tailwind CSS"] },
            { category: "ML / NLP", items: ["VADER", "Gradient Boosting", "Scikit-Learn", "Pandas", "NumPy"] },
        ],
    },
    {
        slug: "filebridge",
        title: "FileBridge — Local File Sync Dashboard",
        year: "2025",
        status: "Shipped",
        tagline: "Zero cloud. Zero friction. Just files, over your own network.",
        tags: ["Python", "tkinter", "HTTPS", "TLS", "QR Code", "Networking"],
        link: "https://github.com/Divyamaan69",
        linkLabel: "View on GitHub",
        what: "FileBridge is a secure local file-sharing tool with a tkinter desktop GUI and a browser-accessible dashboard. It lets you transfer files across devices on the same network using HTTPS/TLS encryption and QR code access — no internet, no third-party service, no account.",
        why: "Every existing file-sharing solution either requires the cloud, a proprietary app, or gives up on security. I wanted something that worked instantly on a local network, was genuinely private, and required nothing from the recipient except a browser and a QR scan.",
        how: [
            "Built a Python HTTP server with TLS/SSL configured using self-signed certificates for encrypted local transmission.",
            "Created a tkinter desktop application for the host side — drag-and-drop file selection, server start/stop controls, and live connection status.",
            "Generated QR codes dynamically encoding the local HTTPS URL, allowing any device on the network to connect by scanning.",
            "Built a clean browser-based dashboard for the receiving device — file listing, download buttons, and transfer progress.",
            "Packaged the tool so it runs as a standalone desktop app without requiring the recipient to install anything.",
        ],
        challenges: [
            "Self-signed TLS certificates trigger browser warnings — worked around this with clear UX guidance and a trust-once flow.",
            "Network interface detection across Windows and Linux required platform-specific socket handling.",
            "Making the tkinter GUI responsive while the server thread ran required careful threading with queue-based communication.",
        ],
        outcome: "A fully working, privacy-first file transfer tool used for day-to-day file sharing between my laptop and phone. Demonstrated practical knowledge of networking, encryption, threading, and desktop GUI development.",
        stack: [
            { category: "Language", items: ["Python"] },
            { category: "GUI", items: ["tkinter"] },
            { category: "Networking", items: ["HTTPS", "TLS/SSL", "Self-signed Certificates", "Socket Programming"] },
            { category: "Utilities", items: ["QR Code Generation", "Threading", "Platform Detection"] },
        ],
    },
    {
        slug: "book-recommendation",
        title: "Book Recommendation System",
        year: "2025",
        status: "Completed · Final Year Project",
        tagline: "Indian literature deserves better recommendation algorithms.",
        tags: ["Python", "ML/DL", "Pandas", "NumPy", "Collaborative Filtering"],
        link: "https://github.com/Divyamaan69",
        linkLabel: "View on GitHub",
        what: "A recommendation engine focused on Indian Literature that benchmarks multiple ML and DL algorithms — collaborative filtering, content-based filtering, and hybrid models — to identify the most effective strategy for a culturally niche, sparse dataset.",
        why: "Most recommendation systems are trained on Western literature datasets. Indian literature — across languages, regions, and genres — is severely underrepresented. I wanted to understand how standard recommendation algorithms degrade when applied to sparse, niche datasets, and whether hybrid approaches could compensate.",
        how: [
            "Sourced and cleaned a dataset of Indian literature titles, authors, genres, and reader ratings.",
            "Performed exploratory data analysis to understand sparsity, rating distribution, and genre imbalance.",
            "Implemented collaborative filtering (user-based and item-based), content-based filtering (TF-IDF on metadata), and a hybrid model combining both signals.",
            "Benchmarked all approaches using RMSE, precision@k, and recall@k on a held-out test set.",
            "Documented findings in a structured report comparing algorithm performance trade-offs for sparse cultural datasets.",
        ],
        challenges: [
            "Dataset sparsity was severe — most books had very few ratings, which breaks standard collaborative filtering assumptions.",
            "Content metadata (genre, themes, language) was inconsistent and required significant manual cleaning.",
            "Hybrid weighting between collaborative and content signals required extensive tuning.",
        ],
        outcome: "The hybrid model outperformed both pure approaches on sparse subsets. The project contributed a structured analysis of recommendation algorithm performance on underrepresented cultural datasets — submitted as the MCA final year project.",
        stack: [
            { category: "Language", items: ["Python"] },
            { category: "ML", items: ["Collaborative Filtering", "Content-Based Filtering", "Hybrid Models", "Scikit-Learn"] },
            { category: "Data", items: ["Pandas", "NumPy", "TF-IDF"] },
        ],
    },
    {
        slug: "subek-associates",
        title: "Subek Agarwal & Associates — Website",
        year: "2025",
        status: "Live in Production",
        tagline: "From zero to live — a full production deployment, solo.",
        tags: ["Django", "HTML/CSS/JS", "GoDaddy", "cPanel", "SSL", "DNS"],
        link: "https://subekassociates.com",
        linkLabel: "Visit Live Site",
        what: "A complete business website for Subek Agarwal & Associates, a Chartered Accountancy firm based in Mysuru. The site showcases the firm's services and contact information and is fully live in production.",
        why: "The firm had no digital presence. In an era where clients search for CA firms online before making contact, the absence of a website was a real business liability. I was brought in to fix that — from design to deployment.",
        how: [
            "Designed and developed the full site using Django for the backend and plain HTML/CSS/JS for the frontend templates.",
            "Set up the GoDaddy shared hosting environment — created the hosting account, configured the cPanel Python app, and set up the directory structure.",
            "Configured DNS records (A records, CNAME, MX records) and nameservers to point the custom domain to the hosting server.",
            "Installed and activated an SSL certificate for HTTPS — configured auto-redirect from HTTP.",
            "Managed Git-based version control for deployment — pushing changes from local to the live server.",
            "Configured subdomains and email routing via MX records for professional firm email addresses.",
            "Handled DNS propagation monitoring and resolved caching issues during go-live.",
        ],
        challenges: [
            "GoDaddy shared hosting has strict limitations on Python/Django apps — required careful configuration of the WSGI entry point and virtual environment.",
            "DNS propagation delays made testing the live site non-trivial during the go-live window.",
            "SSL configuration on shared hosting required manual certificate installation rather than a one-click solution.",
        ],
        outcome: "The site launched successfully and is fully operational at subekassociates.com. This project gave me deep, hands-on experience with the full deployment lifecycle — infrastructure, networking, and server management — that most developers only read about.",
        stack: [
            { category: "Backend", items: ["Python", "Django"] },
            { category: "Frontend", items: ["HTML", "CSS", "JavaScript"] },
            { category: "Infrastructure", items: ["GoDaddy Shared Hosting", "cPanel", "SSL/TLS", "DNS", "MX Records", "Git"] },
        ],
    },
];