// Reference Type

var object1 = { value: 10}
var object2 = object1; // Referencing to same address
var object3 = { value: 10}


console.log(object1===object2);
console.log(object1===object3);
console.log([]===[]);
console.log({}==={});

class Player {
    constructor(name,type){
        console.log('Player', this);
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi I'm a ${this.name}, and I'm a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name,type){
        super(name,type);
        console.log(Wizard, this)
    }

    play(){
        console.log(`WEEEE I', a ${this.type}`);
    }
}

const wizard1 = new Wizard('Ahmad','Engineer');
const wizard2 = new Wizard('Raza','Boy');