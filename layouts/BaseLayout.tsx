import React from "react";
import styles from "./BaseLayout.module.scss";

export const BaseLayout: React.FC = ({ children }) => (
  <>
    <div className={styles.wrapper}>{children}</div>
  </>
);
