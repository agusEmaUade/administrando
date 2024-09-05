'use client';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
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
        Registrarse
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
        onClick={handleRegister}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Registrarse
      </Button>
    </Box>
  );
}
