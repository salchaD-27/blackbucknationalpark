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

const div3Info = [
  {question: "Indian Wolf - Wildlife of Velavadar", answer:"A subspecies of grey wolf found in Southwest Asia to the Indian subcontinent, the Indian Wolf is sighted in the Blackbuck National Park, Velavadar. It lacks the winter fur coat of the Himalayan wolf and is of intermediate size compared to the Arabian wolf and Himalayan wolf. Indian wolves travel in smaller packs and are reputed for their cunning nature.",},
  {question: "Blackbuck - Wildlife of Velavadar", answer:"An Indian antelope and a native to Nepal and India, Blackbucks are found in large numbers at Velavadar National Park. Their preferred habitat is grasslands with very little forest cover. A male Blackbuck weighs 20-57 kg, while a female weighs 20-33 kg on average.",},
  {question: "Indian Fox / Bengal Fox - Wildlife of Velavadar", answer:"Endemic to the Indian subcontinent, the Indian Fox is commonly known as the Bengal Fox.",},
  {question: "Lesser Florican - Wildlife of Velavadar", answer:"The smallest member of the bustard family, locally known as the Kharmore or Likh, the Lesser Florican is endemic to the Indian subcontinent, especially in grasslands.",},
  {question: "Montagu’s Harrier - Wildlife of Velavadar", answer:"A member of the harrier family, Montagu’s Harrier is a migratory bird of prey named after George Montagu, a British naturalist.",},
];

