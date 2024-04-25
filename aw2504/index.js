import express from "express";
import clientesRouter from "./routes/clientes.routes.js"
import mesasRouter from "./routes/mesa.routes.js"

import { readFile, writeFile } from "fs/promises"

const app = express()

const port = 3000

app.use(express.json())

app.listen(port,()=>{
    console.log(`Servidor levantado en el puerto ${port}`)
})

// app.get('/Saludo', (req, res) => {
//     res.status(200).json({mensaje: "Saludo del Cliente"})
// })

app.use('/Cliente', clientesRouter)

app.use('/Mesa', mesasRouter)