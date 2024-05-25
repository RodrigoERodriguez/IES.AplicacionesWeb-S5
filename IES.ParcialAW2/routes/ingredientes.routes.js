import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const fileIngredientes = await readFile("./json/ingredientes.json" , "utf-8");
const dataIngredientes = JSON.parse(fileIngredientes);

const ingredientesRouter = Router();


//Pasar los datos por parametros
//localhost:3000/ingredientes/infoIngredientes/1
ingredientesRouter.get('/infoIngredientes/:id', (req, res) => {

    const result = []

    dataIngredientes.map(e=>{
        if(e.id == req.params.id){
            result.push(e)
        }
    })
    res.status(200).json(result)
})

//Pasar los datos por body
//    {
//     "nombre": "",
//     "cantidad": "250",
//     "medicion": "gramos"
//    }
ingredientesRouter.post("/agregarIngredientes", (req, res) => {

    if (!req.body.nombre || !req.body.cantidad || !req.body.medicion) {
        return res.status(400).json({ error: "Por favor, proporcione todos los campos requeridos." });
    }    

    const nombre = req.body.nombre
    const cantidad = req.body.cantidad
    const medicion = req.body.medicion

    const id = dataIngredientes[dataIngredientes.length -1].id + 1

    const nuevoIngrediente = {
        id,
        nombre,
        cantidad,
        medicion
    }

    console.log(nuevoIngrediente)

    dataIngredientes.push(nuevoIngrediente)

    try{
        writeFile('./json/ingredientes.json', JSON.stringify(dataIngredientes,null,2));
        res.status(200).json(nuevoIngrediente)
    }catch(error){
        res.sendStatus(400)
    }
})

export default ingredientesRouter;