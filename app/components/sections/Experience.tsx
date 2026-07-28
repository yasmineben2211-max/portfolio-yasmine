'use client'

import AnimatedText from '../common/AnimatedText'
import Image from 'next/image'
import GradientBackground from '../common/GradientBackground'
import ExperienceModal from './Motal'
import { useState } from 'react'

// Définition du type d’une expérience
type Experience = {
  id: number
  title: string
  company: string
  period: string
  logo: string
  skills: string[]
  description: string
}

// Mes expériences (ordre : la plus récente en premier)
const experiences: Experience[] = [
  {
    id: 1,
    title: "Stagiaire Ingénieure Robotique & Intelligence Artificielle",
    company: "Enova ROBOTICS",
    period: "Juin 2026 – Aujourd’hui • Sousse (Hybride)",
    logo: "/companyicon/enova.png",
    skills: [
      "Python",
      "ROS",
      "Linux",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Time Series",
      "Anomaly Detection",
      "Machine Learning",
      "Git"
    ],
    description:
      "Développement d’une solution de détection prédictive d’anomalies pour un robot mobile autonome à partir de données LiDAR 3D, IMU et diagnostics système dans une architecture ROS."
  },
  {
    id: 2,
    title: "Stagiaire — Génération 3D avec IA générative",
    company: "INEDIIA",
    period: "Mai 2024 – Sept. 2024 • Lille (sur site)",
    logo: "/companyicon/inediia.png",
    skills: ["Python", "PyTorch", "TensorFlow", "GANs", "CLIP", "Point-E", "Blender", "Unity"],
    description:
      "Optimisation de la cohérence visuelle et sémantique de modèles 3D générés à partir de texte."
  },
  {
    id: 3,
    title: "Développement d’un système de détection biomédicale",
    company: "ACTIA Engineering Services",
    period: "Sept. 2022 – Août 2023 • Tunis (sur site)",
    logo: "/companyicon/actia.png",
    skills: ["Traitement du signal", "UART", "BLE", "NRF52", "Qt Creator", "C/C++", "TCP/IP"],
    description:
      "Développement d’un radar biomédical pour détecter le rythme cardiaque et la respiration en temps réel."
  },
  {
    id: 4,
    title: "Stagiaire — Conception de carte électronique",
    company: "Kodji Robot",
    period: "Juil. 2022 • Sousse (sur site)",
    logo: "/companyicon/kodji.png",
    skills: ["Altium Designer", "ATmega32", "PCB", "Schématique", "Routage", "Arduino"],
    description:
      "Conception d’une carte de commande basée sur ATmega32 avec schéma et routage PCB sous Altium Designer."
  }
]

export default function Experience() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)

  return (
    <section id="experience" className="container mx-auto px-4 sm:px-8 md:px-12">
      <div className="
        min-h-screen
        flex flex-col items-center justify-center
        py-16 md:py-20
        relative
        overflow-hidden
      ">
        {/* Fond dégradé (tu peux changer les couleurs si tu veux) */}
        <GradientBackground
          sectionId="experience"
          gradientColors={{
            start: '#D7897F', // Nectarine
            end: '#6398A9'    // Lagune
          }}
        />

        <AnimatedText>
          <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-center relative z-10">
            Expérience
          </h1>
        </AnimatedText>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 relative z-0 max-w-6xl w-full">
          {experiences.map((experience) => (
            <div key={experience.id}>
              <AnimatedText>
                <div
                  onClick={() => {
                    setSelectedExperience(experience.id)
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
                    h-full
                  "
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                      <Image
                        src={experience.logo}
                        alt={experience.company}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="
                        text-base sm:text-lg md:text-xl
                        font-bold
                        mb-1
                      ">
                        {experience.title}
                      </h3>

                      <p className="text-base text-gray-600 dark:text-gray-400">
                        {experience.company}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
                    {experience.period}
                  </p>

                  <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                    {experience.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill) => (
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
        experienceId={selectedExperience ?? 1}
      />
    </section>
  )
}