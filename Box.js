class Box {
    constructor(x,y,width,height){
        var options = {
            'restitution':0.2,
            'friction':0.01,
            'density':0.01
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
        this.visiblity = 255;
    }
    display(){
        if(this.body.speed<5){
        var pos = this.body.position;
        fill("purple");
        rect(pos.x,pos.y,this.width,this.height);
        }

      else{
        World.remove(world,this.body);
          push();
       this.visiblity = this.Visiblity-10;
        fill(255,this.visiblity);
        pop();
      }
      console.log(this.visiblity);
        
    }
}