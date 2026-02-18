import Image from "next/image";

const Hero = () => {
    return (
        <div className="relative min-h-screen">
            <div className="absolute flex justify-center items-center flex-col w-full mt-60">
                <Image
                    src="/images/E-SUMMIT-06.webp"
                    alt="Hero Image"
                    width={400}
                    height={200}
                    className="w-4xl h-auto"
                />

                <div className="mt-4 text-center">
                    <h4 className="font-bold md:hidden text-2xl backdrop-blur-2xl mb-6">
                        13th - 15th March
                    </h4>
                    {/* <p className="text-gray-500 text-sm mt-10 mb-6">
            Want to partner with North India's largest fest?
          </p> */}
<<<<<<< HEAD

                    <a
                        href="/brochure.pdf"
                        download

                    >

                    <button className="px-6 py-2 md:px-8 md:py-3 font-kiona! bg-accent-300/40 backdrop-blur-lg border border-accent-800/50 text-accent-800 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300">
                        Download Brochure
                    </button>
                    </a>
                </div>
            </div>
            <div className="">
                <video
                    src="/videos/hero.webm"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-screen md:h-fit object-cover"
                />
            </div>

=======
          <a
            href="/DOCS/E-Summit Brochure.pdf"
            download="E-Summit Brochure.pdf"
            className="px-6 py-2 md:px-8 md:py-3 font-kiona bg-accent-300/40 backdrop-blur-lg border border-accent-800/50 text-accent-800 text-xs font-bold tracking-widest uppercase rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300 inline-block"
          >
            Download Brochure
          </a>
>>>>>>> dev2
        </div>
    );
};

export default Hero;

