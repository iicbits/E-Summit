import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 ">
      <div className="mx-auto px-6 mb-12">
        {/* Badge */}
        <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
          <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
            About Us
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          What is <span className="text-accent-400">E-Summit </span>?
        </h2>
      </div>
      <div className="flex gap-16">
        <div className="">
          Logoooooooooooooooooooooooooooooooooooooooooooooooooooo
          ooooooooooooooooooooooo
        </div>
        <div className="max-w-2xl font-kiona! text-purple-100 text-md leading-loose tracking-wide">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
          pariatur dolores autem saepe, debitis aspernatur ab voluptate
          explicabo recusandae ipsum quibusdam quidem dignissimos veritatis ea
          sint cupiditate similique deserunt suscipit at praesentium, vero
          perspiciatis dolorum mollitia. Ex eum eligendi doloribus?
        </div>
      </div>
    </section>
  );
};

export default About;
