import express from 'express';
import mozoRouter from './routes/mozo.routes.js';
import pedidosRouter from './routes/pedidos.routes.js';
import sectoresRouter from './routes/sectores.routes.js';

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/mozo', mozoRouter)
app.use('/pedidos', pedidosRouter)
app.use('/sectores', sectoresRouter)