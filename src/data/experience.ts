export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  awards?: string[];
}

export const experiences: Experience[] = [
  {
    id: "deloitte",
    company: "Deloitte",
    role: "Data Scientist / Machine Learning Engineer",
    period: "2025 - Present",
    description: "Contributing to end-to-end machine learning projects in enterprise environments, with focus on MLOps practices and production-ready solutions.",
    achievements: [
      "Contributed to production ML pipelines in enterprise client projects",
      "Applied MLOps practices using MLflow, Docker, and cloud platforms",
      "Developed deep learning models for computer vision and NLP tasks",
      "Worked on automated model retraining and monitoring workflows",
      "Collaborated with cross-functional teams including data engineers and stakeholders",
      "Participated in client-facing technical discussions and solution design"
    ],
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Scikit-learn",
      "MLflow",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "SQL",
      "Git"
    ],
    awards: [
      "Faculty Talent Scholarship (2 consecutive years)"
    ]
  }
];
