function Obstacle(x, y, type) {
    this.x= x;
    this.y= y;
    this.type = 1;
    this.type = type;
    this.width = 40;
    this.height = 10;
    this.health = 10;
    this.update = function() {
        if(this.type === 1) {
            image(obstacles, this.x, this.y, 96, 32, 100, 272, 96, 32);
            fill(0, 200, 30, 200);
            this.width = 48;
            this.height = 16;
            this.health = 10;
            for(var i = 0; i < bullets.length; i++) {
//                var x = bullets[i].x;
//                var y = bullets[i].y;
//                var width = bullets[i].width;
//                var height = bullets[i].height;
                if(bullets[i].position.x > this.x - this.width && bullets[i].position.x < this.x + this.width && bullets[i].position.y < this.y + this.height && bullets[i].position.y > this.y - this.height) {
                    print("wallbreak");
                                rect(this.x, this.y, this.width, this.height);

                
            }
        }
        if(this.type === 2) {
            
        }
        if(this.type === 3) {
            
        }
    }
    
}
}