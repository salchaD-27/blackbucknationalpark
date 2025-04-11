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
            backgroundImage: "./abtHomeImg.png",
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
            Privacy Policy
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
              &nbsp;► Privacy Policy
            </span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`h-auto  w-screen flex flex-col items-center justify-center ${mont.className}`}>
        <div className={`h-[15vh] w-full flex items-center justify-center ${mobileView ? "text-sm" : "text-2xl"} text-earth-grey`}>
          Wildlife in&nbsp;
          <span className="text-earth-brown font-bold">Blackbuck National Park,&nbsp;</span>
          <span className="text-earth-dark-green font-bold">Velavadar</span>
        </div>

        <div className="h-auto w-2/3 flex flex-col items-start justify-center text-earth-brown gap-4">
          <div className="h-[5vh] w-2/3 flex items-center justify-between "></div>

          <span className={`${mobileView?"text-xs":"text-base"}`}>At Blackbuck National Park, Velavadar near Bhavnagar, accessible from https://www.blackbucknationalpark.com/, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Blackbuck National Park, Velavadar near Bhavnagar and how we use i</span>
          <span className={`${mobileView?"text-xs":"text-sm"}`}>If you have additional questions or require more information about our Privacy Policy, do not hesitate to Contact through email at <b className='cursor-pointer'>indiasafaristours@gmail.com</b></span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Log Files</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>Blackbuck National Park, Velavadar near Bhavnagar follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.</span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Cookies and Web Beacons</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>Like any other website, Blackbuck National Park, Velavadar near Bhavnagar uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Google DoubleClick DART Cookie</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors based upon their visit to www.website.com and other sites on the internet. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network</span>
          <span className={`${mobileView?"text-xs":"text-sm"}`}>Privacy Policy at the following URL – <b className='cursor-pointer'>https://policies.google.com/technologies/ads</b></span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Privacy Policies</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>You may consult this list to find the Privacy Policy for each of the advertising partners of Blackbuck National Park, Velavadar near Bhavnagar. Our Privacy Policy was created with the help of the <b className='cursor-pointer'>GDPR Privacy Policy Generator</b></span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Blackbuck National Park, Velavadar near Bhavnagar, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Blackbuck National Park, Velavadar near Bhavnagar has no access to or control over these cookies that are used by third-party advertisers.</span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Third Pary Privacy Policies</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>Blackbuck National Park, Velavadar near Bhavnagar's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?</span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Children's Information</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Blackbuck National Park, Velavadar near Bhavnagar does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to Contact immediately and we will do our best efforts to promptly remove such information from our records.</span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Online Privacy Policy Only</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Blackbuck National Park, Velavadar near Bhavnagar. This policy is not applicable to any information collected offline or via channels other than this website.</span>
          <span className={`${mobileView?"text-sm":"text-lg"} font-bold`}>Consent</span>
          <span className={`${mobileView?"text-xs":"text-base"}`}>By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.</span>

          <div className="h-[5vh] w-2/3 flex items-center justify-between "></div>
        </div>
        
        <div className="h-[5vh] w-2/3 flex items-center justify-between "></div>
      </div>
    </>
  );
}
