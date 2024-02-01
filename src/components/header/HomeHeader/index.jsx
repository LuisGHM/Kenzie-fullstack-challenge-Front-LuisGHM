import { Link } from "react-router-dom"
import styles from "./style.module.scss"
import { useContext } from "react"
import { UserContext } from "../../../providers/userContext"

export const HomeHeader = () => {

    const { user, logout } = useContext(UserContext)

    return (
        <header className={`${styles.line}`}>
            <div className={`${styles.header} container`}>
                <h3>{user?.name}</h3>
                <Link onClick={logout} className={`${styles.btn} btn grey`} to={"/"}>Logout</Link>
            </div>
        </header>
    )
}