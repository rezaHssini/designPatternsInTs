interface IOutput {
  click: () => void;
  move: () => void;
  drag: () => void;
  zoom: () => void;
}

class Gestures {
  private output: IOutput;
  constructor(output: IOutput) {
    this.output = output;
  }
  tap() {
    this.output.click();
  }
  swipe() {
    this.output.move();
  }
  pan() {
    this.output.drag();
  }
  pinch() {
    this.output.zoom();
  }
}

class Mouse {
  private output: IOutput;
  constructor(output: IOutput) {
    this.output = output;
  }
  click() {
    this.output.click();
  }
  move() {
    this.output.move();
  }
  down() {
    this.output.drag();
  }
  wheel() {
    this.output.zoom();
  }
}

class MyScreen implements IOutput {
  click(): void {
    console.log("Screen select");
  }
  move(): void {
    console.log("Screen move");
  }
  drag(): void {
    console.log("Screen drag");
  }
  zoom(): void {
    console.log("Screen zoom in");
  }
}

class MyAudio implements IOutput {
  click(): void {
    console.log("Sound oink");
  }
  move(): void {
    console.log("Sound waves");
  }
  drag(): void {
    console.log("Sound screetch");
  }
  zoom(): void {
    console.log("Sound volume up");
  }
}

class Application {
  main(): void {
    const screen = new MyScreen();
    const audio = new MyAudio();

    const hand = new Gestures(screen);
    const mouse = new Mouse(audio);

    hand.pan();
    hand.pinch();
    hand.swipe();
    hand.tap();

    mouse.click();
    mouse.down();
    mouse.move();
    mouse.wheel();
  }
}
