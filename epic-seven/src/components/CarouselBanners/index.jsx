// configuraçoes para usar o swiper
import { register } from "swiper/element/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
//imports do react
import { useEffect, useState } from "react";
//estilo do css
import styles from "./styles.module.css";
//banners futuramente colocar pra pegar de banco de dados
import banner1 from "../../assets/images/imagesBanners/banner1.webp";
import banner2 from "../../assets/images/imagesBanners/banner2.jpeg";

register();

export default function CarouselBanners() {
  const databanners = [
    { id: 1, image: banner1 },
    { id: 2, image: banner1 },
    { id: 3, image: banner2 },
    { id: 4, image: banner2 },
  ];
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.containerBanners}>
      <h1 className={styles.title}>Banners Atuais</h1>
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true }}
        navigation
      >
        {databanners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <img className={styles.bannerImage} src={banner.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
