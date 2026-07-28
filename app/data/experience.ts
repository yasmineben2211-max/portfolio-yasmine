export const experienceDetails = {
  1: {
    id: 1,
    title: "Stagiaire Ingénieure Robotique & Intelligence Artificielle",
    company: "Enova ROBOTICS",
    period: "Juin 2026 – Aujourd’hui",
    location: "Sousse, Tunisie • Hybride",
    overview:
      "Développement d’une solution de détection prédictive d’anomalies pour un robot mobile autonome outdoor à partir de données LiDAR 3D, IMU, actionneurs et diagnostics système dans une architecture ROS.",
    image: "/companyicon/enova.png",
    missions: [
      "Prétraitement et synchronisation de séries temporelles multi-capteurs.",
      "Détection des incohérences, valeurs aberrantes et anomalies.",
      "Comparaison de méthodes statistiques et de modèles de Machine Learning.",
      "Étude d’une approche hybride intégrant des autoencodeurs.",
      "Développement d’un pipeline utilisant un LLM via API pour interpréter les anomalies.",
      "Conception d’un dashboard interactif pour comparer les modèles."
    ],
    skills: [
      "Python",
      "ROS",
      "Linux",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Pydantic",
      "Machine Learning",
      "Time Series",
      "Anomaly Detection",
      "Git"
    ]
  },

  2: {
    id: 2,
    title: "Stagiaire — Génération 3D avec IA générative",
    company: "INEDIIA",
    period: "Mai 2024 – Septembre 2024",
    location: "Lille, France • Sur site",
    overview:
      "Optimisation de la cohérence visuelle et sémantique de modèles 3D générés à partir de descriptions textuelles.",
    image: "/companyicon/inediia.png",
    missions: [
      "Développement de pipelines IA pour la génération d’objets 3D.",
      "Gestion des contraintes de profondeur, perspective et cohérence des détails.",
      "Intégration de Point-E et CLIP.",
      "Validation des modèles avec Blender et Unity."
    ],
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "GANs",
      "CLIP",
      "Point-E",
      "Blender",
      "Unity"
    ]
  },

  3: {
    id: 3,
    title: "Développement d’un système de détection biomédicale",
    company: "ACTIA Engineering Services",
    period: "Septembre 2022 – Août 2023",
    location: "Tunis, Tunisie • Sur site",
    overview:
      "Développement d’un radar biomédical permettant de détecter le rythme cardiaque et la fréquence respiratoire en temps réel.",
    image: "/companyicon/actia.png",
    missions: [
      "Transmission des données par liaison UART.",
      "Communication BLE avec un module NRF52.",
      "Développement d’une application Qt pour la visualisation en temps réel.",
      "Intégration du pipeline de communication embarqué."
    ],
    skills: [
      "C",
      "C++",
      "UART",
      "BLE",
      "NRF52",
      "Qt Creator",
      "TCP/IP",
      "Traitement du signal"
    ]
  },

  4: {
    id: 4,
    title: "Stagiaire — Conception de carte électronique",
    company: "Kodji Robot",
    period: "Juillet 2022",
    location: "Sousse, Tunisie • Sur site",
    overview:
      "Conception d’une carte de commande électronique basée sur un microcontrôleur ATmega32.",
    image: "/companyicon/kodji.png",
    missions: [
      "Réalisation du schéma électronique.",
      "Routage du circuit imprimé.",
      "Conception sous Altium Designer.",
      "Rédaction de la documentation technique."
    ],
    skills: [
      "Altium Designer",
      "ATmega32",
      "PCB",
      "Schématique",
      "Routage",
      "Arduino"
    ]
  }
} as const