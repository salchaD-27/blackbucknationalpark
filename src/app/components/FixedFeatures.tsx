"use client"
import { useState } from "react";
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function FixedFeatures(){
    const [whatsappTrue, setWhatsAppTrue]= useState(false);
    const [chatbotTrue, setChatbotTrue]= useState(false);
    return(
        <>
            {/* Buttons */}
            <motion.div
            className="fixed bottom-[77px] right-[14px] h-[50px] w-[50px] rounded-full z-[99999] cursor-pointer transition-all duration-300 ease-in-out bg-transparent p-2"
            animate={{ scale: whatsappTrue ? 1.1 : 1 }}
            transition={{ duration: 0.3 }}
            onClick={() => {
                setWhatsAppTrue(!whatsappTrue);
                setChatbotTrue(false);
            }}
            >
            <Image
                src={whatsappTrue ? "../closeIcon.png" : "../whatsappIcon.png"}
                alt=''
                fill
                className="object-contain"
            />
            </motion.div>

            <Link href="tel:+91-8860680660" passHref>
            <div className="fixed bottom-[138px] right-[14px] h-[50px] w-[50px] rounded-full z-[9999] cursor-pointer transition-all duration-300 ease-in-out bg-transparent p-2">
                <Image
                src="../callUsIcon.png"
                alt=""
                fill
                className="object-contain"
                />
            </div>
            </Link>

            {/* Popups with animation */}
            <AnimatePresence>
            {whatsappTrue && (
                <a
                href="https://web.whatsapp.com/send?phone=919289958227&text=Hello%20Blackbuck%20Tours%20India!%20I%20would%20like%20to%20enquire%20for%20a%20travel%20plan."
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
                >
                <motion.div
                    key="whatsapp"
                    initial={{ opacity: 0, x: 50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 50, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-[27px] right-[107px] h-[269px] w-[347px] text-white text-3xl z-[999] flex items-center justify-center"
                >
                    <Image
                    src="../whatsappContent.png"
                    alt=""
                    fill
                    className="object-contain"
                    />
                </motion.div>
                </a>
            )}
            </AnimatePresence>


        </>
    );
}
