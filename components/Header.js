import Image from "next/image";
import styles from "../styles/style.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Header = () => {

  return (
    <>
      <header className="contenedor-header">
        {/* <div className={styles.imageContainer}>
          <Image
            src="/img/doctor-nurses-special-equipment.jpg" // Cambia por la ruta de tu imagen
            alt="Imagen de fondo"
            fill={true}
            style={{ objectFit: "cover" }}
            priority={true} // Para optimizar la carga de la imagen
          />
        </div> */}
  <Swiper className="Swiper-conten"
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
    </Swiper>
      </header>
    </>
  );
};

export default Header;
