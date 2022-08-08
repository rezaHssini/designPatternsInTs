function add(x, y) {
  return x + y;
}
function sub(x, y) {
  return x - y;
}
function mul(x, y) {
  return x * y;
}
function div(x, y) {
  return x / y;
}

class Command {
  execute: Function;
  undo: Function;
  value: number;
  constructor(execute: Function, undo: Function, value: number) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

class Add extends Command {
  constructor(value: number) {
    super(add, sub, value);
  }
}

class Sub extends Command {
  constructor(value: number) {
    super(add, sub, value);
  }
}

class Mul extends Command {
  constructor(value: number) {
    super(add, sub, value);
  }
}

class Div extends Command {
  constructor(value: number) {
    super(add, sub, value);
  }
}

class Calculator {
  current: number = 0;
  commands: Command[] = [];

  action(command?: Command) {
    if (!command) {
      return;
    }
    var name = command.execute.toString().substr(9, 3);
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  execute(command: Command): void {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
    console.log(this.action(command) + ": " + command.value);
  }

  undo(): void {
    const command = this.commands.pop();
    this.current = command?.undo(this.current, command.value);
    console.log("Undo " + this.action(command) + ": " + command?.value);
  }

  getCurrentValue(): number {
    return this.current;
  }
}

class Application {
  main(): void {
    {
      var calculator = new Calculator();

      // issue commands

      calculator.execute(new Add(100));
      calculator.execute(new Sub(24));
      calculator.execute(new Mul(6));
      calculator.execute(new Div(2));

      // reverse last two commands

      calculator.undo();
      calculator.undo();

      console.log("\nValue: " + calculator.getCurrentValue());
    }
  }
}
