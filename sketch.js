
var tijolo,bola,raquete,estadoJogo,bordas,vidas,pontuacao

function setup() {
  
 createCanvas(400,400)
estadoJogo='parado'
montarJogo()
pontuacao = 0
vidas = 3 

}
  
function draw(){
background(0)
textSize(15)
text('pontuação:'+ pontuacao,40,25)
text('vidas:'+ vidas,300,25)

if (estadoJogo == 'parado'){
tijolos.setVelocityYEach(0)
  
  
bola.velocitX= 0
bola.velocityY = 0
bola.x = 200
bola.y = 250 
  
raquete.velocityX= 0
raquete.velocityY= 0
raquete.x = 200
raquete.y = 350
  

textSize(20)
text('pressione "ESPAÇO"para iniciar',60,200)
if(keyDown("SPACE")){
tijolos.setVelocityYEach(0.2)
estadoJogo="play"
bola.velocityY = -5;
bola.velocityX = -6;  
}
   
  
}

if (estadoJogo == 'play'){
  
if(!tijolos[0]){
  
textSize(25)
text('PARABÉNS VOCÊ CONSEGUIU!',10,220)
bola.remove()
raquete.remove()
  
}
if(tijolos.isTouching(bordas[3])){
estadoJogo = 'gameOver'
  
}
fimDeJogo()
for(i = 0; i < 3;i ++){
bola.bounceOff(bordas[i]);

  
  
}
if(keyDown('left')){
raquete.velocityX = -5
  

}
if(keyDown('right')){
raquete.velocityX = +5
  
  
}
raquete.collide(bordas)  
bola.bounceOff(raquete)
bola.bounceOff(tijolos,removerTijolo)


  
  
if(estadoJogo== 'gameOver'){
tijolos.destroyEach()
textSize(30)
text('Game Over',110,220)
bola.remove()
raquete.remove()
  
  
  
  
  
}
}
  
drawSprites()
  


  
}
function fimDeJogo(){
      if(bola.y > 400){
             vidas = vidas -1
        
        if(vidas < 1){
               estadoJogo = 'gamerOver'
        }else{
          estadoJogo = 'parado'
          
          
          
          
          
          
          
          
        }
        
        
        
        
        
        
        
      }
  
  
  
  
  
  
  
}

















function removerTijolo(bola,tijolo){
tijolo.remove()
pontuacao = pontuacao +1 
  
  
  
}
  
function montarJogo(){
tijolos = createGroup()
criarLinha(0,'red')
criarLinha(29,'blue')
criarLinha(29+29,'yellow')
criarLinha(29+29+29,'green')
bordas=createEdgeSprites()
  
bola=createSprite(200,250,20,20)
bola.shapeColor = 'white'
  
  
raquete=createSprite(200,350,120,10)
raquete.shapeColor = 'white'

}


  
  function criarLinha(y,cor){
  for(i = 0;i<=5;i++){
    
    tijolo = createSprite(65+54 * i,50+y,50,25)
tijolo.shapeColor=cor
    tijolos.add(tijolo)
  }


  
    
    
    
    
}