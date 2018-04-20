import React from "react";
import styles from "./styles.scss"

const OneLine = ({line: {id, name}, onDeleteLine}) =>{ 
    return(
        <div className={styles.line}>
            <span>{name}</span>
            <i onClick={() => onDeleteLine(id)}
                className="material-icons md-24">clear</i>
        </div>
    )
};

export default OneLine;

