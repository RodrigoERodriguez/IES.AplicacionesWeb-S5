import { Router } from "express";

const router = Router()

router.get('/mesaLibre', (req,res)=>{
    res.status(200).json({mensaje:"La mesa esta libre"})
})


router.get('/mesaCerrada', (req,res)=>{
    res.status(200).json({mensaje:"mesa cerrada"})
})


export default router