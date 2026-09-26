const projects = [
  {
    title: 'Multi-Agent Safe-RAG',
    type: 'Generative AI • RAG • Evaluation',
    image: 'safe-rag.webp',
    description:
      'An end-to-end legal document intelligence system combining hybrid retrieval, reranking, and multi-agent verification, with systematic evaluation of retrieval relevance, answerability, and citation correctness.',
    evaluationDatasets: [
      '294 held-out CUAD queries',
      '200-query real-world Google GenAI benchmark',
    ],
    metrics: [
      '81.97% strict child Hit@10',
      '0.5214 MRR',
      '72.5% strict balanced answerability accuracy',
      '80.97% macro citation precision',
      '0/140 wrong-document citations observed',
    ],
    stack: [
      'Python',
      'RAG',
      'BM25',
      'RRF',
      'Cross-Encoder',
      'FastAPI',
      'Docker',
      'Multi-Agent Systems',
    ],
    link: 'https://github.com/XLaiHuy/Multi-Agent-RAG',
    linkLabel: 'View Repository',
  },
  {
    title: 'ACD-CLIP++',
    type: 'Vision-Language • Anomaly Detection • Evaluation',
    image: 'acd-clip.webp',
    description:
      'A vision-language anomaly detection research project focused on cross-domain robustness and evaluation across unseen medical datasets.',
    metrics: [
      '6 unseen medical datasets',
      '91.19% average best-observed pixel AUROC',
      '43.70% average AP',
    ],
    stack: [
      'Python',
      'PyTorch',
      'CLIP',
      'LoRA',
      'Computer Vision',
    ],
    link: 'https://github.com/XLaiHuy/ACD-CLIP-Plus',
    linkLabel: 'View Repository',
  },
  {
    title: 'EfficientNet-Hybrid-FER',
    type: 'Computer Vision • Model Evaluation',
    image: 'fer.webp',
    description:
      'A hybrid deep learning architecture combining EfficientNet-B0 with custom 4-gate LSTM for facial emotion recognition, evaluated on FER-2013 and transferred to CK+.',
    metrics: [
      'FER-2013: 67.72% Accuracy',
      'FER-2013: 0.6772 Macro F1',
      'CK+: 94.09% Accuracy',
    ],
    stack: [
      'Python',
      'PyTorch',
      'EfficientNet-B0',
      'LSTM',
      'Computer Vision',
    ],
    link: 'https://github.com/XLaiHuy/EfficientNet-Hybrid-FER',
    linkLabel: 'View Repository',
  },
  {
    title: 'Cybertech Edge AI Box & Camera Analytics',
    type: 'Computer Vision • Edge AI Box • Tracking',
    image: 'cybertech-ai-camera.webp',
    description:
      'Real-time edge intelligence system deployed at Cybertech JSC. Dedicated on-premises AI Boxes ingest local RTSP/IP camera streams to execute on-device edge inference for loitering detection, smoke & fire hazard monitoring, license plate recognition (ANPR/LPR), and multi-object trajectory tracking.',
    metrics: [
      'Local camera feeds ingested into on-premise AI Box',
      '3 Core Detectors: Loitering, Smoke/Fire, License Plate (ANPR)',
      'Object & vehicle trajectory tracking (truy vết lộ trình)',
      'Operational edge-case evaluation (occlusion, night vision, false alarms)',
    ],
    stack: [
      'Edge AI Box',
      'Computer Vision',
      'Object Tracking',
      'ANPR / LPR',
      'Edge Inference',
      'Python',
      'OpenCV',
      'Model Evaluation',
    ],
    link: null,
    linkLabel: 'Production Project @ Cybertech',
  },
  {
    title: 'Cybertech Gov-Report & Admin Document Agent',
    type: 'Generative AI • LangGraph • RAG • Gov Standards',
    image: null,
    description:
      'An enterprise multi-agent workflow engineered with LangGraph and RAG at Cybertech JSC. The system ingests multi-source administrative files, policy directives, and statistical records to synthesize official Vietnamese government-style reports strictly adhering to national administrative formatting standards (Decree 30/2020/ND-CP).',
    metrics: [
      'LangGraph multi-agent orchestration (analysis, drafting, cross-verification)',
      'Strict RAG retrieval guaranteeing factual & numerical fidelity from source texts',
      'Standardized Vietnamese public sector report formatting (Decree 30/2020/ND-CP)',
      'Traceable source citations and structured numerical appendix generation',
    ],
    stack: [
      'LangGraph',
      'RAG',
      'Multi-Agent Workflows',
      'LLMs',
      'Vector DB',
      'FastAPI',
      'Python',
      'AI Output QA',
    ],
    link: null,
    linkLabel: 'Enterprise AI Agent @ Cybertech',
  },
]

export default projects
