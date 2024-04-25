 import {readfile} from 'fs/promises'
 import {obtener_genero} from './utils/utils.js'
 const file = await readfile

 const data = JSON.parse(file)

 const peliculasTerror = obtener_genero(data,"terror")

 //if (peliculasTerror.length > 0)