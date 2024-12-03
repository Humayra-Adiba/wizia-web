import React, { useState, useEffect } from "react";

const testimonials = [
  {
    review:
      "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
    person: "John Doe",
    title: "Chief Strategy Officer @ Company",
  },
  {
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo saepe sunt sequi vero culpa quibusdam quo sint, voluptates ducimus dolor?.",
    person: "Jane Smith",
    title: "Marketing Head @ Business",
  },
  {
    review:
      "alias praesentium nostrum nobis accusamus at veritatis repudiandae cumque animi ducimus asperiores enim similique aspernatur voluptate, rerum delectus esse",
    person: "Alice Johnson",
    title: "CTO @ TechCorp",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  return (
    <div className="w-full bg-[#002228] flex justify-center py-10">
      <div className="relative w-full max-w-[1440px] text-center p-6 overflow-hidden">
        <div
          className="transition-transform duration-500 ease-in-out bg-[#002228]"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            display: "flex",
            width: `${testimonials.length * 33.5}% `,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 bg-[#002228] text-white p-6 rounded-lg shadow-lg h-auto flex flex-col justify-center items-center"
            >
              <figure className="mb-4 ">
                <img src="tik.svg" alt="Icon" />
              </figure>
              <p className="text-xl italic font-light mb-4 md:w-[920px] lg:w-[920px] mt-[35px]">
                “{testimonial.review}”
              </p>
              <h4 className="text-teal-400 font-semibold mt-[40px]">
                {testimonial.person}
              </h4>
              <p className="text-gray-400">{testimonial.title}</p>
            </div>
          ))}
        </div>

       

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-teal-400" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
