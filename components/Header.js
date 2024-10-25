import React, { useRef, useState } from "react";

import Image from "next/image";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Header = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <>
      <header className="container-header">
        <Swiper
          style={{
            "--swiper-navigation-color": "#171717",
            "--swiper-pagination-color": "#171717",
          }}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          <SwiperSlide>
            <div className="SwiperSlide__imageContainer">
              <Image
                src="/img/doctor-nurses-special-equipment.jpg" // Cambia por la ruta de tu imagen
                alt="Imagen de fondo"
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true} // Para optimizar la carga de la imagen
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="SwiperSlide__imageContainer">
              <Image
                src="/img/doctor-nurses-special-equipment.jpg" // Cambia por la ruta de tu imagen
                alt="Imagen de fondo"
                fill={true}
                style={{ objectFit: "cover" }}
                priority={true} // Para optimizar la carga de la imagen
              />
            </div>
          </SwiperSlide>

          <div className="autoplay-progress">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

        <div className="contain-nav">
          <div>
            <div className="main-container contain-nav-start">
              <div className="contain-nav-start__image-Container">
                <img src="/img/logoBlanco.png" alt=""  />
              </div>
              <div className="contain-nav-start__contain-info-contact">
                <div className="info-attention">
                  <img src="/img/clock-countdown.png" alt="" />

                  <div className="info-attention__hours">
                 
                  <span>Lunes a Domingo</span><span>24horas</span>
                  
                  </div>
                </div>
              </div>
            </div>
            <div className="main-container contain-nav-end">
              <ul>
                <li>asd</li>
                <li>asd</li>
                <li>asd</li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
