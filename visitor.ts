interface IVisitor {
  visit(part: Part): void;
}

interface IVisitable {
  accept(visitor: IVisitor): void;
}

class Part implements IVisitable {
  name: string;
  value: number;
  parts: Set<Part>;

  constructor(name: string, value: number, parent?: Part) {
    this.name = name;
    this.value = value;
    this.parts = new Set();
    if (parent) {
      parent.parts.add(this);
    }
  }

  accept(visitor: IVisitor) {
    this.parts.forEach((part: Part) => {
      part.accept(visitor);
    });
    visitor.visit(this);
  }
}

class PrintPartNamesVisitor implements IVisitor {
  visit(part: Part) {
    console.log(part.name);
  }
}

class CalculatePartTotalsVisitor implements IVisitor {
  totalValue = 0;

  visit(part: Part) {
    this.totalValue += part.value;
  }
}

class Application {
  main(): void {
    const partA = new Part("A", 101);
    const partB = new Part("B", 305, partA);
    const partC = new Part("C", 185, partA);
    const partD = new Part("D", -30, partB);

    partA.accept(new PrintPartNamesVisitor());

    const calcTotalVisits = new CalculatePartTotalsVisitor();
    partA.accept(calcTotalVisits);
    console.log(calcTotalVisits.totalValue);
  }
}
