import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-20">
      <div className="mx-auto mb-12">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
          <span className="font-kiona text-blue-100 text-sm uppercase tracking-widest">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What is <span className="text-accent-400">E-Summit</span>?
        </h2>
      </div>

      <div className="flex gap-16">
        <div className="max-w-2xl font-kiona text-purple-100 text-sm md:text-md leading-loose tracking-wide space-y-6">
          
          <p>
            <strong>E-Summit 2026</strong> marks a historic milestone in the entrepreneurial journey of <strong>BIT Sindri</strong>. Organized <strong>for the first time</strong> by the <strong>Institution’s Innovation Council (IIC 8.0)</strong>, the summit reflects the institute’s growing commitment to innovation, startups, and entrepreneurial thinking.
          </p>

          <p>
            Designed as a platform for learning, collaboration, and real-world exposure, E-Summit 2026 brings together students, innovators, industry experts, mentors, and investors from across the country. Featuring startup pitching sessions, hackathons, expert talks, panel discussions, and hands-on workshops, the summit lays the foundation for a strong startup culture on campus, encouraging students to take ideas beyond classrooms and transform them into meaningful ventures.
          </p>

        </div>

        <div className="hidden md:flex min-w-xl justify-center items-center">
          <Image
            src="/images/E-SUMMIT-05.png"
            alt="Hero Image"
            width={400}
            height={200}
            className="w-xs h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
