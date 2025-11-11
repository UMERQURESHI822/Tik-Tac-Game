console.log("Welcome to Tok Tok Toe");
let music = new Audio("i-love-my-8-bit-game-console-301272.mp3"); 
let AudioTurn = new Audio("retro_1sec.mp3");
let gameover = new Audio("retro_2sec.mp3");
 turn = "X";
 let isgameover = false;
music.loop = true;
let reset = document.getElementById("reset")


 // function to change the turn 
 const changeTurn = (()=>{
return turn === "X"? "0": "X"
 
 });

 // function to chek for a win

 const chekwin = (()=>{
   let boxtext = document.getElementsByClassName("boxtext")
 let wins = [
   [0, 1, 2, 5, 5, 0],
   [3, 4, 5, 5, 15, 0],
   [6, 7, 8, 5, 25, 0],
   [0, 3, 6, -5, 15, 90],
   [1, 4, 7, 5, 15, 90],
   [2, 5, 8, 15, 15, 90],
   [0, 4, 8, 5, 15, 45],
   [2, 4, 6, 5, 15, 135],
 ]
 wins.forEach((e)=>{
if(!isgameover){
  let boxtext = document.getElementsByClassName("boxtext");
  let musicoff = Array.from(boxtext).filter(b => b.innerText !== "").length;
  if (musicoff === 9) {
    document.querySelector(".info").innerText = "Game over Next time try";
    music.pause()
    music.currentTime = 0;
    isgameover = true;
  }
}

   if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&(boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won"
      isgameover = true;
        document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "176px";
        document.querySelector(".line").style.width =  "20vw"
        document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
        music.pause();
music.currentTime = 0;
gameover.play()
   if (boxtext[e[0]].innerText === "X") {
    document.querySelector(".line").style.backgroundColor = "red"
}

else{
      document.querySelector(".line").style.backgroundColor = "#450693"
}

   }
  
 })
 })

 // Game logic Start

 let boxes = document.getElementsByClassName("box");
 Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", ()=>{
     if(boxtext.innerText === "") { 
       boxtext.innerText = turn;
        turn = changeTurn();
       music.play();
       chekwin();

       if(!isgameover){
          document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
       }

    if (turn === "0") {
        boxtext.style.color = "red"
       }
       else{
        boxtext.style.color = "#450693"
       }
      
         element.style.pointerEvents = "none";
      } 
    });
 });

//  Add onclick Listener to reset button 
reset.addEventListener("click", () => {
let boxtexts = document.querySelectorAll(".boxtext")
Array.from(boxtexts).forEach((element) => {
   element.parentElement.style.pointerEvents = "auto";
element.innerText = ""
music.pause();
 reset.style.backgroundColor = "#19183B"
setTimeout(() => {
  reset.style.backgroundColor = "#F5AD18"
  
}, 100);
})
turn = "X"
isgameover = false
         document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            document.querySelector(".imgbox").getElementsByTagName("img")[0].style.width = "0" 
            document.querySelector(".line").style.width =  "0";       
})
