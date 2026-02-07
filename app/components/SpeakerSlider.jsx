"use client";

import React from "react";

const speakers = [
  {
    name: "S. Maheshwari",
    role: "CEO",
    company: "NEWTON SCHOOL",
    img: "/images/myphoto.png",
  },
  {
    name: "S. Maheshwari",
    role: "CEO",
    company: "NEWTON SCHOOL",
    img: "/images/myphoto.png",
  },
  {
    name: "S. Maheshwari",
    role: "CEO",
    company: "NEWTON SCHOOL",
    img: "/images/myphoto.png",
  },
  {
    name: "S. Maheshwari",
    role: "CEO",
    company: "NEWTON SCHOOL",
    img: "/images/myphoto.png",
  },
  {
    name: "S. Maheshwari",
    role: "CEO",
    company: "NEWTON SCHOOL",
    img: "/images/myphoto.png",
  },
];

const SpeakerCard = ({ speaker }) => (
  <div className="shrink-0 w-64 md:w-72 rounded-3xl overflow-hidden shadow-xl border border-accent-400/30">
    <div className="h-80 w-full overflow-hidden">
      <img
        src={speaker.img}
        alt={speaker.name}
        className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500"
      />
    </div>
    <div className="p-4 font-kiona! bg-linear-to-t from-accent-900 to-transparent text-center">
      <h3 className="text-white font-bold text-lg">{speaker.name}</h3>
      <p className="text-blue-100 text-xs mt-1">
        {speaker.role} ,{" "}
        <span className="font-black uppercase">{speaker.company}</span>
      </p>
    </div>
  </div>
);

const SpeakerSlider = () => {
  // Double the array to create a infinite loop
  const doubleSpeakers = [...speakers, ...speakers];

  return (
    <section className="py-20 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
          <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
            Speakers
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Our Past<span className="text-accent-400"> Speakers</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative flex overflow-x-hidden group">
        <div className="flex space-x-8 animate-marquee group-hover:pause-animation py-4">
          {doubleSpeakers.map((speaker, index) => (
            <SpeakerCard key={index} speaker={speaker} />
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animation Style */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .pause-animation {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default SpeakerSlider;
