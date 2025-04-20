import {
  mobile,
  backend,
  creator,
  codeveda,
  azure,
  docker,
  sqlserver,
  streamlit,
  opencv,
  flask,
  spark,
  dotnet,
  cplus,
  web,
  javascript,
  html,
  css,
  fake,
  twittersenti,
  reactjs,
  emailclass,
  nodejs,
  mongodb,
  git,
  codealphalogo,
  den,
  stroke,
  reconenergy,
  uet,
  crypto,
  // Data Science & ML related imports
  python,
  pytorch,
  scikit,
  pandas,
  numpy,
  jupyter,
  newsinsight,
  keras,
  taskmanager,
  app,
  chess,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Science",
    icon: backend,
  },
  {
    title: "Machine Learning",
    icon: creator,
  },
  {
    title: "NLP & Deep Learning",
    icon: web,
  },
  {
    title: "Data Analysis",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Azure",
    icon: azure,
  },
  {
    name: "SQL Server",
    icon: sqlserver,
  },
  {
    name: "PyTorch",
    icon: pytorch,
  },
  {
    name: "scikit-learn",
    icon: scikit,
  },
  {
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "NumPy",
    icon: numpy,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "Spark",
    icon: spark,
  },
  {
    name: "Open CV",
    icon: opencv,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Web Developer & Marketing Collaborator",
    company_name: "Recon Energy (Solar Energy Company)",
    icon: reconenergy,
    iconBg: "#FFFFFF",
    date: "March 2024 - May 2024",
    certificateLink: null,
    points: [
      "Led web development for a solar energy company as part of a two-member team, designing and building a responsive website using WordPress.",
      "Designed an intuitive UI, improving user engagement by 20% through streamlined navigation and visually appealing layout.",
      "Collaborated with the marketing team to align web content with branding goals and enhance online presence.",
    ],
  },
  {
    title: "DS & ML Intern → Batch Leader & Mentor",
    company_name: "Digital Empowerment Network (DEN)",
    icon: den, // Fallback to codealphalogo
    iconBg: "#383E56",
    date: "June 2024 - August 2024",
    certificateLink: "https://drive.google.com/drive/folders/1FkrnFGz9FyYhT-VoHV4DDwkBuQZ4qALw?usp=sharing",
    points: [
      "Started as a Data Science intern and was quickly promoted to lead both Data Science and Machine Learning batches.",
      "Completed all assigned tasks while mentoring fellow interns, resolving queries, and guiding project development.",
      "Led 3 consecutive batches, designing and delivering sessions on key topics and best practices in Data Science and Machine Learning.",
      "Demonstrated strong technical skills and communication abilities, contributing to the success of the program.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "CodeAlpha (International Company)",
    icon: codealphalogo,
    iconBg: "#E6DEDD",
    date: "June 2024 - September 2024",
    certificateLink: "https://drive.google.com/file/d/1CJPs6uQZI7bWI7h8qwao_bS4ajcydqFL/view?usp=drive_link",
    points: [
      "Built machine learning models using Python, solving business problems with 87% accuracy across 3+ projects.",
      "Performed data preprocessing and feature engineering, boosting model performance by 12% via categorical encoding and feature scaling.",
      "Created a sentiment analysis pipeline using NLTK and Random Forest, achieving 84% accuracy, and documented the project on GitHub for reproducibility.",
      "Developed an LSTM-based stock price prediction model using Python, yfinance, and TensorFlow, predicting closing prices with an RMSE of 5.2% on test data.",
    ],
  },
  {
    title: "Guest Speaker, Data Science",
    company_name: "UET Taxila",
    icon: uet, // Fallback to codealphalogo
    iconBg: "#383E56",
    date: "November 3, 2024",
    certificateLink: "https://drive.google.com/file/d/13FitG5J-F77jZ7tfBEgbmhvQeyAjFbQ7/view?usp=sharing",
    points: [
      "Delivered a presentation on 'Intro to Data Science,' sharing insights on predictive modeling and data analysis.",
      "Engaged with attendees through a Q&A session, fostering discussions on emerging trends in Data Science and machine learning.",
      "Recognized for expertise in data-driven solutions and ability to communicate complex concepts effectively.",
    ],
  },
  {
    title: "Machine Learning Intern",
    company_name: "Codveda",
    icon: codeveda, // Fallback to codealphalogo
    iconBg: "#383E56",
    date: "April 19, 2025 - May 19, 2025",
    certificateLink: null,
    points: [
      "Developed and implemented machine learning algorithms for real-world business applications.",
      "Performed data analysis, preprocessing, and feature selection to optimize model performance.",
      "Collaborated with cross-functional teams to integrate machine learning solutions into existing systems.",
      "Contributed to research and development of innovative ML approaches to solve complex problems.",
    ],
  },
];

