import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";
import styles from "./style.module.scss"
import { ContactCard } from "./ContactCard";

export const ContactList = () => {

   return (
      <div className="container">
         <div className={`${styles.headerSection}`}>
            <h1 className="title2">Contatos</h1>
            <button className={`${styles.btn} btn grey`}><FiPlus/></button>
         </div>
         <ul className={`${styles.section} container`}>
            <ContactCard/>
         </ul>
      </div>
   );
};
