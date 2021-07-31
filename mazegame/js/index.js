var namespace = "http://www.w3.org/2000/svg";
// const myMaze = [
//     [1,0,1,1,1,1,1,1,1,0,1,1,1,1],//14
//     [1,0,0,1,1,1,1,1,1,1,1,1,1,1],
//     [1,0,0,0,1,1,1,0,1,1,0,0,0,1],
//     [1,0,1,0,0,0,1,1,0,1,0,1,1,1],
//     [1,0,1,1,1,0,0,1,1,0,0,1,1,1],
//     [1,0,1,1,1,1,0,0,0,0,1,0,1,1],
//     [1,0,1,1,1,1,0,0,1,0,0,0,0,0],
//     [1,0,1,1,1,1,1,1,1,1,1,1,0,1],
//     //8
// ]
var gameCompleted = false;
var timeUp = false;
const log = document.getElementById('log');

document.addEventListener('keydown', (e)=>{
    if(gameCompleted || timeUp){
        return;
    }
    var key = e.key;
   
    switch(key){
        case 'w':
        case 'ArrowUp':    
        {
            movePlayerUp();
            break;
        }
        case 's':
        case 'ArrowDown':    
        {
            movePlayerDown();
            break;
        }

        case 'a':
        case 'ArrowLeft':    
        {
            movePlayerLeft();
            break;
        }
        case 'd':
        case 'ArrowRight':    
        {
            movePlayerRight();
            break;
        }


    }
});


