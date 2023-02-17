import clsx from "clsx";
import Button from "../Button/Button";
import { LINKS } from "./constants";
import Link from "next/link";

import styles from "./Navigation.module.scss";

const Navigation = ({ activeTab }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li key={link.label.toLowerCase()}>
            <Link
              href={link.href}
              className={clsx({
                [styles.link]: true,
                [styles.active]: activeTab === link.href,
              })}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <Button styleClass="purple">Book a video call</Button>
    </div>
  );
};

export default Navigation;
