

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
    this.timeu = 0;
    this.timed = 0;
    this.timel = 0;
    this.timer = 0;
    var shootlist = [100, 300, 700, 800, 900];
    var shootangle = [90, 90, 90 + random(-5, 5), 90 + random(-5, 5), 90 + random(-5, 5)];
    this.bullets = [];
//    this.shootlist[1] = 10;
//    this.shootlist[2] = 30;
//    this.shootlist[3] = 70;
//    this.shootlist[4] = 80;
//    this.shootlist[5] = 90;
    
    this.update = function() {
        this.timert();
        if(this.time > 1000) {
            this.time = 0;
        }
        if(this.left) {
            this.timel = 0;
            if(this.timel < 100) {
            this.x -= this.speed;
            }else{
                this.left = false;
            }
        }
        if(this.right) {
            this.timer = 0;
            if(this.timer < 100) {
                this.x += this.speed;
            }else{
                this.right = false;
            }
            
        }
        if(this.up) {
            this.timeu = 0;
            if(this.timeu < 100){
            this.y -= this.speed;
            }else{
                this.up = false;
            }
        }
        if(this.down) {
            this.timed = 0;
            if(this.timeu < 100) {
            this.y += this.speed;
            }else{
                this.down = false;
            }
        }
        rect(this.x, this.y, 30, 50);
        for (var j = 0; j < this.bullets.length; j++) {
            this.bullets[j].update();
        }
        
        
        emaxscroll = 103;
        if(this.left) {
        if(this.up) {
            image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 132, 25, 43.5);
        }else {
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 44, 25, 43.5);
        }
    }else
    if(this.right) {
    
        if(this.up) {
            image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 132, 25, 43.5);
        }else {
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 88, 25, 43.5);
        }
    }else if(this.up) {
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 132, 25, 43.5);
        }
    else if(this.down) {

        emaxscroll = 0;
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 0, 25, 43.5);
    
    }else {
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 132, 25, 43.5);
    }
    }
    this.shoot = function() {
        for (var i = 0; i < shootlist.length; i++) {
            

            
        if(this.time === shootlist[i]) {
            this.bullets.push(new Bullet(this.x, this.y, shootangle[i], 0.7));
            emaxscroll = 200;
            espritescroll = 176;
            
        }
      }
    }
    this.timert = function() {
        this.time += 1;
        this.timeu += 1;
        this.timed += 1;
        this.timel += 1;
        this.timer += 1;
    }
    
}
