import { Box, Typography, Button, Grid } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      padding="20px"
      sx={{ width: { xs: '100%', sm: '80%', md: '60%', lg: '50%' } }}
    >
      <Typography variant="h4" component="h1" gutterBottom>
        Bienvenido a Administrando
      </Typography>
      <Typography variant="h6" component="h2" gutterBottom>
        Tu gestor de gastos para viajes.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Administrando te ayuda a llevar un control eficiente de tus gastos durante tus viajes. 
        Puedes dividir los gastos con amigos, realizar un seguimiento de quién debe qué, y mantener 
        un balance justo durante toda tu aventura.
      </Typography>

      {/* Sección de imágenes */}
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src="/images/expense-tracking.PNG" // Coloca la ruta de tu imagen aquí
            alt="Expense Tracking"
            width={500}
            height={300}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src="/images/split-expenses.PNG" // Coloca la ruta de tu imagen aquí
            alt="Split Expenses"
            width={500}
            height={300}
            layout="responsive"
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Image
            src="/images/expense-summary.PNG" // Coloca la ruta de tu imagen aquí
            alt="Expense Summary"
            width={500}
            height={300}
            layout="responsive"
          />
        </Grid>
      </Grid>

      {/* Botón para comenzar */}
      <Button 
        variant="contained" 
        color="primary" 
        sx={{ marginTop: 4 }}
        href="/login"
      >
        Comienza Ahora
      </Button>
    </Box>
  );
}
