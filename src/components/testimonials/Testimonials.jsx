import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import { testimonialsSection } from "../../portfolio";

const Testimonials = () => {
  if (!testimonialsSection.display) {
    return null;
  }
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPreview={1}
        pagination={{ clickable: true }}
      >
        {testimonialsSection.testimonials.map(
          ({ name, avatar, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={name} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            );
          }
        )}
      </Swiper>
    </section>
  );
};

export default Testimonials;