const projects = [
  {
    name: "News Insight",
    description:
      "A Flask-based web app for sentiment and topic analysis of news articles across different media channels. Features include chatbot integration, article summarization, real-time updates, and interactive dashboards.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: newsinsight,
    source_code_link: "https://github.com/ameertufail/News-Analysis",
  },
  {
    name: "Twitter Bitcoin Sentiment Analysis",
    description:
      "A sentiment analysis system for Bitcoin-related tweets using PySpark. Combines traditional methods (VADER, AFINN) and machine learning models (Logistic Regression, Naive Bayes) to analyze large-scale datasets efficiently.",
    tags: [
      {
        name: "pyspark",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "nlp",
        color: "pink-text-gradient",
      },
    ],
    image: twittersenti,
    source_code_link: "https://github.com/ameertufail/twitter-btc-sentiment-analysis-pyspark",
  },
  {
    name: "Crypto Candlestick Prediction",
    description:
      "A deep learning pipeline to predict OHLC values using fused time-series, chart images, and news sentiment. Built a hybrid LSTM-CNN-Transformer model with cross-modal attention for real-time prediction.",
    tags: [
      {
        name: "tensorflow",
        color: "blue-text-gradient",
      },
      {
        name: "deep-learning",
        color: "green-text-gradient",
      },
      {
        name: "time-series",
        color: "pink-text-gradient",
      },
    ],
    image: crypto,
    source_code_link: "https://github.com/ameertufail/Crypto-OHLC-Analysis-Application",
  },
  {
    name: "Deepfake Image Detection using PySpark & CNN",
    description:
      "Built an image classification pipeline to detect deepfake images using a large scale dataset from Kaggle. Leveraged PySpark for distributed preprocessing and TensorFlow-based Convolutional Neural Networks (CNNs) for deepfake vs. real image classification.",
    tags: [
      { name: "pyspark", color: "blue-text-gradient" },
      { name: "tensorflow", color: "green-text-gradient" },
      { name: "deep-learning", color: "pink-text-gradient" },
    ],
    image: fake,
    source_code_link: "https://github.com/ameertufail/Deepfake-Image-Detection-PySpark",
  },
  {
    name: "Stroke Prediction Healthcare Model",
    description:
      "Developed a machine learning model to predict stroke likelihood based on health and demographic factors. Implemented K-Nearest Neighbors (KNN) classifier with data preprocessing, feature engineering, and model optimization to identify high-risk individuals.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "scikit-learn", color: "green-text-gradient" },
      { name: "healthcare", color: "pink-text-gradient" },
    ],
    image: stroke,
    source_code_link: "https://github.com/ameertufail/Stroke-Prediction-Healthcare-Model",
  },
  {
    name: "Email Classification Project",
    description:
      "Developed a machine learning system for automatic email classification using natural language processing techniques. Implemented and compared multiple algorithms including Multinomial Naive Bayes and SVM, with comprehensive data preprocessing and model evaluation metrics.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "SVM", color: "green-text-gradient" },
      { name: "nlp", color: "pink-text-gradient" },
    ],
    image: emailclass,
    source_code_link: "https://github.com/ameertufail/email-classification",
  },
  {
    name: "Modern Task Manager",
    description:
      "A sleek and intuitive task management application with features like task creation/editing, priority levels, tags, dark/light mode, search functionality, and data persistence. Built with React, TypeScript, Vite, and TailwindCSS.",
    tags: [
      { name: "react", color: "blue-text-gradient" },
      { name: "typescript", color: "green-text-gradient" },
      { name: "tailwindcss", color: "pink-text-gradient" },
    ],
    image: taskmanager,
    source_code_link: "https://github.com/ameertufail/Modern-Task-Manager",
    live_link: "https://ameertufail.github.io/Modern-Task-Manager/",
  },
  {
    name: "Personal Finance Tracker",
    description:
      "A modern, user-friendly desktop application for tracking personal finances with interactive charts, real-time balance updates, and data import/export capabilities. Features a sleek dark theme and intuitive transaction management.",
    tags: [
      { name: "python", color: "blue-text-gradient" },
      { name: "tkinter", color: "green-text-gradient" },
      { name: "matplotlib", color: "pink-text-gradient" },
    ],
    image: app,
    source_code_link: "https://github.com/ameertufail/PersonalFinanceTracker",
  },
  {
    name: "Chess GUI",
    description:
      "A full-featured chess game with graphical interface implementing all standard chess rules including check, checkmate, and castling. Built with C++ and SDL2 libraries featuring piece selection, move validation, and game state management.",
    tags: [
      { name: "C++", color: "blue-text-gradient" },
      { name: "SDL2", color: "green-text-gradient" },
      { name: "CMake", color: "pink-text-gradient" },
    ],
    image: chess,
    source_code_link: "https://github.com/ameertufail/Chess-GUI",
  },
];

export { services, technologies, experiences, projects };
