import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-accent-900 to-transparent text-white py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {/* Column 1: Branding & Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="h-12 w-auto flex items-center">
                <a href="/" alt="E-Summit">
                  <Image
                    src="/images/E-SUMMIT-06.png"
                    alt="Logo"
                    width={160}
                    height={160}
                    className="w-36 md:w-auto h-auto"
                  />
                </a>
              </div>
              <div className="h-8 w-px bg-gray-400"></div>
              <div className="h-8 w-auto flex items-center">
                <a
                  href="https://iic.bitsindri.ac.in/"
                  alt="IIC BIT Sindri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/IIC logo.png"
                    alt="Logo"
                    width={160}
                    height={160}
                    className="w-24 md:w-28 h-auto"
                  />
                </a>
              </div>
            </div>

            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              E-Summit BIT Sindri is an entrepreneurial fest, organized by the
              Institution's Innovation Council cum E-Cell, BIT Sindri to inspire
              and empower future leaders.
            </p>

            <div className="pt-4">
              <h4 className="font-bold text-sm uppercase tracking-wider mb-2">
                Address
              </h4>
              <address className="not-italic text-gray-300 text-sm leading-relaxed">
                Incubation Centre, IT Building
                <br />
                BIT Sindri
                <br />
                Sindri, Dhanbad, Jharkhand 828123
              </address>
            </div>
          </div>

          {/* Column 2: Explore Links */}
          <div className="md:pl-40">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <a href="/" className="hover:text-white transition-colors">
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="/Events"
                  className="hover:text-white transition-colors"
                >
                  EVENTS
                </a>
              </li>
              <li>
                <a
                  href="/Speakers"
                  className="hover:text-white transition-colors"
                >
                  SPEAKERS
                </a>
              </li>
              <li>
                <a
                  href="/Sponsors"
                  className="hover:text-white transition-colors"
                >
                  SPONSORS
                </a>
              </li>
              <li>
                <a href="/Team" className="hover:text-white transition-colors">
                  TEAM
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="">
            <h4 className="font-bold text-sm uppercase tracking-wider mb-6">
              Contact Us
            </h4>
            <a
              href="mailto:iic@bitsindri.ac.in"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              iic@bitsindri.ac.in
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <div className="flex space-x-6 md:space-x-12">
            <a href="#" className="hover:text-white">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white">
              Refund Policy
            </a>
          </div>
          <div className="text-center md:text-right">
            © 2026 E-Summit BIT Sindri. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
