"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Maps from './components/Maps';
import Link from 'next/link';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const abtDiv2galleryImages = [
  { id: 1, src: './abtDiv2Gimg1.png', alt: 'abtDiv2Gimg1' },
  { id: 2, src: './abtDiv2Gimg2.png', alt: 'abtDiv2Gimg2' },
  { id: 3, src: './abtDiv2Gimg3.png', alt: 'abtDiv2Gimg3' },
  { id: 4, src: './abtDiv2Gimg4.png', alt: 'abtDiv2Gimg4' },
  { id: 5, src: './abtDiv2Gimg5.png', alt: 'abtDiv2Gimg5' },
  { id: 6, src: './abtDiv2Gimg6.png', alt: 'abtDiv2Gimg6' },
  { id: 7, src: './abtDiv2Gimg7.png', alt: 'abtDiv2Gimg7' },
  { id: 8, src: './abtDiv2Gimg8.png', alt: 'abtDiv2Gimg8' },
  { id: 9, src: './abtDiv2Gimg9.png', alt: 'abtDiv2Gimg9' },
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
      <div
        ref={div0Ref}
        className={`${mobileView ? "h-[40vh]" : "h-[85vh]"} w-screen flex flex-col items-end justify-end ${mobileView ? "px-5 py-3" : "px-47 py-38"} relative overflow-hidden ${mont.className}`}>
        {/* Background Parallax Effect */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: "url('/blackbucknationalpark/abtHomeImg.png')",
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
            About
          </span>
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
            <span className={`${mobileView ? "text-xs" : "text-lg"}`}>&nbsp;► About</span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`h-auto  w-screen flex flex-col items-center justify-center ${mont.className}`}>
        <div className={`h-[15vh] w-full flex items-center justify-center ${mobileView ? "text-sm" : "text-2xl"} text-earth-faded-green`}>
          About&nbsp;
          <span className="text-earth-brown font-bold">Blackbuck National Park,&nbsp;</span>
          <span className="text-earth-dark-green font-bold">Velavadar</span>
        </div>

        {mobileView ? (
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center">
            <Image
              src="./abtDiv1Img1.png"
              alt="abtDiv1Img1"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Blackbuck Velavadar National Park and It's Wildlife</span>
              <span className='text-xs text-white'>
                Blackbuck National Park is a repository of rich and rustic biodiversity with a unique grassland ecosystem. The park lies between two rivers that flow into the Gulf of Khambhat which expands into the custard, dusty-colored fields and makes it a utopian landscape for the visitors. The primary attraction of this park is its preservation of a rare species of blackbucks. Consequently, you can witness these beautiful antelopes moving around the entire park in all their glory. The park is a large haven for multitudes of distinct flora and fauna. Hence, it is a spectacularly exciting place to visit and experience the beauty of nature and wildlife.
              </span>
            </div>
          </div>
        ) : (
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown'>Blackbuck Velavadar National Park and It's Wildlife</span>
              <span className='text-base text-earth-brown'>
                Blackbuck National Park is a repository of rich and rustic biodiversity with a unique grassland ecosystem. The park lies between two rivers that flow into the Gulf of Khambhat which expands into the custard, dusty-colored fields and makes it a utopian landscape for the visitors. The primary attraction of this park is its preservation of a rare species of blackbucks. Consequently, you can witness these beautiful antelopes moving around the entire park in all their glory. The park is a large haven for multitudes of distinct flora and fauna. Hence, it is a spectacularly exciting place to visit and experience the beauty of nature and wildlife.
              </span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./abtDiv1Img1.png"
                  alt="abtDiv1Img1"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        )}

        <div className={` w-4/5 flex ${mobileView?"flex-col h-auto py-10":"h-[30vh]"} items-center justify-center`}>
          <div className={`h-full ${mobileView?"w-full":"w-2/3"} flex flex-col items-end ${mobileView?"text-center":"text-right"} justify-center`}>
            <span className={`${mobileView?"text-sm mb-3":"text-lg"} font-bold text-earth-brown`}>Blackbuck Velavadar National Park and It's Location</span>
            <span className={`${mobileView?"text-xs":"text-base"} text-earth-brown`}>Blackbuck National Park at Velavadar is located in the Bhavnagar District of Gujarat, India. The park was established in July,1976 and is spread over an enormous area of 34.08 square km from the regional headquarter city of Bhavnagar. Initially, it was a protected area of 18 square km. Later, in 1980, an area of 16 square km was added to make it a sum of 34 square km. The Blackbuck National Park is one of the smallest parks in the country and yet serves as a shelter to more than 14 species of mammals, 140 bird species, 95 species of plants, and several reptiles. It is the most exceptional and suitable place for bird lovers and wildlife or nature photographers who love to capture wildlife or nature in its true essence.</span>
          </div>
          <div className={`${mobileView?"h-[40vh] w-full":" h-full w-1/3"} flex items-center justify-center`}>
            <div className="w-2/3 h-4/5 border-2 border-earth-brown rounded-xl"><Maps/></div>
          </div>
        </div>
        {mobileView ? (
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center">
            <Image
              src="./abtDiv1Img3.png"
              alt="abtDiv1Img3"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Blackbuck National Park and Its History</span>
              <span className='text-xs text-white'>
                In earlier times, Blackbuck National Park used to be a grassland (Vidi) of the king of Bhavnagar, used for hunting by renowned hunting cheetahs. The park's unique topography includes grassland, shrublands, mudflats, and saline plains. To the south lies the Gulf of Khambhat, and to the north are agricultural fields and wastelands. It is home to species like Nilgai, Painted Storks, Lesser Florican, Wolves, Wild Cats, Jackals, Rodents, Sarus Cranes, Flamingoes, and Snakes. The Alang river borders the park’s south, making it an ideal wolf habitat.
              </span>
            </div>
          </div>
        ) : (
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown'>Blackbuck National Park and Its History</span>
              <span className='text-base text-earth-brown'>
                In earlier times, Blackbuck National Park used to be a grassland (Vidi) of the king of Bhavnagar, used for hunting by renowned hunting cheetahs. The park's unique topography includes grassland, shrublands, mudflats, and saline plains. To the south lies the Gulf of Khambhat, and to the north are agricultural fields and wastelands. It is home to species like Nilgai, Painted Storks, Lesser Florican, Wolves, Wild Cats, Jackals, Rodents, Sarus Cranes, Flamingoes, and Snakes. The Alang river borders the park’s south, making it an ideal wolf habitat.
              </span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./abtDiv1Img3.png"
                  alt="abtDiv1Img3"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        )}

        {mobileView ? (
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./abtDiv1Img4.png"
              alt="abtDiv1Img4"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-left bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Blackbuck National Park and Its Flora Fauna</span>
              <span className='text-xs text-white'>
                The park is ideal for nature lovers with its scenic diversity of flora and fauna and rare grassland ecosystem. Over 1,000 blackbucks roam freely, especially in the north. It is a protected area where hunting, poaching, and grazing are prohibited. The sanctuary was primarily established to preserve the exotic blackbuck species. Birdwatchers flock here to spot rare birds like the lesser florican, white storks, pelicans, and harriers.
              </span>
            </div>
          </div>
        ) : (
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown'>Blackbuck National Park and Its Flora Fauna</span>
              <span className='text-base text-earth-brown'>
                The park is ideal for nature lovers with its scenic diversity of flora and fauna and rare grassland ecosystem. Over 1,000 blackbucks roam freely, especially in the north. It is a protected area where hunting, poaching, and grazing are prohibited. The sanctuary was primarily established to preserve the exotic blackbuck species. Birdwatchers flock here to spot rare birds like the lesser florican, white storks, pelicans, and harriers.
              </span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./abtDiv1Img4.png"
                  alt="abtDiv1Img4"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        )}

        {mobileView ? (
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center">
            <Image
              src="./abtDiv1Img5.png"
              alt="abtDiv1Img5"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Why Visit Blackbuck National Park, Velavadar?</span>
              <span className='text-xs text-white'>
                Blackbuck National Park is renowned for its scenic beauty, rich wildlife, and peaceful environment. With a significant population of blackbucks and other wildlife, it’s a natural gem. Visitors can also explore temples, archaeological sites, and aviaries nearby. It’s a perfect blend of rustic charm and natural splendor for every explorer.
              </span>
            </div>
          </div>
        ) : (
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown'>Why Visit Blackbuck National Park, Velavadar?</span>
              <span className='text-base text-earth-brown'>
                Blackbuck National Park is renowned for its scenic beauty, rich wildlife, and peaceful environment. With a significant population of blackbucks and other wildlife, it’s a natural gem. Visitors can also explore temples, archaeological sites, and aviaries nearby. It’s a perfect blend of rustic charm and natural splendor for every explorer.
              </span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./abtDiv1Img5.png"
                  alt="abtDiv1Img5"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        )}

        
        <div className="h-[5vh] w-2/3 flex items-center justify-between "></div>
      </div>


      <div ref={div2Ref} className={`min-h-[20vh] w-screen flex flex-col items-center justify-center bg-transparent ${mont.className}`}>
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

      
      
      <div ref={div3Ref} className={`${mobileView ? "h-[150vh]" : "h-screen"} w-screen relative z-10 flex items-center justify-center text-3xl text-black home-page-bg-div3 ${mont.className}`}>
        <div className={`h-4/5 w-4/5 bg-black/54 rounded-xl flex ${mobileView ? "flex-col" : ""} items-center justify-center`} style={{ backdropFilter: 'blur(7px)' }}>
          
          {/* Left - Gallery */}
          <div className={`h-full ${mobileView ? "w-full" : "w-2/3"} flex flex-col items-start justify-center p-7 gap-3`}>
            <span className={`text-white ${mobileView ? "text-base" : "text-xl"} font-bold w-full text-left`}>Gallery - Velavadar Blackbuck National Park</span>

            <div className={`${mobileView ? "h-[30vh]" : "h-auto"} w-full overflow-hidden`}>
              <motion.div
                className={`flex gap-4 ${mobileView ? "h-full" : "grid grid-cols-3 grid-rows-3"} w-full overflow-x-auto scrollbar-hide py-4 cursor-all-scroll`}
                style={{
                  scrollSnapType: mobileView ? 'x mandatory' : undefined,
                  scrollBehavior: 'smooth'
                }}
              >
                {abtDiv2galleryImages.map((image) => (
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

              <button type="submit" className={`border-2 border-white px-3 py-2 my-3 rounded-full ${mobileView ? "text-xs" : "text-sm"} font-light cursor-pointer hover:bg-white text-white hover:text-black transition ${mont.className}`}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}
