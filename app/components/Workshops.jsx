"use client";

import Image from "next/image";

const workshops = [
  {
    title: "UDAAN UG Fellowship Program 2025",
    provider: "Impact Highlights",
    description: (
      <>
        The UDAAN UG Fellowship Program 2025 empowered undergraduate innovators
        through funded, research-driven projects aligned with real-world
        challenges. <strong>17 shortlisted students</strong> presented their
        ideas, with <strong>10 fellows selected</strong> for structured
        mentorship and <strong>₹1,00,000 funding per fellow</strong>. The
        program strengthened research, prototyping, and deployment-focused
        innovation at BIT Sindri.
      </>
    ),
    logo: "/images/udaan.jpeg", // replace with actual logo if available
  },
  {
    title: "IDEA TRIBE 2025",
    provider: "Impact Highlights",
    description: (
      <>
        IDEA TRIBE 2025 was a multi-stage idea pitching initiative promoting
        tribal entrepreneurship and grassroots innovation across Jharkhand. The
        program engaged <strong>126+ teams</strong>, with{" "}
        <strong>30 finalists</strong> at the state level.{" "}
        <strong>
          Three BIT Sindri teams secured ₹2,00,000+ in seed funding
        </strong>
        , presenting community-driven solutions in sustainability, healthcare,
        livelihood, and mining waste innovation.
      </>
    ),
    logo: "/images/ideatribe.webp",
  },
  {
    title: "TEXcelerate 2025",
    provider: "Impact Highlights",
    description: (
      <>
        TEXcelerate 2025 was an on-campus idea pitching and innovation challenge
        that brought together teams to present industry-oriented solutions.{" "}
        <strong>Two teams received seed funding of ₹2,00,000</strong>, along
        with mentorship, pre-incubation support, and expert guidance. The
        program focused on Mining 4.0, Cyber-Physical Systems, sustainability,
        and deployment-ready innovation at BIT Sindri.
      </>
    ),
    logo: "/images/Texcelerate.jpeg",
  },
  {
    title: "INNOVATHON 2025",
    provider: "Highlights",
    description: (
      <>
        INNOVATHON 2025 was a 36-hour national-level hackathon where students
        built practical, industry-oriented solutions for real-world challenges.
        Participants worked across AI/ML, automation, smart manufacturing, and
        open innovation, developing functional prototypes under expert
        mentorship. The top three teams were awarded cash prizes of{" "}
        <strong>₹15,000</strong>, <strong>₹10,000</strong>, and{" "}
        <strong>₹5,000</strong>.
      </>
    ),
    logo: "/images/hero.webp",
  },
];

const WorkshopCard = ({ workshop }) => (
  <div
    className={`relative group p-px rounded-2xl transition-all duration-500 bg-transparent`}
  >
    <div className="bg-[#160021] rounded-2xl p-6 h-full border border-white/10 group-hover:border-accent-500/50 transition-colors">
      {/* Logo Container */}
      <div className="rounded-xl h-40 w-full overflow-hidden mb-6">
        <Image
          src={workshop.logo}
          alt={workshop.provider}
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <h3 className="text-white text-xl font-bold mb-1">{workshop.title}</h3>
      {/* <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-4">
        BY <span className="text-gray-200">{workshop.provider}</span>
      </p> */}
      <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
        {workshop.description}
      </p>
    </div>
  </div>
);

const Workshops = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-6 mb-12">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
            <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
              Events
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Past<span className="text-accent-400"> Initiatives</span>
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <WorkshopCard
              key={index}
              workshop={workshop}
              isHighlighted={index === 2} // Odoo is highlighted in your screenshot
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workshops;
