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
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 ${
        scrolled ? "pt-0" : "pt-[15px]"
      }`}
    >
      <div
        className={`relative flex items-center justify-between px-[40px] transition-all duration-500 ${
          scrolled
            ? "w-full max-w-full rounded-none bg-black/80 backdrop-blur-md border-b border-white/10 py-4"
            : "w-full max-w-[1200px] h-[72px] bg-transparent"
        }`}
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
          <div className="h-[60px] w-auto relative">
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
          className="hidden md:flex items-center justify-between w-[400px] h-[50px]"
          onMouseLeave={() => setHovered(null)}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onMouseEnter={() => setHovered(item.name)}
              className="relative px-3 py-1.5 text-[16px] font-medium transition-colors rounded-md"
            >
              {hovered === item.name && (
                <motion.span
                  layoutId="nav-hover"
                  className="absolute inset-0 bg-white/10 rounded-md"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span
                className={`relative z-10 transition-colors duration-200 ${
                  activeItem === item.name
                    ? "text-accent-100"
                    : hovered === item.name
                      ? "text-[#0099ff]"
                      : "text-white"
                }`}
              >
                {item.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-[10px]">
          <Link
            href="/"
            className="flex items-center justify-center px-[13px] py-[9px] rounded-[6px] bg-transparent text-white text-[15px] font-medium border border-white/10 hover:bg-white/10 transition-all"
          >
            Tickets
          </Link>

          <Link
            href="/#contact"
            onClick={(e) => {
              setIsMenuOpen(false);
              if (pathname === "/") {
                e.preventDefault();
                const el = document.getElementById("contact");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "#contact");
                }
              }
            }}
            className="flex items-center justify-center px-[13px] py-[9px] rounded-[6px] bg-[#814ac8] text-white text-[15px] font-medium border border-white/10 hover:bg-[#814ac8]/90 transition-all cursor-pointer"
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
              className="absolute top-0 left-0 w-full bg-black flex flex-col items-center justify-center gap-8 md:hidden overflow-hidden"
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
                      className="text-3xl font-bold text-white/70 hover:text-white transition-colors"
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
                  href="#contact"
                  onClick={(e) => {
                    setIsMenuOpen(false);
                    if (pathname === "/") {
                      e.preventDefault();
                      const el = document.getElementById("contact");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", "#contact");
                      }
                    }
                  }}
                  className="w-full px-5 py-4 rounded-xl bg-[#814ac8] text-white font-bold text-lg text-center shadow-lg cursor-pointer"
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
