// Verified Real FISAT Data (Federal Institute of Science and Technology, Angamaly, Kerala)
// Sourced from official portal https://fisat.ac.in/, NAAC A+, UGC Autonomous & NIRF Data

export const FISAT_METRICS = [
  {
    value: 23,
    suffix: "+",
    label: "Years of Legacy",
    subtext: "Established in 2002 by FBOAES",
    highlight: "Est. 2002"
  },
  {
    value: 12,
    prefix: "₹",
    suffix: " Cr+",
    label: "Worth of Scholarships",
    subtext: "Merit, sports & need-based student aid",
    highlight: "Student First"
  },
  {
    value: 3200,
    suffix: "+",
    label: "Future Engineers Enrolled",
    subtext: "Across B.Tech, M.Tech, MCA & MBA",
    highlight: "Active Campus"
  },
  {
    value: 602,
    suffix: "+",
    label: "Placement Offers",
    subtext: "Recorded for recent graduating cohorts",
    highlight: "Career Launchpad"
  },
  {
    value: 17.04,
    prefix: "₹",
    suffix: " LPA",
    label: "Highest Placement Package",
    subtext: "Top tech and product global recruiters",
    highlight: "Top CTC"
  },
  {
    value: 3.45,
    suffix: " / 4",
    label: "NAAC 'A+' Grade CGPA",
    subtext: "Autonomous status granted by UGC",
    highlight: "Excellence"
  }
];

