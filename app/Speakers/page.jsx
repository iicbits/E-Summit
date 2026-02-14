const Reveal = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden ">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]"></div>

      {/* Main Content Card */}
      <div className="relative z-10 w-full max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter leading-tight">
          SPEAKERS <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-fuchsia-300 to-blue-400">
            REVEALING SOON
          </span>
        </h2>
      </div>

      {/* Floating Geometric Accents (Glassmorphism) */}
      <div className="absolute bottom-10 left-10 w-24 h-24 border border-white/5 rounded-2xl rotate-12 backdrop-blur-sm hidden md:block"></div>
      <div className="absolute top-20 right-20 w-16 h-16 border border-white/5 rounded-full backdrop-blur-sm hidden md:block"></div>
    </div>
  );
};

export default Reveal;
