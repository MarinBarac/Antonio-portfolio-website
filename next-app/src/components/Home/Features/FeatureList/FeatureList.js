import Link from "next/link";
import Image from "next/image";

import ArrowRight from "@assets/icons/arrow-narrow-right.svg";
import LeftArrow from "@assets/icons/Arrow.svg";
import WordImage from "@assets/images/Word.jpg";

import { FEATURES } from "../constants";

import styles from "./FeatureList.module.scss";

const FeatureList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSide}>
        <ul className={styles.list}>
          {FEATURES.map((feature) => (
            <li className={styles.feature}>
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
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
        <Link className={styles.link} href="/">
          Read about the process
          <Image src={ArrowRight.src} width={20} height={20} alt="Arrow" />
        </Link>
      </div>
      <div className={styles.imageSide}>
        <div className={styles.card}>
          <p className={styles.imageComment}>
            &ldquo;Let's make <span>your user</span> not feeling like Word users
            back in the days.&rdquo;
          </p>
          <div className={styles.arrow}>
            <Image
              src={LeftArrow.src}
              width={92}
              height={82}
              alt="Arrow"
            />
          </div>
          <Image
            src={WordImage.src}
            width={WordImage.width}
            height={WordImage.height}
            alt="Word image"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureList;
