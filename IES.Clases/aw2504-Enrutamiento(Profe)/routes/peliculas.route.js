import { Router } from "express";
import {readFile} from "fs/promises"


const file = await readFile('./data/peliculas.json')
const data = JSON.parse(file) 

const router = Router()

router.get('/all', (req,res)=>{
    res.status(200).json(data)
})


router.get('/genero/:gen', (req,res)=>{
    const genero = req.params.gen

    const result = data.filter(e=> e.genero == genero)
    res.status(200).json(result)
})

router.get('/genero/duracion/:gen/:dur', (req,res)=>{
    const genero = req.params.gen
    const duracion = parseInt(req.params.dur)

    const result = data.filter(e=> e.genero == genero && e.duracion >= duracion)
    res.status(200).json(result)
})


export default router