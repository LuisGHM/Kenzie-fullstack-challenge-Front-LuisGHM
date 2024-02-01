import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const navigate = useNavigate();

    const userLogin = async (formData) => {
        try{
            const { data } = await api.post("/login", formData);
            localStorage.setItem("@TOKEN", data.token);
            setUser(data.user);
            console.log("Logado com sucesso");
            navigate("/home")
        } catch (error) {
            if (error.response?.data.message === "Invalid email or password") {
                console.log("Senha ou email ivalidos");
              }
        }
    }

    const logout = () => {
        setUser(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
      };

    return (
        <UserContext.Provider
          value={{ setUser, user, userLogin, logout }}
        >
          {children}
        </UserContext.Provider>
      );
}