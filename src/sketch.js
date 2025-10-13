import {boids, Flock} from './flock.js';

let started = false;
let ScreenWidth = 800;
let ScreenHeight = 600;

let alignSlider, cohestionSlider, seperationSlider;
window.setup = function(){
  let cnv = createCanvas(ScreenWidth, ScreenHeight).style('border-radius', '20px');
  cnv.parent('sim');
  background(255);

}

  /*//console.log('hello');
  let startX = 50;
  let paddingXSlider = 50;
  let paddingXText = 35;
  let yLabel = ScreenHeight+ 150;
  let yTextLabel = yLabel +10;

  
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
/*
//maybe have a start button?
function reset(){
  background(255);
  flock = [];
  started = false;
}

function start(){
  /*if(!started){
    boids = new Flock(10, windowWidth, windowHeight);
    started = true;
    console.log("boids array is made");
  }
 
}
//this is flocking
window.draw =  function(){
 // background(255);
  /*for(let boid of flock){
    boid.edges();
    boid.flock(flock);
    boid.update();
    boid.show();
  }*/

  
