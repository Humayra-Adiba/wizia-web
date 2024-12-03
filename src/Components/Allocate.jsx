import React from 'react'

function Allocate() {
    const Info = [
        {
            percent: '32%',
            txt:'Improvement in Open Rates'
        },
        {
            percent: '75%',
            txt: 'Improvement in Ramp Time'
        },
        
        {
            percent: '35%',
            txt: 'Improvement in Meetings Booked'
        }
  ]

  return (
      <>
          <div className='bg-[#002228] flex justify-center text-white pt-6 pb-6'>
              <div className='bg-[url(BG.svg)] w-[327px] sm:w-[1344px] md:w-[1344px] lg:w-[1344px] h-[661px] md:h-[564px] bg-right-bottom bg-no-repeat bg-cover rounded-3xl'>
                  <div className=' pl-[24px] sm:pl-[72px] md:pl-[72px] lg:[72px] mt-[10px] md:mt-[69px]'>
                      <h2 className='md:w-[591px lg:w-[591px] text-[28px] md:text-[32px]'>
                          Allocate effort where your reps make an inpact.
                      </h2>
                      <h2 className='text-[#0FF1F6] text-[28px] md:text-[32px] italic'>Let us handle the rest.</h2>

                      <p className='
                      mt-[17px] md:text-[20px]'>
                          Keep your reps “in the air” -- out in the field and on the phone <br/>where they can build relationships.hj
                      </p>

                      <div className='flex flex-col md:flex-row lg:flex-row gap-[32px] md:mt-[94px] mt-[30px]'>
                          {Info.map((item, i) => (
                              <div key={i} className='w-[174px] '>
                                  <h3 className='md:text-[40px] text-[30px] font-bold text-[#0FF1F6]'>
                                      {item.percent}
                                  </h3>

                                  <p className='md:w-[174px] text-[16px] sm:w-full'>{item.txt}</p>
                              </div>
                          ))}
                      </div>
                 </div>
              </div>

         </div>
      </>
  )
}

export default Allocate
