var colour = 6;
var size = 3;
var sizes = [2.5, 5, 7.5, 10, 12.5, 15, 20, 30];
var maxSize = 8;
var clearButton, sizeUpButton, sizeDownButton;

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
}

function colorPalette() {
  changeColour(8);
  rect(550, 175, 50, 50);
  changeColour(0);
  rect(550, 0, 25, 25);
  changeColour(4);
  rect(575, 0, 25, 25);
  changeColour(1);
  rect(550, 25, 25, 25);
  changeColour(5);
  rect(575, 25, 25, 25);
  changeColour(2);
  rect(550, 50, 25, 25);
  changeColour(6);
  rect(575, 50, 25, 25);
  ellipse(575, 200, sizes[size], sizes[size]);
  changeColour(3);
  rect(550, 75, 25, 25);
  changeColour(7);
  rect(575, 75, 25, 25);
  stroke(0);
  line(550, 0, 550, 225);
  line(550, 225, width, 225);
  line(width-1, 225, width-1, 0);
}

function changeColour(colour) {
  noStroke();
  switch (colour) {
    case 0:
      fill(255, 0, 0);
      break;
    case 1:
      fill(0, 255, 0);
      break;
    case 2:
      fill(0, 0, 255);
      break;
    case 3:
      fill(0, 255, 255);
      break;
    case 4:
      fill(255, 0, 255);
      break;
    case 5:
      fill(255, 255, 0);
      break;
    case 6:
      fill(0);
      break;
    case 7:
      fill(128);
      break;
    case 8:
      fill(255);
      break;
    default:
      break;
  }
}

function getColour() {
  if (mouseX > 550 && mouseY < 100) {
    colour = Math.floor((mouseX - 550) / 25) * 4 + Math.floor(mouseY / 25);
  }
  return colour;
}

function clearBackground() {
  background(255);
}

function showResetButton() {
  clearButton = createButton('Clear');
  clearButton.position(550, 100);
  clearButton.size(50, 25);
  clearButton.mousePressed(clearBackground);
}

function sizeUp(){
  if (++size == 8) size--;
}

function sizeDown(){
  if (--size == -1) size++;
}

function showSizeButtons(){
  sizeUpButton = createButton('+');
  sizeUpButton.position(550, 125);
  sizeUpButton.size(25, 25);
  sizeUpButton.mousePressed(sizeUp);
  sizeDownButton = createButton('-');
  sizeDownButton.position(575, 125);
  sizeDownButton.size(25, 25);
  sizeDownButton.mousePressed(sizeDown);
}

function showEraserButton(){
  eraserButton = createButton('Eraser');
  eraserButton.position(550, 150);
  eraserButton.size(50, 25);
  eraserButton.mousePressed(setEraser);
}

function setEraser(){
  colour = 8;
}

function paintEllipses() {
  if (mouseIsPressed) {
    changeColour(getColour());
    ellipse(mouseX, mouseY, sizes[size], sizes[size]);
  }
}

function draw() {
  paintEllipses();
  showResetButton();
  showSizeButtons();
  showEraserButton();
  colorPalette();
}