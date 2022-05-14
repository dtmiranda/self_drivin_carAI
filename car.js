class Car{
  constructor(xPosition, yPosition, width, height){
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;

    this.speed = 0;
    this.acceleration = 0.2;

    this.controls = new Controls();
  }

  update(){
    if(this.controls.forward){
      this.speed += this.acceleration;
    }
    if(this.controls.reverse){
      this.speed -= this.acceleration;
    }
    this.yPosition -= this.speed;
  }

  draw(context){
    context.beginPath();
    context.rect(
      this.xPosition - this.width/2,
      this.yPosition - this.height/2,
      this.width,
      this.height
    );
    
    context.fill();

  }

}