"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Link from 'next/link';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const div1Imgs = [
  "/safPageDiv2Img1.png",
  "/safPageDiv2Img2.png",
  "/safPageDiv2Img3.png",
  "/safPageDiv2Img4.png",
  "/safPageDiv2Img5.png",
  "/safPageDiv2Img6.png",
  "/safPageDiv2Img7.png",
  "/safPageDiv2Img8.png",
  "/safPageDiv2Img9.png",
  "/safPageDiv2Img10.png",
  "/safPageDiv2Img11.png",
  "/safPageDiv2Img12.png",
  "/safPageDiv2Img13.png",
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

  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [offsetY, setOffsetY] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setOffsetY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header div0View={div0InView}/>
      <div ref={div0Ref} className={`${mobileView ? "h-[40vh]" : "h-[85vh]"} w-screen flex flex-col items-end justify-end ${mobileView ? "px-10 py-10" : "px-47 py-38"} relative overflow-hidden ${mont.className}`}>
        {/* Background Parallax Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/abtHomeImg.png')",
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
          <span className={`${mobileView ? "text-lg" : "text-4xl"} font-bold`}>Safari</span>
          <div className="h-auto w-full flex items-center justify-end">
            <motion.button className={`${mobileView ? "text-xs" : "text-lg"} text-white/90 py-1 cursor-pointer ${mont.className}`} whileHover={{ scale: 1.1, color: "#b5aa9c" }} whileTap={{ scale: 0.9 }}>
              <Link href="/" passHref>Home</Link>
            </motion.button>
            <span className={`${mobileView ? "text-xs" : "text-lg"}`}>&nbsp;► Safari</span>
          </div>
        </motion.div>
      </div>


      <div
        ref={div1Ref}
        className={`w-screen flex flex-col items-center justify-center ${mont.className}`}
        style={{ height: `calc(45vw + 20vh)` }} // Adjusted for 5 rows
      >
        <div className={`w-full h-[15vh] flex items-center justify-center ${mobileView?"text-xs":"text-3xl"} gap-2 text-earth-faded-green`}>
          Safari Moments in
          <span className="text-earth-dark-green font-bold"> Velavadar </span>
          <span className="text-earth-dark-soil font-bold"> Blackbuck National Park</span>
        </div>

        {mobileView ? (
          <div className="w-full overflow-x-auto whitespace-nowrap px-2 py-4">
            <div className="flex gap-2">
              {div1Imgs.slice(0, 13).map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={(div1InView || div2InView) ? { opacity: 1 } : { opacity: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut"
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="w-[60vw] h-[40vw] rounded-lg shadow-md flex-shrink-0"
                  style={{
                    backgroundImage: `url('${src}')`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          // Desktop: 5x3 Grid
          <div className={`w-full h-[45vw] px-2 grid gap-2`}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              placeItems: "center"
            }}>
            {div1Imgs.slice(0, 13).map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={(div1InView || div2InView) ? { opacity: 1 } : { opacity: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut"
                }}
                whileHover={{ scale: 1.03 }}
                className="w-full h-full rounded-lg shadow-md"
                style={{
                  backgroundImage: `url('${src}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              />
            ))}
          </div>
        )}
      </div>


      <div ref={div2Ref} className={`min-h-[35vh] w-screen flex flex-col items-center justify-center bg-transparent ${mont.className}`}>
        {/* Top Fade */}
        {/* <div className="absolute top-0 left-0 w-full h-[10vh] z-[10] bg-gradient-to-b from-neutral-700/40 to-transparent"></div> */}
        <span className={`${mobileView?"text-base px-2 text-center":"text-3xl"} font-bold text-earth-brown`}>Book accommodation and Safari in Velavadar Blackbuck National Park</span>
        <div className={` w-2/3 flex items-center ${mobileView?"justify-center h-auto flex-col":"justify-between h-[15vh]"}`}>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
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
            <motion.span className="relative z-10 text-earth-brown"><Link href="/contact-us" passHref>Book Now</Link></motion.span>
          </motion.button>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
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
            <motion.span className="relative z-10 text-earth-brown"><Link href="/about-velavadar-national-park-bhavnagar" passHref>Tariff</Link></motion.span>
          </motion.button>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
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
            <motion.span className="relative z-10 text-earth-brown"><Link href="/things-to-do-velavadar-park" passHref>Things To Do</Link></motion.span>
          </motion.button>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
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
            <motion.span className="relative z-10 text-earth-brown"><Link href="/how-to-reach-velavadar" passHref>How To Reach</Link></motion.span>
          </motion.button>
        </div>
      </div>
    </>
  );
}