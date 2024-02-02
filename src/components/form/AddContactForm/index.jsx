import { useForm } from "react-hook-form";
import { addContactFormSchema } from "./addContactFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../input";
import { useContext } from "react";
import { ContactContext } from "../../../providers/contactContext";

export const AddContactForm = () => {

    const { contactCreate } = useContext(ContactContext)

    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(addContactFormSchema)
    });

    const submit = (formData) => {
        contactCreate.mutate(formData);
    }

    return(
        <form className={"formContainer"} onSubmit={handleSubmit(submit)}>
            <Input className={`input`} asside={true} type="text" label={"Nome"} placeholder="Digite aqui o nome do contato"  {...register("name")} error={errors.name}/>
            <Input className={`input`} asside={true} type="text" label={"e-mail"} placeholder="Digite aqui o e-mail do contato"  {...register("email")} error={errors.email}/>
            <Input className={`input`} asside={true} type="text" label={"telefone"} placeholder="Digite aqui o telefone do contato"  {...register("telephone")} error={errors.telephone}/>
            <button type="submit" className={`btn`}>Cadastar Contato</button>
        </form>
    )
}