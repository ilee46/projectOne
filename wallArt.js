function setup() {
    createCanvas(windowWidth, windowHeight);
}

console.log("This is my first console log!!");

function draw() {
    background(127);
    for (let i = 0; i < 6; i++) {
        if (i % 3 == 0) {
            fill(255,0,0);
        } else if (i % 3 == 1) {
            fill(0,255,0);
        } else if (i % 3 == 2) {
            fill(0,0,255);
        }
        rect((windowWidth/12)*i,0,windowWidth/12,windowHeight);
    }
    for (let j = 0; j < 6; j++) {
        if (j % 3 == 0) {
            fill(255,0,0);
        } else if (j % 3 == 1) {
            fill(0,255,0);
        } else if (j % 3 == 2) {
            fill(0,0,255);
        }
        rect((windowWidth/2),(windowHeight/6)*j,windowWidth/2,windowHeight/6);
    }
    for (let n = 0; n < 39; n++) {
        if (n % 2 == 0) {
            fill(0);
        } else {
            fill(255);
        }
        triangle((0)+25*n, 0, windowWidth/2, (windowHeight)-25*n, (windowWidth)-25*n, 0);
    }
}