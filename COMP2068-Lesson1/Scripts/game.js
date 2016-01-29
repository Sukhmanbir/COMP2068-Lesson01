var Player = (function () {
    function Player() {
        this.strength = 10;
    }
    Player.prototype.jump = function () {
        console.debug("you jumped!");
    };
    return Player;
})();
function main() {
    var tom = new Player();
    tom.jump();
}
//# sourceMappingURL=game.js.map