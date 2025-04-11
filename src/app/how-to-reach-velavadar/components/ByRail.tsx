import { useState, useEffect } from 'react';
import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

export default function ByRail(){
    const [mobileView, setMobileView] = useState(false);
          useEffect(() => {
            const checkMobile = () => setMobileView(window.innerWidth < 768);
            checkMobile();
            window.addEventListener("resize", checkMobile);
            return () => window.removeEventListener("resize", checkMobile);
          }, []);
    return (
        <div className={`min-h-[30vh] w-full flex flex-col items-start justify-center text-earth-dark-soil gap-3 ${mont.className}`}>
            <span className={`${mobileView?"text-sm":"text-base"}`}>Tourists can easily access the unique village of Velavadar as it enjoys good rail connectivity to and from the major cities of India.</span>
            <span className={`${mobileView?"text-xs":"text-sm"}`}>
                The nearest railway station from Velavadar is Dhola which is about 55 km away from the village.<br/>
                The other railhead that connects Velavadar from other important regions is Bhavnagar railway station that is around 72 km from Velavadar.
            </span>
            <span className='text-sm font-bold'>
                Ahmedabad - 145 Km<br/>
                Bhavnagar - 65 Km
            </span>
        </div>
    );
}