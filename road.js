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

    //linear interpolation used  to draw the road lines
    for(let i = 0; i <= this.laneCount; i++){
      const lineXPosition = lerp(
        this.left,
        this.right,
        i/this.laneCount
      );

      

      context.beginPath();
      context.moveTo(lineXPosition, this.top);
      context.lineTo(lineXPosition, this.bottom);
      context.stroke();
    }
  }
}