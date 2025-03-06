"use client"
import React,{useState} from 'react'
import Link from 'next/link'
import Logo from './Logo'
import { useRouter } from 'next/navigation'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailIcon from '@mui/icons-material/Mail';
import {motion} from "framer-motion";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({href, title, className=""}) => { 
  const router=useRouter();
  return(
    <motion.div whileHover={{scale:1.1}}>
    <Link href={href} className={`${className} relative group text-dark dark:text-light ` }> {title}
      <span className={`h-[1px] inline-block  bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 dark:bg-light
      ${router.asPath===href ? 'w-full':'w-0'}`} >&nbsp;</span>
    </Link>
  </motion.div>
  );
}
const CustomMobileLink = ({href, title, className="",toggle}) => { 
  const router=useRouter();
  const handleMobileViewClick=()=>{
      toggle();
      router.push(href);
  }
  return(
  <button onClick={handleMobileViewClick} href={href} className={`${className} relative group my-2` }> 
  {title}
    <span className={`h-[1px] inline-block  bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 
    ${router.asPath===href ? 'w-full':'w-0'}`} >&nbsp;</span>
  </button>
  );
}

const Navbar = () => {
  const [mode,setMode]=useThemeSwitcher();
  const [isOpen,setIsOpen]=useState(false);
  const handleClick=()=>{
    setIsOpen(!isOpen);
  }
  return (
    <header className='min-w-full w-full z-10 shadow-sm px-32 py-3 font-semibold text-md flex items-center  gap-5  sticky top-0 left-0 right-0 bg-light dark:bg-dark dark:text-light lg:px-0 md:px-0 sm:px-0 xs:px-0 sm:h-16 '>

        {/* Mobile View */}
        <button className='ml-5 hidden lg:flex md:flex sm:flex flex-col justify-centerc items-center' onClick={handleClick}>
          <span className={`bg-dark dark:bg-light block h-0.5 transition-all duration-150 ease-out w-6 rounded-sm ${isOpen?'rotate-45 translate-y-1':'-translate-y-0.5'}`}></span>
          <span className={`bg-dark dark:bg-light block h-0.5 transition-all duration-150 ease-out w-6 my-0.5 rounded-sm ${isOpen?'opacity-0':'opacity-100'}`}></span>
          <span className={`bg-dark dark:bg-light block h-0.5 transition-all duration-150 ease-out w-6 rounded-sm ${isOpen?'-rotate-45 -translate-y-1':'translate-y-0.5'}`}></span>
        </button>
        {
          isOpen?
        (<motion.div 
          initial={{scale:0,opacity:0,x:"-50%",y:"-50%"}}
          animate={{scale:1,opacity:1}}
         className="min-w-[70vw] hidden lg:flex md:flex sm:flex flex-col justify-between items-center p-2 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-light dark:text-dark bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32">
            <nav className='flex flex-col justify-center items-center  '>
              <CustomMobileLink toggle={handleClick} href="/" title="Home" className=''>Home</CustomMobileLink>
              <CustomMobileLink toggle={handleClick} href="/about" title="About" className=''>About</CustomMobileLink>
              <CustomMobileLink toggle={handleClick} href="/experience" title="Experience" className=''>Experience</CustomMobileLink>
              <CustomMobileLink toggle={handleClick} href="/projects" title="Projects" className='' >Projects</CustomMobileLink>
            </nav>
            <nav className="flex  flex-wrap w-fit  items-center justify-end scale-125 float-right mt-2">
                <motion.a  href="https://www.linkedin.com/in/shalini-baswaraju-58a1731bb/" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
                <motion.a  href="https://github.com/Shalini648404" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><GitHubIcon/></motion.a>
                <motion.a  href="mailto:shalinibaswaraju@gmail.com" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><MailIcon/></motion.a>
                <button className={`flex items-center justify-center rounded-full p-1 scale-75 border ${mode==="dark"?"border-dark":"border-light"}`} 
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                  {mode === 'dark' ? <WbSunnyIcon className='fill-dark' /> : <NightlightRoundIcon className='fill-light'/>}
                </button>
            </nav>
        </motion.div>):null
        }




          <div className="w-full flex justify-between dark:text-light">
            <nav className='flex gap-x-12  lg:hidden md:hidden sm:hidden z-10 items-center'>
              <CustomLink href="/" title="Home" className=''>Home</CustomLink>
              <CustomLink href="/about" title="About" className=''>About</CustomLink>
              <CustomLink href="/experience" title="Experience" className=''>Experience</CustomLink>
              <CustomLink href="/projects" title="Projects" className='' >Projects</CustomLink>
            </nav>

            <nav className="flex  flex-wrap w-fit  items-center justify-end scale-125 float-right lg:hidden md:hidden sm:hidden ">
                <motion.a  href="https://www.linkedin.com/in/shalini-baswaraju-58a1731bb/" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><LinkedInIcon/></motion.a>
                <motion.a  href="https://github.com/Shalini648404" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><GitHubIcon/></motion.a>
                <motion.a  href="mailto:shalinibaswaraju@gmail.com" target='_blank' className="w-6 mr-3 my-auto" whileHover={{y:-4}} whileTap={{scale:0.9}}><MailIcon/></motion.a>
                <button className={`flex items-center justify-center rounded-full mt-1 p-1 scale-75 border ${mode==="dark"?"border-light":"border-dark"}`} 
                  onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                  {mode === 'dark' ? <WbSunnyIcon className='fill-light' /> : <NightlightRoundIcon className='fill-dark'/>}
                </button>
            </nav>
          </div>
          <div className='w-16 absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 mt-12'><Logo/></div>
    </header>
  )
}

export default Navbar