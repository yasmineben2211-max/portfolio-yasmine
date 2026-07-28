'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { experienceDetails } from '@/app/data/experience'

export default function ExperienceModal({
  open,
  onClose,
  experienceId
}: {
  open: boolean
  onClose: () => void
  experienceId: number
}) {
  const experience =
    experienceDetails[experienceId as keyof typeof experienceDetails]

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [open])

  if (!open || !experience) return null

  return (
    <div
      className="
        fixed inset-0
        z-50
        flex items-center justify-center
        bg-black/40
        backdrop-blur-md
        p-4 sm:p-8
      "
      onClick={onClose}
    >
      <div
        className="
          relative
          w-full
          max-w-[950px]
          max-h-[90vh]
          overflow-y-auto
          rounded-2xl
          border border-black/5
          bg-white/95
          p-6
          shadow-[0_8px_32px_rgba(0,0,0,0.15)]
          sm:p-8
          md:p-10
          dark:border-white/10
          dark:bg-neutral-950/95
        "
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Fermer"
          className="
            absolute
            right-4
            top-4
            z-20
            rounded-full
            p-2
            text-gray-500
            transition-all
            duration-300
            hover:rotate-90
            hover:bg-black/5
            dark:text-gray-400
            dark:hover:bg-white/10
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
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="space-y-10">
          <div className="pr-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div
                className="
                  relative
                  h-20
                  w-20
                  flex-shrink-0
                  overflow-hidden
                  rounded-2xl
                  border border-black/5
                  bg-white
                  shadow-sm
                  dark:border-white/10
                "
              >
                <Image
                  src={experience.image}
                  alt={`Logo ${experience.company}`}
                  fill
                  className="object-contain p-2"
                  sizes="80px"
                  priority
                />
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-[#6398A9]">
                  {experience.company}
                </p>

                <h1
                  className="
                    text-2xl
                    font-bold
                    tracking-tight
                    text-gray-900
                    sm:text-3xl
                    md:text-4xl
                    dark:text-white
                  "
                >
                  {experience.title}
                </h1>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className="
                  rounded-full
                  border border-black/5
                  bg-[#FFF4F1]
                  px-4
                  py-2
                  text-sm
                  text-gray-700
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                "
              >
                {experience.period}
              </span>

              <span
                className="
                  rounded-full
                  border border-black/5
                  bg-[#EAF4F7]
                  px-4
                  py-2
                  text-sm
                  text-gray-700
                  dark:border-white/10
                  dark:bg-white/5
                  dark:text-gray-300
                "
              >
                {experience.location}
              </span>
            </div>

            <p
              className="
                mt-6
                border-l-4
                border-[#D7897F]/60
                pl-4
                text-base
                leading-relaxed
                text-gray-700
                sm:text-lg
                dark:text-gray-300
              "
            >
              {experience.overview}
            </p>
          </div>

          <div className="space-y-6">
            <h2
              className="
                flex
                items-center
                gap-3
                text-xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-2xl
                dark:text-white
              "
            >
              <span className="h-[2px] w-8 bg-[#D7897F]" />
              Missions principales
            </h2>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {experience.missions.map((mission, index) => (
                <div
                  key={`${experience.id}-${index}`}
                  className="
                    rounded-xl
                    border border-black/5
                    bg-[#FFF4F1]
                    p-5
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-md
                    dark:border-white/10
                    dark:bg-white/5
                  "
                >
                  <div className="flex gap-3">
                    <span
                      className="
                        mt-1
                        flex
                        h-7
                        w-7
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#D7897F]
                        text-sm
                        font-bold
                        text-white
                      "
                    >
                      {index + 1}
                    </span>

                    <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                      {mission}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h2
              className="
                flex
                items-center
                gap-3
                text-xl
                font-bold
                tracking-tight
                text-gray-900
                sm:text-2xl
                dark:text-white
              "
            >
              <span className="h-[2px] w-8 bg-[#6398A9]" />
              Compétences et technologies
            </h2>

            <div
              className="
                rounded-xl
                border border-black/5
                bg-white
                p-6
                dark:border-white/10
                dark:bg-white/5
              "
            >
              <div className="flex flex-wrap gap-3">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      rounded-full
                      border border-[#6398A9]/20
                      bg-[#96C7B3]/20
                      px-4
                      py-2
                      text-sm
                      font-medium
                      text-gray-700
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:bg-[#96C7B3]/30
                      dark:border-white/10
                      dark:bg-white/5
                      dark:text-gray-300
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}