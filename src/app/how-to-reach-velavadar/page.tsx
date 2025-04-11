"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Maps from './components/Maps';
import ByAir from './components/ByAir';
import ByRail from './components/ByRail';
import ByRoad from './components/ByRoad';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const div1Info = [
  { question: "By Road", answer: <ByRoad/> },
  { question: "By Railway", answer: <ByRail/> },
  { question: "By Air", answer: <ByAir/> },
];

export default function Home() {
  const [div0Ref, div0InView] = useInView({ threshold: 0.5 })
  const [div1Ref, div1InView] = useInView({ threshold: 0.5 })
  const [div2Ref, div2InView] = useInView({ threshold: 0.5 })
  const [div3Ref, div3InView] = useInView({ threshold: 0.5 })
  const [div4Ref, div4InView] = useInView({ threshold: 0.5 })
  const [div5Ref, div5InView] = useInView({ threshold: 0.5 })
  const [div6Ref, div6InView] = useInView({ threshold: 0.5 })
  const [div7Ref, div7InView] = useInView({ threshold: 0.5 })
  const [div8Ref, div8InView] = useInView({ threshold: 0.5 })

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const ref = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: ref })
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAcc = (index: number) => {setOpenIndex(openIndex === index ? null : index);};
  
  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      <Header div0View={div0InView}/>
      <div ref={div0Ref} className={`${mobileView ? "h-[40vh]" : "h-[85vh]"} w-screen flex flex-col items-end justify-end ${mobileView ? "px-5 py-3" : "px-47 py-38"} relative overflow-hidden ${mont.className}`}>
        {/* Background Parallax Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url("${basePath}/abtHomeImg.png")`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          animate={{
            y: offsetY * 0.5,
          }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        />
        {/* Content Parallax Effect */}
        <motion.div
          className="relative flex flex-col items-end justify-end z-10 text-white"
          animate={{ y: -offsetY * 0.2 }} 
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <span className={`${mobileView ? "text-lg" : "text-4xl"} font-bold`}>
            How to reach Blackbuck National Park Velavadar
          </span>
          <div className="h-auto w-full flex items-center justify-end">
            <motion.button className={`${mobileView ? "text-xs" : "text-lg"} text-white/90 py-1 cursor-pointer ${mont.className}`} whileHover={{ scale: 1.1, color: "#b5aa9c" }} whileTap={{ scale: 0.9 }}>
              <Link href="/" passHref>Home</Link>
            </motion.button>
            <span className={`${mobileView ? "text-xs" : "text-lg"}`}>&nbsp;► How to reach Blackbuck National Park Velavadar</span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`h-auto w-screen flex flex-col items-center justify-center ${mont.className}`}>
        <div className={`h-[15vh] w-full flex items-center justify-center ${mobileView?"text-sm":"text-2xl"} text-earth-grey`}>
          Reaching&nbsp;
          <span className="text-earth-brown font-bold"> Blackbuck National Park,&nbsp;</span>
          <span className="text-earth-dark-green font-bold">Velavadar </span>
        </div>
        <div className={`h-auto w-4/5 flex ${mobileView?"flex-col":""} items-center justify-center py-17 gap-17`}>
          <div className={`min-h-[20vh] ${mobileView?"w-full":"w-2/3"} overflow-y-auto`}>
            {div1Info.map((faq, index) => (
              <div key={index} className="border-b-2 border-earth-brown p-4">
                <button 
                    className={`w-full text-left ${mobileView?"text-base":"text-lg"} bsd text-earth-brown flex justify-between items-center cursor-pointer ${mont.className}`}
                    onClick={() => toggleAcc(index)}
                >
                    {faq.question}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                    className={`overflow-hidden ${mont.className} transition-all duration-500 ease-in-out ${
                      openIndex === index ? "opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className={`h-[47vh] ${mobileView?"w-full":"w-1/3"} flex flex-col items-center justify-center border-2 border-earth-brown rounded-xl`}><Maps/></div>
        </div>
        <div className={`h-[15vh] w-full text-center items-center justify-center ${mobileView?"text-xs":"text-lg"} text-earth-brown`}>
          There are a number of other trains from Delhi, Mumbai, and other parts of the country.<br/>
          Complete information is available on&nbsp;
          <a href="https://www.indianrail.gov.in" target="_blank" rel="noopener noreferrer" className="text-earth-grey italic cursor-pointer">www.indianrail.gov.in&nbsp;</a> 
          and&nbsp;
          <a href="https://www.irctc.co.in" target="_blank" rel="noopener noreferrer" className="text-earth-grey italic cursor-pointer">www.irctc.co.in</a>
        </div>
      </div>


      <div ref={div2Ref} className={`min-h-[20vh] w-screen flex flex-col items-center justify-center bg-transparent ${mont.className}`}>
        {/* Top Fade */}
        {/* <div className="absolute top-0 left-0 w-full h-[10vh] z-[10] bg-gradient-to-b from-neutral-700/40 to-transparent"></div> */}
        <div className={`w-2/3 flex items-center ${mobileView ? "justify-center h-auto flex-col" : "justify-between h-[15vh]"}`}>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView ? "text-xs" : "text-sm"} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              backdropFilter: "blur(7px)",
              scale: 1.1,
              transition: { duration: 0.3 },
              opacity: 0.77,
              color: "black"
            }}
            whileTap={{ scale: 0.95, opacity: 0.54 }}
          >
            <motion.span className="relative z-10 text-earth-brown">
              <Link href="/contact-us" passHref>Book Now</Link>
            </motion.span>
          </motion.button>

          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView ? "text-xs" : "text-sm"} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              backdropFilter: "blur(7px)",
              scale: 1.1,
              transition: { duration: 0.3 },
              opacity: 0.77,
              color: "black"
            }}
            whileTap={{ scale: 0.95, opacity: 0.54 }}
          >
            <motion.span className="relative z-10 text-earth-brown">
              <Link href="/about-velavadar-national-park-bhavnagar" passHref>Tariff</Link>
            </motion.span>
          </motion.button>

          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView ? "text-xs" : "text-sm"} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              backdropFilter: "blur(7px)",
              scale: 1.1,
              transition: { duration: 0.3 },
              opacity: 0.77,
              color: "black"
            }}
            whileTap={{ scale: 0.95, opacity: 0.54 }}
          >
            <motion.span className="relative z-10 text-earth-brown">
              <Link href="/things-to-do-velavadar-park" passHref>Things To Do</Link>
            </motion.span>
          </motion.button>

          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView ? "text-xs" : "text-sm"} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0)", backdropFilter: "blur(0px)" }}
            whileHover={{
              backgroundColor: "rgba(255, 255, 255, 1)",
              backdropFilter: "blur(7px)",
              scale: 1.1,
              transition: { duration: 0.3 },
              opacity: 0.77,
              color: "black"
            }}
            whileTap={{ scale: 0.95, opacity: 0.54 }}
          >
            <motion.span className="relative z-10 text-earth-brown">
              <Link href="/how-to-reach-velavadar" passHref>How To Reach</Link>
            </motion.span>
          </motion.button>
        </div>

      </div>
    </>
  );
}
