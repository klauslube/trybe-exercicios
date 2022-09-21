// ./interfaces.ts
export interface IVehicle {
  drive(): void;
  fly(): void;
}

export interface ICar {
  drive(): void;
}

export interface IAirPlane {
  fly():void;
}

export interface IFuturisticCar extends ICar, IAirPlane { }