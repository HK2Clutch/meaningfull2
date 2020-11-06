class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        var pointA = this.sling.bodyA.position;
       // var pointB = this.pointB;
        strokeWeight(4);
        console.log(pointB);
        line(pointA.x, pointA.y,this.pointB.x, this.pointB.y);
    }
    
}