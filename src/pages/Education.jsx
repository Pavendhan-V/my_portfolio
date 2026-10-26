import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Education() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>

        <div className="space-y-10">

          {/* B.E Card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 shadow-lg rounded-2xl p-6 flex items-start gap-6">
            
            {/* Left glowing line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl shadow"></div>

            {/* Logo */}
            <img
              src="/pavendhan_v-portfolio/gceb.png"
              className="w-20 h-20 object-contain rounded-lg border shadow"
              alt="GCEB Logo"
            />

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                B.E in Electrical & Electronics Engineering - 70%
              </h3>
              <p className="text-gray-700 mt-1">
                Government College Of Engineering - Bargur (2014 - 2018)
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Anna University
              </p>
            </div>
          </div>

          {/* Higher Secondary*/}
          <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 shadow-lg rounded-2xl p-6 flex items-start gap-6">
            
            {/* Left glowing line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl shadow"></div>

            {/* Logo */}
            <img
              src="/pavendhan_v-portfolio/school.png"
              className="w-20 h-20 object-contain rounded-lg border shadow"
              alt="School Logo"
            />

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Higher Secondary Education (Class 12 - HSC) - 90%
              </h3>
              <p className="text-gray-700 mt-1">
                Government Higher Secondary School - Vadugamuthampatti (2014)
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Tamilnadu
              </p>
            </div>
          </div>


          {/* Higher Secondary*/}
          <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 shadow-lg rounded-2xl p-6 flex items-start gap-6">
            
            {/* Left glowing line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl shadow"></div>

            {/* Logo */}
            <img
              src="/pavendhan_v-portfolio/school.png"
              className="w-20 h-20 object-contain rounded-lg border shadow"
              alt="School Logo"
            />

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                Secondary Education (Class 10 - SSLC) - 90%
              </h3>
              <p className="text-gray-700 mt-1">
                Government Higher Secondary School - Vadugamuthampatti (2012)
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Tamilnadu
              </p>
            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}
