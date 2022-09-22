function setup() {
    createCanvas(windowWidth, windowHeight);
    background(127);
}
shapeX = 50;
shapeY = 50;
speedY = 5;
speedX = 5;
shapeValue = 0;
let mouseVal = 0;
let color = [255, 0, 0];

console.log("This is my first console log!!");

function draw() {    
    shapeX = shapeX + speedX;
    shapeY = shapeY + speedY;
    if (mouseIsPressed === true) {
        for (let lowerColor = 0; lowerColor < 3; lowerColor++) {
            let upperColor = 0;
            if (lowerColor < 2) {
                upperColor = lowerColor + 1;
            } else {
                upperColor = 0;
            }
            for (let i = 0; i < 255; i++) {
                color[lowerColor]--;
                color[upperColor]++;
            }
            console.log(`Lower val is: ${lowerColor}`);
            console.log(`Higher val is: ${upperColor}`);
            console.log(`Red val is: ${color[0]}`);
            console.log(`Green val is: ${color[1]}`);
            console.log(`Blue val is: ${color[2]}`);
        }
        fill(color[0], color[1], color[2]);
    } else {
        fill(random(255),random(255),random(255));
        console.log("Mouse is not pressed");
    }

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