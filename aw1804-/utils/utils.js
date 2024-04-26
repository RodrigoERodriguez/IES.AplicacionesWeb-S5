export const obtener_genero = (arr,genero)=>{
    const res = arr.filter(e=> e.genero.toUpperCase() == genero.toUpperCase())
    return res
}
export const obtener_promedio = (arr)=> {
    const duracion = arr.reduce((acc,cur)=>acc +cur.duration,0)
    const CantPeliculas = arr.len
}