import { useContext } from "react";
import { ContactContext } from "../../../providers/contactContext";
import { AiOutlineClose } from "react-icons/ai"
import { AddContactForm } from "../../form/AddContactForm";

export const ModalAdd = () => {
    const {setisOpenAdd, isOpenAdd } = useContext(ContactContext);

    return(
        isOpenAdd ? (
            <div role="dialog" className={"modalOverlay"}>
                <div className={"modalBox"}>
                    <div className={"modalHeaderContainer"}>
                        <h3 className="headline bold">Cadastrar um novo contato</h3>
                        <button className={`${"closeButton"} btn`} onClick={() => setisOpenAdd(false)}><AiOutlineClose/></button>
                    </div>
                    <div>
                        <AddContactForm/>
                    </div>
                </div>
            </div>
        ) : null
    )
}