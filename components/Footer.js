"use client"

import Link from 'next/link'
import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import FavoriteIcon from '@mui/icons-material/Favorite';
const Footer = () => {
  return (
    <footer className='w-full min-w-full border-t-2 border-solid border-dark font-medium text-lg flex justify-between px-32 py-6 bg-light dark:bg-dark dark:text-light lg:px-16 md:px-0 sm:justify-center md:justify-center sm:px-0 md:flex-col sm:flex-col '>

        <span className="md:mx-auto sm:mx-auto">{new Date().getFullYear()} &nbsp;<CopyrightIcon/> &nbsp;All Rights Reserved</span>
        <div className="md:mx-auto sm:mx-auto">
            Build With <span className='text-blue-400 text-2xl'><FavoriteIcon/></span> By &nbsp;<Link href={"https://www.linkedin.com/in/shalini-baswaraju-58a1731bb/"} target="_blank" className='underline underline-offset-2'>Shalini</Link>
        </div>
        <Link href="https://www.linkedin.com/in/shalini-baswaraju-58a1731bb/" target="_blank" className="md:mx-auto sm:mx-auto underline underline-offset-2">Say hello</Link>
    </footer>
  )
}

export default Footer