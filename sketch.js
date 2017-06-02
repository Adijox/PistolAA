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
var rmIA = new Array(8);
var speed;
var dashl;
var dashr;
var doublepress1 = 0;
var doublepress2 = 0;
var doubletime1 = 0;
var doubletime2 = 0;
var dashtime = 0;
var ondash1 = false;
var ondash2 = false;
var invitimer;
var lifechange = 0;
var invincible = false;
var twinktime = 0;
var noimage = false;
var houses = [];
var soundSlider;
var musicSlider;
var soundvol;
var musicvol;
var txt = [];
var speedtime = 500;
var onspeed = false;
var enemytimes = [20, 100, 100, 250, 300, 350, 400];
var enemytypes = [1, 1, 1, 1, 1, 1, 1];
var enemyx = [450, 200, 700, 150, 300, 450, 600];
var enemyy = [150, 200, 200, 50, 80, 110, 130];
var obstaclesx = [];
var obstaclesy = [];
var obstaclestypes = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
var enemytime = 0;
var drawing = false;
var speedmode = false;
var speedcount = 0;
var onspeedtime = 5000;
var tankmode = false;
var tanktime = 5000;
var tankfull = 5000;
var enemyexist;
var obstaclexist
var gameo = false;
var dmgdealt = 0;
var setupdone = false;
var lvl = 1;
var click = false;
var fonts = [];
var backg = [];
var scrollbump = 0.5;
var obs;
var obstacles = [];
var enemyforce = 1;
var onterrain = false;
var terrain = [];
var onspace = false;
var bumpcopy;
var tertext = "";
var tertext2 = "";
var drawtime = 0;
setInterval(draw, 5 * lagfix);
//setInterval(Game, 5 * lagfix);
setInterval(lagdraw, 1000/60 * lagfix);
setInterval(Timer, 100 * lagfix);
setInterval(Timer2, 5 * lagfix);
setInterval(spriteClock, 150 *lagfix);
setInterval(spriteClock2, 100 * lagfix);
setInterval(colliClock, 5 * lagfix);
function preload() {
    backg[1] = loadImage('images/background.jpg');
    backg[2] = loadImage('images/background2.jpg');
    dashl = loadImage("images/dash.png");
    dashr = loadImage("images/dash2.png");
    worldmap = loadImage("images/map.png");
    img = loadImage("images/spritesheet.png");
    enemyimg = loadImage("images/enemy.png");
    houses[1] = loadImage("images/house1.png");
    houses[2] = loadImage("images/house2.png");
    houses[3] = loadImage("images/house3.png");
    obs = loadImage("images/obstacle.png");
    heart[1] = loadImage("images/heart1.png");
    heart[2] = loadImage("images/heart2.png");
    fonts[1] = loadFont('fonts/FullBlast.otf');
    fonts[2] = loadFont('fonts/3D.ttf');
    for(var i = 1; i< 11; i++) {
        music[i] = loadSound("music/music" + i + ".mp3");
    }
    for(var j = 11; i< 14; i++) {

        music[i] = loadSound("music/music" + i + ".wav");
    }
    dash = loadSound("sound/dash.mp3");

    sound[1] = loadSound("sound/Shot1.wav");
    sound[2] = loadSound("sound/Shot2.wav");
    sound[3] = loadSound("sound/Shot3.wav");
    sound[4] = loadSound("sound/SpeedMode.wav");
    sound[5] = loadSound("sound/TankMode.wav");

}


function setup() {
    createCanvas(900, 750);
    
    for (var i = -4000; i < 100; i += 100) {
        houses[i] = new House(0, i, ceil(random(0, 3)), 'left');
        
    }
    for (var j = -4000; j < 100; j += 100) {
        houses2[j] = new House(width, j, ceil(random(0, 3)), 'right');
    }
    for(var p = 0; p < 1; p++) {
        enemies[p] = new Enemy(random(50, width - 50), random(10, 90));
    }
    
    rectMode(RADIUS);
    scroller = 0;
    x = width / 2;
    y = height / 2;
    speed = 0.65;
    
    coordcopy = createVector(x, y);
    imageMode(CENTER);
    textAlign(CENTER);
    textFont(fonts[1]);
    noSmooth();
    rdmusic = ceil(random(0, 13));
   
    music[rdmusic].loop();
    rmmap1 = random(1, 300);
    rmmap2 = random(1, 300);
    musicSlider = createSlider(0, 100, 100);
    soundSlider = createSlider(0, 100, 75);
    musicSlider.position(1000, 450);
    soundSlider.position(1000, 500);
    txt[0] = createDiv('Music Volume');
    txt[1] = createDiv('Sound Volume');
    txt[2] = createDiv('Press \'M\' to change music : ' + rdmusic);
    
    enemyexist = new Array(700);
    for(var i = 0; i< enemyexist.length; i++) {
        enemyexist[i] = false;
    }
    obstaclexist = new Array(700);
    for(var i = 0; i< obstaclexist.length; i++) {
        obstaclexist[i] = false;
    }
 
}

