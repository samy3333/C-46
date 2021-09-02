
var player1, player2, player3, player4;
var enemy1, enemy2, enemy3;
var ghost;
var king;
var Gamestate= "Start";
var ground_2;
var castle
var vaccine, vaccineimg;
var securityimg;
var security;


function preload(){
kingimg=loadImage("king1.png")
Bg= loadImage("ground.jpg");
player_4= loadAnimation("right_down_character.png", "left_down_character.png");
enemy2= loadImage("enemy2 right.png");
ground_2= loadImage("ground.jpg");
castleimg= loadImage("Castle.jpg");
vaccineimg= loadImage("Doctor.png");
securityimg= loadImage("securityperson.png");


}

function setup(){
createCanvas(1200, 620);

}

function draw(){


KeyPressed()



if(Gamestate==="Start"){

    king= createSprite(530, 540);
    king.addImage("King", kingimg);
    king.scale= 0.25

    vaccine= createSprite(570, 560);
    vaccine.addImage("Vaccine", vaccineimg);
    vaccine.scale= 0.6;

    security= createSprite(610, 550);
    security.addImage("Security", securityimg);
    security.scale= 0.2
    


    background(castleimg);
    textSize(30);
    fill("white");
    text("Keep pressing the Right arrow key", 750, 570);
    
    textSize(20);
    fill("red")
    text("A long time ago, a country was suffering with a disease and a kingdom has found a cure.", 30, 30);
    
    
    king.depth== background.depth+1;
    

    
}

if(Gamestate==="Play"){
    background(ground_2);

    player4= createSprite(600, 550);
    player4.addAnimation("Player4", player_4);
    player4.scale= 0.5;

    player4.depth= background.depth +1;

    if(keyCode===UP_ARROW){
        player4.x= player4.x+20;
}

    
    
    

}

if (Gamestate==="Enemies"){
background("black");
}
drawSprites()


}

function KeyPressed(){
    if(keyCode===RIGHT_ARROW){
        Gamestate= "Enemies";
    }
    if(keyCode===LEFT_ARROW){
        Gamestate= "Play";
}
}