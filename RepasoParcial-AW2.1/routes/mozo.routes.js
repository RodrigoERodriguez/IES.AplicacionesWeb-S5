import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const fileMozo = await readFile("./json/mozos.json" , "utf-8");
const dataMozo = JSON.parse(fileMozo);

const fileSectores = await readFile("./json/sectores.json" , "utf-8");
const dataSectores = JSON.parse(fileSectores);

const mozoRouter = Router();

mozoRouter.get('/infoMozo', (req, res) => {
    const id = req.body.id;

    const mozo = dataMozo.find(e => e.id == id)
    const sector = dataSectores.find(e => e.mozos.includes(id))

    mozo.sector = sector.nombre;
    res.status(200).json(mozo);
})

export default mozoRouter;