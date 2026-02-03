let info = {
  // Hero Section - Credential-forward
  name: "Shraavasti (Shraav) Bhat",
  tagline: "M&T @ University of Pennsylvania | Computer Science + Management",
  research_focus: "Building intelligent systems at the intersection of robotics, AI, and human-centered product design.",
  current_work: "Currently exploring Vision-Language-Action models for robotic control and voice-first AI agents.",
  email: "shraavb@wharton.upenn.edu",

  // Featured projects (by id)
  featured_projects: ["ego4d-hierarchical-rl", "lerobot-so101", "jetbot-vla", "orbit", "procura", "speakeasy", "spanish-slang-stt"],

  // Legacy fields
  logo_name: "shraav",
  flat_picture: require("./assets/shraav_avatar_.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a Computer Science and Management student at the University of Pennsylvania. I have worked as a product manager at TE Connectivity, Manatal, and Develop for Good, collaborating with teams across Design, Engineering, Marketing, and Sales. I have also worked on projects in Embedded Systems, Computer Vision, and AI.",
  links: {
    linkedin: "https://www.linkedin.com/in/shraavasti-bhat/",
    github: "https://github.com/shraavb"
  },
  education: [
    {
      name: "University of Pennsylvania",
      place: "",
      date: "Aug 2021 – May 2026",
      degree: "Dual Degree in Computer Science & Management",
      gpa: "",
      description: "",
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
      name: "AdminifAI",
      place: "New York, NY",
      date: "Jan 2026 - Present",
      position: "Backend Software Engineer",
      description:
        "Built an automated SMS/email reminder system with Celery and Twilio that reduces no-shows and drives rebookings for salon businesses. Developed a real-time AI voice agent that handles inbound phone calls for appointment scheduling and customer support, using Pipecat and Twilio Media Streams. Engineered sub-300ms interruption handling and multi-speaker filtering so the agent responds naturally during live conversations. Designed a pluggable LLM architecture supporting four providers (Anthropic, OpenAI, Google, Ollama), switchable via environment config with no code changes. Wrote 25 unit tests and CI/CD pipeline covering API routes and voice processing logic.",
      skills: ["Python", "Flask", "Celery", "Docker", "Twilio", "PostgreSQL", "React", "Pipecat", "WebSockets", "Deepgram", "ElevenLabs"]
    },
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
      place: "Bangkok, Thailand",
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
      title: "product & strategy",
      info: ["Jira", "Asana", "Notion", "Figma", "SQL", "User Research", "Roadmapping", "A/B Testing"],
      icon: "fa fa-chart-line"
    },
    {
      title: "ai & ml",
      info: ["PyTorch", "Offline RL (IQL)", "Decision Transformer", "LangChain", "LangGraph", "RAG", "Whisper ASR", "LoRA Fine-tuning", "HuggingFace"],
      icon: "fas fa-brain"
    },
    {
      title: "robotics & simulation",
      info: ["NVIDIA Isaac Sim", "ROS 2", "SmolVLA", "LeRobot", "Imitation Learning", "DINOv2", "FreeRTOS", "NVIDIA Jetson"],
      icon: "fas fa-robot"
    },
    {
      title: "software engineering",
      info: ["Python", "JavaScript", "TypeScript", "C++", "React", "FastAPI", "PostgreSQL", "WebSockets"],
      icon: "fa fa-code"
    },
    {
      title: "tools & platforms",
      info: ["Git", "Docker", "Kubernetes", "AWS", "RunPod", "Claude API", "MCP", "ElevenLabs", "Raspberry Pi"],
      icon: "fas fa-tools"
    },
    {
      title: "backend & infrastructure",
      info: ["Celery", "Redis", "PostgreSQL", "FastAPI", "Flask", "CI/CD", "GitHub Actions"],
      icon: "fas fa-server"
    }
  ],
  portfolio: [
    {
      id: "ego4d-hierarchical-rl",
      name: "Ego4D Hierarchical Offline RL <span class='badge badge-warning ml-2'>in-progress</span>",
      preview: "Two-stage hierarchical policy: Ego4D video pretraining (Decision Transformer) + LeRobot SO-101 fine-tuning (action chunking controller) for long-horizon robot manipulation.",
      pictures: [
        {
          img: require("./assets/ego4d_hierarchical_rl_cover.png")
        }
      ],
      technologies: ["Offline RL (IQL)", "Decision Transformer", "PyTorch", "DINOv2", "ROS 2", "Ego4D", "RunPod", "Jetson Nano", "WebSockets", "LeRobot", "Action Chunking", "pytest"],
      category: "Robotics & ML",
      projectCategory: "robotics",
      featured: true,
      date: "Jan 2026 - Present",
      github: "https://github.com/shraavb/ego4d-hierarchical-rl",
      visit: "",
      description:
        "<ul><li>Designed <strong>two-stage training pipeline</strong>: Stage 1 pretrains Decision Transformer on <strong>Ego4D egocentric video</strong> (717 videos, 13,342 step segments) for subgoal prediction; Stage 2 fine-tunes on real <strong>LeRobot SO-101</strong> teleoperation demos for motor control</li><li>Built <strong>Decision Transformer</strong> (GPT-based, 4 layers, 4 heads) as high-level planner predicting subgoal embeddings at 1-2Hz with returns-to-go conditioning and autoregressive subgoal history</li><li>Implemented <strong>action-chunking low-level controller</strong> with 10-step chunks at 30Hz, proprioceptive state input (6-DOF joint positions), and relative action convention matching RynnVLA's proven approach</li><li>Implemented <strong>Implicit Q-Learning (IQL)</strong> from scratch with expectile regression for V(s), TD learning for Q(s,a,g), and advantage-weighted policy extraction</li><li>Architected <strong>hybrid cloud/edge deployment</strong>: DINOv2 feature extraction + hierarchical inference on RunPod via WebSocket, action chunk execution on Jetson Nano at 30Hz with &lt;200ms replanning latency</li><li>Integrated <strong>LeRobot SDK</strong> for SO-101 robot bridge with relative-to-absolute action conversion, joint limit safety clipping, and proprioceptive state publishing over ROS 2</li><li>Built comprehensive <strong>test suite (61/62 passing)</strong>: 25 hierarchical policy tests, 11 dataset tests, 9 training integration tests, and 12 WebSocket server tests including async fixtures and mock inference</li><li>Extracted visual features with <strong>DINOv2 ViT-B/14</strong> (768-dim) and goal embeddings with <strong>SentenceTransformer all-MiniLM-L6-v2</strong> (384-dim) from Ego4D Goal-Step benchmark</li></ul>"
    },
    {
      id: "lerobot-so101",
      name: "LeRobot SO-101: Pick & Place with ACT <span class='badge badge-warning ml-2'>in-progress</span>",
      preview: "Built a 6-DOF robotic arm that autonomously picks and places objects, trained end-to-end from 50 human demonstrations using imitation learning.",
      pictures: [
        {
          img: require("./assets/le_robot_cover_img.jpg")
        }
      ],
      technologies: ["HuggingFace LeRobot", "ACT Policy", "Imitation Learning", "PyTorch", "macOS", "Feetech ST-3215", "OpenCV"],
      category: "Robotics & ML",
      projectCategory: "robotics",
      featured: true,
      date: "Jan 2026 - Present",
      github: "https://github.com/huggingface/lerobot",
      huggingface: "https://huggingface.co/shraavb/act_pick_place_cube",
      dataset: "https://huggingface.co/datasets/shraavb/pick_place_cube",
      visit: "",
      video: "lerobot_pick_place_demo.mp4",
      description:
        "<p><strong>What I built:</strong> A 6-DOF robotic arm that learns to pick up a cube and place it in a container from human demonstrations — no manual programming of trajectories.</p><ul><li>Collected <strong>50 demonstrations</strong> (36,750 frames at 30 FPS) via leader-follower teleoperation with RGB camera, published as an open dataset on HuggingFace</li><li>Trained an <strong>ACT (Action Chunking Transformer)</strong> imitation learning policy for 100K steps, achieving <strong>0.07 training loss</strong></li></ul><p><strong>Hard problems solved:</strong></p><ul><li><strong>macOS motor reliability:</strong> Feetech servos had 20-200ms USB serial latency on macOS (vs 34ms on Linux). Wrote platform-specific SDK patches with timeout overrides and serial buffer clearing to make motor communication reliable</li><li><strong>Arm stability under gravity:</strong> Tuned per-joint P-coefficients (120 for shoulder/elbow fighting gravity, 60 for wrist, 16 for others) and set torque caps to prevent jerky motion</li><li><strong>Noisy sensor readings:</strong> Built a bad-reading filter and replaced sync reads with individual motor reads + 2ms delays to eliminate corrupted position data</li></ul><p><strong>Next steps:</strong> Scaling to 100+ demonstrations with varied object placement, adding a second camera for depth perception, and tuning gripper force for more reliable grasps.</p>"
    },
    {
      id: "jetbot-vla",
      name: "JetBot VLA Navigation System",
      preview: "End-to-end sim-to-real ML pipeline for autonomous robot navigation using Vision-Language-Action models.",
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
      technologies: ["PyTorch", "NVIDIA Isaac Sim", "SmolVLA", "RunPod", "ZMQ", "HuggingFace", "NVIDIA Jetson"],
      category: "Robotics & ML",
      projectCategory: "robotics",
      featured: true,
      date: "Sep 2025 - Dec 2025",
      github: "https://github.com/shraavb/jetbot",
      huggingface: "https://huggingface.co/shraavb/smolvla-jetbot",
      visit: "",
      description:
        "<ul><li>Built end-to-end <strong>sim-to-real ML pipeline</strong> for autonomous robot navigation using <strong>Vision-Language-Action (VLA)</strong> models</li><li>Generated <strong>16,500+ training samples</strong> using <strong>NVIDIA Isaac Sim</strong> with domain randomization for robust transfer</li><li>Fine-tuned <strong>SmolVLA (450M params)</strong> with custom action head, achieving <strong>1.5GB memory footprint</strong> for edge deployment</li><li>Deployed training on cloud GPUs (RunPod RTX 4090) with <strong>ZMQ-based inference server</strong> achieving ~50-100ms latency for real-time robot control</li><li>Implemented natural language instruction understanding for flexible robot control</li></ul>"
    },
    {
      id: "orbit",
      name: "Orbit: Voice-First AI Personal Agent",
      preview: "Voice-first AI assistant powered by a multi-step agent that handles messaging across SMS, email, Slack, and WhatsApp with confirmation before execution.",
      pictures: [
        {
          img: require("./assets/Orbit_Project_Image.png")
        }
      ],
      technologies: ["LangChain", "AI Agents", "MCP", "Claude API", "Whisper ASR", "ElevenLabs TTS", "FastAPI", "React", "PostgreSQL", "LangSmith"],
      category: "AI Application",
      projectCategory: "product",
      featured: true,
      date: "Dec 2025 - Jan 2026",
      github: "https://github.com/shraavb/Orbit-your-personal-agent",
      visit: "",
      video: "Orbit_Agent_Demo.mp4",
      description:
        "<ul><li>Built voice-first AI assistant using <strong>Claude Sonnet 4.5</strong> with a <strong>multi-step LangChain agent</strong> that breaks down requests, collects missing parameters through follow-up questions, and confirms actions before execution</li><li>Integrated <strong>Model Context Protocol (MCP)</strong> with custom FastMCP server for memory tools</li><li>Implemented <strong>self-hosted Whisper ASR</strong> and <strong>ElevenLabs TTS</strong> with lip-sync animation</li><li>Built multi-channel messaging integrations: SMS, Email, Slack, WhatsApp via custom BaseTool subclasses</li><li>Developed real-time voice-to-voice pipeline with <strong>FastAPI</strong> backend and <strong>React</strong> frontend</li><li>Added <strong>LangSmith</strong> observability with distributed tracing</li></ul>"
    },
    {
      id: "procura",
      name: "Procura: BOM/PO Multi-Agent System",
      preview: "Multi-agent AI system for Bill of Materials processing and Purchase Order automation with 5 specialized LangGraph agents working together.",
      pictures: [
        {
          img: require("./assets/procura_proj_img.png")
        }
      ],
      technologies: ["LangGraph", "LangChain", "Claude Sonnet", "FastAPI", "React", "PostgreSQL", "pgvector", "RAG", "WebSockets"],
      category: "AI Application",
      projectCategory: "product",
      featured: true,
      date: "Jan 2026",
      github: "https://github.com/shraavb/Procura",
      visit: "",
      video: "Procura-demo.mp4",
      description:
        "<ul><li>Built <strong>multi-agent AI system</strong> for BOM processing with <strong>5 specialized LangGraph agents</strong>: Parser, Matcher, Optimizer, PO Generator, and Order Tracker</li><li>Implemented <strong>RAG-powered supplier matching</strong> using pgvector for semantic search across supplier catalogs</li><li>Designed <strong>human-in-the-loop approval workflows</strong> for low-confidence matches and high-value purchase orders</li><li>Built real-time progress tracking with <strong>WebSocket updates</strong> during multi-step agent processing</li><li>Created auto-generated PO tagging system linking purchase orders back to source BOMs for full traceability</li><li>Developed modern UI with <strong>React + Tailwind + Framer Motion</strong> animations</li></ul>"
    },
    {
      id: "speakeasy",
      name: "SpeakEasy: AI-Powered Conversational Language Learning <span class='badge badge-warning ml-2'>in-progress</span>",
      preview: "Speech-to-speech learning platform with fine-tuned LLMs, 6-metric fluency scoring, and scenario-based curriculum.",
      pictures: [
        {
          img: require("./assets/SpeakEasy_Master_Conversational_Fluency.png")
        }
      ],
      technologies: ["Llama 3", "LoRA Fine-tuning", "React", "FastAPI", "Whisper ASR", "PostgreSQL", "Capacitor"],
      category: "Senior Design Project",
      projectCategory: "product",
      featured: true,
      date: "Aug 2025 - Present",
      github: "https://github.com/shraavb/-Senior-Design-SpeakEasy",
      huggingface: "https://huggingface.co/shraavb/spanish-slang-whisper",
      visit: "",
      video: "SpeakEasy Demo V2.mov",
      description:
        "<ul><li>Built speech-to-speech language learning platform with <strong>LoRA fine-tuned Llama 3</strong> on dialect-specific conversational data</li><li>Processed <strong>4,383 dialogue segments</strong> from 102 Spanish films with automated scenario classification and CEFR difficulty tagging</li><li>Designed <strong>6-metric fluency scoring engine</strong> using Whisper ASR for pronunciation, fluency, and communicative competence evaluation</li><li>Created curriculum with <strong>37 conversation scenarios</strong> across 3 modules and 8 AI conversation partners</li><li>Deployed full-stack app (<strong>React/FastAPI/PostgreSQL</strong>) to web and iOS/Android via Capacitor</li></ul>"
    },
    {
      id: "spanish-slang-stt",
      name: "Spanish Slang STT: Regional Dialect Recognition",
      preview: "Fine-tuned Whisper model for recognizing regional Spanish slang and informal speech across Mexico, Argentina, Spain, and Chile.",
      pictures: [
        {
          img: require("./assets/spanish_slang_stt_architecture.png")
        },
        {
          img: require("./assets/spanish_slang_stt.png")
        }
      ],
      technologies: ["PyTorch", "Whisper", "HuggingFace", "FastAPI", "faster-whisper", "ElevenLabs TTS", "librosa"],
      category: "ML & NLP",
      projectCategory: "robotics",
      featured: true,
      date: "Dec 2025",
      github: "https://github.com/shraavb/spanish-slang-stt",
      huggingface: ["https://huggingface.co/datasets/shraavb/spanish-slang-stt-data", "https://huggingface.co/datasets/shraavb/spanish-slang-stt"],
      visit: "",
      description:
        "<ul><li>Built <strong>fine-tuned Speech-to-Text system</strong> optimized for regional Spanish slang and informal speech recognition</li><li>Processed <strong>31,000+ audio samples</strong> across 4 regions (Spain, Argentina, Chile, Mexico) with automated dialect attribution</li><li>Fine-tuned <strong>OpenAI Whisper</strong> achieving <strong>16.27% WER</strong> on test set (8.33% median) for slang-heavy speech</li><li>Created <strong>1,335+ regional slang dictionary entries</strong> with formality-level tagging for training data augmentation</li><li>Built production-ready <strong>FastAPI service</strong> with region-aware model selection, word-level timestamps, and evaluation endpoints</li><li>Implemented <strong>synthetic data pipeline</strong> using ElevenLabs TTS for bootstrapping training data with multiple Spanish voice variations</li></ul>"
    },
    {
      id: "openaps",
      name: "OpenAPS - Embedded Systems for Closed-Loop Insulin Control",
      preview: "Embedded control system simulating insulin dosing logic with real-time CGM integration.",
      pictures: [
        {
          img: require("./assets/OpenAPS_project.png")
        }
      ],
      technologies: ["C++", "Arduino", "FreeRTOS", "MQTT", "Embedded Systems"],
      category: "Embedded Systems",
      projectCategory: "product",
      featured: false,
      date: "Oct 2025",
      github: "https://github.com/jimmyyu123/CIS541OpenAPS_proj_Steady_State",
      visit: "",
      description:
        "<ul><li>Built embedded insulin dosing controller on <strong>Arduino Nano</strong> using the OpenAPS algorithm, processing CGM readings every 5 minutes</li><li>Connected hardware to simulation via <strong>MQTT</strong> for safe testing against virtual patient models</li><li>Used <strong>FreeRTOS</strong> for concurrent task management with strict timing guarantees for medical-grade reliability</li><li>Implemented fail-safes: dosing rate limiters, sensor validation, and automatic fallback to safe basal rates</li></ul>"
    },
    {
      id: "coral-drone",
      name: "Coral Reef Mapping Drone",
      preview: "Open source ocean drone for mapping and analyzing coral reef health using computer vision.",
      pictures: [
        {
          img: require("./assets/makerbay-coralbot.jpeg")
        },
        {
          img: require("./assets/coral drone workflow.jpeg")
        }
      ],
      technologies: ["Computer Vision", "Image Segmentation", "Raspberry Pi", "Python", "GPS Navigation", "3D Printing"],
      category: "Robotics",
      projectCategory: "robotics",
      featured: false,
      date: "2020",
      github: "https://github.com/MakerBay/Coral_Reef_Mapping_Drone",
      visit: "https://makerbay.net/coralbot-coral-reef-mapping-drone/",
      description:
        "<ul><li>Contributed to <a href='https://makerbay.net/coralbot-coral-reef-mapping-drone/' target='_blank'><strong>MakerBay's CoralBot</strong></a> open-source project in Hong Kong for coral reef monitoring</li><li>Integrated <strong>GoPro Hero</strong> with <strong>image segmentation</strong> to classify coral species and detect bleaching events</li><li>Configured <strong>Raspberry Pi</strong> for onboard processing and GPS waypoint navigation with real-time data logging</li><li>Fabricated waterproof enclosures using <strong>3D printing</strong> (PETG) and <strong>laser cutting</strong> (acrylic)</li></ul>"
    },
    {
      id: "tennis-ml",
      name: "Predicting Underdog Wins",
      preview: "ML model to predict upsets in tennis matches using player statistics and tournament data.",
      pictures: [
        {
          img: require("./assets/dev_project2_tennisupset.jpg")
        }
      ],
      technologies: ["XGBoost", "Random Forest", "Polars", "DuckDB", "Feature Engineering", "SMOTE"],
      category: "ML Project",
      projectCategory: "robotics",
      featured: false,
      date: "March 2025 - Apr 2025",
      github: "https://github.com/shraavb/Predicting-Tennis-Upsets-with-Machine-Learning",
      visit: "",
      video: "cis545project_upset_events.mp4",
      description:
        "<ul><li>Built ML model to predict tennis upsets using <strong>10+ years of ATP tour data</strong> with <strong>40+ engineered features</strong></li><li>Processed match data using <strong>Polars</strong>, <strong>DuckDB</strong>, and <strong>PandaSQL</strong> for efficient large-scale analytics</li><li>Trained classification models (Random Forest, XGBoost, Neural Networks) with <strong>SMOTE</strong> for class imbalance handling</li><li>Identified key upset predictors: ranking gap, recent form, surface matchups, and tournament round</li></ul>"
    },
    {
      id: "bridge",
      name: "Bridge V1: Multi-Modal Language Learning Tool",
      preview: "36-hour hackathon project: Language learning tool with multimodal AI adapting to business, casual, and social contexts.",
      pictures: [
        {
          img: require("./assets/Dev_Proj3_Bridge.png")
        }
      ],
      technologies: ["Grok API", "OpenAI API", "JavaScript", "Prompt Engineering", "Real-time Chat", "Context Switching"],
      category: "Hackathon Project",
      projectCategory: "product",
      featured: false,
      date: "2024 - 2025",
      github: "https://github.com/shraavb/Bridge",
      visit: "",
      description:
        "<ul><li>Built context-aware language learning tool in 36 hours at the <a href='https://mec.mit.edu/mec-sprint/' target='_blank'><strong>MEC@MIT Sprint</strong></a> hackathon</li><li>Integrated <strong>Grok API</strong> and <strong>OpenAI API</strong> with intelligent routing for real-time responses and grammar explanations</li><li>Tailors vocabulary and formality based on scenarios: business, casual, and social contexts</li><li>Precursor project that inspired the SpeakEasy senior design project</li></ul>"
    },
    {
      id: "hci-research",
      name: "Human Computer Interaction Research",
      preview: "Research on how user anonymity influences tweet sentiment and polarization during COVID-19.",
      pictures: [
        {
          img: require("./assets/proj1_anonymity_research.png"),
          pdf: "Unmasking_Social_Media_Accountability___Short_Paper.pdf"
        }
      ],
      presentation: "IFoRE_Twitter.pdf",
      technologies: ["X API", "Python", "Vader", "Sentiment Analysis"],
      category: "Academic Research",
      projectCategory: "robotics",
      featured: false,
      date: "Sep 2022 – Jun 2024",
      github: "",
      visit: "",
      description:
        "<ul><li>Analyzed user anonymity and how this impacted sentiment and polarization displayed among users</li><li>Collected <strong>50,000+ tweets</strong> using <strong>Twitter/X API v2</strong> with automated metadata extraction</li><li>Implemented sentiment classification using <strong>VADER</strong> with custom pandemic-specific lexicons</li><li>Conducted regression analysis controlling for follower count, account age, and topic to isolate anonymity effects</li><li>Submitted findings to academic journals for peer review</li></ul>"
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
