import { useContext } from "react"
import { AiOutlineClose } from "react-icons/ai"
import { ContactContext } from "../../../providers/contactContext";
import { EditContactForm } from "../../form/editContactForm";

export const ModalEdit = () => {

    const { editingContact, setEditingContact } = useContext(ContactContext);

    return(
        editingContact ? (
            <div role="dialog" className={"modalOverlay"}>
                <div className={"modalBox"}>
                    <div className={"modalHeaderContainer"}>
                        <h3 className="headline bold">Informações do contato</h3>
                        <button className={`${"closeButton"} btn`} onClick={() => setEditingContact(null)}><AiOutlineClose/></button>
                    </div>
                    <div>
                        <EditContactForm/>
                    </div>
                </div>
            </div>
        ) : null
    )
}