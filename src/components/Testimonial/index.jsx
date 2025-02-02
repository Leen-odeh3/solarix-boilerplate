import React from 'react';
import Slider from 'react-slick';
import './Testimonial.css';
import { testimonial } from '../../data';
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="Testimonial">
      <div className="container">
        <h1 className="title">
          Clients <span className="g-text">Testimonies</span>
        </h1>
        <Slider {...settings} className="clients__container">
          {testimonial.map((list, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars__container">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className="text__muted content">{list.review}</p>
              <div className="user__row">
                <div className="profile">
                  <img src={list.image} alt={list.name} />
                </div>
                <div className="details">
                  <h3 className="name">{list.name}</h3>
                  <small>CEO of Benvix</small>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
