var key,keys,keyImg,player1,gameState,cage,cageImg,hammer,hammerImg,stick,stickImg,axe,axeImg,boundary,ability,lives;

function preload(){

playerImg = loadImage("knight guy.png");
keyImg = loadImage("key bronze.png");
backgroundImg = loadImage("level1.png");
cageImg = loadImage("cage.png");
axeImg = loadImage("axe.png");
stickImg = loadImage("stick.png");
hammerImg = loadImage("hammer.png");
}

function setup(){

canvas = createCanvas(600,600)
edges = createEdgeSprites();
gameState = "level1";
ability = 0;

lives = 3;

key = createSprite(550,400,20,20);
key.addImage(keyImg);
key.scale = 0.5
keys = 0;
boundary = createSprite(300,300,600,10)


player1 = createSprite(100,500,20,20);
player1.addImage(playerImg);
player1.scale = 0.35



player1.velocityX = 0
player1.velocityY = 0

cage = createSprite(550,400,20,20);
cage.addImage(cageImg);
cage.scale = 0.3

hammer = createSprite(280,320,20,20)
hammer.addImage(hammerImg);
hammer.scale =2

stick = createSprite(60,400,20,20)
stick.addImage(stickImg);
stick.scale = 0.1

axe = createSprite(550,520,20,20);
axe.addImage(axeImg);
axe.scale = 0.15


//sprites and images

/*var barrels = createSprite(300,300,20,20);
var skeleton1 = createSprite(90,90,10,10);
var rubble1 = createSprite(310,220,20,20);
var rubble2 = createSprite(240,90,20,20);
var sword = createSprite(160,90,20,20);*/



//touched and nottouched

/*var skeleton1State = "nottouched";
var barrelsState = "nottouched";
var key1State = "nottouched";
var rubble2State = "nottouched";
var swordState = "nottouched";
var rubble1State = "nottouched";*/

//object state

/*var numSkeleton1Keys = 0;
var numKey1Keys = 0;
var numSwordKeys = 0;
var numRubble1Keys = 0;
var numRubble2Keys = 0;
var numBarrelsKeys = 0;*/

resetLives = false;
}

