import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Autoplay } from "swiper";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import styled from "styled-components";
import AppSliderCard from "@components/layout/navigation/AppSlider/AppSliderCard";
import "swiper/css";
import "swiper/css/pagination";

const ButtonStyled = styled(Button)`
  font-size: 0.8rem;
`

const AppSlider = () => {
  let data = JSON.parse(localStorage.getItem("data")).sort((a, b) =>
    a.rating < b.rating ? 1 : -1
  );

  const highRatedObjects = [];
  for (let key in data) {
    if (data[key].rating > 3) {
      highRatedObjects.push(data[key]);
    }
  }

  return (
    <div className="container w-50 justify-content-center">
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
          1280: {
            slidesPerView: 5,
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
                  rating: obj.rating
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
