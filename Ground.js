class Ground {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    
    World.add(world, this.body);
  }
  display(){
    var groundpos =this.body.position;
    push();
    translate(groundpos.x, groundpos.y);
    rectMode(CENTER);
    fill("black");
    rect(0,0, this.width, this.height);
    pop();
  }
}
