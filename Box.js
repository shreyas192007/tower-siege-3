class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.4,
        'friction':1.0,
          isStatic:false
         
    }

     this.Visiblity=255;

    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
      
      if(this.body.speed<3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green")
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();


       } 
       
       else{World.remove(world,this.body);
        
        push();
        this.Visiblity=this.Visiblity -5;
       // tint (255,this.Visiblity);

        // image(this.image)
         pop();
        
        
      }

  

    }

    score(){
     
     if(this.Visiblity<0 && this.Visiblity > -105){ score++; } }  
      
    
    }

  

 
