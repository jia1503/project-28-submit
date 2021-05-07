
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5;
var world,boy;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
 mango2 = new mango(900, 160, 30);
 mango3 = new mango(1000, 180, 30);
 mango4 = new mango(1000, 90, 30);
 mango5 = new mango (1150, 120, 30);
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	stoneObj = new Stone(250, 480, 40, 40);
	launcherObject = new Chain(stoneObj.body, {x:240, y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  stoneObj.display();
launcherObject.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
  groundObject.display();


  if(mango1.x -stoneObj.x < (mango1.width - stoneObj.width)/2){
    Matter.Body.setStatic(mango1.body,false); 
  }
  if(mango2.x -stoneObj.x < (mango2.width - stoneObj.width)/2){
    Matter.Body.setStatic(mango2.body,false); 
  }
  if(mango3.x -stoneObj.x < (mango3.width - stoneObj.width)/2){
    Matter.Body.setStatic(mango3.body,false); 
  }
  if(mango4.x -stoneObj.x < (mango4.width - stoneObj.width)/2){
    Matter.Body.setStatic(mango4.body,false); 
  }
  if(mango5.x -stoneObj.x < (mango5.width - stoneObj.width)/2){
    Matter.Body.setStatic(mango5.body,false); 
  }
  /*detectcollision(stoneObj, mango1);
  detectcollision(stoneObj, mango2);
  detectcollision(stoneObj, mango3);
  detectcollision(stoneObj, mango4);
  detectcollision(stoneObj, mango5);*/

  
}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x:mouseX,y:mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}

/*function detectcollision(lstone, lmango){
var collision = Matter.SAT.collides(lstone,lmango); 
if(collision.collided){ 
  console.log("collided"); 
  Matter.Body.setStatic(lmango,false); }
}*/

