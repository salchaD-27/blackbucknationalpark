"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const lodgeFacs = [
  {title: "A Multi-Cuisine Dining Hall", desp: "The multi-cuisine dining hall at this lodge in Velavadar National Park provides majestic views of the golden grasslands and surreal landscapes. The restaurant offers lip-smacking flavours and a variety of exceptional seasonal, regional, and fresh foods."},
  {title: "Outdoor Barbeque and Bush Dinners", desp: "Set amidst the natural hamlet, the lodges offer rustic and natural surroundings where the cuisines promise to satiate your taste buds. Visitors can spend some time enjoying their dinner under a moonlit gazillion stars sky as well."},
  {title: "A Watchtower or Machan", desp: "The beautiful views of nature and bird species are a lodestone for bird lovers. The watchtower offers a chance for visitors to indulge in sightseeing of diverse and rare bird species such as lesser florican, striped hyena, short-toed snake eagle, harrier, etc."},
  {title: "Nature Library", desp: "Located on the outskirts of the city, the park offers outstanding panoramic views of animals and birds in the beautiful land of savannah. The lodges are filled with an abundance of natural elements making them captivating for the spectators."},
  {title: "Live and Interactive Sessions", desp: "Guests can have guided tours and sessions to know more about the local and artistic life of Velavadar. You can chit-chat with experts and naturalists and get to know about the nearby spots and attractions."},
  {title: "Homemade Refreshment", desp: "The lodges also have creatively arranged handmade refreshments from 'Kokum' that offer ayurvedic effects made by experienced staff for the guests who yearn to pamper themselves after a tiring and exciting tour."},
  {title: "An Experienced In-house Naturalist Team", desp: "The Naturalist team at these lodges is ambitious and self-assertive to conduct sustainable tourism. The professional and dedicated teams have extensive knowledge and readily spend their time in the lap of nature."},
  {title: "Tailor-made Bird-watching and Photography Tours", desp: "The lodges are surrounded by a few water bodies that make it a heavenly spot for visitors to spend hours watching birds and basking in the morning sunlight or the evening moonlight. Guided and tailor-made bird-watching and photography tours are also organized for bird lovers and nature photographers."},
  {title: "Holistic Wildlife Experiences", desp: "If you wish to witness the splendid views of nature and wildlife, then you have to visit Velavadar and witness the magical forests and their unique wildlife. You will have a serene and holistic experience by living in the lodges around the park."},
  {title: "Swimming Pool with a Sundeck", desp: "Pools with a sundeck are more versatile as you have the flexibility of staying in or moving out. The lodges in Blackbuck National Park offer swimming pools with a magnificent sundeck."},
  {title: "Kitchen Garden", desp: "The vegetables, herbs, and meals are sourced directly from our organic farm and trusted local vendors. Hence, guests can enjoy earthy ingredients and healthy meals."},
  {title: "Butterfly Farm", desp: "Farms in Velavadar are a nature lover's delight as they can witness a varied range of butterfly species hovering around in the butterfly farm. You can visit these farms to play and have a fun time with your loved ones."},
  {title: "Village Visit", desp: "A village visit is an ideal way to grasp the reality of a unique and rustic way of life. The unpolluted air, clean surroundings, and the organic food provide the authenticity of the kind of lifestyle and culture villages hold."},
  {title: "Cycling and Walking Tours", desp: "Cycles also come in handy if you want to explore nearby places. Visitors can also walk around and observe the regional culture and have a good time with their friends and family."}
];

