let flock = [];
let started = false;
export const ScreenWidth = 800;
export const ScreenHeight = 600;

let alignSlider, cohestionSlider, seperationSlider;
function setup(){

  let startX = 50;
  let paddingXSlider = 50;
  let paddingXText = 35;
  let yLabel = ScreenHeight+ 150;
  let yTextLabel = yLabel +10;

  createCanvas(ScreenWidth, ScreenHeight).style('border-radius', '20px');
  background(255);

  //sliders
  alignSlider = createSlider(0.5, 2.0, 1, 0.1);
  cohestionSlider = createSlider(0.5, 2.0, 1, 0.1);
  seperationSlider = createSlider(0.5, 2.0, 1, 0.1);

  //position
  let sliderWidth = alignSlider.elt.offsetWidth;
  alignSlider.position(startX, yLabel);
  cohestionSlider.position(startX + sliderWidth + paddingXSlider,  yLabel);
  seperationSlider.position(startX + 2* sliderWidth +2* paddingXSlider, yLabel);

  //labels
  createP('Flow').position(startX, yTextLabel).style('color', 'white');
  createP('Community').position(startX + sliderWidth + 1.5*paddingXText, yTextLabel).style('color', 'white');
  createP('Conflict').position(startX + 2* sliderWidth +3* paddingXText, yTextLabel).style('color', 'white');

  //buttons
  let startButton = createButton('Start');
  let resetButton = createButton('Reset');

  //position
  startButton.position(ScreenWidth -200, yLabel);
  resetButton.position(ScreenWidth-50, yLabel);

  //interaction
  startButton.mousePressed(start);
  resetButton.mousePressed(reset);
}

//maybe have a start button?
function reset(){
  background(255);
  flock = [];
  started = false;
}

function start(){
  if(!started){
    for(let i =0; i <50; i++){
      flock.push(new Boid());
      flock.push(new Boid()); 
    }

    started = true;
  }
}
//this is flocking
function draw(){
 // background(255);
  for(let boid of flock){
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }

  
}