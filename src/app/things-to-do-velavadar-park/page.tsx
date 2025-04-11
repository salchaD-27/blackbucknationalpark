"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Maps from './components/Maps';
import Link from 'next/link';

import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const basePath = publicRuntimeConfig.basePath || '';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

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
          <span className={`${mobileView ? "text-base text-right" : "text-4xl"} font-bold`}>
            Things to do in Velavadar – Blackbuck National Park
          </span>
          <div className="h-auto w-full flex items-center justify-end">
            <motion.button
              className={`${mobileView ? "text-xs" : "text-lg"} text-white/90 py-1 cursor-pointer ${mont.className}`}
              whileHover={{ scale: 1.1, color: "#b5aa9c" }}
              whileTap={{ scale: 0.9 }}
            >
              <Link href="/" passHref>Home</Link>
            </motion.button>
            <span className={`${mobileView ? "text-[10px]" : "text-lg"}`}>
              &nbsp;► Things to do in Velavadar – Blackbuck National Park
            </span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`h-auto  w-screen flex flex-col items-center justify-center ${mont.className}`}>
        {mobileView?(
          <div className={`h-[10vh] w-full flex flex-col items-center justify-center ${mobileView ? "text-sm" : "text-2xl"} gap-2 text-earth-faded-green`}>
            <div className='w-full flex items-end justify-center'>Things to do and Best Experiences at</div>
            <div className='w-full flex items-center justify-center'>
              <span className="text-earth-brown font-bold">Blackbuck National Park,</span>
              <span className="text-earth-dark-green font-bold">Velavadar</span>
            </div>
          </div>
        ):
        (
        <div className={`h-[15vh] w-full flex items-center justify-center ${mobileView ? "text-xs" : "text-2xl"} gap-2 text-earth-faded-green`}>
          Things to do and Best Experiences at&nbsp;
          <span className="text-earth-brown font-bold">Blackbuck National Park,</span>
          <span className="text-earth-dark-green font-bold">Velavadar</span>
        </div>
      )}

      {mobileView ? (
        <>
          {/* Experience 1 */}
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./ttdDiv1Img1.png"
              alt="ttdDiv1Img1"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Experience 1: Jeep Safari at Blackbuck National Park, Velavadar</span>
              <span className='text-xs text-white'>
                The Blackbuck national park offers stunning views of the natural landscapes and thriving wildlife experience through its thrilling jeep safaris. The safaris are meant to give travellers a taste of adventure as they can spot various species of flora and fauna in open grasslands. A guided safari tour of the national park is provided for sighting wildlife and photographing the different wonders of nature at Velavadar Blackbuck National park. Spread in a large expanse, the jeep safari experience elevates the spirit and zest of the national park famous for Blackbucks and makes it a destination worth visiting.
              </span>
            </div>
          </div>

          {/* Experience 2 */}
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./ttdDiv1Img2.png"
              alt="ttdDiv1Img2"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-left bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Experience 2: Alfresco Meals at Blackbuck National Park, Velavadar</span>
              <span className='text-xs text-white'>
                The service of alfresco dining is immensely popular among the accommodations surrounding Velavadar Blackbuck national park. Tourists can enjoy a comfortable, relaxing and fresh meal in the lap of nature and its beauty. With an intimate setting, delicious cuisine and an enchanting atmosphere, alfresco meals are the best way to cherish nature’s bounty.
              </span>
            </div>
          </div>

          {/* Experience 3 */}
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./ttdDiv1Img3.png"
              alt="ttdDiv1Img3"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Experience 3: Foot Trails at Velavadar near Bhavnagar</span>
              <span className='text-xs text-white'>
                Our famous walking tours are designed for people who want to explore their connection with nature on foot. The tours are accompanied by professional naturalists and guides who are trained and have rich knowledge about the prevailing biodiversity. A walk in the various trails around the national park is a great way to soak in the wilderness and learn more about the history, culture and rich biodiversity of Blackbuck Velavadar national park.
              </span>
            </div>
          </div>

          {/* Experience 4 */}
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./ttdDiv1Img4.png"
              alt="ttdDiv1Img4"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-left bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Experience 4: Cycling Trails at Velavadar near Bhavnagar</span>
              <span className='text-xs text-white'>
                If you wish to enjoy the panoramic views of the countryside at your own pace, then cycling trails are the best choice for you. This tour gives people a chance to plan their own journey in a way that suits them the most. They can explore the beautiful landscapes and the local culture in the surrounding areas of the Blackbuck velavadar national park.
              </span>
            </div>
          </div>

          {/* Experience 5 */}
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./ttdDiv1Img5.png"
              alt="ttdDiv1Img5"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Experience 5: Interactive Sessions at Velavadar near Bhavnagar</span>
              <span className='text-xs text-white'>
                In order to make the visit to Blackbuck national park at velavadar more exciting and insightful, we organize interactive sessions for our guests to learn more about the culture, habitat, flora and fauna of the region. These sessions are really fun and informal as you can talk and mingle with like-minded people from other parts of the world. The in-house naturalists aim to teach people about the nature and diversity of the place by indulging in wilderness filled conversations.
              </span>
            </div>
          </div>

          {/* Experience 6 */}
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="./ttdDiv1Img6.png"
              alt="ttdDiv1Img6"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-left bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Experience 6: Organic Garden at Velavadar National Park</span>
              <span className='text-xs text-white'>
                We understand the importance of conservation of nature and its subjects and thus, our in-house organic garden is an effort to bring people closer to nature and its beauty. Moreover, it is a great place for children and adults alike as they can play, relax or simply enjoy the serene atmosphere of the garden. The organic garden provides a free space for people to leave their worries behind and soothe their minds amidst the glory of nature.
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown my-4'>Experience 1: Jeep Safari at Blackbuck National Park, Velavadar</span>
              <span className='text-base text-earth-brown'>The Blackbuck national park offers stunning views of the natural landscapes and thriving wildlife experience through its thrilling jeep safaris. The safaris are meant to give travellers a taste of adventure as they can spot various species of flora and fauna in open grasslands. A guided safari tour of the national park is provided for sighting wildlife and photographing the different wonders of nature at Velavadar Blackbuck National park. Spread in a large expanse, the jeep safari experience elevates the spirit and zest of the national park famous for Blackbucks and makes it a destination worth visiting.</span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./ttdDiv1Img1.png"
                  alt={`ttdDiv1Img1`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./ttdDiv1Img2.png"
                  alt={`ttdDiv1Img2`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="h-full w-2/3 flex flex-col items-start text-left justify-center">
              <span className='text-lg font-bold text-earth-brown my-4'>Experience 2: Alfresco Meals at Blackbuck National Park, Velavadar</span>
              <span className='text-base text-earth-brown'>The service of alfresco dining is immensely popular among the accommodations surrounding Velavadar Blackbuck national park. Tourists can enjoy a comfortable, relaxing and fresh meal in the lap of nature and its beauty. With an intimate setting, delicious cuisine and an enchanting atmosphere, alfresco meals are the best way to cherish nature’s bounty.</span>
            </div>
          </div>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown my-4'>Experience 3: Foot Trails at Velavadar near Bhavnagar</span>
              <span className='text-base text-earth-brown'>Our famous walking tours are designed for people who want to explore their connection with nature on foot. The tours are accompanied by professional naturalists and guides who are trained and have rich knowledge about the prevailing biodiversity. A walk in the various trails around the national park is a great way to soak in the wilderness and learn more about the history, culture and rich biodiversity of Blackbuck Velavadar national park.</span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./ttdDiv1Img3.png"
                  alt={`ttdDiv1Img3`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./ttdDiv1Img4.png"
                  alt={`ttdDiv1Img4`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="h-full w-2/3 flex flex-col items-start text-left justify-center">
              <span className='text-lg font-bold text-earth-brown my-4'>Experience 4: Cycling Trails at Velavadar near Bhavnagar</span>
              <span className='text-base text-earth-brown'>If you wish to enjoy the panoramic views of the countryside at your own pace, then cycling trails are the best choice for you. This tour gives people a chance to plan their own journey in a way that suits them the most. They can explore the beautiful landscapes and the local culture in the surrounding areas of the Blackbuck velavadar national park.</span>
            </div>
          </div>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown my-4'>Experience 5: Interactive Sessions at Velavadar near Bhavnagar</span>
              <span className='text-base text-earth-brown'>In order to make the visit to Blackbuck national park at velavadar more exciting and insightful, we organize interactive sessions for our guests to learn more about the culture, habitat, flora and fauna of the region. These sessions are really fun and informal as you can talk and mingle with like-minded people from other parts of the world. The in-house naturalists aim to teach people about the nature and diversity of the place by indulging in wilderness filled conversations.</span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./ttdDiv1Img5.png"
                  alt={`ttdDiv1Img5`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="./ttdDiv1Img6.png"
                  alt={`ttdDiv1Img6`}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="h-full w-2/3 flex flex-col items-start text-left justify-center">
              <span className='text-lg font-bold text-earth-brown my-4'>Experience 6: Organic Garden at Velavadar National Park</span>
              <span className='text-base text-earth-brown'>We understand the importance of conservation of nature and its subjects and thus, our in-house organic garden is an effort to bring people closer to nature and its beauty. Moreover, it is a great place for children and adults alike as they can play, relax or simply enjoy the serene atmosphere of the garden. The organic garden provides a free space for people to leave their worries behind and soothe their minds amidst the glory of nature.</span>
            </div>
          </div>
        </>
      )}
        
        <div className="h-[5vh] w-2/3 flex items-center justify-between "></div>
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
                <Link href={href} passHref>{label}</Link>
              </motion.span>
            </motion.button>
          ))}
          
        </div>
      </div>
    </>
  );
}
