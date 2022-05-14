class Controls{
  constructor(){
    this.forward = false;
    this.left = false;
    this.rigth = false;
    this.reverse = false;

    this.#addKeyboardListeners();

  }

  //the # caracter means the the method is private
  #addKeyboardListeners(){
    document.onkeydown = (event)=>{
      switch(event.key){
        case "ArrowLeft":
          this.left = true;
          break;
        case "ArrowRigth":
          this.rigth = true;
          break;
        case "ArrowUp":
          this.forward = true;
          break;
        case "ArrowDown":
          this.reverse = true;
          break;
      }
      console.table(this)

    }

    document.onkeyup = (event)=>{
      switch(event.key){
        case "ArrowLeft":
          this.left = false;
          break;
        case "ArrowRigth":
          this.rigth = false;
          break;
        case "ArrowUp":
          this.forward = false;
          break;
        case "ArrowDown":
          this.reverse = false;
          break;
      }
      console.table(this)
    }

  }
}