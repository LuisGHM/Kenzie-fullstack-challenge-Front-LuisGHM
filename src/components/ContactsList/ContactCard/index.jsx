import { BiPencil } from "react-icons/bi";
import { BsFillTrash3Fill } from "react-icons/bs"
import styles from "./style.module.scss"
import { useContext } from "react";
import { ContactContext } from "../../../providers/contactContext";

export const ContactCard = ({ contact }) => {

    const { contactDelete } = useContext(ContactContext)

    return (
        <>
            <div className={`${styles.card}`}>
                <div className={`${styles.cardHeader}`}>
                    <h1>{contact.name}</h1>
                    <h3 className={`headline grey2`}>{contact.email} | {contact.telephone}</h3>
                </div>
                <div className={`${styles.btns}`}>
                    <button className={`${styles.btn} btn blue`}><BiPencil/></button>
                    <button className={`${styles.btn} btn blue`} onClick={() => contactDelete.mutate(contact)}><BsFillTrash3Fill/></button>
                </div>
            </div>
        </>
    )
}