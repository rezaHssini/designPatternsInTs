class Participant {
  name: string;
  chatRoom: Chatroom;

  constructor(name: string) {
    this.name = name;
  }

  receive(message: string, from: Participant): void {
    console.log(from.name + " to " + this.name + ": " + message);
  }

  send(message: string, to?: Participant): void {
    this.chatRoom.send(message, this, to);
  }
}

class Chatroom {
  participants: { [key: string]: Participant } = {};

  register(participant: Participant): void {
    this.participants[participant.name] = participant;
    participant.chatRoom = this;
  }

  send(message: string, from: Participant, to?: Participant) {
    if (to) {
      // single message
      to.receive(message, from);
    } else {
      // broadcast message
      for (const key in this.participants) {
        if (this.participants[key] !== from) {
          this.participants[key].receive(message, from);
        }
      }
    }
  }
}

class Application {
  main(): void {
    var yoko = new Participant("Yoko");
    var john = new Participant("John");
    var paul = new Participant("Paul");
    var ringo = new Participant("Ringo");

    var chatroom = new Chatroom();
    
    chatroom.register(yoko);
    chatroom.register(john);
    chatroom.register(paul);
    chatroom.register(ringo);

    yoko.send("All you need is love.");
    yoko.send("I love you John.");
    john.send("Hey, no need to broadcast", yoko);
    paul.send("Ha, I heard that!");
    ringo.send("Paul, what do you think?", paul);
  }
}
