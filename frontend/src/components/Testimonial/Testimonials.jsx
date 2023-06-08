import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";
import ava04 from "../../assets/images/ava-4.jpg";
import ava05 from "../../assets/images/ava-5.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          swipeToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div className="testimonial py-4 px-3">
        <p>
          Hello Team! Thanks for coordinating my memorable Maldives trip and
          choosing the best resort to stay which had world class facilities.
          Even the ticketing and all the other necessary documentation was taken
          care . Will be getting back to you for booking my next international
          trip. Thanks 🙏
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Traveler</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          ‘’It was a wonderful experience for us. All your arrangements were up
          to the mark. All the hotels and transportation arrangements were
          excellent. All the problems were swiftly & effectively handled going
          beyond the working hours. Thank you Vacations Mumbai team for your
          support & prompt response’’
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Angela</h6>
            <p>Traveler</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Thank you for arranging the European Delights package for me and
          family.Most of the hotels we stayed at were very good 4 star rated
          such as Courtyard Marriott at Basel, Holiday Inn at Paris etc.. Indian
          food twice a day was a major plus apart from a very friendly and
          cooperative tour manager and Coach captain.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Harry</h6>
            <p>Traveler</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          We Have a Fantastic experience with Balmer Lawrie - Vacations Exotica.
          Europe trip, food, tour manager, coach driver, hotels everything was
          perfect. Our Family is very happy will looking forward for more trips
          from you in future .Thank you Kolkata team for the lovely package.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava05} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Travis</h6>
            <p>Traveler</p>
          </div>
        </div>
      </div>
      <div className="testimonial py-4 px-3">
        <p>
          Thank you Vacations Mumbai team, for the patience & all the efforts
          you took to make our holiday a memorable one with lots of memories to
          cherish. The Tour Manager was very cooperative & helpful. The food
          served was delicious & well liked by everyone". Thank you so much for
          everything.
        </p>
        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={ava04} className="w-25 h-25 rounded-2" alt="" />
          <div>
            <h6 className="mb-0 mt-3">Jessica</h6>
            <p>Traveler</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
