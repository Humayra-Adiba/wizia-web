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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

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
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2  text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="40"
              y="38.5"
              width="40"
              height="38"
              rx="8"
              transform="rotate(-180 40 38.5)"
              fill="#96ACAF"
              fill-opacity="0.2"
            />
            <path
              opacity="0.5"
              d="M28 19.5L12 19.5M19 26.5L12 19.5L19 12.5"
              stroke="#96ACAF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2  text-white rounded-full w-8 h-8 flex items-center justify-center"
        >
          <svg
            width="40"
            height="39"
            viewBox="0 0 40 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="0.5"
              width="40"
              height="38"
              rx="8"
              fill="#96ACAF"
              fill-opacity="0.2"
            />
            <path
              d="M12 19.5H28M28 19.5L21 12.5M28 19.5L21 26.5"
              stroke="#0FF1F6"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
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
