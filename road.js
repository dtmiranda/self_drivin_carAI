class Road{
  constructor(xPosition, width, laneCount = 3){
    this.xPosition = xPosition;
    this.width = width;
    this.laneCount = laneCount;

    this.left = xPosition - width / 2;
    this.right = xPosition + width / 2;


    const infinity = 1000000;
    this.top = -infinity;
    this.bottom = infinity;
  }



  draw(context){
    context.lineWidth = 5;
    context.strokeStyle = "white";

    context.beginPath();
    context.moveTo(this.left, this.top);
    context.lineTo(this.left, this.bottom);
    context.stroke();

    context.beginPath();
    context.moveTo(this.right, this.top);
    context.lineTo(this.right, this.bottom);
    context.stroke();

  }
}