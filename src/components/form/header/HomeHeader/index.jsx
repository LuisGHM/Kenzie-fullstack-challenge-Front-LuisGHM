import { Link } from "react-router-dom"

export const HeaderHeader = () => {
    return (
        <header>
            <div>
                <h3>Olá, Luis</h3>
                <Link to={"/"}>Logout</Link>
            </div>
        </header>
    )
}