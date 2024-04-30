import {Router} from "express"

const router = Router()

router.get('/mesaLibre', (req, res) =>{
    res.status(200).json({mensaje: "Mesa Libre"})
})

router.get('/mesaOcupada', (req, res) =>{
    res.status(200).json({mensaje: "Mesa Ocupada"})
})

export default router