'use client';
import { useState } from 'react';
import { Button, TextField, Box, Typography, Link } from '@mui/material';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log("Email:", email, "Password:", password);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding="20px"
      sx={{ width: { xs: '100%', sm: '80%', md: '50%', lg: '40%' } }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Iniciar sesión
      </Typography>
      <TextField
        label="Correo electrónico"
        variant="outlined"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contraseña"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleLogin}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Entrar
      </Button>
      <Box mt={2} textAlign="center">
        <Link href="/forgot-password" underline="hover">
          Olvidé la contraseña
        </Link>
        <br />
        <Link href="/register" underline="hover">
          Registrate
        </Link>
      </Box>
    </Box>
  );
}
