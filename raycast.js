//create a class of 2Dmap
const MAP_NUM_ROWS = 11;
const MAP_NUM_COLS = 15;
const TAILLE_SIZE = 32;
const WINDOW_WIDTH = MAP_NUM_COLS * TAILLE_SIZE;
const WINDOW_HEIGHT = MAP_NUM_ROWS * TAILLE_SIZE;
class Map {
    constructor() {
        this.grid = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];


    }
    render() {
        for (var i = 0; i < MAP_NUM_ROWS; i++) {
            for (var j = 0; j < MAP_NUM_COLS; j++) {
                var tailleX = j * TAILLE_SIZE;
                var tailleY = i * TAILLE_SIZE;
                var tailleCOLOR = this.grid[i][j] == 1 ? "blue" : "#fff";
                stroke("#222");
                fill(tailleCOLOR);
                /*if (this.grid[i][j] == 1)
                    fill("blue");
                else if (this.grid[i][j] == 0) {
                    fill("white");
                }*/
                rect(tailleX, tailleY, TAILLE_SIZE, TAILLE_SIZE);
            }
        }
    }
}

class Player {
    constructor() {
        this.x = WINDOW_WIDTH / 2;
        this.y = WINDOW_HEIGHT / 2;
        this.radius = 3;
        this.turnDirection = 0;
        this.walkDirection = 0;
        this.rotationAngle = Math.PI / 2;
        this.moveSpeed = 2.0;
        this.rotationSpeed = 2 * (Math.PI / 180);

    }
    update() {}
    render() {
        fill("black");
        circle(this.x, this.y, 20);
        //rect(this.x, this.y, 30, 30);
    }

}

var grid = new Map();
var player = new Player();


function setup() {
    // initialize all objects
    //Creates a canvas element in the document and sets its dimensions in pixels.
    createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT);
}

function update() {
    //to do: update all game objects before we render the next frame
    player.update();

}

function draw() {

    player.render();
    update();
    grid.render();




    //to do : render all objects frame by frame
}