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
import InteractiveText from "../InteractiveText/InteractiveText";

const HeroBanner = () => {
  return (
    <section className={styles.section}>
      <div className={clsx("content", styles.container)}>
        <div className={styles.imageContainer}>
          <div className={styles.imageComment}>
            <InteractiveText
              text={`"This is not Antonio Vidakovic"`}
              startIndex={3}
              endIndex={4}
            />
          </div>
          <div className={styles.glowContainer}>
            <Glow />
          </div>
          <Image
            src={Avatar.src}
            alt="Avatar"
            width={420}
            height={441}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          Hey there. <span>&#128064;</span>
          <br /> Are you looking for:
          <div className={styles.swiperWrapper}>
            <Swiper
              modules={[Autoplay]}
              slidesPerView={1}
              spaceBetween={20}
              direction="vertical"
              loop={true}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              updateOnWindowResize={true}
              effect="slide"
              speed={2000}
              preventInteractionOnTransition={true}
              allowTouchMove={false}
              className={styles.swiper}
            >
              {SERVICES.map((service, index) => (
                <SwiperSlide
                  className={styles.slide}
                  key={`${service}-${index}`}
                >
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
