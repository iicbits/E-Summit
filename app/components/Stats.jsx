"use client";

import { MicIcon } from "lucide-react";
import { IndianRupee } from "lucide-react";
import { Rocket } from "lucide-react";
import { Footprints } from "lucide-react";

const stats = [
  { label: "Footfalls", value: "30K+", icon: <Footprints size={32} /> },
  { label: "Startups", value: "250+", icon: <Rocket size={32} /> },
  { label: "Speakers", value: "50+", icon: <MicIcon size={32} /> },
  { label: "Prize Pool", value: "20L+", icon: <IndianRupee size={32} /> },
];

const StatsSection = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Decorative Glows */}
      {/* <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div> */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* <div className="mx-auto px-6 mb-12">
          
          <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
            <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
              Our Legacy
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Numbers that <span className="text-accent-400">Define Us </span>?
          </h2>
        </div> */}

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="group relative">
              {/* Card Glass Effect */}
              <div className="absolute inset-0 bg-white/2 border border-white/10 rounded-3xl transition-all duration-500 group-hover:bg-white/5 group-hover:border-accent-200/50 group-hover:scale-[1.02]"></div>

              <div className="relative p-8 md:p-10 flex flex-col items-center text-center">
                {/* Icon/Indicator */}
                <div className="text-2xl mb-4 opacity-60 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-wide">
                  <span className="inline-block transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    {stat.value}
                  </span>
                </div>

                {/* Label */}
                <div className="text-accent-200/60 font-medium uppercase tracking-widest text-[10px] md:text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
