class Product {}

class Singleton {
  private static instance: Product;

  private static createInstance(): Product {
    return new Product();
  }

  static getInstance(): Product {
    if (!this.instance) {
      this.instance = this.createInstance();
    }
    return this.instance;
  }
}

class Application {
  main(): void {
    const instanceOne = Singleton.getInstance();
    const instanceTwo = Singleton.getInstance();
  }
}
