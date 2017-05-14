function Bullet(x, y, angle, bscale) {
    this.angle = angle;
    this.x = x;
    this.y = y;
    this.width = (10 * bscale) * 0.75;
    this.length = (22 * bscale) * 0.75;
    this.lifespan = 0;
    if(this.width < 10 || this.length < 22) {
        this.width = 10;
        this.length = 22;
    }
    this.position = createVector(this.x, this.y);
    this.velocity = createVector();
    this.acceleration = createVector(1, 0);
    
  
    
    this.update = function() {
        this.lifespan += 1;
        this.acceleration = createVector(1, 0);
        this.acceleration.setMag(bscale/50);
        
        if(this.acceleration.mag() < 1/100) {
            this.acceleration.setMag(0.01);
        }
        if(this.acceleration.mag() === 0.04) {
            this.acceleration.add(1);
        }
        this.acceleration.rotate(radians(this.angle));
        this.velocity.add(this.acceleration);
        this.velocity.limit(5);
        this.position.add(this.velocity);
  
        

        push();
        translate(this.position.x, this.position.y);
        rotate(radians(this.angle));
        stroke(58, 33, 30);
        fill(75, 71, 71);
            beginShape();
            vertex(0 - (this.length/2), 0 -(this.width/2));
            vertex(0 - (this.length/2), 0 + (this.width/2));
            vertex(0, 0 + (this.width/2));
            vertex(0 - 3 , 0 + (this.width/2) + 2);
            vertex(0 + (this.length/2), 0 + (this.width/2));
            vertex(0 + (this.length/2), 0 - (this.width/2));
            vertex(0 - 3, 0 - (this.width/2) - 2);
            vertex(0, 0 - (this.width/2));
            vertex(0 - (this.length/2), 0 -(this.width/2));
           endShape();
        stroke(58, 33, 30);
        fill(167, 18, 1);
        arc(0 + (this.length/2), 0, 15, this.width, PI+HALF_PI, HALF_PI,CHORD);
        beginShape();
        vertex(0 - (this.length/2) - 10, 0 - (this.width/2));
        vertex(0 - (this.length/2), 0);
        vertex(0 -(this.length/2), 0 - (this.width/2));
        endShape();
        beginShape();
        vertex(0 - (this.length/2), 0)
        vertex(0 - (this.length/2) - 10, 0 + (this.width/2));
        vertex(0 - (this.length/2), 0 + (this.width/2));
        endShape();
        pop();
 
        
    
    }
}