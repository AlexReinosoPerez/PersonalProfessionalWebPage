export interface SkillCategory {
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    category: "ML & Deep Learning",
    skills: [
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "Keras",
      "XGBoost",
      "LightGBM",
      "Transformers",
      "Computer Vision",
      "NLP",
      "GANs",
      "Reinforcement Learning"
    ]
  },
  {
    category: "MLOps & Infrastructure",
    skills: [
      "MLflow",
      "Kubeflow",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Model Monitoring",
      "A/B Testing",
      "Feature Stores",
      "Experiment Tracking"
    ]
  },
  {
    category: "Data & Engineering",
    skills: [
      "Python",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Apache Spark",
      "Pandas",
      "NumPy",
      "Data Pipelines",
      "ETL"
    ]
  },
  {
    category: "Cloud & DevOps",
    skills: [
      "AWS (SageMaker, EC2, S3, Lambda)",
      "GCP (Vertex AI, BigQuery, Cloud Run)",
      "Azure ML",
      "Terraform",
      "Git",
      "GitHub Actions",
      "Linux"
    ]
  },
  {
    category: "AI Domains",
    skills: [
      "Computer Vision",
      "Natural Language Processing",
      "Time Series Forecasting",
      "Anomaly Detection",
      "Recommendation Systems",
      "Deep Fake Detection",
      "Image Generation"
    ]
  },
  {
    category: "APIs & Development",
    skills: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "TypeScript",
      "React",
      "Next.js"
    ]
  }
];
