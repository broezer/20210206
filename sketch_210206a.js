const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;
let b1, b2, b3;
let l1, l2, l3;

let cols, rows;
let scl = 30;
let w = 1400;
let h = 1000;

let terrain = [];

function setup() {
  createCanvas(400, 400, WEBGL);
 
   c1 = color(252, 38, 192);
   c2 = color(245, 129, 150);
   c3 = color(244, 250, 10);
   
   b1 = color(46, 0, 100);
   b2 = color(12, 1, 62);
   b3 = color(13, 12, 46);

   
   l1 = color(57, 255, 134);
   l2 = color(29,0,41);
   
   cols = w / scl;
   rows = h / scl;
   
   for (let x = 0; x < cols; x++) {
    terrain[x] = [];
    for (let y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}


function draw() {
  
  push();
  translate(0 , 0, width * -1);
  setGradient(-width * 1.2, height * -1.2 , width * 3, height * 1.2, b1, b2, c1, Y_AXIS);
  setGradient(-width * 1.2 ,0, width * 3, height*0.8, c1, b3, b1,Y_AXIS);
  pop();
   
  push();
  translate(width * -0.9, height * 0.25, width * -0.5);
  rotateX(PI / 2);
  noFill();
  
  for (let y = 0; y < rows - 1; y++) {
    for (let x = 0; x < cols; x++) {
      fill(l2);
      stroke(c1);
      rect(x*scl, y*scl, scl, scl);
    }
  }
  
  pop(); 

   
  translate( width * 0.225 , height * 0.12 );
  rotateZ(PI);
  setTriangle( 0 , 0, width * 0.5, c1, c2,c3);
  
  scale(0.9);
  translate( width * 0.03 , height * 0.1 )
  setTriangle( 0 , 0, width * 0.5, c1, c2,c3);
  
  
  save("20210206.png");
  noLoop();
  
}


function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(x, i, x + w, i);
      
      if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x,(x + w) - (w/2), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (x + w) - (w/2), x + w, 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(255);
      line(i, y, i, y + h);
      if ( i <= (x + w) - (w/2)){
        stroke(c);
        line(i, y, i, y + h);
      }else{
        stroke(p);
        line(i, y, i, y + h);
      }
      
    }
  }
}

function setTriangle(x, y, h, c1, c2, c3 ){
  d = h;
  push();
  //translate( d * 0.2, d*0.2);
  for (let i = y; i <= y + d; i++) {
    let inter = map(i, y, (y + d) - (d/2), 0, 1);
    let c = lerpColor(c1, c2, inter);
    
    let inter02 = map(i, (y + d) - (d/2) ,  y + d , 0, 1);
    let p = lerpColor(c2, c3, inter02);
    
    //line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);    
    if ( i <= (y + d) - (d/2)){
      stroke(c);
      
      
      if( i >= ( (y + d) -  (d * 0.6)) && i <= ( (y + d) -  (d * 0.5)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.7)) && i <= ( (y + d) -  (d * 0.62)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.77)) && i <= ( (y + d) -  (d * 0.72)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.82)) && i <= ( (y + d) -  (d * 0.79)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.86)) && i <= ( (y + d) -  (d * 0.84)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.9)) && i <= ( (y + d) -  (d * 0.88)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.92)) && i <= ( (y + d) -  (d * 0.91)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.94)) && i <= ( (y + d) -  (d * 0.93)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
       
       if( i >= ( (y + d) -  (d * 0.96)) && i <= ( (y + d) -  (d * 0.95)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
        
       if( i >= ( (y + d) -  (d * 0.98)) && i <= ( (y + d) -  (d * 0.97)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
        
       if( i >= ( (y + d) -  (d * 1)) && i <= ( (y + d) -  (d * 0.99)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i)
       }
      
    }else{
      stroke(p);
      if(i >= ((y + d) - (d * 0.48)) && i <= ((y + d) - (d * 0.25)) ){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
      
      if (i >= ((y + d) - (d * 0.25)) && i <= ((y + d) - (d * 0.15))){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
      
      if (i >= ((y + d) - (d * 0.15)) && i <= (y + d)){
         line( (x - i*0.5) + (d/2), i, (x + (d * 0.5)) + (i*0.5) , i);
      }
    }
  }
}
