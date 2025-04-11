"use client";
import Image from 'next/image'
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Dispatch, SetStateAction } from "react";
import Link from 'next/link';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

type HeaderProps = {div0View: boolean;};

const menuItems = [
  { title: "Home", titleLink: "/", subItems: [] },
  { 
      title: "Accommodation", 
      titleLink: "/accomodation-in-velavadar", 
      subItems: [
          { name: "The BlackBuck Lodge", subItemLink: "/blackbuck-lodge-velavadar" },
          { name: "BlackBuck Safari Lodge", subItemLink: "/blackbuck-safari-lodge-velavadar" }
      ] 
  },
  { title: "Safari", titleLink: "/safari-velavadar", subItems: [] },
  { title: "How To Reach", titleLink: "/how-to-reach-velavadar", subItems: [] },
  { 
      title: "About", 
      titleLink: "/about-velavadar-national-park-bhavnagar", 
      subItems: [
          { name: "Sustainable Tourism", subItemLink: "/velavadar-tourism" },
          { name: "Wildlife", subItemLink: "/wildlife-velavadar" },
          { name: "Things To Do", subItemLink: "/things-to-do-velavadar-park" }
      ] 
  },
  { title: "Contact Us", titleLink: "/contact-us", subItems: [] }
];


interface MenuButtonProps {
    div0View: boolean;
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
  }
const AnimatedMenuButton = ({ div0View, setIsOpen, isOpen }: MenuButtonProps) => {
  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`z-50 py-3 px-5 ${mobileView?"h-4/5 w-1/3":"h-auto w-auto"} ${div0View?"bg-white/81":"bg-black/81"} shadow-lg rounded-full flex items-center justify-center`}
    >
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={{
          closed: { rotate: 0 },
          open: { rotate: 180 },
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20 }}
        className={`relative w-6 h-6 flex flex-col items-center justify-center gap-1`}
      >
        {/* Top Line */}
        <motion.div
          className={`${mobileView?(div0View?"w-6":"w-5"):"w-6"} h-0.5 ${div0View?"bg-black":"bg-white"} rounded-full`}
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: 45, y: 8 },
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Middle Line (Hidden when open) */}
        <motion.div
          className={`${mobileView?(div0View?"w-6":"w-5"):"w-6"} h-0.5 ${div0View?"bg-black":"bg-white"} rounded-full`}
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        
        {/* Bottom Line */}
        <motion.div
          className={`${mobileView?(div0View?"w-6":"w-5"):"w-6"} h-0.5 ${div0View?"bg-black":"bg-white"} rounded-full`}
          variants={{
            closed: { rotate: 0, y: 0 },
            open: { rotate: -45, y: -8 },
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </button>
  );
};

export default function Header({div0View}:HeaderProps){
    const [isOpen, setIsOpen] = useState(false);
    const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

    return(
      <>
  {/* Header Bar */}
  <div className={`${mobileView? (div0View ? "h-[7vh] bg-white/30" : "h-[5vh] bg-black/30" ): (div0View ? "h-[9vh] bg-white/30" : "h-[7vh] bg-black/30")} w-2/3 transition-all duration-300 fixed top-4 left-1/2 -translate-x-1/2 z-[100] backdrop-blur-md flex items-center justify-center rounded-full shadow-lg`}>
    <div className="h-full w-4/5 flex items-center justify-center">
      
      {/* Logo Button */}
      <div className="h-full w-2/5 flex items-center justify-start px-4">
      {mobileView ? (
          <motion.button
          className={`w-full h-4/5 bg-contain bg-center text-black text-3xl font-extrabold cursor-pointer relative overflow-hidden flex items-center justify-center`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.85, opacity: 0.8 }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
        >
          <Image
            src={div0View ? "./headerLogoInitialWhite.png" : "./headerLogoInitialBlack.png"}
            alt="Safari Logo"
            height={div0View ? 110 : 38}
            width={div0View ? 110 : 38}
            className="object-contain opacity-77 transition-all duration-500"
          />
        </motion.button>
      ) : (
        <motion.button
          className={`w-1/2 h-3/5 bg-contain bg-center text-black text-3xl font-extrabold cursor-pointer relative overflow-hidden`}
          style={{ backgroundImage: `url('${div0View ? "./headerLogoInitialWhite.png" : "./headerLogoInitialBlack.png"}')`, backgroundRepeat: "no-repeat" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.7, opacity: 0.77 }}
          transition={{ type: "spring", stiffness: 254, damping: 17 }}
        />
      )}

      </div>

      {/* Toggle Button */}
      <div className={`relative h-full w-4/5 flex items-center justify-end px-4 gap-4`}>
        <AnimatedMenuButton isOpen={isOpen} setIsOpen={setIsOpen} div0View={div0View} />
      </div>
    </div>
  </div>

  {/* Slide-in Menu */}
  {isOpen && (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`fixed top-0 right-0 h-screen ${mobileView?"w-2/3":"w-1/4"} header-menu-bg-gradient backdrop-blur-xl shadow-xl flex flex-col items-start justify-center gap-4 px-6 py-10 z-[90]`}
    >
      {menuItems.map((item, index) => (
        <div key={index} className="flex flex-col items-start justify-center">
          
          {/* Main Menu Item */}
          <motion.button
            className={`${mobileView?"text-sm":"text-lg"} font-bold text-white/90 py-1 px-4 cursor-pointer ${mont.className}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(false)}
          >
            <Link href={item.titleLink} passHref>{item.title}</Link>
          </motion.button>

          {/* Subitems */}
          {item.subItems.length > 0 && (
            <div className="flex flex-col items-start justify-center gap-1">
              {item.subItems.map((subItem, subIndex) => (
                <motion.button
                  key={subIndex}
                  className={`${mobileView?"text-xs":"text-base"} font-bold text-white/70 cursor-pointer px-4`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                >
                  <Link href={subItem.subItemLink} passHref>{subItem.name}</Link>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      ))}
    </motion.div>
  )}
</>

    );
}
