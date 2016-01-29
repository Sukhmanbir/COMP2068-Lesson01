class Player {
    strength: number;
    constructor() {
        this.strength = 10;
    }

    jump() {
        console.debug("you jumped!");
    }
}

function main() {
    var tom = new Player();
    tom.jump();
}