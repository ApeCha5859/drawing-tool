function setup() {
createCanvas(500, 500);
background(184, 155, 201);
}


function draw() {

fill(46, mouseY, mouseX);
square(2, mouseX, mouseY);

noStroke();
fill(mouseX, mouseY, 65);
circle(mouseX, mouseY, 200);

fill(46, 36, 100);
circle(mouseY, mouseX, 149);

stroke('rgba(0, 255, 0, 0.25)');
fill(239, 154, 179);
triangle(mouseX, mouseY, 20, 30, 20, 60);
}
