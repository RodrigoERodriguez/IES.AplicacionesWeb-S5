export const f1 = (obj)=>{
    return obj
}

export const f2 = (obj,age)=>{

    obj.age= age
    return obj
}

export const f3 = (obj)=>{
    const vec = obj.lang.map(e=>{
        return e.lang
    })

    return vec
}

export const f6 = (obj)=>{
    const arr = obj.filter(e=> e.lang.length == 1)
    return arr 
}