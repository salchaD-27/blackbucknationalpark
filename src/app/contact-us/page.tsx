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
      <div ref={div0Ref} className={`${mobileView?"h-[500px]":"h-[calc(100vh*7/8)]"} w-screen flex flex-col items-end justify-end ${mobileView?"px-10 py-10":"px-47 py-38"}  relative overflow-hidden ${mont.className}`}>
        {/* Background Parallax Effect */}
        <motion.div
        className="absolute inset-0 w-full h-full"
        animate={{ y: offsetY * 0.5 }}
        transition={{ ease: "easeOut", duration: 0.2 }}
      >
        <Image
          src="../contact-velavadar-bookings.jpg"
          alt="Contact to book hotels, safari and tours for Velavadar Blackbuck National Park"
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
            Contact Us
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
              &nbsp;► Contact Us
            </span>
          </div>
        </motion.div>
      </div>


      <div ref={div1Ref} className={`${mobileView ? "h-[1500px]" : "h-[900px]"} w-screen relative z-10 flex items-center justify-center text-3xl text-black home-page-bg-div3 ${mont.className}`}>
        <div className={`h-4/5 w-4/5 bg-black/54 rounded-xl flex ${mobileView ? "flex-col" : ""} items-center justify-center`} style={{ backdropFilter: 'blur(7px)' }}>
          
          {/* Left - Contact Details */}
          <div className={`h-full ${mobileView ? "w-full" : "w-1/2"} flex flex-col items-start justify-center p-7 gap-3`}>
            <span className={`text-white ${mobileView ? "text-base" : "text-2xl"} font-extrabold`}>Safaris India</span>
            <span className={`text-white ${mobileView ? "text-sm" : "text-xl"} font-semibold mb-4`}>Bird, Tiger Safari & Wildlife Photography Tours</span>
            
            <span className={`text-white ${mobileView ? "text-sm" : "text-lg"} font-semibold`}>Address</span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>Velavadar bhal, Velavadar, Gujarat 364313</span>
            
            <span className={`text-white ${mobileView ? "text-sm" : "text-lg"} font-semibold`}>Reservation Office</span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>House No. 337, Block Q, South City 1, Near Sector 40 Market, Gurgaon – 122001 Haryana</span>
            
            <span className={`text-white ${mobileView ? "text-sm" : "text-lg"} font-semibold`}>Email</span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>info@rustictrailsindia.com ; indiasafaristours@gmail.com</span>
            
            <span className={`text-white ${mobileView ? "text-sm" : "text-lg"} font-semibold`}>Enquires</span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>Phone: +91-9289958227</span>
          </div>

          {/* Right - Form */}
          <div className={`h-full ${mobileView ? "w-full" : "w-1/2"} flex flex-col items-center justify-center p-7`}>
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

          


      <div ref={div2Ref} className={`h-[500px] w-screen flex flex-col items-center justify-center bg-transparent py-8 ${mont.className}`}>
        <div className="h-[5vh] w-full"></div>
       <div className="h-[40vh] w-2/3 border-2 border-earth-brown overflow-hidden">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14792.604960683953!2d72.0203924!3d22.0438094!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x46f110b6a9e5506a!2sHotels%20and%20Resorts%20in%20Blackbuck%20National%20Park%20Velavadar!5e0!3m2!1sen!2sin!4v1664719442212!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

        <div className="h-[5vh] w-full"></div>
      </div>
    </>
  );
}
