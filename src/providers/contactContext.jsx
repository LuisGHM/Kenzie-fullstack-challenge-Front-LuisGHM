import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState } from "react";
import { UserContext } from "./userContext";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
    const [isOpenAdd, setisOpenAdd ] = useState(false);
    const [editingPost, setEditingPost] = useState(false);
    const token = localStorage.getItem("@TOKEN");
    const { setContacts, contacts, getUser } = useContext(UserContext)
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
          console.log("Post criado com sucesso")   
      },
      onError: (error) => {
        console.log(error);
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
          toast.success("Post deletado")
          navigate("/")
      }
 }); 

    return (
        <ContactContext.Provider
          value={{ setisOpenAdd, isOpenAdd, contactList, contactCreate, contactDelete }}
        >
          {children}
        </ContactContext.Provider>
      );
}