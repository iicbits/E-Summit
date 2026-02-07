"use client";

const sponsors = [
  {
    tier: "Title Sponsor",
    name: "Google Cloud",
    logo: "/api/placeholder/200/80",
  },
  {
    tier: "Platinum Sponsor",
    name: "Microsoft",
    logo: "/api/placeholder/180/70",
  },
  { tier: "Gold Sponsor", name: "Adobe", logo: "/api/placeholder/150/60" },
  { tier: "Associate Sponsor", name: "Intel", logo: "/api/placeholder/150/60" },
  { tier: "Gold Sponsor", name: "Adobe", logo: "/api/placeholder/150/60" },
  { tier: "Associate Sponsor", name: "Intel", logo: "/api/placeholder/150/60" },
  { tier: "Gold Sponsor", name: "Adobe", logo: "/api/placeholder/150/60" },
  { tier: "Associate Sponsor", name: "Intel", logo: "/api/placeholder/150/60" },
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
            Our Past<span className="text-accent-400"> Sponsors</span>
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
              className="group bg-white/3 border border-white/5 hover:border-accent-500/40 rounded-xl p-8 flex flex-col items-center transition-all duration-500 hover:bg-white/5"
            >
              <span className="text-[9px] font-bold tracking-widest text-gray-500 uppercase mb-4">
                {sponsor.tier}
              </span>
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="h-10 object-contain brightness-0 invert opacity-50 group-hover:opacity-100 transition-all duration-500 scale-95 group-hover:scale-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
