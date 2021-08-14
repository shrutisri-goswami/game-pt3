var bird;
var birdImg;
var treeImg, treeImg2;
var backgroundImg;
var ground;

function preload() {
    backgroundImg = loadImage('images/Background.jpg');
    birdImg = loadAnimation('images/Bird1.PNG', 'images/Bird2.PNG', 'images/Bird3.PNG', 'images/Bird4.PNG', 'images/Bird5.PNG', 'images/Bird6.PNG', 'images/Bird7.PNG', 'images/Bird8.PNG', 'images/Bird9.PNG');
    treeImg = loadImage('images/Tree.png');
    treeImg2 = loadImage('images/Tree2.jpg');
    coinImg = loadImage('images/Coin.jpg');
}

function setup() {
    createCanvas(1500, 700);
    ground = createSprite(630, 350);
    ground.addImage(backgroundImg);
    ground.scale = 2
    ground.velocityX = -2;
    bird = createSprite(100, 300, 50, 50);
    bird.addAnimation('bird', birdImg);

}

function draw() {
    background("white");

    if (ground.x < 250) {
        ground.x = ground.width / 2
    }
   
    if(keyDown(UP_ARROW)){
        bird.y = bird.y-10
    }
    if(keyDown(DOWN_ARROW)){
        bird.y = bird.y+10
    }
   
    spawnObstacles();
    spawnCoins();

    drawSprites();
    
    textSize(30);
    text("Score:",750,50);
    
}


function spawnObstacles() {
    if(frameCount % 260 === 0){
        var obstacle = createSprite(1500,450,50,50);
        var x = Math.round(random(1,2))
        switch(x){
            case 1: obstacle.addImage('tree', treeImg);
            obstacle.scale=0.3;
            break;
            case 2: obstacle.addImage('tree', treeImg2);
            obstacle.scale=1.5
            break;

            default: break;
        }
       
        obstacle.velocityX = -5;
    }
}

function spawnCoins(){
    for(i = 200; i <1500 ; i=i+50){
        var coins= createSprite(200,500,10,10);
        coins.addImage('coin', coinImg); 
    }
}





