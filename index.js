import express from "express";

const app = express()

const port = 3000

app.use(express.json())

app.listen(port,()=>{
    console.log(`Servidor levantado en el puerto ${port}`)
})

app.get('/Saludo', (req, res) => {
    res.status(200).json({mensaje: "Saludo del Cliente"})
})