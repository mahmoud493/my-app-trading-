'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '../../components/ui/Input';
import { Button } from '../../components/ui/Button';
import { loginSchema, type LoginValues } from '../../types/auth';
import { login } from '../../services/api/auth';
import { useAuthStore } from '../../stores/useAuthStore';

export function LoginForm() {
  const setUser = useAuthStore((state) => state.setUser);
  const { register, handleSubmit, formState } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = async (values: LoginValues) => {
    const session = await login(values);
    setUser(session);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <Input label="Email" type="email" placeholder="trader@mt5pro.com" {...register('email')} />
      <Input label="Mot de passe" type="password" placeholder="••••••••" {...register('password')} />
      <Button type="submit" className="w-full" disabled={formState.isSubmitting}>
        {formState.isSubmitting ? 'Connexion...' : 'Se connecter'}
      </Button>
    </form>
  );
}
