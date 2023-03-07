import clsx from "clsx";
import { useState } from "react";
import Button from "../Button/Button";

import styles from "./UselessButton.module.scss";

const UselessButton = () => {
  const [moveLeft, setMoveLeft] = useState(false);

  const toggleMove = () => {
    setMoveLeft((prevState) => !prevState);
  };

  return (
    <div
      onMouseEnter={toggleMove}
      className={clsx({ [styles.container]: true, [styles.left]: moveLeft })}
    >
      <Button styleClass="white-black" style={{width: '100%'}}>Useless button</Button>
    </div>
  );
};

export default UselessButton;
