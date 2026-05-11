export type ProjectDetail = {
  id: number
  title: string
  company: string
  overview: string
  mainImage: string
  link: string
  github?: string
  features: {
    title: string
    description: string
  }[]
  techStack: {
    category: string
    items: string[]
  }[]
  achievements: {
    metric: string
    value: string
    change: number
  }[]
}

export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Modélisation des mécanismes de neuromodulation du système limbique",
    company: "ENSEA / CY Cergy Paris Université",
    overview:
      "Projet de recherche centré sur la modélisation des mécanismes de neuromodulation dans le système limbique, avec un focus sur les interactions entre dopamine et sérotonine. Le travail vise à mieux comprendre l’influence de ces neuromodulateurs sur les comportements émotionnels et adaptatifs, notamment dans des contextes liés à la peur, à la dépression et au stress post-traumatique.",
    mainImage: "/project/neuromodulation.png",
    link: "/projects/1",
    github: "",
    features: [
      {
        title: "Modélisation des interactions dopamine / sérotonine",
        description:
          "Étude du rôle de la dopamine dans les signaux de récompense et de la sérotonine dans la régulation des réponses émotionnelles."
        
      },
      {
        title: "Apprentissage par renforcement",
        description:
          "Utilisation de paradigmes d’apprentissage par renforcement pour modéliser les réponses neuronales à des stimuli imprévus et stressants."
        
      },
      {
        title: "Plasticité synaptique",
        description:
          "Intégration de principes de plasticité synaptique basés sur les règles de Hebb pour simuler l’apprentissage adaptatif."
        
      }
    ],
    techStack: [
      {
        category: "Recherche / Modélisation",
        items: ["Apprentissage par renforcement", "Neurosciences", "Plasticité synaptique", "Systèmes complexes"]
      }
    ],
    achievements: [
      {
        metric: "Projet",
        value: "Recherche",
        change: 1
      },
      {
        metric: "Neuromodulateurs étudiés",
        value: "2",
        change: 2
      },
      {
        metric: "Approches principales",
        value: "3",
        change: 3
      }
    ]
  },

  2: {
    id: 2,
    title: "AutoInsight — Détection & diagnostic de défaillances automobiles",
    company: "National Engineering School of Monastir",
    overview:
      "Projet de diagnostic automobile intelligent combinant vision par ordinateur, capteurs et application mobile. Le système repose sur Raspberry Pi, caméras et YOLO pour détecter visuellement certaines défaillances, comme des pneus dégonflés ou des phares endommagés, avec gestion des données via Firebase.",
    mainImage: "/project/autoinsight.png",
    link: "/projects/2",
    github: "",
    features: [
      {
        title: "Détection visuelle de défauts",
        description:
          "Utilisation de YOLO et de caméras embarquées pour identifier des signes visibles de défaillance sur les véhicules."
        
      },
      {
        title: "Surveillance par capteurs",
        description:
          "Intégration de capteurs simples pour surveiller la pression des pneus et déclencher des alertes selon des seuils prédéfinis."
        
      },
      {
        title: "Application mobile et alertes",
        description:
          "Développement d’une application React Native permettant de recevoir des alertes et des rappels d’entretien."
        
      }
    ],
    techStack: [
      {
        category: "Vision / IA",
        items: ["YOLO", "OpenCV", "PyTorch"]
      },
      {
        category: "Systèmes / Mobile",
        items: ["Raspberry Pi", "React Native", "Firebase", "Python"]
      }
    ],
    achievements: [
      {
        metric: "Modules principaux",
        value: "4+",
        change: 4
      },
      {
        metric: "Technologies utilisées",
        value: "6+",
        change: 6
      },
      {
        metric: "Plateforme embarquée",
        value: "Raspberry Pi",
        change: 1
      }
    ]
  },

  3: {
    id: 3,
    title: "Carte MEMS — Capteur portatif et autonome (MPU9250)",
    company: "National Engineering School of Monastir",
    overview:
      "Conception et réalisation d’une carte électronique basée sur le capteur MPU9250 à 9 axes pour mesurer précisément les mouvements dans l’espace. Le système intègre également une alimentation adaptée et un microcontrôleur pour l’acquisition, le traitement et l’affichage temps réel des données.",
    mainImage: "/project/carte-mems.png",
    link: "/projects/3",
    github: "",
    features: [
      {
        title: "Conception d’une carte IMU 9 axes",
        description:
          "Développement d’une carte intégrant le capteur MPU9250 pour mesurer accélération, vitesse angulaire et champ magnétique."
        
      },
      {
        title: "Chaîne d’alimentation intégrée",
        description:
          "Intégration d’un convertisseur DC-DC et d’un régulateur LDO afin d’assurer une alimentation stable du système."
        
      },
      {
        title: "Acquisition et traitement embarqués",
        description:
          "Utilisation d’un microcontrôleur ATmega32 pour acquérir, traiter et afficher les données capteurs en temps réel."
        
      }
    ],
    techStack: [
      {
        category: "Électronique / Embarqué",
        items: ["MPU9250", "ATmega32", "C/C++", "PCB", "I2C/SPI"]
      },
      {
        category: "Outils",
        items: ["Altium Designer"]
      }
    ],
    achievements: [
      {
        metric: "Axes mesurés",
        value: "9",
        change: 9
      },
      {
        metric: "Carte conçue",
        value: "1",
        change: 1
      },
      {
        metric: "Microcontrôleur",
        value: "ATmega32",
        change: 1
      }
    ]
  },

  4: {
    id: 4,
    title: "Data Pipeline — Data Processing & Visualization",
    company: "Projet personnel / Data Engineering",
    overview:
      "Projet de pipeline de données complet appliqué à un dataset e-commerce, avec un objectif fort de conformité RGPD. Le pipeline automatise l’anonymisation, le nettoyage, la transformation et la visualisation des données clients et transactions.",
    mainImage: "/project/datapipeline.png",
    link: "/projects/4",
    github: "",
    features: [
      {
        title: "Anonymisation des données sensibles",
        description:
          "Mise en place d’un traitement d’anonymisation basé sur du hachage SHA-256 pour protéger les informations personnelles."
        
      },
      {
        title: "Nettoyage et transformation des données",
        description:
          "Gestion des valeurs manquantes, suppression des doublons et des outliers, puis transformation des données pour l’analyse."
       
      },
      {
        title: "Visualisation interactive",
        description:
          "Construction d’un pipeline automatisé avec Apache NiFi et réalisation d’un dashboard interactif sous Power BI."
       
      }
    ],
    techStack: [
    {
      category: "Programmation & traitement",
      items: ["Python", "Pandas", "Manipulation de datasets", "Data Cleaning", "Transformation de données"]
    },
    {
      category: "Privacy / protection des données",
      items: ["Anonymisation", "Pseudonymisation", "Hashing SHA-256", "Protection des données sensibles", "RGPD"]
    },
    {
      category: "Data Engineering",
      items: ["Pipeline de données", "ETL", "Apache NiFi", "Automatisation du traitement"]
    },
    {
      category: "Data Visualisation",
      items: ["Power BI", "Dashboards interactifs", "Analyse de tendances", "Analyse temporelle"]
    },
   
  ],
    achievements: [
      {
        metric: "Étapes du pipeline",
        value: "4",
        change: 4
      },
      {
        metric: "Technologies principales",
        value: "4",
        change: 4
      },
      {
        metric: "Conformité",
        value: "RGPD",
        change: 1
      }
    ]
  },

  5: {
    id: 5,
    title: "Déploiement d’une application microservices sur Kubernetes",
    company: "Projet personnel / DevOps & Cloud",
    overview:
      "Mini-projet de déploiement d’une application distribuée de suivi de flotte de véhicules (Fleetman) sur un cluster Kubernetes multi-nœuds. L’objectif était de comprendre les principes fondamentaux de Kubernetes appliqués à une architecture microservices.",
    mainImage: "/project/kubernetes.png",
    link: "/projects/5",
    github: "",
    features: [
      {
        title: "Déploiement microservices sur Kubernetes",
        description:
          "Déploiement d’une application distribuée composée de plusieurs services interconnectés sur un cluster Kubernetes."
       
      },
      {
        title: "Communication REST et messaging",
        description:
          "Mise en œuvre de communications entre services via API et file de messages ActiveMQ."
      },  
      {
        title: "Persistance et exposition",
        description:
          "Gestion de la persistance avec PersistentVolumeClaim, isolation par ClusterIP et exposition via NodePort."
       
      }
    ],
    techStack: [
    {
      category: "Orchestration & conteneurisation",
      items: ["Kubernetes", "Docker", "Containerisation", "Cluster multi-nœuds"]
    },
    {
      category: "Architecture logicielle",
      items: ["Microservices", "Application distribuée", "API Gateway", "Communication REST"]
    },
    {
      category: "Messaging & backend",
      items: ["Spring Boot", "ActiveMQ", "AMQP"]
    },
    {
      category: "Base de données & stockage",
      items: ["MongoDB", "PersistentVolumeClaim", "Persistance des données"]
    },
    {
      category: "Réseau & déploiement",
      items: ["ClusterIP", "NodePort", "Déploiement Kubernetes", "Gestion des services"]
    },
    {
      category: "Environnement",
      items: ["VirtualBox", "Linux", "Administration système"]
    }
  ],
    achievements: [
      {
        metric: "Nœuds du cluster",
        value: "3",
        change: 3
      },
      {
        metric: "Services principaux",
        value: "6",
        change: 6
      },
      {
        metric: "Types de communication",
        value: "2",
        change: 2
      }
    ]
  },

  6: {
    id: 6,
    title: "Smart Door — Porte intelligente avec reconnaissance faciale",
    company: "National Engineering School of Monastir",
    overview:
      "Projet de porte intelligente avec reconnaissance faciale basé sur Raspberry Pi 4. Le système utilise le traitement d’image et le machine learning pour autoriser l’accès uniquement aux visages reconnus.",
    mainImage: "/project/smart-door.jpg",
    link: "/projects/6",
    github: "",
    features: [
      {
        title: "Reconnaissance faciale",
        description:
          "Détection et identification des visages autorisés pour permettre une entrée sécurisée."
      },
      {
        title: "Traitement d’image embarqué",
        description:
          "Utilisation d’OpenCV et de Python pour le traitement des images capturées."
      
      },
      {
        title: "Déploiement sur Raspberry Pi",
        description:
          "Mise en œuvre du système sur Raspberry Pi 4 pour une solution légère et embarquée."
      
      }
    ],
    techStack: [
      {
        category: "Vision / IA",
        items: ["OpenCV", "Machine Learning", "Python"]
      },
      {
        category: "Système",
        items: ["Raspberry Pi"]
      }
    ],
    achievements: [
      {
        metric: "Plateforme",
        value: "Raspberry Pi 4",
        change: 1
      },
      {
        metric: "Fonction principale",
        value: "Reconnaissance faciale",
        change: 1
      },
      {
        metric: "Technologies clés",
        value: "4",
        change: 4
      }
    ]
  },

  7: {
    id: 7,
    title: "Carte Headphone / Audio Amplifier",
    company: "National Engineering School of Monastir",
    overview:
      "Conception d’une carte amplificateur audio destinée à renforcer un signal casque faible sur différents appareils audio. Le système peut également être utilisé comme amplificateur pour haut-parleurs.",
    mainImage: "/project/audio-amplifier.jpg",
    link: "/projects/7",
    github: "",
    features: [
      {
        title: "Amplification du signal audio",
        description:
          "Conception d’un circuit permettant d’augmenter efficacement le niveau d’un signal casque."
       
      },
      {
        title: "Configuration flexible",
        description:
          "Sélection de configurations via jumpers pour adapter le comportement de la carte selon l’usage."
        
      },
      {
        title: "Polyvalence d’utilisation",
        description:
          "Compatibilité avec mobiles, ordinateurs portables, radios FM et potentiel d’usage pour haut-parleurs."
        
      }
    ],
    techStack: [
      {
        category: "Électronique",
        items: ["Altium Designer", "PIC", "Audio", "PCB"]
      }
    ],
    achievements: [
      {
        metric: "Types d’usage",
        value: "3+",
        change: 3
      },
      {
        metric: "Carte conçue",
        value: "1",
        change: 1
      },
      {
        metric: "Domaine",
        value: "Audio",
        change: 1
      }
    ]
  },

  8: {
    id: 8,
    title: "Parking intelligent — Gestion de stationnement & embouteillages",
    company: "National Engineering School of Monastir",
    overview:
      "Projet de parking intelligent et de gestion d’embouteillage utilisant Bluetooth, Wi-Fi, Arduino et Raspberry Pi. La solution inclut une interface utilisateur et une application mobile pour améliorer la fluidité de circulation.",
    mainImage: "/project/parking-intelligent.png",
    link: "/projects/8",
    github: "",
    features: [
      {
        title: "Gestion du stationnement",
        description:
          "Suivi et optimisation de l’occupation des places dans un environnement connecté."
       
      },
      {
        title: "Réduction des embouteillages",
        description:
          "Utilisation de protocoles de communication et d’une logique de supervision pour fluidifier la circulation."
        
      },
      {
        title: "Interface et application mobile",
        description:
          "Mise à disposition d’outils utilisateurs pour suivre et exploiter les informations du système."
        
      }
    ],
    techStack: [
      {
        category: "IoT / Communication",
        items: ["Arduino", "Raspberry Pi", "Bluetooth", "Wi-Fi", "IoT"]
      },
      {
        category: "Interface",
        items: ["Application mobile"]
      }
    ],
    achievements: [
      {
        metric: "Plateformes matérielles",
        value: "2",
        change: 2
      },
      {
        metric: "Protocoles",
        value: "2",
        change: 2
      },
      {
        metric: "Objectifs principaux",
        value: "2",
        change: 2
      }
    ]
  },

  9: {
    id: 9,
    title: "Maison intelligente (Smart Home)",
    company: "National Engineering School of Monastir",
    overview:
      "Projet de maison intelligente intégrant contrôle à distance, optimisation énergétique et sécurité renforcée grâce à l’analyse de données et à l’intégration de capteurs.",
    mainImage: "/project/smart-home.png",
    link: "/projects/9",
    github: "",
    features: [
      {
        title: "Contrôle à distance",
        description:
          "Pilotage du système via application mobile."        
      },
      {
        title: "Optimisation énergétique",
        description:
          "Analyse des données pour améliorer l’utilisation de l’énergie dans l’habitat."        
      },
      {
        title: "Sécurité connectée",
        description:
          "Mise en œuvre de mécanismes de sécurité robustes pour une maison connectée."
      }
    ],
    techStack: [
      {
        category: "IoT / Smart Home",
        items: ["IoT", "ZigBee", "Capteurs", "Application mobile", "Analyse de données"]
      }
    ],
    achievements: [
      {
        metric: "Axes du projet",
        value: "3",
        change: 3
      },
      {
        metric: "Technologies clés",
        value: "5",
        change: 5
      },
      {
        metric: "Objectif",
        value: "Maison connectée",
        change: 1
      }
    ]
  },

  10: {
    id: 10,
    title: "Carte de gestion thermique intelligente",
    company: "National Engineering School of Monastir",
    overview:
      "Conception d’un système de gestion thermique intelligent avec contrôle de la vitesse d’un ventilateur selon la température, affichage LCD et mécanismes de protection.",
    mainImage: "/project/gestion-thermique.png",
    link: "/projects/10",
    github: "",
    features: [
      {
        title: "Contrôle thermique automatique",
        description:
          "Ajustement de la vitesse du ventilateur selon la température ambiante ou celle de composants spécifiques."
      },
      {
        title: "Mesure et affichage",
        description:
          "Intégration d’un capteur de température et d’un affichage LCD pour une visualisation temps réel."
      },
      {
        title: "Réglages et sécurité",
        description:
          "Possibilité de réglages personnalisés et présence d’une fonction de protection thermique."
      }
    ],
    techStack: [
      {
        category: "Électronique",
        items: ["Altium Designer", "Capteurs", "LCD", "Contrôle"]
      }
    ],
    achievements: [
      {
        metric: "Fonctions principales",
        value: "4",
        change: 4
      },
      {
        metric: "Carte conçue",
        value: "1",
        change: 1
      },
      {
        metric: "Objectif",
        value: "Gestion thermique",
        change: 1
      }
    ]
  },

  11: {
    id: 11,
    title: "Carte de régulation de vitesse (moteur DC)",
    company: "Projet académique",
    overview:
      "Conception d’une carte de régulation de vitesse pour moteur à courant continu à l’aide d’un NE555, avec simulation et validation sous Proteus 8.",
    mainImage: "/project/regulation-vitesse.png",
    link: "/projects/11",
    github: "",
    features: [
      {
        title: "Commande de vitesse",
        description:
          "Régulation de la vitesse d’un moteur DC selon les besoins d’utilisation."
      },
      {
        title: "Simulation et validation",
        description:
          "Conception et validation du comportement électrique sous Proteus 8."
      },
      {
        title: "Intégration possible",
        description:
          "Carte simple, réutilisable et intégrable dans d’autres dispositifs électroniques."
      }
    ],
    techStack: [
      {
        category: "Électronique / Simulation",
        items: ["NE555", "Proteus 8", "Moteur DC", "Simulation"]
      }
    ],
    achievements: [
      {
        metric: "Composant clé",
        value: "NE555",
        change: 1
      },
      {
        metric: "Carte conçue",
        value: "1",
        change: 1
      },
      {
        metric: "Type de moteur",
        value: "DC",
        change: 1
      }
    ]
  },
  12: {
  id: 12,
  title: "SportConnect — Architecture Data & POC Cloud-Native",
  company: "Projet académique / Data Engineering",
  overview:
    "Conception d’une architecture de données scalable pour une plateforme sociale sportive. Le projet repose sur une architecture polyglotte permettant de gérer des données relationnelles, temporelles et multimédias à travers PostgreSQL, InfluxDB et MinIO.",
  mainImage: "/project/sportconnect.png",
  link: "/projects/12",
  github: "",
  features: [
    {
      title: "Architecture de données polyglotte",
      description:
        "Séparation des workloads avec PostgreSQL pour les données relationnelles, InfluxDB pour les séries temporelles issues de capteurs, et MinIO pour le stockage objet."
    },
    {
      title: "Déploiement conteneurisé",
      description:
        "Mise en place d’un environnement de preuve de concept avec Docker Compose afin de faciliter le déploiement et la reproductibilité du projet."
    },
    {
      title: "Modélisation et optimisation SQL",
      description:
        "Conception du modèle de données, écriture de requêtes SQL analytiques et optimisation des accès aux données."
    },
    {
      title: "Sécurité, sauvegarde et scalabilité",
      description:
        "Implémentation de stratégies d’administration incluant sécurité, sauvegarde, réplication et préparation à la montée en charge."
    }
  ],
  techStack: [
    {
      category: "Bases de données",
      items: ["PostgreSQL", "InfluxDB", "MinIO"]
    },
    {
      category: "Déploiement",
      items: ["Docker", "Docker Compose"]
    },
    {
      category: "Data Engineering",
      items: ["SQL", "Modélisation de données", "Optimisation de requêtes"]
    }
  ],
  achievements: [
    {
      metric: "Types de données gérés",
      value: "3",
      change: 3
    },
    {
      metric: "Bases intégrées",
      value: "3",
      change: 3
    },
    {
      metric: "Déploiement",
      value: "Docker Compose",
      change: 1
    }
   ]
  },
  13: {
  id: 13,
  title: "Crypto Data Pipeline & BI Dashboard",
  company: "Projet académique / Data Engineering",
  overview:
    "Conception d’une pipeline de données complète dédiée à l’analyse des cryptomonnaies en temps quasi réel. Le projet transforme des données brutes issues d’une API crypto en indicateurs analytiques, visualisations interactives et prédictions exploitables pour l’aide à la décision.",
  mainImage: "/project/crypto-pipeline.png",
  link: "/projects/13",
  github: "",
  features: [
    {
      title: "Extraction automatisée des données",
      description:
        "Collecte de données crypto via l’API CoinGecko avec une architecture ELT modulaire."
    },
    {
      title: "Orchestration et monitoring",
      description:
        "Utilisation de Dagster pour orchestrer les runs, suivre l’exécution de la pipeline et gérer les erreurs."
    },
    {
      title: "Transformation et qualité des données",
      description:
        "Modélisation analytique avec dbt, transformations SQL, calcul de KPI, moyennes mobiles et tests de qualité avec dbt et pytest."
    },
    {
      title: "Dashboard BI et prédiction",
      description:
        "Création d’un dashboard interactif avec Streamlit et intégration d’un modèle scikit-learn pour prédire les tendances de prix."
    }
  ],
  techStack: [
    {
      category: "Orchestration & Pipeline",
      items: ["Dagster", "ELT", "Data Pipeline"]
    },
    {
      category: "Stockage & Transformation",
      items: ["DuckDB", "dbt", "SQL"]
    },
    {
      category: "BI & Machine Learning",
      items: ["Streamlit", "scikit-learn", "Python"]
    },
    {
      category: "Déploiement",
      items: ["Docker", "pytest"]
    }
  ],
  achievements: [
    {
      metric: "Architecture",
      value: "ELT",
      change: 1
    },
    {
      metric: "Outils intégrés",
      value: "6+",
      change: 6
    },
    {
      metric: "Source de données",
      value: "CoinGecko API",
      change: 1
    }
    ]
  },
  14: {
  id: 14,
  title: "Taxi & Weather Data Pipeline",
  company: "Projet Data Engineering",
  overview:
    "Conception et développement d’un pipeline de données distribué permettant l’ingestion, la transformation et l’orchestration de données Taxi NYC et météo. Le projet repose sur une architecture ETL automatisée utilisant PySpark, Airflow et PostgreSQL.",
  mainImage: "/project/taxi-pipeline.png",
  link: "https://github.com/chifa376/taxi-weather-pipeline",
  github: "https://github.com/chifa376/taxi-weather-pipeline",

  features: [
    {
      title: "Pipeline ETL distribué",
      description:
        "Traitement et transformation des données Taxi NYC et météo avec PySpark."
    },
    {
      title: "Orchestration automatisée",
      description:
        "Utilisation d’Apache Airflow pour automatiser les workflows et superviser les exécutions."
    },
    {
      title: "Stockage analytique",
      description:
        "Stockage des données transformées dans PostgreSQL avec calcul de métriques analytiques."
    },
    {
      title: "Conteneurisation",
      description:
        "Déploiement complet de l’architecture avec Docker afin d’assurer la portabilité et la reproductibilité."
    }
  ],

  techStack: [
    {
      category: "Data Engineering",
      items: ["PySpark", "ETL", "SQL"]
    },
    {
      category: "Orchestration",
      items: ["Apache Airflow"]
    },
    {
      category: "Stockage",
      items: ["PostgreSQL"]
    },
    {
      category: "Infrastructure",
      items: ["Docker", "Git", "GitHub"]
    }
  ],

  achievements: [
    {
      metric: "Trajets traités",
      value: "47K+",
      change: 47000
    },
    {
      metric: "Architecture",
      value: "Pipeline ETL",
      change: 1
    },
    {
      metric: "Automatisation",
      value: "Airflow",
      change: 1
    }
  ]
  },
}

