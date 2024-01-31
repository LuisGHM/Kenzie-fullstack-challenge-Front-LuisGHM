import { Link } from "react-router-dom"

export const HomeHeader = () => {
    return (
        <header>
            <div>
                <h3>Olá, Luis</h3>
                <Link to={"/"}>Logout</Link>
            </div>
        </header>
    )
}