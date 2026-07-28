'use client'

import Image from 'next/image'
import {
  getProjectById,
  PROJECT_DATA
} from '@/app/data/project'

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

export default function ExperienceModal({
  open,
  onClose,
  experienceId
}: {
  open: boolean
  onClose: () => void
  experienceId: number
}) {
  const experience = getProjectById(experienceId) || Object.values(PROJECT_DATA)[0]

  if (!open) return null

  return (
    <div
      className="
        fixed inset-0
        flex items-center justify-center
        p-4 sm:p-8
        bg-black/40
        backdrop-blur-md
        z-50
      "
      onClick={onClose}
    >
      <div
        className="
          relative w-full max-w-[1000px] max-h-[90vh] overflow-auto
          bg-white/95
          rounded-2xl
          border border-black/5
          shadow-[0_8px_32px_rgba(0,0,0,0.12)]
          p-6 sm:p-8 md:p-10
        "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            p-2 rounded-full
            text-gray-500
            hover:bg-black/5
            transition-all duration-300
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm text-gray-500">
              {experience.company}
            </p>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <h1
                className="
                  text-2xl sm:text-3xl md:text-4xl
                  font-bold
                  tracking-tight
                  text-gray-900
                "
              >
                {experience.title}
              </h1>

              <div className="flex gap-4">
                {experience.github && (
                  <a
                    href={experience.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex items-center gap-2
                      px-4 py-2
                      text-sm font-medium
                      rounded-full
                      border border-gray-200
                      hover:bg-gray-100
                      text-gray-700
                      transition-all duration-300
                    "
                  >
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </a>
                )}
              </div>
            </div>

            <p
              className="
                text-base sm:text-lg
                leading-relaxed
                text-gray-700
                border-l-4 border-[#D7897F]/50
                pl-4
              "
            >
              {experience.overview}
            </p>
          </div>

          <div
            className="
              relative block
              w-full h-[220px] sm:h-[320px] md:h-[420px]
              rounded-xl overflow-hidden
              shadow-lg
              ring-1 ring-black/5
            "
          >
            <Image
              src={experience.mainImage}
              alt={experience.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="space-y-8">
            <h2
              className="
                text-xl sm:text-2xl
                font-bold
                tracking-tight
                flex items-center gap-2
                before:content-[''] before:block before:w-8 before:h-[2px]
                before:bg-[#D7897F]
              "
            >
              Détails du projet
            </h2>

            <div className="space-y-6">
              {experience.features.map((feature, index) => (
                <div
                  key={index}
                  className="
                    p-5 rounded-xl
                    bg-[#FFF4F1]
                    border border-black/5
                    space-y-3
                  "
                >
                  <h3
                    className="
                      text-lg sm:text-xl
                      font-semibold
                      text-[#D7897F]
                    "
                  >
                    {feature.title}
                  </h3>

                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8 mb-12">
            <h2
              className="
                text-xl sm:text-2xl
                font-bold
                tracking-tight
              "
            >
              Stack technique
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.techStack.map((tech, index) => (
                <div
                  key={index}
                  className="
                    p-6 rounded-xl
                    space-y-4
                    bg-white
                    border border-black/5
                  "
                >
                  <h3
                    className="
                      text-lg font-semibold
                      text-[#6398A9]
                      mb-4
                    "
                  >
                    {tech.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="
                          px-3 py-1
                          text-sm
                          rounded-full
                          bg-[#96C7B3]/20
                          text-gray-700
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2
              className="
                text-xl sm:text-2xl
                font-bold
                tracking-tight
              "
            >
              Résultats clés
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {experience.achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="
                    text-center space-y-2
                    p-6 rounded-xl
                    bg-white
                    border border-black/5
                  "
                >
                  <p
                    className="
                      text-3xl sm:text-4xl
                      font-bold
                      tracking-tight
                      text-[#D7897F]
                    "
                  >
                    {achievement.value}
                  </p>

                  <p className="text-gray-700">
                    {achievement.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
/*'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { 
  getProjectById,
  PROJECT_DATA
} from '@/app/data/project'

const preloadImages = (features: { image: string | string[] }[]) => {
  if (typeof window === 'undefined') return;
  
  features.forEach(feature => {
    if (Array.isArray(feature.image)) {
      feature.image.forEach(img => {
        const image = new window.Image();
        image.src = img;
      });
    } else {
      const image = new window.Image();
      image.src = feature.image;
    }
  });
};

export default function ExperienceModal({ 
  open, 
  onClose,
  experienceId 
}: { 
  open: boolean
  onClose: () => void
  experienceId: number 
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const experience = getProjectById(experienceId) || Object.values(PROJECT_DATA)[0];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      preloadImages(experience.features);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    }
  }, [open, experience.features]);

  useEffect(() => {
    if (!open) {
      setCurrentImageIndex(0);
    }
  }, [open]);

  if (!open) return null;

  return (
    <div 
      className="
        fixed inset-0 
        flex items-center justify-center 
        p-4 sm:p-8 
        bg-black/40 dark:bg-black/60
        backdrop-blur-md
        z-50
        transition-all duration-300 ease-in-out
      "
      onClick={onClose}
    >
      <div 
        className="
          relative w-full max-w-[1000px] max-h-[90vh] overflow-auto
          bg-gradient-to-br from-white/80 to-white/70 
          dark:from-black/90 dark:to-black/85
          backdrop-blur-xl
          rounded-2xl
          border border-white/20 dark:border-white/15
          shadow-[0_8px_32px_rgba(0,0,0,0.1)]
          dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]
          transition-all duration-300
          p-6 sm:p-8 md:p-10
          scrollbar-thin scrollbar-track-transparent 
          scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700
          hover:shadow-[0_12px_48px_rgba(0,0,0,0.15)]
          dark:hover:shadow-[0_12px_48px_rgba(0,0,0,0.5)]
        "
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="
            absolute top-4 right-4
            p-2
            rounded-full
            text-gray-500 dark:text-gray-400
            hover:bg-black/5 dark:hover:bg-white/5
            transition-all duration-300
            hover:rotate-90
            hover:scale-110
            focus:outline-none
            focus:ring-2 focus:ring-purple-500/50
          "
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {experience.company}
              </p>
              <div className="flex items-center justify-between gap-4">
                <h1 className="
                  text-2xl sm:text-3xl md:text-4xl 
                  font-bold 
                  tracking-tight
                  bg-clip-text text-transparent
                  bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600
                  dark:from-purple-400 dark:via-pink-400 dark:to-purple-400
                  animate-gradient
                ">
                  {experience.title}
                </h1>
                <div className="flex gap-4 mt-8">
                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        flex items-center gap-2
                        px-4 py-2
                        text-sm font-medium
                        rounded-full
                        border border-gray-200 dark:border-gray-800
                        hover:bg-gray-100 dark:hover:bg-gray-800
                        text-gray-700 dark:text-gray-300
                        transition-all duration-300
                        hover:scale-105
                        group
                      "
                    >
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                      <span className="hidden sm:inline">View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="
              text-base sm:text-lg 
              leading-relaxed 
              text-gray-600 dark:text-gray-300
              border-l-4 border-purple-500/30
              pl-4
            ">
              {experience.overview}
            </p>
          </div>

          <a 
            href={experience.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="
              relative block
              w-full h-[200px] sm:h-[300px] md:h-[400px]
              rounded-xl overflow-hidden
              shadow-lg
              ring-1 ring-black/5 dark:ring-white/5
              group
              cursor-pointer
            "
          >
            <div className="
              absolute inset-0
              bg-gradient-to-t from-black/50 to-transparent
              opacity-0 group-hover:opacity-100
              transition-opacity duration-300
              z-10
              flex items-end justify-center
              pb-6
            ">
              <span className="
                text-white
                text-sm sm:text-base
                font-medium
                px-4 py-2
                rounded-full
                bg-black/30
                backdrop-blur-sm
                border border-white/10
              ">
                View Project
              </span>
            </div>
            <Image
              src={experience.mainImage}
              alt={experience.title}
              fill
              className="
                object-cover 
                group-hover:scale-105 
                transition-transform duration-500
                filter brightness-100 group-hover:brightness-90
              "
              priority
            />
          </a>

          <div className="space-y-8">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
              flex items-center gap-2
              before:content-[''] before:block before:w-8 before:h-[2px] 
              before:bg-purple-500/50
            ">
              Core Features
            </h2>
            <div className="space-y-12">
              {experience.features.map((feature, index) => (
                <div 
                  key={index}
                  className="
                    flex flex-col md:flex-row 
                    gap-8 
                    items-center
                    p-4 rounded-xl
                  "
                >
                  <div className="flex-1 space-y-4">
                    <h3 className="
                      text-lg sm:text-xl 
                      font-semibold 
                      tracking-tight
                      text-purple-600 dark:text-purple-400
                    ">
                      {feature.title}
                    </h3>
                    <p className="
                      text-gray-600 dark:text-gray-300 
                      leading-relaxed
                    ">
                      {feature.description}
                    </p>
                  </div>
                  <div className="
                    flex-1 
                    relative w-full
                  ">
                    {Array.isArray(feature.image) ? (
                      <div className="space-y-4">
                        <div className="
                          relative w-full h-[200px]
                          rounded-xl overflow-hidden
                          shadow-lg
                        ">
                          <Image
                            src={feature.image[currentImageIndex] || feature.image[0]}
                            alt={feature.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="flex justify-center gap-2">
                          {feature.image.map((_, imgIndex) => (
                            <button
                              key={imgIndex}
                              onClick={() => setCurrentImageIndex(imgIndex)}
                              className={`
                                w-2 h-2 rounded-full
                                transition-all duration-300
                                ${currentImageIndex === imgIndex 
                                  ? 'bg-purple-600 w-4' 
                                  : 'bg-gray-300 hover:bg-gray-400'
                                }
                              `}
                              aria-label={`View image ${imgIndex + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="
                        relative w-full h-[200px]
                        rounded-xl overflow-hidden
                        shadow-lg
                      ">
                        <Image
                          src={feature.image}
                          alt={feature.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div> 

          <div className="space-y-8 mb-12">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
            ">
              Tech Stack
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {experience.techStack.map((tech, index) => (
                <div 
                  key={index}
                  className="
                    p-6
                    rounded-xl
                    space-y-4
                    hover:bg-white/[0.02] dark:hover:bg-black/[0.02]
                    transition-colors duration-300
                    border border-white/[0.03] dark:border-white/[0.03]
                  "
                >
                  <h3 className="
                    text-lg font-semibold 
                    text-purple-600 dark:text-purple-400
                    mb-4
                  ">
                    {tech.category}
                  </h3>
                  
                  <div className="
                    grid grid-cols-3 sm:grid-cols-4 
                    gap-6
                  ">
                    {tech.items.map((item) => (
                      <div
                        key={item}
                        className="
                          flex flex-col items-center 
                          gap-3
                          group
                        "
                      >
                        <div className="
                          relative 
                          w-12 sm:w-14
                          h-12 sm:h-14
                          flex items-center justify-center 
                          transition-all duration-300 
                          group-hover:scale-110   
                          group-hover:-translate-y-1
                        ">
                          <Image
                            src={`/skills/${item.toLowerCase().replace(/[\s()\.+]/g, '')}.svg`}
                            alt={item}
                            width={32}
                            height={32}
                            className="
                              dark:invert          
                              sm:w-[40px] sm:h-[40px]
                            "
                          />
                        </div>
                        <span className="
                          text-xs sm:text-sm
                          font-medium 
                          text-gray-600 dark:text-gray-400
                          group-hover:text-gray-900 dark:group-hover:text-gray-200
                          transition-colors 
                          text-center
                        ">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="
              text-xl sm:text-2xl 
              font-bold 
              tracking-tight
            ">
              Quantitative Results
            </h2>
            <div className="
              grid grid-cols-1 sm:grid-cols-3 
              gap-8
            ">
              {experience.achievements.map((achievement, index) => (
                <div key={index} className="text-center space-y-2">
                  <p className="
                    text-3xl sm:text-4xl 
                    font-bold 
                    tracking-tight
                    text-purple-600 dark:text-purple-400
                  ">
                    {achievement.value}
                  </p>
                  <p className="
                    text-gray-600 dark:text-gray-300
                  ">
                    {achievement.metric}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} */