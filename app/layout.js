import { Geist, Geist_Mono, Rubik } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
  variable: "--font-rubik",
});

const kiona = localFont({
  src: [
    {
      path: "../public/fonts/Kiona-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-kiona",
});

export const metadata = {
  title: {
    default: "E-Summit '26 | BIT Sindri",
    template: "%s | E-Summit '26 BIT Sindri",
  },
  description:
    "The flagship entrepreneurial summit of BIT Sindri, Dhanbad. Fostering innovation, leadership, and startup culture in India's industrial heartland.",
  verification: {
    google: "b0uNWU4nQDY_PvnNkagxVca25Od88LjZcCj-Sbp78Qs",
  },
  keywords: [
    "E-Summit BIT Sindri",
    "BIT Sindri",
    "E-Summit",
    "BIT Sindri Entrepreneurship",
    "Startup BIT",
    "E-Cell BIT Sindri",
    "IIC BIT Sindri",
    "Jharkhand Innovation Summit",
    "Engineering Entrepreneurship",
    "Startup Jharkhand",
  ],
  authors: [{ name: "IIC BIT Sindri" }],
  creator: "IIC BIT Sindri",
  publisher: "BIT Sindri",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://esummit.bitsindri.ac.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "E-Summit '26 | BIT Sindri",
    description:
      "Join the largest entrepreneurial gathering in Jharkhand. Connect with alumni, founders, and industry leaders at BIT Sindri.",
    url: "https://esummit.bitsindri.ac.in",
    siteName: "E-Summit '26 BIT Sindri",
    images: [
      {
        url: "/og-image-bits.png",
        width: 600,
        height: 400,
        alt: "E-Summit '26 BIT Sindri - Fostering Innovation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
