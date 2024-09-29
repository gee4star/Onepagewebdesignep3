class Dog{
    constructor(spine, brain, isLooking, isMoving) {
        this.spine = spine;
        this.brain = brain;
        this.isLooking = isLooking;
        this.isMoving = isMoving;
    }
    sleep() {
        this.isLooking = false;
    }
    wake() {
        this.isLooking = true;
    }
    sit() {
        this.isMoving = false;
    }
    walk() {
        this.isMoving = true;
    }
    speak(sound) {
        console.log(sound);
    }
    toString(dog = `Dog`) {
        return `This ${dog} has ${this.spine} spine and ${this.brain} brain. It`
    }
}



class Human extends Anaimal {
    constructor(spine, lungs, isLooking, isMoving) {
        super(2, 2, isLooking, isMoving)
        this.name = Name;
        this.location = Location;
        this.occupation = Occpation;
    }
}
const Gee = new Human(`Gee`, `Student`, `AZ`)