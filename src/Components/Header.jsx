import { useEffect, useState } from 'react'
import imgLogo from '../assets/images/logo.svg'
function Header() {
    const [links,setLinks]=useState(['Pricing','Product','About Us','Careers','Community'])
    const [navOpened,setNavOpened]=useState(false)
    const [activeBg,setActiveBg]=useState(false)

    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        if(scrollY>100) {
         setActiveBg(true)
        }
        else{
          setActiveBg(false)
        }
      })
    })
  return (
  <>
      <header className={`py-7 fixed w-full z-30 transition-all duration-[0.3s] ${activeBg?'bg-white shadow-md':''} flex items-center content-center `}>
        <div className="container flex justify-between items-center  ">
            <div className='w-30 lg:w-40 '>
                 <img src={imgLogo} className='w-full' alt='logo'/>
            </div>

            <nav className={`${navOpened?'flex':'hidden'} lg:flex  lg:flex-row flex-col absolute lg:relative lg:bg-transparent bg-white lg:p-0 px-[80px] py-[50px] shadow-lg 
            list-none gap-3 lg:gap-6 gap-9 font-medium w-[75%] left-[50%] translate-x-[-50%] lg:translate-x-0 lg:w-fit z-[300]
            items-center top-[160px] lg:top-0 lg:left-0 lg:shadow-none`}>
            {links.map(link=> <li><a className='text-bluedark hover:text-bluegrayish cursor-pointer transition-all  duration-300' href={`/${link.toLowerCase()}`}>{link}</a></li>)}
            </nav>

            <button className='btn hidden lg:block relative '>Get Started</button>
            <button className='text-bluedark text-2xl lg:hidden hover:opacity-70 transition-all  duration-500 relative z-20' onClick={()=>setNavOpened(!navOpened)}>{navOpened?<i className="fa-solid fa-xmark"></i>:<i className="fa-solid fa-bars"></i>}</button>
        </div>
         {navOpened &&  <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-gradient-to-tr bg-opacity-40  z-19' onClick={()=>{
            setNavOpened(false)
            }}></div>}

    </header>
    </>
  )
}

export default Header
