import { Router } from "express";
import { readFile } from "fs/promises";

const filehabitaciones = await readFile("./json/habitaciones.json");
const datahabitaciones = JSON.parse(filehabitaciones);

const fileClientes = await readFile("./json/clientes.json");
const dataClientes = JSON.parse(fileClientes);

const habitacionesRouter = Router();

// Creo esta funcion para poder obtener el nombre del cliente de una manera mas simple
function getClienteById(id) {
    return dataClientes.find(cliente => cliente.id === id);
}

habitacionesRouter.get('/infoHabitacionPiso/:id', (req, res) => {
    const id = req.params.id;

    const habitacion = datahabitaciones.find(e => e.id == id)

    // Suponiendo que habitacion tiene una propiedad clienteId
    const clienteId = habitacion.id_cliente;

    // Buscar al cliente en la base de datos
    const cliente = getClienteById(clienteId);

    // Agregar el nombre del cliente a la respuesta
    habitacion.nombreCliente = cliente.nombre;

    res.status(200).json(habitacion);
})

habitacionesRouter.get('/filtroEstadoHabitaciones/:estado',(req,res)=>{
    //Creo un array para almacenar el resultado del estado
    const result = []

    //Recorro el array de habitaciones y comparo el estado con el parametro de la url
    datahabitaciones.map(e=>{
        if(e.estado == req.params.estado){
            //Si el estado de la habitacion es igual al parametro de la url, lo agrego al array result
            result.push(e)
        }
    })
    res.status(200).json(result)
})

export default habitacionesRouter;