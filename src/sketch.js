import {boids, Flock} from './flock.js';

const startButton = document.querySelector('#start');
const resetButton = document.querySelector('#reset');
const cohesion = document.querySelector('#cohesion-id');
const alignment = document.querySelector('#alignment-id');
const separation = document.querySelector('#separation-id');

let margin = 50;
let backgroundColor = 255;

window.setup = function(){
  const ScreenWidth = windowWidth - margin;
  const ScreenHeight = windowHeight - margin;
  let cnv = createCanvas(ScreenWidth,ScreenHeight).style('border-radius', '20px');
  cnv.parent('sim');
  background(backgroundColor);

}

startButton.onclick = function(){
  console.log("Should start");
}
resetButton.onclick = function(){
  background(100);  //testing purposes
}

cohesion.oninput = function() {
  console.log('cohesion value: '+ this.value)  //testing purposes
}

alignment.oninput = function() {
  console.log('cohesion value: '+ this.value)  //testing purposes
}

separation.oninput = function() {
  console.log('cohesion value: '+ this.value)  //testing purposes
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

  
