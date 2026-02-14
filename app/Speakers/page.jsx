import React from "react";

const speakers = [
  {
    name: "Aarav Mehta",
    role: "Startup Founder",
    image: "/speakers/s1.jpg",
  },
  {
    name: "Ishita Verma",
    role: "AI Researcher",
    image: "/speakers/s2.jpg",
  },
  {
    name: "Rohan Kapoor",
    role: "Venture Capitalist",
    image: "/speakers/s3.jpg",
  },
  {
    name: "Sneha Iyer",
    role: "Product Strategist",
    image: "/speakers/s4.jpg",
  },
  {
    name: "Aditya Rao",
    role: "Tech Entrepreneur",
    image: "/speakers/s5.jpg",
  },
  {
    name: "Mehak Singh",
    role: "Design Leader",
    image: "/speakers/s6.jpg",
  },
  {
    name: "Karan Malhotra",
    role: "Growth Hacker",
    image: "/speakers/s7.jpg",
  },
  {
    name: "Tanya Gupta",
    role: "FinTech Expert",
    image: "/speakers/s8.jpg",
  },
];

const Speakers = () => {
  return (
    <div className="relative min-h-screen py-24 px-6 overflow-hidden bg-gradient-to-br from-[#0f001f] via-[#1a0033] to-[#000814]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>

      {/* Heading */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
          OUR{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400">
            SPEAKERS
          </span>
        </h2>
        <p className="text-gray-400 mt-4">
          Meet the visionaries shaping the future.
        </p>
      </div>

      {/* Speaker Grid */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* First 4 Speakers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {speakers.slice(0, 4).map((speaker, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            >
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-blue-500 blur-md"></div>

              <div className="relative bg-[#120022]/80 rounded-3xl p-6 h-full">
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover rounded-full border-4 border-purple-500 group-hover:border-blue-400 transition duration-500"
                  />
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition duration-300">
                  {speaker.name}
                </h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {speaker.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Last 4 Speakers (Blurred Section) */}
        <div className="relative">

          {/* Blurred Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 blur-md pointer-events-none">
            {speakers.slice(4, 8).map((speaker, index) => (
              <div
                key={index}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 text-center overflow-hidden"
              >
                <div className="relative bg-[#120022]/80 rounded-3xl p-6 h-full">
                  <div className="relative w-32 h-32 mx-auto mb-6">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-full h-full object-cover rounded-full border-4 border-purple-500"
                    />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h3>

                  <p className="text-gray-400 mt-2 text-sm">
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Collective Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm rounded-3xl">
            <h3 className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 animate-pulse">
              Revealing Soon
            </h3>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Speakers;