export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA is empty')
    return undefined
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0]
}
// Définition du type pour les détails d’un projet
/*export type ProjectDetail = {
  id: number                // Identifiant unique du projet
  title: string             // Titre du projet
  company: string           // Nom de l’entreprise
  overview: string          // Vue d’ensemble du projet
  mainImage: string         // Chemin de l’image principale
  link: string              // URL du projet / page de détail
  github?: string           // URL optionnelle du dépôt GitHub
  features: {               // Liste des fonctionnalités / points clés
    title: string           // Titre du point clé
    description: string     // Description du point clé
    image: string | string[] // Chemin(s) de l’image
  }[]
  techStack: {              // Regroupement des technologies utilisées
    category: string        // Nom de la catégorie
    items: string[]         // Liste des technologies
  }[]
  achievements: {           // Résultats / réalisations mesurables
    metric: string          // Nom de l’indicateur
    value: string           // Valeur affichée
    change: number          // Valeur numérique
  }[]
}

// Données des projets
export const PROJECT_DATA: Record<number, ProjectDetail> = {
  1: {
    id: 1,
    title: "Génération d’images 3D haute résolution à partir de descriptions textuelles",
    company: "INEDIIA",
    overview:
      "Stage centré sur l’optimisation de la cohérence visuelle et sémantique de modèles 3D générés à partir de descriptions textuelles. Le projet impliquait le développement de pipelines d’intelligence artificielle et l’intégration d’outils avancés pour améliorer la qualité des rendus et valider les résultats dans des environnements 3D.",
    mainImage: "/projects/inediia/main.png",
    link: "/projects/1",
    github: "",
    features: [
      {
        title: "Optimisation de la cohérence visuelle et sémantique",
        description:
          "Amélioration de la qualité des modèles 3D générés afin de mieux respecter les descriptions textuelles et de conserver une cohérence globale dans la forme, les détails et l’apparence.",
        image: "/projects/inediia/feature1.png"
      },
      {
        title: "Gestion des contraintes 3D complexes",
        description:
          "Prise en compte de notions complexes comme la profondeur, la perspective et la consistance des détails afin d’obtenir des objets plus réalistes et mieux structurés.",
        image: "/projects/inediia/feature2.png"
      },
      {
        title: "Développement de pipelines IA",
        description:
          "Conception et implémentation de pipelines d’intelligence artificielle avec TensorFlow, PyTorch et des approches basées sur les GANs pour améliorer la génération 3D.",
        image: "/projects/inediia/feature3.png"
      },
      {
        title: "Validation dans des outils 3D",
        description:
          "Exploration et utilisation d’outils comme Blender et Unity pour valider visuellement les modèles générés et évaluer leur qualité dans différents contextes d’usage.",
        image: "/projects/inediia/feature4.png"
      }
    ],
    techStack: [
      {
        category: "Intelligence artificielle",
        items: ["TensorFlow", "PyTorch", "GANs", "CLIP", "Point-E"]
      },
      {
        category: "Outils 3D",
        items: ["Blender", "Unity"]
      },
      {
        category: "Analyse / Visualisation",
        items: ["Python", "Seaborn"]
      }
    ],
    achievements: [
      {
        metric: "Durée du stage",
        value: "5 mois",
        change: 5
      },
      {
        metric: "Technologies principales utilisées",
        value: "7+",
        change: 7
      },
      {
        metric: "Axes d’amélioration",
        value: "3",
        change: 3
      }
    ]
  },

  2: {
    id: 2,
    title: "Développement d’un système de détection biomédicale",
    company: "ACTIA Engineering Services",
    overview:
      "Projet de développement d’un radar biomédical capable de détecter le rythme cardiaque et la fréquence respiratoire en temps réel. Le système reposait sur une chaîne complète allant de l’acquisition et du traitement des données jusqu’à leur transmission vers une application mobile pour visualisation en temps réel.",
    mainImage: "/projects/actia/main.png",
    link: "/projects/2",
    github: "",
    features: [
      {
        title: "Détection des signaux biomédicaux en temps réel",
        description:
          "Développement d’un radar capable de mesurer le rythme cardiaque et la fréquence respiratoire avec une logique de fonctionnement orientée temps réel.",
        image: "/projects/actia/feature1.png"
      },
      {
        title: "Pipeline de communication embarqué",
        description:
          "Mise en place d’une transmission des données via liaison UART vers un module NRF523 afin d’assurer l’échange entre le système de détection et le module de communication.",
        image: "/projects/actia/feature2.png"
      },
      {
        title: "Communication Bluetooth Low Energy",
        description:
          "Implémentation d’une communication BLE pour transmettre les données biomédicales à une application mobile dédiée.",
        image: "/projects/actia/feature3.png"
      },
      {
        title: "Visualisation mobile en temps réel",
        description:
          "Développement d’une application mobile avec Qt Creator pour afficher en direct les données biomédicales sur appareil mobile.",
        image: "/projects/actia/feature4.png"
      }
    ],
    techStack: [
      {
        category: "Embarqué / Communication",
        items: ["UART", "BLE", "NRF523", "TCP/IP"]
      },
      {
        category: "Développement logiciel",
        items: ["Qt Creator", "C", "C++"]
      },
      {
        category: "Traitement / Système",
        items: ["Traitement du signal", "Système temps réel"]
      }
    ],
    achievements: [
      {
        metric: "Durée de l’alternance",
        value: "12 mois",
        change: 12
      },
      {
        metric: "Canaux de communication intégrés",
        value: "2",
        change: 2
      },
      {
        metric: "Signaux biomédicaux suivis",
        value: "2",
        change: 2
      }
    ]
  },

  3: {
    id: 3,
    title: "Conception de carte de commande électronique",
    company: "Kodji Robot",
    overview:
      "Stage orienté conception électronique autour du développement d’une carte de commande basée sur ATmega32, compatible avec l’environnement Arduino. Le projet comprenait la conception du schéma, le routage PCB et la rédaction d’une documentation technique décrivant les spécifications et les usages possibles.",
    mainImage: "/projects/kodji/main.png",
    link: "/projects/3",
    github: "",
    features: [
      {
        title: "Conception d’une carte basée sur ATmega32",
        description:
          "Développement d’une carte de commande électronique inspirée de l’écosystème Arduino, pensée pour être polyvalente et adaptée à plusieurs applications embarquées.",
        image: "/projects/kodji/feature1.png"
      },
      {
        title: "Schéma électronique et routage PCB",
        description:
          "Création du schéma électrique et routage des pistes avec Altium Designer pour garantir un fonctionnement fiable et une bonne compatibilité matérielle.",
        image: "/projects/kodji/feature2.png"
      },
      {
        title: "Compatibilité avec l’environnement Arduino",
        description:
          "Conception d’une architecture matérielle compatible avec l’environnement Arduino afin de faciliter le prototypage, le test et l’intégration future.",
        image: "/projects/kodji/feature3.png"
      },
      {
        title: "Documentation technique",
        description:
          "Rédaction d’un rapport détaillant les choix de conception, les spécifications techniques et les usages possibles de la carte réalisée.",
        image: "/projects/kodji/feature4.png"
      }
    ],
    techStack: [
      {
        category: "Conception électronique",
        items: ["Altium Designer", "Schématique", "Routage PCB"]
      },
      {
        category: "Microcontrôleurs",
        items: ["ATmega32", "Arduino"]
      },
      {
        category: "Compétences associées",
        items: ["Électronique embarquée", "Documentation technique"]
      }
    ],
    achievements: [
      {
        metric: "Durée du stage",
        value: "1 mois",
        change: 1
      },
      {
        metric: "Carte conçue",
        value: "1 prototype",
        change: 1
      },
      {
        metric: "Environnement ciblé",
        value: "Arduino compatible",
        change: 1
      }
    ]
  }
}

// Fonction utilitaire : récupérer un projet par son ID
export const getProjectById = (id: number): ProjectDetail | undefined => {
  if (!Object.keys(PROJECT_DATA).length) {
    console.warn('PROJECT_DATA est vide');
    return undefined;
  }
  return PROJECT_DATA[id] || Object.values(PROJECT_DATA)[0];
}*/
