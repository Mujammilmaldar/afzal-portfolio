"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsStarHalf } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import AnimatedFadeIn from "./AnimatedHeading";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Dr. Zainulabedin Hamdulay",
      location: "Chairman – Masina Heart Institute",
      content:
        "Afzal took care of our digital activities, he is trustworthy & knowledgeable. I feel a good amount of difference & results since he took over our digital activities. Wishing him success in his career & hope he continue the good work he is doing.",
      image: "/testimonial1.png",
      rating: 5,
    },
    {
      id: 2,
      name: "Dr. Bhavesh Popat",
      location: "Owner - Endovascular Clinic",
      content:
        "I came to know about Afzal through one of my friend, we started working on our digital presence. He is proactive & he understands the digital sphere very well. I am happy with the work he is doing for us.",
      image: "/testimonial1.png",
      rating: 5,
    },
    {
      id: 3,
      name: "Mr. Ziaullah Nomani",
      location: "Director – Blossom Media",
      content:
        "I have been associated with Afzal Khan for a project, it was a 3 months project. He not only helped me to achieve the desired resutls, he also taught me few interesting things about this medium. He is an astute player of this field, looking forward to associate with him again.",
      image: "/testimonial1.png",
      rating: 5,
    },
  ];

  return (
    <section id="testimonial" className=" py-4 md:py-8 lg:py-16">
      <div className="container mx-auto px-4">
        <AnimatedFadeIn direction="up">
          <h2 className="text-4xl font-bold text-center mb-4">
            Client Testimonials
          </h2>
        </AnimatedFadeIn>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          On the other hand we denounce with righteous indignation and dislike
          men who are so beguiled and demoralized by the charms of pleasure of
          the moment.
        </p>
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
          }}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white p-2 md:p-4 lg:p-8 rounded-lg shadow-lg relative mb-12 min-h-[250px] flex justify-between cursor-pointer">
                <div className="flex items-center flex-col md:flex-row lg:flex-row mb-2 md:mb-3 lg:mb-6 gap-5">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="rounded-full mr-4 object-cover"
                  />
                  <div className="flex flex-col gap-3">
                    <div className="heading flex gap-3">
                      <div className=" text-4xl text-blue-600">❝</div>
                      <p className="text-gray-700 italic">
                        {testimonial.content}
                      </p>
                    </div>
                    <h6 className="font-semibold text-blue-600 ml-7">
                      {testimonial.name}
                    </h6>
                    <p className="text-gray-600 text-sm ml-7 -mt-3">
                      {testimonial.location}
                    </p>
                    <div className="flex ml-7">
                      {Array.from({ length: 5 }).map((_, i) => {
                        const starValue = i + 1;
                        if (testimonial.rating >= starValue) {
                          return (
                            <AiFillStar key={i} color="#2a2ad4" size={20} />
                          );
                        } else if (testimonial.rating >= starValue - 0.5) {
                          return (
                            <BsStarHalf key={i} color="#2a2ad4" size={20} />
                          );
                        } else {
                          return (
                            <AiOutlineStar key={i} color="#2a2ad4" size={20} />
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSection;
