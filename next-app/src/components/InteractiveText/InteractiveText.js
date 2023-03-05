import clsx from "clsx";
import styles from "./InteractiveText.module.scss";

const InteractiveText = ({ text, startIndex, endIndex }) => {
  const formattedText = text.split(" ").map((word, index, arr) => (
    <div
      className={clsx({
        [styles.word]: true,
        [styles.purple]: index >= startIndex && index <= endIndex,
      })}
      key={`word-${index}`}
    >
      {word.split("").map((character, index) => (
        <span
          className={clsx({
            [styles.character]: character !== " " && character !== `"`,
            [styles.specialCharacter]: character === " " || character === `"`,
          })}
          key={`word-span-${index}`}
        >
          <span>{character}</span>
        </span>
      ))}
      {index < arr.length - 1 && <>&nbsp;</>}
    </div>
  ));
  return <div className={styles.text}>{formattedText}</div>;
};

export default InteractiveText;