const div2Imgs = [
  "./accPageDiv2Img1.png",
  "./accPageDiv2Img2.png",
  "./accPageDiv2Img3.png",
  "./accPageDiv2Img4.png",
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
      <div ref={div0Ref} className={`${mobileView?"h-[500px]":"h-[calc(100vh*7/8)]"} w-screen flex flex-col items-end justify-end ${mobileView?"px-10 py-10":"px-47 py-38"}  relative overflow-hidden ${mont.className}`}>
              {/* Background Parallax Effect */}
              <motion.div
              className="absolute inset-0 w-full h-full"
              animate={{ y: offsetY * 0.5 }}
              transition={{ ease: "easeOut", duration: 0.2 }}
            >
              <Image
                src="/safari-velavadar-national-park-10.jpg"
                alt="Velavadar National Park"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
        {/* Content Parallax Effect */}
        <motion.div
          className="relative flex flex-col items-end justify-end z-10 text-white"
          animate={{ y: -offsetY * 0.2 }} 
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <span className={`${mobileView ? "text-lg" : "text-4xl"} font-bold`}>
            Wildlife
          </span>
          <div className="h-auto w-full flex items-center justify-end">
            <motion.button
              className={`${mobileView ? "text-xs" : "text-lg"} text-white/90 py-1 cursor-pointer ${mont.className}`}
              whileHover={{ scale: 1.1, color: "#b5aa9c" }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/" passHref>Home</Link>
            </motion.button>
            <span className={`${mobileView ? "text-xs" : "text-lg"}`}>
              &nbsp;► Wildlife
            </span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`h-auto  w-screen flex flex-col items-center justify-center ${mont.className}`}>
        <div className={`h-[150px] w-full flex items-center justify-center ${mobileView ? "text-sm" : "text-xl"} font-semibold text-earth-brown`}>
          Wildlife in Blackbuck National Park, Velavadar
        </div>

        {mobileView ? (
          <>
            <div className="h-[500px] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
              <Image
                src="/Wildlife-of-velavadar-1.jpg"
                alt="Wildlife of Velavadar Blackbuck National Park"
                fill
                sizes="100vw"
                className="object-cover z-0"
              />
              <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
                <span className='text-base font-bold text-white mb-2'>Wildlife of Velavadar near Bhavnagar</span>
                <span className='text-xs text-white'>
                  Blackbuck National Park at Velavadar near Bhavnagar district of Gujarat in India is a unique grassland ecosystem, primarily declared a national park to protect blackbucks. Every year, birds from Siberia, Europe, and Central Asia migrate to Velavadar to escape harsh climates. The park’s wetland area draws flamingos, pelicans, waders, ducks, storks, coots, sarus cranes, and painted storks. It’s a haven for birders, with sightings of common cranes, demoiselle cranes, and raptors like greater spotted eagles and steppe eagles.
                </span>
              </div>
            </div>

            <div className="h-[500px] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
              <Image
                src="/velavadar-wildlife.jpg"
                alt="Wildlife of Velavadar Blackbuck National Park"
                fill
                sizes="100vw"
                className="object-cover z-0"
              />
              <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-left bg-black/27">
                <span className='text-base font-bold text-white mb-2'>Why is Blackbuck National Park Velavadar a preferred wildlife destination?</span>
                <span className='text-xs text-white'>
                  - The most healthy population of endangered Indian wolves<br/>
                  - 140 species of birds<br/>
                  - 14 species of mammals<br/>
                  - 95 species of flowering plants<br/>
                  - Reptiles including cobras, vipers, and other snakes<br/>
                  - Blackbucks, nilgai, wild cats, jackals, Indian foxes, and rodents<br/>
                  - World’s best roosting sites for thousands of harriers<br/>
                  - Lesser floricans are also seen here
                </span>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-[300px] w-4/5 flex items-center justify-center">
              <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
                <span className='text-lg font-bold text-earth-brown my-4'>Wildlife of Velavadar near Bhavnagar</span>
                <span className='text-base text-earth-brown'>
                  Blackbuck National Park at Velavadar near Bhavnagar district of Gujarat in India is a unique grassland ecosystem, primarily declared a national park to protect blackbucks. Every year, birds from Siberia, Europe, and Central Asia migrate to Velavadar to escape harsh climates. The park’s wetland area draws flamingos, pelicans, waders, ducks, storks, coots, sarus cranes, and painted storks. It’s a haven for birders, with sightings of common cranes, demoiselle cranes, and raptors like greater spotted eagles and steppe eagles.
                </span>
              </div>
              <div className="h-full w-1/3 flex items-center justify-center">
                <motion.div className="relative w-2/3 h-4/5 p-4">
                  <Image
                    src="/Wildlife-of-velavadar-1.jpg"
                    alt="Wildlife of Velavadar Blackbuck National Park"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>

            <div className="h-[300px] w-4/5 flex items-center justify-center">
              <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
                <span className='text-lg font-bold text-earth-brown my-4'>Why is Blackbuck National Park Velavadar a preferred wildlife destination?</span>
                <span className='text-base text-earth-brown'>
                  The most healthy population of endangered Indian wolves.<br/>
                  140 species of birds<br/>
                  14 species of mammals<br/>
                  95 species of flowering plants<br/>
                  Reptiles including cobras, vipers, rat snakes, and more<br/>
                  Blackbucks, nilgai, wolves, wild cats, jackals, Indian foxes, and rodents<br/>
                  World’s largest and best roosting sites for thousands of harriers<br/>
                  Lesser floricans are also seen here
                </span>
              </div>
              <div className="h-full w-1/3 flex items-center justify-center">
                <motion.div className="relative w-2/3 h-4/5 p-4">
                  <Image
                    src="/velavadar-wildlife.jpg"
                    alt="Wildlife of Velavadar Blackbuck National Park"
                    fill
                    sizes="100vw"
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </>
        )}

      </div>

      <div ref={div2Ref} className={`min-h-[20vh] w-screen flex flex-col items-center justify-center bg-transparent ${mont.className}`}>
        <div className={`w-2/3 flex items-center ${mobileView ? "justify-center h-auto flex-col" : "justify-between h-[15vh]"}`}>
          
          {[
            { href: "/contact-us", label: "Book Now" },
            { href: "/about-velavadar-national-park-bhavnagar", label: "Tariff" },
            { href: "/things-to-do-velavadar-park", label: "Things To Do" },
            { href: "/how-to-reach-velavadar", label: "How To Reach" }
          ].map(({ href, label }) => (
            <motion.button
            key={href}
            className={`relative border-2 border-earth-brown ${mobileView ? "text-xs" : "text-sm"} px-3 py-2 my-3 rounded-full font-light cursor-pointer`}
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
                <Link href={href} passHref>{label}</Link>
            </motion.span>
        </motion.button>
          ))}
          
        </div>
      </div>


      <div ref={div3Ref} className='min-h-[400px] w-screen flex items-center justify-center relative'>
        <div className={`h-full ${mobileView?"w-3/4":"w-2/3"} flex flex-col items-start justify-start gap-7 p-4`}>
          <span className={`text-earth-brown ${mobileView ? "text-lg" : "text-2xl"} font-extrabold ${mont.className}`}>
            About Star Wildlife of Blackbuck National Park Velavadar
          </span>
          <div className="h-3/4 w-full overflow-y-auto">
            {div3Info.map((faq, index) => (
              <div key={index} className="border-b-2 border-earth-brown p-4">
                <button 
                  className={`w-full text-left ${mobileView ? "text-sm" : "text-lg"} font-semibold text-earth-brown flex justify-between items-center cursor-pointer ${mont.className}`}
                  onClick={() => toggleAcc(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                  className={`overflow-hidden ${mont.className} text-earth-brown ${mobileView ? "text-xs" : "text-base"} transition-all duration-500 ease-in-out ${
                    openIndex === index ? "opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
          <div className="h-[5vh] w-full"></div>
        </div>
      </div>


    </>
  );
}
