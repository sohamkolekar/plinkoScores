const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
 
  var engine,world
  var  ground1
  var line
  var particle=null;
 
var turn=0;
var score=0
var gameState="play"
var plinkos = [];
var divisions =[];
var restart

var divisionHeight=300;
var score =0;

function setup() {
  
  engine = Engine.create();
  world = engine.world;
  createCanvas(800, 800);
  
//making vertical divisions in which ball falls
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, 630, 10, divisionHeight));
   }

   ground1=new Ground(width/2,790,width,20);

   //the static balls on the screen
    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

   
 
    Engine.run(engine)
}




function draw() {
  background("black");
  textSize(35)
  textStyle(BOLD)
 
  Engine.update(engine);
  
  //texts
 text("Score:"+ score,200,230);
 text("500",10,600);
 text("400",90,600);
 text("300",170,600);
 text("200",250,600);
 text("100",330,600);
 text("100",410,600);
 text("200",490,600);
 text("300",570,600);
 text("400",650,600);
 text("500",730,600);

 fill(190,150,0);
 rect(0,450,800,10);
 
 //displaying ground and static balls
  ground1.display();
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }

  /* if(keyCode===32){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/


   //displaying vertical divisions
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //conditions for increasing the score
   if(particle!==null){
    particle.display();
      if(particle.body.position.y>700){
         if(particle.body.position.x<87||particle.body.position.x>725){
              score=score+500;
              turn=turn=1
              particle=null;
            }
        
           /* if(particle.body.position.x>300 && particle.body.position.x<600){
                score=score+200;
               particle=null;
            }
            if(particle.body.position.x>600){
              score=score+100;
              particle=null;
            }*/

        }
   }


   if(particle!==null){
    particle.display();
      if(particle.body.position.y>700){
         if(particle.body.position.x<165 && particle.body.position.x>87||particle.body.position.x<725 && particle.body.position.x>645){
              score=score+400;
              turn=turn+1
              particle=null;
             
            }

          }
        }
        
        if(particle!==null){
          particle.display();
            if(particle.body.position.y>700){
               if(particle.body.position.x<245&&particle.body.position.x>165||particle.body.position.x<645&&particle.body.position.x>565){
                    score=score+300;
                    turn=turn+1
                    particle=null;
                  }
      
                }
              }

              if(particle!==null){
                particle.display();
                  if(particle.body.position.y>700){
                     if(particle.body.position.x<325&&particle.body.position.x>245||particle.body.position.x<565&&particle.body.position.x>485){
                          score=score+200;
                          turn=turn+1
                          particle=null;
                        }
            
                      }
                    }

                    if(particle!==null){
                      particle.display();
                        if(particle.body.position.y>700){
                           if(particle.body.position.x<405&&particle.body.position.x>325||particle.body.position.x<485&&particle.body.position.x>405){
                                score=score+100;
                                turn=turn+1
                                particle=null;
                              }
                  
                            }
                          }
      
//making game over after 5 turns
if(turn>=5){
gameState="end";
textSize(50)
text("GAME   OVER",200,350)
 //restart=createSprite(200,400)
/*if(keyCode===32){
  gameState="play";
  score=0;
}*/
}


//for debugging
console.log(turn)
console.log(mouseX)

   drawSprites();
}

//when space key is pressed, a colourfull ball falls
function keyPressed(){
  if(gameState!=="end"&&keyCode===32){
     score++
   particle=new Particle(mouseX, 10,10,10);
  
 // particles.display();
  }
}