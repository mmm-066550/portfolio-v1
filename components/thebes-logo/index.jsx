import React from "react";
import styles from "./thebes-logo.module.sass";

export default function ThebesLogo() {
  return (
    <div id="thebes-logo" className={styles.thebes_logo}>
      <div className={styles.outer_circle}>
        <div className={styles.inner_circle}>
          <div className={styles.rectangle}>
            <div className={styles.triangle}></div>
            <div className={styles.square}>
              <div className={styles.t}></div>
              <div className={styles.shape}>
                <div className={styles.left}></div>
                <div className={styles.right}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
