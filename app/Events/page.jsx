"use client";

import { MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

const eventCategories = ["All", "Competitions", "Workshops", "Networking"];

const events = [
  {
    id: 1,
    title: "E-Summit 2026",
    revealed: false,
    category: "Competitions",
    date: "Mar 13th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione minima obcaecation.",
    image: "/images/hero.webp",
    detailsLink: "",
    registerLink: "",
  },
  {
    id: 2,
    title: "E-Summit 2026",
    revealed: false,
    category: "Competitions",
    date: "Mar 13th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione minima obcaecation.",
    image: "/images/hero.webp",
    detailsLink: "",
    registerLink: "",
  },
  {
    id: 3,
    title: "E-Summit 2026",
    revealed: false,
    category: "Competitions",
    date: "Mar 13th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione minima obcaecation.",
    image: "/images/hero.webp",
    detailsLink: "",
    registerLink: "",
  },
  {
    id: 4,
    title: "E-Summit 2026",
    revealed: false,
    category: "Competitions",
    date: "Mar 13th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione minima obcaecation.",
    image: "/images/hero.webp",
    detailsLink: "",
    registerLink: "",
  },
  {
    id: 5,
    title: "E-Summit 2026",
    revealed: false,
    category: "Workshops",
    date: "Mar 13th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione minima obcaecation.",
    image: "/images/hero.webp",
    detailsLink: "",
    registerLink: "",
  },
  {
    id: 6,
    title: "E-Summit 2026",
    revealed: false,
    category: "Networking",
    date: "Mar 13th",
    time: "09:00 AM",
    venue: "BIT Sindri Campus",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi ratione minima obcaecation.",
    image: "/images/hero.webp",
    detailsLink: "",
    registerLink: "",
  },
];

//Original events data with all details (for reference)
// const events = [
//   {
//     id: 1,
//     title: "INNOVATHON 3.0",
//     revealed: false,
//     category: "Competitions",
//     date: "Feb 6th",
//     time: "09:00 AM",
//     venue: "BIT Sindri Campus",
//     description:
//       "INNOVATHON 3.0 is a 36-hour innovation hackathon focused on real-world technology solutions.",
//     image: "/images/hero.webp",
//     detailsLink: "/DOCS/INNOVATHON.docx",
//     registerLink: "https://example.com/register-innovathon",
//   },
//   {
//     id: 2,
//     title: "TEXcelerate 2026",
//     revealed: false,
//     category: "Competitions",
//     date: "Feb 6th",
//     time: "11:00 AM",
//     venue: "BIT Sindri Campus",
//     description:
//       "TEXcelerate 2026 is a flagship idea pitching and innovation challenge focused on scalable industry solutions.",
//     image: "/images/hero.webp",
//     detailsLink: "/DOCS/texcelerate.docx",
//     registerLink: "https://example.com/register-texcelerate",
//   },
//   {
//     id: 3,
//     title: "UDAAN UG Fellowship",
//     revealed: false,
//     category: "Competitions",
//     date: "Feb 7th",
//     time: "10:00 AM",
//     venue: "BIT Sindri Campus",
//     description:
//       "UDAAN UG Fellowship supports research-driven undergraduate innovation aligned with national priorities.",
//     image: "/images/hero.webp",
//     detailsLink: "/DOCS/udaan.docx",
//     registerLink: "https://example.com/register-udaan",
//   },
//   {
//     id: 4,
//     title: "Technology Development Program",
//     revealed: false,
//     category: "Competitions",
//     date: "Feb 7th",
//     time: "01:00 PM",
//     venue: "BIT Sindri Campus",
//     description:
//       "Technology Development Program supports faculty-led applied research to convert lab innovation into deployment-ready technologies.",
//     image: "/images/hero.webp",
//     detailsLink: "/DOCS/tdp.docx",
//     registerLink: "https://example.com/register-tdp",
//   },
//   {
//     id: 5,
//     title: "Being an Entrepreneur",
//     revealed: false,
//     category: "Competitions",
//     date: "Feb 8th",
//     time: "10:00 AM",
//     venue: "BIT Sindri Campus",
//     description:
//       "Being an Entrepreneur is a case-based competition focused on real-world business strategy and decision-making.",
//     image: "/images/hero.webp",
//     detailsLink: "/DOCS/entrepreneur.docx",
//     registerLink: "https://example.com/register-entrepreneur",
//   },
//   {
//     id: 6,
//     title: "Equity Minds",
//     revealed: false,
//     category: "Networking",
//     date: "Feb 8th",
//     time: "03:00 PM",
//     venue: "BIT Sindri Campus",
//     description:
//       "Equity Minds is a virtual investment simulation where participants think and decide like venture capitalists.",
//     image: "/images/hero.webp",
//     detailsLink: "/DOCS/equityminds.docx",
//     registerLink: "https://example.com/register-equity",
//   },
// ];


const EventCard = ({ event }) => (
    <div className="group relative">

        {/* Background Glass Layer (THIS MOVES) */}
        <div className="absolute inset-0 bg-[#160021] border border-white/10 rounded-2xl transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.3)] group-hover:border-accent-400/50"></div>

        {/* Content Layer */}
        <div className="relative rounded-2xl overflow-hidden">

            {!event.revealed && (
                <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-md flex items-center justify-center text-center text-sm font-bold text-gray-300 px-6">
                    Event details will be revealed soon! <br />
                    Stay tuned.
                </div>
            )}

            <div className="aspect-video overflow-hidden">
                <Image
                    src={event.image}
                    alt={event.title}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="px-5 py-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-400 transition-colors">
                    {event.title}
                </h3>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                    {event.description}
                </p>
            </div>
        </div>
    </div>
);



export default function Page() {
  const [filter, setFilter] = useState("All");

  const filteredEvents =
    filter === "All" ? events : events.filter((e) => e.category === filter);

  return (
    <div className="min-h-screen text-white pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center px-6 pt-20">
        <Image
          src="/images/event-hero.webp"
          alt="Event Background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            THE <span className="text-accent-400">LINEUP</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover innovation challenges, competitions, and networking events
            designed to turn ideas into action.
          </p>
        </div>
      </section>

      {/* Filter Navigation */}
      <div className="sticky top-0 z-40 bg-[#0c0014]/80 backdrop-blur-md border-y border-white/5 py-6 px-6 mb-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {eventCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
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
      <main className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

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
}
