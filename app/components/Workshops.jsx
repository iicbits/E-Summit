"use client";

const workshops = [
  {
    title: "Startups Workshop",
    provider: "XYZ",
    description:
      "This workshop helps early-stage and growing startups learn how to build, scale, and optimize products using XYZ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Startups Workshop",
    provider: "XYZ",
    description:
      "This workshop helps early-stage and growing startups learn how to build, scale, and optimize products using XYZ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Startups Workshop",
    provider: "XYZ",
    description:
      "This workshop helps early-stage and growing startups learn how to build, scale, and optimize products using XYZ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Startups Workshop",
    provider: "XYZ",
    description:
      "This workshop helps early-stage and growing startups learn how to build, scale, and optimize products using XYZ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Startups Workshop",
    provider: "XYZ",
    description:
      "This workshop helps early-stage and growing startups learn how to build, scale, and optimize products using XYZ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
  {
    title: "Startups Workshop",
    provider: "XYZ",
    description:
      "This workshop helps early-stage and growing startups learn how to build, scale, and optimize products using XYZ.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
  },
];

const WorkshopCard = ({ workshop }) => (
  <div
    className={`relative group p-px rounded-2xl transition-all duration-500 bg-transparent`}
  >
    <div className="bg-[#160021] rounded-2xl p-6 h-full border border-white/10 group-hover:border-accent-500/50 transition-colors">
      {/* Logo Container */}
      <div className="bg-white rounded-xl p-4 flex items-center justify-center h-28 mb-6">
        <img
          src={workshop.logo}
          alt={workshop.provider}
          className="max-h-full max-w-[80%] object-contain"
        />
      </div>

      {/* Content */}
      <h3 className="text-white text-xl font-bold mb-1">{workshop.title}</h3>
      <p className="text-gray-400 text-[10px] font-bold tracking-widest uppercase mb-4">
        BY <span className="text-gray-200">{workshop.provider}</span>
      </p>
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
              Wokshops
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Our Past<span className="text-accent-400"> Workshops</span>
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
