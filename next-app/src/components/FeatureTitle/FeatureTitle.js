import clsx from "clsx";
import styles from "./FeatureTitle.module.scss";

const FeatureTitle = ({ title, subtitle, description, descriptionStyle }) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className="subtitle">{subtitle}</div>
        <h2>{title}</h2>
      </div>
      <p
        className={descriptionStyle && styles[descriptionStyle]}
      >
        {description}
      </p>
    </div>
  );
};

export default FeatureTitle;
