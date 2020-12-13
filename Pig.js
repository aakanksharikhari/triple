class Pig{
    constructor(x,y)
    {
         var options={
            'restitution':0.8, 
            'friction':0.5,
            'density':1.0 
  
    }
this.body=Bodies.rectangle(x,y,20,20,options);

World.add(world,this.body);
}
display(){
   var pus=this.body.position;
   var angle=this.body.angle;
   push();
   translate(pus.x,pus.y);
   rotate(angle);
   ellipseMode(CENTER);
   fill("green");
   ellipse(pus.x,pus.y,this.width,this.height);
   pop();
}
};