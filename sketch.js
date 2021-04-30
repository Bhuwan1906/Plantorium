var  backgroundImage;

var gameState = 0;

var rose,welcome,Buyinglink,app;
var Screen1;

var form, planter, game;



function setup(){
  canvas = createCanvas(400,400);
  rose= new Rose();
  app= new App();
  welcome=new Welcome ()
  buyinglink= new Buyinglink();
  screen1=new Screen1();

}


function draw(){
  if(gameState===1){
   welcome.display();

  }
  if(gameState===2){

  }
}
