import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import aboutImage from "../../public/images/about/header-img.svg"
import Image from 'next/image'
import TransitionEffect from "@/components/TransitionEffect";

const About = () => {
    return (
        <>

        <TransitionEffect/>
        <main className="w-full min-w-full min-h-screen flex flex-col items-center  dark:bg-dark dark:text-light mt-32">
                <AnimatedText text={"Passion Fuels Purpose"}></AnimatedText>
                <div className='w-3/5 h-full font-medium flex lg:flex-col-reverse md:flex-col-reverse  justify-center lg:w-3/4 md:w-3/4 sm:w-3/4 '>
                    <div className='w-3/5 flex flex-col  items-start justify-start lg:w-full md:w-full sm:w-full '>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 lg:mx-auto md:mx-auto sm:mx-auto'>Biography</h2>
                        <p className='font-medium my-4'>I&rsquo;m Shalini Baswaraju, a passionate full stack developer with hands-on experience in building dynamic and scalable web applications. </p>
                        <p className='font-medium my-4'>My journey began with crafting interactive front-end applications, and I&rsquo;ve since expanded my expertise to include backend development, API integrations, and database management.</p>
                        <p className='font-medium my-4'>With a strong foundation in React.js, Express.js, Node.js, SQL, and MongoDB, I take pride in developing seamless, high-performance applications that enhance user experience. My experience at DBS Bank and various projects has strengthened my ability to write clean, efficient, and maintainable code.</p>
                    </div>
                    <div className='w-2/5  sm:mx-auto lg:mx-auto md:mx-auto md:w-3/4 sm:w-3/4'>
                        <Image src={aboutImage} priority  alt={"About_Page_Image"} className="w-full mx-auto h-auto"  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
                    </div>
                </div>
                <Skills/>
                <Experience/>
                <Education/>
        </main>
    
        </>
      )
}

export default About