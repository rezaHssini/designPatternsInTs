class Person {
  name: string;
  age: number;
  gender: string;

  shakeHand(): void {
    console.log(`${this.name} is shaking hand`);
  }
}

class PersonPrototype {
  prototye: Person;
  constructor(proto: Person) {
    this.prototye = proto;
  }

  clone(): Person {
    const ins = new Person();
    ins.age = this.prototye.age;
    ins.gender = this.prototye.gender;
    ins.name = this.prototye.name;
    return ins;
  }
}

class Applicaion {
  main(): void {
    const person = new Person();
    person.name = "John Doe";
    person.age = 40;
    person.gender = "male";

    const personProto = new PersonPrototype(person);
    const otherPersonIns = personProto.clone();

    otherPersonIns.shakeHand();
  }
}
