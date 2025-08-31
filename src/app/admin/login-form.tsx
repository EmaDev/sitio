
"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { KeyRound } from 'lucide-react';

const CORRECT_PASSWORD = 'ABcd12**';

interface AdminLoginFormProps {
  onLoginSuccess: () => void;
}

export function AdminLoginForm({ onLoginSuccess }: AdminLoginFormProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      setError('');
      onLoginSuccess();
    } else {
      setError('Contraseña incorrecta. Por favor, inténtalo de nuevo.');
    }
  };

  return (
    <Card className="max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Iniciar Sesión</CardTitle>
          <CardDescription>Introduce la clave de acceso para gestionar el blog.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="pl-10"
              required
            />
          </div>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error de acceso</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
