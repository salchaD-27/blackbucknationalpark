"use client"
import Link from "next/link";
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Lpimg1 from './components/Lpimg1';
import Lpimg2 from './components/Lpimg2';
import Lpimg3 from './components/Lpimg3';
import WhyUs from './components/WhyUs';
import Header from './components/Header';
import Maps1 from './components/Maps1';
import Maps2 from './components/Maps2';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

// const isMobile = () => window.innerWidth < 768;

const bgConfig=[
  {divId: 0, bgSrc: '', gradClass: 'bg-white'},
  {divId: 1, bgSrc: '', gradClass: 'home-page-bg-div1'},
  {divId: 2, bgSrc: '', gradClass: 'home-page-bg-div2'},
  {divId: 3, bgSrc: '', gradClass: 'home-page-bg-div3'},
  {divId: 4, bgSrc: '', gradClass: 'home-page-bg-div4'},
  {divId: 5, bgSrc: '', gradClass: 'home-page-bg-div5'},
  {divId: 6, bgSrc: '', gradClass: 'home-page-bg-div6'},
  {divId: 7, bgSrc: '', gradClass: 'home-page-bg-div7'},
  {divId: 8, bgSrc: '', gradClass: 'home-page-bg-div8'},
  {divId: 9, bgSrc: '', gradClass: 'home-page-bg-div9'},
]

const images = [
  { src: "/lpimg1.png", bgClass: "lp-img-1", info: <Lpimg1/>, link: "/"},
  { src: "/lpimg2.png", bgClass: "lp-img-2", info: <Lpimg2/>, link: "/things-to-do-velavadar-park"},
  { src: "/lpimg3.png", bgClass: "lp-img-3", info: <Lpimg3/>, link: "/about-velavadar-national-park-bhavnagar"}
];

const galleryImages = [
  { id: 1, src: '/homePageDiv3img1.png', alt: 'div4img' },
  { id: 2, src: '/homePageDiv3img2.png', alt: 'div4img' },
  { id: 3, src: '/homePageDiv3img3.png', alt: 'div4img' },
  { id: 4, src: '/homePageDiv3img4.png', alt: 'div4img' },
  { id: 5, src: '/homePageDiv3img5.png', alt: 'div4img' },
  { id: 6, src: '/homePageDiv3img6.png', alt: 'div4img' },
  { id: 7, src: '/homePageDiv3img7.png', alt: 'div4img' },
  { id: 8, src: '/homePageDiv3img8.png', alt: 'div4img' },
  { id: 9, src: '/homePageDiv3img9.png', alt: 'div4img' },
  { id: 10, src: '/homePageDiv3img10.png', alt: 'div4img' },
  { id: 11, src: '/homePageDiv3img11.png', alt: 'div4img' },
  { id: 12, src: '/homePageDiv3img12.png', alt: 'div4img' },
  { id: 13, src: '/homePageDiv3img13.png', alt: 'div4img' },
];

const div4Images = [
  { id: 1, src: '/homePageDiv4img1.png', alt: 'div4img', text: "Jeep Safari" },
  { id: 2, src: '/homePageDiv4img2.png', alt: 'div4img', text: "Nature Walk" },
  { id: 3, src: '/homePageDiv4img3.png', alt: 'div4img', text: "Picnic Meals" },
  { id: 4, src: '/homePageDiv4img4.png', alt: 'div4img', text: "Interactive Session" },
  { id: 5, src: '/homePageDiv4img5.png', alt: 'div4img', text: "Farm Visits" },
  { id: 6, src: '/homePageDiv4img6.png', alt: 'div4img', text: "Cycling Trails" },
];

const faqs = [
  { question: "What is the entry fee for Velavadar Blackbuck National Park?", answer: "The entry fee for Velavadar National Park is USD 50 per permit for Foreign nationals and INR 500 for Indian citizens." },
  { question: "What is the Blackbuck National Park known for?", answer: "Primarily declared for Blackbucks, the sanctuary in Velavadar is also the biggest breeding ground for Harriers. The road divided the safari park into wetlands and grasslands; both sides are accessible during a safari. Along with Blackbucks, blue bulls, harriers, lesser floricans, and Indian foxes are found in Blackbuck National Park." },
  { question: "What are timings for safari in Blackbuck Velavadar National park?", answer: "SAFARI TIMING: Morning 06:30 Hrs. to 09:30 Hrs, Evening 15:00 Hrs. to 18:00 Hrs" },
  { question: "What is Velavadar famous for?", answer: "Velavadar National Park near Bhavnagar was private grassland of the Maharaja originally. Famous for Blackbucks this national park is also to be visited for its birds." },
  { question: "How much is the Jeep safari in Velavadar National Park?", answer: "Cost of safari in Blackbuck national Park at Velavadar is USD 122 for foreign nationals and INR 5500 for Indian Nationals per jeep per safari. The prices mentioned are inclusive of forest permit charge, guide charges, gypsy rental, pick up & drop from resort." },
  { question: "What is the camera fee at Velavadar?", answer: "The camera fee at Velavadar NP is USD 20 per camera per day." },
];

