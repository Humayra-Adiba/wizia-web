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
          <div className=" pl-[24px] sm:pl-[72px] md:pl-[486px] lg:[486px] mt-[130px] ">
            <h2 className="md:w-[591px lg:w-[591px] text-[40px]">
              Train your aiDR on your...
            </h2>
            <h2 className="text-[#0FF1F6] text-[40px] italic ">
              prefered email st|
            </h2>

            <p
              className="mt-[30px] text-[24px]">
              You’re in control. Train your aiDR on <br/>elements of your Marketing strategy.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PreferedEmail;