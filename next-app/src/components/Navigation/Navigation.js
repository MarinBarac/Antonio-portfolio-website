import { LINKS } from "./constants";

import styles from "./Navigation.module.scss";

const Navigation = ({ activeTab }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li className={styles.link}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <div className={styles.button}></div>
    </div>
  );
};

export default Navigation;
