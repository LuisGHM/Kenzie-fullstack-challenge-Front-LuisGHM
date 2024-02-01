import { useForm } from "react-hook-form";
import { Input } from "../input"
import { loginFormSchema } from "./loginFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import styles from "./style.module.scss";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginFormSchema)
    });

    const { userLogin } = useContext(UserContext)
    
    const submit = (formData) => {
        userLogin(formData);
    }

    return (
        <div className={`${styles.formContainer} container`}>
            <form className={`form`} onSubmit={handleSubmit(submit)}>
                <h2 className={`alignCenter`}>Login</h2>
                <Input className={`input`} type="email" label={"Email"} placeholder="Digite aqui seu email"  {...register("email")} error={errors.email}/>
                <Input className={`input`} type="password" label={"Senha"} placeholder="Digite aqui sua senha"  {...register("password")} error={errors.password}/>
                <button className={`btn`} type="submit">Entrar</button>
                <span className={`headline bold grey2 alignCenter`}>Ainda não possui uma conta?</span>
                <Link className={`btn grey`} to="/register">Cadastrar-se</Link>
            </form>
        </div>
    )
}