var dog, dogImage;

var monster1,monsterimage;

var fairy1,fairy1image;
var fairy2,fairy2image;

var backgroundImg;

var ci1,ci2,ci3,i4,ci5,ci6,ci7,ci8,ci9,
ci10,ci11,ci12,ci13,ci14,ci15,
ci16,ci17,ci18,ci19,ci20,ci21,ci22 ,ci23,ci24,ci25;

var cardboard1,cardboard2,cardboard3, cardboard4,cardboard5,cardboard6,cardboard7,cardboard8,
cardboard9,cardboard10,cardboard11,cardboard12,cardboard13,cardboard14,cardboard15,cardboard16,
cardboard17,cardboard18,cardboard19,cardboard20,cardboard21,cardboard22,cardboard23,cardboard24,
cardboard25;

var edges;

var score;

var sadGirl,happyGirl,happy,sad;

var pallet1, pallet2,chicken1,chicken2;



function preload(){
  dogImage = loadImage("pug.png");

  fairy1image = loadImage("fairy.png")

  monsterimage = loadImage("monster.png")

  backgroundImg = loadImage("sand.jpg")

  ci1 = loadImage("hb.png")

  happy = loadImage("happy.jpeg")
 
  sad = loadImage("sad.jpeg")

  chicken1 = loadImage("chicken.png")


    }
  
function setup() {
  createCanvas(600,600);

  pallet1 = createSprite(240,61,20,20)
  pallet1.addImage(chicken1)

  pallet1.scale = 0.20

  pallet2 = createSprite(235,434,20,20)
  pallet2.addImage(chicken1)

  pallet2.scale = 0.20

  

  sadGirl = createSprite(550,553,20,20)
  sadGirl.addImage(sad)

  sadGirl.scale = 0.20


  monster1 = createSprite(500,395,50,50);
  monster1.addImage(monsterimage)

  monster1.scale = 0.1
  
  dog = createSprite(49, 116, 50, 50);
  dog.addImage(dogImage)

  dog.scale = 0.2
  

  cardboard1 = createSprite(20,170,150,20);
  cardboard1.shapeColor = "brown"

  cardboard2 = createSprite(90,130,20,100);
  cardboard2.shapeColor = "brown"

  cardboard3 = createSprite(200,100,20,760);
  cardboard3.shapeColor = "brown"
cardboard3.debug = "true"
  cardboard4 = createSprite(120,250,150,20);
  cardboard4.shapeColor = "brown"

  cardboard5 = createSprite(70,350,150,20);
  cardboard5.shapeColor = "brown"

  cardboard6= createSprite(120,450,150,20);
  cardboard6.shapeColor = "brown"

  cardboard7 = createSprite(90,570,20,70);
  cardboard7.shapeColor = "brown"
  cardboard7.debug = 'true';


  cardboard8 = createSprite(350,310,20,500);
  cardboard8.shapeColor = "brown"
  cardboard8.debug = true;

  cardboard9 = createSprite(250,550,200,20);
  cardboard9.shapeColor = "brown"
  
  cardboard10 = createSprite(230,400,60,20);
  cardboard10.shapeColor = "brown"
 
  cardboard11 = createSprite(260,400,20,200);
  cardboard11.shapeColor = "brown"

  cardboard12 = createSprite(300,220,100,20);
  cardboard12.shapeColor = "brown"
  cardboard12.debug = 'true';


  cardboard13 = createSprite(240,100,100,20);
  cardboard13.shapeColor = "brown"

  cardboard14 = createSprite(450,50,20,100);
  cardboard14.shapeColor = "brown"

  cardboard15 = createSprite(450,160,180,20);
  cardboard15.shapeColor = "brown"

  cardboard16 = createSprite(530,100,20,100);
  cardboard16.shapeColor = "brown"

  cardboard17 = createSprite(530,240,200,20);
  cardboard17.shapeColor = "brown"

  cardboard18 = createSprite(430,340,20,220);
  cardboard18.shapeColor = "brown"

  cardboard21 = createSprite(430,508,150,20);
  cardboard21.shapeColor = "brown"

  cardboard19 = createSprite(495,415,20,200);
  cardboard19.shapeColor = "brown"
  cardboard19.debug = 'true';

  cardboard20 = createSprite(350,586,20,80);
  cardboard20.shapeColor = "brown"





  fairy1 = createSprite(280,202,50,50)
  fairy1.addImage(fairy1image);
  fairy1.scale = 0.15;
  fairy1.velocityX=4;

  cardboard7.velocityY = 2;
  cardboard11.velocityY=3;

  monster1.velocityX=3

  score = 0;
}



function draw() {
  background(backgroundImg); 
  fill("black")
  text("Survival Time: "+ score, 21,21);
  score = score + Math.round(getFrameRate()/62); 

  fill("blue")
  text(mouseX+" : " + mouseY,mouseX,mouseY);

 
 

if(keyDown("RIGHT_ARROW")){
dog.x = dog.x + 2; 
}

if(keyDown("LEFT_ARROW")){
  dog.x = dog.x - 2; 
  }

  if(keyDown("UP_ARROW")){
    dog.y = dog.y - 2; 
    }

  if(keyDown("DOWN_ARROW")){
      dog.y = dog.y + 2; 
      }
    
  if(dog.isTouching(sadGirl)){
    sadGirl.addImage(happy)
  }  


  if(dog.x>240){
    if(keyDown("RIGHT_ARROW")){
      dog.x = dog.x + 2; 
      }
      
      if(keyDown("LEFT_ARROW")){
        dog.x = dog.x - 2; 
        }
      
        if(keyDown("UP_ARROW")){
          dog.y = dog.y - 2; 
          }
      
        if(keyDown("DOWN_ARROW")){
            dog.y = dog.y + 2; 
            }

  }
   if(dog.isTouching(pallet1)){
     pallet1.destroy();
   } 

   if(dog.isTouching(pallet2)){
    pallet2.destroy();
  } 
  
dog.collide(cardboard1);
dog.collide(cardboard2);
dog.collide(cardboard3);
dog.collide(cardboard4);
dog.collide(cardboard5);
dog.collide(cardboard6);
dog.collide(cardboard7);
dog.collide(cardboard8);
dog.collide(cardboard9);
dog.collide(cardboard10);
dog.collide(cardboard11);
dog.collide(cardboard12);
dog.collide(cardboard13);
dog.collide(cardboard14);
dog.collide(cardboard15);
dog.collide(cardboard16);
dog.collide(cardboard17);
dog.collide(cardboard18);
dog.collide(cardboard19);
dog.collide(cardboard20);
dog.collide(cardboard21);
edges = createEdgeSprites();


  fairy1.bounceOff(cardboard8);
  fairy1.bounceOff(cardboard3);
  fairy1.debug = true;
  fairy1.setCollider("rectangle",0,0,30,10);

  //cardboard6.debug = 'true';
  cardboard7.bounceOff(cardboard6);
  cardboard7.bounceOff(edges);
  cardboard11.bounceOff(cardboard9);
  cardboard11.bounceOff(cardboard12);

  monster1.bounceOff(cardboard19);
  monster1.bounceOff(edges);

  dog.collide(edges);


  if(dog.isTouching(monster1)||dog.isTouching(fairy1)){
    dog.x=49;
    dog.y=116;
  }

  

  drawSprites();
}