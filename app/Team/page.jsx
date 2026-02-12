"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Linkedin, Instagram, Mail } from "lucide-react";

// Sample data with images
const facultyMembers = [
  { name: "Prof. Rajesh Kumar", role: "IIC Coordinator", image: "/images/faculty1.jpg" },
  { name: "Prof. Anjali Singh", role: "Mentor", image: "/images/faculty2.jpg" },
];

const executiveMembers = [
  {
    name: "Adarsh Kumar",
    role: "Event Head",
    image: "/images/executive1.jpg",
    socials: { linkedin: "#", instagram: "#", mail: "mailto:adarsh@example.com" },
  },
  {
    name: "Ananya Singh",
    role: "Marketing Lead",
    image: "/images/executive2.jpg",
    socials: { linkedin: "#", instagram: "#", mail: "mailto:ananya@example.com" },
  },
];

const associateMembers = [
  {
    name: "Rohit Verma",
    role: "Technical Lead",
    image: "/images/associate1.jpg",
    socials: { linkedin: "#", instagram: "#", mail: "mailto:rohit@example.com" },
  },
  {
    name: "Priya Sharma",
    role: "Design Lead",
    image: "/images/associate2.jpg",
    socials: { linkedin: "#", instagram: "#", mail: "mailto:priya@example.com" },
  },
];

const coordinators = [
  {
    name: "Vikram Mehta",
    role: "Coordinator",
    image: "/images/coordinator1.jpg",
    socials: { linkedin: "#", instagram: "#", mail: "mailto:vikram@example.com" },
  },
  {
    name: "Neha Gupta",
    role: "Coordinator",
    image: "/images/coordinator2.jpg",
    socials: { linkedin: "#", instagram: "#", mail: "mailto:neha@example.com" },
  },
];

// Card Component
const TeamCard = ({ member }) => (
  <div className="group bg-[#160021] rounded-2xl overflow-hidden border border-white/10 hover:border-accent-500/50 transition-all duration-500">
    {member.image && (
      <div className="relative w-full h-64">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    )}
    <div className="p-6 text-center">
      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
      <p className="text-gray-400 text-sm uppercase tracking-wide mb-4">{member.role}</p>
      {member.socials && (
        <div className="flex justify-center gap-4">
          {member.socials.linkedin && (
            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="text-gray-400 hover:text-accent-400 transition-colors" />
            </a>
          )}
          {member.socials.instagram && (
            <a href={member.socials.instagram} target="_blank" rel="noopener noreferrer">
              <Instagram className="text-gray-400 hover:text-accent-400 transition-colors" />
            </a>
          )}
          {member.socials.mail && (
            <a href={member.socials.mail}>
              <Mail className="text-gray-400 hover:text-accent-400 transition-colors" />
            </a>
          )}
        </div>
      )}
    </div>
  </div>
);

const page = () => {
  const [activeTab, setActiveTab] = useState("Executive");

  const renderMembers = () => {
    switch (activeTab) {
      case "Executive":
        return executiveMembers;
      case "Associate":
        return associateMembers;
      case "Coordinator":
        return coordinators;
      default:
        return [];
    }
  };

  return (
    <div className="min-h-screen text-white font-sans py-20 px-6">
      {/* Header */}
      <div className="text-center max-w-4xl mx-auto mb-12">
        <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
          <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
            Our Team
          </span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black mb-4">
          MEET THE <span className="text-accent-400">VISIONARIES</span>
        </h1>
        <p className="text-gray-300 text-sm md:text-base font-light tracking-wide max-w-2xl mx-auto">
          The passionate minds behind E-Summit 2026, driving innovation, strategy, and execution.
        </p>
      </div>

      {/* Faculty/IIC Members */}
      <h2 className="text-3xl font-bold mb-6 text-center">Faculty / IIC Members</h2>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16">
        {facultyMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-center gap-4 flex-wrap">
        {["Executive", "Associate", "Coordinator"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === tab ? "bg-accent-900 text-white" : "text-gray-400 hover:text-white"
            }`}
          >
            {tab} Members
          </button>
        ))}
      </div>

      {/* Members Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {renderMembers().map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default page;
