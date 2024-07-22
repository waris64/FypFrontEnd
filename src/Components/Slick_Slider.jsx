import React from "react";
import Slider from "react-slick";
import { lazy } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide_1 from "../assets/slide_1.jpg";
import Rec19 from "../assets/Rectangle 19.png";
import Rec20 from "../assets/Rectangle 20.png";
import Rec21 from "../assets/Rectangle 21.png";
import Rec14 from "../assets/scab.png";

function SimpleSlider() {
  const settings = {

    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]

  }

  return (
    <div className="slider-container px-9">
      <h1 className="text-xl lg:text-2xl text-center p-5 font-semibold 2xl:text-6xl">Citrus Diseases <span className="text-orange-400 font-bold">Which</span>  Are Affecting The Most</h1>
      <Slider {...settings} className="py-2 cursor-pointer">
        <div className="">
          <div className="slide-item relative px-2">
            <div className="image-container">
              <div className=" h-52 2xl:h-[31rem]">
                <img
                  loading={lazy}
                  src={Rec14}
                  alt=""
                  className="bg-contain w-full size-52 rounded     2xl:h-[31rem] "
                />
              </div>
              <div className="text-overlay absolute inset-0 flex items-center ">
                <div className="md:max-w-[978px] md:mx-auto m-auto">
                  <h1 className="text-white font-bold pt-32 text-2xl underline 2xl:pt-72  2xl:text-4xl">Citrus  <label htmlFor="color" className="text-orange-500">Canker</label> </h1>

                </div>
              </div>
            </div>
          </div>
        </div>
        
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div>
                <img
                 loading={lazy}
                  src={Rec19}
                  alt=""
                  className="bg-contain w-full size-52 rounded     2xl:h-[31rem] "
                />
              </div>
              <div className="text-overlay absolute inset-0 flex items-center ">
                <div className="md:max-w-[978px] md:mx-auto m-auto">
                  <h1 className="text-white font-bold pt-32 text-2xl underline 2xl:pt-72 2xl:text-4xl">Citrus  <label htmlFor="color" className="text-orange-500">Greening</label> </h1>

                </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div className="">
                <img
                 loading={lazy}
                  src={Rec20}
                  alt=""
                  className="bg-contain w-full size-52 rounded     2xl:h-[31rem] "
                />
              </div>
              <div className="text-overlay absolute inset-0 flex items-center gap-x-5">
                <div className="md:max-w-[978px] m-auto pt-36 text-2xl underline text-white">
                  <h1 className="text-white font-bold 2xl:pt-44  2xl:text-4xl">Citrus <label className="text-orange-500">Scab</label> </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide-item relative px-1">
            <div className="image-container">
              <div className="-80">
                <img
                 loading={lazy}
                  src={Rec21}
                  alt=""
                  className="bg-contain w-full size-52 rounded"
                />
              </div>
              <div className="text-overlay absolute inset-0 flex items-center gap-x-5">
                <div className="md:max-w-[978px] m-auto">
                  <h1 className="text-white font-bold text-2xl underline pt-36">Citrus <label className="text-orange-500">Tristeza</label>  Virus</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SimpleSlider;
