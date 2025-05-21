"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const features = [
  {
    icon: "../homepageDiv7Icon1.png",
    title: "Tailor Made 100%",
    titleColor: "text-earth-brown",
    descColor: "text-earth-brown",
    description: [
      "We design your holiday specifically to your requirements",
      "Discover your interests at your own speed and travel style",
      "Accommodations as per your preferred stay type",
      "Our safari specialists create your perfect holiday",
    ],
  },
  {
    icon: "../homepageDiv7Icon2.png",
    title: "Local Knowledge",
    titleColor: "text-earth-brown",
    descColor: "text-earth-brown",
    description: [
      "All our specialists have travelled extensively to travel regions",
      "Point of contact - a specialist will handle your trip from start to finish",
      "Your Budget and Time are important, we help you make the most of it",
    ],
  },
  {
    icon: "../homepageDiv7Icon3.png",
    title: "The Best Guides",
    titleColor: "text-earth-brown",
    descColor: "text-earth-brown",
    description: [
      "A good guide is the difference between good trips and memorable ones",
      "The best available guides are handpicked by us",
      "We provide real insight into the country - cultures, wildlife and locals",
    ],
  },
  {
    icon: "../homepageDiv7Icon4.png",
    title: "Service Pillar",
    titleColor: "text-earth-brown",
    descColor: "text-earth-brown",
    description: [
      "24/7 emergency India support while travelling with us",
    ],
    button: true,
  },
];

const WhyUs = () => {
  const [mobileView, setMobileView] = useState(false);
    useEffect(() => {
      const checkMobile = () => setMobileView(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

  return (
    <div className={`absolute left-0 w-full h-full text-black flex flex-col items-center justify-center ${mont.className}`}>
      {/* Title Section */}
      <div className={`w-screen ${mobileView?"h-auto":"h-1/3"} flex flex-col items-center justify-center my-7 gap-3`}>
        <div className={`${mobileView?"text-xl":"text-4xl"} font-bold text-earth-brown`}>Why Us</div>
        <div className={`${mobileView?"text-xs":"text-xl"} text-earth-brown`}>Plan Velvadar Hotel and Safari with</div>
        <div className={`${mobileView?"text-sm":"text-3xl"} font-bold text-earth-brown`}>Blackbuck Safari Tours</div>
      </div>

      {/* Features Section */}
      <div className={`w-6/7 ${mobileView?"h-auto gap-2":"h-2/3"} flex ${mobileView?"flex-col":""} items-center justify-center`}>
        {features.map((feature, index) => (
          <div key={index} className="w-auto px-2 h-full flex flex-col items-center justify-center">
            {/* Icon */}
            <div className={`w-full  ${mobileView?"my-4 h-[10vh]":"h-1/5"} flex items-center justify-center`}
              style={{
                backgroundImage: `url(${feature.icon})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                opacity: 0.77
              }}>
            </div>
            {/* Title */}
            <div className={`w-full h-1/5 ${mobileView?"text-sm mb-3":"text-xl"} font-bold flex items-center justify-center ${feature.titleColor}`}>{feature.title}</div>
            {/* Description */}
            <div className={`w-full h-3/5 ${mobileView?"text-xs mb-3":"text-base"} font-normal text-center flex flex-col items-center justify-start px-17 ${feature.descColor}`}>
              {feature.description.map((text, i) => (<span key={i}>{text}</span>))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
