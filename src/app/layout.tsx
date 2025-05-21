import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import FixedFeatures from "./components/FixedFeatures";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Hotels and Resorts in Blackbuck National Park Velavadar",
  description:
    "Preferred Hotels and Resorts in Blackbuck National Park Velavadar near Bhavnagar. Best lodge accommodation to stay in Velavadar near Bhavnagar.",
  keywords: ["resorts in Blackbuck National Park"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* <Header/> */}
        <FixedFeatures/>
        {children}
        <Footer/>
        
        {/* Zoho SalesIQ Scripts */}
        <Script
          id="zoho-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$zoho = window.$zoho || {};
              $zoho.salesiq = $zoho.salesiq || { ready: function () {} };
            `,
          }}
        />
        <Script
          id="zoho-salesiq"
          src="https://salesiq.zohopublic.in/widget?wc=siq89b7b20a4f76ed9657c229769746f6cf0e64fbd3da71324984893d66dc0a68bd7cc404570cb0d49765f204d3e5939b4c"
          strategy="afterInteractive"
        />

      </body>
    </html>
  );
}
