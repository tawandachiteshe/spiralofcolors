var x;
var y;
var accelation;

function setup()
{

  createCanvas(600,400);
  background(51);
  //frameRate(30);
}

function draw()
{
    //background(51);
  x=x+1;
  stroke(random(0,255),random(0,255),random(0,255),68);
  strokeWeight(78);
  fill(random(0,255),random(0,255),random(0,255),68);
  translate(width/2,height/2);
  rotate(floor(frameCount/PI));
  rect(50,80,25,25);

}

function keyPressed()
{


  if(keyCode==UP_ARROW)
  {
      noLoop();
    console.log(x);
  }else
  {
    loop();
  }
}
