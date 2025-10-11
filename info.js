let info = {
  logo_name: "shraav",
  flat_picture: require("./assets/shraav_avatar.svg"),
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
      title: "languages",
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
      info: ["Vue", "Angular", "React", "Node", "Flask", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL", "Neo4j"],
      icon: "fa fa-database"
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
        "Built an embedded control system on Arduino Nano to simulate insulin dosing logic in a virtual patient loop. Implemented real-time CGM ingestion & insulin publishing pipeline via digital twins, coordinating asynchronous tasks using FreeRTOS and MQTT communication protocols."
    },
    {
      name: "JetBot w/ JetsonNano <span class='badge badge-warning ml-2'>in-progress</span>",
      pictures: [
        {
          img: require("./assets/jetbot_jetson_nano.jpg")
        }
      ],
      technologies: ["Python", "ROS", "Computer Vision", "TensorFlow", "NVIDIA Jetson"],
      category: "AI and IOT",
      date: "Sep-Oct 2025",
      github: "https://github.com/shraavb/jetbot_waveshare",
      visit: "",
      description:
        "Building an autonomous robot using NVIDIA's JetBot platform with Jetson Nano. Implementing computer vision algorithms for object detection and autonomous navigation, exploring the intersection of robotics and artificial intelligence."
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
        "Explored how user anonymity influences tweet sentiment and polarization during the COVID-19 pandemic. Following nine months of refinement, we engaged with HCI academics and submitted our findings to journals for publication."
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
        "Developed an ML model to predict upsets in tennis matches based on player statistics and tournament details."
    },
    {
      name: "Bridge: Multi-Modal Language Learning Tool",
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
        "Developed a tool for language learning using multimodal information. The tool adapts to different scenarios, including business, casual conversation with friends, and dating contexts. Leveraged prompting techniques to optimize the use of LLMs."
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
        "As part of a 1 hour web design challenge, I designed addresses the challenge of transitioning low and middle-income rural populations in nations like Africa and India to renewable energy sources. By promoting self-sufficiency through Solar Home Systems, the website aims to empower households in accessing reliable and eco-friendly power, while providing testimonials and guidance. It focuses on African regions where Solar Home Systems have gained some adoption, serving as a valuable resource for low-middle income households seeking to be more self-sufficient, digitized, and environmentally friendly, particularly those affected by utility bill hikes resulting from oil price fluctuations and supply limitations."
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
        "Supported design, sponsorship outreach and relations, developed sponsor packages, and managed the website. Made weekly part purchases based on the needs of the Mechanical and Electrical Teams. Below is a Mock Board Meeting Presentation we developed for the Business aspect of the FSAE Competition. We were awarded 3rd place overall at the Formula SAE Lincoln event in 2022."
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
        "Supported design, sponsorship outreach and relations, developed sponsor packages, and managed the website. Made weekly part purchases based on the needs of the Mechanical and Electrical Teams. Below is a Mock Board Meeting Presentation we developed for the Business aspect of the FSAE Competition. We were awarded 3rd place overall at the Formula SAE Lincoln event in 2022."
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
        "As Consultant and Project Lead at PCV, I led a team of 4+ students on two projects: developing a strategy to boost student subscriptions to a circular economy membership, and creating a carbon offset platform for Philadelphia-based corporations, including four local offset projects to reduce reliance on foreign offsets."
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
        "With three teammates, I developed a commercialization proposal for Penn GRASP Lab's Steerable Needle, focusing on Neuroblastoma surgery. Over 5–6 months, we consulted neurosurgeons, medical device companies, and researchers to identify procedural challenges. Our proposal was selected as a Y-Prize finalist, earning mentorship to refine our idea."
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
        "During Spring 2023's M&T Sophomore Immersive Week, my team explored Flow Battery technology and applied business concepts to develop a strategy. We proposed a Joint Venture between General Electric and ESS Inc., a leader in Flow Battery innovation, to enhance renewable energy accessibility."
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
        "As Consultant and Project Lead at PCV, I led a team of 4+ students on two projects: developing a strategy to boost student subscriptions to a circular economy membership, and creating a carbon offset platform for Philadelphia-based corporations, including four local offset projects to reduce reliance on foreign offsets."
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
