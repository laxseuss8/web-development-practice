"use client";
import React from "react";
import { useState, useEffect } from "react";

function EnergyAuditOptimize() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="h-32 bg-gray-200 rounded-lg mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2].map((i) => (
              <div key={i} className="h-64 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="py-20 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-[#2d3748]">Reduce Energy Waste.</span>{" "}
              <span className="text-[#2b6cb0]">Optimize</span>{" "}
              <span className="text-[#38a169]">Facility Efficiency.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              EnergyAudit+Optimize empowers your organization to uncover
              inefficiencies, boost performance, and unlock energy savings.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#38a169] text-white px-8 py-3 rounded-md hover:bg-[#2f855a] transition-colors font-medium">
                Book a Demo
              </button>
              <button className="border-2 border-[#2b6cb0] text-[#2b6cb0] px-8 py-3 rounded-md hover:bg-[#2b6cb0] hover:text-white transition-colors font-medium">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-lg overflow-hidden shadow-2xl transform rotate-2">
              <img
                src="https://ucarecdn.com/df5b6c20-d0e7-48ef-ae5c-5a4bc4b4ff73/-/format/auto/"
                alt="Energy Management Visualization"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-4xl font-bold text-[#2d3748] text-center mb-4">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            A systematic approach to uncovering inefficiencies and implementing
            solutions that deliver measurable energy savings.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-100"></div>

            <div className="space-y-24">
              <div className="relative flex items-center">
                <div className="flex-1 pr-16">
                  <div className="text-6xl font-light text-green-200 mb-2">
                    01
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d3748] mb-3">
                    Audit & Assessment
                  </h3>
                  <p className="text-gray-600">
                    Our experts conduct a comprehensive evaluation of your
                    facility's energy usage patterns, equipment performance, and
                    operational processes.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-white"></i>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pl-16 ml-auto">
                  <div className="text-6xl font-light text-green-200 mb-2">
                    02
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d3748] mb-3">
                    Data Analysis
                  </h3>
                  <p className="text-gray-600">
                    We analyze collected data using advanced algorithms to
                    identify inefficiencies, anomalies, and optimization
                    opportunities.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-white"></i>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-16">
                  <div className="text-6xl font-light text-green-200 mb-2">
                    03
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d3748] mb-3">
                    Solution Implementation
                  </h3>
                  <p className="text-gray-600">
                    Our team implements targeted solutions and optimization
                    strategies based on the analysis findings.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-white"></i>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pl-16 ml-auto">
                  <div className="text-6xl font-light text-green-200 mb-2">
                    04
                  </div>
                  <h3 className="text-2xl font-bold text-[#2d3748] mb-3">
                    Continuous Monitoring
                  </h3>
                  <p className="text-gray-600">
                    We provide ongoing monitoring and adjustments to ensure
                    sustained energy savings and optimal performance.
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <i className="fa-solid fa-check text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#1B3B5C] text-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-4">
              Proven Results & Impact
            </h2>
            <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
              Our clients achieve significant and measurable improvements in
              energy efficiency and cost savings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-[#234567] rounded-lg p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-[#4A90E2]">
                  30%
                </div>
                <p className="text-sm">Average Reduction in Energy Costs</p>
              </div>
              <div className="bg-[#234567] rounded-lg p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-[#4A90E2]">
                  150+
                </div>
                <p className="text-sm">Industrial Sites Optimized</p>
              </div>
              <div className="bg-[#234567] rounded-lg p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-[#4A90E2]">
                  24/7
                </div>
                <p className="text-sm">Continuous Monitoring & Support</p>
              </div>
              <div className="bg-[#234567] rounded-lg p-8 text-center">
                <div className="text-6xl font-bold mb-4 text-[#4A90E2]">
                  12mo
                </div>
                <p className="text-sm">Average ROI Timeframe</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <h2 className="text-3xl font-bold text-[#2d3748] text-center mb-12">
            Success Metrics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { metric: "30%", description: "Average Energy Savings" },
              { metric: "50K+", description: "Facilities Optimized" },
              { metric: "1M+", description: "Tons of CO2 Reduced" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <div className="text-4xl font-bold text-[#2b6cb0] mb-2">
                  {stat.metric}
                </div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 text-center bg-white rounded-lg shadow-lg my-16 px-4">
          <h2 className="text-3xl font-bold text-[#2d3748] mb-6">
            Ready to Optimize Your Energy Usage?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of facilities already saving with
            EnergyAudit+Optimize
          </p>
          <div className="space-x-4">
            <button className="bg-[#38a169] text-white px-8 py-3 rounded-md hover:bg-[#2f855a] transition-colors font-medium">
              Schedule a Demo
            </button>
            <button className="border-2 border-[#2b6cb0] text-[#2b6cb0] px-8 py-3 rounded-md hover:bg-[#2b6cb0] hover:text-white transition-colors font-medium">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default EnergyAuditOptimize;
