import styles from "./FeatureTitle.module.scss";

const FeatureTitle = ({title, subtitle, description}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className="subtitle">{subtitle}</div>
        <h2>{title}</h2>
      </div>
        <p className={styles.description}>
          {description}
        </p>
    </div>
  );
};

export default FeatureTitle;