const myMazeEasy = [
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1],
    [1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1],
    [0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],

];
const myMazeHard = [
[1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
[1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0],
[1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0],
[0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0],
[1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0],
[1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
[1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
[1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1],
[1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
[0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 1],
[1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
[1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
[1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
[0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
[1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
[1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
[1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1],
[1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1],
[1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1],
[1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
[1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
[1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
[0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
[1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
[1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
];

var myMaze;
// make rectangle
function makeRect(x, y, width, height, fill, opacity, id = false) {
    var rect = document.createElementNS(namespace, "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("opacity", opacity);
    // rect.setAttribute("stroke","brown");
    if(id !== false){
        rect.setAttribute("id",id);
        rect.setAttribute("class","collectables")
    }
    var maze = document.getElementById("maze");
    maze.appendChild(rect);
    return rect;
  }
  
  var x = 0;
  var y = 0;
  var playerLocationX = 0;
  var playerLocationY = 0;
  var playerMatrixX = 0;
  var playerMatrixY = 0;
  var steps = 0;
  var collectables = 0;

  // rendering the maze
  function createMaze(){
        
        for(var i = 0; i < myMaze.length; i++){
            for(var j = 0; j < myMaze[0].length; j++){
               
                
                if(myMaze[i][j] === 1){
                    if(i==0 && j == 0){
                        makeRect(x,y,20,20,"green",1);
                    } 
                    else if(i == (myMaze.length-1) && j == (myMaze[0].length-1)){
                        makeRect(x,y,20,20,"purple",1);
                    }
                    else {
                        
                        makeRect(x,y,20,20,"black",1);
                        if(Math.random() < 0.1){
                            console.log(makeRect(x+7,y+7,5,5,"red",1,i+','+j));
                            // collectables.push([i,j]);
                            // console.log(collectables);
                        }
                    }
                } 
                
                else {
                    makeRect(x,y,20,20,"black",0.5);    
                }
                x = x + 20;
              
            }
           
            y = y + 20;
            x = 0;
           
        }
        
  }
 
// rendering the player
  function makePlayer(){
    
    var player = document.createElementNS(namespace, "circle");
            player.setAttribute("cx",10);
            player.setAttribute("cy",10);
            player.setAttribute("r",7);
            player.setAttribute("fill","yellow");

    var g = document.createElementNS(namespace, "g");
        g.setAttribute("id","player");
        g.appendChild(player);
   
    var maze = document.getElementById("maze");
    maze.appendChild(g);
    //   makeRect(playerLocationX,playerLocationY,20,20,"yellow",1,true);
  }
  // function call on game complete
  function gameComplete(){
    const p = document.createElement("p");
    p.setAttribute("id","complete")
    const text = document.createTextNode("Congrats, You have Completed the Maze.");
    p.appendChild(text);
      var log = document.getElementById("log");
      log.appendChild(p);
  
     gameCompleted = true; 
  }
// moving the player
  function movePlayer(){
    var player = document.getElementById("player");
    var toSet = 'translate('+ playerLocationX+','+playerLocationY+')'
    player.setAttribute('transform',toSet);

    steps++;
    
    document.getElementById('stepsCount').textContent = steps;

    
    try{
        document.getElementById(playerMatrixX+','+playerMatrixY).remove();
        
        
        collectables++;
        document.getElementById('collectables').textContent = collectables;
       
    }
    catch(e){
       
    }


    if(playerMatrixX === (myMaze.length-1) && playerMatrixY === (myMaze[0].length-1)){
        gameComplete();
       
    }
  }

  function movePlayerLeft(){
    
    if(playerMatrixY === 0){
        return;
    }
    
    playerLocationX = playerLocationX - 20;
    playerMatrixY = playerMatrixY - 1;
        
        if(myMaze[playerMatrixX][playerMatrixY] === 1){
            movePlayer();
        } else {
            playerLocationX = playerLocationX + 20;
            playerMatrixY = playerMatrixY + 1;
        }
    
  }

  function movePlayerRight(){
  
    if(playerMatrixY === (myMaze[0].length-1)){
        return;
    }
    playerLocationX = playerLocationX + 20;
    playerMatrixY = playerMatrixY + 1;
    if(myMaze[playerMatrixX][playerMatrixY] === 1){
        movePlayer();
    } else {
        playerLocationX = playerLocationX - 20;
        playerMatrixY = playerMatrixY - 1;
    }
        
    
  }

  function movePlayerUp(){
    
      if(playerMatrixX === 0){
          return;
      }
      
    playerLocationY = playerLocationY - 20;
    playerMatrixX = playerMatrixX - 1;
   
    // console.log(playerLocationX,playerLocationY);
   
    if(myMaze[playerMatrixX][playerMatrixY] == 1){
        movePlayer();
    } else {
        playerLocationY = playerLocationY + 20;
        playerMatrixX = playerMatrixX + 1;
    }
  }

  function movePlayerDown(){
    
    if(playerMatrixX === (myMaze.length-1)){
        return;
    }
   
    playerLocationY = playerLocationY + 20;
    playerMatrixX = playerMatrixX + 1;
    if(myMaze[playerMatrixX][playerMatrixY] === 1){
        movePlayer();
    } else {
        playerLocationY = playerLocationY - 20;
        playerMatrixX = playerMatrixX - 1;
    }
    
  }
  //initialize
   function init(){
    document.getElementById("time").style.opacity = '1';
    gameCompleted = false;
      document.getElementById('log').style.display = 'block';
      var svg = document.getElementById("svg");
    var maze = document.createElementNS(namespace,"svg");
    
    maze.setAttribute("id","maze");
    svg.append(maze);
      console.log(maze);
    playerLocationX = 0;
    playerLocationY = 0;
    playerMatrixX = 0;
    playerMatrixY = 0;
    steps = 0;
    collectables = 0;
    x = 0;
    y = 0;
    document.getElementById('steps').style.display = 'block';
    var easy = document.getElementById('easy').checked;
    var menu = document.getElementById("menu");
    menu.style.display = 'none';
    
    
    if(easy){
        updateTime(16);
        myMaze = myMazeEasy;
        maze.setAttribute('width','300');
        maze.setAttribute('height','300');
    } 
    else {
        updateTime(36);
        myMaze = myMazeHard;
        maze.setAttribute('width','600');
        maze.setAttribute('height','580');
    }
    createMaze();
    makePlayer();
 
    document.getElementById('svg').style.opacity = '1';
  }

  //play again or reset
  function playAgain(){
      document.getElementById("time").style.opacity = '0';
    document.getElementById('svg').style.opacity = '0';
     if(gameCompleted){
      document.getElementById("complete").remove();
      } 
     
    document.getElementById('log').style.display = 'none';
    var maze = document.getElementById("maze");
    var menu = document.getElementById("menu");
    var steps = document.getElementById("steps");
    
    document.getElementById('stepsCount').textContent = 0;
    document.getElementById('collectables').textContent = 0;
    maze.remove();
    steps.style.display = 'none';
    menu.style.display = 'block';
    gameCompleted = true;
  
  }
  //timer
  function updateTime(t){
      timeUp = false;
      var time = document.getElementById('time');
      console.log(time);
      var interval = setInterval(function(){

        if(t == 0 && !gameCompleted){
            timeUp = true;
            time.textContent = 'You are out of time, Reset & Try Again';
              clearInterval(interval);
              return;
          }
          if(gameCompleted){
            time.textContent = 'Time Left (Seconds): ';
              
            clearInterval(interval);
            return;
          }
        time.textContent = 'Time Left (Seconds): ' + --t;
      },1000);
     
  }

