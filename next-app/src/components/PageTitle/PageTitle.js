import clsx from "clsx";
import Glow from "../Glow/Glow";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ title, description, glowClass, descriptionClass }) => {
  return (
    <section>
      <div className={clsx("content", styles.container)}>
        <div
          className={clsx({
            [styles.glowContainer]: true,
            [styles[glowClass]]: !!glowClass,
          })}
        >
          <Glow styleClass="dark" />
        </div>
        <h1 className={styles.title}>{title}</h1>
        <p
          className={clsx({
            [styles.description]: true,
            [styles[descriptionClass]]: !!descriptionClass,
          })}
        >
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageTitle;
