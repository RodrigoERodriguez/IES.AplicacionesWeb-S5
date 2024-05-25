export class Data {
    constructor() {
        this.obj1 = { id: 10, name: 'John', lastName: 'Doe' };

        this.obj2 = { id: 11, name: 'Jane', lastName: 'Doe', lang: [{ lang: 'Spanish' }, { lang: 'English' }] };

        this.obj3 = [
            { id: 1, name: 'Jane', lastName: 'Doe', lang: [{ lang: 'Spanish' }, { lang: 'English' }] },
            { id: 2, name: 'Juan', lastName: 'González', lang: [{ lang: 'Spanish' }] },
            { id: 3, name: 'John', lastName: 'Smith', lang: [{ lang: 'English' }, { lang: 'Italian' }] },
            { id: 4, name: 'Elena', lastName: 'Rossi', lang: [{ lang: 'Italian' }, { lang: 'Spanish' }] },
            { id: 5, name: 'Hans', lastName: 'Müller', lang: [{ lang: 'German' }, { lang: 'English' }] },
            { id: 6, name: 'Luisa', lastName: 'García', lang: [{ lang: 'Spanish' }, { lang: 'German' }] },
            { id: 7, name: 'Maria', lastName: 'Schmidt', lang: [{ lang: 'German' }, { lang: 'Italian' }] },
            { id: 8, name: 'Giuseppe', lastName: 'Moretti', lang: [{ lang: 'Italian' }, { lang: 'English' }] },
            { id: 9, name: 'Peter', lastName: 'Wagner', lang: [{ lang: 'German' }] },
            { id: 10, name: 'Ana', lastName: 'López', lang: [{ lang: 'Spanish' }] }
        ];
    }

    getObj1() {
        return this.obj1;
    }
    getObj1Edad(edad){
        this.obj1.edad = edad;
        return this.obj1;
    }

    getObj3Idiomas(id){
        return this.obj3.map(e => {
            e.id = id
            return e.lang;
        })
    }

    getObj2Idiomas() {
        const idiomas = [];
        this.obj2.lang.forEach(l => {
            idiomas.push(l.lang);
        });
        return idiomas;
    }

    getPersonas(){
        const arr = this.obj3.filter(e => {
            return e.lang.length == 1
        })
        return arr;
    }
}