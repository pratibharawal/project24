class paper
{
  constructor(x,y,radius)
  {
    var options =  {
        isStatic : false,
        'restitution' : 0.3,
        'friction': 0.5,
        'density': 1.2
    }


    this.x = x;
    this.y = y,
    this.radius = radius
    this.body = Bodies.circle(x,y,radius,options);
    this.radius = radius;

    World.add(world, this.body);
  }

  display()
  {

    var pos =this.body.position;
    //var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
// as the trnaslate function already translated to required position, we just need to draw at 0,0

    //rotate(angle);

    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();


}








}