import { BiPencil } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs"
import styles from "./style.module.scss"

export const ContactCard = () => {
    return (
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.cardHeader}`}>
                    <h1>Texeira</h1>
                    <h3 className={`headline grey2`}>texeira@gmail.com | 2222222</h3>
                </div>
                <div className={`${styles.btns}`}>
                    <button className={`${styles.btn} btn blue`}><BiPencil/></button>
                    <button className={`${styles.btn} btn blue`}><BsFillTrash3Fill/></button>
                </div>
            </div>
        </>
    )
}