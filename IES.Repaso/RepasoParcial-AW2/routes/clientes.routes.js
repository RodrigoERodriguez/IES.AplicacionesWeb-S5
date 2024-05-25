import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const fileClientes = await readFile("./json/clientes.json" , "utf-8");
const dataClientes = JSON.parse(fileClientes);

const clientesRouter = Router();

clientesRouter.post("/nuevoCliente", (req, res) => {
    //Obtengo los datos del body
    const nombre = req.body.nombre
    const apellido = req.body.apellido

    //Obtengo el ultimo id de la lista y le sumo 1, haciendolo autoincremental
    const id = dataClientes[dataClientes.length -1].id + 1

    //Creo un objeto con los datos del nuevo cliente
    const nuevoCliente = {
        id,
        nombre,
        apellido
    }

    //Agrego el nuevo cliente al array de clientes
    dataClientes.push(nuevoCliente)

    //Escribo el archivo con el nuevo cliente
    try{
        writeFile('./json/clientes.json', JSON.stringify(dataClientes,null,2));
        res.status(200).json(nuevoCliente)
    }catch(error){
        res.sendStatus(400)
    }
})

export default clientesRouter;
