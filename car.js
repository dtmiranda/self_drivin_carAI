class Car{
  constructor(xPosition, yPosition, width, height){
    this.xPosition = xPosition;
    this.yPosition = yPosition;
    this.width = width;
    this.height = height;
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