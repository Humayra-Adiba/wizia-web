import React from "react";

function Card() {
  const CardData = [
    {
      Img: "card3.svg",
      Heading: "You’re in Control",
      Description:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      Img: "card2.svg",
      Heading: "Infinitely Scalable",
      Description:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      Img: "card1.svg",
      Heading: "Incredibly Flexible",
      Description:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <>
      <section className=" bg-[#002228] text-white py-[50px] px-[35px]">
        <div className="flex  flex-col sm:flex-row md:flex-row lg:flex-row ml-[20px] sm:ml-[50px] md:ml-[120px] max-w-[1440px] gap-[24px] ">
        {CardData.map((item, index) => (
            <div
              key={index}
              className="sm:w-[384px] pt-8 "
            >
              <div>
                <div>
                  <img
                    src={item.Img}
                    alt="Logos"
                    className="max-w-[54px] min-h-[48px]"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-[28px] font-semibold mt-[20px]">
                  {item.Heading}
                </h3>
                <p className="text-[18px] w-full md:w-[260px] lg:w-[260px] text-[#FFFFFF] mt-[10px]">
                  {item.Description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Card;
