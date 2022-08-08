class Person {
  name: string;
  street: string;
  city: string;
  state: string;

  constructor(name: string, street: string, city: string, state: string) {
    this.name = name;
    this.street = street;
    this.city = city;
    this.state = state;
  }

  hydrate(): string {
    const memento = JSON.stringify(this);
    return memento;
  }

  dehydrate(memento: string): void {
    const m = JSON.parse(memento);
    this.name = m.name;
    this.street = m.street;
    this.city = m.city;
    this.state = m.state;
  }
}

class CareTaker {
  mementos: { [key: string]: string } = {};

  add(key: number, memento: string) {
    this.mementos[key] = memento;
  }

  get(key: number): string {
    return this.mementos[key];
  }
}

class Application {
  main(): void {
    var mike = new Person("John Doe", "11 main", "Shiraz", "Fars");
    var john = new Person("Jane Doe", "12th street", "Shiraz", "Fars");

    var caretaker = new CareTaker();

    caretaker.add(1, mike.hydrate());
    caretaker.add(2, john.hydrate());

    // mess up their names

    mike.name = "King Kong";
    john.name = "Superman";

    // restore original state

    mike.dehydrate(caretaker.get(1));
    john.dehydrate(caretaker.get(2));
  }
}
