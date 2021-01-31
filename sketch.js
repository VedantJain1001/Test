var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;


function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	
}


function draw() {
  background(bgImg); 
  keyPressed();

  drawSprites();

}

function keyPressed() {
	if(keyCode === LEFT_ARROW){
        fairy.x = fairy.x - 10
}

if(keyCode === RIGHT_ARROW){
	fairy.x = fairy.x + 10
}

if(keyCode === DOWN_ARROW && star.y < fairy.y){
	star.velocityY = 5;
}
}
