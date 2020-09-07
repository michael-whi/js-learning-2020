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


const lada = new Car(4, "v4", 'black');
const gaz = new Car(2, "v6", 'blue');

console.log(Car.totalDoors(lada, gaz))
console.log(lada)
console.log(lada.carInfo())
