class MyRequest {
  amount: number;
  constructor(amount: number) {
    this.amount = amount;
    console.log("Requested: $" + amount + "\n");
  }

  get(bill: number) {
    const count = Math.floor(this.amount / bill);
    this.amount -= count * bill;
    console.log("Dispense " + count + " $" + bill + " bills");
    return this;
  }
}

class Application {
  main(): void {
    const request = new MyRequest(378);
    request.get(100).get(50).get(20).get(10).get(5).get(1);
  }
}