function draw() {
    
    if(!setupdone) {
    background(51, 200, 135);
    image(backg[2], 450, 375, 900, 750);
    image(backg[1], 450, 375, 900, 650);
    Music();
    stroke(77, 32, 32);
    strokeWeight(4);
    line(0, 50, 900, 50);
    line(0, 700, 900, 700);
    textSize(35);
    textFont(fonts[1]);
    text("Level \n" + lvl, 450, 350);
    
    fill(51);
    ellipse(380, 350, 40, 40);
    ellipse(520, 350, 40, 40);
    rect(450, 600, 150, 60, 20);
    fill(255);
    
    text('GO!',450, 610);
    textFont(fonts[2]);
//    textSize(30);
        textSize(40);
//        noStroke();
    text("<", 380, 360);
    text(">", 520, 360);
    if(dist(mouseX, mouseY, 380, 350) < 20 && click) {
        fill(255);
        if(lvl > 0) {
        lvl -= 1;
        }
    }
    if(dist(mouseX, mouseY, 520, 350) < 20 && click) {
        fill(255);
        if(lvl < 4) {
        lvl += 1;
        }
    }
    if(mouseX < 600 && mouseX > 300 && mouseY > 540 && mouseY < 660 && click) {
         setupdone = true;
    }
        if(lvl == 0) {
        enemytimes = [];
        enemytypes = [];
        enemyx = [];
        enemyy = [];
        obstaclesx = [];
        obstaclesy = [];
        obstaclestypes = [];
        life = 1;
        scrollbump = 0.95;
        speed = 0.55;
        enemyforce = 100;
            onterrain = true;
    }
    if(lvl == 1) {
        enemytimes = [20, 150, 300, 350, 350];
        enemytypes = [1, 1, 1, 1, 1];
        enemyx = [450, 200, 700, 250, 300];
        enemyy = [30, 200, 150, 50, 50];
        obstaclesx = [200, 100, 790, 300];
        obstaclesy = [100, -500, -790, -1300];
        obstaclestypes = [1, 1, 2, 1];
        life = 8;
        scrollbump = 0.5;
        speed = 0.5;
        enemyforce = 1;
    }
    if(lvl == 2) {
        enemytimes = [20, 100, 100, 250, 300, 350, 400];
        enemytypes = [1, 1, 1, 1, 1, 1, 1];
        enemyx = [450, 200, 700, 150, 300, 450, 600];
        enemyy = [150, 200, 200, 50, 80, 110, 130];
        obstaclesx = [192, 384, 576, 768, 288, 480, 672, 864,
                      ];
        obstaclesy = [-500, -500, -500, -500, -600, -600, -600, -600];
        obstaclestypes = [2, 2, 2, 2, 2, 2, 2, 2];
        life = 7;
        scrollbump = 0.55;
        speed = 0.55;
        enemyforce = 100;
    }
    if(lvl == 3) {
        enemytimes = [20, 100, 100, 250, 300, 350, 400];
        enemytypes = [1, 1, 1, 1, 1, 1, 1];
        enemyx = [450, 200, 700, 150, 300, 450, 600];
        enemyy = [150, 200, 200, 50, 80, 110, 130];
        obstaclesx = [0, 96, 192, 288, 384, 480, 576, 672, 768, 864, 960, 1056,
                      0, 96, 192, 288, 384, 480, 576, 672, 768, 864, 960, 1056];
        obstaclesy = [-200, -200, -200, -200, -200, -200, -200, -200, -200, -200, -200, -200,
                      -300, -300, -300, -300, -300, -300, -300, -300, -300, -300, -300, -300];
        obstaclestypes = [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2,
                          2, 2, 2, 1, 2, 2, 2, 2, 2, 2 ,2];

        life = 6;
        scrollbump = 0.75;
        speed = 0.75;
        enemyforce = 10000;
    }
        if(lvl == 4) {
        enemytimes = [20, 100, 100, 250, 300, 350, 400];
        enemytypes = [1, 1, 1, 1, 1, 1, 1];
        enemyx = [450, 200, 700, 150, 300, 450, 600];
        enemyy = [150, 200, 200, 50, 80, 110, 130];
        obstaclesx = [768, 768, 672, 624, 576, 672, 288, 432, 336, 624, 624, 144, 240, 336, 432, 528, 528, 432, 336, 240, 384, 192, 288, 384, 480, 432, 336, 720, 624, 624, 528, 528, 480];
        obstaclesy = [4, -46, -46, 4, -71, -121, -342, -392, -517, -442, -342, -840, -840, -840, -840, -840, -790, -790, -765, -790, -890, -1649, -1699, -1649, -1699, -1749, -1749, -1994, -1994, -2044, -2069, -1969, -2019];
        obstaclestypes = [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2,
                          2, 2, 2, 1, 2, 2, 2, 2, 2, 2 ,2];

        life = 6;
        scrollbump = 0.75;
        speed = 0.75;
        enemyforce = 10000;
    }
    

    }
    if(setupdone) {
        background(51);
    drawing = true;
    if(400 > -scroller && -scroller > -1500){
     image(worldmap, 550, 100 + scroller, 1500, 1500);
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
    Scenario();
    Scroll(); 
    
    Shoot();
    Obstacleo();
    Houses();

    Move();
    Dash();
    EnemyGear();
    Collision();
        
//    Pause();

    Life();
    Reload();
    
    Music();
        
//    music[rdmusic].loop(2);
    
//    reload = -20;
  
//   rect(x, y, bodyWidth, bodyHeight);
    
    if(lvl === 0) {
//        for(var i = 0; i < enemies.length; i++) {
//            enemies.splice(i, 1);
//        }

    if(onterrain) {
    life = 3;
    fill(25, 41, 36, 100);
    rect(48*round(mouseX/48), 25*round(mouseY/25) - scroller, 48, 25);
        if(onspace) {
            if(scrollbump != 0) {
            bumpcopy = scrollbump;
            }
            scrollbump = 0;
        }
        
    if(click && drawtime > 10) {
        terrain.push([48*round(mouseX/48), round(25*round((mouseY/25)) - scroller), scroller]);
        print(terrain);
    }
        for(var i = 0; i<terrain.length; i++) {
            fill(50, 200, 63);
            rect(terrain[i][0],terrain[i][1]/* - terrain[i][2]*/,48, 25);
        }
    }
    }
        drawtime += 1;
    }

click = false;
    
}
function Game() {
   
}
function lagdraw() {

    
    
}
function Timer() {
    time += 1;
    doubletime1 += 1;
    doubletime2 += 1;
    dashtime +=1;
    invitimer += 1;
    speedtime += 1;
    twinktime += 1;
    onspeedtime += 1;
    tanktime += 1;
    tankfull += 1;
    if(drawing) {
    enemytime += 1;
    }
    
}
function Timer2() {
    time2 += 1;
}
function Move() {
    maxscroll = 108;
    xmove = 0;
    ymove = 0;
    
    yscroll = - scrollbump;
    
    if(noimage === false){
    if(keyIsDown(81)) {
        if(keyIsDown(90) && ondash1 === false) {
            image(img, x, y, 46.5, 97.5, spritescroll, 146, 31, 43);
        }else {
        image(img, x, y, 46.5, 97.5, spritescroll, 49, 31, 43);
            
            
        }
    }else
    if(keyIsDown(68)) {
    
        if(keyIsDown(90) && ondash2 === false) {
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
        ymove += scrollbump;
                  }

//    if(speedmode) {
//        
//        speedcount += 1;
//        if(speedcount === 1) {
//        sound[4].play();
//            
//        }
//        
//    }
    
    
    

    var xspeed = xmove + xkb;
    var yspeed = ymove + yscroll + ykb;
    ykb = 0;
    xkb = 0;
    x += xspeed;
    y += yspeed;
    noStroke();
    fill(51, 54, 245);
    if(y - bodyHeight > -scroller + height || y + bodyHeight < -scroller) {
        lifechange -= 3;
    }
    strokeWeight(200);
    line(100, 0, 100, -scroller + width/2);
}
function mouseClicked() {
    click = true;
}
function Scroll() {
    scroller += scrollbump;
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
   
   
//    fill(255, 100);
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
        xkb += 10 / collitimer1;
        ykb += 10 / collitimer1;
        
    }
    if(collision2) {
        if(collitimer2 > 30){
            collitimer2 = 1;
            
        }
        xkb += -10 / collitimer2;
        ykb += 10 / collitimer2;
        
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
    for(var i = 0; i < bullets.length;i++) {
        for(var j = 0; j< enemies.length; j++) {
        if(bullets[i].position.x - bullets[i].width < enemies[j].x + enemies[j].width && bullets[i].position.x + bullets[i].width > enemies[j].x - enemies[j].width && bullets[i].position.y - bullets[i].height < enemies[j].y + enemies[j].height && bullets[i].position.y + bullets[i].height > enemies[j].y - enemies[j].height) {
            if(enemies[j].recover === false) {
                enemies[j].health -= 5 * bullets[i].bscale;
                dmgdealt += 5 * bullets[i].bscale;
                enemies[j].recover = true;
                bullets.splice(i, 1);
                break;
                print(enemies[j].health);
//                fill(200, 25, 30);
            }
            
            
            
            }
        }
    }
    for(var i = 0; i<enemies.length; i++) {
        for(var j = 0; j< enemies[i].bullets.length; j++) {
//            fill(50, 10, 20, 200);
//            rect(enemies[i].bullets[j].position.x, enemies[i].bullets[j].position.y, enemies[i].bullets[j].width, enemies[i].bullets[j].height);
            if(enemies[i].bullets[j].position.x - enemies[i].bullets[j].width < x + bodyWidth && enemies[i].bullets[j].position.x + enemies[i].bullets[j].width > x - bodyWidth && enemies[i].bullets[j].position.y - enemies[i].bullets[j].height < y + bodyHeight && enemies[i].bullets[j].position.y + enemies[i].bullets[j].height > y - bodyHeight) {
                lifechange -= 2;
            }
        }
    }
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
    espritescroll2 += escroller;
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
        if(invitimer < 20) {
            invincible = true;
        }
        
    }
    if(invincible && twinktime % 2 === 0) {
        noimage = true;
        
    }else{
        noimage = false;
    }
    
    if(invitimer > 20) {
            invincible = false;
        }
    lifechange = 0;
    
    if(life <= 0) {
        gameOver();
    }
    
}   
function Pause() {
    fill(15, 42, 200);
  rect(width - 30, height + 30 - scroller, 5, 15);  
  rect(windowWidth * (70/100) - 30, windowHeight - scroller + 30, 5, 15);  
    
    }

 function keyPressed() {
     if(keyCode === 32) {
         if(!onspace) {
         onspace = true;
         }else {
             onspace = false;
             scrollbump = bumpcopy;
             print(bumpcopy);
         }
     }
     if(keyCode === 85) {
         if(!onterrain) {
         onterrain = true;
         } else {
             onterrain = false;
         }
     } 
     if(keyCode === 81) {
         if(doubletime1 > 3) {
         doubletime1 = 0;
             doublepress1 = 0;
         }
         doublepress1 += 1;
         
         if(doublepress1 == 2 && doubletime1 < 3 && reload < 0) {
             xkb -= 70;
              dashtime = 0;

             ondash1 = true;
             dash.play();
             if(reload < 100) {
             reload += 200;
             }
             doublepress1 = 0;

         }
         
     }
     if(keyCode === 68) {
         if(doubletime2 > 3) {
         doubletime2 = 0;
             doublepress2 = 0;
         }
         doublepress2 += 1;
         
         if(doublepress2 == 2 && doubletime2 < 3 && reload < 0) {
             xkb += 70;
              dashtime = 0;

             ondash2 = true;
             dash.play();
             if(reload < 100) {
             reload += 200;
             }
             doublepress2 = 0;
         }
     }
     
     
     
    if(keyCode === 37 && reload <= 0) {
        bullets.push(new Bullet(x, y, 225, (-reload/200)));
        if(-200 < reload && reload < 0) {
            
            sound[1].play();
            ykb += 5;
        }
        if(-399 < reload && reload < -200) {
            sound[2].play();
            ykb += 10;
        }
        if(reload === -400) {
            sound[3].play();
            
            ykb += 50;
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
     
     if(keyCode === 77) {
         music[rdmusic].stop();
         rdmusic += 1;
         if(rdmusic > 13) {
             rdmusic = 1;
         }
         txt[2].hide();
         txt[2] = createDiv('Press \'M\' to change music : ' + rdmusic);

//         music[rdmusic].play();
         music[rdmusic].loop();
     }
    }
function Shoot() {
   if(shootleft || shootright) {
       maxscroll = 194;
       spritescroll = 194;
       if(reload > -40) {
           reload += 60; 
       }else{
       reload += 200;
       }
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
//    if(reload > -100 && reload < 100) {
//            if(speedtime > 300) {
//                speedtime = 0;
//            }
//        
//     if(speedtime > 100) {
//                onspeed = true;
//                speedmode = true;
//                
//            }
//    }
//    if(onspeed) {
//        if(onspeedtime > 152) {
//            onspeedtime = 0;
//        }
//        speed = 1;
//        
//        if(onspeedtime > 150) {
//            onspeed = false;
//            speedmode = false;
//            speedtime = 400;
//            speed = 0.65;
//            speedcount = 0;
//            
//        }
//    }

    
    noFill();
    stroke(51);
    strokeWeight(5);
    rect(width/2 - 100, 30 - scroller, 300, 30);
    line(width/2, 30 - scroller, width/2, 60 - scroller);
//    rect(width/2, 30 - scroller, -reload/2, 30);
    pop();
    
}
function EnemyGear() {
    
    
    
    
    for(var p = 0; p < enemies.length; p++) {
         enemies[p].speed = speed - 0.1;
        for(var q = 0; q < rmIA.length; q++) {
        rmIA[q] = random(0, 1);
        }
//        if(rmIA < 0.5) {
//            enemies[p].up = true;
//        }
//        if(x > enemies[p].x && enemies[p].left === false && rmIA > 0.5) {
//            enemies[p].right = true;
//        }else {
//            enemies[p].right = false;
////        }
        if(rmIA[0] < 0.5) {
             if(enemies[p].y < y-scroller) {
                
                enemies[p].down = true;
                 
            }
        }
        if(rmIA[1] < 0.02) {
            if(x > enemies[p].x) {
            enemies[p].right = true;
                }
            }
        if(rmIA[1] < 0.02) {
            if(x < enemies[p].x) {
            enemies[p].left = true;
                }
            }
            if(rmIA[2] < 0.01) {
            if(enemies[p].y > -scroller + 60) {
            enemies[p].up = true;
                }
            }
            if(rmIA[3] < 0.05) {
            if(enemies[p].y - scroller> y - scroller + 40) {
            enemies[p].up = true;
                }
            }
        if(rmIA[4] < 0.001) {
            if(enemies[p].y < y - scroller + 60 && y < 200) {
            enemies[p].down = true;
                }
            }
            if(enemies[p].x - enemies[p].width*1.5 < 140) {
                enemies[p].left = false;
                enemies[p].right = true;
            }
        if(enemies[p].x + enemies[p].width*1.5 > width - 140) {
                enemies[p].left = true;
                enemies[p].right = false;
            }
        for(var q = 0; q < enemies.length; q++) {
        if(enemies[p].x + enemies[p].width > enemies[q].x - enemies[q].width && enemies[p].x + enemies[p].width < enemies[q].x && enemies[p].y + enemies[p].width > enemies[q].y - enemies[q].width && enemies[p].y - enemies[p].width < enemies[q].y + enemies[q].width) {
            enemies[p].right = false;
            enemies[p].left = true;
            
            }
        if(enemies[p].x - enemies[p].width < enemies[q].x + enemies[q].width && enemies[p].x - enemies[p].width > enemies[q].x && enemies[p].y - enemies[p].width < enemies[q].y + enemies[q].width && enemies[p].y + enemies[p].width > enemies[q].y - enemies[q].width) {
            enemies[p].left = false;
            enemies[p].right = true;
           
            }
        }
        enemies[p].update();
        enemies[p].shoot(); 
        if(enemies[p].health < 0) {
             
            enemies.splice(p, 1);
        }
       
        
           
       
//    print(renemy.time);
    }
}
function Dash() {
   
            if(dashtime < 3 && ondash1){
             image(dashl, x + 17, y, 46.5, 97.5);

             }else {
                 ondash1 = false;
             }
            if(dashtime < 4 && ondash2){
             image(dashr, x - 17, y, 46.5, 97.5);

                
                 
             }else {
                 ondash2 = false;
             }             
}

function Music() { 
    musicvol = musicSlider.value()/100;
    soundvol = soundSlider.value()/100;
    music[rdmusic].setVolume(1 * musicvol, 0.25);
    sound[1].setVolume(0.5 * soundvol);
    sound[2].setVolume(0.5 * soundvol);
    sound[3].setVolume(0.4 * soundvol);
    sound[4].setVolume(10 * soundvol);
    sound[5].setVolume(1 * soundvol);
    dash.setVolume(2.3 * soundvol);
    txt[0].position(1000, 430);
    txt[1].position(1000, 480);
    
    txt[2].position(1000, 400);

} 

function Scenario() {

    if(drawing) {
        for(var i = 0; i<enemytimes.length; i++) {
            
    if(enemytimes[i] === enemytime && enemyexist[i] === false) {
        
            
             enemies.push(new Enemy(enemyx[i], enemyy[i] - scroller));
        enemyexist[i] = true;
       
        
            }
           
        }
        for(var i = 0; i < obstaclesx.length; i++) {
            if(obstaclexist[i] === false) {
            obstacles.push(new Obstacle(obstaclesx[i],obstaclesy[i], obstaclestypes[i]));
                obstaclexist[i] = true;
            }
        }
    }
}


function gameOver() {
//    this.setup = function() {
//        createCanvas(400, 400);
//        background(200, 50, 30);
//        text('Your Score is : ' + enemytime, width/2, height/2);
//    }
    var uno = false;
    var uno2 = false;
    if(!uno){
        location.reload();
        
        for(var i = 0; i< terrain.length; i++) {
            tertext += terrain[i][0] + ", ";
            tertext2 += terrain[i][1] + ", ";
            
        }
        if(tertext != "") {
        location.reload();
            if(!uno2){
        confirm(tertext);
        confirm(tertext2);
        
                uno2 = true;
            }
        
        }else{
//        confirm('Your Score is : ' + enemytime + '\n Please close this alert to restart'); 
            if(!uno) {
            if (confirm('Your Score is : ' + enemytime + '\n Please close this alert to restart') == true) {
        location.reload();
}
                uno = true;
            }
        location.reload();
            }
        }   
    }
       
    

 
function Obstacleo() {
    for(var i = 0; i< obstacles.length; i++) {
        obstacles[i].update();
//        print(obstacles[i].health);
        if(x > obstacles[i].x - obstacles[i].width && x < obstacles[i].x + obstacles[i].width && y > obstacles[i].y - obstacles[i].height && y < obstacles[i].y + obstacles[i].height) {
            ykb += scrollbump * 2;
        }
    
    for(var j = 0; j < enemies.length; j++) {
        for(var k = 0; k < enemies[j].bullets.length;k++) {
            if(enemies[j].bullets[k].position.x + enemies[j].bullets[k].width> obstacles[i].x - obstacles[i].width && enemies[j].bullets[k].position.x - enemies[j].bullets[k].width < obstacles[i].x + obstacles[i].width && enemies[j].bullets[k].position.y - enemies[j].bullets[k].height< obstacles[i].y + obstacles[i].height && enemies[j].bullets[k].position.y  + enemies[j].bullets[k].height> obstacles[i].y - obstacles[i].height) {
                enemies[j].bullets.splice(k, 1);
                }
            }
        }
    if(obstacles[i].health <= 0) {
        obstacles.splice(i, 1);
    }
    }
    
}