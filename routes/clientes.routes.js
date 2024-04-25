import { Router } from ""

const router = Router()

router.get('/Saludo', (req, res) => {
    res.status(200).json({Saludo: "Saludo del Cliente"})
})

export default router