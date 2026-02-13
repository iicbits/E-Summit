"use client";

import Image from "next/image";
import React from "react";

const speakers = [
  {
    name: "Prof. Anders Frederiksen",
    role: "Professor",
    company: "Aarhus University, Denmark",
    img: "/images/anders-frederiksen.png",
  },
  {
    name: "Prof. Ramjee Prasad",
    role: "Founder & President",
    company: "CMICT, Denmark",
    img: "/images/Ramjee-Prasad.png",
  },
  {
    name: "Mr. S.N. Sharma",
    role: "Venture Capitalist & Industrialist",
    company: "USA",
    img: "/images/sn-sharma.png",
  },
  {
    name: "Mr. Amrendu Prakash",
    role: "Director In-charge",
    company: "BSL, Bokaro",
    img: "/images/A.Praksh.png",
  },
  {
    name: "Mr. S.K. Verma",
    role: "DC",
    company: "MECON, Ranchi",
    img: "/images/SK-Verma.png",
  },
  {
    name: "Mr. R.N. Singh",
    role: "Chairman",
    company: "DVC, Kolkata",
    img: "/images/R.N.singh.png",
  },
  {
    name: "Dr. Gautam Sinha",
    role: "Ex-Director",
    company: "IIM Kashipur",
    img: "/images/Gautam-Sinha.png",
  },
  {
    name: "Prof. Neeli R. Prasad",
    role: "Serial Entrepreneur",
    company: "USA",
    img: "/images/neeli-prasad.png",
  },
  {
    name: "Rohit Tripathi",
    role: "Founder",
    company: "Ranchi Mall",
    img: "/images/rohit-tripathi.png",
  },
  {
    name: "Prof. Dheeraj Kumar",
    role: "Deputy Director",
    company: "IIT (ISM) Dhanbad",
    img: "/images/dheeraj-kumar.png",
  },
  {
    name: "Mr. N.K. Mehta",
    role: "Founder & CEO",
    company: "Secure Network, Chennai",
    img: "/images/nk-mehta.png",
  },
  {
    name: "Prof. Santosh Anumalli",
    role: "Entrepreneur & Professor",
    company: "JNCASR, Bangalore",
    img: "/images/santosh-anumalli.png",
  },
];

const SpeakerCard = ({ speaker }) => (
  <div className="shrink-0 w-64 h-fit md:w-72 rounded-3xl overflow-hidden shadow-xl border border-accent-400/30">
    <div className="relative h-80 w-full overflow-hidden">
      <Image
        src={speaker.img}
        alt={speaker.name}
        fill
        className="w-full h-full object-cover mix-blend-luminosity hover:mix-blend-normal transition-all duration-500 z-0"
      />
      {/* Bottom Gradient */}
      <div className="absolute h-full w-full bg-linear-to-t from-[#160021] via-transparent to-transparent z-10" />
    </div>

    <div className="p-4 h-full bg-linear-to-t from-[#430062] to-[#160021] text-center">
      <h3 className="text-white font-bold text-lg">{speaker.name}</h3>
      <p className="text-blue-100 text-sm mt-1">
        {speaker.role} ,{" "}
        <span className="font-semibold uppercase">{speaker.company}</span>
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
