import { ContactList } from "../../components/ContactsList"
import { ModalAdd } from "../../components/Modal/ModalAdd"
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
                </ContactProvider>
            </main>
        </>
    )
}