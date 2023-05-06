/* 
Final assignment for Intro to Programming I
Type that stretches and warps with the mouse !! Use different keys to try out different letters & randomize color with the mouse pressed function ! :)
*/


//setting variables
let letter, bg;
let myFont;
let keyvalue = 'A';
let r,g,b = 0;
let r1,g1,b1 = 255;

//load font
function preload() {
  myFont = loadFont("AUTHENTICSans-Condensed-60.otf");
}

//creating canvas and setting buffers for letter and background(bg)
function setup() {
  print("Intro to Programming I, Final Assignment, Shivangi Chopra")
  createCanvas(windowWidth, windowHeight, WEBGL);
  letter = createGraphics(500, 500);
  bg = createGraphics(500, 500, WEBGL);
  textFont(myFont);
  
}

//enter key function
function keyTyped() {
  keyvalue = key;
  drawLetter(keyvalue);
}

//draw function for letter / using letter as texture for bg
function drawLetter(keyvalue) {
  push();
  bg.push();
  
  //setting bg position
  bg.translate(-width/2,-height/2);
  bg.texture(letter);
  bg.textureMode(NORMAL);
  
  //setting position variables and position of letter on canvas, mapping mouse position with set box in middle
  let x1 = width/2-letter.width/2;
  let x2 = width/2+letter.width/2;
  let y1 = height/2-letter.height/2;
  let y2 = height/2+letter.height/2;
  let mapX = map(mouseX, 0, width, x1, x2);
  let mapY = map(mouseY, 0, height, y1, y2);
  
  //vertices for top left box
  bg.beginShape();
  //3D arguments set as hard values
  bg.vertex(x1-5, y1-5, 0, 0);
  bg.vertex(mapX+5, y1-5, 0.5, 0);
  bg.vertex(mapX+5, mapY+5, 0.5, 0.5);
  bg.vertex(x1-5, mapY+5, 0, 0.5);
  bg.endShape();
  
  //vertices for top right box
  bg.beginShape();
  //3D arguments set as hard values
  bg.vertex(mapX-5, y1-5, 0.5, 0);
  bg.vertex(x2+5, y1-5, 1, 0);
  bg.vertex(x2+5, mapY+5, 1, 0.5);
  bg.vertex(mapX-5, mapY+5, 0.5, 0.5);
  bg.endShape();
  
  //vertices for bottom left box
  bg.beginShape();
  //3D arguments set as hard values
  bg.vertex(x1-5, mapY-5, 0, 0.5);
  bg.vertex(mapX+5, mapY-5, 0.5, 0.5);
  bg.vertex(mapX+5, y2+5, 0.5, 1);
  bg.vertex(x1-5, y2+5, 0, 1);
  bg.endShape();
  
  //vertices for bottom right box
  bg.beginShape();
  //3D arguments set as hard values
  bg.vertex(mapX-5, mapY-5, 0.5, 0.5);
  bg.vertex(x2+5, mapY-5, 1, 0.5);
  bg.vertex(x2+5, y2+5, 1, 1);
  bg.vertex(mapX-5, y2+5, 0.5, 1);
  bg.endShape();
  
  bg.pop();
  
  drawCircles();
  pop();
}

//setting up function for dots
function drawCircles() {
  push();
  strokeWeight(1);
  beginShape();
    for (let i=0; i<bg.width; i+=15) {
      //console.log(i);
      for (let j=0; j<bg.height; j+=15) {
        if(brightness(bg.get(i,j)) <10) {
        stroke(r1,g1,b1);
        fill(r1,g1,b1);
        push();
        ellipse(i, -j, 30);
        pop();
        //console.log(bg.width);
       }
     }
   }
  endShape();
  pop();
}

//randomize color for letter and background
function pickRandomColor() {
  r = random(255);
  g = random(255);
  b = random(255);
  
  r1 = random(255);
  g1 = random(255);
  b1 = random(255);
}

function draw() {
  letter.background(255);
  push();
  translate(-bg.width/2, bg.height/2);
  bg.background(0);
  letter.textSize(650);
  letter.textFont(myFont);
  letter.text(keyvalue, 0, letter.height);
  
  background(r,g,b);
  drawLetter(keyvalue);
  pop();
  
  fill(0)
  textSize(20);
  
}

//randomize color when mouse pressed
function mousePressed() {
 pickRandomColor();
}