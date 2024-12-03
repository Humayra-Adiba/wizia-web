import React from 'react'

function Footer() {
  return (
      <>
          <footer className='bg-[#07292F] text-white h-[149px] sm:h-[109px] md:h-[109px] lg:h-[109px] '>
              <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-between items-center pt-[40px] gap-6 md:ml-[120px] lg:ml-[120px] sm:ml-[100px] sm:me-[100px] md:me-[120px] lg:me-120px]'>
                  <div className='flex justify-center'>
                      <figure>
                          <img src="Logoblack.svg" alt="" />
                      </figure>
                  </div>

                  <div className='flex justify-center'>
                      <p>
                          Copyright &copy; 2023 Wizia. All rights reserved.
                      </p>
                  </div>
              </div>
      </footer>
      
      </>
  )
}

export default Footer