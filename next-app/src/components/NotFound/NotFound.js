import clsx from "clsx";
import Button from "../Button/Button";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <section>
      <div className={clsx("content", styles.container)}>
        <h1>How did you manage to get here???</h1>
        <Button styleClass="purple" href="https://www.google.com/">
          Please leave the site
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
