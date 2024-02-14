"use client";
import Link from 'next/link'
import React, {useState} from 'react'
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';
import { MotionConfig, motion } from "framer-motion";
import Toggle from './Toggle';
const navLinks =[
  {
    title: "About",
    path: "#about", 
  },
  {
    title: "Proyects",
    path: "#proyects", 
  },
  {
    title: "Contact",
    path: "#contact", 
  }
]

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-3'>
          

            <div className='mobile-menu block md:hidden'>
              {
                 <MotionConfig
                 transition={{
                   duration: 0.5,
                   ease: "easeInOut",
                 }}
               >
                 <motion.button
                   initial={false}
                   animate={navbarOpen ? "open" : "closed"}
                   onClick={() => setNavbarOpen((pv) => !pv)}
                   className="relative h-20 w-20 rounded-full bg-white/0 transition-colors"
                 >
                   <motion.span
                     variants={VARIANTS.top}
                     className="absolute h-1 w-10 bg-white"
                     style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
                   />
                   <motion.span
                     variants={VARIANTS.middle}
                     className="absolute h-1 w-10 bg-white"
                     style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
                   />
                   <motion.span
                     variants={VARIANTS.bottom}
                     className="absolute h-1 w-5 bg-white"
                     style={{
                       x: "-50%",
                       y: "50%",
                       bottom: "35%",
                       left: "calc(50% + 10px)",
                     }}
                   />
                 </motion.button>
               </MotionConfig>
              }
            </div>
            
            
            
            <div className='menu hidden md:block md:w-auto' id='navbar'>
              <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
               {navLinks.map((link, index)=>(
                <li key={index}>
                  <NavLink href={link.path} title={link.title}/>
                </li>
               ))}
              </ul>
            </div>
        </div>
        {
          navbarOpen ? <MenuOverlay links={navLinks} /> : null
        }
    </nav>
  );
};

const VARIANTS = {
  top: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      top: ["35%", "50%", "50%"],
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      top: ["50%", "50%", "35%"],
    },
  },
  middle: {
    open: {
      rotate: ["0deg", "0deg", "-45deg"],
    },
    closed: {
      rotate: ["-45deg", "0deg", "0deg"],
    },
  },
  bottom: {
    open: {
      rotate: ["0deg", "0deg", "45deg"],
      bottom: ["35%", "50%", "50%"],
      left: "50%",
    },
    closed: {
      rotate: ["45deg", "0deg", "0deg"],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};


export default Navbar