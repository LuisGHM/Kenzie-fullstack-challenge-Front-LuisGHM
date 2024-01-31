import { Link } from "react-router-dom"
import styles from "./style.module.scss"

export const HomeHeader = () => {
    return (
        <header className={`${styles.line}`}>
            <div className={`${styles.header} container`}>
                <h3>Olá, Luis</h3>
                <Link className={`${styles.btn} btn grey`} to={"/"}>Logout</Link>
            </div>
        </header>
    )
}