class Box extends BaseClass {
  constructor(x, y){
    super(x,y,30,30);
    this.visibility=255;

  }
  display(){
    console.log(this.body.speed);
    if (this.body.speed<10) {
      super.display();
    }
    else{
    
     push();
     
     
     image(this.image,this.body.position.x,this.body.position.y,50,50);
     pop();
    }
  }
};