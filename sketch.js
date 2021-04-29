//declaring variables
var surprise,surpriseImg;
var SERVE = 0;
var PLAY = 1;
var END = 2;
var gameState = 0;
var p1,p1Img;
var p2,p2Img;
var p3,p3Img;
var gif,gif2,gifImg;
var h1,h1Img;
var h2,h2Img;
var diadem,diademImg;
var next;
var hbday,hbdayImg;
var balloon,balloonImg,balloon1;
var gift,giftImg;
var hbdaysound;
var ph,phImg;
var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x,y,z;
var aa,bb,cc,dd,ee,ff,gg,hh,ii,jj,kk,ll,mm,nn,oo,pp,qq,rr,ss,tt,uu,vv;
var g1,g2,g3,g4,g5;
var g1Img,g2Img,g3Img,g4Img,g5Img;
var blackDot,blackDotImg;
var position = 395;
var count = 0;
var dingSound;
var fairyDoor,fairyDoorImg;
var count = 0;
var bgImg;
var bgImg2;
var cake,cakeImg;
var bh1,bhGif;
var heartBorder,heartBorderImg;

function preload(){
  //loading images and sounds
  surpriseImg = loadImage('surprise.png');
  p1Img = loadImage('p1.jpg');
  p2Img = loadImage('p2.JPG');
  p3Img = loadImage('p3.JPG');
  gifImg = loadImage('gif.gif');
  diademImg = loadImage('diadem.png');
  hbdayImg = loadImage('hbay.png');
  balloonImg = loadImage('b.png');
  giftImg = loadImage('g.png');
  phImg = loadImage('ph.png');
  g1Img = loadImage('g1.png');
  g2Img = loadImage('g2.png');
  g3Img = loadImage('g3.png');
  g4Img = loadImage('g4.png');
  g5Img = loadImage('g5.png');
  blackDotImg = loadImage('blackDot.png');
  fairyDoorImg = loadImage('fairyDoor.png');
  bgImg = loadImage('bgImg.jpg');
  bgImg2 = loadImage('bgImg2.jpg');
  cakeImg = loadImage('cake.png')
  heartBorderImg = loadImage('heartBorder.png');
  hbdaysound = loadSound('hbdaysound.mp3');
  dingSound = loadSound('dingSound.mp3');
}

