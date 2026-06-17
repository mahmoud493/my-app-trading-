'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema, type RegisterValues } from '../../types/auth';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { registerUser } from '../../services/api/auth';
import { useAuthStore } from '../../stores/useAuthStore';

export function RegisterForm() {
  const setUser = useAuthStore((state) => state.setUser);
  const { register, handleSubmit, formState } = useForm<RegisterValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: { email: '', password: '', confirmPassword: '' }
  });

  const onSubmit = async (values: RegisterValues) => {
    const session = await registerUser(values);
    setUser(session);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input label="Email professionnel" type="email" placeholder="trader@mt5pro.com" {...register('email')} />
      <Input label="Mot de passe" type="password" placeholder="••••••••" {...register('password')} />
      <Input label="Confirmer le mot de passe" type="password" placeholder="••••••••" {...register('confirmPassword')} />
      <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Création...' : 'Créer un compte'}
      </Button>
    </form>
  );
}
