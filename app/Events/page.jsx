"use client";

import { MapPin } from "lucide-react";
import { Calendar } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const eventCategories = ["All", "Competitions", "Workshops", "Networking"];

const events = [
  {
    id: 1,
    title: "INNOVATHON 3.0",
    category: "Competitions",
    date: "Feb 6th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description: `INNOVATHON 3.0 is a 36-hour innovation hackathon where participants build real-world technology solutions through hands-on problem-solving and rapid prototyping.
    Highlights:
      • Software, AI/ML, hardware & automation challenges
      • Mentorship from faculty and experts
      • Working prototypes & live demonstrations
      • Certificates and recognition`,
    image: "/images/hero.webp",
  },
  {
    id: 2,
    title: "TEXcelerate 2026",
    category: "Competitions",
    date: "Feb 6th",
    time: "11:00 AM",
    venue: "BIT Sindri Campus",
    description: `TEXcelerate 2026 is a flagship idea pitching and innovation challenge focused on scalable, industry-relevant solutions in Mining 4.0 and Cyber-Physical Systems.

Highlights:
• High-impact idea validation
• Seed funding up to ₹2,00,000
• Industry & academic mentorship
• Pre-incubation opportunities`,
    image: "/images/hero.webp",
  },
  {
    id: 3,
    title: "UDAAN UG Fellowship",
    category: "Competitions",
    date: "Feb 7th",
    time: "10:00 AM",
    venue: "BIT Sindri Campus",
    description: `UDAAN UG Fellowship supports undergraduate students in long-term, research-driven innovation aligned with national and industrial priorities.

Highlights:
• ₹10,000/month fellowship
• Structured mentorship
• Research & deployment focus
• Certificate of completion`,
    image: "/images/hero.webp",
  },
  {
    id: 4,
    title: "Technology Development Program (TDP)",
    category: "Competitions",
    date: "Feb 7th",
    time: "01:00 PM",
    venue: "BIT Sindri Campus",
    description: `Technology Development Program (TDP) supports faculty-led applied research to convert laboratory innovations into deployment-ready technologies.

Highlights:
• Grants up to ₹15 Lakhs
• Industry-aligned research
• CPS CoE ecosystem access
• Commercialization pathways`,
    image: "/images/hero.webp",
  },
  {
    id: 5,
    title: "Being an Entrepreneur",
    category: "Competitions",
    date: "Feb 8th",
    time: "10:00 AM",
    venue: "BIT Sindri Campus",
    description: `Being an Entrepreneur is a case-based competition focused on real-world business decision-making and strategy.

Highlights:
• Practical business cases
• Founder-level thinking
• Boardroom-style pitching
• Expert Q&A sessions`,
    image: "/images/hero.webp",
  },
  {
    id: 6,
    title: "Equity Minds",
    category: "Networking",
    date: "Feb 8th",
    time: "03:00 PM",
    venue: "BIT Sindri Campus",
    description: `Equity Minds is a virtual investment simulation where participants think and decide like angel investors and venture capitalists.

Highlights:
• Startup evaluation & valuation
• Virtual capital allocation
• Strategy & risk assessment
• Expert jury interaction`,
    image: "/images/hero.webp",
  },
];

const EventCard = ({ event }) => (
  <div className="group relative bg-[#160021] border border-white/5 rounded-xl overflow-hidden hover:border-accent-500/50 transition-all duration-500">
    <div className="aspect-video w-full overflow-hidden">
      <Image
        src={event.image}
        alt={event.title}
        width={200}
        height={200}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-accent-600/40 backdrop-blur-2xl border border-accent-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
          {event.category}
        </span>
      </div>
      <div className="absolute hidden lg:block w-full h-1/2 mt-1 top-0 bg-linear-to-t from-[#160021] via-transparent to-transparent"></div>
    </div>

    <div className="px-2 py-6 md:p-6">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white group-hover:text-accent-400 transition-colors">
          {event.title}
        </h3>
        <div className="text-right">
          <p className="text-accent-400 font-bold text-xs"></p>
          <p className="text-gray-500 text-[10px]"></p>
        </div>
      </div>
      <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-2">
        {event.description}
      </p>
      <div className="w-full px-4 py-2 mb-2 border border-white/10 rounded-lg flex flex-wrap justify-between">
        <p className="flex items-center gap-2 text-gray-300 text-xs">
          <Calendar size={16} className="text-accent-500" />{" "}
          <span>
            {event.date}, {event.time}
          </span>
        </p>
        <p className="flex items-center gap-2 text-gray-300 text-xs">
          <MapPin size={16} className="text-accent-500" />{" "}
          <span>{event.venue}</span>
        </p>
      </div>
      <div className="flex gap-4">
        <button className="w-full py-2 rounded-lg border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:bg-white group-hover:text-black transition-all duration-300">
          View Details
        </button>
        <button className="w-full py-2 rounded-lg border border-white/10 text-gray-300 text-xs font-bold uppercase tracking-widest group-hover:bg-accent-700  transition-all duration-300">
          Register ➝
        </button>
      </div>
    </div>
  </div>
);

const page = () => {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen text-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0 bg-cover opacity-30">
          <Image
            src="/images/event-hero.webp"
            alt="Event Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-t from-[#0c0014] via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl">
          <div className="relative z-10 text-center max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-wide mb-6 flex items-center justify-center">
              THE
              <span className="block text-transparent bg-clip-text bg-linear-to-t from-accent-600 via-accent-400 to-accent-400 ml-6">
                LINEUP
              </span>
            </h1>
          </div>

          <p className="text-gray-300 font-kiona text-xs md:text-base font-light tracking-wide max-w-2xl mx-auto">
            Discover a dynamic lineup of innovation challenges, workshops, and
            competitions designed to spark ideas, test skills, and turn ambition
            into action.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <div className="sticky top-0 z-40 bg-[#0c0014]/80 backdrop-blur-md border-y border-white/5 py-6 px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap overflow-x-auto no-scrollbar space-x-4 justify-center">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                filter === cat
                  ? "bg-accent-900 text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Events Grid */}
      <main className="max-w-11/12 mx-auto md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-xl italic">
              Stay tuned! Events will be revealed soon :)
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default page;
