import React from "react";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./testimonials.css";
import AvatarWoman from "../../assets/avatar_woman.jpg";
import AvatarMan from "../../assets/avatar_men.jpg";

const data = [
  {
    id: 1,
    name: "Scarlet Johanson",
    avatar: AvatarWoman,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil dolor est deserunt laboriosam architecto et voluptatum labore nulla ratione dolore esse, animi non accusantium natus iste alias fugiat aliquid.",
  },
  {
    id: 2,
    name: "Tony Stark",
    avatar: AvatarMan,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati nihil dolor est deserunt laboriosam architecto et voluptatum labore nulla ratione dolore esse, animi non accusantium natus iste alias fugiat aliquid.",
  },
];

const Testimonials = () => {
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
        {data.map(({ name, avatar, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
