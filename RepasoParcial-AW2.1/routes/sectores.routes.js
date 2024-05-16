import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const fileSectores = await readFile("./json/sectores.json" , "utf-8");
const dataSectores = JSON.parse(fileSectores);

const fileMozo = await readFile("./json/mozos.json" , "utf-8");
const dataMozo = JSON.parse(fileMozo);

const sectoresRouter = Router();

sectoresRouter.get('/infoSector/:id', (req, res) => {
    const id = req.params.id

    const sector = dataSectores.find(e=> e.id == id)
    const mozos = []

    sector.mozos.forEach(e=>{
        mozos.push(dataMozo.find(i => i.id == e).nombre)
    })

    sector.mozos = mozos

    res.status(200).json(sector)
})

export default sectoresRouter;