"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Lpimg1 from './components/Lpimg1';
import Lpimg2 from './components/Lpimg2';
import Lpimg3 from './components/Lpimg3';
import WhyUs from './components/WhyUs';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

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
]

const images = [
  { src: "/lpimg1.png", bgClass: "lp-img-1", info: <Lpimg1/>},
  { src: "/lpimg2.png", bgClass: "lp-img-2", info: <Lpimg2/>},
  { src: "/lpimg3.png", bgClass: "lp-img-3", info: <Lpimg3/>}
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const ref = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: ref })
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAcc = (index: number) => {setOpenIndex(openIndex === index ? null : index);};

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
  }, [div0InView, div1InView, div2InView, div3InView, div4InView, div5InView, div6InView, div7InView, div8InView])

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
      {/* Background with crossfade effect */}
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <AnimatePresence initial={false}>
          {/* Previous background - Fades out slightly AFTER new one appears */}
          {prevBg.divId !== currBg.divId && (
            <motion.div
              key={`prev-${prevBg.divId}`}
              className={`absolute inset-0 ${prevBg.gradClass}`}
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }} // 🔹 Small delay for overlap
            >
              {prevBg.bgSrc && (
                <div 
                  className="h-full w-full"
                  style={{
                    backgroundImage: `url(${prevBg.bgSrc})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              )}
            </motion.div>
          )}
          {/* Current background - Fades in first */}
          <motion.div
            key={`curr-${currBg.divId}`}
            className={`absolute inset-0 ${currBg.gradClass}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            {currBg.bgSrc && (
              <div 
                className="h-full w-full"
                style={{
                  backgroundImage: `url(${currBg.bgSrc})`,
                  backgroundSize: 'contain',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>


      {/* div0 - to maintain space */}
      <div ref={div0Ref} className='h-[100vh] w-screen flex flex-col items-center justify-center'>
        <div ref={div0Ref} className="relative h-[80vh] w-screen overflow-hidden">
          {/* Background with smooth transition */}
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence initial={false}>
              <motion.div
                className={`absolute inset-0 ${images[currentIndex]?.bgClass ?? ''}`}
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5 }}
              />
              {currentIndex > 0 && (
                <motion.div
                  className={`absolute inset-0 ${images[(currentIndex - 1 + images.length) % images.length].bgClass}`}
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 0 }}
                  transition={{ duration: 2.5 }}
                />
              )}
            </AnimatePresence>
          </div>
    
          {/* Image slider container */}
          <motion.div
            className="flex h-full"
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
                    className="object-contain"
                    priority={index === currentIndex}
                  />
                </motion.div>
    
                {/* Info overlay - no dark background */}
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
                        className="relative z-10 text-white p-8 w-2/3 h-full"
                        initial={{ y: 20 }}
                        animate={{ 
                          y: 0,
                          transition: { delay: 0.7, duration: 0.6 }
                        }}
                      >
                        {image.info}
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
        <div className={`h-[20vh] w-screen flex flex-col items-center justify-center gap-2 ${mont.className} backdrop-blur-md transition-colors duration-500 ${div1InView ? "text-white" : "text-black"}`}>
          <h1 className='text-lg'>What makes Blackbuck National Park, Velavadar the best places to see Indian Wolves, Blackbucks, Montagu Harrier and Lesser Florican</h1>
          <h2>
            <span className="text-2xl">⍒</span>
            <span className="tracking-wide text-xl font-bold">elavadar National Park and its Wildlife</span>
          </h2>
        </div>
      </div>


      {/* div1 */}
      <div ref={div1Ref} className='h-[70vh] w-screen relative z-10 flex items-center justify-center text-3xl text-black border-black bg-transparent'>
        <motion.div
          className="relative w-full h-full"
          initial={{ scale: 0.95, opacity: 0.7 }}
          // animate={{ 
          //   scale: currentIndex === index ? 1 : 0.9,
          //   opacity: currentIndex === index ? 1 : 0.6
          // }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src="/lpimg3.png"
            alt={`lpimg1`}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </motion.div>
        <motion.div className="absolute inset-0 flex items-center justify-center p-2">
          <motion.div className={`relative z-10 text-white p-8 w-2/3 h-full flex flex-col justify-between items-center ${mont.className}`}>
            {/* Top Section */}
            <div className="w-full flex flex-col items-center gap-2">
              <span className='text-base text-center'>Blackbuck National Park is a hidden realm holding all the gems of nature under one roof. The beautiful views of the exotic and exquisite wildlife and grasslands compel travelers from all over the world to visit and spend time in nature’s bounty. Lying between two rivers, Parvaila and Alang, which flow into the Gulf of Khambhat, you can witness many wolves living and strolling around these water bodies.</span>
              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  Read More
                </motion.span>
              </motion.button>
            </div>
            {/* Bottom Section */}
            <div className="w-full flex flex-col items-center gap-2">
              <span className='text-base text-center font-bold'>
                Want to see a grassland ecosystem with Indian Wolves, herd of blackbuck in India?
              </span>
              <span className='text-base text-center'>
                Indian Wolf sightings are difficult, but if you do sight one, it’s an unparalleled experience. Though at Velavadar, blackbucks are sighted easily. If you are lucky, a blackbuck territorial fight is a rare sight you might witness.
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>


      {/* div2 */}
      <motion.div 
        ref={div2Ref} 
        className='h-screen w-screen relative z-10 flex flex-col items-center justify-center text-3xl text-black pt-10 bg-transparent'
        initial={{ opacity: 0, y: 50 }}
        animate={div2InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
      {/* Top Fade */}
      <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>
      
      {/* Content */}
      <div className="h-1/2 w-full flex items-center justify-center gap-7">
        <motion.div className="relative w-1/3 h-full">
          <Image src="/homepageDiv2lodge1.png" alt="hpd2l1" fill sizes="100vw" className="object-contain" />
          <motion.div className="absolute inset-0 flex items-center justify-center">
            <motion.div className="relative z-10 text-white px-10 w-full h-2/3 flex flex-col justify-between items-start text-left">
              <div className="h-auto w-full">
                <h2 className="text-lg font-normal">A Luxury Hotel in Velavadar Park</h2>
                <h1 className="text-2xl font-bold">The Blackbuck Lodge</h1>
              </div>
              <motion.button
                className="relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer"
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
                  className="relative z-10 text-white pl-6"
                  style={{ backgroundImage: "url('/callIconWhite.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain" }}
                  whileHover={{ color: "black", backgroundImage: "url('/callIconBlack.png')", backgroundRepeat: "no-repeat", transition: { duration: 0.3 }}}
                >
                  Enquire Now
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
          <motion.div className="relative w-1/3 h-full">
            <Image src="/homepageDiv2lodge2.png" alt={`hpd2l1`} fill sizes="100vw" className="object-contain"/>
            <motion.div className="absolute inset-0 flex items-center justify-center">
              <motion.div className={`relative z-10 text-white px-10 w-full h-2/3 flex flex-col justify-between items-end text-right ${mont.className}`}>
                <div className='h-auto w-full'>
                  <h2 className="text-lg font-normal">Boutique Resort in Velavadar</h2>
                  <h1 className='text-2xl font-bold'>Blackbuck Safari Lodge</h1>
                </div>
                <motion.button
                  className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                    className="relative z-10 text-white pl-6"
                    style={{ backgroundImage: "url('/callIconWhite.png')", backgroundRepeat: "no-repeat", backgroundSize: "contain"}}
                    whileHover={{color: 'black', backgroundImage: "url('/callIconBlack.png')", backgroundRepeat: "no-repeat", transition: { duration: 0.3 }}}
                  >
                    Enquire Now
                  </motion.span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
        <div className="h-1/2 w-full flex items-center justify-center">
          <div className="h-full w-2/3 flex items-center justify-center">
            <div className={`h-full w-2/3 flex flex-col items-start justify-center text-left gap-3 text-white ${mont.className}`}>
              <h1 className='text-xl font-bold'>Accommodation and Safari in Blackbuck National Park, Velavadar</h1>
              <h2 className="text-base font-normal">Blackbuck National Park is an ideal travel destination for people who have a penchant for nature and adventure. The park provides a beautiful panoramic view of the diverse flora and fauna species and has a unique and rare grassland ecosystem. The park lies between the two rivers that flow into the Gulf of Khambhat, making it a utopian experience for the visitors. In addition, visitors can witness many wolves residing and gallivanting around the water bodies.</h2>
              <h2 className="text-base font-normal">Being a safe space for many unique mammals and a dedicated conservatory of blackbucks, the Blackbuck national park is a beautiful place to witness the beauty of nature and wildlife in its most ideal form. Its unique grassland ecosystem is one of the most fascinating parts of this park.</h2>
              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  Read More
                </motion.span>
              </motion.button>
            </div>
            <div className={`h-full w-1/3 flex flex-col items-center justify-center text-white text-center ${mont.className}`}>
              <h2 className="text-base font-normal">Book your stay and safari in Blackbuck National Park</h2>
              <h1 className='text-xl font-bold'>Stay at Velavadar Blackbuck National Park</h1>
              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  Book Now
                </motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>



      {/* div3 */}
      <div ref={div3Ref} className='h-screen w-screen relative z-10 flex items-center justify-center text-3xl text-black bg-transparent'>
        <div className="h-4/5 w-4/5 bg-black opacity-54 rounded-xl flex items-center justify-center" style={{ backdropFilter: 'blur(7px)' }}>
          <div className='h-full w-2/3 flex flex-col items-start justify-center p-7 gap-3'>
            <span className={`text-white text-2xl font-extrabold ${mont.className}`}>About Blackbuck National park, Velavadar</span>
            <span className={`text-white text-base font-normal ${mont.className}`}>Blackbuck National Park is a hidden gem situated in the Bhavnagar District of Gujarat state, India that offers picturesque views of its unique grassland ecosystem and exquisite wildlife. The park was established in 1976 and is spread over an enormous area of 34.08 km². In earlier times, the park used to be the hunting grounds for the Maharaja of Bhavnagar, Gujarat. Initially, it was a protected area of 18 square km but later in 1980, an area of 16 square km was added to make it a total of 34 square km. Although‌ ‌the‌ ‌park‌ ‌is‌ ‌one‌ ‌of‌ ‌the‌ ‌smallest‌ ‌in‌ ‌the‌ ‌country,‌ ‌it‌ ‌is‌ ‌still‌ ‌home to more than 140 species of birds,14 animal species, 95 species of plants and numerous reptiles. The unusual topography of the park comprises unique grasslands, mudflats, saline plains, and shrublands.</span>
            <span className={`text-white text-base font-normal ${mont.className}`}>The‌ ‌highlight of the national‌ ‌park‌ ‌is‌ ‌its‌ ‌rare‌‌ ‌population‌ ‌of‌ ‌blackbucks.‌ ‌You can often spot herds of these‌ ‌beautiful‌ ‌and‌ ‌extremely‌ ‌fast‌ ‌antelopes‌ ‌strutting‌‌ ‌across‌ ‌the‌ ‌pale‌ ‌gold‌ ‌grasslands.‌ From a population of mere 200 in the 1960s to more than 3000 today, the goal of preserving these endangered animal species has yielded good and effective results. The magnificent view of nature and the marvelous wonders of the Blackbuck national park make for an appealing travel destination for bird lovers, nature photographers, and travel enthusiasts worldwide.</span>
            
            <span className={`text-white text-xl font-extrabold ${mont.className}`}>Gallery - Blackbuck National Park, Velavadar</span>
            <div className='h-auto w-full overflow-hidden'>
              <motion.div 
                ref={ref}
                className="flex gap-4 w-full overflow-x-auto scrollbar-hide py-4 border-2 cursor-all-scroll"
                style={{
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth'
                }}
              >
                {galleryImages.map((image) => (
                  <div 
                    key={image.id}
                    className="relative h-full w-1/5 flex-shrink-0 scroll-snap-start"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={354}
                      height={354}
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <div className='h-auto w-full flex items-center justify-start gap-4'>
              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  Read More
                </motion.span>
              </motion.button>
              <motion.button
                className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                  className="relative z-10 text-white"
                  whileHover={{color: 'black',transition: { duration: 0.3 }}}
                >
                  How To Reach
                </motion.span>
              </motion.button>
            </div>

          </div>
          <div className='h-full w-1/3 flex flex-col items-center justify-center p-7'>
            <span className={`text-white text-xl font-extrabold my-4 ${mont.className}`}>Contact our Safari Specialist</span>
            <form className="w-full space-y-4">
            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 text-sm rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
                // placeholder="John Doe"
              />
            </div>
            {/* Email Input */}
            <div className="space-y-1">
              <label htmlFor="email" className="block text-sm font-medium text-white">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 text-sm rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
                // placeholder="john@example.com"
              />
            </div>
            {/* Phone Input */}
            <div className="space-y-1">
              <label htmlFor="phone" className="block text-sm font-medium text-white">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 text-sm rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
                // placeholder="+91 9876543210"
              />
            </div>
            {/* Message Textarea */}
            <div className="space-y-1">
              <label htmlFor="message" className="block text-sm font-medium text-white">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2 text-sm rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
                // placeholder="Tell us about your safari interests..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <motion.button
              type='submit'
              className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
                className="relative z-10 text-white"
                whileHover={{color: 'black',transition: { duration: 0.3 }}}
              >
                Submit
              </motion.span>
            </motion.button>
          </form>
          </div>
        </div>
      </div>
      
      
      {/* div4 */}
      {/* <div ref={div4Ref} className='h-[47vh] w-screen relative z-10 overflow-hidden flex flex-col items-center justify-center gap-4 text-3xl text-black bg-transparent'>
        <span>&nbsp;</span>
        <h1 className={`text-white text-3xl font-extrabold ${mont.className}`}>Things to Do</h1>
        <h2 className={`text-white text-xl font-bold ${mont.className}`}>Activities at Blackbuck National Park, Velavadar</h2>
        <div className='h-2/3 w-full flex items-center justify-center pb-4'>
          {galleryImagesDiv4.map((image) => (
            <motion.div key={image.id} className="relative w-1/6 h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-contain"
              />
              <motion.div className="absolute inset-0 flex items-center justify-center">
                <motion.div className={`relative z-10 text-white px-10 w-full h-full flex items-center justify-center ${mont.className}`}>
                  <h2 className="h-full w-full text-lg font-bold flex items-end justify-center">{image.text}</h2>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div> */}

  <div ref={div4Ref} className="relative h-[74vh] w-screen overflow-hidden flex flex-col items-center justify-center">
    {/* Top Fade */}
    <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>
    {/* Header Section */}
    <div className={`absolute h-[27vh] w-full inset-0 bg-transparent flex flex-col items-center justify-start gap-3 p-7 text-white ${mont.className}`}>
      <h1 className="z-[500] text-2xl font-bold">Things To Do</h1>
      <h2 className="z-[500] text-lg">Activities at Blackbuck National Park, Velavadar</h2>
    </div>
    {/* Image Slider */}
    <motion.div
      className="flex h-[47vh] w-full"
      animate={{
        x: `-${currentGroup * 100}%` // Moves the slider group by group
      }}
      transition={{
        type: "tween",
        ease: [0.32, 0.72, 0, 1],
        duration: 1.5
      }}
    >
      {Array.from({ length: totalGroups }).map((_, groupIndex) => (
      <div key={groupIndex} className="relative h-full w-full shrink-0 flex">
        {/* Render 3 images per group */}
        {div4Images
          .slice(groupIndex * groupSize, groupIndex * groupSize + groupSize)
          .map((image) => (
            <motion.div
              key={image.id}
              className="relative w-1/3 h-full flex-shrink-0"
              initial={{ scale: 0.95, opacity: 0.7 }}
              animate={{
                scale: currentGroup === groupIndex ? 1 : 0.9,
                opacity: currentGroup === groupIndex ? 1 : 0.6
              }}
              transition={{ duration: 1.5 }}
            >
              {/* Image */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="100vw"
                className="object-cover"
                priority={currentGroup === groupIndex}
              />

              {/* Text Overlay */}
              <motion.div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <motion.div className={`relative z-10 text-white px-10 w-full h-full flex items-center justify-center pb-4 ${mont.className}`}>
                  <h2 className="h-full w-full text-lg font-bold flex items-end justify-center">{image.text}</h2>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
      </div>
    ))}
  </motion.div>

    {/* Navigation Dots (One per Group) */}
    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
      {Array.from({ length: totalGroups }).map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentIndex(index * groupSize)}
          className={`w-3 h-3 rounded-full transition-all duration-500 ${
            currentGroup === index ? "bg-white w-6" : "bg-white/50"
          }`}
        />
      ))}
    </div>
  </div>



      {/* div5 */}
      <motion.div 
        ref={div5Ref} 
        className='h-[90vh] w-screen relative z-10 overflow-hidden flex flex-col items-center justify-center gap-3 text-3xl text-black bg-transparent'
        initial={{ opacity: 0, y: 50 }}
        animate={div5InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className='h-[10vh] w-2/3 flex items-center justify-center py-4'>
          <span className={`text-white text-3xl font-extrabold ${mont.className}`}>About Hotels and Resorts in Blackbuck National Park, Velavadar</span>
        </div>
        <div className='h-[70vh] w-2/3 flex items-center justify-center py4'>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img1.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Living</span>
            <span className={`text-white text-base font-normal text-center ${mont.className}`}>The hotels in Blackbuck National Park in Velavadar stands amidst a beautiful hamlet. The lodges offer accommodation in boutique cottages with en-suite modern and elegant bathrooms. Uniquely designed and well-appointed, each cottage at this hotel in blackbuck national park velavadar has all the contemporary facilities with a deep rooted sense of regional and cultural architecture.</span>
          </div>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img2.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Dining</span>
            <span className={`text-white text-base font-normal text-center ${mont.className}`}>The multi-cuisine restaurant at velavadar lodges render magnificent views of the unique grasslands and scenic landscapes. The restaurant at these resorts in Blackbuck national park offer a variety of exceptional seasonal, regional and fresh foods. The chefs at these velavadar restaurants experiment and create dishes by combining traditional dishes with a modern flair. </span>
          </div>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img3.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Facilites</span>
            <span className={`text-white text-base font-normal text-center ${mont.className}`}>The velavadar Blackbuck national park hotels are situated amidst a picturesque setting surrounded by water bodies and golden grasslands. Cottage in these lodges have a separate private outdoor sitting space. Moreover, these cottages are equipped with all the latest comforts in contrast with the traditional, regional architecture.</span>
          </div>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img4.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Team</span>
            <span className={`text-white text-base font-normal text-center ${mont.className}`}>We, at the Safaris India Tours, are a team of hardworking, professional and self-inspired individuals. What makes us unconventional is our innate passion for wildlife and nature. Our team works together to provide our guests with a comfortable and memorable stay and tours.</span>
          </div>
        </div>
        <div className='h-[15vh] w-2/3 flex items-center justify-center'>
        <motion.button
          className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
            className="relative z-10 text-white"
            whileHover={{color: 'black',transition: { duration: 0.3 }}}
          >
            Read More
          </motion.span>
        </motion.button>
        </div>
      </motion.div>



      {/* Home Page Div 6 */}
      <div ref={div6Ref} className='h-[60vh] w-screen flex flex-col items-center justify-center relative'>
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className='h-auto w-full flex items-center justify-center gap-2'>
          <div className='h-full w-1/3 flex flex-col items-start justify-start gap-3 p-4'>
            <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Conservation Efforts at Blackbuck National Park</span>
            <span className={`text-white text-2xl font-extrabold ${mont.className}`}>Responsible Tourism in Velavadar</span>
            <span className={`text-white text-base font-normal ${mont.className}`}>The conservation of an endangered species of blackbucks is the main highlight of this park. Once, blackbucks could be seen roaming around the entire subcontinent, but today its population is concentrated within the borders of Gujarat, India. The steady focus and thoughtful conservation in protecting these endangered species have ultimately proved to be a fruitful endeavour. From 200 in the 1960s to above a whopping 3000 today, the efforts of preserving these almost extinct animal species have paid off. As a result, you can often find herds of blackbucks dotted in gold grassland roaming around in the northern part of the park.</span>
          </div>
          <div className='h-full w-1/3 flex flex-col items-start justify-start gap-3 p-4'>
            <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Why visit Blackbuck National Park at Velavadar?</span>
            <span className={`text-white text-2xl font-extrabold ${mont.className}`}>Wildlife at Blackbuck National Park</span>
            <span className={`text-white text-base font-normal ${mont.className}`}>The national park is also home to a large number of exotic and unique biodiversity. The sanctuary is one of the most suitable places to see striped hyenas, a rarely seen species. You can also witness the prime predator of the park, the Indian wolf. A walk through the park can give visitors a chance to catch sights of many smaller but beautiful mammals such as jungle cats, hare, golden jackal, and Indian foxes. The park is a delight for bird-watchers as it beholds sights of many exquisite and rare birds such as lesser florican, white storks, pelicans, and harrier.</span>
          </div>
        </div>
        <motion.button
          className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
            className="relative z-10 text-white"
            whileHover={{color: 'black',transition: { duration: 0.3 }}}
          >
            Know More
          </motion.span>
        </motion.button>
      </div>

      {/* Home Page Div 7 */}
      {/* <div ref={div7Ref} className='h-[80vh] w-screen flex items-center justify-center home-page-div8 relative'>
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>
        <div className='h-full w-2/3 flex flex-col items-start justify-start gap-7 p-4'>
          <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Why Us?</span>
          <span className={`text-white text-base font-bold ${mont.className}`}>We believe that the conservation of nature and preservation of wildlife should be our primary concern in order to achieve sustainability and ecological balance. Thus, we provide guided tours of the Blackbuck national park to introduce visitors to the unique biodiversity and stunning natural beauty of the sanctuary. Our idyllic lodges are located at a safe distance from the park and accommodates all kinds of travellers into its luxurious spaces. The lodges are beautifully designed to provide a blend of adventure and luxury to its visitors. They are especially beneficial for people who want to get away from the hustle bustle of noisy cities and just wish to bask in the serenity and warmth of nature. Moreover, our Blackbuck national park safaris are an equally tranquil respite from citylife as travellers find themselves in the midst of wilderness and learn about the diverse flora and fauna of the park.</span>
          <div className='h-auto w-full flex items-center justify-center gap-4'>
            <span className={`text-white text-base font-normal ${mont.className}`}>Life is a continuous process of learning and experiencing new things meanwhile feeling different emotions at the same time. Without adventure and the thrill of discovering something unknown, our lives will turn into a thing to be lived rather than a story to be told. This is precisely what our vision embodies – creating delightful and memorable travel experiences for people to reminisce over coffee tables and family dinners. Our quality services and unparalleled hospitality are the foundations of our growth and success in the hospitality industry.</span>
            <span className={`text-white text-base font-normal ${mont.className}`}>The thirst for adventure can drive people to faraway places and what better place to see than the famous Blackbuck national park. We are a committed group of professionals who can appease your longing for an adrenaline rush with tailored tours, safaris and luxurious accommodations. If you think that an experience is just a moment in time, allow us to turn those precious moments into an action-packed adventure into a wonderful land that is way beyond your wildest dreams.</span>
          </div>
          <div className='h-auto w-full flex items-center justify-center'>
          <motion.button
          className={`relative border-2 border-white px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
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
            className="relative z-10 text-white"
            whileHover={{color: 'black',transition: { duration: 0.3 }}}
          >
            Contact Us
          </motion.span>
        </motion.button>
          </div>
        </div>
      </div> */}

      {/* Home Page Div 7 */}
      <div ref={div7Ref} className='h-[80vh] w-screen flex items-center justify-center home-page-div8 relative'><WhyUs/></div>


      {/* Home Page Div 8 */}
      <div ref={div8Ref} className='min-h-[80vh] w-screen flex items-center justify-center relative'>
        {/* Top Fade */}
        <div className="absolute top-0 left-0 w-full h-[10vh] bg-gradient-to-b from-white/40 to-transparent"></div>

        <div className='h-full w-2/3 flex flex-col items-start justify-start gap-7 p-4'>
          <span className={`text-white text-3xl font-extrabold ${mont.className}`}>Frequently Asked Questions</span>
          <div className="h-3/4 w-full overflow-y-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-white p-4">
                <button 
                    className={`w-full text-left text-lg bsd text-white flex justify-between items-center cursor-pointer ${mont.className}`}
                    onClick={() => toggleAcc(index)}
                >
                    {faq.question}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                    className={`overflow-hidden ${mont.className} text-white text-base font-bold transition-all duration-500 ease-in-out ${
                      openIndex === index ? "opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


    </>
  );
}