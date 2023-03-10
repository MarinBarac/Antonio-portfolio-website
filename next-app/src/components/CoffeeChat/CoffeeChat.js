import clsx from "clsx";
import BookCallBtn from "../BookCallBtn/BookCallBtn";
import Button from "../Button/Button";
import UselessButton from "../UselessButton/UselessButton";
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
          <UselessButton />
          <BookCallBtn />
        </div>
      </div>
    </section>
  );
};

export default CoffeeChat;
