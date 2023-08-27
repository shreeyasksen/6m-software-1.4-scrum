/*
    Task
    - Create a "BaseSignal" class to be inherited by "TvSignal", "AirconSignal" and "DoorSignal" class.
    - In the "BaseSignal" class, throw an error within the constructor to block direct instantiation (see doc-permissions.js for example).
    - Implement `send` method to print `Sending ${type} signal` in the BaseSignal class.
    - In the respective child classes, call `super()` with it's type.
*/

// Task: Add code here answer:
class BaseSignal{
    constructor(type) {
        if (this.constructor===BaseSignal) {
            throw new Error ("BaseSignal class cannot be instantiated directly.");
        }
        this.type = type;
    }
    send() {
        console.log("Sending this ${this.type} signal");
    }
}
class TvSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("TV");
    }
}

class AirconSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("Air Conditioner");
    }
}

class DoorSignal extends BaseSignal {
    constructor(){
        // Add code here
        super("Door");
    }
}

const tv = new TvSignal();
tv.send(); // prints "Sending tv signal"

const door = new DoorSignal();
door.send(); // prints "Sending door signal"

const aircon = new AirconSignal();
aircon.send(); // prints "Sending aircon signal"
