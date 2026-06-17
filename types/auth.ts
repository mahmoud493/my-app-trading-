import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Email invalide'),
  password: z.string().min(8, 'Le mot de passe doit contenir au moins 8 caractères')
});

export const registerSchema = loginSchema.extend({
  confirmPassword: z.string().min(8, 'Confirmez le mot de passe')
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Les mots de passe doivent correspondre',
  path: ['confirmPassword']
});

export type LoginValues = z.infer<typeof loginSchema>;
export type RegisterValues = z.infer<typeof registerSchema>;

export type UserSession = {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
};
