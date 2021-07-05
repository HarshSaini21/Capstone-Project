class Monster{
    constructor(x,y,w,h){

        var options = {
            restitution: 0.5,
            friction: 1,
            density: 0.05
        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world ,this.body);
        this.image = loadImage("images/Monster-01.png");
    }

    display(){
        const pos = this.body.position;
        const angle = this.body.angle;


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        stroke("yellow");
        fill("red");
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}