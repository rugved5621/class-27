class slingshot {
    constructor(bodyA,bodyB)   {

        var option={
            bodyA : bodyA,
            bodyB : bodyB,
            length: 10,
            stiffness : 1
        }
        this.slingshot=Matter.Constraint.create(option);
        World.add(world,this.slingshot)
        } 
        display(){
            var pointA=this.slingshot.bodyA.position
            var pointB=this.slingshot.bodyB.position
            line(pointA.x,pointA.y,pointB.x,pointB.y)
        }
        }