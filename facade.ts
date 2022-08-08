class Bank {
  verify(_name: string, _amount: number): boolean {
    // complex logic ...
    return true;
  }
}

class Credit {
  get(_name: string): boolean {
    // complex logic ...
    return true;
  }
}

class Background {
  check(_name: string): boolean {
    // complex logic ...
    return true;
  }
}

enum ApplyResult {
  Denied = "denied",
  Approved = "approved",
}

class Mortgage {
  name: string;

  constructor(name) {
    this.name = name;
  }

  applyFor(amount: number): string {
    // access multiple subsystems...
    let result = ApplyResult.Approved;
    if (!new Bank().verify(this.name, amount)) {
      result = ApplyResult.Denied;
    } else if (!new Credit().get(this.name)) {
      result = ApplyResult.Denied;
    } else if (!new Background().check(this.name)) {
      result = ApplyResult.Denied;
    }
    return (
      this.name + " has been " + result + " for a " + amount + "$ mortgage"
    );
  }
}

class Application {
  main(): void {
    const mortgage = new Mortgage("John Doe");
    const _result = mortgage.applyFor(100000);
  }
}
