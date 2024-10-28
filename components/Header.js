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
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#777070",
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
            <Image
              src="/img/doctor-nurses-special-equipment.jpg" // Cambia por la ruta de tu imagen
              alt="Imagen de fondo"
              fill={true}
              style={{ objectFit: "cover" }}
              priority={true} // Para optimizar la carga de la imagen
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/img/doctor-nurses-special-equipment.jpg" // Cambia por la ruta de tu imagen
              alt="Imagen de fondo"
              fill={true}
              style={{ objectFit: "cover" }}
              priority={true} // Para optimizar la carga de la imagen
            />
          </SwiperSlide>

          <div className="autoplay-progress">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

        <div className="contain-nav">
          <div className="grid-nav-start">
            <div className="grid-nav-start_contain-nav">
              <div className="contain-nav-start">
                <div className="contain-nav-start__image-Container-logo">
                  <img src="/img/logoBlanco.png" alt="" />
                </div>
                <div className="contenedor-info">
                  <div className="contain-contact">
                    <div className="contain-contact__img">
                      <img src="/img/clock-countdown.png" alt="" />
                    </div>
                    <div className="contain-contact__hours">
                      <span>Lunes a Domingo</span>
                      <span>24horas</span>
                    </div>
                  </div>
                  <div className="contain-phone">
                    <div className="contain-phone__img">
                      <img src="/img/phone.png" alt="" />
                    </div>
                    <div className="contain-phone__numbers">
                      <span>(073) 331811 - (073) 363576</span>
                      <span>Central Telefónica</span>
                    </div>
                  </div>
                  {/* <div className="contain-social-networks">
                    <div className="contain-social-networks__img">
                      <img src="/img/facebook_logo.svg" alt="" className="ab" />
                      <img src="/img/facebook_logo.svg" alt="" />
                    </div>

                  
                  </div> */}
                </div>
              </div>

              <nav className="contain-nav-end">
              <ul>
                <li>Nosotros</li>
                <li>Servicios</li>
                <li>Staff Médico</li>
                <li>Especialidades</li>
              </ul>
          
              <div>
              <button className="contain-nav-end__button">
                <img src="/img/calendar-dots.png" alt="" />
              <span>RESERVAR CITA</span></button>
              </div>
            
              
            </nav>
           </div>
          </div>
          <div className="grid-nav-end main-container">
            <div className="service-nav">
              
              
              <div className="service-nav__info">
                  
                  <h3 className="service-nav__info-h3">CONFÍA EN LOS LIDERES EN ALTA COMPLEJIDAD</h3>
                  <p className="service-nav__info-p">Para asegurarte de que estás haciendo la mejor elección.</p>
                  <button className="service-nav__info-botton">Conoce más</button>
              </div>

              <div className="service-nav-content">

                <div className="content-service">
                  <div className="content-service__caja">
                    
                    <div className="content-service__caja-groud">
                    <img src="/img/stethoscope_b34a91yk2674.svg" alt="" />
                    <span>Atención de emergencia</span>
                    </div>

                  </div>
                  <div className="content-service__caja">
                    
                    <div className="content-service__caja-groud">
                    <img src="/img/menssage.svg" alt="" />
                    <span>Servicio en línea</span>
                    </div>

                  </div>

                  <div className="content-service__caja">
                    
                    <div className="content-service__caja-groud">
                    <img src="/img/doctors.svg" alt="" />
                    <span>Médicos calificados</span>
                    </div>

                  </div>

                  <div className="content-service__caja">
                    
                    <div className="content-service__caja-groud">
                    <img src="/img/ambulancia.svg" alt="" />
                    <span>Servicio 24 hora</span>
                    </div>

                  </div>
                
                 
                </div>
              </div>
            </div>
          </div>
        </div>

      
      </header>
    </>
  );
};

export default Header;
