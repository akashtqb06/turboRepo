import { type ReactNode } from "react";
import React from "react";
import styles from "./card.module.css"

export function Card({
  title,
  children,
  href,
}: {
  title: string;
  children: ReactNode;
  href: string;
}): JSX.Element {
  return (
    <a
      className={`${styles.anchor} group`}
      href={href}
      // rel="noopener noreferrer"
      // target="_blank"
    >
      <h2 className={styles.titleh1}>
        {title}{" "}
        <span className={styles.titleSpan}>
          -&gt;
        </span>
      </h2>
      <p className={styles.content}>
        {children}
      </p>
    </a>
  );
}
