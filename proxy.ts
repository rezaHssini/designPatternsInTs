class GeoCoder {
  getLatLng(address: string): string {
    if (address === "Amsterdam") {
      return "52.3700° N, 4.8900° E";
    } else if (address === "London") {
      return "51.5171° N, 0.1062° W";
    } else if (address === "Paris") {
      return "48.8742° N, 2.3470° E";
    } else if (address === "Berlin") {
      return "52.5233° N, 13.4127° E";
    } else {
      return "";
    }
  }
}

class GeoProxy {
  private geoCoder: GeoCoder = new GeoCoder();
  private geoCatch: { [key: string]: string };

  getLatLng(address: string): string {
    if (!(address in this.geoCatch)) {
      this.geoCatch[address] = this.geoCoder.getLatLng(address);
    }

    return this.geoCatch[address];
  }

  getCount(): number {
    return Object.keys(this.geoCatch).length;
  }
}

class Application {
  main(): void {
    const geo = new GeoProxy();

    // geolocation requests

    geo.getLatLng("Paris");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("London");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("Amsterdam");
    geo.getLatLng("London");
    geo.getLatLng("London");

    console.log("\nCache size: " + geo.getCount());
  }
}
