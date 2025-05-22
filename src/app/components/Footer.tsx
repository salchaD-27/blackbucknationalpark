"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import { motion } from "framer-motion";
import Link from 'next/link';
import OurBrands from './OurBrands';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const socialLinks = [
    { src: "/accPageDiv4facebook.png", alt: "", link: "/privacy" },
    { src: "/accPageDiv4x.png", alt: "", link: "/privacy" },
    { src: "/accPageDiv4insta.png", alt: "", link: "/privacy" },
    { src: "/accPageDiv4linkedin.png", alt: "", link: "/privacy" },
    { src: "/accPageDiv4pinterest.png", alt: "", link: "/privacy" },
    { src: "/accPageDiv4reddit.png", alt: "", link: "/privacy" },
    { src: "/accPageDiv4trip.png", alt: "", link: "/privacy" },
];

export default function Footer(){
    const [mobileView, setMobileView] = useState(false);
          useEffect(() => {
            const checkMobile = () => setMobileView(window.innerWidth < 768);
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return () => window.removeEventListener("resize", checkMobile);
          }, []);
    return(
        <>
        <OurBrands/>
        
        <div className={`h-auto w-screen bg-earth-brown/90 backdrop-blur-md z-[100] flex flex-col items-center justify-center ${mont.className}`}>
            <div className="h-[5vh] w-4/5"></div>
            <div className={` w-4/5 flex ${mobileView?"flex-col h-auto":"h-[600px]"} items-center justify-center`}>
                <div className={`${mobileView?"h-auto w-full my-7":"h-full w-1/4"} flex flex-col items-start justify-start gap-7`}>
                    <span className={`${mobileView?"text-sm":"text-base"} font-bold mb-4`}>Contact Us</span>
                    <div className="h-auto w-4/5 flex items-center justify-center">
                        <div className="h-full w-1/5 flex items-center justify-center">
                            <Image src="/footermaps.png"  alt="" width={mobileView?20:27} height={mobileView?20:27} className="object-contain" />
                        </div>
                        <div className="h-auto w-4/5 flex flex-col items-start justify-center pr-4">
                            <span className={`${mobileView?"text-xs":"text-sm"} font-bold`}>Address</span>
                            <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}>Velavadar bhal, Blackbuck National Park, Velavadar, Gujarat 364313</span>
                        </div>
                    </div>
                    <div className="h-auto w-4/5 flex items-center justify-center">
                        <div className="h-full w-1/5 flex items-center justify-center">
                            <Image
                            src="/footerphone.png"
                            alt=""
                            width={mobileView ? 20 : 27}
                            height={mobileView ? 20 : 27}
                            className="object-contain"
                            />
                        </div>
                        <div className="h-auto w-4/5 flex flex-col items-start justify-center pr-4">
                            <span className={`${mobileView ? "text-xs" : "text-sm"} font-bold`}>Phone</span>
                            <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}>
                            <Link href="tel:91-8860680660" passHref>+91-886-068-0660</Link>
                            </span>
                        </div>
                    </div>

                    <div className="h-auto w-4/5 flex items-center justify-center">
                        <div className="h-auto w-1/5 flex items-center justify-center">
                            <Image
                            src="/footercall.png"
                            alt=""
                            width={mobileView ? 20 : 27}
                            height={mobileView ? 20 : 27}
                            className="object-contain"
                            />
                        </div>
                        <div className="h-full w-4/5 flex flex-col items-start justify-center pr-4">
                            <span className={`${mobileView ? "text-xs" : "text-sm"} font-bold`}>Mobile</span>
                            <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}>
                            <Link href="tel:91-9289958227" passHref>+91-928-995-8227</Link>
                            </span>
                        </div>
                    </div>

                    <div className="h-auto w-4/5 flex items-center justify-center">
                        <div className="h-auto w-1/5 flex items-center justify-center">
                            <Image
                            src="/footeremail.png"
                            alt=""
                            width={mobileView ? 20 : 27}
                            height={mobileView ? 20 : 27}
                            className="object-contain"
                            />
                        </div>
                        <div className="h-auto w-4/5 flex flex-col items-start justify-center pr-4">
                            <span className={`${mobileView ? "text-xs" : "text-sm"} font-bold`}>Email</span>
                            <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}>
                            info@rustictrailsindia.com
                            </span>
                        </div>
                    </div>
                </div>

                <div className={`${mobileView?"h-auto w-full my-7":"h-full w-1/4"} flex flex-col items-start justify-start`}>
                    <span className={`${mobileView?"text-sm":"text-base"} font-bold`}>Useful Links</span>
                    <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}><Link href="/" passHref>Home</Link></span>
                    <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}><Link href="/accomodation-in-velavadar" passHref>Accommodation</Link></span>
                    <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}><Link href="/safari-velavadar" passHref>Safari</Link></span>
                    <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}><Link href="/how-to-reach-velavadar" passHref>How to reach</Link></span>
                    <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}><Link href="/about-velavadar-national-park-bhavnagar" passHref>About</Link></span>
                    <span className={`${mobileView?"text-xs":"text-sm"} hover:opacity-54`}><Link href="/contact-us" passHref>Contact Us</Link></span>
                </div>
                <div className={`${mobileView ? "h-auto w-full my-7" : "h-full w-1/4"} flex flex-col items-start justify-start`}>
                    <span className={`${mobileView ? "text-sm" : "text-base"} font-bold`}>Accommodation</span>
                    <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}><Link href="/blackbuck-lodge-velavadar" passHref>Blackbuck Safari Lodge</Link></span>
                    <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}><Link href="/blackbuck-safari-lodge-velavadar" passHref>The Black Buck Lodge</Link></span>
                </div>

                <div className={`${mobileView ? "h-auto w-full my-7" : "h-full w-1/4"} flex flex-col items-start justify-start`}>
                    <span className={`${mobileView ? "text-sm" : "text-base"} font-bold`}>Reservation Office</span>
                    <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}>House No. 337, Block Q, South City 1,</span>
                    <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}>Near Sector 40 Market, Gurgaon –</span>
                    <span className={`${mobileView ? "text-xs" : "text-sm"} hover:opacity-54`}>122001, Haryana</span>

                    <span className={`${mobileView ? "text-sm" : "text-base"} font-bold mt-10`}>Follow us</span>
                    <div className="h-1/14 w-full flex items-center justify-start mt-2 gap-2">
                        {socialLinks.map((item, index) => (
                        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer">
                            <Image
                            src={item.src}
                            alt={item.alt}
                            width={mobileView ? 18 : 22}
                            height={mobileView ? 18 : 22}
                            className="object-contain cursor-pointer hover:opacity-54"
                            />
                        </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className={` w-4/5 flex border-t-1 border-earth-white ${mobileView?"text-sm flex-col h-auto py-4 gap-3 items-start justify-center":"text-base h-[10vh] items-center justify-between"}`}>
                <span className={`${mobileView?"text-xs":"text-sm"}`}>Copyright © {new Date().getFullYear()} Blackbuck National Park Velavadar Tours | A unit of Anise Resorts</span>
                <span className='cursor-pointer font-bold hover:opacity-54'><Link href="/privacy" passHref>Privacy Policy</Link></span>
            </div>
        </div>
        </>
    );
}
