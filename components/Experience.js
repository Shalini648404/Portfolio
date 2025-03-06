"use client"
import React, { useRef } from 'react'
import { motion,useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({position,company,companyLink,time,duration,work}) => {
    const ref=useRef(null);
    return (
        <li ref={ref} className='my-8 w-3/5 md:w-5/6 sm:w-5/6 mx-auto first:mt-0 last:mb-0 flex flex-col items-center justify-between bg-light dark:bg-dark dark:text-light'>
            <LiIcon reference={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5,type:"spring"}}>
                <h3 className='font-bold capitalize text-2xl '>{position} <a href={companyLink} target="_blank" className="text-primary dark:text-primaryDark capitalize">@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {duration}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    );
}
const Experience = () => {
    const ref=useRef(null);
    const {scrollYProgress} =useScroll({
        target:ref,
        offset:["start end","center start"]
    });
  return (
    <>
    <div className="mt-32">
        <h1 className="font-bold text-8xl mb-20  text-center w-full md:text-4xl sm:text-4xl">Experience</h1>
        <div ref={ref} className='w-3/4 mx-auto relative md:w-5/6 sm:w-5/6 '>
        <motion.div style={{scaleY:scrollYProgress}} className='absolute left-8 md:left-4 sm:left-4 top-0 w-1 h-full bg-primary dark:bg-primaryDark origin-top'></motion.div>
            <ul className='w-full flex flex-col items-start justify-between ml-4'>
                <Details position="Full Stack Developer" company="Isha Foundation" companyLink="https://isha.sadhguru.org/en/sadhguru/mission/isha-foundation" time="Jun 2023 - Nov 2024" duration="1.5 years" work="Developed and optimized full-stack web applications for internal operations using React.js, Node.js, and Express.js. Designed dynamic front-end dashboards for real-time data insights and improved backend API performance with optimized queries and caching, reducing latency by 40%." />
                 <Details position="Application Developer" company="Development Bank of Singapore" companyLink="https://www.dbs.com/india/default.page" time="Jul 2022 - May 2023" duration="11 months" work="Enhanced payment processing algorithms in Java, reducing transaction reconciliation time by 20% for faster settlements. Strengthened security measures using Java and Python, leading to a 45% decrease in vulnerabilities. Optimized React.js and Node.js components, improving page load times by 30% for high-traffic applications." />
            </ul>
        </div>
    </div>
    </>
  )
}

export default Experience