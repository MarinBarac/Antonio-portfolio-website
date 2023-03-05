import clsx from "clsx";
import { useRef, useEffect, useState } from "react";
import styles from "./FeatureTitle.module.scss";

const FeatureTitle = ({
  title,
  subtitle,
  description,
  descriptionStyle,
  expanded,
}) => {
  const descriptionRef = useRef();
  const [descriptionHeight, setDescriptionHeight] = useState("auto");

  useEffect(() => {
    if (expanded && descriptionStyle === "expandableDescription") {
      setDescriptionHeight(
        `${descriptionRef.current.children[0].scrollHeight}px`
      );
    } else {
      descriptionStyle === "expandableDescription" &&
        setDescriptionHeight("60px");
    }
  }, [expanded]);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className="subtitle">{subtitle}</div>
        <h2>{title}</h2>
      </div>
      <div
        className={clsx({
          [styles.description]: true,
          [styles[descriptionStyle]]: descriptionStyle,
          [styles.expanded]: expanded,
        })}
        style={{
          height: `${descriptionHeight}`,
          transition: "transition: height 2s cubic-bezier(0, 1, 0, 1)",
        }}
        ref={descriptionRef}
      >
        {description}
      </div>
    </div>
  );
};

export default FeatureTitle;
