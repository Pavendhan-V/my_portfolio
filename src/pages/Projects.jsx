import React from "react";
import PageWrapper from "../components/PageWrapper";

const PROJECT_LIST = [
  

  // ⭐ Embedded Test Analyzer Tool
  {
    title: "Embedded Scope - AIO",
    desc: "This is an all-in-one embedded test analyzer tool for debugging and testing embedded systems. \
           It includes a logic analyzer, protocol analyzer, oscilloscope, and signal generator.",
    tech: ["STM32", "Embedded C", "QT C++", "QT QML" ],
    // gif: "video.gif", 
    // video: "https://www.youtube.com/embed/gt3Cq_xmqzc",
  },

  // ⭐ Bootloader Development for STM32 and LPC1769
  {
    title: "Bootloader Development for STM32 and LPC1769",
    desc: "Developed a custom bootloader for STM32 and LPC1769 microcontrollers, enabling firmware updates over UART, CAN, and USB. \
           The bootloader supports secure firmware updates, error handling, and rollback mechanisms.",
    tech: ["STM32", "LPC1769", "Embedded C", "UART", "CAN", "QT C++", "QT QML" ],
    // gif: "video.gif", 
    // video: "https://www.youtube.com/embed/gt3Cq_xmqzc",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Own Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_LIST.map((p) => (
            <div
              key={p.title}
              className="p-6 bg-white border rounded-lg shadow-sm hover:shadow transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>

              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 border text-xs rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* VIDEO */}
              {p.video && (
                <div className="w-full aspect-video rounded-lg overflow-hidden border mt-4">
                  <iframe
                    className="w-full h-full"
                    src={p.video}
                    title={p.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}

              {/* GIF */}
              {p.gif && (
                <div className="w-full rounded-lg overflow-hidden border mt-4">
                  <img
                    src={import.meta.env.BASE_URL + p.gif}
                    alt={p.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
