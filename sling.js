class Sling{
    constructor(bodyA, pointB){
        var opti = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
       
        this.pointB = pointB;
        this.sling = Constraint.create(opti);
        World.add(world, this.sling);
    }

    attach(body){
        this.sling.bodyA = body;
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;

            strokeWeight(4);
            
           fill ("red");
           line (pointA.x,pointA.y,pointB.x,pointB.y)
           
        }
        
    }
    
}