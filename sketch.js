
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var ground,tree,stone,boy,boyImg,mango1,slingshot,mango2,mango3,mango4,mango5;
function preload()
{
boyImg=loadImage("plucking mangoes/boy.png");	
}

function setup() {
  createCanvas(800, 700);
  
  boy=createSprite(160,620,20,20);
  boy.addImage(boyImg);
  boy.scale=0.1;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground = new Ground(200,690,1200,20);
    tree = new Tree(580,500,400,400);
    stone = new Stone(200,200,50,50); 
    mango1 = new Mango(520,390,50);
    mango2 = new Mango(510,470,50);
    mango3 = new Mango(650,420,50);
    mango4 = new Mango(600,380,50);
    mango5 = new Mango(700,450,50);
    slingshot = new Slingshot(stone.body,{x:105,y:570});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");

  ground.display();
  tree.display();
  stone.display(); 
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  slingshot.display();  
  
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);

  drawSprites();
 
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});    
  }  
  function mouseReleased() {
  slingshot.fly(); 
}  
function keyPressed(){
  if(keyCode===32){
   slingshot.attach(stone.body);   
  }
}
function detectollision(lstone,lmango){
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lmango.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r){

    Matter.Body.setStatic(lmango,false);
  }

}


