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
let clickTimes = 0;
let color = [255, 0, 0];

console.log("This is my first console log!!");

function draw() {    
    shapeX = shapeX + speedX;
    shapeY = shapeY + speedY;
    if (mouseIsPressed === true) {
        clickTimes++;
        let settingNum = clickTimes % 8;
        if (settingNum == 0) {
            color[0] = 255;
            color[1] = 0;
            color[2] = 0;
        }
        if (settingNum == 1) {
            color[0] = 255;
            color[1] = 255;
            color[2] = 0;
        } 
        if (settingNum == 2) {
            color[0] = 0;
            color[1] = 255;
            color[2] = 0;
        }
        if (settingNum == 3) {
            color[0] = 0;
            color[1] = 255;
            color[2] = 255;
        }
        if (settingNum == 4) {
            color[0] = 0;
            color[1] = 0;
            color[2] = 255;
        } 
        if (settingNum == 5) {
            color[0] = 255;
            color[1] = 0;
            color[2] = 255;
        } 
        if (settingNum == 6) {
            color[0] = 255;
            color[1] = 255;
            color[2] = 255;
        }
        if (settingNum == 7) {
            color[0] = 0;
            color[1] = 0;
            color[2] = 0;
        }
        console.log(`Click value: ${clickTimes}`);
        console.log(`Setting value: ${settingNum}`);
        console.log(`Red val is: ${color[0]}`);
        console.log(`Green val is: ${color[1]}`);
        console.log(`Blue val is: ${color[2]}`);
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