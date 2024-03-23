let rock =document.getElementById("rock")
let paper =document.getElementById("paper")
let scissors =document.getElementById("scissors")
let selectedImg =document.getElementById("selected-img")
let compImg = document.getElementById("comp-img")


paper.onclick = setPaperImg
scissors.onclick = setScissorImg
rock.onclick = setRockImg


function setCompImg(){
    let images =[
        "./assets/rock-hand.png",
        "./assets/paper-hand.png",
        "./assets/scissors-hand.png"
    ]
    let randomIndex =Math.floor(Math.random()*images.length)

          
    return images[randomIndex]

}

console.log(setCompImg())

function setRockImg(){
   selectedImg.setAttribute('src',"./assets/rock-hand.png")
   compImg.setAttribute("src",setCompImg())
   checkWinner()

}

function setPaperImg(){
    selectedImg.setAttribute('src',"./assets/paper-hand.png")
    compImg.setAttribute("src",setCompImg())
    checkWinner()
}

function setScissorImg(){
    selectedImg.setAttribute('src',"./assets/scissors-hand.png")
    compImg.setAttribute("src",setCompImg())
    checkWinner()
}


function checkWinner(){

   let obj={
    "./assets/rock-hand.png":"rock",
    "./assets/paper-hand.png":"paper",
    "./assets/scissors-hand.png":"scissors"
   }
   let x = obj[selectedImg.getAttribute("src")]
   let y = obj[compImg.getAttribute("src")]
   let yourScore =document.getElementById("your-score")
   let compScore=document.getElementById("comp-score")
   if(x=="rock" && y =="paper"){
        compScore.innerText=parseInt(compScore.innerText)+1
   }
   else if(y=="rock" && x =="paper"){
        yourScore.innerText=parseInt(yourScore.innerText)+1
   }
   else if(x=="rock" && y =="scissors"){
         yourScore.innerText=parseInt(yourScore.innerText)+1
   }
   else if(y=="rock" && x =="scissors"){
         compScore.innerText=parseInt(compScore.innerText)+1
   }
   else if(x=="paper" && y =="scissors"){
         compScore.innerText=parseInt(compScore.innerText)+1
   }
   else if(y=="paper" && x =="scissors"){
         yourScore.innerText=parseInt(yourScore.innerText)+1
   }

   let winnerDiv =document.querySelector(".winner-div")
   if(yourScore.innerHTML==5){
       document.getElementById("winner").innerText="You win the game"
       winnerDiv.style.display = "block"
   }
   else if(compScore.innerHTML==5){
       document.getElementById("winner").innerText="You loss the game"
       winnerDiv.style.display = "block"
   }

} 



let playAgain = document.getElementById("play-again")

playAgain.addEventListener("click",()=>{
    window.location.reload()
})





