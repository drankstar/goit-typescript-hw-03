class Key {
    private signature: string;
  
    constructor() {
      
      this.signature = Math.random().toString(36).substring(7);
    }
  
    getSignature(): string {
      return this.signature;
    }
  }
  
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    getKey(): Key {
      return this.key;
    }
  }
  
  abstract class House {
    protected door: boolean = false;
    protected key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    abstract openDoor(key: Key): void;
  
    comeIn(person: Person): void {
      if (this.door) {
        console.log(`Welcome home, ${person.getKey().getSignature()}!`);
      } else {
        console.log('The door is closed.');
      }
    }
  }
  
  class MyHouse extends House {
    openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log('The door is now open.');
      } else {
        console.log('Invalid key. The door remains closed.');
      }
    }
  }
  
  
  const key = new Key();
  const house = new MyHouse(key);
  const person = new Person(key);
  
  house.openDoor(person.getKey());
  house.comeIn(person);