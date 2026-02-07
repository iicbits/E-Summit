import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div className="absolute flex justify-center items-center flex-col w-full mt-60">
        <Image
          src="/images/E-SUMMIT-06.png"
          alt="Hero Image"
          width={400}
          height={200}
          objectFit="cover"
          className="w-4xl h-auto"
        />

        <div className="mt-4 text-center">
          <h4 className="font-bold text-3xl backdrop-blur-2xl">
            13th - 15th March
          </h4>
          <p className="text-gray-500 text-sm mt-10 mb-6">
            Want to partner with North India's largest fest?
          </p>
          <button className="px-8 py-3 font-kiona! bg-accent-300/40 backdrop-blur-lg border border-accent-800/50 text-accent-800 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300">
            Download Brochure
          </button>
        </div>
      </div>
      <div className="">
        <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={1600}
          height={900}
          objectFit="cover"
          className="w-full h-screen md:h-fit"
        />
      </div>
    </div>
  );
};

export default Hero;
