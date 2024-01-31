import { forwardRef } from "react";
import styles from "./style.module.scss"

export const Input = forwardRef(({error, label, asside, ...rest}, ref) =>{
    return(
        <div className={`${styles.container}`}>
            <label className="alignCenter">{label}</label>
            <input ref={ref} {...rest} />
            {error ? <span>{error.message}</span> : null}
        </div>
    )
});