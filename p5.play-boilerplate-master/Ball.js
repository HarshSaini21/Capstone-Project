class Ball{
    constructor(x,y,w,h){

        var options = {
            airfriction: 0.05,
            density: 1

        }
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world ,this.body);
        this.image = loadImage("images/Superhero-01.png")
        this.scale = 3;
    }

    display(){
        const pos = this.body.position;
        const angle = this.body.angle;


        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        stroke("yellow");
        fill("green");
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}