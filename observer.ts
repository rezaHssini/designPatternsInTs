class Click {
  handlers: Function[] = [];

  subscribe(handler: Function): void {
    this.handlers.push(handler);
  }

  unsubscribe(handler: Function): void {
    this.handlers = this.handlers.filter((e: Function) => e !== handler);
  }

  fire(message: string, scope?: any): void {
    if (!scope) {
      scope = this;
    }

    this.handlers.forEach((e: Function) => e.call(scope, message));
  }
}

class Application {
  main(): void {
    const callback = (message: string) => {
      console.log(message);
    };

    const click = new Click();

    click.subscribe(callback);
    click.fire("event 1");
    click.unsubscribe(callback);
    click.fire("event 2");
    click.subscribe(callback);
    click.fire("event 3");
  }
}
