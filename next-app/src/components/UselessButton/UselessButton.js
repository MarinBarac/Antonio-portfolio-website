import clsx from "clsx";
import { useState } from "react";
import { useMedia } from "use-media";
import Button from "../Button/Button";

import styles from "./UselessButton.module.scss";

const UselessButton = () => {
  const mobileView = useMedia({maxWidth: "768px"});
  const [moveLeft, setMoveLeft] = useState(false);

  const toggleMove = () => {
    !mobileView && setMoveLeft((prevState) => !prevState);
  };

  const moveBack = () => {
    !mobileView && setMoveLeft(false);
  };

  const handleClick = () => {
    if(!moveLeft) {
      setMoveLeft(true);
      setTimeout(() => setMoveLeft(false), 1100);
    }
  }

  return (
    <div style={{position: "relative"}} onMouseLeave={moveBack} onClick={handleClick}>
      <div
        onMouseEnter={toggleMove}
        className={clsx({ [styles.container]: true, [styles.left]: moveLeft })}
      >
        <Button styleClass="white-black" style={{ width: "100%" }}>
          Useless button
        </Button>
      </div>
    </div>
  );
};

export default UselessButton;
