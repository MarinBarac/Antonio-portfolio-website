import styles from "./FeatureTitle.module.scss";

const FeatureTitle = ({title, subtitle, description}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className="subtitle">HERE COMES THE &ldquo;FUN&rdquo; PART</div>
        <h2>How you can solve my problem?</h2>
      </div>
        <p className={styles.description}>
          {description}
        </p>
    </div>
  );
};

export default FeatureTitle;
