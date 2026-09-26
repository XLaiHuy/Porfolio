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
    title: 'Cybertech AI Camera Analytics',
    type: 'Professional AI Project',
    image: 'cybertech-ai-camera.webp',
    description:
      'Production-oriented computer vision work involving loitering detection, smoke/fire detection, license plate recognition, real-world inference, output review, and operational edge-case analysis.',
    metrics: [
      'Loitering detection analytics',
      'Smoke/fire operational monitoring',
      'License plate recognition',
      'Real-world edge-case analysis',
    ],
    stack: [
      'Computer Vision',
      'Edge Inference',
      'Camera Analytics',
      'Python',
      'Model Evaluation',
    ],
    link: null,
    linkLabel: 'Professional Project',
  },
]

export default projects
