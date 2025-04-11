"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { Playfair, Playfair_Display, Playfair_Display_SC } from 'next/font/google'
import Lpimg1 from './components/Lpimg1';
import Lpimg2 from './components/Lpimg2';
import Lpimg3 from './components/Lpimg3';

const fp = Playfair({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })
const fpd = Playfair_Display({weight: ['400', '500', '600', '700', '800', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-pd', adjustFontFallback: true})
const fpdsc = Playfair_Display_SC({weight: ['400', '700', '900'], style: ['normal'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-pdsc', adjustFontFallback: true})

const images = [
  { src: "/lpimg1.png", bgClass: "lp-img-1", info: <Lpimg1/>},
  { src: "/lpimg2.png", bgClass: "lp-img-2", info: <Lpimg2/>},
  { src: "/lpimg3.png", bgClass: "lp-img-3", info: <Lpimg3/>}
];


const faqs = [
  { question: "What is the entry fee for Velavadar Blackbuck National Park?", answer: "The entry fee for Velavadar National Park is USD 50 per permit for Foreign nationals and INR 500 for Indian citizens." },
  { question: "What is the Blackbuck National Park known for?", answer: "Primarily declared for Blackbucks, the sanctuary in Velavadar is also the biggest breeding ground for Harriers. The road divided the safari park into wetlands and grasslands; both sides are accessible during a safari. Along with Blackbucks, blue bulls, harriers, lesser floricans, and Indian foxes are found in Blackbuck National Park." },
  { question: "What are timings for safari in Blackbuck Velavadar National park?", answer: "SAFARI TIMING: Morning 06:30 Hrs. to 09:30 Hrs, Evening 15:00 Hrs. to 18:00 Hrs" },
  { question: "What is Velavadar famous for?", answer: "Velavadar National Park near Bhavnagar was private grassland of the Maharaja originally. Famous for Blackbucks this national park is also to be visited for its birds." },
  { question: "How much is the Jeep safari in Velavadar National Park?", answer: "Cost of safari in Blackbuck national Park at Velavadar is USD 122 for foreign nationals and INR 5500 for Indian Nationals per jeep per safari. The prices mentioned are inclusive of forest permit charge, guide charges, gypsy rental, pick up & drop from resort." },
  { question: "What is the camera fee at Velavadar?", answer: "The camera fee at Velavadar NP is USD 20 per camera per day." },
];

const galleryImages = [
  { id: 1, src: '/homePageDiv4img1.png', alt: 'div4img' },
  { id: 2, src: '/homePageDiv4img2.png', alt: 'div4img' },
  { id: 3, src: '/homePageDiv4img3.png', alt: 'div4img' },
  { id: 4, src: '/homePageDiv4img4.png', alt: 'div4img' },
  { id: 5, src: '/homePageDiv4img5.png', alt: 'div4img' },
  { id: 6, src: '/homePageDiv4img6.png', alt: 'div4img' },
  { id: 7, src: '/homePageDiv4img7.png', alt: 'div4img' },
  { id: 8, src: '/homePageDiv4img8.png', alt: 'div4img' },
  { id: 9, src: '/homePageDiv4img9.png', alt: 'div4img' },
  { id: 10, src: '/homePageDiv4img10.png', alt: 'div4img' },
  { id: 11, src: '/homePageDiv4img11.png', alt: 'div4img' },
  { id: 12, src: '/homePageDiv4img12.png', alt: 'div4img' },
  { id: 13, src: '/homePageDiv4img13.png', alt: 'div4img' },
];

export default function Home() {
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
  
  return (
    <>
      <div className={`h-[80vh] w-screen flex-col items-center justify-center ${fpdsc.className}`}>
        <div className="h-[10vh] w-screen"></div>

        <div className="relative h-[70vh] w-screen overflow-hidden">
      {/* Background with smooth transition */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence initial={false}>
          <motion.div
            className={`absolute inset-0 ${images[currentIndex].bgClass}`}
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

      </div>

      {/* Home Page Div 2 */}
      <div className='w-screen h-[70vh] home-page-div2 flex items-center justify-center'>
        <div className='w-1/3 h-full p-4 gap-4 flex flex-col items-start justify-center'>
          <span className={`text-swamp-skin text-xl font-normal ${fp.className}`}>What makes Blackbuck National Park, Velavadar the best places to see Indian Wolves, Blackbucks, Montagu Harrier and Lesser Florican</span>
          <span className={`text-dark-skin text-2xl font-extrabold ${fpd.className}`}>Velavadar National Park and its Wildlife</span>
          <span className={`text-lg text-black ${fp.className}`}>Blackbuck national park is a hidden realm holding all the gems of nature under one roof. The beautiful views of the exotic and exquisite wildlife and grasslands compel travelers from all over the world to visit and spend time in nature’s bounty. Lying between two rivers, Parvaila and Alang, which flow into the Gulf of Khambhat, you can witness many wolves living and strolling around these water bodies.</span>
          <motion.button
            className={`relative px-4 py-2 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
            initial={{
                backgroundColor: '#545e66',
                backdropFilter: 'blur(0px)'
            }}
            whileHover={{
                backdropFilter: 'blur(7px)',
                transition: { duration: 0.3 },
                opacity: 0.77,
                scale: 1.1
            }}
            whileTap={{
                scale: 0.95,
                opacity: 0.54
            }}
            >
            <motion.span className="relative z-10 text-white">Read More</motion.span>
          </motion.button>
            <div className='w-full h-auto flex items-center justify-center my-7'>
              <div className='w-1/3 h-auto flex flex-col items-center justify-center'>
                <Image src='/homepageDiv2img1.png' alt="1" width={100} height={100} className="object-contain"/>
                <span className={`text-swamp-skin text-xl font-bold ${fp.className}`}>Wildlife</span>
              </div>
              <div className='w-1/3 h-auto flex flex-col items-center justify-center'>
                <Image src='/homepageDiv2img2.png' alt="2" width={100} height={100} className="object-contain"/>
                <span className={`text-swamp-skin text-xl font-bold ${fp.className}`}>Safari</span>
              </div>
              <div className='w-1/3 h-auto flex flex-col items-center justify-center'>
                <Image src='/homepageDiv2img3.png' alt="3" width={100} height={100} className="object-contain"/>
                <span className={`text-swamp-skin text-xl font-bold ${fp.className}`}>History</span>
              </div>
            </div>
        </div>
        <div className='w-1/3 h-full flex flex-col items-center justify-center p-4 gap-4'>
          <Image src='/lpimg3.png' alt="3" width={470} height={470} className="object-contain"/>
          <div className='flex flex-col items-center text-right justify-end gap-4'>
            <span className={`text-swamp-skin text-2xl font-extrabold ${fpd.className}`}>Want to see a grassland ecosystem with Indian Wolves, herd of blackbuck in India?</span>
            <span className={`text-lg text-black ${fp.className}`}>Indian Wolf sightings are difficult, but if you do sight one, its an unparalleled experience. Though at Velavadar, blackbucks are sighted easily. If you are lucky, a blackbuck territorial fight is a rare sight you might witness.</span>
          </div>
        </div>
      </div>

      
      {/* Home Page Div 3 */}
      <motion.div
      className="h-[100vh] w-screen flex flex-col items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ amount: 0.2 }}>
    
      {/* <div className='h-[100vh] w-screen flex flex-col items-center justify-center'> */}
        <div className='h-auto w-full flex items-center justify-center'>
          <div className='h-auto w-1/3 flex flex-col items-center justify-center p-4 gap-2'>
            <span className={`text-dark-skin text-2xl font-extrabold ${fpd.className}`}>The Blackbuck Lodge</span>
            <span className={`text-swamp-skin text-xl font-bold ${fp.className}`}>A Luxury Hotel in Velavadar Park</span>
            <Image src='/homepageDiv3lodge1.png' alt="1" width={470} height={470} className="object-contain"/>
            <motion.button
              className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
              initial={{
                  backgroundColor: '#545e66',
                  backdropFilter: 'blur(0px)'
              }}
              whileHover={{
                  backdropFilter: 'blur(7px)',
                  transition: { duration: 0.3 },
                  opacity: 0.77,
                  scale: 1.1
              }}
              whileTap={{
                  scale: 0.95,
                  opacity: 0.54
              }}
              >
              <motion.span className="relative z-10 text-white">Enquire Now</motion.span>
            </motion.button>
          </div>
          <div className='h-auto w-1/3 flex flex-col items-center justify-center p-4 gap-2'>
            <span className={`text-dark-skin text-2xl font-extrabold ${fpd.className}`}>Blackbuck Safari Lodge</span>
            <span className={`text-swamp-skin text-xl font-bold ${fp.className}`}>Boutique Resort in Velavadar</span>
            <Image src='/homepageDiv3lodge2.png' alt="2" width={470} height={470} className="object-contain"/>
            <motion.button
              className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
              initial={{
                  backgroundColor: '#545e66',
                  backdropFilter: 'blur(0px)'
              }}
              whileHover={{
                  backdropFilter: 'blur(7px)',
                  transition: { duration: 0.3 },
                  opacity: 0.77,
                  scale: 1.1
              }}
              whileTap={{
                  scale: 0.95,
                  opacity: 0.54
              }}
              >
              <motion.span className="relative z-10 text-white">Enquire Now</motion.span>
            </motion.button>
          </div>
        </div>
        <div className='h-auto w-full flex items-center justify-center'>
          <div className='h-auto w-2/3 flex items-center justify-center'>
            <div className='h-auto w-2/3 flex flex-col items-center justify-center gap-4 my-7'>
              <span className={`text-dark-skin text-2xl font-extrabold ${fpd.className}`}>Accommodation and Safari in Blackbuck National Park, Velavadar</span>
              <span className={`text-swamp-skin text-base font-normal ${fp.className}`}>Blackbuck National Park is an ideal travel destination for people who have a penchant for nature and adventure. The park provides a beautiful panoramic view of the diverse flora and fauna species and has a unique and rare grassland ecosystem. The park lies between the two rivers that flow into the Gulf of Khambhat, making it a utopian experience for the visitors. In addition, visitors can witness many wolves residing and gallivanting around the water bodies.</span>
              <span className={`text-swamp-skin text-base font-normal ${fp.className}`}>Being a safe space for many unique mammals and a dedicated conservatory of blackbucks, the Blackbuck national park is a beautiful place to witness the beauty of nature and wildlife in its most ideal form. Its unique grassland ecosystem is one of the most fascinating parts of this park. Though, a preservation program to protect the wolf, the lesser florican, and the blackbucks are still going on. Nevertheless, it is a perfect place for bird lovers and wildlife enthusiasts to unwind and have a thrilling time with their loved ones.</span>
            </div>
            <div className='h-auto w-1/4 flex flex-col items-center justify-center p-4 gap-2 text-center'>
              <span className={`text-swamp-skin text-lg font-normal ${fp.className}`}>Book your stay and safari in Blackbuck National Park</span>
              <span className={`text-dark-skin text-xl font-extrabold ${fpd.className}`}>Stay at Velavadar Blackbuck National Park</span>
              <motion.button
                className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
                initial={{
                    backgroundColor: '#545e66',
                    backdropFilter: 'blur(0px)'
                }}
                whileHover={{
                    backdropFilter: 'blur(7px)',
                    transition: { duration: 0.3 },
                    opacity: 0.77,
                    scale: 1.1
                }}
                whileTap={{
                    scale: 0.95,
                    opacity: 0.54
                }}
                >
                <motion.span className="relative z-10 text-white">Book Now</motion.span>
              </motion.button>
            </div>
          </div>
        </div>
      {/* </div> */}
      </motion.div>


      {/* Home Page Div 4 */}
      <div className='h-[100vh] w-screen home-page-div4 flex items-center justify-center'>
        <div className="h-4/5 w-4/5 bg-black opacity-54 rounded-xl flex items-center justify-center" style={{ backdropFilter: 'blur(7px)' }}>
          <div className='h-full w-2/3 flex flex-col items-start justify-center p-7 gap-3'>
            <span className={`text-light-skin text-2xl font-extrabold ${fpd.className}`}>About Blackbuck National park, Velavadar</span>
            <span className={`text-white text-base font-normal ${fp.className}`}>Blackbuck National Park is a hidden gem situated in the Bhavnagar District of Gujarat state, India that offers picturesque views of its unique grassland ecosystem and exquisite wildlife. The park was established in 1976 and is spread over an enormous area of 34.08 km². In earlier times, the park used to be the hunting grounds for the Maharaja of Bhavnagar, Gujarat. Initially, it was a protected area of 18 square km but later in 1980, an area of 16 square km was added to make it a total of 34 square km. Although‌ ‌the‌ ‌park‌ ‌is‌ ‌one‌ ‌of‌ ‌the‌ ‌smallest‌ ‌in‌ ‌the‌ ‌country,‌ ‌it‌ ‌is‌ ‌still‌ ‌home to more than 140 species of birds,14 animal species, 95 species of plants and numerous reptiles. The unusual topography of the park comprises unique grasslands, mudflats, saline plains, and shrublands.</span>
            <span className={`text-white text-base font-normal ${fp.className}`}>The‌ ‌highlight of the national‌ ‌park‌ ‌is‌ ‌its‌ ‌rare‌‌ ‌population‌ ‌of‌ ‌blackbucks.‌ ‌You can often spot herds of these‌ ‌beautiful‌ ‌and‌ ‌extremely‌ ‌fast‌ ‌antelopes‌ ‌strutting‌‌ ‌across‌ ‌the‌ ‌pale‌ ‌gold‌ ‌grasslands.‌ From a population of mere 200 in the 1960s to more than 3000 today, the goal of preserving these endangered animal species has yielded good and effective results. The magnificent view of nature and the marvelous wonders of the Blackbuck national park make for an appealing travel destination for bird lovers, nature photographers, and travel enthusiasts worldwide.</span>
            
            <span className={`text-light-skin text-xl font-extrabold ${fpd.className}`}>Gallery - Blackbuck National Park, Velavadar</span>
            <div className='h-auto w-full overflow-hidden'>
              <motion.div 
                ref={ref}
                className="flex gap-4 w-full overflow-x-auto scrollbar-hide py-4"
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
                  className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
                  initial={{
                      backgroundColor: '#545e66',
                      backdropFilter: 'blur(0px)'
                  }}
                  whileHover={{
                      backdropFilter: 'blur(7px)',
                      transition: { duration: 0.3 },
                      opacity: 0.77,
                      scale: 1.1
                  }}
                  whileTap={{
                      scale: 0.95,
                      opacity: 0.54
                  }}
                  >
                  <motion.span className="relative z-10 text-white">Read More</motion.span>
                </motion.button>
                <motion.button
                  className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
                  initial={{
                      backgroundColor: '#545e66',
                      backdropFilter: 'blur(0px)'
                  }}
                  whileHover={{
                      backdropFilter: 'blur(7px)',
                      transition: { duration: 0.3 },
                      opacity: 0.77,
                      scale: 1.1
                  }}
                  whileTap={{
                      scale: 0.95,
                      opacity: 0.54
                  }}
                  >
                  <motion.span className="relative z-10 text-white">How To Reach</motion.span>
                </motion.button>
            </div>

          </div>
          <div className='h-full w-1/3 flex flex-col items-center justify-center p-7'>
            <span className={`text-light-skin text-xl font-extrabold my-4 ${fpd.className}`}>Contact our Safari Specialist</span>
            <form className="w-full space-y-4">
            {/* Name Input */}
            <div className="space-y-1">
              <label htmlFor="name" className="block text-sm font-medium text-white">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
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
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
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
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
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
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white border border-white/30 focus:border-white/50 focus:ring-1 focus:ring-white/50 outline-none transition"
                // placeholder="Tell us about your safari interests..."
              ></textarea>
            </div>
            {/* Submit Button */}
            <motion.button
              type="submit"
              className={`relative w-full mt-6 px-6 py-3 rounded-full text-lg font-bold cursor-pointer flex items-center justify-center ${fp.className}`}
              initial={{
                backgroundColor: '#545e66',
                backdropFilter: 'blur(0px)'
              }}
              whileHover={{
                backdropFilter: 'blur(7px)',
                transition: { duration: 0.3 },
                opacity: 0.77,
                scale: 1.1
              }}
              whileTap={{
                scale: 0.95,
                opacity: 0.54
              }}
            >
              <span className="relative z-10 text-white">Submit</span>
            </motion.button>
          </form>
          </div>
        </div>
      </div>


      {/* Home Page Div 5 */}
      <div className='h-[47vh] w-screen overflow-hidden flex flex-col items-center justify-center'>
        <span>&nbsp;</span>
        <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Things to Do</span>
        <span className={`text-swamp-skin text-xl font-bold ${fp.className}`}>Activities at Blackbuck National Park, Velavadar</span>
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


      {/* Home Page Div 6 */}
      <div className='h-[120vh] w-screen flex flex-col items-center justify-center home-page-div6'>
        <div className='h-[10vh] w-2/3 flex items-center justify-center'>
          <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>About Hotels and Resorts in Blackbuck National Park, Velavadar</span>
        </div>
        <div className='h-[95vh] w-2/3 flex items-center justify-center'>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img1.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Living</span>
            <span className={`text-dark-skin text-base font-normal ${fp.className}`}>The hotels in Blackbuck National Park in Velavadar stands amidst a beautiful hamlet. The lodges offer accommodation in boutique cottages with en-suite modern and elegant bathrooms. Uniquely designed and well-appointed, each cottage at this hotel in blackbuck national park velavadar has all the contemporary facilities with a deep rooted sense of regional and cultural architecture. The lodges are spread over a wide expanse of acres of land and have abundant greenery, flora and fauna. The safari gate of the Blackbuck National Park is just a short drive of 10 minutes from most of the lodge premises. The lodges offer an extremely picturesque view of the pristine grassland where travellers can catch a sight of hyenas, foxes, wolves, jungle cats, and blackbucks. The Blackbuck national park velavadar is a perfect location to stay for wildlife enthusiasts, nature lovers and passionate photographers.</span>
          </div>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img2.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Dining</span>
            <span className={`text-dark-skin text-base font-normal ${fp.className}`}>The multi-cuisine restaurant at velavadar lodges render magnificent views of the unique grasslands and scenic landscapes. The restaurant at these resorts in Blackbuck national park offer a variety of exceptional seasonal, regional and fresh foods. The chefs at these velavadar restaurants experiment and create dishes by combining traditional dishes with a modern flair. The quality of food is unsurpassed, and there is a careful selection of what herbs and vegetables are being used. A majority of the required vegetables, herbs, and meals are sourced directly from our organic farm and trusted local vendors around the velavadar resort. There is a focus on the abundance of flavors, experimenting with elements, and spanning of various national and international eating traditions.</span>
          </div>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img3.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Facilites</span>
            <span className={`text-dark-skin text-base font-normal ${fp.className}`}>The velavadar Blackbuck national park hotels are situated amidst a picturesque setting surrounded by water bodies and golden grasslands. Cottage in these lodges have a separate private outdoor sitting space. Moreover, these cottages are equipped with all the latest comforts in contrast with the traditional, regional architecture. The lodge also offers a multi-cuisine dining hall along with a fireplace that overlooks the expanses of wild grasslands over the Sal forested hills. In addition, these lodges also offers an option of an outdoor area breakfast or dinner. The most exotic place in these lodges are their gazebo or watchtower facing a water pond. Bird and nature lovers can sit there for hours and enjoy the intrinsic scenic beauty. These lodges also provides a creatively designed spa for the visitors who wish to pamper themselves after an exciting velavadar safari tour.</span>
          </div>
          <div className='h-full w-1/4 flex flex-col items-center justify-start gap-3 p-3'>
            <Image src="/homePageDiv5img4.png" alt="4" width={354} height={354} className="object-cover rounded-lg"/>
            <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Team</span>
            <span className={`text-dark-skin text-base font-normal ${fp.className}`}>We, at the Safaris India Tours, are a team of hardworking, professional and self-inspired individuals. What makes us unconventional is our innate passion for wildlife and nature. Our team works together to provide our guests with a comfortable and memorable stay and tours. Our team works efficiently and with utmost dedication to create awareness about the endangerment of our biodiversity and how it has the potential to impact our daily lives. We strive to promote nature for the better. Ultimately, we hope for a safer and more reliable future for our wild spaces and it is our firm belief that we can create a difference.</span>
          </div>
        </div>
        <div className='h-[15vh] w-2/3 flex items-center justify-center'>
          <motion.button
            type="submit"
            className={`relative px-6 py-3 rounded-full text-lg font-bold cursor-pointer flex items-center justify-center ${fp.className}`}
            initial={{
              backgroundColor: '#64360f',
              backdropFilter: 'blur(0px)'
            }}
            whileHover={{
              backdropFilter: 'blur(7px)',
              transition: { duration: 0.3 },
              opacity: 0.77,
              scale: 1.1
            }}
            whileTap={{
              scale: 0.95,
              opacity: 0.54
            }}
          >
            <span className="relative z-10 text-white">Read More</span>
          </motion.button>
        </div>
      </div>

      {/* Home Page Div 7 */}
      <div className='h-[60vh] w-screen flex flex-col items-center justify-center'>
        <div className='h-auto w-full flex items-center justify-center gap-2'>
          <div className='h-full w-1/3 flex flex-col items-start justify-start gap-3 p-4'>
            <span className={`text-swamp-skin text-3xl font-extrabold ${fpd.className}`}>Conservation Efforts at Blackbuck National Park</span>
            <span className={`text-dark-skin text-2xl font-extrabold ${fpd.className}`}>Responsible Tourism in Velavadar</span>
            <span className={`text-swamp-skin text-base font-normal ${fp.className}`}>The conservation of an endangered species of blackbucks is the main highlight of this park. Once, blackbucks could be seen roaming around the entire subcontinent, but today its population is concentrated within the borders of Gujarat, India. The steady focus and thoughtful conservation in protecting these endangered species have ultimately proved to be a fruitful endeavour. From 200 in the 1960s to above a whopping 3000 today, the efforts of preserving these almost extinct animal species have paid off. As a result, you can often find herds of blackbucks dotted in gold grassland roaming around in the northern part of the park.</span>
          </div>
          <div className='h-full w-1/3 flex flex-col items-start justify-start gap-3 p-4'>
            <span className={`text-swamp-skin text-3xl font-extrabold ${fpd.className}`}>Why visit Blackbuck National Park at Velavadar?</span>
            <span className={`text-dark-skin text-2xl font-extrabold ${fpd.className}`}>Wildlife at Blackbuck National Park</span>
            <span className={`text-swamp-skin text-base font-normal ${fp.className}`}>The national park is also home to a large number of exotic and unique biodiversity. The sanctuary is one of the most suitable places to see striped hyenas, a rarely seen species. You can also witness the prime predator of the park, the Indian wolf. A walk through the park can give visitors a chance to catch sights of many smaller but beautiful mammals such as jungle cats, hare, golden jackal, and Indian foxes. The park is a delight for bird-watchers as it beholds sights of many exquisite and rare birds such as lesser florican, white storks, pelicans, and harrier.</span>
          </div>
        </div>
        <motion.button
          className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
          initial={{
              backgroundColor: '#545e66',
              backdropFilter: 'blur(0px)'
          }}
          whileHover={{
              backdropFilter: 'blur(7px)',
              transition: { duration: 0.3 },
              opacity: 0.77,
              scale: 1.1
          }}
          whileTap={{
              scale: 0.95,
              opacity: 0.54
          }}
          >
          <motion.span className="relative z-10 text-white">Know More</motion.span>
        </motion.button>
      </div>

      {/* Home Page Div 8 */}
      <div className='h-[60vh] w-screen flex items-center justify-center home-page-div8'>
        <div className='h-full w-2/3 flex flex-col items-start justify-start gap-7 p-4'>
          <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Why Us?</span>
          <span className={`text-swamp-skin text-base font-bold ${fp.className}`}>We believe that the conservation of nature and preservation of wildlife should be our primary concern in order to achieve sustainability and ecological balance. Thus, we provide guided tours of the Blackbuck national park to introduce visitors to the unique biodiversity and stunning natural beauty of the sanctuary. Our idyllic lodges are located at a safe distance from the park and accommodates all kinds of travellers into its luxurious spaces. The lodges are beautifully designed to provide a blend of adventure and luxury to its visitors. They are especially beneficial for people who want to get away from the hustle bustle of noisy cities and just wish to bask in the serenity and warmth of nature. Moreover, our Blackbuck national park safaris are an equally tranquil respite from citylife as travellers find themselves in the midst of wilderness and learn about the diverse flora and fauna of the park.</span>
          <div className='h-auto w-full flex items-center justify-center gap-4'>
            <span className={`text-swamp-skin text-base font-normal ${fp.className}`}>Life is a continuous process of learning and experiencing new things meanwhile feeling different emotions at the same time. Without adventure and the thrill of discovering something unknown, our lives will turn into a thing to be lived rather than a story to be told. This is precisely what our vision embodies – creating delightful and memorable travel experiences for people to reminisce over coffee tables and family dinners. Our quality services and unparalleled hospitality are the foundations of our growth and success in the hospitality industry.</span>
            <span className={`text-swamp-skin text-base font-normal ${fp.className}`}>The thirst for adventure can drive people to faraway places and what better place to see than the famous Blackbuck national park. We are a committed group of professionals who can appease your longing for an adrenaline rush with tailored tours, safaris and luxurious accommodations. If you think that an experience is just a moment in time, allow us to turn those precious moments into an action-packed adventure into a wonderful land that is way beyond your wildest dreams.</span>
          </div>
          <div className='h-auto w-full flex items-center justify-center'>
            <motion.button
              className={`relative px-4 py-2 my-3 rounded-full text-lg font-bold cursor-pointer ${fp.className}`}
              initial={{
                  backgroundColor: '#545e66',
                  backdropFilter: 'blur(0px)'
              }}
              whileHover={{
                  backdropFilter: 'blur(7px)',
                  transition: { duration: 0.3 },
                  opacity: 0.77,
                  scale: 1.1
              }}
              whileTap={{
                  scale: 0.95,
                  opacity: 0.54
              }}
              >
              <motion.span className="relative z-10 text-white">Contact Us</motion.span>
            </motion.button>
          </div>
        </div>
      </div>


      {/* Home Page Div 9 */}
      <div className='min-h-[80vh] w-screen flex items-center justify-center'>
        <div className='h-full w-2/3 flex flex-col items-start justify-start gap-7 p-4'>
          <span className={`text-dark-skin text-3xl font-extrabold ${fpd.className}`}>Frequently Asked Questions</span>
          <div className="h-3/4 w-full overflow-y-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-dark-skin p-4">
                <button 
                    className={`w-full text-left text-xl bsd text-dark-skin flex justify-between items-center cursor-pointer ${fp.className}`}
                    onClick={() => toggleAcc(index)}
                >
                    {faq.question}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                    className={`overflow-hidden ${fp.className} text-swamp-skin text-lg font-bold transition-all duration-500 ease-in-out ${
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






    