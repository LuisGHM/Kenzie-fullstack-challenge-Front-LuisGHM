import { z } from "zod";

export const addContactFormSchema = z.object({
    name: z.string().min(1, "O nome do contato é obrigatória"),
    email: z.string().min(1, "O e-mail do contato é obrigatória"),
    telephone: z.string().min(1, "O telefone do contato é obrigatória"),
})