function setup() {
  //creating canvas
  createCanvas(600,600);
  
  //creating sprites
  surprise = createSprite(300,300);
  surprise.addImage(surpriseImg);
  
  ph = createSprite(60,130);
  ph.addImage(phImg);
  ph.scale = 0.3;
  ph.setCollider('circle',0,0,200);
  
  g1 = createSprite(150,480);
  g1.addImage(g2Img);
  g1.scale = 0.06;
  
  g2 = createSprite(480,110);
  g2.addImage(g1Img);
  g2.scale = 0.1;
  
  g3 = createSprite(260,95,20,20);
  g3.addImage(g3Img);
  g3.scale = 0.01;
  
  g4 = createSprite(152,225,20,20);
  g4.addImage(g4Img);
  g4.scale = 0.2;
  
  g5 = createSprite(485,310,20,20);
  g5.addImage(g5Img);
  g5.scale = 0.08;
  
  blackDot = createSprite(548,535);
  blackDot.addImage(blackDotImg);
  blackDot.scale = 0.04;
  
  a = createSprite(320,75,390,10);
  b = createSprite(130,333,10,450);
  c = createSprite(170,100,10,40);
  d = createSprite(510,300,10,450);
  e = createSprite(150,160,40,10);
  f = createSprite(210,120,10,90);
  g = createSprite(170,200,90,10);
  h = createSprite(320,553,390,10);
  i = createSprite(175,230,10,60);
  j = createSprite(265,120,40,10);
  k = createSprite(250,165,10,80);
  l = createSprite(280,165,10,80);
  m = createSprite(157,290,45,10);
  n = createSprite(350,165,70,10);
  o = createSprite(360,140,10,60);
  p = createSprite(360,200,100,10);
  q = createSprite(460,115,10,80);
  r = createSprite(430,115,50,10);
  s = createSprite(410,220,10,50);
  t = createSprite(390,240,50,10);
  u = createSprite(270,240,110,10);
  v = createSprite(220,310,10,80);
  w = createSprite(460,215,10,80);
  x = createSprite(155,510,40,10);
  y = createSprite(190,320,50,10);
  z = createSprite(160,350,10,70);
  aa = createSprite(200,380,80,10);
  bb = createSprite(170,460,10,95);
  cc = createSprite(210,465,10,105);
  dd = createSprite(255,465,80,10);
  ee = createSprite(290,275,80,10);
  ff = createSprite(255,310,10,80);
  gg = createSprite(305,300,50,10);
  hh = createSprite(280,322.5,10,55);
  ii = createSprite(260,417.5,90,10);
  jj = createSprite(350,465,10,100);
  kk = createSprite(310,512.5,90,10);
  ll = createSprite(360,310,10,80);
  mm = createSprite(360,345,100,10);
  nn = createSprite(450,282.5,110,10);
  oo = createSprite(395,295,10,35);
  pp = createSprite(360,380,110,10);
  qq = createSprite(460,325,10,80);
  rr = createSprite(430,420,70,10);
  ss = createSprite(395,465,10,100);
  tt = createSprite(460,465,10,100);
  uu = createSprite(409,510,35,10);
  vv = createSprite(440,460,35,10);
  
  fairyDoor = createSprite(130,90);
  fairyDoor.addImage(fairyDoorImg);
  fairyDoor.scale = 0.1;
  fairyDoor.setCollider('circle',0,0,200);
  
  p1 = createSprite(300,130);
  p1.addImage(p1Img);
  p1.scale = 0.2;
  
  p2 = createSprite(150,160);
  p2.addImage(p2Img);
  p2.scale = 0.2;
  
  p3 = createSprite(480,160);
  p3.addImage(p3Img);
  p3.scale = 0.2;
   
  diadem = createSprite(300,350);
  diadem.addImage(diademImg);
  diadem.scale = 0.6;
  
  hbday = createSprite(300,475);
  hbday.addImage(hbdayImg);
  hbday.scale = 0.8;
  
  balloon = createSprite(80,150);
  balloon.addImage(balloonImg);
  balloon.scale = 0.8;
  
  balloon1 = createSprite(580,150);
  balloon1.addImage(balloonImg);
  balloon1.scale = 0.8;
  
  gift = createSprite(540,350);
  gift.addImage(giftImg);
  gift.scale = 0.5;
  
  cake = createSprite(70,350);
  cake.addImage(cakeImg);
  cake.scale = 0.4;

  gif = createSprite(550,520);
  gif.addImage(gifImg);
  gif.scale = 0.4;

  gif2 = createSprite(50,520);
  gif2.addImage(gifImg);
  gif2.scale = 0.4;

  heartBorder = createSprite(300,300);
  heartBorder.addImage(heartBorderImg);
  heartBorder.scale = 1.3;
}