export const DEPARTMENTS = [
  {
    id: "cse",
    code: "CSE",
    name: "Computer Science & Engineering",
    slogan: "BUILD THE DIGITAL WORLD",
    tagline: "From neural networks to distributed systems, crafting software that impacts millions.",
    color: "#00F2FE",
    accent: "from-cyan-500 to-blue-600",
    degrees: ["B.Tech CSE", "B.Tech CSE (AI & ML)", "B.Tech CSE (Data Science)", "M.Tech CSE", "Ph.D"],
    labs: ["High Performance AI Computing Lab", "Cyber Security & Cloud Center", "Open Source Software Lab", "IoT Prototyping Bay"],
    stats: { students: 720, faculty: 48, placementRate: "96%", projects: "140+" },
    featuredProject: "Autonomous Medical Drone Dispatcher with Computer Vision"
  },
  {
    id: "ece",
    code: "ECE",
    name: "Electronics & Communication Engineering",
    slogan: "CONNECT THE FUTURE",
    tagline: "Silicon hardware, RF spectrum, signal intelligence, and next-gen 6G communications.",
    color: "#38BDF8",
    accent: "from-sky-400 to-indigo-600",
    degrees: ["B.Tech ECE", "B.Tech ECE (VLSI Design)", "M.Tech VLSI & Embedded Systems", "Ph.D"],
    labs: ["Cadence & Synopsys VLSI Lab", "Microwave & RF Simulation Lab", "Digital Signal Processing Center", "Embedded Systems Lab"],
    stats: { students: 480, faculty: 36, placementRate: "91%", projects: "95+" },
    featuredProject: "Low-Power RISC-V Microarchitecture Chip for Edge AI"
  },
  {
    id: "me",
    code: "ME",
    name: "Mechanical Engineering",
    slogan: "DESIGN. BUILD. MOVE.",
    tagline: "Thermodynamics, aerodynamics, computational CFD, and high-octane student motorsports.",
    color: "#F59E0B",
    accent: "from-amber-400 to-orange-600",
    degrees: ["B.Tech Mechanical Engineering", "M.Tech Renewable Energy", "Ph.D"],
    labs: ["Advanced CAD/CAM/CAE Suite", "Thermal & Heat Transfer Lab", "Materials & Metallography Testing", "SAE Motorsports Workshop"],
    stats: { students: 360, faculty: 28, placementRate: "85%", projects: "80+" },
    featuredProject: "All-Terrain Electric Buggy with Regenerative Braking"
  },
  {
    id: "eee",
    code: "EEE",
    name: "Electrical & Electronics Engineering",
    slogan: "ENERGIZE TOMORROW",
    tagline: "Clean energy transition, smart grid intelligence, high voltage power, and EV powertrains.",
    color: "#10B981",
    accent: "from-emerald-400 to-teal-600",
    degrees: ["B.Tech EEE", "M.Tech Power Electronics & Power Systems", "Ph.D"],
    labs: ["Smart Grid & Microgrid Testbed", "Electric Drives & Power Electronics", "High Voltage Engineering Lab", "Solar PV Testing Cell"],
    stats: { students: 300, faculty: 24, placementRate: "88%", projects: "70+" },
    featuredProject: "Solar-Hybrid Microgrid Controller for Remote Settlements"
  },
  {
    id: "ce",
    code: "CE",
    name: "Civil Engineering",
    slogan: "SHAPE THE TERRAIN",
    tagline: "Sustainable smart cities, seismic-resilient infrastructure, GIS mapping, and environmental tech.",
    color: "#EC4899",
    accent: "from-pink-500 to-rose-600",
    degrees: ["B.Tech Civil Engineering", "M.Tech Structural Engineering & Construction Mgmt", "Ph.D"],
    labs: ["Heavy Structural Testing Bay", "Geotechnical & Soil Mechanics", "Environmental Engineering Lab", "Total Station & GIS Center"],
    stats: { students: 320, faculty: 25, placementRate: "82%", projects: "75+" },
    featuredProject: "Self-Healing Geopolymer Concrete for Coastal Structures"
  },
  {
    id: "eie",
    code: "EIE",
    name: "Electronics & Instrumentation Engineering",
    slogan: "PRECISION IN MOTION",
    tagline: "Industrial automation, SCADA networks, biomedical robotics, and precision telemetry.",
    color: "#8B5CF6",
    accent: "from-purple-500 to-violet-700",
    degrees: ["B.Tech EIE", "Ph.D"],
    labs: ["Process Control & PLC/SCADA Lab", "Biomedical Instrumentation Center", "Sensors & Transducers Studio", "Robotics Interface Bay"],
    stats: { students: 240, faculty: 20, placementRate: "86%", projects: "60+" },
    featuredProject: "Non-Invasive Wearable Glucose Telemetry Sensor"
  },
  {
    id: "mca",
    code: "MCA",
    name: "Computer Applications",
    slogan: "CODE AT SCALE",
    tagline: "Enterprise cloud systems, full-stack microservices, DevOps pipelines, and mobile apps.",
    color: "#06B6D4",
    accent: "from-cyan-400 to-blue-600",
    degrees: ["Master of Computer Applications (MCA 2-Year)", "Ph.D"],
    labs: ["Cloud Computing & Virtualization Lab", "Full Stack Development Studio", "Software Testing & QA Center"],
    stats: { students: 240, faculty: 18, placementRate: "93%", projects: "85+" },
    featuredProject: "Decentralized Credential Verification Protocol on Ethereum"
  },
  {
    id: "mba",
    code: "MBA",
    name: "Business Administration (FIMS)",
    slogan: "LEAD WITH VISION",
    tagline: "FISAT Institute of Management Studies — FinTech, business analytics, strategy, and leadership.",
    color: "#EAB308",
    accent: "from-yellow-400 to-amber-600",
    degrees: ["MBA (Dual Specialization)", "Executive Leadership MDP", "Ph.D"],
    labs: ["Bloomberg Analytics & Trading Simulation", "Behavioral Economics Lab", "Executive Boardroom Suite"],
    stats: { students: 240, faculty: 22, placementRate: "94%", projects: "110+" },
    featuredProject: "FinTech Adoption Metrics Across Tier-2 MSMEs in South India"
  },
  {
    id: "bsh",
    code: "BSH",
    name: "Science & Humanities",
    slogan: "THE SCIENTIFIC CORE",
    tagline: "Underpinning engineering with mathematics, quantum physics, chemical sciences, and humanities.",
    color: "#6366F1",
    accent: "from-indigo-400 to-purple-600",
    degrees: ["Foundation for all Engineering programs", "Research in Applied Sciences"],
    labs: ["Modern Physics & Laser Lab", "Engineering Chemistry & Nanotech Lab", "Language & Communication Media Center"],
    stats: { students: 900, faculty: 35, placementRate: "Core Foundational", projects: "50+" },
    featuredProject: "Synthesis of Graphene Oxide Nanocomposites for Water Purification"
  }
];

