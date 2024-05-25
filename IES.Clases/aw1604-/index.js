import {Data} from "./data/data.js" 

console.log("sv funcando");

let obj = new Data();
let i = 1;
obj.getObj2Idiomas().forEach((e) => {
    console.log(`idioma ${i} =`, e);
    i++;
});

console.log(obj.getObj2Idiomas());

console.log(obj.getPersonas());
