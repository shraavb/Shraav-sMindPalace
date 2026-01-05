# Portfolio Summary: JetBot VLA Navigation System

## Project Title
**Autonomous Robot Navigation with Vision-Language-Action Models using Sim-to-Real Transfer**

---

## Summary (LinkedIn/Resume Style)

Built an end-to-end autonomous robot navigation system combining NVIDIA Isaac Sim, Vision-Language-Action (VLA) models, and cloud GPU training on RunPod. Designed and implemented a complete ML pipeline from synthetic data generation to real-world deployment on a JetBot robot.

---

## Key Highlights (Bullet Points for Technical Recruiters)

### Synthetic Data Generation & Simulation
- Developed a synthetic data collection pipeline using **NVIDIA Isaac Sim** for physics-based robot simulation
- Generated **16,500+ training samples** (~230MB) across multiple dataset variations with domain randomization
- Implemented domain randomization strategies including random obstacle colors, shapes, ground textures, and lighting conditions for robust sim-to-real transfer
- Created configurable scene generation with 5-15 obstacles per episode, supporting multiple environment types (warehouse, office, grid)

### Cloud Infrastructure & Training
- Deployed training infrastructure on **RunPod** using RTX 4090 GPUs for cost-effective cloud training
- Built headless Isaac Sim data collection scripts optimized for cloud GPU environments
- Implemented checkpoint resumption system for fault-tolerant distributed training
- Designed ZMQ-based client-server architecture for low-latency model inference (~50-100ms)

### Model Fine-Tuning & Architecture
- Fine-tuned **SmolVLA (450M parameters)** Vision-Language-Action model for differential drive robot control
- Designed custom **JetBotActionHead** neural network module mapping VLA hidden states to 2-DoF motor commands
- Implemented parameter-efficient fine-tuning (PEFT) strategy: frozen backbone with trainable action head (~17K parameters)
- Achieved resource-efficient deployment: 1.5GB memory footprint suitable for edge devices

### End-to-End ML Pipeline
- Built complete pipeline: Simulation Data Collection → Model Training → Real-time Inference → Robot Deployment
- Implemented natural language instruction understanding for flexible robot control
- Created dataset management system supporting both synthetic (Isaac Sim) and real-world data collection
- Developed model quantization support (4-bit, 8-bit) for memory-constrained deployment

---

## Technical Stack

| Category | Technologies |
|----------|-------------|
| **Simulation** | NVIDIA Isaac Sim 4.5+, PhysX, Domain Randomization |
| **ML Framework** | PyTorch 2.0+, HuggingFace Transformers, Mixed Precision (FP16) |
| **Models** | SmolVLA (450M), SmolVLM-Instruct, Custom Action Head |
| **Cloud/Infra** | RunPod (RTX 4090), ZMQ, Docker |
| **Hardware** | NVIDIA Jetson Nano, JetBot Platform, Differential Drive |
| **Languages** | Python, CUDA |

---

## Metrics & Scale

- **Training Data**: 16,500+ samples across 6 dataset variants
- **Model Size**: 450M parameters (backbone) + 17K parameters (action head)
- **Memory Footprint**: 1.5GB (vs 15GB for comparable 7B models)
- **Inference Latency**: 50-100ms on GPU server
- **Action Space**: Continuous 2-DoF motor control [-1, 1]

---

## Architecture Diagram (Text)

```
Isaac Sim (Synthetic Data) ──┐
                             ├──► Training Pipeline ──► Fine-tuned SmolVLA
Real Robot Data ─────────────┘         (RunPod)              │
                                                             ▼
JetBot Camera ──► VLA Client ──► ZMQ ──► VLA Server ──► Motor Commands
                 (Robot)              (GPU Server)        (left, right)
```

---

## One-Liner Versions

**For Resume:**
> Built autonomous robot navigation using VLA models with Isaac Sim synthetic data generation and RunPod cloud training (16K+ samples, 450M param model)

**For LinkedIn:**
> Developed an end-to-end sim-to-real ML pipeline for autonomous robot navigation, combining NVIDIA Isaac Sim for synthetic data generation, Vision-Language-Action models for natural language understanding, and RunPod cloud GPU training.

---

## Approval Needed

Please review the above portfolio summary. Let me know if you'd like me to:
1. Adjust emphasis on any particular area
2. Add more technical details
3. Include additional metrics or achievements
4. Modify the tone or format
5. Add any specific accomplishments I may have missed
