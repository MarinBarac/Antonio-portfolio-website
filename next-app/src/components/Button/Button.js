import clsx from "clsx";
import Link from "next/link";

import styles from "./Button.module.scss";

const Button = ({ children, styleClass, href, type, style }) => {
  const btnStyles = clsx({
    [styles.container]: true,
    [styles[styleClass]]: !!styleClass,
  });

  if (!href) {
    return (
      <button
        type={!!type ? type : "submit"}
        className={btnStyles}
        style={{ ...style }}
      >
        {children}
      </button>
    );
  }

  return (
    <Link className={btnStyles} style={{ ...style }} href={href}>
      {children}
    </Link>
  );
};

export default Button;
