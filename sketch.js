let img;
let canvas;
let d;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight/2);
    canvas.parent('canvasForHTML');
    img=loadImage('/images/mountains.png');
    d=10;
    
}

function draw() {
    background(75);
    imageMode(CORNERS);
    image(img, windowWidth, 0, img.width, img.height);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}