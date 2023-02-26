import clsx from "clsx";
import Glow from "../Glow/Glow";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ title, description }) => {
  return (
    <section>
      <div className={clsx("content", styles.container)}>
        <div className={styles.glowContainer}>
          <Glow />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.description}>{description}</p>
      </div>
    </section>
  );
};

export default PageTitle;
