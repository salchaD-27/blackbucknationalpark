"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Link from 'next/link';

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
          <span className={`${mobileView ? "text-lg" : "text-4xl"} font-bold`}>
            Sustainable Tourism Velavadar
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
              &nbsp;► Sustainable Tourism Velavadar
            </span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`h-auto  w-screen flex flex-col items-center justify-center ${mont.className}`}>
      <div className={`h-[15vh] w-full flex items-center justify-center ${mobileView ? "text-xs" : "text-2xl"} text-earth-grey`}>
        Responsible Tourism in&nbsp;
        <span className="text-earth-brown font-bold">Blackbuck National Park,&nbsp;</span>
        <span className="text-earth-dark-green font-bold">Velavadar</span>
      </div>

      {mobileView ? (
        <>
          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="/sustDiv1Img1.png"
              alt="sustDiv1Img1"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-right bg-black/27">
              <span className='text-base font-bold text-white mb-2'>"We strongly believe We are part of the natural system not above it”</span>
              <span className='text-xs text-white'>
                Velavadar National Park, in Gujarat’s Bhavnagar district, is a hidden gem. Local people play a vital role in its protection. The park creates jobs, supports families, and helps preserve traditions while encouraging conservation. The community actively protects the forest, wildlife, and plants while offering visitors an authentic cultural experience.
              </span>
            </div>
          </div>

          <div className="h-[50vh] w-full relative flex items-center justify-center px-4 py-6 text-center my-2">
            <Image
              src="/sustDiv1Img2.png"
              alt="sustDiv1Img2"
              fill
              sizes="100vw"
              className="object-cover z-0"
            />
            <div className="relative z-10 p-4 rounded-md text-white flex flex-col items-center justify-center text-left bg-black/27">
              <span className='text-base font-bold text-white mb-2'>Sustainable Lifestyle in Harmony with Nature</span>
              <span className='text-xs text-white'>
                Locals ensure the protection of biodiversity by addressing ecological concerns. They serve nature while earning a living, uniting tourism with conservation. Activities like poaching and grazing are prohibited. Responsible choices by locals and visitors alike help maintain the park’s unique grassland habitat.
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-lg font-bold text-earth-brown'>"We strongly believe We are part of the natural system not above it”</span>
              <span className='text-base text-earth-brown'>
                Velavadar national park, situated in the Bhavnagar district of Gujarat, is a hidden gem of scenic beauty and a precious gift of nature. The contribution and assistance of native people play a significant role in the well-being of the Velavadar forests. The local populace of Velavadar believe that they have a prominent role in shaping the future of the forests. The jungle and parks have been creating employment opportunities for locals in order to help them earn, sustain their families and live a better life. Hence, the national park has played a significant role in helping the locals to improve their standards of living. The native people have constantly been engaging in conservation practices of the jungles, parks, wildlife, and plant species of Velavadar while providing a great experience to the visitors and holding the local culture and tradition intact at the same time.
              </span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="/sustDiv1Img1.png"
                  alt="sustDiv1Img1"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="h-[30vh] w-4/5 flex items-center justify-center">
            <div className="h-full w-2/3 flex flex-col items-end text-right justify-center">
              <span className='text-base text-earth-brown'>
                In order to ensure the prosperity of their flora and faunal species, people address the relevant concerns and try to create an improved lifestyle within the existing ecosystem. To preserve the natural habitats, the people of Velavadar have consciously made efforts to learn and earn a livelihood by serving nature. They strive to provide the best services to people coming from all over the world while uniting the efforts of sightseeing along with the preservation of its historic biodiversity.
              </span>
              <span className='text-base text-earth-brown'>
                Velavadar National Park is an area that is strictly conserved for the welfare of its natural habitats and where practices such as poaching, shooting, grazing, etc are strictly prohibited. To maintain its unique grassland and ecological balance, locals and the official service providers consciously make sustainable choices and expect visitors and other travellers to do the same. The following practices are in line with the mission of protecting and conserving the unique flora and fauna of the park by practicing responsible tourism methods.
              </span>
            </div>
            <div className="h-full w-1/3 flex items-center justify-center">
              <motion.div className="relative w-2/3 h-4/5 p-4">
                <Image
                  src="/sustDiv1Img2.png"
                  alt="sustDiv1Img2"
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </>
      )}

        <div className={`${mobileView?"h-[35vh]":"h-[20vh]"} w-4/5 flex items-center justify-center`}>
          <div className="h-full w-full flex flex-col items-start text-left justify-center">
            <span className={`${mobileView?"text-sm":"text-lg"} font-bold text-earth-brown my-4`}>Wildlife Conservation:</span>
            <span className={`${mobileView?"text-xs":"text-base"} text-earth-brown`}>The endangered blackbucks are the star faunal species of Velavadar. The thoughtful guidelines provided by the people of Velavadar to tourists and nature enthusiasts helped to preserve these endangered species. In 1960, the population of blackbucks was just 200, but at present, it is a conservatory of up to 3000 blackbucks. The protection and conservation could not have been possible without the assistance and support of the local people.</span>
          </div>
        </div>
        <div className={`${mobileView ? "h-[35vh]" : "h-[20vh]"} w-4/5 flex items-center justify-center`}>
          <div className="h-full w-full flex flex-col items-start text-left justify-center">
            <span className={`${mobileView ? "text-sm" : "text-lg"} font-bold text-earth-brown my-4`}>Localized Experience:</span>
            <span className={`${mobileView ? "text-xs" : "text-base"} text-earth-brown`}>
              A unique way of engaging in responsible tourism is providing visitors a more meaningful and delightful experience of travel by integrating their visit with local people, culture, customs, and beliefs. Living amidst the local residents will ultimately enhance the experience and knowledge of travellers and will allow them to be a part of the local heritage. Visitors can have a taste of locally grown food resulting in increased support to the marginal farmers and local shops.
            </span>
          </div>
        </div>

        <div className={`${mobileView ? "h-[30vh]" : "h-[15vh]"} w-4/5 flex items-center justify-center`}>
          <div className="h-full w-full flex flex-col items-start text-left justify-center">
            <span className={`${mobileView ? "text-sm" : "text-lg"} font-bold text-earth-brown my-4`}>Maximize Impact:</span>
            <span className={`${mobileView ? "text-xs" : "text-base"} text-earth-brown`}>
              A growing attention towards sustainable livelihood and environmental consciousness will help visitors make conscious and eco-friendly choices. Visitors must be encouraged and introduced to native skills, regional and cultural activities that are an intrinsic part of leading a rustic and rural life.
            </span>
          </div>
        </div>

        <div className={`${mobileView ? "h-[35vh]" : "h-[20vh]"} w-4/5 flex items-center justify-center`}>
          <div className="h-full w-full flex flex-col items-start text-left justify-center">
            <span className={`${mobileView ? "text-xs" : "text-sm"} text-earth-brown`}>
              The tourism sector is a substantial domain of employment opportunities and economic growth across the world. The rise in the number of travellers has a considerable impact on the environment, resources, and life of the local inhabitants. It is the responsibility of both visitors and service providers to ensure that the factor of sustainability is addressed and maintained. Velavadar is renowned for being an exotic destination for exploring wildlife in Gujarat. The highlight of Velavadar is its unique grassland ecosystem and thus, the tourism authorities in Velavadar try to minimize the negative effects of travel on nature. Although it might take a little time to make a notable difference to preserve the ecosystem, rural economy, and wildlife. But slowly and gradually, these small steps will lead to something bigger and better.
            </span>
          </div>
        </div>

        
        <div className={`${mobileView?"h-[10vh]":"h-[5vh]"} w-2/3 flex items-center justify-between `}></div>
      </div>
    </>
  );
}