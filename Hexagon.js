class Hexagon {
    constructor(x, y,r) {
      var options = {
         'friction':1.5,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, r ,options);
     
     
      this.r=r;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green")
      fill(255);
      rect(0, 0, this.r, this.r);
      pop();
    }
  };
  