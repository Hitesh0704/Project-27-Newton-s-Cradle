class Rope {
    constructor(bodyA,pointB) {
       var options={
           isStatic:false,
           bodyA:bodyA, 
           pointB:pointB,
           stiffness: 0.08,
           length: 300   
         } 
         this.pointB=pointB;
         this.rope=Constraint.create(options);
         World.add(world,this.rope);
    }
   display(){
       stroke("white");
        line(this.rope.bodyA.position.x,this.rope.bodyA.position.y,this.pointB.x,this.pointB.y);
        }
    }
