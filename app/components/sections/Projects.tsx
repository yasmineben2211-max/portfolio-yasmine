'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

type Project = {
  id: number
  title: string
  description: string
  period: string
  image: string
  skills: string[]
  link: string
}

// Projets (ordre : plus récent → plus ancien)
const projects: Project[] = [
  {
  id: 13,
  title: "Crypto Data Pipeline & BI Dashboard",
  description:
    "Pipeline de données complète pour l’analyse de cryptomonnaies en temps quasi réel, avec orchestration, transformations SQL, dashboard BI et prédiction des tendances.",
  period: "2026",
  image: "/project/crypto-pipeline.png",
  skills: ["Dagster", "DuckDB", "dbt", "Streamlit", "scikit-learn", "Docker"],
  link: "#"
  },
  {
  id: 12,
  title: "SportConnect — Architecture Data & POC Cloud-Native",
  description:
    "Conception d’une architecture de données scalable pour une plateforme sociale sportive, combinant bases relationnelles, séries temporelles et stockage objet.",
  period: "2026",
  image: "/project/sportconnect.png",
  skills: ["PostgreSQL", "InfluxDB", "MinIO", "Docker", "SQL"],
  link: "#"
  },
  {
    id: 5,
    title: "Microservices Deployment on Kubernetes",
    description: "Déploiement d’une application distribuée de suivi de flotte sur un cluster Kubernetes multi-nœuds avec architecture microservices.",
    period: "2026",
    image: "/project/kubernetes.png",
    skills: ["Kubernetes","Docker","Spring Boot","MongoDB","Microservices"],
    link: "#"
  },
  {
    id: 4,
    title: "Data Pipeline – Data Processing & Visualization",
    description: "Pipeline automatisé pour anonymiser, nettoyer, transformer et analyser des données e-commerce tout en respectant le RGPD.",
    period: "2026",
    image: "/project/datapipeline.png",
    skills: ["Python","Pandas","Apache NiFi","Power BI","Data Engineering"],
    link: "#"
  },
  {
    id: 1,
    title: "Modélisation des mécanismes de neuromodulation du système limbique",
    description:
      "Projet de recherche : modélisation des interactions dopamine / sérotonine et de leur influence sur les comportements émotionnels (peur, dépression, stress). Utilisation de paradigmes d’apprentissage par renforcement et de règles de plasticité (Hebb) pour simuler l’apprentissage adaptatif.",
    period: "Oct. 2024 – avril 2025",
    image: "/project/neuromodulation.png",
    skills: ["Apprentissage par renforcement", "Modélisation", "Neurosciences", "Plasticité synaptique"],
    link: "#"
  },
  {
    id: 2,
    title: "AutoInsight — Détection & diagnostic de défaillances automobiles",
    description:
      "Système de détection basé sur Raspberry Pi + caméras et YOLO pour identifier des défauts visibles (pneu dégonflé, phare endommagé) + capteurs (pression). Alertes et rappels via application mobile (React Native). Collecte/gestion de données via Firebase en Python.",
    period: "Nov. 2023 – Janv. 2024",
    image: "/project/autoinsight.png",
    skills: ["YOLO", "OpenCV", "PyTorch", "Raspberry Pi", "React Native", "Firebase", "Python"],
    link: "#"
  },
  {
    id: 3,
    title: "Carte MEMS — Capteur portatif et autonome (MPU9250)",
    description:
      "Conception et réalisation d’une carte électronique basée sur MPU9250 (IMU 9 axes) avec alimentation (DC-DC + LDO) et microcontrôleur ATmega32 pour acquisition, traitement et affichage temps réel. Schéma + routage + optimisation sous Altium Designer.",
    period: "Sept. 2023 – Oct. 2023",
    image: "/project/carte-mems.png",
    skills: ["MPU9250", "ATmega32", "Altium Designer", "C/C++", "PCB", "I2C/SPI"],
    link: "#"
  },
  {
    id: 6,
    title: "Smart Door — Porte intelligente avec reconnaissance faciale",
    description:
      "Système de contrôle d’accès basé sur Raspberry Pi 4 avec reconnaissance faciale. Traitement d’image + machine learning (OpenCV, Python) pour autoriser l’accès uniquement aux visages enregistrés.",
    period: "Mai 2023 – Juin 2023",
    image: "/project/smart-door.jpg",
    skills: ["OpenCV", "Python", "Raspberry Pi", "Reconnaissance faciale", "Machine Learning"],
    link: "#"
  },
  {
    id: 7,
    title: "Carte Headphone / Audio Amplifier",
    description:
      "Conception d’une carte amplificateur de casque pour renforcer un signal audio faible. Sélection de configurations via jumpers, compatible avec mobiles/PC/radio FM. Peut servir d’amplificateur audio pour haut-parleurs.",
    period: "Févr. 2023 – Mars 2023",
    image: "/project/audio-amplifier.jpg",
    skills: ["Altium Designer", "PIC", "Audio", "Électronique analogique", "PCB"],
    link: "#"
  },
  {
  id: 15,
    title: "SUPFile — Cloud Storage Platform",
    description:
      "Application web full-stack de stockage cloud inspirée de Google Drive, développée en binôme. Upload chiffré, partage par lien public (mot de passe + expiration), partage interne entre utilisateurs, prévisualisation de fichiers, recherche en temps réel, dark mode, raccourcis clavier et infinite scroll.",
    period: "Jan. 2026 – Juin 2026",
    image: "/project/supfile.png",
    skills: ["React", "TypeScript", "NestJS", "PostgreSQL", "Docker", "JWT", "OAuth2", "REST API"],
    link: "https://github.com/yasminebenhajsalah2211-max/Supfile"
  },
  {
    id: 8,
    title: "Parking intelligent — Gestion de stationnement & embouteillages",
    description:
      "Solution de parking intelligent et gestion du trafic utilisant Bluetooth/Wi-Fi, cartes Arduino et Raspberry Pi. Interface utilisateur + application mobile pour améliorer la fluidité de circulation et réduire les embouteillages.",
    period: "Mars 2023",
    image: "/project/parking-intelligent.png",
    skills: ["Arduino", "Raspberry Pi", "Bluetooth", "Wi-Fi", "Application mobile", "IoT"],
    link: "#"
  },
  {
    id: 9,
    title: "Maison intelligente (Smart Home)",
    description:
      "Contrôle à distance via application mobile, optimisation énergétique grâce à l’analyse de données et mise en œuvre de mesures de sécurité pour une maison connectée.",
    period: "Déc. 2022",
    image: "/project/smart-home.png",
    skills: ["IoT", "ZigBee", "Capteurs", "Application mobile", "Analyse de données"],
    link: "#"
  },
  {
    id: 10,
    title: "Carte de gestion thermique intelligente",
    description:
      "Conception d’un système de gestion thermique : contrôle de ventilateur en fonction de la température, capteur intégré, affichage LCD, réglages personnalisables et protection thermique pour sécurité.",
    period: "Nov. 2022",
    image: "/project/gestion-thermique.png",
    skills: ["Altium Designer", "Capteurs", "LCD", "Contrôle", "Électronique"],
    link: "#"
  },
  {
  id: 14,
  title: "Taxi & Weather Data Pipeline",
  description:
    "Pipeline de données distribué permettant l’ingestion, la transformation et l’orchestration de données Taxi NYC et météo avec PySpark et Airflow.",
  period: "2026",
  image: "/project/taxi-pipeline.png",
  skills: [
    "PySpark",
    "Apache Airflow",
    "PostgreSQL",
    "Docker",
    "SQL",
    "ETL"
  ],
  link: "https://github.com/chifa376/taxi-weather-pipeline"
  },
  {
    id: 11,
    title: "Carte de régulation de vitesse (moteur DC)",
    description:
      "Conception d’une carte de régulation de vitesse d’un moteur à courant continu basée sur NE555, simulation et validation sous Proteus 8. Contrôle simple et intégrable à d’autres systèmes.",
    period: "Janv. 2021",
    image: "/project/regulation-vitesse.png",
    skills: ["NE555", "Proteus 8", "Électronique", "Moteur DC", "Simulation"],
    link: "#"
  }
]

