abstract class AbstractClass {
  methodOne(): void {}
  abstract methodTwo(): void;
  methodThree(): void {
    console.log("Step Three is a hook that prints this line by default.");
  }

  templateMethod(): void {
    this.methodOne();
    this.methodTwo();
    this.methodThree();
  }
}

class ConcreteClassA extends AbstractClass {
  methodTwo(): void {
    console.log("Class_A : Step Two (overridden)");
  }
}

class ConcreteClassB extends AbstractClass {
  methodOne(): void {
    console.log("Class_B : Step One (overridden)");
  }

  methodTwo(): void {
    console.log("Class_B : Step Two. (overridden)");
  }

  methodThree(): void {
    console.log("Class_B : Step Three. (overridden)");
  }
}

class Application {
  main(): void {
    const classA = new ConcreteClassA();
    classA.templateMethod();

    const classB = new ConcreteClassA();
    classB.templateMethod();
  }
}
