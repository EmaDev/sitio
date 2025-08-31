
"use client";

import { useState } from 'react';
import { AdminLoginForm } from './login-form';
import { NewPostForm } from './new-post-form';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="container mx-auto max-w-3xl py-12 md:py-24">
      {!isAuthenticated ? (
        <>
          <div className="space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Acceso de Administrador
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Por favor, introduce la contraseña para continuar.
            </p>
          </div>
          <AdminLoginForm onLoginSuccess={handleLoginSuccess} />
        </>
      ) : (
        <>
           <div className="space-y-4 text-center mb-12">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">
              Crear Nueva Entrada de Blog
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
              Rellena el formulario para añadir una nueva publicación a tu blog.
            </p>
          </div>
          <NewPostForm />
        </>
      )}
    </div>
  );
}