var axe,axeImg,backImg,back,ironMan,IronImage1,IronImage2,IronImage3,IronImage4,man,manImage1,manImage2,manImage3,manImage4;
var life,lifeImg;
var zom,zomImg1,zomImg2,zomImg3,zomImg4;
var zx=0;
var zy=0;
var life1,life1Img,life2,life2Img,life3,life3Img,c,count=0, t,x1,y1,l1,b1,x2,y2,l2,b2,x3,y3,l3,b3;
var counter=3;
function preload(){

  manImage1=loadImage("MAN - Copy (7) - Copy.png");
  manImage2=loadImage("MAN - Copy (5) - Copy.png");
  manImage3=loadImage("MAN - Copy (4).png");
  manImage4=loadImage("MAN - Copy (6) - Copy.png");

  backImg=loadImage("back.png");

  axeImg1=loadImage("axe1.png");
  axeImg2=loadImage("axe2.png");
  axeImg3=loadImage("axe3.png");
  axeImg4=loadImage("axe4.png");

  zomImg1=loadImage("zomrun1.png");
  zomImg2=loadImage("zomrun2.png");
  zomImg3=loadImage("zomrun3.png");
  zomImg4=loadImage("zomrun4.png");

  life1Img=loadImage("life.png");
  life2Img=loadImage("life.png");
  life3Img=loadImage("life.png");

}

function setup(){
  createCanvas(displayWidth , displayHeight);
  
  back=createSprite(displayWidth/2, displayHeight/2,3600,3600);
  back.addImage("nn",backImg);
  back.scale=5;
  

  man=createSprite(displayWidth/2, displayHeight/2,10,10);
  man.addImage("mann",manImage1);
  man.scale=0.15;

  life1=createSprite(man.x-10, man.y+20,10,10);
  life1.addImage("sssdsa",life1Img);
  life1.scale=0.05;

  life2=createSprite(man.x, man.y+20,10,10);
  life2.addImage("sssdsa",life2Img);
  life2.scale=0.05;

  life3=createSprite(man.x+10, man.y+20,10,10);
  life3.addImage("sssdsa",life3Img);
  life3.scale=0.05;
  


 zom=createSprite(zx,zy,50,50);
  zom.addImage("ffv",zomImg1);
  zom.scale=0.5;
  

  camera.position=man;

  axe=createSprite(man.x,man.y,10,10);
  axe.addImage("ag",axeImg1);
  axe.scale=0.15;

  man.density=1;
  axe.density=0;

 
    
    
   
     
     
  };

function draw(){
  background(0);
  x1=life1.x;
  x2=life2.x;
  x3=life3.x;

  y1=life1.y;
  y2=life2.y;
  y3=life3.y;

  l1=life1.height;
  l2=life2.height;
  l3=life3.height;

  b1=life1.width;
  b2=life2.width;
  b3=life3.width;
  
  var diffx=man.x-zx;
  zx=zx+(diffx * 0.02);
  zom.x=zx;
 
  var diffy=man.y-zy;
  zy=zy+(diffy * 0.02);
  zom.y=zy; 
   
    
  zom.debug=true;
  
  

  
  if(keyDown("up_arrow")){
    man.addImage("mann",manImage1);
    man.y=man.y-3;

    axe.y=man.y+2;
    axe.addImage("ag",axeImg1);

    axe.x=man.x+30;
    axe.y=man.y-20;

  life1.x=man.x-10;
  life1.y=man.y+20;

  life2.x=man.x;
  life2.y=man.y+20;

  life3.x=man.x+10;
  life3.y=man.y+20;

  if(man.y < zom.y){
    zom.addImage("ffv",zomImg1);
    } 

    if(keyDown("r")){
      man.y=man.y-6;
    }
    
   }
  if(keyDown("right_arrow")){
    man.addImage("mann",manImage2);
    man.x=man.x+3;

    axe.x=man.x+30;
    axe.y=man.y+20;
    axe.addImage("ag",axeImg4);

  life1.x=man.x-20;
  life1.y=man.y+20;

  life2.x=man.x-20;
  life2.y=man.y;

  life3.x=man.x-20;
  life3.y=man.y-20;

 if(man.x > zom.x){
    zom.addImage("ffv",zomImg2); 
    }

    if(keyDown("r")){
      man.x=man.x+6;
    }

  }
  if(keyDown("down_arrow")){
    man.addImage("mann",manImage3);
    man.y=man.y+3;

    axe.y=man.y-2;
    axe.addImage("ag",axeImg3);
    axe.x=man.x-30;
    axe.y=man.y+20;

  life1.x=man.x-10;
  life1.y=man.y-20;

  life2.x=man.x;
  life2.y=man.y-20;

  life3.x=man.x+10;
  life3.y=man.y-20;

  if(man.y > zom.y){
    zom.addImage("ffv",zomImg3);
    }
   
    if(keyDown("r")){
      man.y=man.y+6;
    }

  }
  if(keyDown("left_arrow")){
    man.addImage("mann",manImage4);
    man.x=man.x-3;

    axe.x=man.x-2;
    axe.addImage("ag",axeImg2);
    axe.x=man.x-30;
    axe.y=man.y-20;

  life1.x=man.x+20;
  life1.y=man.y+20;

  life2.x=man.x+20;
  life2.y=man.y;

  life3.x=man.x+20;
  life3.y=man.y-20;

   if(man.x < zom.x){
    zom.addImage("ffv",zomImg4);   
    }

    if(keyDown("r")){
      man.x=man.x-6;
    }
      }
      
  axe.debug=true;
  man.debug=true;

  if(keyDown("space")&&axe.isTouching(zom)){
        zom.destroy();

  }
  
  if(zom.isTouching(man)){
  touchzom();
  }

  drawSprites();
}
function touchzom(){
  if(zom.isTouching(man)&&counter===3){
  setInterval(hlife1,10000);
  console.log(counter);
  counter=2;
}
if(zom.isTouching(man)&&counter===2){
  setInterval(hlife2,20000);
  console.log(counter);
  counter=1;
}
if(zom.isTouching(man)&&counter===1){
  setInterval(hlife3,30000);
  console.log(counter);
}
}
function hlife1(){
 
 life1.destroy();
 
}
function hlife2(){
  life2.destroy();
  
 }
 function hlife3(){
  life3.destroy();
  
 }
