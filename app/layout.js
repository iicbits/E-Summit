import { Geist, Geist_Mono, Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik", // This will create the CSS variable
});

const kiona = localFont({
  src: [
    {
      path: "../public/fonts/Kiona-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-kiona", // CSS variable for usage
});

export const metadata = {
  title: "E-Summit 26 | BIT Sindri",
  description: "Entrepreneurship Summit 2026, BIT Sindri",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kiona.variable} ${rubik.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
