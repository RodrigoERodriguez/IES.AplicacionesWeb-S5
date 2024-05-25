import { Router } from "express";
import { readFile, writeFile } from "fs/promises";

const filePedidos = await readFile("./json/pedidos.json" , "utf-8");
const dataPedidos = JSON.parse(filePedidos);

const pedidoRouter = Router();

pedidoRouter.get('/pedidosActivos',(req,res)=>{
    const resultado = dataPedidos.filter(e => e.estado == true)

    res.status(200).json(resultado)
})

pedidoRouter.post("/abrirNuevaMesa", (req, res) => {

    //Obtengo los datos del body
    const id_mesa = req.body.id_mesaid_mesa
    const id_mozo = req.body.id_mozo
    const pedido = req.body.pedido
    const estado = req.body.estado

    //Obtengo el ultimo id de la lista y le sumo 1, haciendolo autoincremental
    const id = dataPedidos[dataPedidos.length -1].id + 1

    //Creo un objeto con los datos del nuevo cliente
    const nuevoPedido = {
        id_mesa,
        id_mozo,
        pedido,
        estado,
        id
    }

    console.log(nuevoPedido)

    //Agrego el nuevo cliente al array de clientes
    dataPedidos.push(nuevoPedido)

    //Escribo el archivo con el nuevo cliente
    try{
        writeFile('./json/pedidos.json', JSON.stringify(dataPedidos,null,2));
        res.status(200).json(nuevoPedido)
    }catch(error){
        res.sendStatus(400)
    }
})

export default pedidoRouter;