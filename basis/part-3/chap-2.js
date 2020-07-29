// classes with methods

class Car {
    constructor(){
        this.engineRunning = false;
    }

    startEngine(){
        this.engineRunning = true;
    }
}

let renauddouze = new Car;

console.log(renauddouze.engineRunning);
renauddouze.startEngine();
console.log(renauddouze.engineRunning);


//static method

// statics methods are used to work on classes not instancied without constructor.

class BePolite {
    static sayHello() {
        console.log('Hello !');
    }
    static sayHelloTo(name) {
        console.log("Hello " + name + "!");
    }
}

BePolite.sayHello();
BePolite.sayHelloTo("My little friend"); //it's a al pacino reference, don't call the fbi.
