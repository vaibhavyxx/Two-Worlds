import {boids, Flock} from './flock.js';

let margin = 50;

window.setup = function(){
  const ScreenWidth = windowWidth - margin;
  const ScreenHeight = windowHeight - margin;
  let cnv = createCanvas(ScreenWidth,ScreenHeight).style('border-radius', '20px');
  cnv.parent('sim');
  background(255);

}

  /*//console.log('hello');
 
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

  
