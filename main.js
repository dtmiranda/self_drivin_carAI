const canvas = document.getElementById("myCanvas");
canvas.width = 200;

const context = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);
car.draw(context);


animate();

function animate(){
  car.update();
  canvas.height = window.innerHeight;
  car.draw(context);
  
  /*
   *this will call animate method again and again many 
   *times per secunds it gives the ilusion of moviment
   *that we want.
  */
  requestAnimationFrame(animate) 
}