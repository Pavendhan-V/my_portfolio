import React from "react";
import PageWrapper from "../components/PageWrapper";

const EXPERIENCE_LIST = [
  {
    company: "Transasia Bio-Medicals Ltd",
    role: "Team Lead - Embedded Firmware",
    date: "May 2026 – Present",
    logo: "/pavendhan_v-portfolio/Transasia",
    projects: [
      {
        name: "XLNext Automated Clinical Chemistry Analyzer",
        details: [
          "Develop embedded C++ firmware for microcontroller-based environmental sensing systems, including optimized I2C and SPI sensor interfaces.",
          "Integrate machine-learning algorithms to process temperature, humidity, pressure, and gas-resistance data and predict gases in the environment.",
          "Optimize power consumption while maintaining high-performance data acquisition; log data to SD cards and external flash, and stream it over USB serial.",
          "Connect microcontrollers and a mobile app over BLE for real-time sensor and ML-data visualization.",
          "Develop product use cases and demonstrations across nRF52840, Cortex-M4, ESP32, and ESP8266 platforms; publish examples on GitHub and support users.",
          "Write firmware unit tests with GTest and manage Jenkins releases with unit tests, PC-lint, SonarQube reporting, Artifactory deployment, and FOSSID OSS inspections."
        ]
      }
    ],
  },
  {
    company: "Capgemini",
    role: "Sr. Firmware Developer",
    date: "Feb 2023 – May 2026",
    logo: "/pavendhan_v-portfolio/capgemini.png",
    projects: [
      {
        name: "Environmental Sensor Project — BOSCH (Client)",
        details: [
          "Develop embedded C++ firmware for microcontroller-based environmental sensing systems, including optimized I2C and SPI sensor interfaces.",
          "Integrate machine-learning algorithms to process temperature, humidity, pressure, and gas-resistance data and predict gases in the environment.",
          "Optimize power consumption while maintaining high-performance data acquisition; log data to SD cards and external flash, and stream it over USB serial.",
          "Connect microcontrollers and a mobile app over BLE for real-time sensor and ML-data visualization.",
          "Develop product use cases and demonstrations across nRF52840, Cortex-M4, ESP32, and ESP8266 platforms; publish examples on GitHub and support users.",
          "Write firmware unit tests with GTest and manage Jenkins releases with unit tests, PC-lint, SonarQube reporting, Artifactory deployment, and FOSSID OSS inspections."
        ]
      },
      {
        name: "Sensors Framework — BOSCH (Client)",
        details: [
          "Develop a reusable sensor framework for RTOS- and bare-metal-based systems.",
          "Provide command-line control, USB data streaming, flash logging, and BLE support, with high-throughput USB transfer and flash logging."
        ]
      },
      {
        name: "Unified Data Format with JSON Configuration — BOSCH (Client)",
        details: [
          "Build firmware that receives JSON configuration from a host over USB or BLE, parses it, and initializes the requested sensor protocol and configuration.",
          "Format sensor readings as Unified Data Format (UDF), then log them to external flash or stream them over USB or BLE according to the configuration."
        ]
      }
    ],
  },
  {
    company: "Panacea Medical Technology Pvt Ltd",
    role: "Firmware Developer",
    date: "Aug 2018 – Feb 2023",
    logo: "/pavendhan_v-portfolio/panacea.png",
    projects: [
      {
        name: "Mammography",
        details: [
          "Develop and integrate firmware for a digital mammography system, including control of a Spellman X-ray generator over UART and MCU clock signals.",
          "Control pneumatic compression and DC-motor-driven gantry, tomo, prone, pillar, and X-ray collimator motion; read ADC feedback, calibrate positions, and show machine status on the LCD.",
          "Design and bring up project hardware boards, and implement Ethernet communication between the LPC1769 MCU and backend for machine-motion and X-ray control."
        ]
      },
      {
        name: "Multi Leaf Collimator (MLC)",
        details: [
          "Develop firmware for precise MLC leaf control and radiation delivery, including 20-line parallel communication between an LPC1769 MCU and Spartan-6 FPGA.",
          "Calculate leaf positions using ADC, encoder, and motor PWM feedback; use IR sensors and limit switches for motion monitoring.",
          "Implement calibration and homing for leaves, jaws, and collimator-theta motion, plus manual, automatic, and VMAT positioning algorithms."
        ]
      },
      {
        name: "TCP/IP Server and Client Application",
        details: [
          "Create a TCP/IP server that communicates with MCUs and Android applications using a defined protocol format."
        ]
      }
    ],
  },
];

export default function Experience() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Experience</h2>

        <div className="space-y-6">
          {EXPERIENCE_LIST.map((e) => (
            <div
              key={e.company}
              className="p-6 bg-white border rounded-lg shadow-sm hover:shadow transition"
            >
              {/* Company Logo + Info */}
              <div className="flex items-center gap-4">
                <img
                  src={e.logo}
                  alt={e.company}
                  className="w-14 h-14 object-contain rounded-md border bg-white p-2"
                />

                <div>
                  <h4 className="text-xl font-semibold text-gray-800">{e.company}</h4>
                  <p className="text-sm text-gray-500">{e.date}</p>
                  <p className="mt-1 font-medium text-gray-700">{e.role}</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {e.projects.map((project) => (
                  <section key={project.name}>
                    <h5 className="font-semibold text-gray-800">{project.name}</h5>
                    <ul className="mt-2 list-disc pl-6 text-gray-600 text-sm space-y-1">
                      {project.details.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
