

function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.health = 3;
    this.type = 1;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.speed = 0.4;
    this.time = ceil(random(0, 50));
    var shootlist = [100, 300, 700, 800, 900];
    var shootangle = [90, 90, 90 + random(-5, 5), 90 + random(-5, 5), 90 + random(-5, 5)];
    this.bullets = [];
//    this.shootlist[1] = 10;
//    this.shootlist[2] = 30;
//    this.shootlist[3] = 70;
//    this.shootlist[4] = 80;
//    this.shootlist[5] = 90;
    
    this.update = function() {
        this.timer();
        if(this.time > 1000) {
            this.time = 0;
        }
        if(this.left) {
            this.x -= this.speed;
        }
        if(this.right) {
            this.x += this.speed;
        }
        if(this.up) {
            this.y -= this.speed;
        }
        if(this.down) {
            this.x += this.speed;
        }
        rect(this.x, this.y, 30, 50);
        for (var j = 0; j < this.bullets.length; j++) {
            this.bullets[j].update();
        }
    }
    this.shoot = function() {
        for (var i = 0; i < shootlist.length; i++) {
            
        if(this.time === shootlist[i]) {
            this.bullets.push(new Bullet(this.x, this.y, shootangle[i], 2));
            print(bullets);
        }
      }
    }
    this.timer = function() {
        this.time += 1;
    }
    
}
