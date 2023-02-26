import Image from "next/image";
import Glow from "../Glow/Glow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import Avatar from "@assets/images/Avatar.svg";

import { SERVICES } from "./constants";

import styles from "./HeroBanner.module.scss";
import "swiper/css";
import "swiper/css/autoplay";
import clsx from "clsx";

const HeroBanner = () => {
  return (
    <section className={styles.section}>
      <div className={clsx('content', styles.container)}>
        <div className={styles.imageContainer}>
          <p className={styles.imageComment}>
            &ldquo;This is not <span>Antonio Vidakovic</span>&rdquo;
          </p>
          <div className={styles.glowContainer}>
            <Glow />
          </div>
          <div className={styles.image}>
            <Image src={Avatar.src} alt="Avatar" width={420} height={441} />
          </div>
        </div>
        <div className={styles.text}>
          Hey there. &#128064;
          <br /> Are you looking for:
          <div className={styles.swiperWrapper}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              direction="vertical"
              loop={true}
              autoplay={{ delay: 1000, disableOnInteraction: false }}
              effect="slide"
              speed={2000}
              className={styles.swiper}
            >
              {SERVICES.map((service) => (
                <SwiperSlide className={styles.slide} key={service}>
                  {service}
                  <span>?</span>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
