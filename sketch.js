//creating objects  
      var backgroundImage, bow, bowImage, red_balloon,
      red_balloonImage, green_balloon, 
      green_balloonImage, blue_balloonImage, blue_balloon,
      pink_balloon, pink_balloonImage,arrow,arrowImage;


function preload(){
//loading images
      backgroundImage=loadImage("background0.png");
      bowImage=loadImage("bow0.png")
      red_balloonImage=loadImage("red_balloon0.png")
      green_balloonImage=loadImage("green_balloon0.png")
      blue_balloonImage=loadImage("blue_balloon0.png")
      pink_balloonImage=loadImage("pink_balloon0.png")
      arrowImage=loadImage("arrow0.png")
      }

function setup() {
      createCanvas(600, 600);
//creating sprites
      background=createSprite(600,200);
      bow=createSprite(480,220,20,50);
        
//adding images
      background.addImage(backgroundImage);
      bow.addImage(bowImage);
      
//scaling images
      bow.scale=1
      background.scale=2.5

      for(var i=60; i<390; i=i+60){
      red_balloon=createSprite(50,i,1,1);
      red_balloon.addImage(red_balloonImage);
      red_balloon.scale=0.1
          
        }
  
      for(var i= 110; i<300; i=i+60){
      green_balloon=createSprite(100,i,10,10);
      green_balloon.addImage(green_balloonImage);
      green_balloon.scale=0.1
    
      }
  
      for(var i=160; i<250; i=i+60){
      blue_balloon=createSprite(150,i,10,10);
      blue_balloon.addImage(blue_balloonImage);
      blue_balloon.scale=0.1
          
      }
        
      for(var i=200; i<250; i=i+60){
      pink_balloon=createSprite(200,i,10,10);
      pink_balloon.addImage(pink_balloonImage);
      pink_balloon.scale=1.2
          
      } 
      }

function draw() {

        
     background.velocityX=-3;
     if(background.x<0){
     background.x=background.width/2
          
     }
        
     if (keyDown("space")){
     Arrow()
     }
        
     bow.y= World.mouseY;
     drawSprites();
     }

function Arrow(){
     arrow=createSprite(480,400,20,5)
     arrow.addImage(arrowImage)
     arrow.y=bow.y
     arrow.velocityX=-6
     arrow.scale=0.3
      }