export default function Home() {
  const [currBg, setCurrBg] = useState(bgConfig[0])
  const [prevBg, setPrevBg] = useState(bgConfig[0])
  
  const [div0Ref, div0InView] = useInView({ threshold: 0.5 })
  const [div1Ref, div1InView] = useInView({ threshold: 0.5 })
  const [div2Ref, div2InView] = useInView({ threshold: 0.5 })
  const [div3Ref, div3InView] = useInView({ threshold: 0.5 })
  const [div4Ref, div4InView] = useInView({ threshold: 0.5 })
  const [div5Ref, div5InView] = useInView({ threshold: 0.5 })
  const [div6Ref, div6InView] = useInView({ threshold: 0.5 })
  const [div7Ref, div7InView] = useInView({ threshold: 0.5 })
  const [div8Ref, div8InView] = useInView({ threshold: 0.5 })
  const [div9Ref, div9InView] = useInView({ threshold: 0.5 })

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const subject = encodeURIComponent("Safari Tour Inquiry");
    const body = encodeURIComponent(
      `Hello, I'm interested in a safari tour!\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Message:* ${formData.message}`
    );
  
    const mailtoURL = `mailto:info@rustictrailsindia.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoURL;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + direction + images.length) % images.length);
    }, 7254);
    return () => clearInterval(interval);
  }, [direction]);

  useEffect(() => {
    if (div0InView) updateBg(bgConfig[0])
    else if (div1InView) updateBg(bgConfig[1])
    else if (div2InView) updateBg(bgConfig[2])
    else if (div3InView) updateBg(bgConfig[3])
    else if (div4InView) updateBg(bgConfig[4])
    else if (div5InView) updateBg(bgConfig[5])
    else if (div6InView) updateBg(bgConfig[6])
    else if (div7InView) updateBg(bgConfig[7])
    else if (div8InView) updateBg(bgConfig[8])
    else if (div9InView) updateBg(bgConfig[9])
  }, [div0InView, div1InView, div2InView, div3InView, div4InView, div5InView, div6InView, div7InView, div8InView, div9InView])

  const updateBg = (newBg: typeof bgConfig[0]) => {
    if (newBg.divId !== currBg.divId) {
      setPrevBg(currBg)
      setCurrBg(newBg)
    }
  }

  const groupSize = 3;
  const totalGroups = Math.ceil(div4Images.length / groupSize);
  const currentGroup = Math.floor(currentIndex / groupSize);

  return (
    <>
      <Header div0View={div0InView}/>
      {/* div0 - to maintain space */}
      <div ref={div0Ref} className={`w-screen flex flex-col items-center justify-center ${mobileView ? "h-[50vh]" : "h-[100vh]"}`}>
        <div ref={div0Ref} className={`relative w-screen overflow-hidden ${mobileView ?" h-[40vh]":"h-[85vh]"}`}>
          {/* Image slider container */}
          <motion.div
            className="flex h-full w-full"
            animate={{
              x: `-${currentIndex * 100}%`
            }}
            transition={{
              type: "tween",
              ease: [0.32, 0.72, 0, 1],
              duration: 1.5
            }}
          >
            {images.map((image, index) => (
              <div key={index} className="relative h-full w-full shrink-0">
                {/* Image container */}
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 0.95, opacity: 0.7 }}
                  animate={{
                    scale: currentIndex === index ? 1 : 0.9,
                    opacity: currentIndex === index ? 1 : 0.6
                  }}
                  transition={{ duration: 1.5 }}
                >
                  <Image
                    src={image.src}
                    alt={`Image ${index + 1}`}
                    fill
                    sizes="100vw"
                    className="object-cover cursor-pointer"
                    priority={index === currentIndex}
                  />
                </motion.div>

                {/* Info overlay */}
                <AnimatePresence>
                  {currentIndex === index && (
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { delay: 0.5, duration: 0.8 }
                      }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <motion.div
                        className="relative z-10 text-white px-8 py-14 w-3/4 h-full"
                        initial={{ y: 20 }}
                        animate={{
                          y: 0,
                          transition: { delay: 0.7, duration: 0.6 }
                        }}
                      >
                        <Link href={image.link} passHref>
                          {image.info}
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
    
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
        <div className={`h-[15vh] w-screen p-4 ${mobileView ? "text-center" : ""} flex flex-col items-center justify-center gap-2 ${mont.className} backdrop-blur-md transition-colors duration-500 text-black`}>
          <h1 className={`${mobileView ? "text-xs" : "text-lg"}  text-earth-dark-soil`}>What makes Blackbuck National Park, Velavadar the best places to see Indian Wolves, Blackbucks, Montagu Harrier and Lesser Florican</h1>
          <h2 className={`tracking-wide ${mobileView ? "text-base" : "text-xl"} font-bold text-earth-grey`}><span className='text-earth-dark-green'>Velavadar National Park</span> and its <span className='text-earth-brown'>Wildlife</span></h2>
        </div>
      </div>


      {/* div1 */}
      {!mobileView ? 
      (
        <>
          <div ref={div1Ref} className={`h-[40vh] w-screen relative z-10 flex items-center justify-center text-black border-black ${mont.className}`}>
            {/* From Left */}
            <motion.div
            className={`h-full w-1/2 flex flex-col items-center justify-center ${mobileView ? "pl-2 gap-3" : "pl-10 gap-7"}`}
            initial={{ x: "-54%", y: "27%", opacity: 0 }}
            animate={(div1InView||div2InView) ? { x: 0, y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: "easeOut", type: "spring", stiffness: 77, damping: 17 }}
            >
              <div className="w-full flex flex-col items-end justify-between gap-2">
                <span className={`${mobileView ? "text-xs" : "text-base"} text-right text-earth-brown`}>Blackbuck National Park is a hidden realm holding all the gems of nature under one roof. The beautiful views of the exotic and exquisite wildlife and grasslands compel travelers from all over the world to visit and spend time in nature’s bounty. Lying between two rivers, Parvaila and Alang, which flow into the Gulf of Khambhat, you can witness many wolves living and strolling around these water bodies.</span>
              </div>
              <div className="w-full flex flex-col items-end gap-2">
                <span className={`${mobileView ? "text-xs" : "text-lg"} text-right font-bold text-earth-dark-green`}>Want to see a grassland ecosystem with Indian Wolves, herd of blackbuck in India?</span>
                <span className={`${mobileView ? "text-sm" : "text-base"} text-right text-earth-dark-soil`}>Indian Wolf sightings are difficult, but if you do sight one, it’s an unparalleled experience. Though at Velavadar, blackbucks are sighted easily. If you are lucky, a blackbuck territorial fight is a rare sight you might witness.</span>
              </div>
              <div className="w-full flex flex-col items-end">
                <motion.button
                    className={`relative border-2 border-earth-dark-green px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
                    whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 },
                        opacity: 0.77,
                    }}
                    whileTap={{scale: 0.95,opacity: 0.54}}
                  >
                    <motion.span 
                      className="relative z-10 text-earth-dark-green"
                      whileHover={{color: 'earth-dark-green', transition: { duration: 0.3 }}}
                    >
                      <Link href="/about-velavadar-national-park-bhavnagar" passHref>
                        Read More
                      </Link>
                    </motion.span>
                  </motion.button>
                </div>
            </motion.div>
            {/* From Right */}
            <motion.div
              className="relative w-1/2 h-full flex items-center justify-center overflow-hidden"
              initial={{ x: "54%", y: "27%", opacity: 0 }}
              animate={(div1InView||div2InView) ? { x: 0, y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.4, ease: "easeOut", type: "spring", stiffness: 77, damping: 17 }}
              >
              <Image src="/lpimg3.png" alt={`lpimg1`} fill sizes="100vw" className="object-contain transition-all duration-300"/>
            </motion.div>            
          </div>
        </>
      ):(
        <>
          <div ref={div1Ref} className={`h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center ${mont.className}`}>
            <Image
              src="/lpimg3.png"
              alt="Velavadar National Park"
              fill
              sizes="100vw"
              className="object-cover z-0"
              priority
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-center bg-black/27">
              <span className='text-base font-bold mb-2'>Why Visit Blackbuck National Park, Velavadar?</span>
              <span className='text-[10px]'>
                Blackbuck National Park is a hidden realm holding all the gems of nature under one roof. 
                The beautiful views of the exotic and exquisite wildlife and grasslands compel travelers 
                from all over the world to visit and spend time in nature's bounty.
              </span>
              <br />
              <span className='text-[10px] font-bold mt-3'>
                Want to see a grassland ecosystem with Indian Wolves, herd of blackbuck in India?
              </span>
              <span className='text-[10px]'>
                Indian Wolf sightings are difficult, but if you do sight one, it's an unparalleled experience. 
                Though at Velavadar, blackbucks are sighted easily. If you're lucky, a blackbuck territorial 
                fight is a rare sight you might witness.
              </span>
              <Link href="/about-velavadar-national-park-bhavnagar" passHref>
                <motion.button
                  className="mt-4 border border-white px-4 py-2 rounded-full text-[10px] font-light"
                  whileHover={{ scale: 1.1, opacity: 0.77 }}
                  whileTap={{ scale: 0.95, opacity: 0.54 }}
                >
                  Read More
                </motion.button>
              </Link>
            </div>
          </div>
        </>
      )}

      {/* div2 */}
      <motion.div 
        ref={div2Ref} 
        className={`${mobileView?"h-auto":"h-screen"} w-screen relative z-10 flex flex-col items-center justify-center text-3xl text-black pt-10 bg-transparent`}
        initial={{ opacity: 0, y: 50 }}
        animate={mobileView?({opacity:1}):((div2InView||div3InView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 })}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      {/* Content */}
      <div className={` w-full flex ${mobileView?"flex-col h-[60vh]":"h-1/2"} items-center justify-center gap-7 home-page-bg-div2`}>
        <motion.div className={`relative ${mobileView?"w-full h-[55vh] mt-4":"w-1/3 h-full"} `}>
          <Image src="/homepageDiv2lodge1.png" alt="hpd2l1" fill sizes="100vw" className="object-contain object-center" />
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <motion.div className={`relative z-10 text-white px-10 w-full h-2/3 flex flex-col justify-between items-start text-left`}>
              <motion.div 
                ref={div2Ref} 
                className={`${mobileView?"h-1/3":"h-auto"} w-full black-to-fade-bg p-4 relative z-10 flex flex-col items-start justify-center`}
                initial={{ opacity: 0, y: 50 }}
                animate={(div2InView||div3InView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className={`${mobileView?"text-xs":"text-lg"} font-normal`}>A Luxury Hotel in Velavadar Park</h2>
                <h1 className={`${mobileView?"text-sm":"text-xl"} font-bold`}>The Blackbuck Lodge</h1>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
        <motion.div className={`relative ${mobileView?"w-full h-[55vh] mb-4":"w-1/3 h-full"} `}>
            <Image src="/homepageDiv2lodge2.png" alt={`hpd2l1`} fill sizes="100vw" className="object-contain"/>
            <motion.div className="absolute inset-0 flex items-center justify-center">
              <motion.div className={`relative z-10 text-white px-10 w-full h-2/3 flex flex-col justify-between items-end text-right ${mont.className}`}>
                <motion.div 
                  ref={div2Ref} 
                  className={`${mobileView?"h-1/3":"h-auto"} w-full fade-to-black-bg p-4 relative z-10 flex flex-col items-end justify-center`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={(div2InView||div3InView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className={`${mobileView?"text-xs":"text-lg"} font-normal`}>Boutique Resort in Velavadar</h2>
                  <h1 className={`${mobileView?"text-sm":"text-xl"} font-bold`}>Blackbuck Safari Lodge</h1>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className={`${mobileView?"h-[100vh] mt-4":"h-1/2"} w-full flex items-center justify-center`}>
          <div className={`h-full w-2/3 flex ${mobileView?"flex-col":""} items-center justify-center`}>
            <div className={`h-full ${mobileView?"w-full":"w-2/3"} flex flex-col items-start justify-center text-left gap-3 text-black ${mont.className}`}>
              <h1 className={`${mobileView?"text-sm":"text-xl"} font-bold text-earth-brown`}>Accommodation and Safari in Blackbuck National Park, Velavadar</h1>
              <h2 className={`${mobileView?"text-xs":"text-base"} font-normal text-earth-brown`}>Blackbuck National Park is an ideal travel destination for people who have a penchant for nature and adventure. The park provides a beautiful panoramic view of the diverse flora and fauna species and has a unique and rare grassland ecosystem. The park lies between the two rivers that flow into the Gulf of Khambhat, making it a utopian experience for the visitors. In addition, visitors can witness many wolves residing and gallivanting around the water bodies.</h2>
              <h2 className={`${mobileView?"text-xs":"text-base"} font-normal text-earth-soil-red`}>Being a safe space for many unique mammals and a dedicated conservatory of blackbucks, the Blackbuck national park is a beautiful place to witness the beauty of nature and wildlife in its most ideal form. Its unique grassland ecosystem is one of the most fascinating parts of this park.</h2>
              <motion.button
                className={`relative border-2 border-earth-brown px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer ${mont.className}`}
                initial={{backgroundColor: 'rgba(0, 0, 0, 0)',backdropFilter: 'blur(0px)'}}
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(7px)',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    opacity: 0.77,
                    color: 'black'
                }}
                whileTap={{scale: 0.95,opacity: 0.54}}
              >
                <motion.span 
                  className="relative z-10 text-earth-brown"
                  whileHover={{color: 'earth-brown',transition: { duration: 0.3 }}}
                >
                  <Link href="/accomodation-in-velavadar" passHref>Read More</Link>
                </motion.span>
              </motion.button>
            </div>
            <div className={`h-full ${mobileView?"w-full":"w-1/3"} flex flex-col items-center justify-center text-black text-center ${mont.className}`}>
              <h2 className={`${mobileView?"text-xs":"text-base"} font-semibold text-earth-dark-soil`}>Book your stay and safari in Blackbuck National Park</h2>
              <h1 className={`${mobileView?"text-sm":"text-xl"} font-bold text-earth-grey`}>Stay at Velavadar Blackbuck National Park</h1>
              <motion.button
                className={`relative border-2 border-earth-dark-soil px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer`}
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
                <motion.span 
                  className="relative z-10 text-earth-dark-soil pl-6"
                  style={{ backgroundImage: "url('/callIconEarthDarkSoil.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
                >
                  <Link href="tel:+918860680660" passHref>Enquire Now</Link>
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>



      {/* div3 */}
      <div ref={div3Ref} className={`${mobileView ? "h-[250vh]" : "h-screen"} w-screen relative z-10 flex items-center justify-center text-3xl text-black home-page-bg-div3 ${mont.className}`}>
        <div className={`h-4/5 w-4/5 bg-black/54 rounded-xl flex ${mobileView ? "flex-col" : ""} items-center justify-center`} style={{ backdropFilter: 'blur(7px)' }}>

          {/* Left - About + Gallery + Buttons */}
          <div className={`h-full ${mobileView ? "w-full" : "w-2/3"} flex flex-col items-start justify-center p-7 gap-3`}>
            <span className={`text-white ${mobileView ? "text-sm" : "text-2xl"} font-extrabold`}>About Blackbuck National park, Velavadar</span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>
              Blackbuck National Park is a hidden gem situated in the Bhavnagar District of Gujarat state, India that offers picturesque views of its unique grassland ecosystem and exquisite wildlife. The park was established in 1976 and is spread over an enormous area of 34.08 km². In earlier times, the park used to be the hunting grounds for the Maharaja of Bhavnagar, Gujarat. Initially, it was a protected area of 18 square km but later in 1980, an area of 16 square km was added to make it a total of 34 square km. Although the park is one of the smallest in the country, it is still home to more than 140 species of birds, 14 animal species, 95 species of plants and numerous reptiles. The unusual topography of the park comprises unique grasslands, mudflats, saline plains, and shrublands.
            </span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>
              The highlight of the national park is its rare population of blackbucks. You can often spot herds of these beautiful and extremely fast antelopes strutting across the pale gold grasslands. From a population of mere 200 in the 1960s to more than 3000 today, the goal of preserving these endangered animal species has yielded good and effective results. The magnificent view of nature and the marvelous wonders of the Blackbuck national park make for an appealing travel destination for bird lovers, nature photographers, and travel enthusiasts worldwide.
            </span>

            <span className={`text-white ${mobileView ? "text-sm" : "text-xl"} font-extrabold w-full text-left`}>Gallery - Velavadar Blackbuck National Park</span>
            <div className={`${mobileView ? "h-[30vh]" : "h-auto"} w-full overflow-hidden`}>
              <motion.div
                ref={ref}
                className={`flex gap-4 ${mobileView ? "h-full" : "grid grid-cols-3 grid-rows-3"} w-full overflow-x-auto scrollbar-hide py-4 cursor-all-scroll`}
                style={{
                  scrollSnapType: mobileView ? 'x mandatory' : undefined,
                  scrollBehavior: 'smooth'
                }}
              >
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className={`relative ${mobileView ? "h-full w-2/3 flex-shrink-0 scroll-snap-start" : "w-full h-48"}`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={354}
                      height={354}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className='h-auto w-full flex items-center justify-start gap-4'>
              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer ${mont.className}`}
                whileHover={{
                    backgroundColor: 'white',
                    backdropFilter: 'blur(7px)',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    opacity: 0.77,
                    color: 'black'
                }}
                whileTap={{scale: 0.95,opacity: 0.54}}
              >
                <motion.span 
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  <Link href="/about-velavadar-national-park-bhavnagar" passHref>Read More</Link>
                </motion.span>
              </motion.button>

              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer ${mont.className}`}
                whileHover={{
                    backgroundColor: 'white',
                    backdropFilter: 'blur(7px)',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    opacity: 0.77,
                    color: 'black'
                }}
                whileTap={{scale: 0.95,opacity: 0.54}}
              >
                <motion.span 
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  <Link href="/how-to-reach-velavadar" passHref>How To Reach</Link>
                </motion.span>
              </motion.button>
            </div>
          </div>

          {/* Right - Form */}
          <div className={`h-full ${mobileView ? "w-full" : "w-1/3"} flex flex-col items-center justify-center p-7`}>
            <span className={`text-white ${mobileView ? "text-base" : "text-xl"} font-extrabold my-4`}>Contact our Safari Specialist</span>
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1">
                <label htmlFor="name" className={`block ${mobileView ? "text-xs" : "text-sm"} font-medium text-white`}>Full Name</label>
                <input type="text" id="name" name="name" required onChange={handleChange}
                  className={`w-full px-4 py-2 ${mobileView ? "text-xs" : "text-sm"} rounded-lg bg-white/10 text-white border border-white/30 focus:ring-white/50 outline-none transition`}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className={`block ${mobileView ? "text-xs" : "text-sm"} font-medium text-white`}>Email Address</label>
                <input type="email" id="email" name="email" required onChange={handleChange}
                  className={`w-full px-4 py-2 ${mobileView ? "text-xs" : "text-sm"} rounded-lg bg-white/10 text-white border border-white/30 focus:ring-white/50 outline-none transition`}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="phone" className={`block ${mobileView ? "text-xs" : "text-sm"} font-medium text-white`}>Phone Number</label>
                <input type="tel" id="phone" name="phone" onChange={handleChange}
                  className={`w-full px-4 py-2 ${mobileView ? "text-xs" : "text-sm"} rounded-lg bg-white/10 text-white border border-white/30 focus:ring-white/50 outline-none transition`}
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className={`block ${mobileView ? "text-xs" : "text-sm"} font-medium text-white`}>Your Message</label>
                <textarea id="message" name="message" rows={4} onChange={handleChange}
                  className={`w-full px-4 py-2 ${mobileView ? "text-xs" : "text-sm"} rounded-lg bg-white/10 text-white border border-white/30 focus:ring-white/50 outline-none transition`}
                ></textarea>
              </div>

              <button type='submit' className={`border-2 border-white px-3 py-2 my-3 rounded-full ${mobileView ? "text-xs" : "text-sm"} font-light cursor-pointer hover:bg-white text-white hover:text-black transition ${mont.className}`}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      
      
      {/* div4 */}
      <div ref={div4Ref} className={`relative ${mobileView?"h-[60vh]":"h-[125vh]"} w-screen overflow-x-hidden flex flex-col items-center justify-center`}>
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent z-20"></div>

      {/* Header Section */}
      <div className={`relative h-[25vh] w-full bg-transparent flex flex-col text-center items-center justify-center gap-3 p-7 text-black ${mont.className} z-10`}>
        <h1 className={`${mobileView?"text-lg":"text-2xl"} font-bold text-earth-brown`}>Things To Do</h1>
        <h2 className={`${mobileView?"text-sm":"text-lg"} text-earth-soil-red`}>Activities at Blackbuck National Park, Velavadar</h2>
      </div>

      {/* Horizontal Slider Container */}
      {mobileView ? (
      <div className="relative w-full h-[40vh] px-4 overflow-visible">
          <div className={`${mobileView ? "h-[30vh]" : "h-auto"} w-full overflow-hidden`}>
          <motion.div
            ref={ref}
            className={`flex gap-4 ${mobileView ? "h-full" : "grid grid-cols-3 grid-rows-3"} w-full overflow-x-auto scrollbar-hide py-4 cursor-all-scroll`}
            style={{
              scrollSnapType: mobileView ? 'x mandatory' : undefined,
              scrollBehavior: 'smooth'
            }}
          >
            {div4Images.map((image) => (
              <div
                key={image.id}
                className={`relative ${mobileView ? "h-full w-2/3 flex-shrink-0 scroll-snap-start" : "w-full h-48"}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={354}
                  height={354}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </motion.div>
        </div>
        </div>
        ) : (
        <div className="relative w-full h-[100vh] overflow-visible">
          <div className="grid grid-cols-3 grid-rows-2 gap-4 h-full w-full px-6">
            {div4Images.slice(0, 6).map((image) => (
              <motion.div
                key={image.id}
                className="relative w-full h-full rounded-lg overflow-hidden"
                initial={{ scale: 0.9, opacity: 0.7 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="33vw"
                  className="object-cover hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-black/30 flex items-end justify-center pb-4 px-4">
                  <h2 className={`text-white text-lg font-bold text-center ${mont.className}`}>
                    {image.text}
                  </h2>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        )}
    </div>


      {/* div5 */}
      <motion.div 
        ref={div5Ref} 
        className={`${mobileView?"h-auto mt-4":"h-[100vh]"} w-screen relative z-10 overflow-hidden flex flex-col items-center justify-center gap-6 text-black`}
        initial={{ opacity: 0, y: 50 }}
        animate={(div5InView||div6InView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>

        {/* Title */}
        <div className='h-[10vh] w-2/3 flex items-center justify-center py-4 mt-5'>
          <span className={`${mobileView?"text-base text-center":"text-2xl"} font-bold text-earth-light-green ${mont.className}`}>
            About Hotels and Resorts in Blackbuck National Park, <span className='text-earth-dark-green'>Velavadar</span>
          </span>
        </div>

        {/* 2x2 Grid */}
        <div className={` w-full px-10 ${mobileView ? 'flex flex-col gap-4 h-[120vh]' : 'grid grid-cols-1 md:grid-cols-2 gap-4 h-[75vh]'} ${mont.className}`}>
          {[
            { src: "/homePageDiv5img1.png", title: "Living", description: "The hotels in Blackbuck National Park in Velavadar stand amidst a beautiful hamlet. The lodges offer accommodation in boutique cottages with en-suite modern and elegant bathrooms. Each cottage has all contemporary facilities while preserving regional and cultural architecture." },
            { src: "/homePageDiv5img2.png", title: "Dining", description: "The multi-cuisine restaurant at Velavadar lodges offers magnificent views of the grasslands. These resorts serve exceptional seasonal and regional dishes, blending traditional flavors with modern flair." },
            { src: "/homePageDiv5img3.png", title: "Facilities", description: "The Blackbuck National Park hotels are set in a picturesque landscape with water bodies and golden grasslands. Each cottage features a private outdoor sitting space and is equipped with modern comforts while maintaining traditional architecture." },
            { src: "/homePageDiv5img4.png", title: "Team", description: "We, at Safaris India Tours, are a dedicated team passionate about wildlife and nature. Our goal is to provide guests with a memorable and comfortable stay." },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="relative w-full h-full rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <Image src={item.src} alt={item.title} layout="fill" className="object-cover" />

              {/* Overlay */}
              <div className="absolute fade-to-black-down-to-up-bg inset-0 flex flex-col justify-end p-4">
                <h2 className={`text-white ${mobileView?"text-sm":"text-2xl"} font-bold`}>{item.title}</h2>
                <p className={`text-white ${mobileView?"text-xs":"text-sm"} mt-2`}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Read More Button */}
        <div className='h-[15vh] w-2/3 flex items-center justify-center'>
          <motion.button
            className={`relative border-2 border-earth-dark-green px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer ${mont.className}`}
            initial={{ backgroundColor: 'rgba(0, 0, 0, 0)', backdropFilter: 'blur(0px)' }}
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              backdropFilter: 'blur(7px)',
              scale: 1.1,
              transition: { duration: 0.3 },
              opacity: 0.77,
              color: 'black'
            }}
            whileTap={{ scale: 0.95, opacity: 0.54 }}
          >
            <motion.span 
              className="relative z-10 text-earth-dark-green"
              whileHover={{ color: 'earth-dark-green', transition: { duration: 0.3 } }}
            >
              <Link href="/accomodation-in-velavadar" passHref>Read More</Link>
            </motion.span>
          </motion.button>
        </div>
      </motion.div>




      {/* Home Page Div 6 */}
      <div ref={div6Ref} className={`${mobileView?"h-[100vh]":"h-[60vh]"} w-screen flex flex-col items-center justify-center relative`}>
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className={`h-auto w-full flex ${mobileView?"flex-col":""} items-center justify-center gap-2`}>
          <div className={`h-full ${mobileView?"w-2/3 text-center":"w-1/3"} flex flex-col items-start justify-start gap-3 p-4`}>
            <span className={`text-earth-dark-soil ${mobileView?"text-sm":"text-2xl"} font-extrabold ${mont.className}`}>Conservation Efforts at Blackbuck National Park</span>
            <span className={`text-earth-faded-soil ${mobileView?"text-xs":"text-xl"} font-extrabold ${mont.className}`}>Responsible Tourism in Velavadar</span>
            <span className={`text-earth-light-soil ${mobileView?"text-xs":"text-base"} font-normal ${mont.className}`}>The conservation of an endangered species of blackbucks is the main highlight of this park. Once, blackbucks could be seen roaming around the entire subcontinent, but today its population is concentrated within the borders of Gujarat, India. The steady focus and thoughtful conservation in protecting these endangered species have ultimately proved to be a fruitful endeavour. From 200 in the 1960s to above a whopping 3000 today, the efforts of preserving these almost extinct animal species have paid off.</span>
          </div>
          <div className={`h-full ${mobileView?"w-2/3 text-center":"w-1/3"} flex flex-col items-start justify-start gap-3 p-4`}>
            <span className={`text-earth-dark-green ${mobileView?"text-sm":"text-2xl"} font-extrabold ${mont.className}`}>Why visit Blackbuck National Park at Velavadar?</span>
            <span className={`text-earth-faded-green ${mobileView?"text-xs":"text-xl"} font-extrabold ${mont.className}`}>Wildlife at Blackbuck National Park</span>
            <span className={`text-earth-light-green ${mobileView?"text-xs":"text-base"} font-normal ${mont.className}`}>The national park is also home to a large number of exotic and unique biodiversity. The sanctuary is one of the most suitable places to see striped hyenas, a rarely seen species. You can also witness the prime predator of the park, the Indian wolf. A walk through the park can give visitors a chance to catch sights of many smaller but beautiful mammals such as jungle cats, hare, golden jackal, and Indian foxes.</span>
          </div>
        </div>
        <motion.button
          className={`relative border-2 border-earth-grey px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer ${mont.className}`}
          initial={{backgroundColor: 'rgba(0, 0, 0, 0)',backdropFilter: 'blur(0px)'}}
          whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              backdropFilter: 'blur(7px)',
              scale: 1.1,
              transition: { duration: 0.3 },
              opacity: 0.77,
              color: 'black'
          }}
          whileTap={{scale: 0.95,opacity: 0.54}}
        >
          <motion.span 
            className="relative z-10 text-earth-grey"
            whileHover={{color: 'earth-grey',transition: { duration: 0.3 }}}
          >
            <Link href="/velavadar-tourism" passHref>Know More</Link>
          </motion.span>
        </motion.button>
      </div>

      {/* Home Page Div 7 */}
      <div ref={div7Ref} className={`${mobileView?"h-[170vh]":"h-[100vh]"} w-screen flex items-center justify-center home-page-div8 relative`}><WhyUs/></div>

      
      <div ref={div8Ref} className={`${mobileView?"h-auto mt-10":"h-[50vh]"} w-screen flex flex-col items-center justify-center relative socials-bg`}>
        <span className={`text-earth-dark-soil ${mobileView?"text-base mb-4":"text-2xl"} font-extrabold ${mont.className}`}>How to reach Blackbuck National Park?</span>
        <div className={`h-auto w-full flex ${mobileView?"flex-col":""} items-center justify-center gap-10`}>
          <div className={`h-[40vh] ${mobileView?"w-full":"w-2/3"} flex flex-col items-end justify-center px-4`}>
            <span className={`text-earth-brown ${mobileView?"text-sm":"text-xl"} font-semibold ${mont.className}`}>Reaching from Ahmedabad Aiport</span>
            <div className='h-[35vh] w-2/3 border-2 bg-white/77 border-earth-brown rounded-xl'><Maps1/></div>
          </div>
          <div className={`h-[40vh] ${mobileView?"w-full":"w-2/3"} flex flex-col items-start justify-center px-4`}>
            <span className={`text-earth-brown ${mobileView?"text-sm":"text-xl"} font-semibold ${mont.className}`}>Reaching from Bhavnagar Aiport</span>
            <div className={`h-[35vh] ${mobileView?"mb-4":""} w-2/3 border-2 bg-white/77 border-earth-brown rounded-xl`}><Maps2/></div>
          </div>
        </div>
      </div>


      {/* Home Page Div 8 */}
      <div ref={div9Ref} className='min-h-[80vh] w-screen flex items-center justify-center relative'>
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>

        <div className={`h-full ${mobileView ? "w-3/4" : "w-2/3"} flex flex-col items-start justify-start gap-7 p-4`}>
          <span className={`text-earth-dark-soil ${mobileView ? "text-lg" : "text-2xl"} font-extrabold ${mont.className}`}>
            Frequently Asked Questions
          </span>
          <div className="h-3/4 w-full overflow-y-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-earth-light-soil p-4">
                <button 
                  className={`w-full text-left ${mobileView ? "text-sm" : "text-lg"} font-semibold text-earth-faded-soil flex justify-between items-center cursor-pointer ${mont.className}`}
                  onClick={() => toggleAcc(index)}
                >
                  {faq.question}
                  <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                  className={`overflow-hidden ${mont.className} text-earth-faded-green ${mobileView ? "text-xs" : "text-base"} font-bold transition-all duration-500 ease-in-out ${
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
