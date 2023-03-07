import Button from "@/components/Button/Button";
import FeatureTitle from "@/components/FeatureTitle/FeatureTitle";
import clsx from "clsx";
import Image from "next/image";

import CreativeImage from "@assets/images/creative-work.png";

import styles from "./FeatureSection.module.scss";
import { useEffect, useState } from "react";

const FeatureSection = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if(showMessage === true) {
      const timer = setTimeout(() => setShowMessage(false), 2500);

      return () => clearTimeout(timer);
    }
  }, [showMessage])

  return (
    <section>
      <div className={clsx("content", styles.container)}>
        <div className={styles.textSide}>
          <FeatureTitle
            title="Art at its best"
            subtitle="DON'T STEAL"
            description={
              <p>
                Here on the right is the only piece of client work I did for
                myself, and I broke an NDA, you are welcome.
                <br />
                <br />
                But do you need to see yet another Dribbble dashboard or NFT
                website?
                <br />
                <br />
                If not, a 30-minute online video coffee can give you all the
                answers you need about my approach to designing products and
                experiences. Plus, it&apos;s free(coffee is not included).
              </p>
            }
          />
          <div className={styles.buttons}>
            <Button styleClass="purple">Book 30min call</Button>
            <Button onClick={() => setShowMessage(true)} styleClass="white-black">Don&apos;t book it</Button>
          </div>
          <p className={styles.bottomText}>
            If you still want to see some of the work I did, explore case
            studies below.
          </p>
        </div>
        <div className={styles.imageSide}>
          <Image
            src={CreativeImage.src}
            alt="creative image"
            width={CreativeImage.width}
            height={CreativeImage.height}
            className={styles.image}
          />
          <p
              className={clsx({
                [styles.message]: true,
                [styles.show]: showMessage,
              })}
            >
              Alright, I get it. 🙄
            </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
