import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./userContext";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const [isOpenAdd, setisOpenAdd ] = useState(false);
    const [editingContact, setEditingContact] = useState(null);
    const token = localStorage.getItem("@TOKEN");
    const { setContacts, contacts } = useContext(UserContext)
    const navigate = useNavigate();

    const { data: contactList} = useQuery({ queryKey: ["contacts"], queryFn: async () =>{
      if (token) {
        const decodedToken = jwtDecode(token);
        const { data } = await api.get(`/clients/email/${decodedToken.email}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setContacts(data.contacts);
          return data.contacts;
      }
    }});

    const client = useQueryClient();

    const revalidate = () => {
      client.invalidateQueries({ queryKey: ["contacts"]});
      setisOpenAdd(false)
    }

    const contactCreate = useMutation({
      mutationFn: async (formData) => {
           return await api.post("/contacts", formData, {
              headers: {
                  Authorization: `Bearer ${token}`,
              },
          }); 
      },
      onSuccess: () => {
          revalidate();
          toast.success("Contato criado com sucesso")  
      },
      onError: (error) => {
        if (error.response?.data.message === "A contact with this email already exists") {
          toast.error("um contato com esse email já existe");
        } else if (error.response?.data.message === "A contact with this telephone already exists") {
          toast.error("Um contato com esse telefone já existe");
        }
      }
     });

     const contactDelete = useMutation({
      mutationFn: async (formData) => {
            return await api.delete(`/contacts/${formData.id}`, {
              headers:{
                  Authorization: `Bearer ${token}`,
              },
          });
      },
      onSuccess:() =>{
          revalidate();
          toast.success("Contato deletado")
      },
      onError: () =>{
        if (error.response?.data.message === "Contact not found") {
          toast.error("Contato não encontrado");
        }
      }
    }); 

    const contactUpdate = useMutation({
      mutationFn: async (formData) => {
           return await api.patch(`/contacts/${editingContact.id}`, formData, {
              headers:{
                  Authorization: `Bearer ${token}`,
              },
          }); 
      },
      onSuccess:() =>{
          setEditingContact(null);
          revalidate();
          toast.success("Contato alterado com sucesso")
      },
      onError: (error) => {
        if (error.response?.data.message === "Contact not found") {
          toast.error("Contato não encontrado");
        } else if (error.response?.data.message === "A contact with this email already exists") {
          toast.error("Um contato com esse e-mail já existe");
        } else if (error.response?.data.message === "A contact with this telephone already exists") {
          toast.error("Um contato com esse telefone já existe");
        }
      }
    });

    return (
        <ContactContext.Provider
          value={{ setisOpenAdd, isOpenAdd, contactList, contactCreate, contactDelete, setEditingContact, editingContact, contactUpdate }}
        >
          {children}
        </ContactContext.Provider>
      );
}