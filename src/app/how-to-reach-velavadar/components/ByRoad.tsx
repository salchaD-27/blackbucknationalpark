import { useState, useEffect } from 'react';
import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

export default function ByRoad(){
    const [mobileView, setMobileView] = useState(false);
      useEffect(() => {
        const checkMobile = () => setMobileView(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);
    return (
        <div className={`min-h-[400px] w-full flex flex-col items-start justify-center text-earth-brown gap-3 ${mont.className}`}>
            <span className={`${mobileView?"text-sm":"text-lg"}`}>Velavadar is a beautiful travel destination that is rooted in the heart of Central India.</span>
            <span className={`${mobileView?"text-xs":"text-sm"}`}>
                It is situated at almost 54 km from the district headquarters of Bhavnagar, Gujarat<br/>
                People can conveniently visit Velavadar as it is well-connected to other major cities of the country, such as Ahmedabad, Rajkot, Mumbai and Delhi, through the means of road transportation.<br/>
                The nearest town from Velavadar is Vallabhipur that is approximately 30 km away.
            </span>
            <span className={`${mobileView?"text-xs":"text-sm"} font-bold`}>
                Ahmedabad - 145 Km<br/>
                Anand - 142 Km<br/>
                Vadodara - 175 Km<br/>
                Rajkot - 150 Km<br/>
                Bhavnagar - 55 Km<br/>
                Sasan Gir - 210 Km<br/>
                Little Rann of Kutch - 180 Km
            </span>
        </div>
    );
}