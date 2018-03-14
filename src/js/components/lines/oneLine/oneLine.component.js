import React from "react";
import styles from "./styles.scss"

const OneLine = ({name, deleteLine, id}) => (
    <div className={styles.line}>
        <span>{name}</span>
        <i onClick={(id) => deleteLine(id)}
            className="material-icons md-24">clear</i>
    </div>
);

export default OneLine;

