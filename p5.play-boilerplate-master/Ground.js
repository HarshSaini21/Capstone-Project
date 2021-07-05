class Ground{
    constructor(x,y,w,h){

        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world ,this.body);
    }

    display(){
        const pos = this.body.position;

        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.w, this.h);
    }
}