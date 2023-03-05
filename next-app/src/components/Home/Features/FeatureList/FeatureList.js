import Image from "next/image";

import LeftArrow from "@assets/icons/Arrow.svg";
import WordImage from "@assets/images/Word.jpg";

import { FEATURES } from "../constants";

import styles from "./FeatureList.module.scss";
import InteractiveText from "@/components/InteractiveText/InteractiveText";

const FeatureList = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {FEATURES.map((feature, index) => (
          <li className={styles.feature} key={`feature-${index}`}>
            <div className={styles.featureImage}>
              <Image
                src={feature.icon.src}
                width={48}
                height={48}
                alt="Feature icon"
              />
            </div>
            <div className={styles.featureText}>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.imageSide}>
        <div className={styles.card}>
          <div className={styles.imageComment}>
            <InteractiveText
              text={`"Let's make your user not feeling like Word users back in the days."`}
              startIndex={3}
              endIndex={4}
            />
          </div>
          <div className={styles.arrow}>
            <Image src={LeftArrow.src} width={92} height={82} alt="Arrow" />
          </div>
          <Image
            src={WordImage.src}
            width={WordImage.width}
            height={WordImage.height}
            className={styles.image}
            alt="Word image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
