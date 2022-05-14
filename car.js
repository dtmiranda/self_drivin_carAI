class Car{
  constructor(xPosition, yPosition, width, height){
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;
    this.maxSpeed = 3;
    this.friction = 0.05;
    this.angle = 0;

    this.controls = new Controls();
  }

  update(){
    this.#move();
  }


  #move(){
    if(this.controls.forward){
      this.speed += this.acceleration;
    }
    if(this.controls.reverse){
      this.speed -= this.acceleration;
    }

    if(this.speed > this.maxSpeed){
      this.speed = this.maxSpeed;
    }
    if(this.speed < -this.maxSpeed/2){
      this.speed = -this.maxSpeed/2;
    }

    if(this.speed > 0){
      this.speed -= this.friction;
    }
    if(this.speed < 0){
      this.speed += this.friction
    }

    //to stop the friction increase wem the key id not pressed
    if(Math.abs(this.speed) < this.friction){
      this.speed = 0;
    }

    /*
     *in the reverse mode when you press left arrow the car should torn of left
     *and the same when you press right arrow the car shoul turn right
     *
    */
    if(this.speed != 0){
      const flip = this.speed > 0 ? 1 : -1;

      if(this.controls.left){
        this.angle += 0.03 * flip;
      }
  
      if(this.controls.right){
        this.angle -= 0.03 * flip;
      }
    }


    
    
    this.xPosition -= Math.sin(this.angle) * this.speed;
    this.yPosition -= Math.cos(this.angle) * this.speed;
  }

  draw(context){
    context.save();
    context.translate(this.xPosition, this.yPosition);
    context.rotate(-this.angle);
    
    context.beginPath();
    context.rect(
      -this.width/2,
      -this.height/2,
      this.width,
      this.height
    );
    
    context.fill();
    context.restore();

  }

}