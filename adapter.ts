//old interface

class Shipping {
  request(address: string, zip: number): string {
    //do something ...
    return "10$";
  }
}

//new interface
class AdvancedShipping {
  login(credentials: Credentials): boolean {
    return true;
  }
  calculate(address: string, zip: number): number {
    return 10;
  }
}

class Credentials {
  username: string;
  password: string;

  constructor(user: string, pass: string) {
    this.username = user;
    this.password = pass;
  }
}

class ShippingAdapter {
  instance: AdvancedShipping;
  constructor( credentials: Credentials) {
    this.instance = new AdvancedShipping();
    this.instance.login(credentials);
  }

  request(address: string, zip: number): string {
    return this.instance.calculate(address,zip) + "$";
  }
}

class Application {
  main(): void {
    const shipping = new Shipping();
    const credentials = new Credentials("John", "1234");
    const adapter = new ShippingAdapter(credentials);

    //old interface
    const cost = shipping.request("first st", 123456);

    //new interface
    const newCost = adapter.request("first st", 123456);
  }
}
