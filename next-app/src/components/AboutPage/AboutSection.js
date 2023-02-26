import clsx from "clsx";
import Image from "next/image";

import LocasticLogo from "@assets/icons/locastic-logo.svg";
import AntonioImage from "@assets/images/AboutImage.png";

import styles from "./AboutSection.module.scss";

const DESCRIPTION = (
  <>
    A self-taught UI/UX designer, functioning in the industry for 4+ years now,
    I started as a graphic designer who can design simple websites to find out
    later that I could call myself UX/UI designer and charge the same thing
    twice as much.
    <br />
    <br />
    In my early twenties started to work as a freelance graphic designer doing
    ugly club flyers in Photoshop. Between then and now, I finish my bachelor's
    in Business economics and master's in Marketing and communication.
    <br />
    <br />
    Almost three years ago, I bet with my software dev. girlfriend that I can
    learn to code and get a job offer just to prove to her that people who
    design for a living are not only good at "playing with watercolors."
    <br />
    <br />
    After finishing the course and getting a job offer for iOS dev, I decided
    that I'm not into typing code all day long, but I also didn't want to move
    from the IT sector. And when you mix graphic design and IT, you get a
    beautiful and expensive cocktail named: UX/UI design.
    <br />
    <br />
    To fully leverage my business-side brain, I finished the Dribbble course for
    the Product designer and learned how to get the most out of a product by
    solving user problems and making the company richer than the day before.
    <br />
    <br />
    Since then, I have worked on various projects (Saas platforms, web shops,
    marketing sites) at my current company and as a freelance.
  </>
);

const AboutSection = () => {
  return (
    <section>
      <div className={clsx("content", styles.container)}>
        <div className={styles.textSide}>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>
              I'm a UX/UI designer.<span>|</span>
            </h2>
            <div className={styles.titleDescription}>
              Currently, I'm a UX/UI designer at{" "}
              <div className={styles.imageContainer}>
                <Image
                  src={LocasticLogo.src}
                  alt="Locastic"
                  width={LocasticLogo.width}
                  height={LocasticLogo.height}
                />
              </div>
            </div>
          </div>
          <p className={styles.description}>{DESCRIPTION}</p>
        </div>
        <div className={styles.imageSide}>
          <Image
            src={AntonioImage.src}
            alt="about"
            className={styles.image}
            width={AntonioImage.width}
            height={AntonioImage.height}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
