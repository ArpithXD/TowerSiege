class Block2 {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.Visibility = 255;
    }
    display(){
      
      if (this.body.speed < 3) {
        var angle = this.body.angle;
        var  pos = this.body.position;
        push();
        translate(pos.x, pos.y);  
        rotate(angle);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
      } else {
        World.remove(world, this.body);
        push();
        this.Visibility = this.Visibility - 5;
        pop();
      }
    }
  };