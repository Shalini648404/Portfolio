"use client"


import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from "framer-motion";
const MotionLink=motion(Link);
const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-1  dark:text-light'>
        <MotionLink href="/" className="w-12 p-[6px] h-12 bg-dark dark:bg-light flex items-center justify-center rounded-full border-2 border-light dark:border-dark" 
          whileHover={{
            backgroundColor:["rgba(250,204,21,1)", "#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212", "rgba(250,204,21,1)"]
            }}
          transition={{duration:1,repeat:Infinity}}
          >
        <Image src="/images/logo/Letter_S_Logo.png" width={500} height={500} alt="image" className=''/>
        </MotionLink>
    </div>
  )
}

export default Logo