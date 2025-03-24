// Services data
export const services = [
  {
    id: 1,
    title: "App Design",
    description: "Creating intuitive, engaging mobile and desktop applications with a focus on user experience.",
    icon: "fas fa-mobile-screen",
    category: "app-design",
    bgColor: "bg-[#1A2456]",
    features: [
      "UI/UX for iOS & Android",
      "Desktop application interfaces",
      "Interactive prototypes"
    ]
  },
  {
    id: 2,
    title: "UX Research",
    description: "Understanding user needs through comprehensive research and usability testing.",
    icon: "fas fa-magnifying-glass-chart",
    category: "ux-research",
    bgColor: "bg-[#0F8B8D]",
    features: [
      "User interviews & surveys",
      "Usability testing",
      "Competitive analysis"
    ]
  },
  {
    id: 3,
    title: "Website Design",
    description: "Designing responsive, conversion-focused websites that deliver results.",
    icon: "fas fa-globe",
    category: "website-design",
    bgColor: "bg-[#EC4E20]",
    features: [
      "Responsive web design",
      "Landing page optimization",
      "E-commerce experiences"
    ]
  },
  {
    id: 4,
    title: "No-Code Development",
    description: "Building functional digital products without traditional coding using modern no-code platforms.",
    icon: "fas fa-gears",
    category: "no-code",
    bgColor: "bg-[#1A2456]",
    features: [
      "Webflow websites",
      "Bubble applications",
      "Automation & integration"
    ]
  }
];

// Team members data
export const team = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "UX Designer & Researcher",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    bio: "With over 7 years of experience in user experience design, Alex specializes in research-driven design solutions that create meaningful connections between users and digital products.",
    expertise: ["User Research", "UI Design", "Information Architecture", "Wireframing", "Usability Testing"],
    social: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "Dribbble", icon: "fab fa-dribbble", url: "#" },
      { platform: "Twitter", icon: "fab fa-twitter", url: "#" }
    ]
  },
  {
    id: 2,
    name: "Jordan Taylor",
    role: "Product Designer & Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    bio: "Jordan brings 6 years of experience bridging the gap between design and development, creating cohesive digital products that are both beautiful and functional with a focus on no-code solutions.",
    expertise: ["Product Design", "No-Code Development", "Webflow", "Bubble", "Prototyping"],
    social: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "GitHub", icon: "fab fa-github", url: "#" },
      { platform: "Twitter", icon: "fab fa-twitter", url: "#" }
    ]
  },
  {
    id: 3,
    name: "Emily Chen",
    role: "UI Designer & Illustrator",
    image: "https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    bio: "Emily combines artistic vision with technical expertise to create beautiful, engaging interfaces. With 5 years of experience, she specializes in crafting visually stunning designs that enhance user experience.",
    expertise: ["UI Design", "Illustration", "Brand Identity", "Visual Design", "Animation"],
    social: [
      { platform: "LinkedIn", icon: "fab fa-linkedin", url: "#" },
      { platform: "Dribbble", icon: "fab fa-dribbble", url: "#" },
      { platform: "Instagram", icon: "fab fa-instagram", url: "#" }
    ]
  }
];

// Portfolio items data
export const portfolioItems = [
  {
    id: 1,
    title: "Health Tracking Mobile App",
    description: "A comprehensive health monitoring application with intuitive data visualization and progress tracking.",
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    category: "app-design",
    tag: "App Design",
    tagBg: "bg-[#1A2456]"
  },
  {
    id: 2,
    title: "E-commerce Website Redesign",
    description: "A complete overhaul of an online store resulting in a 43% increase in conversion rate and improved user satisfaction.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    category: "website-design",
    tag: "Website Design",
    tagBg: "bg-[#EC4E20]"
  },
  {
    id: 3,
    title: "Financial Service UX Research",
    description: "Comprehensive user research for a fintech startup, including interviews, testing, and journey mapping.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    category: "ux-research",
    tag: "UX Research",
    tagBg: "bg-[#0F8B8D]"
  },
  {
    id: 4,
    title: "Membership Portal",
    description: "A fully-functional membership platform built with Bubble.io featuring payments, content gating, and user management.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    category: "no-code",
    tag: "No-Code",
    tagBg: "bg-[#1A2456]"
  },
  {
    id: 5,
    title: "SaaS Marketing Website",
    description: "A conversion-focused website for a B2B SaaS platform with clear user journeys and compelling messaging.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    category: "website-design",
    tag: "Website Design",
    tagBg: "bg-[#EC4E20]"
  },
  {
    id: 6,
    title: "Restaurant Ordering App",
    description: "A user-friendly food ordering application designed to streamline the ordering process for both customers and staff.",
    image: "https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=600",
    category: "app-design",
    tag: "App Design",
    tagBg: "bg-[#1A2456]"
  }
];

// Process steps data
export const process = [
  {
    id: 1,
    title: "Discovery & Research",
    description: "We begin by understanding your business, users, and project goals through comprehensive research and collaborative workshops.",
    icon: "fas fa-search",
    iconBg: "bg-[#1A2456]",
    tasks: [
      "User interviews and surveys",
      "Competitive analysis",
      "Project scoping and planning"
    ]
  },
  {
    id: 2,
    title: "Strategy & Design",
    description: "Based on our research, we develop a strategic approach and create engaging designs that meet user needs and business objectives.",
    icon: "fas fa-pencil-alt",
    iconBg: "bg-[#0F8B8D]",
    tasks: [
      "Information architecture",
      "Wireframing and prototyping",
      "Visual design and branding"
    ]
  },
  {
    id: 3,
    title: "Development & Testing",
    description: "We bring designs to life through development or no-code solutions, followed by thorough testing to ensure quality and usability.",
    icon: "fas fa-code",
    iconBg: "bg-[#EC4E20]",
    tasks: [
      "No-code development",
      "Usability testing",
      "Quality assurance"
    ]
  },
  {
    id: 4,
    title: "Launch & Growth",
    description: "We ensure a smooth launch and provide ongoing support to help your digital product grow and evolve.",
    icon: "fas fa-rocket",
    iconBg: "bg-[#1A2456]",
    tasks: [
      "Deployment and launch",
      "Analytics and tracking",
      "Ongoing maintenance and optimization"
    ]
  }
];

// Testimonials data
export const testimonials = [
  {
    id: 1,
    quote: "CraftStudio transformed our outdated website into a conversion machine. Their research-driven approach made all the difference in understanding what our customers actually needed.",
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200"
  },
  {
    id: 2,
    quote: "The app design they delivered exceeded our expectations. User engagement increased by 40% within the first month after launch. Their attention to detail is remarkable.",
    name: "David Chen",
    role: "Founder",
    company: "HealthTrack",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200"
  },
  {
    id: 3,
    quote: "Working with CraftStudio was a game-changer for our business. They built our entire platform using no-code tools, saving us time and money while still delivering an exceptional product.",
    name: "Michelle Rivera",
    role: "CEO",
    company: "EdConnect",
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&w=200"
  }
];

// FAQs data
export const faqs = [
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity, but most projects range from 4-12 weeks from kickoff to launch."
  },
  {
    question: "How do you price your services?",
    answer: "We offer both project-based pricing and retainer options depending on your needs. Each quote is customized based on project scope and requirements."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer maintenance and support packages to ensure your digital product continues to perform optimally after launch."
  },
  {
    question: "What industries do you work with?",
    answer: "We've worked across diverse industries including healthcare, fintech, education, e-commerce, and professional services."
  }
];
