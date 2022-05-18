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

    const topLeft = {xPosition : this.left, yPosition : this.top};
    const topRight = {xPosition : this.right, yPosition : this.top};
    const bottomLeft = {xPosition : this.left, yPosition : this.bottom};
    const bottomRight = {xPosition : this.right, yPosition : this.bottom};

    this.borders = [
      [topLeft, bottomLeft],
      [topRight, bottomRight]
    ]
  }

  getLaneCenter(laneIndex){
     const laneWidth = this.width / this.laneCount;
     return this.left + laneWidth / 2 + 
            Math.min(laneIndex, this.laneCount - 1) * laneWidth;
  }



  draw(context){
    context.lineWidth = 5;
    context.strokeStyle = "white";

    //linear interpolation used  to draw the road lines
    for(let i = 1; i <= this.laneCount - 1; i++){
      const lineXPosition = lerp(
        this.left,
        this.right,
        i/this.laneCount
      );

     
      context.setLineDash([20, 20]);
      context.beginPath();
      context.moveTo(lineXPosition, this.top);
      context.lineTo(lineXPosition, this.bottom);
      context.stroke();
    }

    context.setLineDash([]);
    this.borders.forEach(border => {
      context.beginPath();
      context.moveTo(border[0].xPosition, border[0].yPosition);
      context.lineTo(border[1].xPosition, border[1].yPosition);
      context.stroke();
    });
  }
}