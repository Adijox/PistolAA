

function Enemy(x, y) {
    this.x = x;
    this.y = y;
    this.health = 30;
    this.recover = false;
    this.recotime = 0;
    this.type = 1;
    this.width = 22.5;
    this.height = 37.5;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.speed = 0.55;
    this.time = ceil(random(0, 50));
    this.timeu = 0;
    this.timed = 0;
    this.timel = 0;
    this.timer = 0;
    var shootlist = [200, 600, 1400, 1500, 1600];
    var shootangle = [90, 90, 90 + random(-10, 10), 90 + random(-10, 10), 90 + random(-10, 10)];
    this.bullets = [];
//    this.shootlist[1] = 10;
//    this.shootlist[2] = 30;
//    this.shootlist[3] = 70;
//    this.shootlist[4] = 80;
//    this.shootlist[5] = 90;
    
    this.update = function() {
        
        this.timert();
        if(this.time > 2000) {
            this.time = 0;
        }
        if(this.left) {
            if(this.unol) {
            this.timel = 0;
            this.unol = false; 
            }
            if(this.timel < 100) {
            this.x -= this.speed;
            }else{
                this.left = false;
                this.unol = true;
            }
        }
        if(this.right) {
            if(this.unor) {
            this.timer = 0;
            this.unor = false;   
            }
            if(this.timer < 100) {
                this.x += this.speed;
            }else{
                this.right = false;
                this.unor = true
            }
            
        }
        if(this.up) {
            if(this.unou) {
            this.timeu = 0;
            this.unou = false;    
            }
            if(this.timeu < 100){
                this.speed = 1.2;
            this.y -= this.speed;
                this.speed = 0.55;
            }else{
                this.up = false;
                this.unou = true
            }
        }
        if(this.down) {
            if(this.unod) {
                this.timed = 0;
                this.unod = false;
                
            }
            if(this.timed < 100) {
            this.y += this.speed;
            }
            if(this.timed > 100){
                this.down = false;
                this.unod = true;
            }
        }
//        rect(this.x, this.y, this.width, this.height);
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

//        emaxscroll = 0;
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 0, 25, 43.5);
    
    }else {
        image(enemyimg,  this.x,  this.y, 46.5, 97.5, espritescroll, 132, 25, 43.5);
        
        }
        
        if(this.recover) {
            if(this.recotime > 101) {
            this.recotime = 0;
            }
            this.recotime += 1;
//            fill(200, 100, 20);
//            rect(this.x, this.y, 20, 20);
            if(this.recotime > 100) {
                this.recover = false;
            }
        }
//        stroke(255);
//        text(this.health, this.x, this.y - 10)
    }
    this.shoot = function() {
        for (var i = 0; i < shootlist.length; i++) {
            

            
        if(this.time === shootlist[i]) {
            this.bullets.push(new Bullet(this.x, this.y, shootangle[i], 0.0001));
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
        this.recotime += 1;
    }
    
}
