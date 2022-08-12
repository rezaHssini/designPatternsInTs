interface IShippingCompany {
  calculate: (parcel: Parcel) => string;
}

class Parcel {
  from: string;
  to: string;
  weight: number;

  constructor(weight: number, from: string, to: string) {
    this.weight = weight;
    from = from;
    this.to = to;
  }
}

class Shipping {
  private company: IShippingCompany;

  setStrategy(company: IShippingCompany): void {
    this.company = company;
  }

  calculate(product: Parcel): string {
    return this.company.calculate(product);
  }
}

class Fedex implements IShippingCompany {
  calculate(parcel: Parcel): string {
    //do something ...

    return "50$";
  }
}

class Usps implements IShippingCompany {
  calculate(parcel: Parcel): string {
    //do something ...

    return "70$";
  }
}

class Ups implements IShippingCompany {
  calculate(parcel: Parcel): string {
    //do something ...

    return "35$";
  }
}

class Application {
  main(): void {
    const parcel = new Parcel(10, "Shiraz", "Dubai");

    const fedex = new Fedex();
    const ups = new Ups();
    const usps = new Usps();

    const shipping = new Shipping();
    shipping.setStrategy(fedex);
    console.log("Fedex cost: ", shipping.calculate(parcel));
    shipping.setStrategy(ups);
    console.log("UPS cost: ", shipping.calculate(parcel));
    shipping.setStrategy(usps);
    console.log("USPS cost: ", shipping.calculate(parcel));
  }
}
