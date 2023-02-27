import clsx from "clsx";
import styles from "./Glow.module.scss";

const Glow = ({ styleClass }) => {
    console.log(styleClass);
  return (
    <div
      className={clsx({
        [styles.glow]: true,
        [styles[styleClass]]: !!styleClass,
      })}
    />
  );
};

export default Glow;
