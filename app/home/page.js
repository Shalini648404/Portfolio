import Image from 'next/image'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import LaunchIcon from '@mui/icons-material/Launch';
import TransitionEffect from "@/components/TransitionEffect";


export default function Home(){
  return (
    <>
    <TransitionEffect/>
          <div className="flex items-center w-full  min-h-screen bg-light dark:bg-dark dark:text-light lg:justify-between md:justify-center sm:justify-end lg:flex-row md:flex-col-reverse sm:flex-col-reverse">
            <div className='w-1/2 md:w-full sm:w-full flex flex-col items-center self-center mb-6 md:mx-2 sm:mx-2 md:mb-2 sm:mb-2 md:justify-center sm:justify-center mx-auto'>
              <div className='w-3/4 flex justify-center '>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className={"text-left !py-0 md:text-center sm:text-center"}/>
              </div>
              <p className="w-3/5 mb-4 mr-20 md:mr-0 sm:mr-0 md:w-5/6 sm:w-5/6 text-base font-medium md:text-center sm:text-center md:text-sm sm:text-sm">As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.</p>
                <div className='flex pl-28 md:pl-0 sm:pl-0 items-center self-start my-4  md:self-center sm:self-center '>
                <Link href={"/Shalini____Resume.pdf"} target='_blank' className={"bg-dark text-light dark:bg-light dark:text-dark px-6 py-2 md:px-4 sm:px-4 md:py-2 sm:py-2 rounded-lg text-lg md:text-base sm:text-base font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:my-2 sm:my-3 md:mr-6 sm:mr-6"} download={true}>               
                Resume <LaunchIcon/>
                </Link>
                <Link href={"mailto:shalinibaswaraju@gmail.com"} target='_blank' className={"bg-dark text-light dark:bg-light dark:text-dark ml-8 sm:ml-4 md:ml-4 px-6 py-2 md:px-4 sm:px-4 md:py-2 sm:py-2 rounded-lg text-lg md:text-base sm:text-base font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:my-2 sm:my-3"}>Contact</Link>
              </div>
            </div>
            <div className="w-1/2 h-[80vh] md:h-[50vh] sm:h-[50vh] flex  justify-center  md:w-3/4 sm:w-3/4 sm:mx-auto lg:mx-auto md:mx-auto md:justify-center sm:justify-center">
              <Image src={"/images/home/pic.png"} priority quality={100} alt={"My_Image"} className="w-full h-full object-contain mx-auto " width={300} height={300}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
          </div>
        <div className="hidden right-12 bottom-4 w-24 lg:hidden md:hidden sm:hidden">
          {/* <Lightbulb className='w-24 text-yellow-300 scale-[14.50]'/> */}
        <Image src={"/images/svgs/miscellaneous_icons_1.svg"} priority quality={100} alt="lightbulb" width={300} height={300} className='w-full h-auto'  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"></Image>
        </div>
    </>
  )
}

/*export default function Home(){
  return (
    <>
    <TransitionEffect/>
          <div className="flex items-center justify-between w-full min-h-screen bg-light dark:bg-dark dark:text-light lg:flex-row md:flex-col-reverse sm:flex-col-reverse md:justify-normal sm:justify-normal">
            <div className='w-1/2 md:w-full sm:w-full flex flex-col items-center self-center mb-6 md:mx-2 sm:mx-2 md:mb-2 sm:mb-2 md:justify-center sm:justify-center mx-auto'>
              <div className='w-3/4 flex justify-center'>
              <AnimatedText text="Turning Vision Into Reality With Code And Design." className={"text-left !py-0 md:text-center sm:text-center"}/>
              </div>
              <p className="w-3/5 mb-4 mr-20 md:mr-0 sm:mr-0 md:w-5/6 sm:w-5/6 text-base font-medium md:text-center sm:text-center md:text-sm sm:text-sm">
                As a skilled full-stack developer, I am dedicated to turning ideas into innovative web applications. 
                Explore my latest projects and articles, showcasing my expertise in React.js and web development.
              </p>
              <div className='flex pl-28 md:pl-0 sm:pl-0 items-center self-start my-4 md:self-center sm:self-center'>
                <Link href={"/Shalini-Resume.pdf"} target='_blank' 
                  className={"bg-dark text-light dark:bg-light dark:text-dark px-6 py-2 md:px-4 sm:px-4 md:py-2 sm:py-2 rounded-lg text-lg md:text-base sm:text-base font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:my-2 sm:my-3 md:mr-6 sm:mr-6"} download={true}>
                  Resume <LaunchIcon/>
                </Link>
                <Link href={"mailto:shalinibaswaraju@gmail.com"} target='_blank' 
                  className={"bg-dark text-light dark:bg-light dark:text-dark ml-8 sm:ml-4 md:ml-4 px-6 py-2 md:px-4 sm:px-4 md:py-2 sm:py-2 rounded-lg text-lg md:text-base sm:text-base font-semibold border-2 border-transparent hover:bg-light hover:text-dark hover:border-dark dark:hover:bg-dark dark:hover:text-light dark:hover:border-light md:my-2 sm:my-3"}>
                  Contact
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-[80vh] md:h-[50vh] sm:h-[50vh] flex justify-center md:w-3/4 sm:w-3/4 sm:mx-auto lg:mx-auto md:mx-auto md:justify-center sm:justify-center">
              <Image src={"/images/home/pic.png"} priority quality={100} alt={"My_Image"} className="w-full h-full object-contain mx-auto" width={300} height={300} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
            </div>
          </div>
        <div className="hidden right-12 bottom-4 w-24 lg:hidden md:hidden sm:hidden">
          <Image src={"/images/svgs/miscellaneous_icons_1.svg"} priority quality={100} alt="lightbulb" width={300} height={300} className='w-full h-auto' sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </div>
    </>
  )
}*/
