import clsx from "clsx";
import Link from "next/link";

import styles from "./Button.module.scss";

const Button = ({ children, styleClass, href, target, type, style }) => {
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
    <Link
      href={href}
      target={target || "_self"}
      className={btnStyles}
      style={{ ...style }}
    >
      {children}
    </Link>
  );
};

export default Button;
