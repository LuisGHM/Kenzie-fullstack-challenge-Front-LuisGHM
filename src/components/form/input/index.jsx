import { forwardRef } from "react";

export const Input = forwardRef(({error, label, asside, ...rest}, ref) =>{
    return(
        <div>
            <label>{label}</label>
            <input ref={ref} {...rest} />
            {error ? <span>{error.message}</span> : null}
        </div>
    )
});