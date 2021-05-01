var circlePos, circles,input,rotation;


function setup()
{
    createCanvas(500,500);
    input = 0;
    circles = []; 
    
    for(var i = 0; i < 200; i ++){
        circles.push(createVector(-250 + i * 25, 0)); 
    }
}


function draw()
{
    colorMode(RGB);
    background(0,10);
    
    colorMode(HSB);
    var hue = 0;
    hue  = map(sin(input),-1,1,0,255);
    fill(hue,120,100);
    input += 0.1;
    
    translate(width/2, height / 2)
    rotate(sin(input)*0.1);
    beginShape();
    for(var i = 1; i < circles.length; i ++){
        circles[i].y = sin(input  * i/4) * 400
        vertex(circles[i].x,circles[i].y);
    }
    endShape(CLOSE);
    
   
}
