// =====================================================================================
// PORTFOLIO CONTENT — edit everything about your site from this single file.
// Add a new skill, project or certificate by adding a new object to the matching array.
// No other file needs to change. See README.md for a step-by-step guide.
// =====================================================================================

export const profile = {
  name: "Kartik Matade",
  role: "BSc CS (3rd Year) Student",
  tagline: "Problem solver. Curious builder. Ready to work.",
  summary:
    "I'm a third-year BSc Computer Science student who enjoys turning ideas into working software — from clean data structures to machine learning models that ship. I like breaking problems down, writing code that's easy to read, and learning whatever the next project throws at me.",
  location: "Nagpur, Maharashtra, India",
  email: "kartikmatade2006@gmail.com",
  socials: {
    github: "https://github.com/kartikmatade2006",
    linkedin: "https://www.linkedin.com/in/kartik-matade-548011312/",
  },
  // used in the hero terminal animation
  terminalLines: [
    "whoami",
    "Kartik Matade — BSc CS, 3rd Year",
    "cat interests.txt",
    "Machine Learning · Web Dev · DSA · Problem Solving",
    "status --current",
    "Open to internships & collaborations ✓",
  ],
};

// -------------------------------------------------------------------------------------
// SKILLS
// -------------------------------------------------------------------------------------
// `icon` refers to a key exported from src/components/icons.jsx — pick an existing key
// or add a new one there, then reference it here. `level` is optional (0-100) and only
// used for the progress bar. Group by any `category` string you like — a new category
// name automatically creates a new section.
// -------------------------------------------------------------------------------------

export const skills = [
  { name: "C", icon: "c", category: "Languages", level: 80 },
  { name: "C++", icon: "cpp", category: "Languages", level: 85 },
  { name: "Python", icon: "python", category: "Languages", level: 88 },
  { name: "JavaScript", icon: "javascript", category: "Languages", level: 80 },

  { name: "HTML5", icon: "html5", category: "Web Development", level: 90 },
  { name: "CSS3", icon: "css3", category: "Web Development", level: 85 },
  { name: "React JS", icon: "react", category: "Web Development", level: 78 },

  { name: "MongoDB", icon: "mongodb", category: "Databases", level: 72 },
  { name: "SQL", icon: "sql", category: "Databases", level: 75 },

  { name: "Data Structures & Algorithms", icon: "dsa", category: "Core CS", level: 82 },
  { name: "CS Fundamentals", icon: "fundamentals", category: "Core CS", level: 75 },

  { name: "Data Analysis", icon: "dataAnalysis", category: "Data & ML", level: 78 },
  { name: "Machine Learning", icon: "ml", category: "Data & ML", level: 76 },

  { name: "Problem Solving", icon: "problemSolving", category: "Soft Skills", level: 88 },
  { name: "Communication", icon: "communication", category: "Soft Skills", level: 85 },
];

// -------------------------------------------------------------------------------------
// CERTIFICATIONS
// -------------------------------------------------------------------------------------
// `image` should be an import from src/assets (see top of Certifications.jsx for how
// existing ones are wired in). Add the file to src/assets, import it there, and add
// an entry here with the matching image variable.
// -------------------------------------------------------------------------------------

export const certifications = [
  {
    title: "Software Engineering Job Simulation",
    issuer: "JPMorgan Chase & Co.",
    platform: "Forage",
    date: "October 31, 2025",
    skillsCovered: [
      "Project Setup",
      "Kafka Integration",
      "H2 Integration",
      "REST API Integration",
      "REST API Controller",
    ],
    imageKey: "jpmorgan",
  },
  {
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata",
    platform: "Forage",
    date: "July 6, 2026",
    skillsCovered: [
      "Framing the Business Scenario",
      "Choosing the Right Visuals",
      "Creating Effective Visuals",
      "Communicating Insights and Analysis",
    ],
    imageKey: "tata",
  },
];

// -------------------------------------------------------------------------------------
// PROJECTS
// -------------------------------------------------------------------------------------
// `logo` accepts one of the keys from ProjectLogo.jsx ("insurance" is provided as a
// built-in SVG mark). To use a custom image instead, set `logo: null` and pass an
// `image` import. `tech` is a free array of strings shown as small mono chips.
// -------------------------------------------------------------------------------------

export const projects = [
  {
    title: "Insurance Price Predictor",
    description:
      "A machine learning web app that estimates a person's medical insurance premium from inputs like age, BMI, smoking status and region. Built around a linear regression model trained on real insurance data, wrapped in a simple, friendly interface.",
    tech: ["Python", "scikit-learn", "Linear Regression", "Pandas", "Flask/Streamlit"],
    liveLink: "https://insurance-price-zrc1.onrender.com",
    repoLink: "",
    logo: "insurance",
    featured: true,
  },
  // 👇 Add your next project here — just copy this shape.
  // {
  //   title: "Your Next Project",
  //   description: "One or two sentences about what it does and why it's useful.",
  //   tech: ["React", "Node.js"],
  //   liveLink: "https://your-live-link.com",
  //   repoLink: "https://github.com/kartikmatade2006/your-repo",
  //   logo: "generic",
  //   featured: false,
  // },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
