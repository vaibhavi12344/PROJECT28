class paper{
constructor(x,y,radius){

var options={
'isStatic':false,
'restitution':0.3,
'density':1.2
}
this.body=Bodies.circle(x,y,radius,options)
this.image=loadImage("paper.png");
this.radius=radius


World.add(world,this.body)


}
display(){
    push()
    translate(this.body.position.x,this.body.position.y)

    image(this.image,0,0, this.radius,this.radius)
  pop()
    
}
}