const div2Imgs = [
  {src: "../lodges-in-Velavadar-Bhavnagar-5.jpg", alt:'Accommodation in Velavadar National Park'},
  {src: "../lodges-in-Velavadar-Bhavnagar-3.jpg", alt:'Activities in Velavadar National Park'},
  {src: "../safari-velavadar-national-park-11.jpg", alt:'Velavadar National Park'},
  {src: "../lodges-in-Velavadar-Bhavnagar-1-1.jpg", alt:''},
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
        <div ref={div0Ref} className={`${mobileView?"h-[500px]":"h-[calc(100vh*7/8)]"} w-screen flex flex-col items-end justify-end ${mobileView?"px-10 py-10":"px-47 py-38"}  relative overflow-hidden ${mont.className}`}>
          {/* Background Parallax Effect */}
         <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ y: offsetY * 0.5 }}
          transition={{ ease: "easeOut", duration: 0.2 }}
        >
          <Image
            src="../blackbuck-1.jpg"
            alt="Lodges in Velavadar Blackbuck National Park"
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
            <span className={`${mobileView?"text:lg":"text-4xl"}  font-bold`}>Accomodation</span>
            <div className='h-auto w-full flex items-center justify-end'>
              <motion.button className={`${mobileView?"text-xs":"text-lg"} text-white/90 py-1 cursor-pointer ${mont.className}`} whileHover={{ scale: 1.1, color: "#b5aa9c" }} whileTap={{ scale: 0.9 }}><Link href="/" passHref>Home</Link></motion.button>
              <span className={`${mobileView?"text-xs":"text-lg"}`}>&nbsp;► Accomodation</span>
            </div>
          </motion.div>
        </div>

        {mobileView ? (
          <>
          <div className={`w-full h-[100px] flex items-center justify-center text-sm font-semibold gap-2 text-earth-brown bg-opacity-80 backdrop-blur-sm ${mont.className}`}>
            Lodges in Blackbuck National Park, Velavadar
          </div>
        
          <motion.div
            className={`h-[50vh] w-screen flex flex-col items-center justify-center relative ${mont.className}`}
          >
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="../lodges-in-Velavadar-Bhavnagar-4.jpg"  // Make sure the image is placed in the 'public' directory
                alt="Lodges in Velavadar Blackbuck National Park"
                layout="fill"  // This will make the image cover the full div
                className="object-cover"  // Make sure the image covers the whole div without stretching
                priority
              />
            </div>

            {/* Content Overlay */}
            <div className="relative backdrop-blur-xs z-10 w-full h-full flex flex-col items-center justify-center px-4 text-center">
              <div className="text-xs text-white font-semibold mb-4">
                The Blackbuck National Park withholds many beautiful lodges that are convenient, comfortable, and luxurious in terms of hospitality, locality, in-house naturalist team and staff, and the commitment to preserve the wildlife and culture of Velavadar National Park.
              </div>
              <div className="text-sm font-semibold text-white mb-4">
                The luxurious lodges in Blackbuck National Park Velavadar are enclosed by rustic surroundings and offer picturesque views of wildlife, water bodies, and farmlands.
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <motion.button
                  className="border-2 border-white px-3 py-2 rounded-full text-xs font-light cursor-pointer"
                  whileHover={{ scale: 1.1, opacity: 0.77 }}
                  whileTap={{ scale: 0.95, opacity: 0.54 }}
                >
                  <motion.span className="text-white">
                    <Link href="/contact-us" passHref>Book Now</Link>
                  </motion.span>
                </motion.button>
                <motion.button
                  className="border-2 border-white px-3 py-2 rounded-full text-xs font-light cursor-pointer"
                  whileHover={{ scale: 1.1, opacity: 0.77 }}
                  whileTap={{ scale: 0.95, opacity: 0.54 }}
                >
                  <motion.span className="text-white">
                    <Link href="/accomodation-in-velavadar" passHref>Tariff</Link>
                  </motion.span>
                </motion.button>
                <motion.button
                  className="border-2 border-white px-3 py-2 rounded-full text-xs font-light cursor-pointer"
                  whileHover={{ scale: 1.1, opacity: 0.77 }}
                  whileTap={{ scale: 0.95, opacity: 0.54 }}
                >
                  <motion.span className="text-white">
                    <Link href="/things-to-do-velavadar-park" passHref>Things To Do</Link>
                  </motion.span>
                </motion.button>
                <motion.button
                  className="border-2 border-white px-3 py-2 rounded-full text-xs font-light cursor-pointer"
                  whileHover={{ scale: 1.1, opacity: 0.77 }}
                  whileTap={{ scale: 0.95, opacity: 0.54 }}
                >
                  <motion.span className="text-white">
                    <Link href="/how-to-reach-velavadar" passHref>How To Reach</Link>
                  </motion.span>
                </motion.button>
              </div>
            </div>
          </motion.div>

        </>
      ) : (
      <div ref={div1Ref} className={`h-[850px] w-screen flex flex-col items-center justify-center ${mont.className}`}>
        <div className="w-full h-[150px] font-bold flex items-center justify-center text-xl gap-2 text-earth-brown">Lodges in Blackbuck National Park, Velavadar</div>
        <div className="w-full h-[650px] flex flex-col items-center justify-center">
          <div className="h-[300px] w-4/5 flex items-center justify-between ">
            <div className="h-full w-1/2 flex items-center justify-center text-right text-base pr-7 text-earth-brown">The Blackbuck National Park withholds many beautiful lodges that are convenient, comfortable and luxurious in terms of hospitality, locality, in-house naturalist team and staff, and the commitment to preserve the wildlife and culture of Velavadar National Park. All the lodges in Velavadar are strategically located to make it an easy and pleasant experience for the visitors. The well-maintained lodges are situated nearby the national park that comprises large areas of pale, golden grassland stretching between two seasonal rivers making it exceptionally beautiful for the beholders to witness.</div>
            <motion.div
              className="relative w-1/2 h-full p-4"
            >
              <Image
                src="../lodges-in-Velavadar-Bhavnagar-4.jpg"
                alt='Lodges in Velavadar Blackbuck National Park'
                fill
                // sizes="100vw"
                className="object-cover"
              />
            </motion.div>
          </div>
          <div className="h-[250px] w-4/5 flex items-center justify-start text-left text-base text-earth-brown">The luxurious lodges in Blackbuck National Park Velavadar are enclosed by rustic surroundings and offer picturesque views of wildlife, water bodies, and farmlands. The lodges enjoy good connectivity and are easily accessible from various major cities and countries via road, air, and train. The accommodation options in Velavadar are abundant in greenery, flora and fauna and offer a promisingly comfortable and fun experience for its guests.</div>
          <div className="h-[100px] w-4/5 flex items-center justify-between">
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
                className="relative z-10 text-earth-brown"
                whileHover={{color: 'earth-brown', transition: { duration: 0.3 }}}
              >
                <Link href="/contact-us" passHref>Book Now</Link>
              </motion.span>
            </motion.button>
            <motion.button
              className={`relative border-2 border-earth-brown px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
              whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                  opacity: 0.77,
              }}
              whileTap={{scale: 0.95,opacity: 0.54}}
            >
              <motion.span 
                className="relative z-10 text-earth-brown"
                whileHover={{color: 'earth-brown', transition: { duration: 0.3 }}}
              >
                <Link href="/accomodation-in-velavadar" passHref>Tariff</Link>
              </motion.span>
            </motion.button>
            <motion.button
              className={`relative border-2 border-earth-brown px-3 py-2 my-3 rounded-full text-sm font-light cursor-pointer ${mont.className}`}
              whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.3 },
                  opacity: 0.77,
              }}
              whileTap={{scale: 0.95,opacity: 0.54}}
            >
              <motion.span 
                className="relative z-10 text-earth-brown"
                whileHover={{color: 'earth-brown', transition: { duration: 0.3 }}}
              >
                <Link href="/things-to-do-velavadar-park" passHref>Things To Do</Link>
              </motion.span>
            </motion.button>
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
                className="relative z-10 text-earth-brown"
                whileHover={{color: 'earth-brown', transition: { duration: 0.3 }}}
              >
                <Link href="/how-to-reach-velavadar" passHref>How To Reach</Link>
              </motion.span>
            </motion.button>
          </div>
          <div className="h-[50px] w-2/3 flex items-center justify-between "></div>
        </div>
      </div>
    )}


      <div ref={div2Ref} className={`${ mobileView ? 'h-[400px] px-2' : 'h-[600px]'} w-screen flex flex-col items-center justify-center`}>
        <div className={`${ mobileView ? 'h-[100px]' : 'h-[150px]'} w-full flex items-center justify-center text-xl font-bold text-earth-brown`}> Lodge Gallery</div>
        <div className={`${mobileView ? 'h-[300px] overflow-x-auto flex-nowrap px-4' : 'h-[450px]'} w-full flex ${mobileView ? '' : 'justify-center'} items-center gap-2 ${mobileView ? 'scrollbar-hide' : ''}`}
          style={mobileView ? { scrollSnapType: 'x mandatory', scrollBehavior: 'smooth' } : {}}
        >
          {div2Imgs.map((img, index) => (
            <motion.div
              key={index}
              initial={{ x: '100%', opacity: 0 }}
              animate={div2InView || div3InView ? { x: 0, opacity: 1 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.17,
                type: 'spring',
                stiffness: 77,
                damping: 17,
              }}
              whileHover={{ scale: 1.05 }}
              className={`relative h-full ${
                mobileView ? 'w-3/4 flex-shrink-0 snap-start' : 'w-1/4'
              } overflow-hidden rounded-lg`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
        </div>
      </div>



      <div ref={div3Ref} className={`min-h-[950px] w-screen flex flex-col items-center justify-center relative`}>
        <div className={`h-[150px] w-full flex items-center justify-center text-xl font-bold text-earth-brown`}>Lodge Facilities at a Glance</div>
        <div className='min-h-[800px] w-2/3 flex flex-col items-start justify-start gap-7 p-4'>
          <div className="h-3/4 w-full overflow-y-auto">
            {lodgeFacs.map((faq, index) => (
              <div key={index} className="border-b-2 border-earth-brown p-4">
                <button 
                    className={`w-full text-left ${mobileView?"text-sm":"text-lg"} bsd text-earth-brown font-semibold flex justify-between items-center cursor-pointer ${mont.className}`}
                    onClick={() => toggleAcc(index)}
                >
                    <div className={`h-full w-3/4 flex items-center justify-start gap-2`}>
                      <motion.div className={`relative w-1/20 h-1/4 p-4`}>
                        <Image
                          src="../headerLogoFinalBrown.png"
                          alt=''
                          fill
                          className="object-contain"
                        />
                      </motion.div>
                      {faq.title}
                    </div>
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                    className={`overflow-hidden ${mont.className} text-earth-brown ${mobileView?"text-xs":"text-base"} transition-all duration-500 ease-in-out ${
                      openIndex === index ? "opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.desp}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[5vh] w-full"></div>
      </div>
    </>
  );
}
