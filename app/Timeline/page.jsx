"use client";

import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { scheduleData } from "./data";

// ─── Hero Section ────────────────────────────────────────────────────────────

const HeroSection = () => (
  <div className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden">
    {/* Background image with scale-in animation */}
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="absolute inset-0 z-0"
    >
      <img
        src="https://mitendicotthouse.org/wp-content/uploads/2018/12/calendar-meeting.jpg"
        alt="Event Timeline Background"
        className="w-full h-full object-cover opacity-60"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-accent-900/40 via-background/60 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,var(--color-background)_100%)]" />
    </motion.div>

    <GlowingTitle />

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
    >
      <span className="text-[10px] uppercase tracking-widest">Scroll</span>
      <div className="w-px h-12 bg-gradient-to-b from-accent-500 to-transparent" />
    </motion.div>
  </div>
);

// ─── Glowing Title ────────────────────────────────────────────────────────────

const GlowingTitle = () => (
  <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="inline-block relative"
    >
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-kiona font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(139,47,201,0.3)]">
        Timelines
      </h1>
      <div className="h-1 w-24 mx-auto mt-6 bg-accent-500 rounded-full shadow-[0_0_15px_var(--color-accent-500)]" />
    </motion.div>

    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.8 }}
      className="mt-8 text-accent-100/80 font-sans text-lg md:text-xl tracking-wide max-w-2xl mx-auto leading-relaxed"
    >
      Explore the future of technology and innovation through our curated
      timeline of events.
    </motion.p>
  </div>
);

// ─── Event Card ───────────────────────────────────────────────────────────────

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="relative flex mb-6 pl-6 md:pl-10 group"
  >
    {/* Vertical connector line */}
    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-accent-800/30" />

    {/* Timeline node dot */}
    <div className="absolute left-0 top-6 w-[15px] h-[15px] rounded-full border-2 border-accent-500 bg-background z-10 group-hover:bg-accent-500 group-hover:shadow-[0_0_15px_var(--color-accent-500)] transition-all duration-300">
      <div className="absolute inset-0.5 rounded-full bg-accent-400 opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>

    {/* Card */}
    <div className="w-full">
      <div className="relative overflow-hidden rounded-xl bg-white/[0.03] border border-white/10 hover:border-accent-500/50 hover:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm">
        {/* Hover glow */}
        <div className="absolute -right-10 -top-10 w-32 h-32 bg-accent-500/20 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        <div className="relative p-5 md:p-6 flex flex-col md:flex-row gap-5 md:items-center justify-between">
          <div className="flex-1 space-y-3">
            <div className="flex flex-wrap items-center gap-3">
              {/* Time badge */}
              <span className="inline-flex items-center gap-1.5 text-accent-300 font-mono text-xs font-medium bg-accent-500/10 px-2.5 py-1 rounded-md border border-accent-500/20">
                <Clock className="w-3.5 h-3.5" />
                {event.time}
              </span>
              {/* Keynote badge */}
              {event.tags?.includes("Keynote") && (
                <span className="inline-flex items-center gap-1 text-white text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-accent-600 to-accent-500 px-2.5 py-1 rounded-md shadow-sm">
                  Keynote
                </span>
              )}
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-white font-sans leading-snug group-hover:text-accent-100 transition-colors">
              {event.title}
            </h3>
          </div>

          {/* Location badge */}
          <div className="flex items-center gap-2 text-white/50 text-sm font-medium shrink-0 bg-black/20 px-3 py-1.5 rounded-lg border border-white/5 self-start md:self-center">
            <MapPin className="w-4 h-4 text-accent-500" />
            <span>{event.location}</span>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
);

// ─── Day Tabs ─────────────────────────────────────────────────────────────────

const DayTabs = ({ activeDay, setActiveDay }) => (
  <div className="sticky top-4 z-40 flex justify-center gap-2 md:gap-4 mb-12 px-4 py-4 backdrop-blur-md bg-background/80 border-y border-white/5 w-full">
    {scheduleData.map((day, index) => {
      const isActive = activeDay === index;
      return (
        <button
          key={day.day}
          onClick={() => setActiveDay(index)}
          className={`relative px-5 py-2.5 md:px-8 md:py-3 rounded-xl font-sans text-sm font-medium transition-all duration-300 overflow-hidden group ${
            isActive
              ? "text-white shadow-[0_0_20px_rgba(139,47,201,0.3)]"
              : "text-white/60 hover:text-white hover:bg-white/5"
          }`}
        >
          {isActive && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-accent-600"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10 flex items-center gap-2">
            <span className="font-bold tracking-wide">{day.day}</span>
            <span
              className={`text-xs hidden md:inline-block ${
                isActive ? "text-white/80" : "text-white/40"
              }`}
            >
              • {day.date}
            </span>
          </span>
        </button>
      );
    })}
  </div>
);

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function TimelinePage() {
  const [activeDay, setActiveDay] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main
      ref={containerRef}
      className="relative min-h-screen w-full bg-background text-foreground selection:bg-accent-500 selection:text-white"
    >
      <HeroSection />

      <div className="relative z-10 w-full pb-32">
        <DayTabs activeDay={activeDay} setActiveDay={setActiveDay} />

        <div className="w-full md:w-[90%] max-w-7xl mx-auto px-4 sm:px-6 md:px-10 min-h-[500px] relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeDay}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Glowing scroll progress line */}
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-accent-900/30 z-0 overflow-hidden"
              >
                <motion.div
                  style={{ scaleY, transformOrigin: "top" }}
                  className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-accent-400 via-accent-200 to-accent-500 shadow-[0_0_20px_var(--color-accent-400)]"
                />
              </motion.div>

              <div className="space-y-2">
                {scheduleData[activeDay].events.map((event, eventIndex) => (
                  <div key={event.id}>
                    <EventCard event={event} index={eventIndex} />
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
