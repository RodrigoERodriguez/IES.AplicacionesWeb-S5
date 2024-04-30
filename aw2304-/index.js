import express from "express"
import peliculasRouter from './routes/peliculas.route.js'
import MesasRouter from './routes/mesas.route.js'
const app = express()

const port = 3000

//permite trabajar con json
app.use(express.json())

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`)
})

app.use('/peliculas', peliculasRouter)
app.use('/mesas', MesasRouter)


//endpoints -> DELETE
// -> GET
// -> UPDATE
// -> POST
