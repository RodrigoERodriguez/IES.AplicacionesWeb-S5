import express from 'express';
import habitacionesRouter from './routes/habitaciones.routes.js';
import clientesRouter from './routes/clientes.routes.js';

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/habitaciones', habitacionesRouter)
app.use('/clientes', clientesRouter)