import { Router } from "express"

const router = Router()

router.get('/MLibre', (req, res) => {
    res.status(200).json({Saludo: "Mesa Libre"})
})

router.get('/MOcupada', (req, res) => {
    res.status(200).json({Saludo: "Mesa Ocupada"})
})


export default router