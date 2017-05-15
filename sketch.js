var x;
var y;
var xmove = 0;
var ymove = 0;
var time = 0;
var houses = [];
var houses2 = [];
var scroller;
var house1;
var bodyWidth = 18.75;
var bodyHeight = 44.25;
var ycopy;
var yscroll;
var time2 = 0;
var collitimer1 = 0;
var collitimer2 = 0;

var img;
var worldmap;
var rmmap1;
var rmmap2;
var spritescroll = 0;
var spritescroll2= 0;
var espritescroll = 0;
var espritescroll2= 0;
var maxscroll = 108;
var emaxscroll = 103;
var xkb = 0;
var ykb = 0;
var life = 6;
var coordcopy;
var music = [];
var heart = [];
var heartx = 20;
var rdmusic;
var collision1 = false;
var collision2 = false;
var bullets = [];
 var momentum1 = 1;
 var momentum2 = 1;
var shootleft = false;
var shootright = false;
var reload = 0;
var sound = [];
var enemies = [];
var lagfix = 1;
var enemyimg;
var escroller = 26; 
var rmIA;
var dashl;
var dashr;
var doublepress = 0;
var doubletime = 0;
var dashtime = 0;
var ondash = false;
var invitimer;
var lifechange = 0;
var invincible = false;
var twinktime = 0;
var noimage = false;

setInterval(draw, 5 * lagfix);
setInterval(Timer, 100 * lagfix);
setInterval(Timer2, 5 * lagfix);
setInterval(spriteClock, 150 *lagfix);
setInterval(spriteClock2, 100 * lagfix);
setInterval(colliClock, 5 * lagfix);
function preload() {
    
    dashl = loadImage("images/dash.png");
    worldmap = loadImage("images/map.png");
    img = loadImage("images/spritesheet.png");
    enemyimg = loadImage("images/enemy.png");
    music[1] = loadSound("music/music1.mp3");
    music[2] = loadSound("music/music2.mp3");
    music[3] = loadSound("music/music3.mp3");
    music[4] = loadSound("music/music4.mp3");
    heart[1] = loadImage("images/heart1.png");
    heart[2] = loadImage("images/heart2.png");
    sound[1] = loadSound("sound/Shot1.wav");
    sound[2] = loadSound("sound/Shot2.wav");
    sound[3] = loadSound("sound/Shot3.wav");

}


function setup() {
    createCanvas(900, 750);
    for (var i = -4000; i < 100; i += 100) {
        houses[i] = new House(0, i, ceil(random(0, 3)), 'left');
        
    }
    for (var j = -4000; j < 100; j += 100) {
        houses2[j] = new House(width, j, ceil(random(0, 3)), 'right');
    }
    for(var p = 0; p < 4; p++) {
        enemies[p] = new Enemy(random(50, width - 50), random(10, 90));
    }
    
    rectMode(RADIUS);
    scroller = 0;
    x = width / 2;
    y = height / 2;
    
    
    coordcopy = createVector(x, y);
    imageMode(CENTER);
    noSmooth();
    rdmusic = ceil(random(0, 4));
    music[rdmusic].play();
    music[rdmusic].loop(2);
    rmmap1 = random(1, 300);
    rmmap2 = random(1, 300);
    sound[1].setVolume(0.75);
    sound[2].setVolume(0.75);
    sound[3].setVolume(0.75);
   
}

