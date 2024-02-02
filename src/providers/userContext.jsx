import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const navigate = useNavigate();
    const [contacts, setContacts] = useState();

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
              setUser(data);
              setContacts(data.contacts) 
              navigate("/home");
            } catch (error) {
              toast.error("Token inspirado");
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
            toast.success("Logado com sucesso");
            navigate("/home")
        } catch (error) {
            if (error.response?.data.message === "Invalid email or password") {
                toast.error("Senha ou email ivalidos");
            } else if (error.response?.data.message ==="Client not found") {
              toast.error("Senha ou email ivalidos");
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
            toast.success("Usuario cadastrado com sucesso");
        } catch (error) {
            if (error.response.data.message === "A client with this email and telephone already exists") {
              toast.error("Um cliente com esse e-mail e telefone já existe");
            } else if (error.response.data.message === "A client with this email already exists") {
              toast.error("Um cliente com esse e-mail já existe");
            } else if (error.response.data.message === "A client with this telephone already exists") {
              toast.error("Um cliente com esse telefone já existe");
            }
        }
    }

    return (
        <UserContext.Provider
          value={{ setUser, user, userLogin, logout, userRegister, contacts, setContacts }}
        >
          {children}
        </UserContext.Provider>
      );
}