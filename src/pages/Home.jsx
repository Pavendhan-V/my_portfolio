import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-[clamp(1.125rem,6.5vw,1.5rem)] sm:text-4xl lg:text-3xl xl:text-4xl whitespace-nowrap font-extrabold text-gray-900 leading-tight">
            Team Lead - Embedded Firmware
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            Embedded Firmware Developer with 8+ years of experience ARM Cortex-M, C/C++, RTOS, Sensor Integration, 
            low level driver development and hardware bring-up. Managing all aspects of the product development cycle, including input, 
            processing, and output. Experienced in building scalable embedded systems for medical products and sensor technology products. 
            Strong in debugging, optimization, and delivering end to tend firmware solutions. Passionate about continuous learning and 
            staying updated with the latest advancements in embedded systems technology.
          </p>

          <div className="mt-8 flex gap-4">

            {/* ✅ Corrected Download Resume for GitHub Pages */}
            <a
              href="/pavendhan_v-portfolio/Pavendhan_V.pdf"
              download="Pavendhan_V_Resume.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition font-medium"
            >
              Download Resume
            </a>

            {/* View Projects Button */}
            <a
              href="#/projects"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-blue-500 transition"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:translate-x-4">
          <img
            src="https://avatars.githubusercontent.com/u/66561649?s=400&u=c774588677d03d333c524cd8ef96efb030784966&v=4"
            className="w-56 h-56 rounded-full object-cover shadow-xl border"
            alt="Pavendhan V"
          />
        </div>
      </div>
    </PageWrapper>
  );
}
