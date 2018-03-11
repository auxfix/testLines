import React from "react";
import styles from "./styles.scss"

const OneLine = ({name}) => (
    <div className={styles.line}>
        <span>{name}</span>
    </div>
);

export default OneLine;

