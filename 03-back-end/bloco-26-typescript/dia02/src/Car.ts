// ./Car.ts

import Colors from "./Colors";
import Directions from "./Directions";
import Doors from "./Doors";

class Car {
    brand: string;
    color: Colors;
    doors: number;

    constructor(brand: string, color: Colors, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }

    turnOn(): void {
        console.log("Carro ligado.");
    }

    turnOff(): void {
        console.log("Carro desligado.");
    }

    turn(direction: Directions): void {
        console.log(`Virando para a ${direction}.`);
    }

    speedUp(): void {
        console.log("Acelerando o carro.");
    }

    speedDown(): void {
        console.log("Reduzindo a velocidade do carro.");
    }

    stop(): void {
        console.log("Parando o carro.");
    }

    honk(): void {
        console.log("Buzinando: BIP BIP");
    }

    openTheDoor(door: Doors): void {
        console.log(`Abrindo a porta ${door}.`);
    }

    closeTheDoor(door: Doors): void {
        console.log(`Fechando a porta ${door}.`);
    }
}

export default Car;