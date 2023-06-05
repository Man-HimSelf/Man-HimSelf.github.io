var xPos = 10;
var yPos = 225;
var moonX = 200;

var rectW = 6;
var rectH = 6;

draw = function() {
    background(29, 40, 115);
    fill(255, 242, 0);
    ellipse(xPos, yPos, 10, 10);
    
    xPos = xPos + 1;
    yPos = yPos - 0.5;
    
    fill(198,199,193);
    arc(moonX,67,79,73,-70,110);
    
    moonX = moonX - 0.2;
    
    fill(56,55,55);
    rect(201,290,30,127); // skyscrapers
    rect(155,292,33,110);
    rect(178,283,30,127);
    
    fill(255,247,0);
    rect(159,300,rectW,rectH);
    
    rectW = rectW +1;
    rectH = rectH +1;
    rectW = rectW +1;
    rectH = rectH +1;
    rectW = rectW +1;
    rectH = rectH +1;
    rectW = 0;
    rectH = 0;
    
    
    
    
};



