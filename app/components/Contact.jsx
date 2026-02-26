"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Send, User, Mail, MessageSquare, Phone, Check } from "lucide-react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbzsiw2u2-rjy3Es_RjojL4Uw3cJxPjDdORP4WoIhHpMNkRRAqNXq0Xpk_lb4cyT3_iM/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submittedContacts = JSON.parse(
      localStorage.getItem("submitted_contacts") || "[]",
    );
    const isDuplicate = submittedContacts.some(
      (contact) =>
        contact.email === formState.email ||
        contact.mobile === formState.mobile,
    );

    if (isDuplicate) {
      alert(
        "You have already sent a message with this email or mobile number.",
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData();
      formData.append("name", formState.name);
      formData.append("email", formState.email);
      formData.append("mobile", formState.mobile);
      formData.append("message", formState.message);
      formData.append("timestamp", new Date().toISOString());

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      submittedContacts.push({
        email: formState.email,
        mobile: formState.mobile,
      });
      localStorage.setItem(
        "submitted_contacts",
        JSON.stringify(submittedContacts),
      );

      setIsSuccess(true);
      setFormState({ name: "", email: "", mobile: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col items-center justify-center bg-black py-20 px-4 overflow-hidden"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 rounded-full blur-[120px] pointer-events-none"
        style={{ background: "rgba(171, 81, 227, 0.1)" }}
      />

      <div className="relative z-10 pt-10 w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-left space-y-8"
        >
          <div>
            <h2 className="font-bold text-2xl md:text-5xl tracking-tight text-white mb-4">
              Contact <span style={{ color: "#AB51E3" }}>Us</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed">
              Have questions about E-Summit &apos;26? Reach out to us directly.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Mail style={{ color: "#AB51E3" }} size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">
                  Email us at
                </p>
                <a
                  href="mailto:esummit@bitsindri.ac.in"
                  className="block hover:text-accent-400 transition-colors"
                >
                  esummit@bitsindri.ac.in
                </a>
                <a
                  href="mailto:chief.iic@bitsindri.ac.in"
                  className="block hover:text-accent-400 transition-colors"
                >
                  chief.iic@bitsindri.ac.in
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-gray-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                <Phone style={{ color: "#AB51E3" }} size={20} />
              </div>
              <div>
                <p className="text-sm text-gray-500 font-mono mb-1">Call us</p>
                <p className="">
                  <span className="text-gray-400 text-base">Utsav:</span> +91
                  7992280144
                </p>
                <p className="">
                  <span className="text-gray-400 text-base">Aastha:</span> +91
                  8789777502
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <form
            onSubmit={handleSubmit}
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#AB51E3]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60 rounded-3xl backdrop-blur-sm"
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-green-500/30"
                  >
                    <Check className="text-white" size={40} strokeWidth={3} />
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-300 text-lg">
                    We&apos;ll be in touch shortly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="space-y-5 relative z-10">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                    size={18}
                  />
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#AB51E3]/50 focus:ring-1 focus:ring-[#AB51E3]/50 transition-all"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#AB51E3]/50 focus:ring-1 focus:ring-[#AB51E3]/50 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="mobile"
                    className="text-sm font-medium text-gray-400 ml-1"
                  >
                    Mobile Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                      size={18}
                    />
                    <input
                      type="tel"
                      id="mobile"
                      required
                      value={formState.mobile}
                      onChange={(e) =>
                        setFormState({ ...formState, mobile: e.target.value })
                      }
                      className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#AB51E3]/50 focus:ring-1 focus:ring-[#AB51E3]/50 transition-all"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-400 ml-1"
                >
                  Message
                </label>
                <div className="relative">
                  <MessageSquare
                    className="absolute left-4 top-6 text-gray-500"
                    size={18}
                  />
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    className="w-full bg-black/40 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder-gray-600 focus:outline-none focus:border-[#AB51E3]/50 focus:ring-1 focus:ring-[#AB51E3]/50 transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent-800 text-white font-bold py-4 rounded-xl hover:-translate-y-1 transition-all disabled:opacity-70 cursor-pointer disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-2"
                style={{
                  boxShadow: "0 4px 24px rgba(171,81,227,0.25)",
                }}
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
