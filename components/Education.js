"use client"
import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion';
import LiIcon from './LiIcon';
const Details = ({type,time,place,info}) => {
    const ref=useRef(null);
    return (
        <li ref={ref} className='my-8 w-3/5 md:w-5/6 sm:w-5/6 mx-auto first:mt-0 flex flex-col justify-between'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
                <h3 className='font-bold capitalize text-2xl '>{type}</h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {place}
                </span>
                <p className='font-medium'>
                    {info}
                </p>
            </motion.div>
        </li>
    );
}
const Education = () => {
    const ref=useRef(null);
    const {scrollYProgress} =useScroll({
        target:ref,
        offset:["start end","center start"]
    });
  return (
    <div className="mt-32 mb-96 lg:mb-[800px] 2xl:mb-[600px] md:mt-32 sm:mt-32 md:mb-60 sm:mb-96 ">
        <h1 className="font-bold text-8xl mb-20 text-center w-full md:text-4xl sm:text-4xl">Education</h1>
        <div ref={ref} className='w-3/4 mx-auto relative md:w-5/6 sm:w-5/6 '>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-8 md:left-4 sm:left-4 top-0 w-1 h-full bg-primary dark:bg-primaryDark origin-top'></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4 '>
                <Details type="Bachelor Of Technology In Computer Science" time="2018-2022" place="Kakatiya Institute of Technology and Science" info="Relevant courses included Data Structures and Algorithms, Database Management System, Operating Systems, Machine Learning and Artificial Intelligence. Graduated in 2022 with 8.34CGPA."  />
                <Details type="Class XII | MPC" time="2016-2018" place="SR EDU Center" info="Relevant courses included Physics Chemistry Mathematics. Graduated in 2018 with 97.5%."  />
                <Details type="Class X | SSC" time="2015-2016" place="Rising Sun Digi High School" info="Graduated in 2016 with 9.2GPA."  />
            </ul>
        </div>
    </div>
  )
}

export default Education