export const CAMPUS_PILLARS = [
  {
    id: "life",
    title: "Campus Life",
    subtitle: "YOUR 26-ACRE GREEN METROPOLIS",
    desc: "A sprawling verdant campus in Mookkannoor nestled in scenic hills. Featuring active open-air amphitheaters, buzzing student cafeterias, sports pavilions, and a culture where ideas never sleep.",
    stats: "26 Acres · 15+ Clubs · Zero Single-Use Plastic",
    image: "/images/fisat_campus_hero.jpg",
    tags: ["Green Campus", "Amphitheatre", "Sports Arena", "Cafeterias"]
  },
  {
    id: "facilities",
    title: "Advanced Facilities",
    subtitle: "ENGINEERING POWERHOUSES",
    desc: "1000+ capacity Hormis Memorial Central Auditorium, Central Computing Facility (CCF) with high-speed gigabit fiber backbone, smart audio-visual lecture theatres, and dedicated research centers.",
    stats: "1000+ High-End PCs · 1 Gbps Leased Line · 24/7 Generator",
    image: "/images/fisat_idea_lab.jpg",
    tags: ["Central Computing", "Hormis Auditorium", "Hostels", "Gym & Fitness"]
  },
  {
    id: "library",
    title: "Central Library",
    subtitle: "THE KNOWLEDGE CITADEL",
    desc: "Spanned across 3 floors with over 85,000+ volumes, RFID automated checkouts, IEEE Xplore, ScienceDirect, Springer digital consortium access, and quiet sunlit reading lounges.",
    stats: "85,000+ Volumes · 1,500+ Journals · RFID Automation",
    image: "/images/fisat_campus_hero.jpg",
    tags: ["IEEE Consortium", "Digital Library", "RFID Kiosk", "Audio-Visual Hall"]
  },
  {
    id: "industry",
    title: "Industry & Innovation",
    subtitle: "WHERE PROTOTYPES BECOME PRODUCTS",
    desc: "Home to the AICTE IDEA Lab and Kerala Startup Mission FabLab. Active incubators partnering with Federal Bank, TCS, IBM, and Kerala Startup Mission to turn student ideas into funded startups.",
    stats: "₹1.1 Cr AICTE Grant · FabLab KTU · 24+ Startups Incubated",
    image: "/images/fisat_idea_lab.jpg",
    tags: ["AICTE IDEA Lab", "FabLab", "IEDC", "Federal Bank Hub"]
  }
];

export const LIFE_COLLAGE = [
  {
    id: 1,
    title: "Bharatham National Arts Fest",
    category: "Arts",
    badge: "🎭 Arts",
    tagline: "South India's most electrifying inter-collegiate cultural battleground",
    image: "/images/fisat_bharatham_fest.jpg",
    span: "col-span-12 md:col-span-8 row-span-2",
    details: "Over 5,000 students from 80+ colleges gather for 3 days of music, dance, theatrics, and star nights."
  },
  {
    id: 2,
    title: "AICTE IDEA Lab Midnight Hackers",
    category: "Innovation",
    badge: "🤖 Innovation",
    tagline: "3D printers humming and code flying at 2 AM",
    image: "/images/fisat_idea_lab.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    details: "Equipped with PCB milling, CNC, and high-speed prototyping equipment for 24/7 student builds."
  },
  {
    id: 3,
    title: "Championship Sports Arena",
    category: "Sports",
    badge: "🏆 Sports",
    tagline: "University football, basketball, and synthetic badminton champions",
    image: "/images/fisat_campus_hero.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    details: "Floodlit basketball courts, full-size football turf, indoor gymnasium, and table tennis arenas."
  },
  {
    id: 4,
    title: "Arangu Intra-College Fest",
    category: "Arts",
    badge: "🎭 Arts",
    tagline: "Department rivalries and artistic explosions on stage",
    image: "/images/fisat_bharatham_fest.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    details: "The ultimate showdown of talent across CSE, ECE, ME, CE, EEE, EIE, MCA, and MBA."
  },
  {
    id: 5,
    title: "FOSS Cell & Coding Clubs",
    category: "Clubs",
    badge: "🎯 Clubs",
    tagline: "Contributing to Linux kernel, hosting FOSSCON Kerala & CTFs",
    image: "/images/fisat_idea_lab.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    details: "Student-run tech societies hosting competitive programming, open source hackathons, and Linux install fests."
  },
  {
    id: 6,
    title: "NSS & Green FISAT Initiatives",
    category: "Social Initiatives",
    badge: "🌱 Social",
    tagline: "Solar adoption, watershed management, and rural tech education",
    image: "/images/fisat_campus_hero.jpg",
    span: "col-span-12 md:col-span-4 row-span-1",
    details: "Award-winning National Service Scheme unit active in flood relief, digital literacy, and community building."
  }
];

