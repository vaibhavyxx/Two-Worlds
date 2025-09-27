import { ScreenHeight, ScreenWidth } from "../sketch";

class Boid {
    constructor(ScreenWidth, ScreenHeight, maxForce, maxSpeed){
      this.position = createVector(random(ScreenWidth), random(ScreenHeight));
      this.velocity = p5.Vector.random2D();
      this.velocity.setMag(random(0, maxSpeed));  
      this.acceleration = createVector();
      this.maxForce = maxForce;
      this.radius = random(75);
      this.color = color(random(255),0,random(255));
    }

    offScreen(){
      this.offScreenAxis('x', ScreenWidth);
      this.offScreenAxis('y', ScreenHeight);
    }
    show(){
      strokeWeight(this.radius);
      stroke(this.color);
      point(this.position.x, this.position.y);
    }

    //offscreen function
    //limit - ScreenWidth, ScreenHeight
    offScreenAxis(axis, limit){
      if(this.position[axis] > limit){
        this.position[axis] -= this.radius;
      } 
      else if(this.position[axis] < -this.radius){
        this.position[axis] = limit + this.radius;
      }
    }
  }