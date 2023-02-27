import clsx from "clsx";
import styles from "./InteractiveText.module.scss";

const InteractiveText = ({ text, startIndex, endIndex }) => {
  const map = text.split("").map((character, index) => (
    <span
      className={clsx({
        [styles.character]: character !== " " && character !== `"`,
        [styles.purple]: index >= startIndex && index <= endIndex,
      })}
      key={`span-${index}`}
    >
      <span>{character}</span>
    </span>
  ));
  return <div className={styles.text}>{map}</div>;
};

export default InteractiveText;
