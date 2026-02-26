"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  const navItems = [
    { name: "Events", href: "/Events" },
    { name: "Speakers", href: "/Speakers" },
    { name: "Sponsors", href: "/Sponsors" },
    { name: "Team", href: "/Team" },
  ];

  const mobileNavItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/Events" },
    { name: "Speakers", href: "/Speakers" },
    { name: "Sponsors", href: "/Sponsors" },
    { name: "Team", href: "/Team" },
  ];

  const pathname = usePathname();

  useEffect(() => {
    const currentItem = navItems.find((item) => pathname.startsWith(item.href));
    if (currentItem) {
      setActiveItem(currentItem.name);
    } else {
      setActiveItem("");
    }
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`absolute md:fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 font-kiona!`}
    >
      <div
        className={`relative w-full max-w-full flex items-center justify-between px-2 md:px-10 transition-all duration-500 md:backdrop-blur-2xl py-4`}
      >
        <Link
          href="/"
          onClick={(e) => {
            if (pathname === "/") {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "/");
            }
          }}
          className="flex items-center z-50 relative"
        >
          <div className="h-12 md:h-15 w-auto relative">
            <Image
              src="/images/E-SUMMIT-06.webp"
              alt="Logo"
              width={180}
              height={60}
              className="h-full w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div
          className="hidden md:flex items-center justify-between w-100 h-12.5"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHovered(item.name)}
              className="relative px-4 py-2 text-[16px] transition-colors rounded-md"
            >
              {hovered === item.name && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-purple-500/10 rounded-3xl"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative px-2 z-10 flex justify-center items-center transition-colors duration-200 ${
                  activeItem === item.name
                    ? "text-accent-100"
                    : hovered === item.name
                      ? "text-accent-300"
                      : "text-white"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/"
            className="flex items-center justify-center px-4 py-2 rounded-3xl bg-transparent text-white text-[15px] font-medium border border-purple-400/30 hover:bg-purple-500/20 transition-all"
          >
            Tickets
          </Link>

          <Link
            href="/Contact"
            className="flex items-center justify-center px-4 py-2 rounded-3xl bg-accent-800 text-white text-[15px] border border-white/10 hover:bg-accent-800/60 transition-all cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile View */}
        <button
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-0 left-0 w-full backdrop-blur-2xl flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
            >
              <div className="flex flex-col items-center gap-6">
                {mobileNavItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  >
                    <Link
                      href={item.href}
                      className="text-xl font-bold text-white/70 hover:text-white transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="flex flex-col gap-4 mt-8 w-64"
              >
                <a
                  href="/"
                  className="flex items-center justify-center px-4 py-2 rounded-3xl  text-white text-[15px] border border-accent-400/70 hover:bg-accent-800/60 transition-all cursor-pointer"
                >
                  Tickets
                </a>
                <a
                  href="/Contact"
                  className="flex items-center justify-center px-4 py-2 rounded-3xl bg-accent-800 text-white text-[15px] border border-white/10 hover:bg-accent-800/60 transition-all cursor-pointer"
                >
                  Contact Us
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
