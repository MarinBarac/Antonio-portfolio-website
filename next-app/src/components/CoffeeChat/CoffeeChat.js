import clsx from "clsx";
import Button from "../Button/Button";
import styles from "./CoffeeChat.module.scss";

const CoffeeChat = () => {
  return (
    <section>
      <div className={clsx("content", styles.container)}>
        <h2>Coffee chat?</h2>
        <p className={styles.description}>
          No strings attached. Book a 30 minute video call via Calendly and ask
          me anything you want to know more about.
        </p>
        <div className={styles.buttons}>
          <Button styleClass="white-black">Useless button</Button>
          <Button styleClass="purple">Book 30min call</Button>
        </div>
      </div>
    </section>
  );
};

export default CoffeeChat;
