import { useState, useEffect } from 'react';
import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

export default function ByAir(){
    const [mobileView, setMobileView] = useState(false);
      useEffect(() => {
        const checkMobile = () => setMobileView(window.innerWidth < 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
      }, []);
    return (
        <div className={`min-h-[20vh] w-full flex flex-col items-start justify-center text-earth-dark-soil gap-3 ${mont.className}`}>
            <span className={`${mobileView?"text-xs":"text-sm"}`}>
                The nearest domestic airport that connects Velavadar to and from other major cities of the country is the Bhavnagar airport in Gujarat.<br/>
                Furthermore, the closest international airport that connects Velavadar to and from cities across the globe is Sardar Vallabhbhai Patel airport located in Hansol, Ahmedabad.
            </span>
            <span className='text-sm font-bold'>
                Ahmedabad - 150 Km<br/>
                Bhavnagar - 50 Km
            </span>
        </div>
    );
}