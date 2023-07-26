// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import aliImg from '../assets/images/avatar-ali.png'
import anishaImg from '../assets/images/avatar-anisha.png'
import richardImg from '../assets/images/avatar-richard.png'
import shanaiImg from '../assets/images/avatar-shanai.png'


// Import Swiper styles
import 'swiper/css';

 const SwiperComponent=() => {
      const list=[
        {
            id:0,
            title:'Anisha Li',
            content:` “Manage has supercharged our team’s workflow. The ability to maintain 
                      visibility on larger milestones at all times keeps everyone motivated.”`,
            img:anishaImg          
        },
           {
            id:2,
            title:'Ali Bravo',
            content:` “We have been able to cancel so many other subscriptions since using 
                       Manage. There is no more cross-channel confusion and everyone is much 
                       more focused.”`,
            img:aliImg           
        },
        {
            id:3,
            title:' Richard Watts',
            content:`“Manage allows us to provide structure and process. It keeps us organized 
  and focused. I can’t stop recommending them to everyone I talk to!”`,
            img:richardImg
        },
        {
            id:4,
            title:'Shanai Gough',
            content:`  “Their software allows us to track, manage and collaborate on our projects 
  from anywhere. It keeps the whole team in-sync without being intrusive.”`,
            img:shanaiImg
        },


    ]
  return (
 

   <>
   {
      
    list.map(person=><div key={person.id} className='relative bg-gray-200 w-[600px] min-h-[200px] pt-[60px] my-20 text-center mx-auto'>
        <img src={person.img} className='absolute w-20 left-[50%] translate-x-[-50%] top-0 translate-y-[-50%]' />
        <h3 className='text-primaryblue mb-2 font-semibold text-base '>{person.title}</h3>
        <p className='text-bluegrayish text-sm px-6'>{person.content}
        </p>
    </div>)
  

   }
   </>
  );
};
export default SwiperComponent