function setup() {
    createCanvas(windowWidth, windowHeight);
    background(127);
}
shapeX = 50;
shapeY = 50;
speedY = 5;
speedX = 5;

console.log("This is my first console log!!");

function draw() {
    fill(random(255), random(255), random(255));
    shapeX = shapeX + speedX;
    shapeY = shapeY + speedY;
    circle(shapeX, shapeY, 50);
    if (shapeY > windowHeight - 50 || shapeY < 25) {
        speedY = -speedY;
    }
    if (shapeX > windowWidth - 50 || shapeX < 25) {
        speedX = -speedX;
    }
}