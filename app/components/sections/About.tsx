'use client'

import AnimatedText from "../common/AnimatedText"

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center p-8"
    >
      <div className="max-w-2xl space-y-12">

        <AnimatedText>
          <h1 className="text-4xl font-bold mb-8">
            À propos de moi
          </h1>
        </AnimatedText>

        <div className="space-y-8">

          {/* Présentation */}
          <AnimatedText>
            <div className="space-y-4">
              <p className="text-lg text-foreground/80 leading-relaxed">
                Je m&apos;appelle <strong>Yasmine BEN</strong>, ingénieure en
                électronique et systèmes embarqués, avec un parcours complémentaire
                en <strong>intelligence artificielle et robotique</strong>.
                Je poursuis actuellement une formation <strong>Bac+5 en informatique,
                avec une spécialisation en IA</strong>, en complément de mon parcours
                en <strong>électronique, systèmes embarqués et robotique</strong>.
                Je recherche une <strong>alternance à partir de septembre 2026</strong>
                dans les domaines de la robotique, de l’IoT, des systèmes embarqués
                ou de l’IA appliquée.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Mon profil se situe à l&apos;intersection de la
                <strong> robotique</strong>, des <strong>systèmes embarqués</strong>,
                de l&apos;<strong>IoT</strong> et de l&apos;
                <strong>intelligence artificielle</strong>.
                J&apos;aime développer des systèmes intelligents capables
                d&apos;acquérir, traiter et exploiter des données issues de capteurs.
              </p>
            </div>
          </AnimatedText>

          {/* Expertise */}
          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Robotique, IA & Systèmes embarqués
              </h2>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Je travaille sur des systèmes combinant
                <strong> capteurs, microcontrôleurs et traitement logiciel</strong>,
                avec des technologies telles que
                <strong> Python, C/C++, ROS, Linux, STM32, ESP32 et Raspberry Pi</strong>.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Je m&apos;intéresse particulièrement à la
                <strong> robotique mobile</strong>, au traitement de données
                multi-capteurs, à la <strong>vision par ordinateur</strong> et
                au <strong>machine learning</strong>, avec des outils comme
                <strong> PyTorch, TensorFlow, OpenCV et YOLO</strong>.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                J&apos;ai également une expérience en
                <strong> IoT et communication embarquée</strong>,
                notamment avec <strong>BLE, UART, SPI et I2C</strong>,
                ainsi qu&apos;en intégration de capteurs et systèmes temps réel.
              </p>
            </div>
          </AnimatedText>

          {/* Objectif */}
          <AnimatedText>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">
                Objectif professionnel
              </h2>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Je souhaite évoluer sur des projets à forte dimension technologique
                combinant <strong>robotique, IoT, systèmes embarqués et IA</strong>,
                où je peux valoriser ma double compétence
                <strong> hardware & software</strong>.
              </p>

              <p className="text-lg text-foreground/80 leading-relaxed">
                Je recherche une <strong>alternance à partir de septembre 2026</strong>
                dans les domaines de la <strong>robotique</strong>,
                de l&apos;<strong>IoT</strong>, des
                <strong> systèmes embarqués</strong> ou de l&apos;
                <strong>IA appliquée aux systèmes intelligents</strong>.
              </p>
            </div>
          </AnimatedText>

        </div>
      </div>
    </section>
  )
}