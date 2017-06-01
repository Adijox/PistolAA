function Obstacle(x, y, type) {
    this.x= x;
    this.y= y;
    this.type = 1;
    this.type = type;
    this.width = 40;
    this.height = 29;
    this.health = 10;
    if(this.type === 1) {
    this.width = 48;
    this.height = 25;
    this.health = 2.5;
        
    }
    if(this.type === 2) {
    this.width = 48;
    this.height = 25;
    this.health = Infinity;
        
    }
    this.update = function() {
        if(this.type === 1) {
            image(obs, this.x, this.y, 96, 32, 100, 272, 96, 32);
            fill(0, 200, 30, 200);
            
            for(var i = 0; i < bullets.length; i++) {
                if(bullets[i].position.x > this.x - this.width && bullets[i].position.x < this.x + this.width && bullets[i].position.y < this.y + this.height && bullets[i].position.y > this.y - this.height) {
                    print("wallbreak");
                    this.health -= bullets[i].bscale;
                    bullets.splice(i, 1);
                    print(this.health);


                
            }
                
        }
        }
        if(this.type === 2) {
            image(obs, this.x, this.y, 96, 32, 200, 136, 96, 32);
            fill(0, 200, 30, 200);
            
            for(var i = 0; i < bullets.length; i++) {
                if(bullets[i].position.x > this.x - this.width && bullets[i].position.x < this.x + this.width && bullets[i].position.y < this.y + this.height && bullets[i].position.y > this.y - this.height) {
                    print("wallbreak");
                    this.health -= bullets[i].bscale;
                    bullets.splice(i, 1);
                    print(this.health);

        }
            }
        }
        if(this.type === 3) {
            
        }
    
//    rect(this.x, this.y, this.width, this.height);
}
}