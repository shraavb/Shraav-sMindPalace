let info = {
  logo_name: "shraav",
  flat_picture: require("./assets/shraav_avatar_.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm Shraav! I'm studying Computer Science and Management at the University of Pennsylvania. I have worked as a product manager at TE Connectivity, Manatal, and Develop for Good, working with teams across Design, Engineering, Marketing, and Sales. I have also had the chance to dive into cool projects in areas like Embedded Systems and Computer Vision. Feel free to scroll through and check them out!",
  links: {
    linkedin: "https://www.linkedin.com/in/shraavasti-bhat/",
    github: "https://github.com/shraavb"
  },
  education: [
    {
      name: "University of Pennsylvania",
      place: "",
      date: "Aug, 2021 - May, 2026",
      degree: "Dual Degree in Computer Science & Management",
      gpa: "",
      description:
        "Currently pursuing a Bachelors Degree in Computer Science and Management.",
      skills: [
        "Human-Computer Interaction",
        "Computer Vision",
        "Machine Learning",
        "Algorithms",
        "Data Science"
      ]
    }
  ],
  experience: [
    {
      name: "TE Connectivity",
      place: "Middletown, PA",
      date: "May 2025 – Aug 2025",
      position: "Product Management Intern",
      description:
        "Worked cross-functionally across Marketing, Sales, Engineering and Product. Led IP risk analysis for legal team, identifying $1.9M in potential infringement for high-speed cable products. Uncovered $5.6M in lost profit across 12 top-performing SKUs",
      skills: ["Excel"]
    },
    {
      name: "Manatal",
      place: "",
      date: "Dec 2023 - June 2024",
      position: "Product & Project Management Intern",
      description:
        "Led 0-1 development of job board, <a href='https://sleekjob.com/' target='_blank'>SleekJob</a>, with team of 10, reporting to CTO. Achieved 1.2k users in 10+ countries. Benchmarked 15 Project Management solutions to reduce dropoff for 4000+ clients.",
      skills: ["Jira", "Git", "Python", "HTML", "CSS", "JS", "XML"]
    },
    {
      name: "Develop For Good",
      place: "San Francisco, CA (Remote)",
      date: "Mar 2025 - Apr 2025",
      position: "Product Lead & Designer (Volunteer)",
      description:
        "Designed and implemented solutions for non-profits, leading student teams to support clients with limited resources. Led two client projects for <a href='https://simbi.com/' target='_blank'>Simbi</a> and <a href='https://buildingbeats.org/' target='_blank'>Building Beats</a>, managing teams of 20+ students for platforms with 260k users.",
      skills: ["Figma"]
    }
  ],
  skills: [
    {
      title: "programming languages",
      info: [
        "Python",
        "Javascript",
        "TypeScript",
        "Java",
        "C",
        "C++",
        "SQL"
      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "X API",
        "Python",
        "Vader",
        "Sentiment Analysis",
        "Numpy",
        "Pandas",
        "OpenCV"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["JavaScript", "React", "Node", "Flask", "FastAPI", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "ai & ml frameworks",
      info: ["LangChain", "Claude API", "OpenAI API", "Whisper ASR", "ElevenLabs TTS", "LangSmith", "MCP", "TensorFlow"],
      icon: "fas fa-robot"
    },
    {
      title: "ai tools",
      info: ["Cursor", "Lovable", "Claude Code"],
      icon: "fas fa-wand-magic-sparkles"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Windows",
        "Android",
        "Agile",
        "Scrum",
        "JIRA",
        "Heroku",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Figma", "Illustrator", "Photoshop"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "product management",
      info: ["Jira", "Git", "Slack", "Asana", "Notion", "SQL", "Pandas"],
      icon: "fa fa-tasks"
    }
  ],
  portfolio: [
    {
      name: "Orbit: Voice-First AI Personal Agent",
      pictures: [
        {
          img: require("./assets/Orbit_Project_Image.png")
        }
      ],
      technologies: ["LangChain", "AI Agents", "MCP", "Claude API", "Whisper ASR", "ElevenLabs TTS", "FastAPI", "React", "PostgreSQL", "LangSmith"],
      category: "AI Application",
      date: "Dec 2025 - Present",
      github: "",
      visit: "",
      video: "Orbit_Agent_Demo.mp4",
      description:
        "<ul><li>Built voice-first AI assistant using <strong>Claude Sonnet 4.5</strong> with <strong>LangChain tool-calling agents</strong></li><li>Integrated <strong>Model Context Protocol (MCP)</strong> with custom FastMCP server for memory tools</li><li>Implemented <strong>self-hosted Whisper ASR</strong> and <strong>ElevenLabs TTS</strong> with lip-sync animation</li><li>Built multi-channel messaging integrations: SMS, Email, Slack, WhatsApp via custom BaseTool subclasses</li><li>Developed real-time voice-to-voice pipeline with <strong>FastAPI</strong> backend and <strong>React</strong> frontend</li><li>Added <strong>LangSmith</strong> observability with distributed tracing</li></ul>"
    },
    {
      name: "SpeakEasy V2: Advanced Language Learning Platform <span class='badge badge-warning ml-2'>in-progress</span>",
      pictures: [
        {
          img: require("./assets/SpeakEasy_Master_Conversational_Fluency.png")
        }
      ],
      technologies: ["Lovable", "AI Integration", "Advanced NLP", "Real-time Feedback", "Conversation Simulation"],
      category: "Web Application",
      date: "Aug 2025 - Present",
      github: "",
      visit: "https://github.com/shraavb/-Senior-Design-SpeakEasy",
      video: "SpeakEasy Demo V2.mov",
      description:
        "<ul><li>Senior Design Project: Web platform for advanced language learners</li><li>Features sophisticated <strong>conversation simulation</strong> with AI-powered dialogue</li><li>Implementing real-time <strong>pronunciation feedback</strong> and contextual learning scenarios</li><li>Built using <strong>Lovable</strong> AI-assisted development platform</li></ul>"
    },
    {
      name: "OpenAPS - Embedded Systems for Closed-Loop Insulin Control",
      pictures: [
        {
          img: require("./assets/OpenAPS_project.png")
        }
      ],
      technologies: ["C++", "Arduino", "FreeRTOS", "MQTT", "Embedded Systems"],
      category: "Embedded Systems",
      date: "Oct 2025",
      github: "https://github.com/jimmyyu123/CIS541OpenAPS_proj_Steady_State",
      visit: "",
      description:
        "<ul><li>Built embedded control system on <strong>Arduino Nano</strong> to simulate insulin dosing logic</li><li>Implemented real-time <strong>CGM ingestion</strong> and insulin publishing pipeline via digital twins</li><li>Coordinated asynchronous tasks using <strong>FreeRTOS</strong></li><li>Established device communication using <strong>MQTT</strong> protocol</li></ul>"
    },
    {
      name: "JetBot w/ JetsonNano <span class='badge badge-warning ml-2'>in-progress</span>",
      pictures: [
        {
          img: require("./assets/jetbot_jetson_nano.jpg")
        },
        {
          img: require("./assets/jetbot_sim_1.jpg")
        },
        {
          img: require("./assets/jetbot_sim_2.jpg")
        },
        {
          img: require("./assets/jetbot_sim_3.jpg")
        },
        {
          img: require("./assets/jetbot_sim_4.jpg")
        }
      ],
      technologies: ["Python", "ROS", "Computer Vision", "TensorFlow", "NVIDIA Jetson"],
      category: "AI and IOT",
      date: "Sep-Oct 2025",
      github: "https://github.com/shraavb/jetbot_waveshare",
      visit: "",
      description:
        "<ul><li>Building autonomous robot using <strong>NVIDIA JetBot</strong> platform with <strong>Jetson Nano</strong></li><li>Implementing <strong>computer vision</strong> algorithms for object detection</li><li>Developing <strong>autonomous navigation</strong> capabilities</li><li>Exploring intersection of <strong>robotics</strong> and <strong>AI</strong></li></ul>"
    },
    {
      name: "Coral Reef Mapping Drone",
      pictures: [
        {
          img: require("./assets/makerbay-coralbot.jpeg")
        },
        {
          img: require("./assets/coral drone workflow.jpeg")
        }
      ],
      technologies: ["Go Pro", "Image Segmentation", "Raspberry Pi", "3D Printing", "Computer Vision", "Laser Cutting"],
      category: "Robotics",
      date: "2020",
      github: "https://github.com/MakerBay/Coral_Reef_Mapping_Drone",
      visit: "https://makerbay.net/coralbot-coral-reef-mapping-drone/",
      description:
        "<ul><li>Open source ocean water drone for mapping and analyzing coral reef health</li><li>Integrated <strong>GoPro</strong> camera with <strong>image segmentation</strong> for reef analysis</li><li>Built with <strong>Raspberry Pi</strong> for onboard processing</li><li>Fabricated components using <strong>3D printing</strong> and <strong>laser cutting</strong></li></ul>"
    },
    {
      name: "Predicting Underdog Wins",
      pictures: [
        {
          img: require("./assets/dev_project2_tennisupset.jpg")
        }
      ],
      technologies: ["Pandas", "PandaSQL", "Polar", "DuckDB"],
      category: "ML Project",
      date: "March 2025 - Apr 2025",
      github: "https://github.com/shraavb/Predicting-Tennis-Upsets-with-Machine-Learning",
      visit: "",
      description:
        "<ul><li>Developed <strong>ML model</strong> to predict upsets in tennis matches</li><li>Analyzed player statistics and tournament details using <strong>Pandas</strong> and <strong>PandaSQL</strong></li><li>Implemented data processing pipelines with <strong>Polars</strong> and <strong>DuckDB</strong></li></ul>"
    },
    {
      name: "Bridge V1: Multi-Modal Language Learning Tool",
      pictures: [
        {
          img: require("./assets/Dev_Proj3_Bridge.png")
        }
      ],
      technologies: ["Grok API", "OpenAI API", "HTML", "CSS", "JavaScript", "Cursor"],
      category: "Web Application",
      date: "2024 - 2025",
      github: "https://github.com/shraavb/Bridge",
      visit: "https://bridge-production-8580.up.railway.app",
      description:
        "<ul><li>Built language learning tool using <strong>multimodal</strong> information</li><li>Integrated <strong>Grok API</strong> and <strong>OpenAI API</strong> for intelligent responses</li><li>Adapts to different scenarios: business, casual, and dating contexts</li><li>Leveraged <strong>prompting techniques</strong> to optimize LLM performance</li><li>Built with <strong>Cursor</strong> AI-assisted development</li></ul>"
    },
    {
      name: "Human Computer Interaction Research",
      pictures: [
        {
          img: require("./assets/proj1_anonymity_research.png"),
          pdf: "Unmasking_Social_Media_Accountability___Short_Paper.pdf"
        }
      ],
      presentation: "IFoRE_Twitter.pdf",
      technologies: ["X API", "Python", "Vader", "Sentiment Analysis"],
      category: "",
      date: "Sep 2022 – Jun 2024 • Academic Research",
      github: "",
      visit: "",
      description:
        "<ul><li>Explored how user anonymity influences tweet sentiment and polarization during COVID-19</li><li>Collected and analyzed data using <strong>X API</strong> (Twitter)</li><li>Implemented <strong>sentiment analysis</strong> using <strong>VADER</strong></li><li>Refined research over 9 months with HCI academics</li><li>Submitted findings to journals for publication</li></ul>"
    }
  ],
  portfolio_design: [
    {
      name: "RenewConnect",
      title: "RenewConnect - Mockup Design",
      pictures: [
        {
          img: require("./assets/Design1_RenewConnect.png"),
          title: "RenewConnect Design",
          link: "https://www.figma.com/design/irN4xAPXArsqolPwFo6y2j/Web101---Codepath?m=auto&t=elNEpxF1W2FfXAul-1"
        }
      ],
      technologies: ["Figma", "Illustrator"],
      category: "Product Design & 3D Printing",
      github: "",
      date: null,
      visit: "",
      figma: "https://www.figma.com/design/irN4xAPXArsqolPwFo6y2j/RenewConnect?node-id=48-7&t=7zY9vpRk9XVm1Q1C-1",
      description:
        "<ul><li>Completed in <strong>1-hour web design challenge</strong></li><li>Designed solution for transitioning rural populations to <strong>renewable energy</strong></li><li>Focused on <strong>Solar Home Systems</strong> for low-middle income households</li><li>Built using <strong>Figma</strong> and <strong>Illustrator</strong></li></ul>"
    },
    {
      name: "Pantree",
      title: "Product Design & 3D Printing",
      pictures: [
        {
          img: require("./assets/Design2_DuoFlask.jpeg"),
          title: "DuoFlask Design"
        }
      ],
      technologies: ["XD", "Illustrator"],
      category: "Product Design & 3D Printing",
      github: "",
      date: "",
      visit: "",
      description:
        "<ul><li>Designed product concepts using <strong>Adobe XD</strong> and <strong>Illustrator</strong></li><li>Supported sponsorship outreach and developed sponsor packages</li><li>Managed website and weekly part purchases for Mechanical/Electrical teams</li><li>Awarded <strong>3rd place overall</strong> at Formula SAE Lincoln 2022</li></ul>"
    },
    {
      name: "Bunder",
          title: "Media & Operations @ Penn Electric Racing",
      pictures: [
        {
          img: require("./assets/Design3_PER.png"),
          title: "PER Design"
        }
      ],
      technologies: ["Adobe Creative Suite", "CAD"],
      category: "Visual Design",
      github: "",
      date: "",
      visit: "",
      description:
        "<ul><li>Media & Operations role at <strong>Penn Electric Racing</strong></li><li>Created visual designs using <strong>Adobe Creative Suite</strong></li><li>Worked with <strong>CAD</strong> for technical documentation</li><li>Awarded <strong>3rd place overall</strong> at Formula SAE Lincoln 2022</li></ul>"
    },
    {
      name: "Proposal to the City of Philadelphia",
      title: "Carbon Offset Platform Design",
      pictures: [
        {
          img: require("./assets/Venture3_Proposal to COP.png"),
          title: "Philadelphia Carbon Offset Platform"
        }
      ],
      technologies: ["Client Communication", "Design", "Prototyping"],
      category: "Consulting Proposal",
      github: "",
      date: "Sep 2022",
      visit: "",
      presentation: "Venture3_Proposal to COP_Presentation.pdf",
      figma: "https://www.figma.com/design/UoJA67LhKlwBUO75MAtJ1N/PCV--Project-for-City-of-Philadelphia---Local-Carbon-Offset-Platform?node-id=101-2&t=Gw9V976dL0JRTQ4G-1",
      description:
        "<ul><li>Consultant and Project Lead at <strong>PCV</strong>, leading team of 4+ students</li><li>Developed strategy to boost student subscriptions to circular economy membership</li><li>Created <strong>carbon offset platform</strong> for Philadelphia-based corporations</li><li>Designed four local offset projects to reduce reliance on foreign offsets</li><li>Built prototypes in <strong>Figma</strong></li></ul>"
    }
  ],
  portfolio_venture: [
    {
      name: "Y-Prize Finalist - Accuspark",
      pictures: [
        {
          img: require("./assets/Venture1_Accuspark.png"),
          title: "Accuspark Y-Prize Proposal"
        }
      ],
      presentation: "Venture1_Accuspark_Presentation.pdf",
      video: "https://drive.google.com/file/d/1_z-LBbqGh7fqb76_pNw-O14ScBkS15HI/view?usp=sharing",
      technologies: ["Video Editing", "Medical Research", "Competitive Analysis", "Pitching"],
      category: "Pitch Competition",
      github: "",
      date: "Jan 2022",
      visit: "",
      description:
        "<ul><li>Developed commercialization proposal for <strong>Penn GRASP Lab's Steerable Needle</strong></li><li>Focused on <strong>Neuroblastoma surgery</strong> applications</li><li>Consulted neurosurgeons, medical device companies, and researchers over 5-6 months</li><li>Selected as <strong>Y-Prize finalist</strong>, earning mentorship to refine idea</li><li>Created pitch video and competitive analysis</li></ul>"
    },
    {
      name: "A Proposal to GE",
      pictures: [
        {
          img: require("./assets/Venture2_Proposal to GE.png"),
          title: "GE Flow Battery Proposal"
        }
      ],
      presentation: "Venture2_Proposal to GE Presentation.pdf",
      technologies: ["Research"],
      category: "Business Proposal",
      github: "",
      date: "Spring 2023",
      visit: "",
      description:
        "<ul><li>M&T Sophomore Immersive Week project (Spring 2023)</li><li>Explored <strong>Flow Battery technology</strong> and applied business concepts</li><li>Proposed <strong>Joint Venture</strong> between General Electric and ESS Inc.</li><li>Focused on enhancing <strong>renewable energy</strong> accessibility</li></ul>"
    },
    {
      name: "Proposal to the City of Philadelphia",
      pictures: [
        {
          img: require("./assets/Venture3_Proposal to COP.png"),
          title: "Philadelphia Carbon Offset Platform Proposal"
        }
      ],
      presentation: "Venture3_Proposal to COP_Presentation.pdf",
      figma: "https://www.figma.com/design/UoJA67LhKlwBUO75MAtJ1N/PCV--Project-for-City-of-Philadelphia---Local-Carbon-Offset-Platform?node-id=101-2&t=Gw9V976dL0JRTQ4G-1",
      technologies: ["Client Communication", "Design", "Prototyping"],
      category: "Consulting Proposal",
      github: "",
      date: "Sep 2022",
      visit: "",
      description:
        "<ul><li>Consultant and Project Lead at <strong>PCV</strong>, leading team of 4+ students</li><li>Developed strategy to boost student subscriptions to circular economy membership</li><li>Created <strong>carbon offset platform</strong> for Philadelphia-based corporations</li><li>Designed four local offset projects to reduce reliance on foreign offsets</li></ul>"
    }
  ],
  recommendations: [
    {
      title:
        "In his internship, Hrishikesh has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Ushanas Shastri",
      position: "CTO",
      company: "Viteos Capital Market Services",
      location: "Mumbai"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Anil Dukkipatty",
      position: "CTO",
      company: "Elemential Labs",
      location: "Mumbai"
    },
    {
      title:
        "He has gained great knowledge and experience of SDE, and has learned ot develop the application keeping in mind the client's perpective and also making it creative.",
      author: "Chintan Shah",
      position: "Director",
      company: "Hridayam Soft Solution",
      location: "Mumbai"
    },
    {
      title:
        "During the course of his employment we have found him to be a self-started who was motivated, duty bound and a highly commited team player.",
      author: "Mrinal Pai",
      position: "Co-Founder & Director",
      company: "Skylark Drones",
      location: "Bangalore"
    }
  ]
};

export default info;
