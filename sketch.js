
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var engine, world;
var paper1, ground1;

function preload() {

}

function setup() {
  createCanvas(1200, 700);


  engine = Engine.create();
  world = engine.world;


  paper1 = new paper(20, 360, 20);
  ground1 = new ground(300, 660, 1200, 10)



  boxPosition = 900
  boxY = 610;

  var boxleftSprite = createSprite(boxPosition, boxY, 20, 100);
  boxleftSprite.shapeColor = color(255, 0, 0);


  var boxBase = createSprite(boxPosition + 100, boxY + 40, 200, 20);
  boxBase.shapeColor = color(255, 0, 0);

  var boxrightSprite = createSprite(boxPosition + 200, boxY, 20, 100);
  boxrightSprite.shapeColor = color(255, 0, 0);


  boxBottomBody = Bodies.rectangle(boxPosition + 100, boxY + 45 - 20, 200, 20, { isStatic: true });
  World.add(world, boxBottomBody);


  boxLeftBody = Bodies.rectangle(boxPosition + 20, boxY, 20, 100, { isStatic: true });
  World.add(world, boxLeftBody);

  boxRightBody = Bodies.rectangle(boxPosition + 200 - 20, boxY, 20, 100, { isStatic: true });
  World.add(world, boxRightBody);







}


function draw() {

  background(0);

  Engine.update(engine);
  rectMode(CENTER);



  paper1.display();
  ground1.display();


   drawSprites();

}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper1.body, paper1.body.position, { x: 55, y: -30 })
  }

}



