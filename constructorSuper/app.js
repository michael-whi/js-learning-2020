class Car {
    constructor(doors, engine, color){
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }

    carInfo(){
        return `The has ${this.doors} doors and ${this.engine} engine and ${this.color} color`;
    }

    static totalDoors(car1, car2){
        return car1.doors + car2.doors    
    }
}

class SUV extends Car {
    constructor (doors, engine, color, brand) {
        super(doors, engine, color)
        this.brand = brand;
    }

    myBrand(){
        return console.log(`The brand is ${this.brand}`)
    }
}

const extVihicle = new SUV(4, "v4", 'black', 'lada');

console.log(extVihicle)
console.log(extVihicle.carInfo())
console.log(extVihicle.myBrand())