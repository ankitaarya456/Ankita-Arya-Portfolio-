import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "../components/ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ankita Arya - Software Developer & AI Researcher | Portfolio",
  description: "Passionate M.Tech student, Software Developer, and AI Researcher specializing in machine learning, fintech solutions, and cybersecurity. Currently researching adversarial attacks on face recognition systems at DRDO.",
  keywords: [
    "Ankita Arya",
    "Software Developer",
    "AI Researcher", 
    "Machine Learning",
    "DRDO",
    "Face Recognition",
    "Fintech",
    "Java Developer",
    "Python Developer",
    "M.Tech Student",
    "Computer Applications",
    "Delhi Technical University"
  ],
  authors: [{ name: "Ankita Arya" }],
  creator: "Ankita Arya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ankitaarya.dev",
    title: "Ankita Arya - Software Developer & AI Researcher",
    description: "Passionate M.Tech student and software developer specializing in AI research, machine learning, and fintech solutions.",
    siteName: "Ankita Arya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ankita Arya - Software Developer & AI Researcher",
    description: "Passionate M.Tech student and software developer specializing in AI research, machine learning, and fintech solutions.",
    creator: "@ankitaarya",
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
