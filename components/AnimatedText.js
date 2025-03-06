"use client"
import React from 'react'
import {motion} from "framer-motion"
const quote={
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:0.5,
            staggerChildren:0.18,
        }
    }
}
const singleWord={
    initial:{
        opacity:0,
        y:100,
    },
    animate:{
        opacity:1,
        y:0,
        transition:{
            duration:1
        }
    }
}
const AnimatedText = ({text,className}) => {
  return (
    <div className='w-full mx-auto py-10 md:py-3 sm:py-3 flex items-center justify-center text-center overflow-hidden bg-light dark:bg-dark  dark:text-light '>
        <motion.h1 variants={quote} initial="initial" animate="animate" className={`${className} w-full inline-block px-2 font-bold capitalize text-7xl md:text-3xl sm:text-3xl `}>
            {
                text.split(" ").map((word,index)=>(
                    <motion.span variants={singleWord} key={word+"-"+index} className='inline-block'>  
                        {word}&nbsp;
                    </motion.span>
                ))
            }
        </motion.h1>
    </div>
  )
}

export default AnimatedText