var hr,mn,sc,scAngle,mnAngle,hrAngle;




function setup() {
  createCanvas(800,400);
  background(0,0,0)
  createSprite(400, 200, 50, 50);

  //CHANGING THE ANGLE MODE TO DEGREES
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
 

  // CALCULATING TIME USING PREDEFINED FUNCTIONS 
   hr=hour();
   mn=minute();
   sc=second();

   translate (200,200)
   rotate (-90)

   scAngle=map(sc,0,60,0,360)
   mnAngle=map(mn,0,60,0,360)
  hrAngle=map(hr % 12,0,12,0,360)

//drawing seconds hand
push ()
rotate(scAngle)
stroke ("green")
strokeWeight(7)
line (0,0,100,0)
pop ()

//drawing hour hand
push ()
rotate(hrAngle)
stroke ("blue")
strokeWeight(7)
line (0,0,100,0)
pop ()

//drawing minute hand
push ()
rotate(mnAngle)
stroke ("red")
strokeWeight(7)
line (0,0,100,0)
pop ()

stroke(255,0,255);
point(0,0)

//arcs
strokeWeight(9);
noFill();

//second hand
stroke("green");
arc(0,0,300,300,0,scAngle);

//hour
stroke("blue")
 arc(0,0,260,260,0,hrAngle);
}

//minutes
stroke("red");
arc(0,0,280,280,0,mnAngle);

drawSprites();