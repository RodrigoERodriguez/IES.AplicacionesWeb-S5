import express from 'express'
import peliculasRouter from './routes/peliculas.route.js'
import mesaRouter from './routes/mesas.routes.js'

import { readFile, writeFile  } from 'fs/promises' 


const app = express()

const port = 3000

app.use(express.json())

app.listen(port,()=>{
    console.log(`Servidor levantado en el puerto ${port}`)
})

app.use('/peliculas', peliculasRouter)
app.use('/mesa', mesaRouter)