function draw() {
   
    background(51);
    if(400 > -scroller && -scroller > -1500){
     image(worldmap, 550, 100 + scroller, 1500, 1500, 0, 0);
    }
    if(-50 > -scroller && -scroller > -3000) {
    image(worldmap, 550, -1400 + scroller, 1500, 1500);
    }
    if(-1000 > -scroller && -scroller > -4500) {
    image(worldmap, 550, -2900 + scroller, 1500, 1500);
    }
    if(-1900 > -scroller && -scroller > -5700) {
    image(worldmap, 550, -4400 + scroller, 1500, 1500);
    }
    
    Scroll(); 
    
    Shoot();
    Move();
    Dash();
    Houses();
    Collision();
//    Pause();
    Life();
    Reload();
    EnemyGear();
    
    music[rdmusic].setVolume(1, 0.25);
   //rect(x, y, bodyWidth, bodyHeight);

}
function Timer() {
    time += 1;
    doubletime += 1;
    dashtime +=1;
    invitimer += 1;
    print(invincible, '  ', invitimer);
    twinktime += 1;
}
function Timer2() {
    time2 += 1;
}
function Move() {
    maxscroll = 108;
    xmove = 0;
    ymove = 0;
    var speed = 0.75;
    yscroll = - 0.5;
    
    if(noimage === false){
    if(keyIsDown(81)) {
        if(keyIsDown(90)) {
            image(img, x, y, 46.5, 97.5, spritescroll, 146, 31, 43);
        }else {
        image(img, x, y, 46.5, 97.5, spritescroll, 49, 31, 43);
            
            
        }
    }else
    if(keyIsDown(68)) {
    
        if(keyIsDown(90)) {
            image(img, x, y, 46.5, 97.5, spritescroll, 146, 31, 43);
            
        }else {
        image(img, x, y, 46.5, 97.5, spritescroll, 96, 31, 43);
        }
    }else if(keyIsDown(90)) {
        image(img, x, y, 46.5, 97.5, spritescroll2, 146, 31, 43);
        }
    else if(keyIsDown(83)) {

        maxscroll = 0;
        image(img, x, y, 46.5, 97.5, spritescroll, 0, 31, 43);
    
    }else {
        image(img, x, y, 46.5, 97.5, spritescroll, 146, 31, 43);
        }
    }
    
    if(keyIsDown(90)) {
        ymove -= speed;
        
        
    }
    if(keyIsDown(81)) {
        xmove -= speed;
        
        
    }
    if(keyIsDown(68)) {
        xmove += speed;
        
    }
    
    if(keyIsDown(83)) {
        ymove += 0.5;
                  }

    
    
    

    var xspeed = xmove + xkb;
    var yspeed = ymove + yscroll + ykb;
    ykb = 0;
    xkb = 0;
    x += xspeed;
    y += yspeed;
    noStroke();
    fill(51, 54, 245);

}
function Scroll() {
    scroller += 0.5;
    translate(0, scroller);
   
     
}
function Houses() {
    for(var i = -4000; i < 100; i += 100) {
        
        houses[i].update();
    }
    for(var j = -4000; j < 100; j += 100) {
       houses2[j].update();
    }
}
function Collision() {
    
    for (var i = -4000; i < 100; i += 100) {
        var d = dist(0, 0 + 396.5, 0, y );
        d -= 396.5;
        d *= -1;
        if(x - bodyWidth < houses[i].x + (houses[i].width) && houses[i].y - houses[i].length < d + bodyHeight && d - bodyHeight < houses[i].y + houses[i].length) {
            console.log('collision' + ' ' + i);
            var shock1 = true;
            collision1 = true;
        }
     }

    for (var j = -4000; j < 100; j += 100) {
           if(x + bodyWidth > houses2[j].x - (houses2[j].width) && houses2[j].y - houses2[j].length < d + bodyHeight && d - bodyHeight < houses2[j].y + houses2[j].length) {
            console.log('collision' + ' ' + j);
               var shock2 = true;
               collision2 = true;
        }
    }
   
   
    fill(255, 100);
    if(shock1 || shock2) {
        fill(200, 40, 10);
        lifechange -= 1;
        shock1 = false;
        shock2 = false;
    }
//    rect(x, y, bodyWidth, bodyHeight);
    if(collision1) {
        if(collitimer1 > 30){
            collitimer1 = 1;
            
        }
        xkb = 10 / collitimer1;
        ykb = 10 / collitimer1;
        
    }
    if(collision2) {
        if(collitimer2 > 30){
            collitimer2 = 1;
            
        }
        xkb = -10 / collitimer2;
        ykb = 10 / collitimer2;
        
    }
    if(collitimer1 > 25 && collision1) {
        
         collision1 = false;
        
        xkb = 0;
        ykb = 0;
    }
    if(collitimer2 > 25 && collision2) {
        
    collision2 = false;
        xkb = 0;
        ykb = 0;
    }
//    print(collision1, collision2);
    
}

function spriteClock() {
    spritescroll += 32;
    if(spritescroll > maxscroll) {
        spritescroll = 0;
        
}
    
    espritescroll += escroller;
    if(espritescroll > emaxscroll) {
        espritescroll = 0;
        
}

}
function spriteClock2() {
    spritescroll2 += 32;
    if(spritescroll2 > maxscroll) {
        spritescroll2 = 0;

}
    espritescroll2 += 32;
    if(espritescroll2 > emaxscroll) {
        espritescroll2 = 0;

}
}
function colliClock() {
    collitimer1 += 1;
    collitimer2 += 1;
    }
