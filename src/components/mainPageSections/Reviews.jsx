import React, { useState } from "react";
import Slider from "react-slick";
import { ArrowIcon } from "../svg";
import img from "./../../assets/Group 13.png";
export const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      img: img,
      text: "Development of our AI platform is well underway and our current progress can be measured by these stages. Development of our AI platform is well underway and our current progress can be measured by these stages.",
    },
    {
      id: 2,
      img: img,
      text: "Development of our AI platform is well underway and our current progress can be measured by these stages.Our current progress can be measured by these stages.",
    },
    {
      id: 3,
      img: img,
      text: "Our AI platform is well underway and our current progress can be measured by these stages. Development of our AI platform is well underway and our current progress can be measured by these stages.",
    },
  ]);
  function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <div onClick={onClick} className={className}>
        <ArrowIcon className="rotate-180" />
      </div>
    );
  }
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowIcon />
      </div>
    );
  }
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="px-[45px] pt-[85px]">
      <div className="text-[60px] text-[#77F2A1] font-bold mb-[40px]">
        What our users think
      </div>
      <div className="mb-[110px] px-[300px]">
        <Slider {...settings}>
          {reviews.map((r) => (
            <div key={r.id} className="">
              <img className="ml-auto mr-auto" src={r.img} alt="img" />
              <div className="ml-auto mr-auto mt-[50px] text-center text-[22px] max-w-[645px]">
                {r.text}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};
