const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var ground1,base1,base2,block1,block2,block3,block4,block5,block6,block7,block8,block9,block10
var block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21,block22
var block23,block24,block25,block26,block27,block28,block29,block30

var score=0;
text("Score"+score,750,40);

var hexagon1,slingshot1

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
	world = engine.world;

  ground1=new Ground(100,395,1410,10);
  base1=new Ground(400,300,200,10);
  base2=new Ground(630,160,200,10);

  block1=new Box(325,285,30,20);
  block2=new Box(360,285,30,20);
  block3=new Box(395,285,30,20);
  block4=new Box(430,285,30,20);
  block5=new Box(465,285,30,20);

  block6=new Box(340,260,30,20);
  block7=new Box(375,260,30,20);
  block8=new Box(410,260,30,20);
  block9=new Box(445,260,30,20);

  block10=new Box(355,235,30,20);
  block11=new Box(390,235,30,20);
  block12=new Box(425,235,30,20);

  block13=new Box(370,210,30,20);
  block14=new Box(405,210,30,20);

  block15=new Box(387,185,30,20);
  
  block16=new Box(550,145,30,20);
  block17=new Box(585,145,30,20);
  block18=new Box(620,145,30,20);
  block19=new Box(655,145,30,20);
  block20=new Box(690,145,30,20);

  block21=new Box(565,120,30,20);
  block22=new Box(600,120,30,20);
  block23=new Box(635,120,30,20);
  block24=new Box(670,120,30,20);

  block25=new Box(580,95,30,20);
  block26=new Box(615,95,30,20);
  block27=new Box(650,95,30,20);

  block28=new Box(595,70,30,20);
  block29=new Box(630,70,30,20);

  block30=new Box(610,45,30,20);

  hexagon1=new Hexagon(100,200,20);

  slingshot1=new SlingShot(hexagon1.body,{x:100,y:200});


}

function preload(){

}



function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  


  drawSprites();
  ground1.display();
  base1.display();
  base2.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  block27.display();
  block28.display();
  block29.display();
  block30.display();
  hexagon1.display();
  slingshot1.display();

      block1.score();
      block2.score();
      block3.score();
      block4.score();
      block5.score();
      block6.score();
      block7.score();
      block8.score();
      block9.score();
      block10.score();
      block11.score();
      block12.score();
      block13.score();
      block14.score();
      block15.score();
      block16.score();
      block17.score();
      block18.score();
      block19.score();
      block20.score();
      block21.score();
      block22.score();
      block23.score();
      block24.score();
      block25.score();
      block26.score();
      block27.score();
      block28.score();
      block29.score();
      block30.score();
      
  
}

function mouseDragged(){
  Matter.Body.setPosition(hexagon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot1.fly();
}

function keyPressed(){
  if(keyCode===32){
      Matter.Body.setPosition(hexagon1.body,{x:100,y:200})
      slingshot1.attach(hexagon1.body);
  }



}


