class Mango {
    constructor(x, y,radius) {
      var options = {
        'friction':1,
        'restitution':0,
        isStatic:true
      };
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
      this.image=loadImage("plucking mangoes/mango.png");
      this.body.scale=0.1;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      fill('red')
      imageMode(CENTER)
      image(this.image,0, 0, this.radius, this.radius);
      
      pop();
    };
  };
  