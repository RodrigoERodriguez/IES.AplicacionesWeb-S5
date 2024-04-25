import { Router } from "express"
import { readFile } from "fs/promises"

const file = await readFile('../data/peliculas.json')
const data = JSON.parse(file)

const router = Router()

router.get('/all', (req, res) => {
    res.status(200).json(data)
})

router.get('/genero/:gen', (req, res) => {
    const genero = req.params.gen

    const result = data.filter(e=> e.genero == genero)
    res.status(200).json(result)
})

// router.get('/Saludo', (req, res) => {
//     res.status(200).json({Saludo: "Saludo del Cliente"})
// })

// router.get('/Despedida', (req, res) => {
//     res.status(200).json({Saludo: "Despedida del Cliente"})
// })


export default router