import Button from "@/components/Button/Button";
import Glow from "@/components/Glow/Glow";
import clsx from "clsx";
import { useRef, useState, useEffect } from "react";
import styles from "./About.module.scss";

const About = () => {
  const sectionRef = useRef();
  const [offsetY, setOffsetY] = useState();

  const getPosition = () => {
    setOffsetY(sectionRef.current?.getBoundingClientRect().top | 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", getPosition);

    return () => window.removeEventListener("scroll", getPosition);
  }, []);

  const formattedOffset = offsetY / 4 < 1 ? 0 : offsetY / 4;

  return (
    <section className={styles.section} ref={sectionRef}>
      <div className={clsx("content", styles.container)}>
        <div className={styles.text}>
          <h2 style={{ transform: `translateX(-${formattedOffset}%)` }}>
            Who is Antonio?
          </h2>
          <p style={{ transform: `translateX(${formattedOffset/1.5}%)` }}>
            UX/UI designer from Split, Croatia. Coffee and Figma fan. <br />
            Most of my life was spent in the wrong city before I discovered the
            woman of my life and a stress-free lifestyle in Dalmatia.
          </p>
          <p style={{ transform: `translateX(-${formattedOffset/1.2}%)` }}>Now you are interested to read more?</p>
        </div>
        <Button styleClass="white-purple" href="/about">
          Yes. Read more.
        </Button>
        <div className={styles.glowContainer}>
          <Glow />
        </div>
      </div>
    </section>
  );
};

export default About;
