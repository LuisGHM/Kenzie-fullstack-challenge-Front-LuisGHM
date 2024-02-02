import { ContactList } from "../../components/ContactsList"
import { ModalAdd } from "../../components/Modal/ModalAdd"
import { ModalEdit } from "../../components/Modal/ModalEdit"
import { HomeHeader } from "../../components/header/HomeHeader"
import { ContactProvider } from "../../providers/contactContext"


export const HomePage = () => {
    return (
        <>
            <HomeHeader/>
            <main>
                <ContactProvider>
                    <ContactList/>
                    <ModalAdd/>
                    <ModalEdit/>
                </ContactProvider>
            </main>
        </>
    )
}