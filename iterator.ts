class Iterator<T> {
  items: T[];
  index: number = 0;

  constructor(items: T[]) {
    this.items = items;
  }

  first(): T {
    this.reset();
    return this.next();
  }
  next(): T {
    return this.items[this.index++];
  }
  hasNext(): boolean {
    return this.index <= this.items.length;
  }
  reset(): void {
    this.index = 0;
  }
  each(callback: Function) {
    for (var item = this.first(); this.hasNext(); item = this.next()) {
      callback(item);
    }
  }
}

class Application {
  main(): void {
    var items: string[] = ["one", "circle", "Applepie"];
    var iter = new Iterator<string>(items);

    // using for loop

    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
      console.log(item);
    }

    // using Iterator's each method

    iter.each(function (item: string) {
      console.log(item);
    });
  }
}
