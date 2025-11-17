import React from "react";

export default function Stats() {
  const stats = [
    { value: "250+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "50+", label: "Team Members" },
    { value: "15+", label: "Years Experience" },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-900/30 backdrop-blur-sm relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center group hover:transform hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 animate-count">
                {stat.value}
              </div>
              <div className="text-slate-400 group-hover:text-cyan-400 transition-colors">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