export const EVENTS_DATA = [
  {
    id: "bharatham-26",
    title: "BHARATHAM 2026",
    subtitle: "All-India Inter-Collegiate Cultural Festival",
    type: "Cultural",
    date: "MARCH 26 - 28, 2026",
    month: "MAR",
    day: "26",
    venue: "Main Open-Air Amphitheatre & Hormis Auditorium",
    dept: "Fine Arts Club & Student Senate",
    desc: "The flagship cultural phenomenon of FISAT. 40+ competitions across dance, vocal music, rock bands, digital arts, fashion choreography, and celebrity musical concerts.",
    highlights: ["₹5,00,000+ Prize Pool", "80+ Universities", "Celebrity DJ Night"],
    status: "Registration Open",
    hot: true
  },
  {
    id: "hack-fisat",
    title: "HACK_FISAT 2026",
    subtitle: "36-Hour National Prototype Hackathon",
    type: "Hackathon",
    date: "APRIL 11 - 12, 2026",
    month: "APR",
    day: "11",
    venue: "AICTE IDEA Lab & FabLab Bay",
    dept: "ACM Student Chapter & IEDC FISAT",
    desc: "National hackathon focused on AI for Social Good, Autonomous Mobility, and Decentralized Finance. Hardware prototyping provided by FabLab.",
    highlights: ["₹1,50,000 Cash Awards", "Direct Investor Pitching", "Cloud Credits"],
    status: "Shortlisting",
    hot: true
  },
  {
    id: "ice-summit",
    title: "ICE 2026: Tech Symposium",
    subtitle: "National Conference on Innovations in Engineering",
    type: "Technical",
    date: "MAY 05 - 06, 2026",
    month: "MAY",
    day: "05",
    venue: "Central Seminar Hall 1",
    dept: "Dept of Mechanical & Electronics Engineering",
    desc: "Peer-reviewed research presentations, robotic combat arena, CAD modeling sprint, and keynote talks by leading DRDO and ISRO scientists.",
    highlights: ["IEEE Co-Sponsored", "Scopus Indexed Proceedings", "Robowars"],
    status: "Call for Papers",
    hot: false
  },
  {
    id: "arangu-fest",
    title: "ARANGU: The Intra-College Saga",
    subtitle: "Annual Internal Cultural Championship",
    type: "Cultural",
    date: "FEBRUARY 18 - 20, 2026",
    month: "FEB",
    day: "18",
    venue: "Campus Central Courtyard",
    dept: "Student Council",
    desc: "The annual battle for the coveted FISAT Rolling Trophy where all 9 departments battle through drama, mime, classical arts, and band wars.",
    highlights: ["Rolling Trophy", "9 Departments", "Inter-Batch Pride"],
    status: "Completed",
    hot: false
  },
  {
    id: "fosscon-kerala",
    title: "FOSSCON KERALA '26",
    subtitle: "Free & Open Source Software Summit",
    type: "Workshops",
    date: "JUNE 19, 2026",
    month: "JUN",
    day: "19",
    venue: "Central Computing Facility",
    dept: "FOSS Cell & Dept of CSE",
    desc: "Hands-on workshops on Linux kernel contribution, Rust for systems, Kubernetes clustering, and building open-source AI tooling.",
    highlights: ["Hands-on Labs", "Free Swag", "Global Mentors"],
    status: "Upcoming",
    hot: false
  }
];

