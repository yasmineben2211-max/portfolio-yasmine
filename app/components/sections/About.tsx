'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section id="about" className="min-h-screen w-full flex items-center justify-center p-8">
      <div className="max-w-2xl space-y-12">

        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">À propos de moi</h1>
        </AnimatedText>

        <div className="space-y-8">

          <AnimatedText>
  <div className="space-y-4">
    <p className="text-lg text-foreground/80 leading-relaxed">
      Je m'appelle <strong>Yasmine BEN </strong>, ingénieure en électronique embarquée 
      actuellement en formation <strong>Expert en Informatique et Systèmes d’Information (Data)</strong> 
      à <strong>SUPINFO Paris</strong>. 
      Mon parcours se situe à l’intersection des <strong>systèmes embarqués</strong>, 
      du <strong>traitement de données</strong> et des <strong>systèmes informatiques</strong>.
    </p>

    <p className="text-lg text-foreground/80 leading-relaxed">
      Je développe des systèmes intégrant <strong>capteurs, microcontrôleurs et traitement logiciel</strong>, 
      avec une approche orientée <strong>systèmes intelligents</strong> et analyse de données.
    </p>
  </div>
</AnimatedText>

<AnimatedText>
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Compétences techniques</h2>

    <p className="text-lg text-foreground/80 leading-relaxed">
      J’ai acquis une solide expérience dans le développement de <strong>systèmes embarqués</strong> 
      sur microcontrôleurs <strong>STM32, Arduino et ESP32</strong>, la conception de 
      <strong>cartes électroniques (PCB)</strong> ainsi que l’intégration de capteurs 
      et la communication via <strong>UART, SPI et I2C</strong>.
    </p>

    <p className="text-lg text-foreground/80 leading-relaxed">
      Je travaille également sur l’analyse et le traitement de données avec 
      <strong>Python</strong>, notamment pour la <strong>vision par ordinateur</strong> 
      et le <strong>machine learning</strong> à l’aide de bibliothèques comme 
      <strong>PyTorch, TensorFlow et OpenCV</strong>.
    </p>
  </div>
</AnimatedText>

<AnimatedText>
  <div className="space-y-4">
    <h2 className="text-2xl font-semibold">Objectifs professionnels</h2>

    <p className="text-lg text-foreground/80 leading-relaxed">
      Je souhaite aujourd’hui évoluer vers des projets combinant 
      <strong> IoT, systèmes embarqués et traitement de données</strong>, 
      où je peux mettre à profit ma double compétence 
      <strong>hardware & software</strong>.
    </p>

    <p className="text-lg text-foreground/80 leading-relaxed">
      Je recherche une <strong> alternance</strong> dans les domaines des 
      <strong>systèmes embarqués</strong>, de l’<strong>IoT</strong> 
      ou de la <strong>data appliquée</strong>.
    </p>
  </div>
</AnimatedText>

        </div>
      </div>
    </section>
  )
}