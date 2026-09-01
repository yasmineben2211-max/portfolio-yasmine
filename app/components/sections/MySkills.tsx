'use client'

import React from 'react'
import Image from "next/image"
import AnimatedText from "../common/AnimatedText"

// Technologies utilisées

const technologies = {
  robotics_ai: [
    { name: 'ROS', icon: '/skills/ros.svg' },
    { name: 'Python', icon: '/skills/python.svg' },
    { name: 'C++', icon: '/skills/cpp.svg' },
    { name: 'LiDAR', icon: '/skills/lidar.svg' },
    { name: 'IMU', icon: '/skills/imu.svg' },
    { name: 'OpenCV', icon: '/skills/opencv.svg' },
    { name: 'YOLO', icon: '/skills/yolo.svg' }
  ],

  embedded_iot: [
    { name: 'C', icon: '/skills/c.svg' },
    { name: 'STM32', icon: '/skills/stm32.svg' },
    { name: 'ESP32', icon: '/skills/esp32.svg' },
    { name: 'Raspberry Pi', icon: '/skills/raspberrypi.svg' },
    { name: 'Arduino', icon: '/skills/arduino.svg' },
    { name: 'UART', icon: '/skills/uart.svg' },
    { name: 'BLE', icon: '/skills/bluetooth.svg' },
    { name: 'ZigBee', icon: '/skills/zigbee.svg' }
  ],

  ai_vision: [
    { name: 'PyTorch', icon: '/skills/pytorch.svg' },
    { name: 'TensorFlow', icon: '/skills/tensorflow.svg' },
    { name: 'Scikit-learn', icon: '/skills/sklearn.svg' },
    { name: 'Pandas', icon: '/skills/pandas.svg' },
    { name: 'NumPy', icon: '/skills/numpy.svg' }
  ],

  tools: [
    { name: 'Linux', icon: '/skills/linux.svg' },
    { name: 'Docker', icon: '/skills/docker.svg' },
    { name: 'Kubernetes', icon: '/skills/kubernetes.svg' },
    { name: 'Git', icon: '/skills/git.svg' },
    { name: 'Altium Designer', icon: '/skills/altium.svg' },
    { name: 'MATLAB/Simulink', icon: '/skills/matlab.svg' }
  ]
}

const categories = {
  robotics_ai: 'Robotique & IA Embarquée',
  embedded_iot: 'Systèmes Embarqués & IoT',
  ai_vision: 'Intelligence Artificielle & Vision',
  tools: 'Outils & DevOps'
}

export default function MySkills() {
  return (
    <section id="skills" className="
      min-h-screen w-full flex items-center justify-center 
      p-4 sm:p-8
    ">
      <div className="container mx-auto">
        <AnimatedText>
          <h1 className="
            text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center
          ">
            Compétences Techniques
          </h1>
        </AnimatedText>
        
        <div className="
          max-w-5xl mx-auto 
          space-y-8 sm:space-y-12
        ">
          {(Object.keys(technologies) as Array<keyof typeof technologies>).map((category) => (
            <AnimatedText key={category} className="
              space-y-4 sm:space-y-6
            ">
              <h2 className="
                text-xl sm:text-2xl
                font-semibold text-center
              ">
                {categories[category]}
              </h2>
              
              <div className="flex justify-center">
                <div className="
                  flex flex-wrap justify-center 
                  gap-4 sm:gap-8 md:gap-12
                ">
                  {technologies[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="
                        flex flex-col items-center 
                        gap-2 sm:gap-3
                        w-[80px] sm:w-[100px]
                        group
                      "
                    >
                      <div className="
                        relative 
                        w-16 sm:w-20
                        h-16 sm:h-20
                        flex items-center justify-center 
                        transition-all duration-300 
                        group-hover:scale-110   
                        group-hover:-translate-y-1
                      ">
                        <Image
                          src={tech.icon}
                          alt={tech.name}
                          width={48}
                          height={48}
                          className="
                            dark:invert
                            sm:w-[56px] sm:h-[56px]
                          "
                        />
                      </div>

                      <span className="
                        text-xs sm:text-sm
                        font-medium 
                        text-foreground/70 
                        group-hover:text-foreground/90 
                        transition-colors 
                        text-center
                      ">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedText>
          ))}
        </div>
      </div>
    </section>
  )
}