export default function Projects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  return (
    <section id="projects" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-4 md:py-8
        relative
        overflow-hidden
      ">
        <GradientBackground
          sectionId="projects"
          gradientColors={{
            start: '#D7897F',  // Nectarine
            end: '#F9B95C'     // Pêche
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center relative z-10">
            Projets
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {projects.map((project) => (
            <div key={project.id}>
              <AnimatedText>
                <div
                  onClick={() => {
                    setSelectedProject(project.id)
                    setModalOpen(true)
                  }}
                  className="
                    bg-white/70 dark:bg-neutral-900/70
                    backdrop-blur-[20px]
                    rounded-2xl
                    border border-white/[0.1] dark:border-white/[0.1]
                    p-6
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    cursor-pointer
                  "
                >
                  <div className="relative w-full h-48 md:h-72 mb-4">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="rounded-lg object-cover"
                    />
                  </div>

                  <h2 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h2>

                  <p className="text-base text-gray-600 dark:text-gray-400 mb-2">
                    {project.period}
                  </p>

                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-white/70 dark:bg-neutral-900/70
                          backdrop-blur-[8px]
                          border border-white/[0.05]
                          text-gray-600 dark:text-gray-400
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedText>
            </div>
          ))}
        </div>
      </div>

      <ExperienceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        experienceId={selectedProject ?? 1}
      />
    </section>
  )
}