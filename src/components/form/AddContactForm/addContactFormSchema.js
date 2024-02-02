import { z } from "zod";

export const addContactFormSchema = z.object({
    name: z.string().min(1, "O nome do contato é obrigatória"),
    email: z.string().min(1, "O e-mail do contato é obrigatória"),
    telephone: z.string().min(1, "O telefone é obrigatório").min(8, "O telefone deve ter pelo menos 8 caracteres").max(15, "O telefone deve ter no máximo 15 caracteres").regex(/^\d+$/, "O telefone deve conter apenas números")
})