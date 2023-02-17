import Button from "@/components/Button/Button";
import Glow from "@/components/Glow/Glow";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container}>
      <div className={styles.text}>
        <h2>Who is Antonio?</h2>
        <p>
          UX/UI designer from Split, Croatia. Coffee and Figma fan. <br />
          Most of my life was spent in the wrong city before I discovered the
          woman of my life and a stress-free lifestyle in Dalmatia.
        </p>
        <p>Now you are interested to read more?</p>
      </div>
      <Button styleClass="white-purple">
        Yes. Looking for a 5 minutes mind break
      </Button>
      <div className={styles.glowContainer}>
        <Glow />
      </div>
    </section>
  );
};

export default About;
