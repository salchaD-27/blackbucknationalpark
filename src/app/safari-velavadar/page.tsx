"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Link from 'next/link';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const div1Imgs = [
  {src: "/hotels-resorts-tours.jpg", alt: 'Velavadar National Park'},
  {src: "/blackbuck-1.jpg", alt: 'Hotels and Resorts in Blackbuck National Park'},
  {src: "/safari-velavadar-national-park-3.jpg", alt: 'Velavadar National Park'},
  {src: "/responsible-tourism-velavadar.jpg", alt: 'Velavadar National Park'},
  {src: "/blackbuck-national-park-2.jpg", alt: 'Activities in Velavadar National Park'},
  {src: "/lodges-in-Velavadar-Bhavnagar-5.jpg", alt: 'Accommodation in Velavadar National Park'},
  {src: "/Experiences-in-Velavadar-2-1.jpg", alt: 'Velavadar National Park'},
  {src: "/safari-velavadar-national-park-11.jpg", alt: 'Velavadar National Park'},
  {src: "/safari-velavadar-national-park-7.jpg", alt: 'Experiences in Velavadar Blackbuck National Park'},
  {src: "/velavadar-national-park-3.jpg", alt: 'Lodges in Velavadar Blackbuck National Park'},
  {src: "/safari-velavadar-national-park-8.jpg", alt: 'Velavadar National Park'},
  {src: "/velavadar-national-park-9.jpg", alt: 'Velavadar National Park'},
  {src: "/lodges-in-Velavadar-Bhavnagar-1-1.jpg", alt: ''},
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
      <div
        ref={div0Ref}
        className={`${
          mobileView ? "h-[500px]" : "h-[calc(100vh*7/8)]"
        } w-screen flex flex-col items-end justify-end ${
          mobileView ? "px-10 py-10" : "px-47 py-38"
        } relative overflow-hidden ${mont.className}`}
      >
        {/* Background Parallax Image */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ y: offsetY * 0.5 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <Image
            src="/responsible-tourism-velavadar.jpg"
            alt="Velavadar National Park"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Foreground Content Parallax */}
        <motion.div
          className="relative flex flex-col items-end justify-end z-10 text-white"
          animate={{ y: -offsetY * 0.2 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <span className={`${mobileView ? "text-lg" : "text-4xl"} font-bold`}>Safari</span>
          <div className="h-auto w-full flex items-center justify-end">
            <motion.button
              className={`${
                mobileView ? "text-xs" : "text-lg"
              } text-white/90 py-1 cursor-pointer ${mont.className}`}
              whileHover={{ scale: 1.1, color: "#b5aa9c" }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/" passHref>Home</Link>
            </motion.button>
            <span className={`${mobileView ? "text-xs" : "text-lg"}`}>&nbsp;► Safari</span>
          </div>
        </motion.div>
      </div>



      <div ref={div1Ref} className={`w-screen h-auto flex flex-col items-center justify-center ${mont.className}`}>
        <div className={`w-full ${mobileView?'h-[100px]':'h-[150px]'} flex items-center justify-center ${mobileView?"text-xs":"text-xl"} font-semibold gap-2 text-earth-brown`}>
          Safari Moments inVelavadar Blackbuck National Park
        </div>
        {mobileView ? (
          <div className="w-full overflow-x-auto whitespace-nowrap px-2 py-4">
            <div className="flex gap-2">
              {div1Imgs.slice(0, 13).map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={(div1InView || div2InView) ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                    ease: "easeOut",
                  }}
                  whileHover={{ scale: 1.03 }}
                  className="relative w-[60vw] h-[40vw] rounded-lg shadow-md flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    sizes="60vw"
                    priority={index < 2} // optional LCP optimization
                  />
                </motion.div>
              ))}
            </div>
            <div className='w-full h-[100px]'></div>
          </div>
        ) : (
          <div
            className="w-full h-[700px] px-2 grid gap-2"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(5, 1fr)",
              gridTemplateRows: "repeat(3, 1fr)",
              placeItems: "center",
            }}
          >
            {div1Imgs.slice(0, 15).map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={(div1InView || div2InView) ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.03 }}
                className="relative w-full h-full rounded-lg overflow-hidden shadow-md"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 20vw"
                  priority={index < 5} // prioritize top row
                />
              </motion.div>
            ))}
          </div>
        )}
      </div>


      <div ref={div2Ref} className={`min-h-[300px] w-screen flex flex-col items-center justify-center bg-transparent ${mont.className}`}>
        <span className={`${mobileView?"text-base px-2 text-center":"text-2xl"} font-bold text-earth-brown`}>Book accommodation and Safari in Velavadar Blackbuck National Park</span>
        <div className={` w-2/3 flex items-center ${mobileView?"justify-center h-auto flex-col":"justify-between h-[15vh]"}`}>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                backdropFilter: 'blur(0px)',
                color: 'black'
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
                <Link href="/contact-us" passHref>Book Now</Link>
            </motion.span>
        </motion.button>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                backdropFilter: 'blur(0px)',
                color: 'black'
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
                <Link href="/about-velavadar-national-park-bhavnagar" passHref>Tariff</Link>
            </motion.span>
        </motion.button>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                backdropFilter: 'blur(0px)',
                color: 'black'
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
              <Link href="/things-to-do-velavadar-park" passHref>Things To Do</Link>
            </motion.span>
        </motion.button>
          <motion.button
            className={`relative border-2 border-earth-brown ${mobileView?"text-xs":" text-sm "} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
            initial={{
                backgroundColor: 'rgba(0, 0, 0, 0)',
                backdropFilter: 'blur(0px)',
                color: 'black'
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
                <Link href="/how-to-reach-velavadar" passHref>How To Reach</Link>
            </motion.span>
        </motion.button>
        </div>
      </div>
    </>
  );
}
