class Context {
  input: string;
  output: number = 0;

  constructor(input: string) {
    this.input = input;
  }

  startsWith(str: string) {
    return this.input.startsWith(str);
  }
}

class Expression {
  name: string;
  one: string;
  four: string;
  five: string;
  nine: string;
  multiplier: number;

  constructor(
    name: string,
    one: string,
    four: string,
    five: string,
    nine: string,
    multiplier: number
  ) {
    this.name = name;
    this.one = one;
    this.four = four;
    this.five = five;
    this.nine = nine;
    this.multiplier = multiplier;
  }

  interpret(context: Context) {
    if (context.input.trim().length == 0) {
      return;
    } else if (context.input.startsWith(this.nine)) {
      context.output += 9 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.input.startsWith(this.four)) {
      context.output += 4 * this.multiplier;
      context.input = context.input.substr(2);
    } else if (context.input.startsWith(this.five)) {
      context.output += 5 * this.multiplier;
      context.input = context.input.substr(1);
    }

    while (context.input.startsWith(this.one)) {
      context.output += 1 * this.multiplier;
      context.input = context.input.substr(1);
    }
  }
}

class Application {
  main(): void {
    const roman = "MCMXXVIII";
    const context = new Context(roman);
    const tree: Expression[] = [];

    tree.push(new Expression("thousand", "M", " ", " ", " ", 1000));
    tree.push(new Expression("hundred", "C", "CD", "D", "CM", 100));
    tree.push(new Expression("ten", "X", "XL", "L", "XC", 10));
    tree.push(new Expression("one", "I", "IV", "V", "IX", 1));

    for (var i = 0, len = tree.length; i < len; i++) {
      tree[i].interpret(context);
    }

    console.log(roman + " = " + context.output);
  }
}
