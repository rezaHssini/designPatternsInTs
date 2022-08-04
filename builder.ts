interface Vehicle {
  doors: number;
  addParts: () => void;
  beep: () => void;
}

interface IBuilder {
  stepOne: () => void;
  stepTwo: () => void;
  get: () => Vehicle;
}

class Shop {
  vehicles: Vehicle[];
  construct(builder: IBuilder) {
    builder.stepOne();
    builder.stepTwo();
    const vehicle = builder.get();
    this.vehicles.push(vehicle);
    return vehicle;
  }
}

class Car implements Vehicle {
  doors: number;
  addParts(): void {
    this.doors = 4;
  }
  beep(): void {
    console.log(`Beeeeeeeeeeeeep`);
  }
}

class Truck implements Vehicle {
  doors: number;
  weight: number;
  addParts(): void {
    this.doors = 2;
    this.weight = 10;
  }
  beep(): void {
    console.log(`Buuuuuuuuuuuuuup`);
  }
}

class CarBuilder implements IBuilder {
  car: Car;

  stepOne(): void {
    this.car = new Car();
  }
  stepTwo(): void {
    this.car.addParts();
  }
  get(): Car {
    return this.car;
  }
}

class TruckBuilder implements IBuilder {
  truck: Truck;

  stepOne(): void {
    this.truck = new Truck();
  }
  stepTwo(): void {
    this.truck.addParts();
  }
  get(): Truck {
    return this.truck;
  }
}

class Application {
  main(): void {
    const shop = new Shop();
    const carBuilder = new CarBuilder();
    const truckBuilder = new TruckBuilder();
    const car = shop.construct(carBuilder);
    const truck = shop.construct(truckBuilder);

    car.beep();
    truck.beep();
  }
}
