console.log("Game started");
let player1;
let player2;
player1 = prompt("Enter player-1 name");
//console.log(player1.length);
while(player1.length<1)
{
    alert("player-1 name must contain atleast 1 character");
    player1 = prompt("Enter player-1 name");
}
player2 = prompt("Enter player-2 name");
while(player2.length<1)
{
    alert("player-2 name must contain atleast 1 character");
    player2 = prompt("Enter player-2 name");
}
let music = new Audio("music.mp3");
let turn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let in_turn = 'X';
let info = document.querySelector(".info");
let boxes = document.querySelectorAll(".box");
let imgBox = document.querySelector(".imgbox");
let imgs = imgBox.querySelectorAll("img");
let winflag = false;
let reset = document.querySelector("#reset");
info.innerHTML = `Turn for ${player1}`;
// img.classList.add(".displayimg");
// use to change the turn
function changeturn(){
    if(in_turn == 'X')
    return 'O';
    return 'X';
}
function curr_turn(){
    return in_turn;
}
// win logic
function winlogic(){
let wins = [
[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6],
]
for(win of wins){
    if((boxes[win[0]].innerText!="") && (boxes[win[0]].innerText == boxes[win[1]].innerText) && (boxes[win[1]].innerText == boxes[win[2]].innerText))
    {
          if(boxes[win[0]].innerText == 'X')
        info.innerText = ` ${player1} Won`;
        else 
        info.innerText = ` ${player2} Won`;
        for (let img of imgs) {
            img.style.width = "250px";
        }
      winflag = true;
      gameover.play();
    }
    }
    


}


// 
function changetext(){
    let box = this;
    if(winflag == true)
    {
        return;
    }
     if(box.innerText == ""){
     box.innerText = curr_turn();
     in_turn = changeturn();
     if(in_turn == 'X')
     info.innerHTML = `Turn for ${player1}`;
    else 
    info.innerHTML = `Turn for ${player2}`;
     turn.play();}
     else{
        alert(`This position is already filled`);
     }
     winlogic();
}

for(box of boxes){

    box.addEventListener("click" , changetext)
}
reset.addEventListener("click" , ()=>{
    winflag = false;
    for(box of boxes){
        box.innerText = "";
    }
    for (let img of imgs) {
        img.style.width = "0px";
    }
    in_turn = 'X';
    info.innerHTML = `Turn for ${in_turn}`;
    player1 = prompt("Enter player-1 name");
//console.log(player1.length);
while(player1.length<1)
{
    alert("player-1 name must contain atleast 1 character");
    player1 = prompt("Enter player-1 name");
}
player2 = prompt("Enter player-2 name");
while(player2.length<1)
{
    alert("player-2 name must contain atleast 1 character");
    player2 = prompt("Enter player-2 name");
}
})