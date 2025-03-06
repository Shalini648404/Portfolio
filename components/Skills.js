"use client"

import React from 'react'
import {motion} from "framer-motion"

const SkillNames=({name,x,y})=>{
    return(
            <motion.div className='flex justify-center items-center absolute rounded-full sm:text-xs sm:font-normal font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer dark:bg-light dark:text-dark dark:shadow-light lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3' 
            whileHover={{scale:1.1}}
            initial={{x:0,y:0}}
            whileInView={{x:x,y:y,transition:{duration:1.5}}}
            viewport={{once:true}}>
            {name}
            </motion.div>
    );
}
const Skills = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-32 w-full text-center md:text-4xl sm:text-4xl'>Skills</h2>
        <div className="w-full h-screen lg:h-[80vh] md:h-[60vh] sm:h-[40vh] relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm">
            <motion.div className='flex justify-center items-center absolute rounded-full font-semibold  p-8 shadow-dark bg-dark dark:text-dark dark:shadow-light dark:bg-light text-white cursor-pointer lg:p-6 md:p-4 sm:p-2' whileHover={{scale:1.1}}>
            Web
            </motion.div>
            <SkillNames name={"HTML"} x="12vw" y="-8vw"/>
            <SkillNames name={"CSS"} x="-12vw" y="-8vw"/>
            <SkillNames name={"ExpressJS"} x="12vw" y="8vw"/>
            <SkillNames name={"DSA"} x="-12vw" y="8vw"/>
            <SkillNames name={"Java"} x="0vw" y="18vw"/>
            <SkillNames name={"JS"} x="0vw" y="-18vw"/>
            <SkillNames name={"MongoDB"} x="25vw" y="0vw"/>
            <SkillNames name={"MySQL"} x="-25vw" y="0vw"/>
            <SkillNames name={"ReactJS"} x="22vw" y="-18vw"/>
            <SkillNames name={"NodeJS"} x="-22vw" y="-18vw"/>
            <SkillNames name={"Git"} x="-25vw" y="15vw"/>
            <SkillNames name={"Github"} x="25vw" y="15vw"/>
            <SkillNames name={"Tailwind"} x="40vw" y="-8vw"/>
            <SkillNames name={"Python"} x="-40vw" y="-8vw"/>

            {/*

            
            
            <SkillNames name={"Git"} x="-20vw" y="-18vw"/>
            <SkillNames name={"Github"} x="-28vw" y="-8vw"/> */}
        </div>
    </>
  )
}

export default Skills