"use client";

import Image from "next/image";

/* ================= SPONSOR DATA ================= */

// const sponsors = [
//   {
//     name: "ABC Corporation",
//     type: "Title Sponsor",
//     image: "/images/apple.png",
//     color: "from-purple-600 via-fuchsia-500 to-indigo-500",
//   },
//   {
//     name: "TechNova",
//     type: "Gold Sponsor",
//     image: "/images/nvidia.png",
//     color: "from-indigo-600 via-purple-500 to-blue-500",
//   },
//   {
//     name: "Foodies Hub",
//     type: "Food Sponsor",
//     image: "/images/swiggy(1).png",
//     color: "from-violet-600 via-purple-500 to-fuchsia-500",
//   },

//   /* 🔥 COMING SOON SPONSORS */
//   {
//     name: "Revealing Soon",
//     type: "Platinum Sponsor",
//     comingSoon: true,
//   },
//   {
//     name: "Revealing Soon",
//     type: "Powered By",
//     comingSoon: true,
//   },
//   {
//     name: "Revealing Soon",
//     type: "Associate Sponsor",
//     comingSoon: true,
//   },
// ];

/* ================= CARD ================= */

// const SponsorCard = ({ sponsor }) => {
//   return (
//     <div
//       className="relative w-full h-80 rounded-3xl overflow-hidden
//     bg-linear-to-br from-[#140022] to-[#0c0016]
//     border border-purple-500/20
//     shadow-[0_0_40px_rgba(168,85,247,0.15)]
//     flex flex-col items-center justify-center text-center p-6
//     group transition-all duration-500 hover:scale-105"
//     >
//       {/* Glow Effect for normal sponsors */}
//       {!sponsor.comingSoon && (
//         <div
//           className={`absolute bottom-0 left-0 w-full h-24
//           bg-linear-to-t ${sponsor.color}
//           blur-2xl opacity-60 group-hover:opacity-90 transition`}
//         ></div>
//       )}

//       {/* COMING SOON STYLE */}
//       {sponsor.comingSoon ? (
//         <div className="z-10 flex flex-col items-center justify-center text-center">
//           <div className="text-purple-400 text-2xl font-semibold mb-4 tracking-widest animate-pulse">
//             REVEALING SOON
//           </div>

//           <p className="text-purple-300/70 text-sm uppercase tracking-wider">
//             {sponsor.type}
//           </p>
//         </div>
//       ) : (
//         <>
//           {/* Sponsor Logo */}
//           <div className="relative w-32 h-20 mb-6 z-10">
//             <Image
//               src={sponsor.image}
//               alt={sponsor.name}
//               fill
//               className="object-contain"
//             />
//           </div>

//           {/* Sponsor Name */}
//           <h3 className="text-white text-xl font-semibold z-10">
//             {sponsor.name}
//           </h3>

//           {/* Sponsor Type */}
//           <p className="text-gray-400 text-sm mt-2 z-10 uppercase tracking-wider">
//             {sponsor.type}
//           </p>
//         </>
//       )}
//     </div>
//   );
// };

/* ================= PAGE ================= */

// export default function SponsorsPage() {
//   return (
//     <div className="min-h-screen bg-[#0b0014] text-white py-20 px-8">
//       {/* Header */}
//       <div className="text-center max-w-4xl mx-auto mb-16">
//         <h1 className="text-5xl md:text-6xl font-black mb-4">
//           OUR <span className="text-purple-500">SPONSORS</span>
//         </h1>
//         <p className="text-gray-300 text-sm md:text-base">
//           Meet the industry leaders and partners supporting E-Summit '26.
//         </p>
//       </div>

//       {/* Sponsors Grid */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
//         {sponsors.map((sponsor, index) => (
//           <SponsorCard key={index} sponsor={sponsor} />
//         ))}
//       </div>
//     </div>
//   );
// }

const Reveal = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden ">
      {" "}
      {/* Background Decorative Elements */}{" "}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>{" "}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>{" "}
      {/* Main Content Card */}{" "}
      <div className="relative z-10 w-full max-w-4xl text-center">
        {" "}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
          {" "}
          SPEAKERS <br />{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-300 to-blue-400">
            {" "}
            REVEALING SOON{" "}
          </span>{" "}
        </h2>{" "}
      </div>{" "}
      {/* Floating Geometric Accents (Glassmorphism) */}{" "}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rounded-2xl rotate-12 backdrop-blur-sm hidden md:block"></div>{" "}
      <div className="absolute top-20 right-20 w-16 h-16 border border-white/5 rounded-full backdrop-blur-sm hidden md:block"></div>{" "}
    </div>
  );
};
export default Reveal;
