interface IColor {
  light: TrafficLight;
  go: () => void;
}

class TrafficLight {
  count: number;
  currentState: IColor = new Red(this);

  change(state: IColor): void {
    if (this.count++ >= 10) return;
    this.currentState = state;
    this.currentState.go();
  }

  start(): void {
    this.currentState.go();
  }
}

class Yellow implements IColor {
  light: TrafficLight;

  constructor(light: TrafficLight) {
    this.light = light;
  }

  go(): void {
    console.log("Yellow --> for 10 seconds");
    this.light.change(new Red(this.light));
  }
}

class Green implements IColor {
  light: TrafficLight;

  constructor(light: TrafficLight) {
    this.light = light;
  }

  go(): void {
    console.log("Green --> for 1 minute");
    this.light.change(new Yellow(this.light));
  }
}

class Red implements IColor {
  light: TrafficLight;

  constructor(light: TrafficLight) {
    this.light = light;
  }

  go(): void {
    console.log("Red --> for 1 minute");
    this.light.change(new Green(this.light));
  }
}

class Application {
  main(): void {
    const light = new TrafficLight();
    light.start();
  }
}