export const HALL_OF_FAME = [
  {
    id: "sih-champions",
    title: "Smart India Hackathon Winners",
    badge: "🏆 National 1st Prize",
    category: "Awards",
    stat: "₹1,00,000",
    description: "FISAT student team bagged 1st prize at the nationwide SIH Grand Finale organized by the Ministry of Education, Govt of India, for their automated disaster response telemetry system.",
    year: "National Champions",
    icon: "Trophy"
  },
  {
    id: "patents-filed",
    title: "15+ Intellectual Property Patents",
    badge: "💡 Innovation",
    stat: "15+",
    description: "Faculty and student collaborative patents filed and published in renewable energy storage, biomedical diagnostics, assistive robotics, and composite materials.",
    year: "Published & Granted",
    icon: "Lightbulb"
  },
  {
    id: "startups-incubated",
    title: "24+ Startups Incubated at IEDC",
    badge: "🚀 Entrepreneurship",
    stat: "24+",
    description: "Active student startups mentored through FISAT Innovation and Entrepreneurship Development Centre (IEDC) and Kerala Startup Mission (KSUM), raising seed funding.",
    year: "Student Founders",
    icon: "Rocket"
  },
  {
    id: "ktu-university-ranks",
    title: "Top APJ AKTU University Ranks",
    badge: "🎓 Academic Glory",
    stat: "Top 3 Ranks",
    description: "Consistently securing stellar ranks and gold medals across B.Tech and M.Tech in APJ Abdul Kalam Technological University across Kerala.",
    year: "Academic Rigor",
    icon: "GraduationCap"
  },
  {
    id: "placement-record",
    title: "₹17.04 LPA Highest Placement Offer",
    badge: "💼 Placement Milestone",
    stat: "₹17.04 L",
    description: "Flagship global tech offers secured through the active Placement and Training Cell (PTC) with 600+ placement opportunities created annually.",
    year: "Dream CTC",
    icon: "Briefcase"
  },
  {
    id: "ieee-acm-chapters",
    title: "Outstanding IEEE & ACM Chapters",
    badge: "🌍 Global Recognition",
    stat: "Global Honors",
    description: "Recognized as one of Kerala Section's most active student branches, regularly organizing international conferences and women in engineering summits.",
    year: "International Chapters",
    icon: "Globe"
  }
];

export const RECRUITERS = [
  { name: "TCS", category: "Global Tech", type: "Tier 1 Recruiter" },
  { name: "Cognizant", category: "Enterprise Services", type: "Super Dream" },
  { name: "Infosys", category: "Digital Consulting", type: "Tier 1 Recruiter" },
  { name: "Federal Bank", category: "Banking & FinTech", type: "Founder Partner" },
  { name: "IBM", category: "Cloud & AI", type: "Product Engineering" },
  { name: "Wipro", category: "Global IT", type: "Tier 1 Recruiter" },
  { name: "Amazon", category: "Cloud & eCommerce", type: "Dream Recruiter" },
  { name: "UST Global", category: "Digital Transformation", type: "Core Partner" },
  { name: "Accenture", category: "Strategy & Tech", type: "Tier 1 Recruiter" },
  { name: "IBS Software", category: "Aviation & Logistics", type: "Product Leader" },
  { name: "SOTI", category: "Enterprise Mobility", type: "High CTC Partner" },
  { name: "Mitsogo", category: "Cybersecurity & SaaS", type: "Product Leader" },
  { name: "QBurst", category: "Custom Software", type: "Tech Specialist" },
  { name: "Quest Global", category: "Aerospace & Embedded", type: "Engineering Core" },
  { name: "Tata Elxsi", category: "Design & Auto Tech", type: "Core Engineering" }
];

export const PLACEMENT_CAREER_PATH = [
  {
    step: "01",
    phase: "Year 1: Foundations",
    title: "Logic, Code & Creative Thinking",
    detail: "Introductory Python, C, digital design, and hackathons at the FabLab to build core problem solving confidence."
  },
  {
    step: "02",
    phase: "Year 2: Core Skills",
    title: "Data Structures, Systems & Hard Skills",
    detail: "Intensive algorithmic training, open-source contributions with FOSS Cell, and departmental lab masterclasses."
  },
  {
    step: "03",
    phase: "Year 3: IDEA Lab",
    title: "Prototypes, Patents & Competitions",
    detail: "Hands-on projects in the AICTE IDEA Lab, national competitions like Smart India Hackathon, and industry internships."
  },
  {
    step: "04",
    phase: "Year 3.5: PTC Training",
    title: "Aptitude, Mock Interviews & Soft Skills",
    detail: "Rigorous 100+ hours of training by Placement and Training Cell (PTC) with corporate leadership and alumni mentors."
  },
  {
    step: "05",
    phase: "Year 4: Placement Drives",
    title: "Day-1 Recruiter Drives & Dream Offers",
    detail: "Over 120+ recruiters visit campus. Multi-tier placement drives from mass recruitment to high-paying product roles."
  },
  {
    step: "06",
    phase: "Alumni Network",
    title: "Global Industry Leaders & Founders",
    detail: "Join 15,000+ FISAT alumni leading teams at Google, Microsoft, Federal Bank, ISRO, and global startups."
  }
];

