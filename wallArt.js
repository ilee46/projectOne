function setup() {
    createCanvas(windowWidth, windowHeight);
    background(127);
}
shapeX = 50;
shapeY = 50;
speedY = 5;
speedX = 5;
shapeValue = 0;

console.log("This is my first console log!!");

function draw() {
    if (mouseIsPressed === true) {
        fill(0,0,0);
      } else {
        fill(random(255), random(255), random(255));
      }
    shapeX = shapeX + speedX;
    shapeY = shapeY + speedY;
    if (shapeValue == 0) {
        circle(shapeX, shapeY, 50);
    } else {
        square(shapeX, shapeY, 50);
    }
    if (shapeY > windowHeight - 50 || shapeY < 25) {
        speedY = -speedY;
        shapeValue = 1 - shapeValue;
    }
    if (shapeX > windowWidth - 50 || shapeX < 25) {
        speedX = -speedX;
        shapeValue = 1 - shapeValue;
    }
}