function Life() {
        for(var k = 1; k <= life; k++) {

        if(k % 2 == 0) {
        noSmooth();
            image(heart[2],26 + k * 25, 30 - scroller, 12, 17);
            
            

        }else {
            noSmooth();
            image(heart[1], 40 + k * 25, 30 - scroller, 12, 17)
            
          }

        }
    if(lifechange != 0 && invincible === false) {
        invitimer = 0;
        life += lifechange;
        lifechange = 0;
        print('aie');
        if(invitimer < 20) {
            invincible = true;
        }
        
    }
    if(invincible && twinktime % 2 === 0) {
        noimage = true;
        print('clign clign');
    }else{
        noimage = false;
    }
    
    if(invitimer > 20) {
            invincible = false;
        }
    lifechange = 0;
    
}   
function Pause() {
    fill(15, 42, 200);
  rect(width - 30, height + 30 - scroller, 5, 15);  
  rect(windowWidth * (70/100) - 30, windowHeight - scroller + 30, 5, 15);  
    
    }

 function keyPressed() {
     if(keyCode === 81) {
         if(doubletime > 3) {
         doubletime = 0;
             doublepress = 0;
         }
         doublepress += 1;
         
         if(doublepress == 2 && doubletime < 3) {
             xkb -= 70;
              dashtime = 0;

             ondash = true;
             
             doublepress = 0;
             
         }
         
     }
     
     
     
    if(keyCode === 37 && reload <= 0) {
        bullets.push(new Bullet(x, y, 225, (-reload/200)));
        if(-200 < reload && reload < 0) {
            music[rdmusic].setVolume(0.8);
            sound[1].play();
            ykb = 5;
        }
        if(-399 < reload && reload < -200) {
            music[rdmusic].setVolume(0.8);
            sound[2].play();
            ykb = 10;
        }
        if(reload === -400) {
            music[rdmusic].setVolume(0.8);
            sound[3].play();
            
            ykb = 50;
        }
        shootleft = true;
        
        
    }
    if(keyCode === 39 && reload <= 0) {
        bullets.push(new Bullet(x, y, 315, (-reload/200)));
         if(-200 < reload && reload < 0) {
             music[rdmusic].setVolume(0.8);
            sound[1].play();
             ykb = 5;
        }
        if(-399 < reload && reload < -200) {
            music[rdmusic].setVolume(0.8);
            sound[2].play();
            ykb = 10;
        }
        if(reload === -400) {
            music[rdmusic].setVolume(0.8);
            sound[3].play();
            ykb = 50;
        }
        shootright = true;
    }
    }
function Shoot() {
   if(shootleft || shootright) {
       maxscroll = 194;
       spritescroll = 194;
       
       reload += 200;
       shootleft = false;
       shootright = false;
       
   }
    if(reload > -400) {
            
        reload -=1;
        
    }
    
    for (var l = 0; l < bullets.length; l++) {
        
        bullets[l].update();
        
        if(bullets[l].position.x < 0 || bullets[l].position.x > width ) {
            bullets.splice(l, 1);
            
            break;
        }
        
        if("undefined" != typeof bullets[l].lifespan) {
            if (bullets[l].lifespan > 450){
            bullets.splice(l, 1);
            }
        }
    }
    
         for (var p = 0; p < enemies.length; p++) {
             for (var q = 0; q < enemies[p].bullets.length; q++) {
            if("undefined" != typeof enemies[p].bullets[q].lifespan) {
              if(enemies[p].bullets[q].lifespan > 450) {
                enemies[p].bullets.splice(q, 1);
            }
               }
        }
         }
       
    }


function Reload() {
    push();
        rectMode(CORNER);
    if(reload > 0) {
        var mapr = reload;
        var mapr2 = reload;
        var colc = color(map(mapr, 200, 0, 255, 100), map(mapr2, 200, 0, 0, 50), 50);
        fill(colc);
        rect(width/2, 30 - scroller, -reload/2, 30);
    }
    if(reload < 0) {
        var mapr = reload;
        var mapr2 = reload;
        var colc = color(map(mapr, 0, -400, 100, 20), map(mapr2, 0, -400, 50, 255),50);
        fill(colc);
        rect(width/2, 30 - scroller, -reload/2, 30);
    }
    noFill();
    stroke(51);
    strokeWeight(5);
    rect(width/2 - 100, 30 - scroller, 300, 30);
    line(width/2, 30 - scroller, width/2, 60 - scroller);
//    rect(width/2, 30 - scroller, -reload/2, 30);
    pop();
}
function EnemyGear() {
    
    for(var p = 0; p < 4; p++) {
      rmIA = random(0, 1);
        if(rmIA < 0.5) {
            enemies[p].up = true;
        }
        if(x > enemies[p].x && enemies[p].left === false && rmIA > 0.5) {
            enemies[p].right = true;
        }else {
            enemies[p].right = false;
        }
      if(x < enemies[p].x && enemies[p].right === false && rmIA > 0.5) {
            enemies[p].left = true;
        }else {
            enemies[p].left = false;
        }
        enemies[p].update();
        enemies[p].shoot(); 
    }
    
//    print(renemy.time);
}
function Dash() {
   
             if(dashtime < 3 && ondash){
             image(dashl, x + 10, y, 46.5, 97.5);

                 
                 
             }
             
}
