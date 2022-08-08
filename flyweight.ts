class FlyWeight {
  make: string;
  model: string;
  processor: string;

  constructor(make: string, model: string, processor: string) {
    this.make = make;
    this.model = model;
    this.processor = processor;
  }
}

class FlyWeightFactory {
  private static flyWeights: { [key: string]: FlyWeight } = {};

  static get(make: string, model: string, processor: string) {
    const key = this.getKey(model, make);
    if (key in this.flyWeights) {
      this.flyWeights[key] = new FlyWeight(make, model, processor);
    }
    return this.flyWeights[key];
  }

  static getCount(): number {
    return Object.keys(this.flyWeights).length;
  }

  private static getKey(model: string, make: string): string {
    return make + model;
  }
}

class ComputerCollection {
  computers: { [key: string]: Computer } = {};
  count: number = 0;

  add(
    make: string,
    model: string,
    processor: string,
    memory: string,
    tag: string
  ): void {
    this.computers[tag] = new Computer(make, model, processor, memory, tag);
    this.count++;
  }

  get(tag: string): Computer {
    return this.computers[tag];
  }

  getCount(): number {
    return this.count;
  }
}

class Computer {
  flyWeight: FlyWeight;
  model: string;
  processor: string;
  memory: string;
  tag: string;

  constructor(
    make: string,
    model: string,
    processor: string,
    memory: string,
    tag: string
  ) {
    this.flyWeight = FlyWeightFactory.get(make, model, processor);
    this.memory = memory;
    this.tag = tag;
  }

  getMake() {
    return this.flyWeight.make;
  }
  // ...
}

class Application {
  main(): void {
    const computers = new ComputerCollection();

    computers.add("Dell", "Studio XPS", "Intel", "5G", "Y755P");
    computers.add("Dell", "Studio XPS", "Intel", "6G", "X997T");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "U8U80");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "NT777");
    computers.add("Dell", "Studio XPS", "Intel", "2G", "0J88A");
    computers.add("HP", "Envy", "Intel", "4G", "CNU883701");
    computers.add("HP", "Envy", "Intel", "2G", "TXU003283");

    console.log("Computers: ", computers.getCount());
    console.log("Flyweights: ", FlyWeightFactory.getCount());
  }
}
