import React from "react";

function PreferedEmail() {
  const Data = [
    {
      img: "Frame12.svg",
    },
    {
      img: "Frame13.svg",
    },
    {
      img: "Frame15.svg",
    },
    {
      img: "Frame16.svg",
    },
  ];

  return (
    <>
      <section className="bg-[#07292F] flex justify-center text-white ">
        <div className="flex justify-center bg-[url(Maskgroup.svg)] w-[327px] h-[405px] md:w-[1344px] lg:w-[1344px] md:h-[564px] bg-left-bottom">
          <div className=" pl-[24px] sm:pl-[72px] md:pl-[486px] lg:[486px] md:mt-[130px] mt-[10px]">
            <h2 className="md:w-[591px] md:text-[40px] text-[28px]">
              Train your aiDR on your...
            </h2>
            <h2 className="text-[#0FF1F6] md:text-[40px] text-[28px] italic ">
              prefered email st|
            </h2>

            <p
              className="mt-[30px] text-[18px] md:text-[24px]">
              You’re in control. Train your aiDR on <br/>elements of your Marketing strategy.
            </p>
            <div className="flex flex-wrap md:w-[550px] lg:w-[550px] md:gap-8 gap-2 mt-[25px] md:mt-[64px]">
              {Data.map((item, index) => (
                <div key={index}>
                  <img className="h-[23px] " src={item.img} alt="Data" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreferedEmail;