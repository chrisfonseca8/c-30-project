class Ball {
    constructor(x,y,raidus){
        var options = {
            density:2,

        }
        this.body = Bodies.circle(x,y,raidus,options);
        this.raidus = raidus;
        World.add(world,this.body);
    }
    display(){
        push ();
        fill("black");
        ellipse(this.body.position.x,this.body.position.y,this.raidus*2);
        pop ();
    }
}