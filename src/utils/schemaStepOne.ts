import { z } from "zod";
export const schemaStepOne = z.object({
    occupational: z.string(),
    cpf: z
      .string()
      .min(1, "CPF é obrigatório")
      .refine(
        (val) => {
          const digitsOnly = val.replace(/\D/g, "");
          return digitsOnly.length === 11;
        },
        {
          message: "CPF deve ter 11 dígitos",
        }
      ),
    phone: z
      .string()
      .min(1, "O telefone é obrigatório")
      .refine(
        (val) => {
          const digitsOnly = val.replace(/\D/g, "");
          return digitsOnly.length === 11;
        },
        {
          message: "O número deve ter 11 dígitos",
        }
      ),
    fullName: z.string().min(1, "A"),
    city: z.string().min(1, "A"),
    agency: z.string().min(1, "A"),
    bank: z.string().min(1, "A"),
    cep: z
      .string()
      .min(1, "O telefone é obrigatório")
      .refine(
        (val) => {
          const digitsOnly = val.replace(/\D/g, "");
          return digitsOnly.length === 11;
        },
        {
          message: "O número deve ter 11 dígitos",
        }
      ),
  });
  