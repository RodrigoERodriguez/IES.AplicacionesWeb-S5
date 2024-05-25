import express from 'express';
import ingredientesRouter from './routes/ingredientes.routes.js';
import recetasRouter from './routes/recetas.routes.js';

const app = express();

app.use(express.json());

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

app.use('/ingredientes', ingredientesRouter)
app.use('/recetas', recetasRouter)