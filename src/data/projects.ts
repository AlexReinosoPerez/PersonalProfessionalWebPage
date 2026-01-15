export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
  highlights: string[];
  outcome: string;
}

export const projects: Project[] = [
  {
    id: "tfg-artauthai",
    title: "TFG: ArtAuthAI",
    description: "Bachelor's Thesis - AI-powered artwork authentication system using deep learning to detect art forgeries and verify authenticity.",
    technologies: ["Python", "TensorFlow", "Computer Vision", "CNN", "ResNet"],
    github: "https://github.com/AlexReinosoPerez/trabajoTfg",
    highlights: [
      "Developed deep learning models for art style analysis",
      "Achieved 94% accuracy in forgery detection",
      "Implemented transfer learning with ResNet architecture",
      "Created comprehensive dataset of artistic styles"
    ],
    outcome: "Computer vision system trained and evaluated on a custom artwork dataset."
  },
  {
    id: "tfm-deepfake-detection",
    title: "TFM: Deepfake Detection Pipeline",
    description: "Master's Thesis - Advanced deepfake detection pipeline for both audio and video content, using custom-trained models by the research team.",
    technologies: ["Python", "PyTorch", "Computer Vision", "Audio Processing", "Deep Learning"],
    github: "https://github.com/AlexReinosoPerez/trabajoTFM",
    highlights: [
      "Achieved 98% accuracy in audio deepfake detection",
      "Achieved 89% accuracy in video deepfake detection",
      "Custom models trained by the research team",
      "Dual-pipeline approach for comprehensive media verification"
    ],
    outcome: "End-to-end deepfake detection pipeline with experiment tracking and model evaluation."
  },
  {
    id: "deepfake-generation",
    title: "Deepfake Generation Platform",
    description: "End-to-end platform for generating high-quality synthetic media using cutting-edge AI technologies for ethical research purposes.",
    technologies: ["Spanish F5", "FaceFusion", "Sora2", "HeyGen", "Python"],
    highlights: [
      "Integration with Spanish F5 for voice synthesis",
      "FaceFusion for realistic face swapping",
      "Sora2 integration for video generation",
      "HeyGen for AI avatar creation",
      "Built for ethical research and detection model training"
    ],
    outcome: "Synthetic media generation platform for research and detection model training."
  },
  {
    id: "fitnessai",
    title: "FitnessAI",
    description: "AI-powered fitness application using computer vision for exercise form correction and personalized workout recommendations. Available on web and iOS.",
    technologies: ["Python", "MediaPipe", "TensorFlow", "Flask", "OpenCV", "Swift", "iOS"],
    github: "https://github.com/AlexReinosoPerez/FitnessAi",
    highlights: [
      "Real-time pose estimation and form analysis",
      "ML-based personalized workout generation",
      "Cross-platform: Web application and iOS native app",
      "iOS app: github.com/AlexReinosoPerez/iOSminiAppFitness"
    ],
    outcome: "Functional AI-driven fitness application with real-time pose analysis."
  }
];
