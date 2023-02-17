import styles from "./Features.module.scss";
import FeatureTitle from "../../FeatureTitle/FeatureTitle";
import FeatureList from "./FeatureList/FeatureList";

const Features = () => {
  return (
    <section className={styles.container}>
      <FeatureTitle
        title="How you can solve my problem?"
        subtitle="HERE COMES THE “FUN” PART"
        description={
          <>
            If you&apos;re looking for attractive UI design, you can save time by
            visiting dribbble.com.
            <br />
            <br />
            However, if your goal is to increase sales and engagement by
            understanding users and what problems they have and if your product
            in the first place solves their issues which will, in the end, lead
            to higher engagement and a rise in incomes, then I can help, and you
            can continue to read.
          </>
        }
      />
      <FeatureList />
    </section>
  );
};

export default Features;
