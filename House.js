function House(x, y, type, side) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.side = side;
    this.length = 50;
     if(this.type == 1) {
        this.width = 100;
       
    }else if(this.type == 2) {
        this.width = 140
    }else if(this.type == 3) {
        this.width = 60
       }else {
           this.width = 100;
       }
//    if(this.type == 1 && this.side == 'left' ) {
//        this.x += this.width/2;
//    }
//    if(this.type == 1 && this.side == 'right' ) {
//        this.x -= this.width/2;
//    }
//    if(this.type == 2 && this.side == 'left' ) {
//        this.x += this.width/2;
//    }
//    if(this.type == 2 && this.side == 'right' ) {
//        this.x -= this.width/2;
//    }
//    if(this.type == 3 && this.side == 'left' ) {
//        this.x += this.width/2;
//    }
//    if(this.type == 3 && this.side == 'right' ) {
//        this.x -= this.width/2;
//    }
    this.update = function() {
        
    noStroke();
    if(this.type == 1) {
        fill(1);
        rect(this.x, this.y, this.width, this.length);
//        image(house1, this.x, this.y, 50, 100)
    }
    if(this.type == 2) {
    
        fill(100);
        rect(this.x, this.y, this.width, this.length);
    }
    if(this.type == 3) {
        fill(245);
        rect(this.x, this.y, this.width, this.length);
    }
    
        

    }
}
