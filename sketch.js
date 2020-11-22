var a;
var circles=[];
var box1,box2,box3,box4,box5,box6,box7,box8,box9
var Stand1
var Hexagon
function setup() {
  createCanvas(1000,1000);
  stroke(255)

  //lv 1
  box1 = new box(330,235,30,40);
  box2 = new box(360,235,30,40);
  box3 = new box (390,235,30,40);
  box4 = new box (420,235,30,40);
  box5 = new box (450,235,30,40);
  //lv 2
  box6 = new box(360,195,30,40);
  box7 = new box(390,195,30,40);
  box8 = new box(420,195,30,40);
  //top
  box9 = new box(390,155,30,40);
  //stand
  Stand1 = new Ground(390,150,150,5)
  //hexagon
  Hexagon = new Hexagon(100,700,20,20);

  
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  
  
  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
Stand1.display();
Hexagon.display();
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
} 