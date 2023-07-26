import logo from '../assets/images/logo - Copy.svg'


function Footer() {
  const links1=['Home','Pricing','Products','Abouts Us'] 
  const links2=['Careers','Community','Privacy Police'] 
  const social=["fa-brands fa-square-facebook","fa-brands fa-square-youtube","fa-brands fa-twitter","fa-brands fa-pinterest","fa-brands fa-instagram"]
  return (
    <div className='bg-bluedark  py-16'>
        <div className='container flex lg:flex-row flex-col-reverse justify-between'>
            <div className='w-full lg:w-[20%] flex flex-col-reverse lg:flex-col gap-10 items-center lg:justify-between '>
                     <img src={logo} alt='logo' className='fill-white w-[200px]'/>

                <div className='flex gap-5 lg:justify-normal justify-evenly gap-19 w-full'>
                    {social.map(item=><a href='#'><i className={`${item} text-[23px] text-white hover:text-primaryred transition-all duration-500  `}></i></a>)}
                </div>
            </div>
            
            <div className='text-bluegrayish lg:w-[40%] my-9 w-full flex justify-evenly lg:justify-between'>
              <ul className='flex flex-col gap-4'>
                              {links1.map(link=><li className='hover:text-primaryred transition-all duration-700'><a href={`/${link.toLowerCase()}`}>{link}</a></li>)}
              </ul>
              <ul className='flex flex-col gap-4' >
                              {links2.map(link=><li className='hover:text-primaryred transition-all duration-700'><a href={`/${link.toLowerCase()}`}>{link}</a></li>)}
              </ul>
            </div>

            <div className='w-full lg:w-[20%] flex flex-col justify-between'>
          <div className=' flex gap-2 items-baseline w-full'>
                 <input type='emai'  placeholder='Update in your inbox' className='py-3 px-4 rounded-[45px] w-[75%] ' />
          <button className='btn w-[20%] flex items-center justify-center'>Go</button>
          </div>
            </div>

        </div>
    </div>
  )
}

export default Footer