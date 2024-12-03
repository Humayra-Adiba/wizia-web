import React from "react";

function Card() {
  const CardData = [
    {
      Img: "card1.svg",
      Heading: "You’re in Control",
      Description:"aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      Img: "card2.svg",
      Heading: "Infinitely Scalable",
      Description:"Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      Img: "card3.svg",
      Heading: "Incredibly Flexible",
      Description:"Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <>
      <section className=" bg-[#002228] text-white">
        <div className="flex  flex-col sm:flex-row md:flex-row lg:flex-row ml-[20px] sm:ml-[50px] md:ml-[120px] max-w-[1440px] gap-[24px] px-[24px]">
          
        </div>
      </section>
    </>
  );
}

export default Card;
