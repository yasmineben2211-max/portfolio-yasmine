'use client'

import { useState } from 'react'
import AnimatedText from "../common/AnimatedText"
import { motion } from "motion/react"

interface CourseItem {
  date: string
  title: string
  description: string
}

// Formation (ordre : plus récent → plus ancien)
const courses: CourseItem[] = [
  {
    date: "Fév. 2026 – Sept. 2027",
    title: "SUPINFO",
    description: "Expert en informatique & systèmes d’information (Data) | Big Data • Analyse Big Data • Data Engineering"
  },
  {
    date: "Sept. 2024 – Sept. 2025",
    title: "ENSEA (CY Cergy Paris Université)",
    description: "Master 2 — IA & Robotique (Systèmes intelligents & communications) | Deep Learning • Vision • Robotique • SLAM • SQL/NoSQL"
  },
  {
    date: "Sept. 2021 – Janv. 2024",
    title: "National Engineering School of Monastir (ENIM)",
    description: "Génie électrique — Électronique & systèmes embarqués | PCB • Microcontrôleurs • Traitement du signal • Automatisation"
  },
  {
    date: "Sept. 2019 – Juin 2021",
    title: "Institut préparatoire aux études d’ingénieurs de Monastir",
    description: "Cycle préparatoire Physique-Chimie | Maths • Physique • Chimie des matériaux • Résolution de problèmes"
  }
]

export default function CourseTimeline() {
  const [showAll, setShowAll] = useState(false)
  const displayedCourses = showAll ? courses : courses.slice(0, 5)

  const handleCollapse = () => {
    setShowAll(false)
    const educationSection = document.getElementById('education')
    if (educationSection) {
      const yOffset = -60
      const y = educationSection.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="w-full">
      <div className="relative">
        <div className="absolute left-1/2 top-0 w-[2px] h-full bg-neutral-200 dark:bg-neutral-800 z-0" />

        {displayedCourses.map((course, index) => (
          <AnimatedText key={index}>
            <div className={`
              flex items-center gap-4 sm:gap-6 md:gap-8 mb-12 
              ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}
              relative z-10
            `}>
              <div className="flex-1 text-center">
                <h3 className="
                  text-base
                  sm:text-lg md:text-xl
                  font-bold 
                  mb-2
                ">
                  {course.title}
                </h3>

                <p className="
                  text-xs
                  sm:text-sm md:text-base
                  text-foreground/60 
                  mb-1
                ">
                  {course.date}
                </p>

                <p className="
                  text-xs
                  sm:text-sm md:text-base
                  text-foreground/80
                ">
                  {course.description}
                </p>
              </div>

              <div className="relative z-20">
                <motion.div
                  className="w-3 h-3 sm:w-4 sm:h-4 bg-black dark:bg-white rounded-full"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20,
                    delay: index * 0.2
                  }}
                />
              </div>

              <div className="flex-1" />
            </div>
          </AnimatedText>
        ))}
      </div>

      {/* Ici, tu as moins de 5 éléments, donc Show More ne s’affichera pas.
          Tu peux laisser le code comme ça (il ne gêne pas). */}
      {!showAll && courses.length > 5 && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Voir plus
              <svg
                className="w-5 h-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}

      {showAll && (
        <AnimatedText>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleCollapse}
              className="
                text-lg
                text-neutral-600 dark:text-neutral-400
                p-4
                transition-transform duration-300
                hover:scale-110
                z-0
                flex items-center gap-2
              "
            >
              Voir moins
              <svg
                className="w-5 h-5 stroke-black dark:stroke-white"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <path d="M5 15l7-7 7 7" />
              </svg>
            </button>
          </div>
        </AnimatedText>
      )}
    </div>
  )
}