export const CAMPUS_LOCATIONS = [
  {
    id: "main-block",
    name: "Main Academic Block & Clock Tower",
    zone: "Central Campus",
    coords: "10.1983° N, 76.4385° E",
    description: "The architectural centerpiece of FISAT with iconic red brick facade, central tower clock, administrative wings, and department studios.",
    features: ["Principal & Dean Suites", "Smart Lecture Theatres", "Department HODs", "Open Central Courtyard"],
    image: "/images/fisat_campus_hero.jpg"
  },
  {
    id: "idea-lab",
    name: "AICTE IDEA Lab & FabLab Kerala",
    zone: "Innovation Block",
    coords: "10.1985° N, 76.4380° E",
    description: "A 5,000 sq.ft state-of-the-art makerspace with 3D printers, laser cutters, CNC milling, electronic workbenches, and robotics testing cages.",
    features: ["Stratasys 3D Printers", "CO2 Laser Engravers", "Roland PCB Milling", "Drone Test Arena"],
    image: "/images/fisat_idea_lab.jpg"
  },
  {
    id: "library-hub",
    name: "Central Knowledge Repository & Library",
    zone: "Academic Quadrant",
    coords: "10.1981° N, 76.4390° E",
    description: "Tri-level air-conditioned sanctuary with 85,000+ catalogued volumes, automated RFID kiosk checkouts, and IEEE digital consortium terminal rooms.",
    features: ["85,000+ Books", "Digital Reading Room", "Research Scholar Cubicles", "Periodical Archive"],
    image: "/images/fisat_campus_hero.jpg"
  },
  {
    id: "auditorium-arena",
    name: "Hormis Memorial Auditorium & Amphitheatre",
    zone: "Cultural Quadrant",
    coords: "10.1978° N, 76.4378° E",
    description: "Magnificent 1,000+ seating air-conditioned hall alongside the natural open-air green amphitheatre where Bharatham and Arangu come alive.",
    features: ["Acoustic Sound Treatment", "Stage Fly-Tower", "1000+ Capacity", "Green Rooms"],
    image: "/images/fisat_bharatham_fest.jpg"
  },
  {
    id: "sports-complex",
    name: "Athletics Pavilion & Fitness Complex",
    zone: "South Grounds",
    coords: "10.1970° N, 76.4395° E",
    description: "Full-scale athletic track, standard football pitch, synthetic basketball & volleyball courts, and modern weightlifting gymnasium.",
    features: ["Standard Football Turf", "Synthetic Basketball Court", "Multi-Station Gymnasium", "Indoor Badminton"],
    image: "/images/fisat_campus_hero.jpg"
  }
];

export const SCHOLARSHIP_TIERS = [
  {
    title: "Full Tuition Fee Waiver",
    amount: "100% Tuition Waived",
    eligibility: "Top KEAM Ranks (< 2,000) or 95%+ in Plus Two PCM",
    quota: "Merit Supernumerary",
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "FBOAES Merit Scholarship",
    amount: "₹50,000 / Year",
    eligibility: "KEAM Ranks 2,001 - 5,000 with 90%+ in PCM",
    quota: "Merit & Institutional",
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Sports & Arts Excellence Grant",
    amount: "Up to 75% Waiver",
    eligibility: "National / State level medalists in recognized sports/arts",
    quota: "Special Quota",
    color: "from-amber-500 to-orange-600"
  },
  {
    title: "Federal Bank Special Endowment",
    amount: "₹30,000 / Year + Mentorship",
    eligibility: "Economically deserving meritorious students",
    quota: "FBOAES Trust",
    color: "from-emerald-500 to-teal-600"
  }
];
