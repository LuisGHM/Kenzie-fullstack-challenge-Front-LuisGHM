import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { registerFormSchema } from "./registerFormSchema"
import { Input } from "../input";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
    const {register, handleSubmit, formState: {errors},} = useForm({
        resolver: zodResolver(registerFormSchema)
    });

    const submit = (formData) => {
        console.log(formData);
      };

      return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Crie sua conta</h2>
                <Input
                className="input"
                type="text"
                label={"Nome"}
                placeholder="Digite aqui seu nome"
                {...register("name")}
                error={errors.name}
                />
                <Input
                className="input"
                type="text"
                label={"Email"}
                placeholder="Digite aqui seu email"
                {...register("email")}
                error={errors.email}
                />
                <Input
                className="input"
                type="password"
                label={"Senha"}
                placeholder="Digite aqui sua senha"
                {...register("password")}
                error={errors.password}
                />
                <Input
                className="input"
                type="text"
                label={"Telefone"}
                placeholder="Digite aqui o seu telefone"
                {...register("telephone")}
                error={errors.telephone}
                />
                <button>Cadastrar</button>
                <Link to={"/"}>Voltar</Link>
                </form>
        </div>
      )
}