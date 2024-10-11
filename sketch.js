let flock = [];
let started = false;

let alignSlider, cohestionSlider, seperationSlider;
function setup(){
  positionX = 20;
  createCanvas(800, 600);
  background(255);

  alignSlider = createSlider(0.5, 2.0, 1, 0.1);
  alignSlider.position(positionX, height +50);
  createP('Alignment').position(alignSlider.x, alignSlider.y -30);

  cohestionSlider = createSlider(0.5, 2.0, 1, 0.1);
  cohestionSlider.position(positionX +150, height +50);
  createP('Cohesion').position(cohestionSlider.x , cohestionSlider.y -30);

  seperationSlider = createSlider(0.5, 2.0, 1, 0.1);
  seperationSlider.position(positionX + 300, height+ 50);
  createP('Separation').position(seperationSlider.x, seperationSlider.y -30);

  let resetButton = createButton('Reset');
  resetButton.position(positionX + 450, height+ 50);
  resetButton.mousePressed(reset);
  
  let startButton = createButton('Start');
  startButton.position(positionX + 550, height+ 50);
  startButton.mousePressed(start);
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