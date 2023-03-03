import { useRef } from "react";
import Image from "next/image";

import FeatureTitle from "../FeatureTitle/FeatureTitle";
import ArrowDown from "@assets/icons/arrow-down.svg";

import styles from "./SEO.module.scss";
import clsx from "clsx";
import { useState } from "react";
import { SEO_TEXT } from "./contants";

const SEO = () => {
  const [expand, setExpand] = useState(false);
  const btnRef = useRef();

  const handleExpand = () => {
    setExpand((prevState) => !prevState);
    setTimeout(() => {
      btnRef.current.scrollIntoView({
        behavior: 'smooth'
      });
    }, 300);
  };

  return (
    <section className={styles.section}>
      <div className={clsx("content", styles.container)}>
        <FeatureTitle
          title="SEO text that you don’t want to read"
          subtitle="HEY GOOGLE, DON’T SKIP THIS SECTION"
          description={SEO_TEXT.expand}
          descriptionStyle="expandableDescription"
          expanded={expand}
        />
        <div
          className={clsx({
            [styles.expandBtn]: true,
            [styles.expanded]: expand,
          })}
          ref={btnRef}
          onClick={handleExpand}
        >
          Expand{" "}
          <Image src={ArrowDown.src} width={20} height={20} alt="Arrow" />
        </div>
      </div>
    </section>
  );
};

export default SEO;
