"use client"
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import Image from "next/image";
import { useInView } from 'react-intersection-observer';
import Header from './components/Header';
import Link from 'next/link';

import { Montserrat, Montserrat_Alternates, Montserrat_Subrayada, Montserrat_Underline } from 'next/font/google'
const mont = Montserrat({weight: ['400', '700', '900'], style: ['normal', 'italic'], subsets: ['latin', 'latin-ext'], display: 'swap', variable: '--font-p', adjustFontFallback: true })

const div0Imgs = [
  { src: "/hotels-near-velavadar-1.jpg", alt: ''},
  { src: "/Wildlife-at-Blackbuck-National-Park-Velavadar0.jpg", alt: ''},
  { src: "/1.-Blackbuck-Safari-Lodge.jpg", alt: ''},
  { src: "/2.-Rooms-at-lackbuck-Safari-Lodge.jpg", alt: ''},
];

const div4imgs = [
  {src: "/jungle-safari.png", alt: '', desc: "Wildlife Safari"},
  {src: "/24x7-Hot-and-Cold-Water-Supply.png", alt: '', desc: "Hot and Cold Water Supply"},
  {src: "/Restaurant.png", alt: '', desc: "Multi Cuisine Restaurant"},
  {src: "/Organic-Toiletries.png", alt: '', desc: "Organic Toiletries"},
  {src: "/Room-Heating.png", alt: '', desc: "Room Air Conditioning"},
  {src: "/Car-Parking.png", alt: '', desc: "Car Parking"},
  {src: "/Complimentary-Tea-Coffee-Maker.png", alt: '', desc: "Tea Coffee Maker"},
  {src: "/CCTV-Enabled.png", alt: '', desc: "Security Emphasized"},
  {src: "/Wifi.png", alt: '', desc: "WiFi"},
  {src: "/COVID-19-Preparedness.png", alt: '', desc: "COVID-19 Preparedness"},
]

const div5GalleryImages = [
  { id: 1, src: '/blackbuck-safari-lodge-2.jpg', alt: '' },
  { id: 2, src: '/blackbuck-safari-lodge.jpg', alt: '' },
  { id: 3, src: '/hotels-near-velavadar-1.jpg', alt: '' },
  { id: 4, src: '/resort-in-blackbuck-national-park.jpg', alt: '' },
  { id: 5, src: '/1.-Blackbuck-Safari-Lodge.jpg', alt: '' },
]

