"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("none");

  const navItems = [
    { name: "Events", href: "/Events" },
    { name: "Speakers", href: "/" },
    { name: "Sponsors", href: "/" },
    { name: "Workshops", href: "/" },
    { name: "Team", href: "/Team" },
  ];

  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const currentItem = navItems.find((item) => pathname.startsWith(item.href));
    if (currentItem) {
      setActiveItem(currentItem.name);
    } else {
      setActiveItem("");
    }
  }, [pathname]);

  return (
    <header className="absolute w-full font-kiona! z-50 md:py-4 ">
      <div className="pr-8 md:px-16 flex justify-between items-center relative">
        <div className="flex items-center justify-center py-4">
          <Image
            src="/images/E-SUMMIT-06.png"
            alt="Logo"
            width={180}
            height={180}
            className="w-36 md:w-52 h-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`transition-all duration-300 ${
                activeItem === item.name
                  ? "text-accent-100"
                  : "hover:text-accent-100"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          {/* Desktop Contact Button */}
          <Link
            href="/"
            className={`hidden md:block px-4 py-2 border-2 border-accent-500 rounded-xl text-sm transition-colors duration-300 hover:bg-accent-100/20`}
          >
            Tickets
          </Link>
          <Link
            href="/"
            className={`hidden md:block px-4 py-2 border-2 border-accent-500 rounded-xl text-sm transition-colors duration-300 text-white -bg-conic-240 bg-accent-500 hover:bg-accent-500`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-foreground transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute z-50 backdrop-blur-2xl top-full left-0 right-0 transition-all duration-300 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col justify-center items-center py-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`px-8 py-3 text-accent-100 transition-all duration-300 ${
                  activeItem === item.name
                    ? "text-accent-100"
                    : "hover:text-accent-200 hover:bg-accent-800"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 mt-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 border border-accent-700 rounded-xl text-sm text-center transition-colors duration-300 hover:bg-accent-100/20`}
              >
                Tickets
              </Link>
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`px-4 py-2 border border-accent-700 rounded-xl text-sm text-center transition-colors duration-300 text-white bg-accent-600 hover:bg-accent-500`}
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
