import {Router} from "express"
import {readFile} from "fs/promises"

const file = await readFile('./peliculas.json')
const data = JSON.parse(file)

const router = Router()

router.get('/todas', (req, res) =>{
    res.status(200).json(data)
})

router.get('/genero/:gen', (req, res) =>{
    const genero = req.params.genero
    const result = data.filter(e => e.genero == genero)
    res.status(200).json(result)
})

export default router