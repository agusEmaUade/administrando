'use client';
import { Button, TextField, Box, Typography } from '@mui/material';
import { useState } from 'react';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    console.log("Email para recuperar contraseña:", email);
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
        Recuperar Contraseña
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
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleForgotPassword}
        fullWidth
        sx={{ marginTop: 2 }}
      >
        Enviar
      </Button>
    </Box>
  );
}
