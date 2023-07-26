import landingimg from '../assets/images/illustration-intro.svg'
function Landing() {
  return (
    <div>
        <div className='container  flex  relative lg:justify-between gap:10 flex-col-reverse lg:flex-row  pt-[150px]  '>
            <div className='lg:w-[49%] w-[100%]  flex flex-col justify-center text-center items-center lg:items-start lg:text-start   gap-9'>
                <h1 className='text-bluedark font-bold text-[45px]'>Bring everyone <br/> together to build<br/> better products.</h1>
                <p className='text-bluegrayish w-full lg:w-[49%]'>  Manage makes it simple for software teams to plan day-to-day 
  tasks while keeping the larger team goals in view.</p>
  <button className='btn relative z-10 w-fit'>Get Started</button>
            </div>
      <div className='w-[90%] flex justify-center mx-auto items-center lg:w-[49%]'>
    <img src={landingimg} className='w-full relative z-10'  alt='landing img'/>
      </div>

        </div>
    </div>
  )
}

export default Landing
