import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const fileRecetas = await readFile("./json/recetas.json" , "utf-8");
const datarecetas = JSON.parse(fileRecetas);

const fileIngredientes = await readFile("./json/ingredientes.json" , "utf-8");
const dataIngredientes = JSON.parse(fileIngredientes);

const recetasRouter = Router();

//Pasar los datos por parametros
//
recetasRouter.get('/infoRecetas/:id', (req, res) => {

    const id = req.params.id;

    const recetas = datarecetas.find(e => e.id == id)
    const ingrediente = []
    
    if (!recetas) {
        return res.status(200).json([]);
    }
    else{
        recetas.Ingredientes.forEach(e=>{
            ingrediente.push(dataIngredientes.find(i => i.id == e).nombre)
        })
    
        recetas.Ingredientes = ingrediente    
    }

    res.status(200).json(recetas);
})

//Pasar los datos por body
//localhost:3000/recetas/agregarRecetas
recetasRouter.post("/agregarRecetas", (req, res) => {

    if (!req.body.nombre || !req.body.descripcion || !req.body.ingredientes) {
        return res.status(400).json({ error: "Por favor, proporcione todos los campos requeridos." });
    }   

    const nombre = req.body.nombre
    const descripcion = req.body.descripcion
    const ingredientes = req.body.ingredientes

    const id = datarecetas[datarecetas.length -1].id + 1

    const nuevaReceta = {
        id,
        nombre,
        descripcion,
        ingredientes
    }

    console.log(nuevaReceta)

    datarecetas.push(nuevaReceta)

    try{
        writeFile('./json/recetas.json', JSON.stringify(datarecetas,null,2));
        res.status(200).json(nuevaReceta)
    }catch(error){
        res.sendStatus(400)
    }
})

recetasRouter.put('/actualizarRecetas/:id', (req, res) => {
    const id = req.params.id;
    const nuevoNombreReceta = req.body.nuevoNombre;

    try {
        const receta = datarecetas.find(e => e.id === id);

        receta.nombre = nuevoNombreReceta;

        writeFile('./json/recetas.json', JSON.stringify(datarecetas, null, 2), err => {
             res.status(200).json(receta);
        });
    } catch (error) {
        res.status(500).json('Error al actualizar el nombre de la receta');
    }
});

export default recetasRouter;