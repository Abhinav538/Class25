//creating parent or base or super class(inheritence concept)
class BaseClass{
  //making the parent
    constructor(x, y, width, height, angle) {
        var options = {
          //properties
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        //shape
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        //give image
        this.image = loadImage("sprites/base.png");
        //add to the world
        World.add(world, this.body);
      }
      //display
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        //set in the center
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}