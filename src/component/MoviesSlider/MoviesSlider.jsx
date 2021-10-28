import React from "react";
import { Card } from "antd";
import imgSrc from "../../helper/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function MoviesSlider({ movies }) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={4}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
    >
      {movies.map((movie) => (
        <SwiperSlide style={{ paddingBottom: "30px" }}>
          <Card
            // style={{ paddingBottom: "30px" }}
            hoverable
            cover={
              <img
                style={{ width: "100%" }}
                alt="example"
                src={imgSrc(movie.poster_path, "w342")}
              />
            }
          />
          ,
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
