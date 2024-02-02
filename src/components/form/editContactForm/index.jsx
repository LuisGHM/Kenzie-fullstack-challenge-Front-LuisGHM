import { useContext } from "react";
import { ContactContext } from "../../../providers/contactContext";
import { useForm } from "react-hook-form";
import { Input } from "../input";

export const EditContactForm = () =>{

    const { editingContact, contactUpdate } = useContext(ContactContext);

    const { register, handleSubmit } = useForm({
        values:{
            name: editingContact.name,
            email: editingContact.email,
            telephone: editingContact.telephone,
        }
    });

    const submit = (formData) => {
        contactUpdate.mutate(formData);
    }

    return(
        <form className={"formContainer"} onSubmit={handleSubmit(submit)} >
            <Input className={`input`} asside={true} type="text" label={"Nome"} placeholder="Digite aqui o nome do contato"  {...register("name")}/>
            <Input className={`input`} asside={true} type="text" label={"e-mail"} placeholder="Digite aqui o e-mail do contato"  {...register("email")}/>
            <Input className={`input`} asside={true} type="text" label={"telefone"} placeholder="Digite aqui o telefone do contato"  {...register("telephone")}/>
            <button type="submit" className={`${"buttonSubmit"} btn`}>Alterar contato</button>
        </form>
    )
}