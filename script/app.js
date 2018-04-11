let input = document.querySelector('input')
let form = document.querySelector('form')
let alea
let play = document.getElementById('play')
let menu = document.getElementById('menu')
let game = document.getElementById('game')
let jungles = document.getElementById('jungle')
let vitesseMot = 15
let tableau = plain
let score = 0
let changeColor = document.getElementById("word")
let body= document.querySelector('body')
let player= document.getElementById('player')
let playerX=0
let playerY=0
let wordTest
let letterInWord = 0

function aleaWord(array){
 alea = parseInt(Math.floor(Math.random() * array.length))
 randomPosition()
 wordTest = array[alea]
 console.log(wordTest)
 for (let i = 0; i < wordTest.length; i++) {   // création des span
   let letter = wordTest[i]
   createSpan(letter)
 }
}
aleaWord(tableau)
launchWord()

////// pour la couleur début
function createSpan(letter){
  let newElement = document.createElement('span')
  newElement.textContent = letter

  let mot = document.getElementById('word')
  mot.appendChild(newElement)
  console.log(newElement)
}

function initialiseSpan(){
  for (var i = 0; i < wordTest.length; i++) {
    var d = document.getElementById("word");
    var d_nested = document.querySelector("#word span");
    var throwawayNode = d.removeChild(d_nested);
  }
  letterInWord = 0

}

function comparLetter(a){

  if (a == tableau[alea][letterInWord]) {
    console.log('yes')
    letterInWord ++
    document.querySelector('span:nth-child(' + letterInWord +')').style.color = "green"
  }
  else if (a != tableau[alea][letterInWord]) {
    console.log('no')
  }
  else {
    console.log('chelou')
  }
}

////pour la couleur fin

input.addEventListener(
  'keyup',
  function(e){
    /*
    for(let i=0; i<tableau[alea].length; i++){
    if(e.key == tableau[alea][i]){
      console.log('yes')
      changeColor.style.color= "red"
    }
  }
  */
  let a = e.key
  comparLetter(a)

    if(this.value.replace(' ','') == tableau[alea]) {
      console.log('ok')
      form.reset()
      vitesseMot -= 1
      score += 50
      console.log(score)
      initialiseSpan()
      selectList()
      aleaWord(tableau)
      replaceScore()

    }
  }
)
function displayPlayer(){
  player.style.top= (playerY-100) + 'px'
  player.style.left= (playerX-100) + 'px'
}
game.addEventListener(
  'mousemove',
  function(e) {
    console.log(e)
    playerY = e.clientY
    playerX = e.clientX
    displayPlayer()
    console.log(playerY)
  }
)

form.addEventListener(
  'submit',
  function(e){
    e.preventDefault()
  }
)
play.addEventListener(
  'click',
  function(e){
    menu.style.visibility="hidden"
    menu.style.display="none"
    game.style.display="block"
    game.style.visibility="visible"
    body.style.width="unset"

  }
)


function randomPosition(){
  let x = Math.round(Math.random() * 15) // positionne le mot aléatoirement sur un  axe verticale
  let height = 10 + x
  document.getElementById("word").style.transition = "left 0s ease-out"
  document.getElementById("word").style.top = height + "%"
  document.getElementById("word").style.left = 80 + "%"
}


window.addEventListener(
  'keyup', function(e){
    e.preventDefault()
    if (e.keyCode==32) {
      document.getElementById("word").style.transition = "left " + vitesseMot + "s ease-out"
      document.getElementById("word").style.left = 30 + "%"
    }
  }
)

function launchWord(){
  randomPosition()

  setTimeout(function(){
    document.getElementById("word").style.transition = "left " + vitesseMot + "s ease-out"
    document.getElementById("word").style.left = 30 + "%"
  },
  3000)
}

function selectList(){
  if (score >= 100) {
    tableau = plain
    document.querySelector(".mover-1").style.background = " url(../images/plain.png)"
  }
  else if (score >= 200) {
    tableau = beach
    document.querySelector(".mover-1").style.background = " url(images/beach.png)"
  }
  else if (score >= 300) {
    tableau = desert
    document.querySelector(".mover-1").style.background = " url(images/desert.png)"
  }
  else if (score >= 400) {
    tableau = jungle
    document.querySelector(".mover-1").style.background = " url(images/jungle.png)"
  }
  else if (score >= 500) {
    tableau = montain
    document.querySelector(".mover-1").style.background = " url(images/montain.png)"
  }
  else if (score >= 600) {
    tableau = underWater
    document.querySelector(".mover-1").style.background = " url(images/underWater.png)"
  }
  else if (score >= 700) {
    tableau = ice
    document.querySelector(".mover-1").style.background = " url(images/ice.png)"
  }
  else if (score >= 800) {
    tableau = volcan
    document.querySelector(".mover-1").style.background = " url(images/volcan.png)"
  }
  else if (score > 900) {
    tableau = space
    document.querySelector(".mover-1").style.background = " url(images/space.png)"
  }
  else {
    tableau = plaine

  }
}

function replaceScore(){
  document.getElementById("score").innerHTML = "score : " + score
}

document.getElementById("word").addEventListener(
  'transitionend', function(e){
    e.preventDefault()
    let oldScore = score
    score = 0
    window.alert("vous avez perdu, votre score est de : " + oldScore)
  }
)
