import { z } from "zod";

export const registerFormSchema = z.object({
    name: z.string().min( 1, "O nome é obrigatório"),
    email: z.string().min( 1,"O e-mail é obrigatório").email("Forneça um e-mail valido"),
    password: z
      .string()
      .min( 1,"A senha é obrigatória")
      .min(8, "São necessarios pelo menos oito caracteres.")
      .regex(/[A-Z]+/, "É necessario conter pelo menos uma letrar maiúscula.")
      .regex(/[a-z]+/, "É necessario conter pelo menos uma letra minúscula")
      .regex(/[0-9]+/, "É necessario conter pelo menos um númeor")
      .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\-]+/, "É necessario conter pelo menos um caractere especial"),
      telephone: z.string().min(1, "O telefone é obrigatório")
})