const faqs = [
  { question: "What's the area like around Blackbuck National Park?", answer: "Blackbuck National Park is located in Velavadar near Bhavnagar. Velavadar is home to 2 hotels." },
  { question: "What's the best place to stay close to Blackbuck National Park Velavadar near Bhavnagar?", answer: "Blackbuck Safari Lodge Velavadar should be one of the choices for your stay in blackbuck national parkwith offers free breakfast. Blackbuck National Park is 2.9 mi (4.6 km) from Blackbuck Safari Lodge." },
  { question: "Which popular attractions are close to The Black buck safari Lodge?", answer: "Nearby attractions to this resort in blackbuck national park velavadar is Black Buck National Park (0.6 km)." },
  { question: "What are the property amenities at The Black buck safari Lodge?", answer: "Some of the more popular amenities offered include an on-site restaurant, free parking, wildlife presentation sessions." },
  { question: "Which room amenities are available at The Blackbuck safari Lodge?", answer: "Top room amenities include air conditioning, a flat screen TV, tea coffee maker, and a refrigerator." },
  { question: "Is parking available at The Blackbuck safari Lodge?", answer: "Yes, free parking is available to guests." },
  { question: "How many types of rooms are available at Hotel Blackbuck safari Lodge?", answer: "Hotel Blackbuck Lodge has 1 types of room : LUXURY COTTAGES." },
  { question: "What are the customer ratings for Blackbuck Lodge hotel?", answer: "Guests have rated blackbuck safari lodge very highly on all review platforms." },
  { question: "Does Hotel Blackbuck safari Lodge offer any business services?", answer: "Yes, Black buck safari lodge offers business services like: Meeting room for 40 pax, projector screen, high speed wifi" },
  { question: "What are some popular amenities available in hotel Blackbuck safari Lodge for COVID-19?", answer: "Some popular amenities available in Blackbuck safari Lodge are Disinfectant wipes, Room Service, Outdoor Activities, Sanitizers installed." },
  { question: "Does Hotel Blackbuck safari Lodge have any swimming pool?", answer: "Yes, Hotel Blackbuck safari Lodge does have a swimming pool." },
  { question: "Does Hotel Blackbuck safari Lodge have a restaurant?", answer: "Yes, they have restaurants where guests can enjoy breakfast, lunch and dinner." },
  { question: "Does Hotel Blackbuck safari Lodge have any parking space?", answer: "Yes, Hotel Blackbuck safari Lodge does have parking facility." },
];

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

  const ref = useRef<HTMLDivElement>(null)
  const { scrollXProgress } = useScroll({ container: ref })
  
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAcc = (index: number) => {setOpenIndex(openIndex === index ? null : index);};

  const [mobileView, setMobileView] = useState(false);
  useEffect(() => {
    const checkMobile = () => setMobileView(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === div0Imgs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [div0Imgs.length]);

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

  return (
    <>
      <Header div0View={div0InView}/>
      <div ref={div0Ref} className={`${mobileView?"h-[800px]":"h-[100vh]"} w-screen flex flex-col items-center justify-center`}>
        <div ref={div0Ref} className={`relative ${mobileView?"h-[650px]":"h-[calc(100vh*7/8)]"} w-screen overflow-hidden`}>
          {/* Image slider container */}
          <motion.div
            className="flex h-full w-full"
            animate={{
              x: `-${currentIndex * 100}%`
            }}
            transition={{
              type: "tween",
              ease: [0.32, 0.72, 0, 1],
              duration: 0.7
            }}
          >
            {div0Imgs.map((image, index) => (
              <div key={index} className="relative h-full w-full shrink-0">
                {/* Image container */}
                <motion.div
                  className="relative w-full h-full"
                  initial={{ scale: 0.95, opacity: 0.7 }}
                  animate={{ 
                    scale: currentIndex === index ? 1 : 0.9,
                    opacity: currentIndex === index ? 1 : 0.6
                  }}
                  transition={{ duration: 0.7 }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="100vw"
                    className="object-cover"
                    priority={index === currentIndex}
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
          {/* Navigation dots */}
          <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
            {div0Imgs.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  currentIndex === index ? 'bg-black w-6' : 'bg-black/50'
                }`}
              />
            ))}
          </div>
        </div>
        <div className={`h-[150px] w-screen flex flex-col items-center justify-center gap-2 ${mont.className} backdrop-blur-md transition-colors duration-500 text-black`}>
          <h1 className={`${mobileView?"text-base":"text-xl"} text-earth-brown font-bold`}>Blackbuck Safari Lodge</h1>
          <h2 className={`tracking-wide ${mobileView?"text-xs":"text-lg"} text-earth-brown`}>A Boutique Resort in Velavadar - Blackbuck National Park</h2>
        </div>
      </div>

      <div
        ref={div1Ref}
        className={`${mobileView ? "h-[154vh]" : "h-[600px]"} w-full flex items-center justify-center gap-2 ${mont.className}`}
      >
        <div className={`h-full w-3/4 flex ${mobileView ? "flex-col" : ""} items-start justify-start gap-3 p-4`}>
          {/* Left Text Section */}
          <div className={`h-full ${mobileView ? "w-full" : "w-2/3"} flex flex-col items-start justify-center text-left gap-2`}>
            <span className={`text-earth-brown ${mobileView ? "text-base" : "text-2xl"} font-semibold`}>
              About Resorts and Hotels in Blackbuck National Park
            </span>
            <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-xl"} font-bold my-2`}>
              Best Rated Luxury Resorts and Hotels in Velavadar National Park
            </span>
            <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-base"} font-normal`}>
              Rated among the best hotels in Blackbuck National Park Velavadar near Bhavnagar, Gujarat, is the Blackbuck Safari Lodge. A quaint luxury safari resort in Velavadar National Park famous for Blackbucks. This resort with rustic and surreal surroundings is set in the midst of a natural hamlet, surrounded by farmlands and water reserves. The lodge promises a unique experience to all guests.<br />
              This safari resort in Velavadar is spread over 4 acres and offers guests a chance to do a blackbuck safari while exposing them to the flora and fauna of the park.<br />
              This National Park in Gujarat is famous for herds of blackbuck, Indian wolves, and several rare birds. The experience at this resort makes for an unforgettable stay.
            </span>

            <span className={`text-earth-brown ${mobileView ? "text-base" : "text-xl"} font-bold my-2`}>
              Accommodation at the Resort
            </span>
            <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-base"} font-normal`}>
              18 Cottages with Air Conditioning
            </span>

            {/* Call Button */}
            <motion.button
              className={`relative border-2 border-earth-brown px-3 py-2 my-3 ${mobileView ? "w-full text-xs" : "w-2/3 text-sm"} rounded-full font-light cursor-pointer`}
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
              <motion.span className="relative z-10 text-earth-brown flex items-center justify-center gap-2">
                <Image
                  src="/callIconEarthBrown.png"
                  alt="Call Icon"
                  width={24}
                  height={24}
                  className="object-contain"
                />
                <Link href="tel:8860680660" passHref>
                  Call Now to Book +91-8860680660
                </Link>
              </motion.span>
            </motion.button>
          </div>

          {/* Right Image + Text */}
          <div className={`h-full ${mobileView ? "w-full" : "w-1/3"} flex flex-col items-center justify-center`}>
            <div className="h-1/2 w-full flex flex-col items-center justify-center">
              <motion.div className="relative w-full h-full flex flex-col items-center justify-center">
                <Image
                  src="/hotels-near-velavadar-1.jpg"
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-contain object-bottom"
                />
              </motion.div>
            </div>

            <div className={`h-1/2 w-full flex flex-col items-center justify-start px-7`}>
              <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-base"} font-semibold my-2 italic`}>
                Which is the best place to stay in Velavadar near Bhavnagar among hotels and resorts in Blackbuck National Park?
              </span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-sm"} font-normal italic`}>
                Blackbuck National Park has two options to stay. Our recommendation is Blackbuck Safari Lodge, a hotel in Velavadar National Park near Bhavnagar.
              </span>
            </div>
          </div>
        </div>
      </div>



      <div ref={div2Ref} className={`${mobileView ? "h-[1200px] py-4" : "h-[700px]"} w-full flex flex-col items-center justify-center gap-2 bsl-bg-div2 ${mont.className}`}>
        <motion.div
          ref={div2Ref}
          className={`h-[600px] w-2/3 flex ${mobileView ? "flex-col" : ""} items-center justify-center gap-4`}
          initial={{ opacity: 0, y: 50 }}
          animate={(div2InView || div3InView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className={`h-full ${mobileView ? "w-full" : "w-1/2"} flex flex-col items-center justify-center gap-4`}>
            <span className={`text-white ${mobileView ? "text-base" : "text-3xl"} font-semibold my-2`}>
              Blackbuck Safari Lodge - Hotel in Velavadar National Park
            </span>
            <span className={`text-white ${mobileView ? "text-sm" : "text-xl"} font-bold my-2`}>
              Why choose Blackbuck Safari Lodge is the most suited hotel to stay in Velavadar?
            </span>
            <span className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal`}>
              The lodge is situated at a 10 minutes drive from the safari gate, consequently making it a preferred choice for wildlife enthusiasts visiting jeep safaris and birding in Velavadar National Park along with Blackbuck sightings. The lodge is an ideal accommodation option for guests who plan to spend a lot of time in the jungle.<br />
              In addition, Velavadar National Park boasts of the highest number of visiting raptors during the winters. Conversely, the safari lodge is also the first choice among hotels in Blackbuck National Park for guests wanting to relax and spend a weekend at a picturesque wildlife lodge surrounded by beautiful grasslands.<br />
              Moreover, Blackbuck National Park – Velavadar also acts as a home for lesser floricans during their monsoon breeding.
            </span>
          </div>
          <div className={`h-full ${mobileView ? "w-full" : "w-1/2"} flex flex-col items-center justify-center gap-2`}>
            <span className={`text-white ${mobileView ? "text-base" : "text-xl"} font-bold`}>
              Book Hotels and Resorts now!
            </span>
            <motion.div className={`relative w-4/5 ${mobileView?"h-[20vh]":"h-2/3"} p-4 flex flex-col items-center justify-center`}>
              <Image
                src="/resort-in-blackbuck-national-park.jpg"
                alt="bslDiv2img"
                fill
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          ref={div2Ref}
          className={`w-full flex ${mobileView?'flex-col h-[400px]':'h-[100px]'} items-center justify-center gap-10`}
          initial={{ opacity: 0, y: 50 }}
          animate={(div2InView || div3InView) ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
              {[
                { href: "tel:+91-8860279222", label: "Call Now" },
                { href: "/about-velavadar-national-park-bhavnagar", label: "About Us" },
                { href: "/contact-us", label: "Responsible Tourism" },
                { href: "/contact-us", label: "Contact Us" },
              ].map((btn, i) => (
                <motion.button
                key={i}
                className={`relative h-auto w-auto border-2 border-white rounded-full ${mobileView ? "text-xs px-2 py-2" : "text-sm px-3 py-2 my-3"} font-light cursor-pointer ${mont.className}`}
                initial={{
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    backdropFilter: 'blur(0px)',
                    color: 'white'
                }}
                whileHover={{
                    backgroundColor: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(7px)',
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    opacity: 0.77,
                    color: 'black',
                }}
                whileTap={{
                    scale: 0.95,
                    opacity: 0.54
                }}
            >
                <motion.span 
                    className="relative z-10"
                    whileHover={{transition: { duration: 0.3 } }}
                >
                  <Link href={btn.href} passHref>{btn.label}</Link>
                </motion.span>
            </motion.button>
              ))}
          </motion.div>
      </div>



      <div ref={div4Ref} className={`${mobileView ? "h-auto" : "h-[300px]"} w-full flex flex-col items-center justify-center bg-intm-grey gap-2 ${mont.className}`}>
        <div className={`h-[100px] w-2/3 flex items-center justify-center ${mobileView ? "text-base" : "text-2xl"} font-semibold text-earth-brown`}>
          Facilities at the Hotel
        </div>
        <div className={`w-2/3 flex ${mobileView ? "flex-col h-[1000px]" : "h-[200px]"} items-center justify-center`}>
          {div4imgs.map((item, index) => (
            <div key={index} className={`h-full ${mobileView ? "w-full" : "w-1/10"} flex flex-col items-center justify-cente`}>
              <motion.div
                className="relative w-4/10 h-4/10 p-4 flex flex-col items-center justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={(div4InView || div5InView) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="100vw"
                  className="object-contain object-center"
                />
              </motion.div>
              <motion.div
                className="text-xs text-earth-brown flex items-center justify-center text-center"
                initial={{ opacity: 0, x: 50 }}
                animate={(div4InView || div5InView) ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                {item.desc}
              </motion.div>
            </div>
          ))}
        </div>
        <div className='h-[3vh] w-full'></div>
      </div>



      <div ref={div5Ref} className={`${mobileView?"h-[1700px]":"h-[900px]"} w-screen relative z-10 flex items-center justify-center text-3xl text-black home-page-bg-div3 ${mont.className}`}>
        <div className={`h-4/5 w-4/5 bg-black/54 rounded-xl flex ${mobileView ? "flex-col" : ""} items-center justify-center`} style={{ backdropFilter: 'blur(7px)' }}>
          {/* Left Side */}
          <div className={`h-full ${mobileView ? "w-full" : "w-2/3"} flex flex-col items-start justify-center p-7 gap-3`}>
            <span className={`text-white ${mobileView ? "text-base" : "text-2xl"} font-extrabold ${mont.className}`}>Things to Do at Blackbuck National Park</span>
            <div className={`text-white ${mobileView ? "text-xs" : "text-base"} font-normal grid grid-cols-2 gap-x-6 gap-y-1`}>
              <div className="flex flex-col gap-1 my-4">
                <span>Jeep Safari</span>
                <span>Guided Nature Walks</span>
                <span>Tribal Village Visit</span>
                <span>Cultural Immersion</span>
                <span>Birding Trips with Naturalist</span>
                <span>Private Bush Dinners</span>
              </div>
              <div className="flex flex-col gap-1 my-4">
                <span>Wildlife Presentations</span>
                <span>Cultural Activities</span>
                <span>Cycling</span>
                <span>Star Gazing</span>
                <span>Indoor Games</span>
              </div>
            </div>

            <span className={`text-white ${mobileView ? "text-base" : "text-xl"} font-extrabold ${mont.className}`}>Gallery - Hotel and Blackbuck National Park</span>
            <div className={`${mobileView ? "h-[20vh]" : "h-1/4"} w-full overflow-hidden`}>
              <motion.div
                ref={ref}
                className={`flex gap-4 ${mobileView ? "h-full" : ""} w-full overflow-x-auto scrollbar-hide py-4 cursor-all-scroll`}
                style={{
                  scrollSnapType: 'x mandatory',
                  scrollBehavior: 'smooth'
                }}
              >
                {div5GalleryImages.map((image) => (
                  <div
                    key={image.id}
                    className={`relative h-full ${mobileView ? "w-2/3" : "w-1/5"} flex-shrink-0 scroll-snap-start`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={354}
                      height={354}
                      className="object-cover rounded-lg"
                    />
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.button
              className={`relative border-2 border-white px-3 py-2 my-3 rounded-full ${mobileView?"text-xs":"text-sm"} font-light cursor-pointer ${mont.className}`}
              initial={{
                  backgroundColor: 'rgba(0, 0, 0, 0)',
                  backdropFilter: 'blur(0px)',
                  color: 'white'
              }}
              whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  backdropFilter: 'blur(7px)',
                  scale: 1.1,
                  transition: { duration: 0.3 },
                  opacity: 0.77,
                  color: 'black',
              }}
              whileTap={{
                  scale: 0.95,
                  opacity: 0.54
              }}
          >
              <motion.span 
                  className="relative z-10"
                  whileHover={{transition: { duration: 0.3 } }}
              >
                  <Link href="/contact-us" passHref>Responsible Tourism</Link>
              </motion.span>
          </motion.button>
          </div>

          {/* Right Side - Form */}
          <div className={`h-full ${mobileView ? "w-full" : "w-1/3"} flex flex-col items-center justify-center p-7`}>
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



      <div ref={div6Ref} className={`${mobileView?"h-[500px]":"h-[300px]"}  w-full flex flex-col items-center justify-center gap-2 ${mont.className}`}>
        <div className={`h-[100px] w-2/3 flex items-center justify-center ${mobileView ? "text-lg" : "text-2xl"} font-semibold text-earth-brown`}>
          How to Reach Velavadar
        </div>
        <div className={`${mobileView?"h-[400px]":"h-[200px]"} w-2/3 flex ${mobileView ? "flex-col" : ""} items-center justify-center`}>
          <div className={`h-full ${mobileView ? "w-full" : "w-1/3"} flex flex-col items-center justify-start`}>
            <span className={`flex items-center justify-center ${mobileView ? "text-base" : "text-xl"} font-semibold text-earth-brown`}>
              By Air
            </span>
            <div className={`flex flex-col items-center ${mobileView ? "text-xs" : "text-base"} text-earth-brown`}>
              <span className="font-semibold">Nearest Airport:</span>
              <span>Ahmedabad – 150 km</span>
              <span>Bhavnagar – 65 km</span>
            </div>
          </div>
          <div className={`h-full ${mobileView ? "w-full" : "w-1/3"} flex flex-col items-center justify-start`}>
            <span className={`flex items-center justify-center ${mobileView ? "text-base" : "text-xl"} font-semibold text-earth-brown`}>
              By Train
            </span>
            <div className={`flex flex-col items-center ${mobileView ? "text-xs" : "text-base"} text-earth-brown`}>
              <span className="font-semibold">Nearest Railway Station:</span>
              <span>Ahmedabad – 150 km</span>
              <span>Bhavnagar – 65 km</span>
            </div>
          </div>
          <div className={`h-full ${mobileView ? "w-full" : "w-1/3"} flex flex-col items-center justify-start`}>
            <span className={`flex items-center justify-center ${mobileView ? "text-base" : "text-xl"} font-semibold text-earth-brown`}>
              By Road
            </span>
            <div className={`flex flex-col items-center ${mobileView ? "text-xs" : "text-base"} text-earth-brown`}>
              <span className="font-semibold">Nearby Cities:</span>
              <span>Ahmedabad – 145 Km</span>
              <span>Anand – 142 Km</span>
              <span>Vadodara – 175 km</span>
              <span>Rajkot – 150 km</span>
            </div>
          </div>
        </div>
        <div className='h-[3vh] w-full'></div>
      </div>



      <div ref={div7Ref} className={`${mobileView?"h-[1400px]":"h-[1000px]"} bg-white w-screen flex flex-col items-center justify-center relative ${mont.className}`}>
        <div className='h-[150px] w-2/3 flex flex-col items-center justify-center text-3xl font-semibold text-earth-brown'>
          <span className={`text-earth-brown ${mobileView ? "text-lg" : "text-3xl"} font-extrabold`}>Testimonials</span>
          <span className={`text-earth-brown ${mobileView ? "text-base" : "text-2xl"} font-bold my-2`}>What do our guests say about The Blackbuck Lodge?</span>
        </div>
        <div className={` w-2/3 flex ${mobileView?"flex-col h-auto":"h-[850px]"} items-center justify-center`}>
          <div className={`h-full ${mobileView?"w-full":"w-2/3"} flex flex-col items-center justify-center gap-4`}>
            <div className="h-1/3 w-full flex flex-col items-center justify-center text-center gap-2">
              <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-xl"} font-bold`}>Best Resort and Good Birding Spots</span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-base"}`}>Blackbuck safari lodge is the best resort in velavadar. Administrative and service staff is good. Food is excellent. Naturalist Mr Amit associated with the lodge is knowledgeable and enthusiastic. Worth visiting place.</span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-lg"} font-bold`}>TripAdvisor</span>
            </div>
            <div className="h-1/3 w-full flex flex-col items-center justify-center text-center gap-2">
              <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-xl"} font-bold`}>Excellent Hotel and Nice Staff</span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-base"}`}>I spent 3 days in Velavadar in in December 2019, and it was an amazing experience. The rooms are very comfy and well-appointed with great showers, which is much appreciated after long and dusty safaris. A special mention for Amit Vegad, the resident naturalist at the property, who was very helpful and really, knowledgeable.</span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-lg"} font-bold`}>TripAdvisor</span>
            </div>
            <div className="h-1/3 w-full flex flex-col items-center justify-center text-center gap-2">
              <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-xl"} font-bold`}>A much needed option in Velavadar</span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-base"}`}>I spent 3 days in Velavadar in in December 2019, and it was an amazing experience. The rooms are very comfy and well-appointed with great showers, which is much appreciated after long and dusty safaris. A special mention for the resident naturalist at the property, who was very helpful and really, knowledgeable.</span>
              <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-lg"} font-bold`}>TripAdvisor</span>
            </div>
          </div>
          <div className={`h-full ${mobileView?"w-full":"w-2/3"} flex flex-col items-center justify-center`}>
            <span className={`text-earth-brown ${mobileView?"text-lg mt-10":"text-lg"} font-bold`}>In Media</span>
            <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-lg"} cursor-pointer hover:text-earth-dark-soil`}>Edwina D’Souza | www.wannabemaven.com</span>
            <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-lg"} cursor-pointer hover:text-earth-dark-soil`}>Anil Mulchandani | www.feamag.com</span>
            <span className={`text-earth-brown ${mobileView ? "text-sm" : "text-lg"} mt-10 font-bold`}>Location</span>
            <span className={`text-earth-brown ${mobileView ? "text-xs" : "text-base"}`}>Hotel Blackbuck National Park Velavadar</span>
            <div className={`${mobileView ? "w-full h-[25vh]" : "w-3/4 h-1/2"} mt-4 border-2 border-earth-brown text-earth-brown`}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14793.533149418641!2d71.949527!3d22.034929!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958cb6716f898a3%3A0xccd4167e7a60d8f0!2sBlackbuck%20Safari%20Lodge-Velavadar!5e0!3m2!1sen!2sus!4v1747820943154!5m2!1sen!2sus"
              style={{ border: 0, width: '100%', height: '100%' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
        </div>
        <div className='h-[6vh] w-full'></div>
      </div>


      <div ref={div8Ref} className='min-h-[600px] py-10 w-screen flex items-center justify-center relative'>
        <div className='h-full w-2/3 flex flex-col items-start justify-start gap-7 p-4'>
          <span className={`text-earth-brown ${mobileView?"text-base":"text-2xl"} font-extrabold ${mont.className}`}>Frequently Asked Questions</span>
          <div className={`h-3/4 w-full overflow-y-auto mb-5`}>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-2 border-earth-brown p-4">
                <button 
                    className={`w-full text-left ${mobileView?"text-sm":"text-lg"} bsd text-earth-brown font-semibold flex justify-between items-center cursor-pointer ${mont.className}`}
                    onClick={() => toggleAcc(index)}
                >
                    {faq.question}
                    <span>{openIndex === index ? "▲" : "▼"}</span>
                </button>
                <div 
                    className={`overflow-hidden ${mont.className} text-earth-brown ${mobileView?"text-xs":"text-base"} transition-all duration-500 ease-in-out ${
                      openIndex === index ? "opacity-100 mt-2" : "max-h-0 opacity-0"
                  }`}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
