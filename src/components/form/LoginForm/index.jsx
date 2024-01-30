import { useForm } from "react-hook-form";
import { Input } from "../input"
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { Link } from "react-router-dom";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    });
    
    const submit = (formData) => {
        console.log(formData);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <h2>Login</h2>
                <Input type="email" label={"Email"} placeholder="Digite aqui seu email"  {...register("email")} error={errors.email}/>
                <Input type="password" label={"Senha"} placeholder="Digite aqui sua senha"  {...register("password")} error={errors.password}/>
                <button type="submit">Botã0</button>
                <span>Ainda não possui uma conta?</span>
                <Link to="/register">Cadastrar-se</Link>
            </form>
        </div>
    )
}