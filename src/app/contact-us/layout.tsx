import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Contact Blackbuck Safari Lodge, Lodge and Hotels of Velavadar National Park",
  description:
    "Here is contact details of best Velavadar National park resort, hotels and lodge. Blackbuck Safari Lodge, Velavadar-Ayodhyapuram Road, near Narmada Canal, Rajgadh, Gujarat India. pin code - 364313. Ask them anything feel free by visiting website.",
  keywords: ["safari in velavadar"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      {children}
    </div>
  );
}
