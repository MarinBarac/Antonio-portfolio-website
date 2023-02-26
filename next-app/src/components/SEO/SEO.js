import Image from "next/image";

import FeatureTitle from "../FeatureTitle/FeatureTitle";
import ArrowDown from "@assets/icons/arrow-down.svg";

import styles from "./SEO.module.scss";
import clsx from "clsx";

const SEO = () => {
  return (
    <section className={styles.section}>
      <div className={clsx("content", styles.container)}>
        <FeatureTitle
          title="SEO text that you don’t want to read"
          subtitle="HEY GOOGLE, DON’T SKIP THIS SECTION"
          description="Welcome to my website! I'm Antonio, a UX/UI designer with extensive experience in creating user-centered designs. My..."
        />
        <div className={styles.expand}>
          Expand{" "}
          <Image src={ArrowDown.src} width={20} height={20} alt="Arrow" />
        </div>
      </div>
    </section>
  );
};

export default SEO;