function draw() {
  background("lightblue");
  
  //gameState commands
  if(gameState === 0){
    background(bgImg);
    
  //giving commands to move the black dot with arrow keys
   if(keyDown("up")){
  console.log(blackDot.position.y);
  blackDot.position.y -=3;
}

if(keyDown("down")){
  console.log(blackDot.position.y);
  blackDot.position.y +=3;
}

if(keyDown("right")){
  console.log(blackDot.position.x);
  blackDot.position.x +=3;
}

if(keyDown("left")){
  console.log(blackDot.position.x);
  blackDot.position.x -=3;
}
  
  if(blackDot.isTouching(g1)){
      g1.destroy();
      dingSound.play();
      count++;
    }
    
  if(blackDot.isTouching(g2)){
      g2.destroy();
      dingSound.play();
      count++;
    }
  
  if(blackDot.isTouching(g3)){
      g3.destroy();
      dingSound.play();
      count++;
    }
  
  if(blackDot.isTouching(g4)){
      g4.destroy();
      dingSound.play();
      count++;
    }
  
  if(blackDot.isTouching(g5)){
      g5.destroy();
      dingSound.play();
      count++;
    }
  
  if(count === 5){
    fairyDoor.destroy();
  }
  
  blackDot.collide(a);
  blackDot.collide(b);
  blackDot.collide(c);
  blackDot.collide(d);
  blackDot.collide(e);
  blackDot.collide(f);
  blackDot.collide(g);
  blackDot.collide(h);
  blackDot.collide(i);
  blackDot.collide(j);
  blackDot.collide(k);
  blackDot.collide(l);
  blackDot.collide(m);
  blackDot.collide(n);
  blackDot.collide(o);
  blackDot.collide(p);
  blackDot.collide(q);
  blackDot.collide(r);
  blackDot.collide(s);
  blackDot.collide(t);
  blackDot.collide(u);
  blackDot.collide(v)
  blackDot.collide(w);
  blackDot.collide(x);
  blackDot.collide(y);
  blackDot.collide(z);
  blackDot.collide(aa);
  blackDot.collide(bb);
  blackDot.collide(cc);
  blackDot.collide(dd);
  blackDot.collide(ee);
  blackDot.collide(ff);
  blackDot.collide(gg);
  blackDot.collide(hh);
  blackDot.collide(ii);
  blackDot.collide(jj);
  blackDot.collide(kk);
  blackDot.collide(ll);
  blackDot.collide(mm);
  blackDot.collide(nn);
  blackDot.collide(oo);
  blackDot.collide(pp);
  blackDot.collide(qq);
  blackDot.collide(rr);
  blackDot.collide(ss);
  blackDot.collide(tt);
  blackDot.collide(uu);
  blackDot.collide(vv);
 // blackDot.collide(fairyDoor);
  
    //text and its styling
    textSize(30);
    
    fill('red');
    text('P',10,50);
    
    fill('indigo');
    text('A',30,50);
    
    fill('blue');
    text('R',50,50);
    
    fill('green');
    text('T',70,50);
    
    fill('purple');
    text('Y',90,50);
    
    fill('brown');
    text('T',120,50);
    
    fill('magenta');
    text('I',140,50);
    
    fill('red');
    text('M',150,50);
    
    fill('purple');
    text('E',175,50);
    
    fill('green');
    text('!!',195,50);
    
    //Visbility
    surprise.visible = false;
    p1.visible = false;
    p2.visible = false;
    p3.visible = false;
    diadem.visible = false;
    balloon.visible = false;
    balloon1.visible = false;
    hbday.visible = false;
    gift.visible = false;
    cake.visible = false;
    gif.visible = false;
    gif2.visible = false;
    heartBorder.visible = false;
    
  if(blackDot.isTouching(ph)){
     gameState = 1;
  }
  }
  
  else if(gameState === 1){
    surprise.visible = true;
    p1.visible = false;
    p2.visible = false;
    p3.visible = false;
    diadem.visible = false;
    balloon.visible = false;
    balloon1.visible = false;
    hbday.visible = false;
    gift.visible = false;
    cake.visible = false;
    heartBorder.visible = true;
    a.visible = false;
    b.visible = false;
    c.visible = false;
    d.visible = false;
    e.visible = false;
    f.visible = false;
    g.visible = false;
    h.visible = false;
    i.visible = false;
    j.visible = false;
    k.visible = false;
    l.visible = false;
    m.visible = false;
    n.visible = false;
    o.visible = false;
    p.visible = false;
    q.visible = false;
    r.visible = false;
    s.visible = false;
    t.visible = false;
    u.visible = false;
    v.visible = false;
    w.visible = false;
    x.visible = false;
    y.visible = false;
    z.visible = false;
    aa.visible = false;
    bb.visible = false;
    cc.visible = false;
    dd.visible = false;
    ee.visible = false;
    ff.visible = false;
    gg.visible = false;
    hh.visible = false;
    ii.visible = false;
    jj.visible = false;
    kk.visible = false;
    ll.visible = false;
    mm.visible = false;
    nn.visible = false;
    oo.visible = false;
    pp.visible = false;
    qq.visible = false;
    rr.visible = false;
    ss.visible = false;
    tt.visible = false;
    uu.visible = false;
    vv.visible = false;
    ph.visible = false;
    blackDot.visible = false;
    gif.visible = false;
    gif2.visible = false;
    
    textSize(30);
    fill('magenta'); 
    stroke('red'); 
    text('Click on',250,50);

    if(mousePressedOver(surprise)){
      gameState = 2;
      hbdaysound.play();
    }
  }
  
  else if(gameState === 2){
    background(bgImg2);
    
    surprise.visible = false;
    diadem.visible = true;
    balloon.visible = true;
    balloon1.visible = true;
    hbday.visible = true;
    gift.visible = true;
    p1.visible = true;
    p2.visible = true;
    p3.visible = true;
    cake.visible = true;
    gif.visible = true;
    gif2.visible = true;
    heartBorder.visible = false;
  }
  
  drawSprites();
  //text(mouseX+","+mouseY,mouseX,mouseY);
}
