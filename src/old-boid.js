class Boid {
    constructor(){
      this.position = createVector(random(width), random(height));
      this.velocity = p5.Vector.random2D();
      this.velocity.setMag(random(0, 3));  //gives variance
      this.acceleration = createVector();
      this.maxForce = 1;
      this.maxSpeed = 4;
      this.radius = random(75);
      this.color = color(random(255),0,random(255));
    }
    
    //it does not leave the screen
    edges(){
        //sides
        if(this.position.x > width){
            this.position.x =0 - 1* this.radius;
        }else if(this.position.x <-1*this.radius){
            this.position.x = 1*this.radius+ width;
        }

        //top and bottom
        if(this.position.y > height){
            this.position.y =0 - 1* this.radius;
        }else if(this.position.y <- 1* this.radius){
            this.position.y = height + 1* this.radius;
        }
    }

    //steer to avoid crowding from local flockmate
    separation(boids){
        let perceptionRadius = 80; //have a high value so that they are united
        let steering = createVector();
        let total =0;

        for(let other of boids){
          let d = dist(this.position.x, this.position.y,
                      other.position.x, other.position.y);
  
          //will steer towards its neigbours 
          if(d < perceptionRadius && other != this){
            let diff = p5.Vector.sub(this.position, other.position);
            diff.div(d * d);  //weight by distance
            steering.add(diff); //add the difference in position to steering
            total++;
          }
        }
        //Checks if there were any neighboring boids
        if(total > 0){
          steering.div(total);  //average distance away from neighbours
          steering.setMag(this.maxSpeed); 
          steering.sub(this.velocity);
          steering.limit(this.maxForce); //limits it to maximum force
        }
        return steering;
    }

    //align boids to its neighbour by calculating total veloctiy and 
    //getting its average
    //for steering force, desired - vel
    //imp to return these forces
    align(boids){
      let perceptionRadius = 20;
      let steering = createVector();
      let total =0;
      
      for(let other of boids){
        let d = dist(this.position.x, this.position.y,
                    other.position.x, other.position.y);

        //will steer towards its neigbours 
        if(d < perceptionRadius && other != this){
            steering.add(other.velocity);
            total++;
        }
      }
      if(total > 0){
        steering.div(total);  //gives the avg
        steering.setMag(this.maxSpeed); 
        steering.sub(this.velocity);
        steering.limit(this.maxForce)
      }
      return steering;
    }

    //cohesion
    cohesion(boids){
        let perceptionRadius = 100; //have a high value so that they are united
        let steering = createVector();
        let total =0;
        let averagePosition = createVector();
        
        for(let other of boids){
          let d = dist(this.position.x, this.position.y,
                      other.position.x, other.position.y);
  
          //will steer towards its neigbours 
          if(d < perceptionRadius && other != this){
              averagePosition.add(other.position);
              total++;
          }
        }
        //(steering force - (position+ velocity)/total) to get the direction
        //while limit gives the magnitude of the steering force
        if(total > 0){
          averagePosition.div(total);  //gives the avg
          let desired = p5.Vector.sub(averagePosition, this.position);
          desired.setMag(this.maxSpeed); 
          steering = p5.Vector.sub(desired, this.velocity);
          steering.limit(this.maxForce);
        }
        return steering;
    }

    flock(boids){
        this.acceleration.mult(0);  // Reset acceleration to 0 after each update
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        separation.mult(seperationSlider.value());
        cohesion.mult(cohestionSlider.value());
        alignment.mult(alignSlider.value());

        //add these up- make sure it is not accumulated over tiem
        this.acceleration.add(separation);
        this.acceleration.add(alignment);   //uses acceleration = force/mass
        this.acceleration.add(cohesion);
    }
    //shows movement
    update(){
      this.position.add(this.velocity);
      this.velocity.add(this.acceleration);
      this.velocity.limit(this.maxSpeed);
      this.acceleration.mult(0);  // Reset acceleration to 0 after each update
    }
    
    show(){
      strokeWeight(this.radius);
      stroke(this.color);
      point(this.position.x, this.position.y);
    }
  }