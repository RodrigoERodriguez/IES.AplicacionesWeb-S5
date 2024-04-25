import{obj1,obj2,obj3} from './data/data.js'
import {f1,f2,f3}from './utils/utils.js'

const res1 = f1(obj1)
console.log("f1 = ",res1)

const res2 = f2 (obj1)
//obj1 = f2(obj1,21) otra forma de hacerlo 
console.log("f2 = ", res2)


const res3 = f3(obj2)
res3.foreach(e=>{
    console.log("f3 = ", e)
})
const res4 = f3 (obj2)
console.log("f4 = ",res4)

const res6 = f6(obj3)
res6.foreach(e=>{
    console.log("f6=",e.name,e.lang)
})
console.log("f6 = ",res6)