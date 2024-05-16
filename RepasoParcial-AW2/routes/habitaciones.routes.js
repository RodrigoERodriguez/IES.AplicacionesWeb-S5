import { Router } from "express";
import { readFile } from "fs/promises";

const filehabitaciones = await readFile("./json/habitaciones.json");
const datahabitaciones = JSON.parse(filehabitaciones);

const fileClientes = await readFile("./json/clientes.json");
const dataClientes = JSON.parse(fileClientes);

const habitacionesRouter = Router();


habitacionesRouter.get('/infoHabitacionPiso/:id', (req, res) => {
    const id = req.params.id;

    const habitacion = datahabitaciones.find(e => e.id == id)

    // Suponiendo que habitacion tiene una propiedad clienteId
    const clienteId = habitacion.id_cliente;

    // Buscar al cliente en la base de datos
    const clientes = dataClientes.find(cliente => cliente.id === id);

    // Agregar el nombre del cliente a la respuesta
    habitacion.nombreCliente = clientes.nombre;
    habitacion.apellidoCliente = clientes.apellido;

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

app.delete('/habitaciones/:id', async (req, res) => {
    try {

        const { id } = req.params;

        datahabitaciones = datahabitaciones.filter(habitacion => habitacion.id !== parseInt(id));
    
        await writeFile('./json/habitaciones.json', JSON.stringify(datahabitaciones, null, 2));
    
        res.status(200).json({ mensaje: 'Habitación eliminada.' });
        } catch (error) {
        res.status(500).json({ error: 'Se produjo un error' });
    }
});

export default habitacionesRouter;