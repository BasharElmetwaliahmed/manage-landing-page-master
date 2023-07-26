
function Different() {
    const list=[{id:'01',
  txt:` See how your day-to-day tasks fit into the wider vision. Go from 
  tracking progress at the milestone level all the way done to the 
  smallest of details. Never lose sight of the bigger picture again.`,
  header:`Track company-wide progress`
},
{
    id:'02',
    txt:`Set internal delivery estimates and track progress toward company 
  goals. Our customisable dashboard helps you build out the reports 
  you need to keep key stakeholders informed.
`,
  header:`Advanced built-in reports`
},
{
   id:'03',
   txt:`Stop jumping from one service to another to communicate, store files, 
  track tasks and share documents. Manage offers an all-in-one team 
  productivity solution.` ,
  header:`Everything you need in one place`
}]
  return (
    <div className="my-[150px] ">
        <div className='container flex flex-col lg:flex-row w-full lg:justify-between pr-0 '>
            <div className='w-full lg:w-[45%] text-center lg:text-start mb-5'>
            <h2 className="font-bold text-bluedark mb-6 text-[39px]">What’s different about Manage?</h2>
            <p className="tracking-[0.8px] text-bluegrayish lg:w-[368px] w-full">  Manage provides all the functionality your team needs, without 
  the complexity. Our software is tailor-made for modern digital 
  product teams. </p>
            </div>
            <div className="lg:w-[45%] w-full lg:bg-transparent ">
        {list.map(item=>
            <div key={+item.id} className='mb-10'>
                <div className="flex gap-6 mb-6 text-dark font-bold text-[20px] items-center bg-primaryred bg-opacity-20 lg:rounded-none w-full rounded-l-full lg:bg-transparent">
                   <span className="text-white bg-primaryred py-2 px-5 rounded-[30px]">{item.id}</span>
                    <h3 className="font-bold text-[18px]  text-bluedark  ">{item.header}</h3>
                </div>

                    <p className="text-bluegrayish text-md">{item.txt}</p>
            </div>
        )}

            </div>

            <div></div>

        </div>
    </div>
  )
}

export default Different