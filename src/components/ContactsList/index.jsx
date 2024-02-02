import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./style.module.scss"
import { ContactCard } from "./ContactCard";
import { UserContext } from "../../providers/userContext";
import { ContactContext } from "../../providers/contactContext";

export const ContactList = () => {

   const { setisOpenAdd, contactList } = useContext(ContactContext)

   return (
      <div className="container">
         <div className={`${styles.headerSection}`}>
            <h1 className="title2">Contatos</h1>
            <button onClick={() => setisOpenAdd(true)} className={`${styles.btn} btn grey`}><FiPlus/></button>
         </div>
         <ul className={`${styles.section} container`}>
            {contactList !== undefined && contactList !== 0 ? (
               contactList.map((item) => <ContactCard key={item.id} contact={item} />)
               ) : (
               <h3>Você não tem nenhuma contato em sua lista</h3>
            )}
         </ul>
      </div>
   );
};
