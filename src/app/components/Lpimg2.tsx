"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Montserrat } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

// const isMobile = () => window.innerWidth < 768;

export default function Lpimg2(){
    const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);
    return(
        <div className={`h-full w-full flex flex-col items-start justify-end ${mobileView ? "" : "gap-4"}`}>
            <span className={`${mobileView ? "text-xs" : "text-2xl"} font-normal ${mont.className}`}>Experiences in Velavadar</span>
            <span className={`${mobileView ? "text-sm" : "text-6xl"} font-bold ${mont.className}`}>Experiences that</span>
            <span className={`${mobileView ? "text-sm" : "text-6xl"} font-bold ${mont.className}`}>mesmerise you</span>
            <motion.button
                className={`relative border-white ${mobileView ? "px-2 py-1 my-1 text-[10px] border-1" : "px-4 py-2 my-3 text-base border-2"} font-light rounded-full cursor-pointer ${mont.className}`}
                initial={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    backdropFilter: 'blur(0px)',
                    color: 'white'
                }}
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(7px)',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    opacity: 0.77,
                    color: 'black',
                }}
                whileTap={{
                    scale: 0.95,
                    opacity: 0.54
                }}
            >
                <motion.span 
                    className="relative z-10"
                    whileHover={{transition: { duration: 0.3 } }}
                >
                    Read More
                </motion.span>
            </motion.button>
        </div>
    );
}