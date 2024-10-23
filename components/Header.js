import Image from "next/image";
import styles from "../styles/style.module.css";

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Header = () => {
  // init Swiper:
  const swiper = new Swiper(".swiper", {
    // configure Swiper to use modules
    modules: [Navigation, Pagination],
  });

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

        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          
          </div>

          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>

          <div class="swiper-scrollbar"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
