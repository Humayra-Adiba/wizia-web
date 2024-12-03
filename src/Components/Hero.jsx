import { Button } from "@nextui-org/button";
import React from "react";

function Hero() {
  return (
    <>
      <div className="bg-[url(/hero.svg)] w-full bg-cover bg-no-repeat bg-right-bottom  h-[408px]  md:h-[572px] lg:h-[572px] flex ">
        <div className="text-center sm:text-start md:text-start lg:text-start mt-[44px] sm:mt-[110px] sm:ml-[50px] md:ml-[120px] max-w-[1440px] ">
          <p className="text-[#0FF1F6]">AI SDRs (aiDRs)</p>

          <h3 className="text-5xl sm:text-[64px] md:text-[64px] lg:text-[64px] mt-[5px] font-semibold text-[#FFFFFF] sm:w-[375px] md:w-[391px] lg:w-[391px] ">
            More leads, less people.
          </h3>

          <p className="text-[#FFFFFF] mt-[20px] sm:w-[343px] md:w-[450px] ">
            Train an aiDR on your ICP and messaging matrix. Activate it on a
            patch. It will send personalized sequences to every target contact.
          </p>
          <Button className="bg-primary mt-[24px] w-[300px] sm:w-[216px] md:w-[216px] hover:bg-yellow-400">
            Sign Up for the Beta
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.25 0.5H1.75C1.41848 0.5 1.10054 0.631696 0.866116 0.866116C0.631696 1.10054 0.5 1.41848 0.5 1.75V14.25C0.5 14.5815 0.631696 14.8995 0.866116 15.1339C1.10054 15.3683 1.41848 15.5 1.75 15.5H14.25C14.5815 15.5 14.8995 15.3683 15.1339 15.1339C15.3683 14.8995 15.5 14.5815 15.5 14.25V1.75C15.5 1.41848 15.3683 1.10054 15.1339 0.866116C14.8995 0.631696 14.5815 0.5 14.25 0.5ZM14.25 14.25H1.75V1.75H14.25V14.25ZM5.05781 10.9422C4.9997 10.8841 4.9536 10.8152 4.92215 10.7393C4.8907 10.6635 4.87451 10.5821 4.87451 10.5C4.87451 10.4179 4.8907 10.3365 4.92215 10.2607C4.9536 10.1848 4.9997 10.1159 5.05781 10.0578L8.99141 6.125H6.75C6.58424 6.125 6.42527 6.05915 6.30806 5.94194C6.19085 5.82473 6.125 5.66576 6.125 5.5C6.125 5.33424 6.19085 5.17527 6.30806 5.05806C6.42527 4.94085 6.58424 4.875 6.75 4.875H10.5C10.6658 4.875 10.8247 4.94085 10.9419 5.05806C11.0592 5.17527 11.125 5.33424 11.125 5.5V9.25C11.125 9.41576 11.0592 9.57473 10.9419 9.69194C10.8247 9.80915 10.6658 9.875 10.5 9.875C10.3342 9.875 10.1753 9.80915 10.0581 9.69194C9.94085 9.57473 9.875 9.41576 9.875 9.25V7.00859L5.94219 10.9422C5.88414 11.0003 5.81521 11.0464 5.73934 11.0779C5.66346 11.1093 5.58213 11.1255 5.5 11.1255C5.41787 11.1255 5.33654 11.1093 5.26066 11.0779C5.18479 11.0464 5.11586 11.0003 5.05781 10.9422Z"
                fill="black"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}

export default Hero;