function draw() {

  background(backgroundImg);
  createEdgeSprites();
  console.log(keys);

  player1.collide(boundary)
  player1.collide(edges)
  boundary.visible = false


  if (gameState === "level1"){
  if(player1.isTouching(hammer)){
    hammer.visible = false;
    ability = 1
  }
  if(player1.isTouching(stick)||player1.isTouching(axe)){
    textSize(20);
    fill("red");
    text("That's not the right tool!",380,40)
  }

  if(ability == 1 && player1.isTouching(cage)){
    cage.visible = false;
  } else {
    player1.collide(cage);
  }
  fill("light_blue")
      textSize(20)
      text("Fine the correct tool,",20,20)
      text("to break the cage and proceed to ",20,40)
      text("the next level ",20,60)

      if(key.isTouching(player1)){
        keys = 1;
      }
  }




  /*if (gameState === "instructions") {
    text("Find the key to beat the level! ",100,125,textSize(20),fill("black"));
    text("it will be hidden behind objects,",85,150,textSize(20),fill("black"));
    text("Some objects are boobie traps,",60,175,textSize(20),fill("black"));
    text("Touching them will reduce 1 life.",60,200,textSize(20),fill("black"));
    text("upcoming levels will be harder and tougher",40,225,textSize(20),fill("black"));
    text("Enter 'S' to start.",80,280,textSize(30),fill("grey"));
    if (keyDown("s")) 
      gameState = "idle";
  }*/
  //else {
    drawSprites();

    

    if(ability === 1){
      textSize(20);
      fill("yellow");
      text("Bingo!!",530,20);
    }



    //feedback

    //text("Keys Found:",55,365,textSize(20),fill("red"));
    //text(KeysFound,180,365,textSize(20),fill("gold"));
    //text("Lives Left:",210,365,textSize(20),fill("red"));
   //text(lives,315,365,textSize(20),fill("gold"));
  
 
  //if (gameState === "idle") {
    //initGame();
    //gameState = "started";
  //}
  
  
  
  
    if (keyDown("UP_ARROW")) {
      player1.velocityY = -3; 
    } 
    if (keyWentUp("UP_ARROW")) {
      player1.velocityY = 0;
    }
    if (keyDown("DOWN_ARROW")) {
      player1.velocityY = 3;
    }
    if (keyWentUp("DOWN_ARROW")) {
      player1.velocityY = 0;
    }
    if (keyDown("RIGHT_ARROW")) {
      player1.velocityX = 3;
    }
    if (keyWentUp("RIGHT_ARROW")) {
      player1.velocityX = 0;
    }
    if (keyDown("LEFT_ARROW")) {
      player1.velocityX = -3;
    }
    if (keyWentUp("LEFT_ARROW")) {
      player1.velocityX = 0;
    }
 

  //For individual objects (trap and key)

  /*if (player1.isTouching(key1) && key1State === "nottouched"){
    key1State = "touched";   
    if (numKey1Keys === 1) {
      KeysFound = KeysFound + 1;
    } 
    else
      gameState = "trap";
  } */
  
  /*if (player1.isTouching(skeleton1) && skeleton1State === "nottouched"){
    skeleton1State = "touched"; 
    if (numSkeleton1Keys === 1) {
      KeysFound = KeysFound + 1;
      skeleton1.setAnimation("skelton2");
    }
    else
      gameState = "trap";
  } */
  
  /*if (player1.isTouching(rubble2) && rubble2State === "nottouched"){
    rubble2State = "touched";
    if (numRubble2Keys === 1) {
      KeysFound = KeysFound + 1;
      rubble2.setAnimation("rubble2");
    }
    else
      gameState = "trap";
  } */
  
  /*if (player1.isTouching(barrels) && barrelsState === "nottouched"){
    barrelsState = "touched";
    if (numBarrelsKeys === 1) {
      KeysFound = KeysFound + 1;
      barrels.setAnimation("barrel2");
    }
    else
      gameState = "trap";
  } */
  
  /*if (player1.isTouching(sword) && swordState === "nottouched") {
    swordState = "touched";
    if (numSwordKeys === 1) {
      KeysFound = KeysFound+1;
      sword.setAnimation("sword2");
    }
    else
      gameState = "trap";
  }*/
 
  /*if (player1.isTouching(rubble1) && rubble1State === "nottouched") {
    rubble1State = "touched";
    if (numRubble1Keys === 1) {
      KeysFound = KeysFound+1;
      rubble1.setAnimation("rubble2");
    }
    else
      gameState = "trap";
  }*/
  
  /*if (KeysFound === 1){
    
    gameState = "end";
    player1.velocityX = 0;
    player1.velocityY = 0;
  }*/
}
  
  if (gameState === "end") {
    //Next level 

   /* text("YOU WON!",140,200,textSize(20),fill("lime"));
    text("Click 'R' to restart",135,220,textSize(15),fill("lime"));
    resetLives = true;*/
  }
  
  if (gameState === "trap") {
    player1.velocityX = 0;
    player1.velocityY = 0;
    lives = lives - 1;
    if (lives > 0) {
      gameState = "tryagain";
    }
    else {
      resetLives = true;
      gameState = "restart";
    }
  }  
  
  if (gameState === "tryagain") {
    text("Oops! you triggered a trap!",105,180,fill("orange"),textSize(15));
    text("TRY AGAIN!",140,200,textSize(20),fill("lime"));
    text("Click 'R' to restart",135,220,textSize(15),fill("lime"));
  }
    
  if (gameState === "restart") {
    text("Oops! you triggered a trap!",105,180,fill("orange"),textSize(15));
    text("YOU LOSE!",140,200,textSize(20),fill("lime"));
    text("Click 'R' to restart",135,220,textSize(15),fill("lime"));
  }
    
  if (gameState === "end" || gameState === "tryagain" || gameState === "restart"){
    if (keyDown("r")) 
    gameState = "idle";
  }


function initGame() {
  /*numKey1Keys = 1;
  numSkeleton1Keys = randomNumber(0,1);
  numSwordKeys = randomNumber(0,1);
  numRubble1Keys = randomNumber(0,1);
  numRubble2Keys = randomNumber(0,1);
  numBarrelsKeys = randomNumber(0,1);*/
  
  //setting animation

  /*barrels.setAnimation("barrel");
  skeleton1.setAnimation("skelton");
  rubble1.setAnimation("rubble");
  rubble2.setAnimation("rubble");
  sword.setAnimation("sword1");
  treasure.setAnimation("treasureclose");*/
  //touchstate
  
  /*skeleton1State = "nottouched";
  barrelsState = "nottouched";
  key1State = "nottouched";
  rubble1State = "nottouched";
  rubble2State = "nottouched";
  swordState = "nottouched";*/
  
  if (resetLives === true) {
    lives = 3;
    resetLives = false;
  }
}
