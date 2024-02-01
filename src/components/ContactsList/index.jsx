import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./style.module.scss"
import { ContactCard } from "./ContactCard";
import { UserContext } from "../../providers/userContext";

export const ContactList = () => {

   const { user } = useContext(UserContext);

   const contacts = user?.contacts;

   return (
      <div className="container">
         <div className={`${styles.headerSection}`}>
            <h1 className="title2">Contatos</h1>
            <button className={`${styles.btn} btn grey`}><FiPlus/></button>
         </div>
         <ul className={`${styles.section} container`}>
            {contacts !== undefined && contacts !== 0 ? (
               contacts.map((item) => <ContactCard key={item.id} post={item} />)
               ) : (
               <h3>Você não tem nenhuma contato em sua lista</h3>
            )}
         </ul>
      </div>
   );
};
