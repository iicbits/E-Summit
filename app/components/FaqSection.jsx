"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How can I register for E-Summit?",
    answer:
      "You can register for E-Summit by visiting our official website and following the registration process. Ensure you provide accurate details to complete your registration successfully.",
  },
  {
    question: "Will E-Summit be held in person or virtually?",
    answer:
      "E-Summit 2026 is scheduled to be an in-person event held at the BIT Sindri campus, providing full networking opportunities.",
  },
  {
    question: "What kind of speakers will be at E-Summit?",
    answer:
      "We host a diverse range of speakers including unicorn founders, venture capitalists, industry leaders, and renowned educators.",
  },
  {
    question: "Who can attend E-Summit 2026?",
    answer:
      "Students, budding entrepreneurs, professionals, and anyone interested in the startup ecosystem is welcome to attend.",
  },
  {
    question: "Do I need prior startup experience to participate?",
    answer:
      "No prior experience is required. E-Summit is designed to inspire and educate individuals at all stages of their entrepreneurial journey.",
  },
];

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className=" text-white py-20 px-6 md:px-16 font-sans min-h-screen">
      {/* bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left Side: Header & CTA */}
        <div className="space-y-8">
          <div>
            <div className="inline-flex items-center space-x-2 border-b border-accent-500/50 rounded-full px-4 py-1 mb-6">
              <span className="font-kiona! text-blue-100 text-sm uppercase tracking-widest">
                Need Help?
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="text-accent-400">Questions</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Explore our most frequently addressed questions. We've compiled
              essential information for your convenience.
            </p>
          </div>

          {/* Glassmorphism CTA Box */}
          <div className="relative group max-w-sm">
            <div className="relative bg-accent-900/10 backdrop-blur-2xl border border-accent-900/50 p-8 rounded-2xl space-y-6">
              <h3 className="text-xl font-bold">Still have a Question?</h3>
              <p className="text-gray-400 text-sm">
                We're here to assist you with any additional queries.
              </p>
              <button className="px-8 py-3 font-kiona! bg-accent-300/20 backdrop-blur-lg border border-accent-800/50 text-white text-xs font-bold tracking-widest uppercase rounded-full hover:bg-accent-500 hover:text-white transition-all duration-300 cursor-pointer">
                Ask a Question
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`transition-all duration-300 rounded-xl border ${
                activeIndex === index
                  ? "bg-linear-to-r from-accent-900 to-purple-950 border-transparent shadow-xl shadow-accent-900/20"
                  : "bg-accent-900/10 backdrop-blur-2xl border-accent-900/80 hover:border-accent-500/50"
              }`}
            >
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex items-center justify-between p-5 md:p-6 text-left"
              >
                <span
                  className={`font-semibold md:text-lg ${activeIndex === index ? "text-white" : "text-gray-200"}`}
                >
                  {faq.question}
                </span>
                <span
                  className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                    activeIndex === index
                      ? "border-white rotate-180"
                      : "border-gray-500"
                  }`}
                >
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-sm md:text-base text-accent-50/80 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
