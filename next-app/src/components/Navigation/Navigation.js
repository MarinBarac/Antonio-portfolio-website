import clsx from "clsx";
import Button from "../Button/Button";
import { LINKS } from "./constants";
import Link from "next/link";

import styles from "./Navigation.module.scss";

const Navigation = ({ activeTab, show, closeMenu }) => {
  const containerClass = clsx({
    [styles.container]: true,
    [styles.show]: show,
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <div className={containerClass}>
      <ul className={styles.links}>
        {LINKS.map((link) => (
          <li key={link.label.toLowerCase()}>
            <Link
              href={link.href}
              onClick={closeMenu}
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
      <Button
        href={`https://calendly.com/antoniovidakovic/30min?month=${year}-${
          +month < 10 ? "0" + month : month
        }`}
        target="_blank"
        onClick={closeMenu}
        styleClass="purple"
      >
        Book a video call
      </Button>
    </div>
  );
};

export default Navigation;
