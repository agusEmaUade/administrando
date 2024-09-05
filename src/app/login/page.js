'use client';

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  return (
    <div>
      <h1>Iniciar sesión</h1>
      <input 
        type="email" 
        placeholder="Correo electrónico" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        placeholder="Contraseña" 
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button onClick={handleLogin}>Entrar</button>
      <div>
        <a href="/forgot-password">Olvidé la contraseña</a> <br/>
        <a href="/register">Registrate</a>
      </div>
    </div>
  );
}
