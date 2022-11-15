
var robots,robotsImg;
var laberinto,laberintoImg;
var laceres,laceresImg,laceresGroup;
var laceres2,laceres2Img,laceres2Group;
var laceres3,laceres3Img,laceres3Group;
var gamerover,gameroverImg;
var energia,energiaImg;
var robotr,robotrImg;
var mortales,mortalesImg,mortalesGroup;
var mortales2,mortales2Img,mortales2Group;
var mortales3,mortales3Img,mortales3Group;


var PLAY=1;
var END=0;
var gameState=PLAY;

function preload (){
robotrImg = loadImage("robotrapy.png");
robotsImg = loadImage ("sadrobot.png");
laberintoImg = loadImage ("laberinto.png");
energiaImg= loadImage ("bateria.png");
  mortalesImg= loadImage("mortales.png");
  mortales2Img= loadImage("mortales.png");
  mortales3Img= loadImage("mortales.png");
    laceresImg = loadImage("laceres.png");
    laceres2Img = loadImage("laceres.png");
    laceres3Img = loadImage("laceres.png");
gameoverImg = loadImage("gameover.png");

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  robots=createSprite(200,100,50,50);
robots.addImage(robotsImg);
robots.scale=0.02;



  if (keyIsDown(UP_ARROW)){
    robots.velocityY +=10;
    
  }
  if (keyIsDown(LEFT_ARROW)){
   
    robots.velocityX +=10;
  }
  if (keyIsDown(RIGHT_ARROW)){
    
    robots.velocityX +=10;
  }
  if (keyIsDown(DOWN_ARROW)){
    robots.velocityY +=10;
    
  }
        laceresGroup=new Group ();
        laceres2Group=new Group ();
        laceres3Group=new Group ();
       mortalesGroup=new Group ();
      mortales2Group=new Group ();
    mortales3Group=new Group ();
}

function draw() {
  background(0);  




  if (energia.isTouching(robots)){
  gameState=END;
  robots.addImage(robotrImg);
  textSize(20);
  fill(233);
  text("muy bien lo lograste!!:)",200,200,50,50);

  }
  edges=createEdgesSprites();
robots.collide(edges);


        createLaceres();
        createLaceres2();
        createLaceres3();
            createMortales();
          createMortales2();
          createMortales3();

      if (laceresGroup.isTouching(robots)){
      gameState=END;
      robots.addImage(gameoverImg);

      }
      if (laceres2Group.isTouching(robots)){
        gameState=END;
        robots.addImage(gameoverImg);
  
        }
        if (laceres3Group.isTouching(robots)){
          gameState=END;
          robots.addImage(gameoverImg);
    
          }
          if (mortalesGroup.isTouching(robots)){
            gameState=END;
            robots.addImage(gameoverImg);
      
            }
            if (mortales2Group.isTouching(robots)){
              gameState=END;
              robots.addImage(gameoverImg);
        
              }
              if (mortales3Group.isTouching(robots)){
                gameState=END;
                robots.addImage(gameoverImg);
          
                }
                              




  drawSprites();
}
function createLaceres(){
  var laceres = createSprite(Math.round(random(50,width-50),40,10,10));
  laceres.addImage(laceresImg);
  laceres.scale=0.10;
  laceres.velocityX=5;
  laceres.lifetime=200;
}
function createLaceres2(){
  var laceres2 = createSprite(Math.round(random(50,width-10),20,25,40));
  laceres2.addImage(laceres2Img);
  laceres2.scale=0.10;
  laceres2.velocityX=5;
  laceres2.lifetime=200;
}
function createLaceres3(){
  var laceres3 = createSprite(Math.round(random(50,width-100),20,35,10));
  laceres3.addImage(laceres3Img);
  laceres3.scale=0.10;
  laceres3.velocityX=5;
  laceres3.lifetime=200;
}
function createMortales(){
  var mortales = createSprite(Math.round(random(25,width-25),30,50,10));
 mortales.addImage(mortalesImg);
  mortales.scale=0.10;
mortales.velocityY=5;
  mortales.lifetime=200;
}
function createMortales2(){
  var mortales2 = createSprite(Math.round(random(30,width-30),20,15,18));
  mortales2.addImage(mortales2Img);
  mortales2.scale=0.10;
  mortales2.velocityY=5;
  mortales2.lifetime=200;
}
function createMortales3(){
  var mortales3= createSprite(Math.round(random(50,width-50),70,60,80));
  mortales3.addImage(mortales3Img);
  mortales3.scale=0.10;
  mortales3.velocityY=5;
  mortales3.lifetime=200;
}