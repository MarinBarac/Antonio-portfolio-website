import clsx from "clsx";
import { PROJECTS } from "./constants";
import styles from "./MyWorkSection.module.scss";
import ProjectItem from "./ProjectItem/ProjectItem";

const MyWorkSection = () => {
  return (
    <section className={styles.section}>
      <div className={clsx("content", styles.container)}>
        <div className={styles.titleContainer}>
          <div className="subtitle">Replace this or not</div>
          <h2>Cool headline for a cool work stuff</h2>
        </div>
        <ul className={styles.list}>
          {PROJECTS.map((project, index) => (
            <ProjectItem key={`project-${index + 1}`} {...project} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default MyWorkSection;
