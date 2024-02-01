import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { jwtDecode } from "jwt-decode";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const navigate = useNavigate();

    useEffect(() => {
        const getUser = async () => {
          const token = localStorage.getItem("@TOKEN");
          if (token) {
            try {
                const decodedToken = jwtDecode(token);
               const { data } = await api.get(`/clients/email/${decodedToken.email}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              });
              navigate("/home");
              setUser(data); 
            } catch (error) {
              console.log("Token inspirado");
              setUser(null);
              navigate("/");
            }
          }
        };
        getUser();
      }, []);

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

    const userRegister = async (formData) => {
        try {
            await api.post("/clients", formData);
            navigate("/")
            console.log("Usuario cadastrado com sucesso");
        } catch (error) {
            if (error.response.data.message === "Email already exists") {
                console.log("O email já existe");
              }
        }
    }

    return (
        <UserContext.Provider
          value={{ setUser, user, userLogin, logout, userRegister }}
        >
          {children}
        </UserContext.Provider>
      );
}