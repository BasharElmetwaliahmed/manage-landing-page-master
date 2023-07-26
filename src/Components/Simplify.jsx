import tabletbg from '../assets/images/bg-tablet-pattern.svg'
function Simplify() {
  return (
    <div className="bg-primaryred relative overflow-hidden">
        <div className="container flex py-[70px] items-center justify-between relative lg:flex-row flex-col">
            <h4 className="text-white text-[35px] font-semibold w-[300px] mb-3 lg:w-[360px] relative  text-center lg:text-start z-1">Simplify how your team  works today.</h4>
            <button className="shadow-primaryred bg-white text-primaryred py-2 rounded-3xl px-5 ">Get Started</button>
            <img src={tabletbg} className='absolute opacity-10 w-[400px]  lg:left-[78px] lg: z-0 lg:block hidden'/>

        </div>
        <img src={tabletbg} className='absolute opacity-10 w-[400px] :top-[-30px] lg:right-[-216px] lg:top-[-319px] '/>
    </div>
  )
}

export default Simplify