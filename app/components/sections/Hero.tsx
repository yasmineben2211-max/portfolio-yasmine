'use client'

import Image from "next/image"
import AnimatedText from "../common/AnimatedText"
import FloatingElements from "../common/FloatingElements"

export default function Hero() {
  return (
    <section
      id="home"
      className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"
    >
      <FloatingElements />

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <AnimatedText className="flex flex-col items-center sm:items-start gap-4">
          <Image
            className="rounded-full"
            src="/taswerty6.png"
            alt="Photo de Yasmine BEN "
            width={150}
            height={120}
            priority
          />

          <h1 className="text-4xl font-bold">Yasmine BEN </h1>

          <p className="text-lg text-foreground/80 font-[family-name:var(--font-geist-mono)]">
            Ingénieure en électronique embarquée • Data • IA appliquée
          </p>
        </AnimatedText>

        <AnimatedText className="max-w-2xl text-center sm:text-left">
          <p className="text-foreground/80 leading-relaxed">
            Ingénieure en électronique embarquée, je m’intéresse aux systèmes intelligents qui combinent capteurs, IoT et traitement de données.
            Actuellement en formation Expert en Informatique et Systèmes d’Information à SUPINFO Paris, je recherche une alternance pour travailler 
            sur des projets mêlant systèmes embarqués, data et infrastructures.
          </p>
        </AnimatedText>
        
      </main>

      <AnimatedText className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="mailto:yasmineben2211@gmail.com"
  >
    <Image aria-hidden src="/mail.svg" alt="Email" width={16} height={16} />
    Me contacter
  </a>

  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="linkedin.com/in/yasmine-ben-6215122a0"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image aria-hidden src="/linkedin.svg" alt="LinkedIn" width={16} height={16} />
    LinkedIn
  </a>

  <a
    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    href="https://github.com/yasmineben2211-max"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Image aria-hidden src="/github.svg" alt="GitHub" width={16} height={16} />
    GitHub
  </a>
</AnimatedText>
    </section>
  )
}
/* <AnimatedText className="flex gap-4 items-center flex-row">
          {/* GitHub }
          <a
            className="
              relative
              z-20
              rounded-full border border-solid border-black/[.08]
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2]
              h-12
              px-5
              text-base
            "
            href="https://github.com/TON-GITHUB"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
              sizes="20px"
            />
            <span className="relative z-20">GitHub</span>
          </a>

          {/* CV }
          <a
            className="
              rounded-full border border-solid border-black/[.08]
              transition-colors flex items-center justify-center 
              hover:bg-[#f2f2f2]
              hover:border-transparent 
              h-12
              px-5
              text-base
              min-w-44
            "
            href="/cv-yasmine.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              className="mr-2"
              src="/resume.svg"
              alt="CV"
              width={20}
              height={20}
              sizes="20px"
            />
            Voir mon CV
          </a>
          <a
             className="
                relative
                z-20
                rounded-full border border-solid border-black/[.08]
                transition-colors flex items-center justify-center 
                hover:bg-[#f2f2f2]
                h-12
                px-5
                text-base
            "
            href="https://github.com/yasminebenhajsalah2211-max"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="invert mr-2"
              src="/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />

            <span className="relative z-20">
              GitHub
            </span>
          </a>
        </AnimatedText>
        */