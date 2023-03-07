import Button from "@/components/Button/Button";
import Image from "next/image";

import styles from "./ProjectItem.module.scss";

const ProjectItem = ({ title, image, link }) => {
  return (
    <li className={styles.container}>
      <Image
        src={image.src}
        alt="Project image"
        width={image.width}
        height={image.height}
        className={styles.image}
      />
      <div className={styles.textSide}>
        <h3>{title}</h3>
        <Button href={`https://dribbble.com/shots/${link}`} target="_blank" styleClass="white-black">
          Read case study on Dribble
        </Button>
      </div>
    </li>
  );
};

export default ProjectItem;
