import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import AppSliderCard from "@components/layout/navigation/AppSlider/AppSliderCard";
import "swiper/css";
import "swiper/css/pagination";

const ButtonStyled = styled(Button)`
  font-size: 1rem;
  font-weight: bold;
`

const AppSlider = () => {
  let data = JSON.parse(localStorage.getItem("data")).sort((a, b) =>
    a.avgRating < b.avgRating ? 1 : -1
  );

   const highRatedObjects = [];
  for (let key in data) {
    if (data[key].avgRating > 3) {
      highRatedObjects.push(data[key]);
    }
  }

  return (
    <div className="container my-4 justify-content-center">
      <Swiper
        freeMode={true}
        observer={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        observeParents={true}
        autoplay={{delay:1500, disableOnInteraction:false, pauseOnMouseEnter:true}}
        modules={[FreeMode, Navigation, Autoplay]}
        grabCursor={true}
        loop={true}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 6,
            spaceBetween: 30,
          },
        }}
      >
        {highRatedObjects.map((obj, key) => (
          <SwiperSlide>
              <AppSliderCard
                data={{
                  imgSrc: obj.app_icon,
                  name: obj.app_name,
                  category: obj.app_category,
                  rating: obj.avgRating
                }}
              >
                <Link to={{pathname: "/detail:" + highRatedObjects[key].app_id}}>
                  <ButtonStyled onClick={() => localStorage.setItem("clickedItem", JSON.stringify(highRatedObjects[key]))}>
                    Ver mas
                  </ButtonStyled>
                </Link>
            </AppSliderCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AppSlider;
