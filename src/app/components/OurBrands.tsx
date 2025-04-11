"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const ourbrands = [
    { text: "Rustic Trails India", logo: "/LOGO-RUSTIC_TRAILS_INDIA_WHITE.png", alt: "LOGO-RUSTIC_TRAILS_INDIA_WHITE", link: "https://www.rustictrailsindia.com" },
    { text: "Safaris India", logo: "/LOGO-SAFARIS_INDIA_WHITE.png", alt: "LOGO-SAFARIS_INDIA_WHITE", link: "https://www.safarisindia.com" },
    { text: "Tiger Safari Tours India", logo: "/LOGO-TSTI_WHITE.png", alt: "Pinterest", link: "https://www.tigersafaritoursindia.com" },
    { text: "Anise Resorts", logo: "/LOGO-TSTI_WHITE.png", alt: "LOGO-TSTI_WHITE", link: "https://www.aniseresorts.in" }
];
  
export default function OurBrands(){
    const [mobileView, setMobileView] = useState(false);
      useEffect(() => {
        const checkMobile = () => setMobileView(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);
    return(
        <div className={`${mobileView?"h-auto":"h-[15vh]"} w-screen flex flex-col items-center justify-center relative socials-bg ${mont.className}`}>
            <div className={`h-[10vh] w-full flex items-center justify-center ${mobileView?"text-lg":"text-2xl"} font-semibold text-earth-brown opacity-77`}>Our Brands</div>
            <div className={` w-2/3 flex ${mobileView?"flex-col h-auto gap-1":"h-[7vh] gap-4"} items-center justify-center `}>
                {ourbrands.map((item, index) => (
                    <motion.a 
                    key={index} 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`relative w-auto ${mobileView?"h-auto my-2":"h-[7vh] p-1"}  hover:opacity-80 transition-opacity duration-200 flex items-center justify-center`}
                    >
                    {/* <Image src={item.logo} alt={item.alt} height={100} width={200} className="object-contain opacity-77" /> */}
                    <div className={`h-full w-auto ${mobileView?"text-sm":"text-xl"} font-semibold opacity-77 text-white`}>{item.text}</div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}