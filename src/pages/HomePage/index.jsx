import { ContactList } from "../../components/ContactsList"
import { HomeHeader } from "../../components/header/HomeHeader"


export const HomePage = () => {
    return (
        <>
            <HomeHeader/>
            <main>
                <ContactList/>
            </main>
        </>
    )
}