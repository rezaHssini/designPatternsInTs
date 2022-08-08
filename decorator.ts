class User {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  say(): void {
    console.log(`User ${this.name}`);
  }
}

class DecoratedUser {
  user: User;
  name: string;
  city: string;
  street: string;

  constructor(user: User, city: string, street: string) {
    this.user = user;
    this.name = user.name; // ensures interface stays the same
    this.city = city;
    this.street = street;
  }

  say(): void {
    console.log(`Decorated User ${this.name} ${this.city} ${this.street}`);
  }
}

class Application {
  main(): void {
    const user = new User("John");
    user.say();

    var decorated = new DecoratedUser(user, "Broadway", "New York");
    decorated.say();
  }
}
