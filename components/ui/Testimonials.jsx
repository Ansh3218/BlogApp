import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "This service has been a game-changer for our business. Highly recommend!",
      name: "John Doe",
      position: "CEO, Company A",
    },
    {
      quote:
        "Amazing experience! The team was professional and the results were outstanding.",
      name: "Jane Smith",
      position: "Marketing Director, Company B",
    },
    {
      quote:
        "Exceptional service and support. We couldn't be happier with the results.",
      name: "Michael Brown",
      position: "CTO, Company C",
    },
  ];

  return (
    <>
      <div className="flex gap-20 text-center">
        {testimonials.map((value, idx) => (
          <span
            key={idx}
            className="shadow shadow-gray-500/80 h-52 w-[26rem] px-3 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition duration-300"
          >
            <p className="mb-4 text-lg">"{value.quote}"</p>
            <h2>{value.name}</h2>
            <h4>{value.position}</h4>
          </span>
        ))}
      </div>
    </>
  );
};

export default Testimonials;
