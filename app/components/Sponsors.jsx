"use client";

import Image from "next/image";

const sponsors = [
  {
    tier: "Title Sponsor",
    name: "BITSANA",
    logo: "/images/Bitsaana.jpg",
  },
  {
    tier: "Event Sponsor",
    name: "MG Seating Systems",
    logo: "/images/mg.jpg",
  },
  {
    tier: "Platform Partner",
    name: "Hack2Skill",
    logo: "/images/hack2skill.jpg",
  },
  {
    tier: "Official IoT's Partner",
    name: "Robotree",
    logo: "/images/robotree.png",
  },
  {
    tier: "Official Banking Partner",
    name: "HDFC Bank",
    logo: "/images/hdfc.svg",
  },
  {
    tier: "Official Fooding Partner",
    name: "Haldiram's",
    logo: "/images/haldi.png",
  },
];

const SponsorSection = () => {
  return (
    <section className="py-24 px-6 relative font-sans overflow-hidden">
      <div className="absolute -z-10 top-0 left-1/4 w-96 h-96 bg-accent-400/10 rounded-full blur-[120px]"></div>
      <div className="absolute -z-10 bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]"></div>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mx-auto px-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
            <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
              Sponsors
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Supported By<span className="text-accent-400"> Industries</span>
          </h2>
        </div>

        {/* Main Sponsor Card (Premium Focus) */}
        {/* <div className="flex justify-center mb-16">
          <div className="group relative w-full max-w-2xl">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-[#0a1128] border border-white/10 rounded-2xl p-10 flex flex-col items-center">
              <span className="text-[10px] font-black tracking-[0.4em] text-blue-400 uppercase mb-6">
                {sponsors[0].tier}
              </span>
              <img
                src={sponsors[0].logo}
                alt={sponsors[0].name}
                className="h-16 md:h-20 object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div> */}

        {/* Secondary Sponsors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="group bg-white/3 border border-white/5 hover:border-accent-500/40 rounded-xl p-4 flex flex-col items-center transition-all duration-500 hover:bg-white/5"
            >
              <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-4">
                {sponsor.tier}
              </span>
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={160}
                height={160}
                className="h-20 object-contain transition-all duration-500 scale-95 group-hover:scale-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
