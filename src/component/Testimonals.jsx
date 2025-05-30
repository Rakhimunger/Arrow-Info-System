import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Testimonials2 from "../assets/Testimonals2.jpg";
import Testimonials3 from "../assets/Testimonals3.jpg";
import Testimonials4 from "../assets/Testimonals4.jpg";
import Testimonials5 from "../assets/Testimonals5.jpg";
import Testimonials6 from "../assets/Testimonals6.jpg";
import { Autoplay } from "swiper/modules";

export default function Testimonials() {
  const testimonials = [
    {
      img: Testimonials2,
      review:
        "An exceptional experience! The vehicles were immaculate, and the staff was incredibly courteous and professional.",
    },
    {
      img: Testimonials3,
      review:
        "Smooth rides and timely services made our family trip unforgettable. Highly recommend for hassle-free travel.",
    },
    {
      img: Testimonials4,
      review:
        "Dependable and affordable – they made our event transportation seamless and stress-free.",
    },
    {
      img: Testimonials5,
      review:
        "Amazing service exploring Bihar. Vehicles were in perfect condition, and drivers were very friendly.",
    },
    {
      img: Testimonials6,
      review:
        "Professional, luxurious, and punctual – exactly what we needed for our corporate guests. Will use again!",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-r from-blue-100 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <p className="text-xl font-semibold text-blue-600 tracking-wide uppercase mb-2">
          Testimonials
        </p>
        <h2 className="text-4xl font-extrabold text-gray-900">
          Hear What Our Happy Customers Say
        </h2>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        modules={[Autoplay]}
        className="max-w-7xl mx-auto"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500 flex flex-col items-center">
              <img
                src={testimonial.img}
                alt="Customer photo"
                className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-blue-400"
              />
              <p className="text-gray-700 italic text-center text-lg leading-relaxed">
                “{testimonial.review}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
