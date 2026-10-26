import React from "react";
import { Blocks, Cpu, HeartPulse, Layers, Wrench } from "lucide-react";
import PageWrapper from "../components/PageWrapper";

const skillGroups = [
  {
    title: "Embedded Development",
    icon: Cpu,
    skills: ["Embedded C", "C++", "Firmware development", "ARM Cortex-M", "FreeRTOS", "Zephyr RTOS", 
              "Yocto", "Device Drivers", "GPIO", "Interrupts", "DMA", "Timer", "DAC", "ADC", 
              "WDT", "RS232", "RS485", "SPI", "I2C", "CAN", "CAN-FD", "BLE", "Low-level driver development", 
              "GDB Debugging", "Segger RTT", "Segger J-Link", "J-tag", "DC Motor Control", "Stepper Motor Control", 
              "PID Control for Sensor", "Sensor Integration" ],
    featured: true,
  },
  {
    title: "MCU Platforms",
    icon: Blocks,
    skills: ["LPC1769", "NRF52840", "STM32G491", "STM32F407", "RZV2L", "STM32MP135", "ESP32" ],
  },
  {
    title: "Hardware Skills",
    icon: Wrench,
    skills: ["Schematic Design and Verification", "PCB Gerber Verification", "Hardware bring-up", "CRO", "Logic Analyzer", "CAN Analyzer" ],
  },
  {
    title: "Tools & Technologies",
    icon: Layers,
    skills: ["MCUXpresso", "Segger Embedded Studio", "STM32CubeIDE", "QT", "Git", "Bitbucket", "Agile", "Jira", "CMake", "Makefile"],
  },
  {
    title: "Domains",
    icon: HeartPulse,
    skills: ["Medical Products", "Sensor Technology"],
  },
];

export default function Skills() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <header className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          {/* <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">
            Technical toolkit
          </p> */}
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Skills &amp; Expertise
          </h2>
          {/* <p className="mt-4 text-base leading-7 text-gray-600">
            A practical mix of embedded software, hardware, and tools for building reliable connected products.
          </p> */}
        </header>

        <div className="grid items-stretch gap-5 sm:grid-cols-2 sm:gap-6">
          {skillGroups.map((group) => (
            <section
              key={group.title}
              className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-shadow duration-200 hover:shadow-md sm:p-6 ${
                group.featured ? "sm:col-span-2" : ""
              }`}
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                    <group.icon aria-hidden="true" size={21} strokeWidth={1.8} />
                  </span>
                  <h3 className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
                    {group.title}
                  </h3>
                </div>
                <span className="shrink-0 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
                  {group.skills.length} skills
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm font-medium leading-5 text-gray-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-800"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
