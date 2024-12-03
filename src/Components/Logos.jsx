import React from 'react'

function Logos() {
    const logoimg = [
        {
            img:"Group.svg"
        },
        {
            img:"Vector.svg"
        },
        {
            img:"Group-1.svg"
        },
        {
            img:"easyeuro.svg"
        },
        {
            img:"AMDlogo.svg"
        }

    ]

  return (
    <>
        <section className='w-[100%] bg-[#07292F]'>
            <h3 className='text-center text-[#0FF1F6] text-sm pt-[32px]'>OUR TRUSTED PARTNERS</h3>
            <div className='flex flex-wrap justify-center  mx-auto gap-[35px] sm:gap-[15px] md:gap-[30px] lg:gap-[35px] p-[30px] '>
                {logoimg.map((item,i) => (
                    <div key={i} className='flex flex-wrap'>
                        <img src={item.img} alt="Logos" />
                    </div>
                ))}
            </div>
        </section>
    </>
)
}

export default Logos