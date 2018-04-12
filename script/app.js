let input = document.querySelector('input')
let form = document.querySelector('form')
let play = document.getElementById('play')
let menu = document.getElementById('menu')
let game = document.getElementById('game')
let jungles = document.getElementById('jungle')
let theWord = document.getElementById('word')
let body = document.querySelector('body')
let player = document.getElementById('player')
let decorations = document.querySelector('.mover-1')
let wordExistant = []
let vitesseMot = 15
let tableau = cloud
let score = 0
let playerX = 0
let playerY = 0
let wordTest, a , alea
let letterInWord = 0
<<<<<<< HEAD
let speed=1
let backgroundGame=document.querySelector('.mover-1')
let startGame = document.getElementById('startGame')
=======
let speed = 1
let comboIsPossible = 0
let combo = 1

setInterval(aleaWord(tableau),testconsole(), 1000);

function testconsole(){
  console.log("en boucle")
}


///// ALL FUNCTIONS START
>>>>>>> 4f07978cdd4999c47389f04de2e25d6b0ffc8cd1

function backgroundmove(){
  speed-=2
  decorations.style.backgroundPosition = speed +"px"
}

function scrollbackground(){
  setInterval(backgroundmove,10)
}

function aleaWord(array){

 alea = parseInt(Math.floor(Math.random() * array.length))

 wordTest = array[alea]
 for (let i = 0; i < wordTest.length; i++) {   // création des span
   let letter = wordTest[i]
   launchWord()
   randomPosition()
   createSpan(letter)
 }
}
<<<<<<< HEAD
aleaWord(tableau)

=======
>>>>>>> 4f07978cdd4999c47389f04de2e25d6b0ffc8cd1

////// pour la couleur début
function createSpan(letter){
  let newElement = document.createElement('span')
  newElement.textContent = letter
  let mot = theWord
  mot.appendChild(newElement)
}

function initialiseSpan(){
  for (var i = 0; i < wordTest.length; i++) {
    var d = theWord;
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
  else if (a == 'Backspace' && letterInWord > 0) {
    console.log('efface')
    letterInWord -= 1
    comboIsPossible = 0
    addCombo()
    document.querySelector('span:nth-child(' + (letterInWord+1) +')').style.color = "white"
  }
  else if ((a != tableau[alea][letterInWord]) && (a != -1) && (a != 'Backspace')) {
    console.log('no')
    console.log(a)
    letterInWord ++
    comboIsPossible = 0
    console.log('comboIsPossible : ' + comboIsPossible)
    addCombo()
    document.querySelector('span:nth-child(' + (letterInWord) +')').style.color = "red"
  }
  else {
    console.log('bug')
  }
}
////pour la couleur fin

function displayPlayer(){
  player.style.top= (playerY-100) + 'px'

}
<<<<<<< HEAD

backgroundGame.addEventListener(
  'mousemove',
  function(e) {
    //console.log(e)
    playerY = e.clientY

    displayPlayer()
    //console.log(playerY)
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
startGame.addEventListener(
  'click',
  function(e){
    scrollbackground()
    startGame.style.zIndex="0"
    startGame.style.visibility="hidden"
    launchWord()
    input.autofocus= "true"
  }
)


function randomPosition(){
  let x = Math.round(Math.random() * 15) // positionne le mot aléatoirement sur un  axe verticale
  let height = 10 + x
  theWord.style.transition = "left 0s ease-out"
  theWord.style.top = height + "%"
  theWord.style.left = 80 + "%"
}

function launchWord(){
  randomPosition()
  setTimeout(function(){
    theWord.style.transition = "left " + vitesseMot + "s ease-out"
    theWord.style.left = 30 + "%"
  },
  2000)
}

function selectList(){
  if (score >= 100 && score < 200) {
    tableau = plain
    decorations.style.background = " url(../images/plain.png)"
  }
  else if (score >= 200 && score < 300) {
    tableau = beach
    decorations.style.background = " url(../images/beach.png)"
  }
  else if (score >= 300 && score < 400) {
    tableau = desert
    decorations.style.background = " url(../images/desert.png)"
  }
  else if (score >= 400 && score < 500) {
    tableau = jungle
    decorations.style.background = " url(../images/jungle.png)"
  }
  else if (score >= 500 && score < 600) {
    tableau = montain
    decorations.style.background = " url(../images/montain.png)"
  }
  else if (score >= 600 && score < 700) {
    tableau = underWater
    decorations.style.background = " url(../images/underWater.png)"
  }
  else if (score >= 700 && score < 800) {
    tableau = ice
    decorations.style.background = " url(../images/ice.png)"
  }
  else if (score >= 800 && score < 900) {
    tableau = volcan
    decorations.style.background = " url(../images/volcan.png)"
  }
  else if (score > 900) {
    tableau = space
    decorations.style.background = " url(../images/space.png)"
  }
  else {
    tableau = cloud

  }
}

function replaceScore(){
  document.getElementById("score").innerHTML = "score : " + score
}

function addCombo(){
  if (comboIsPossible > 2) {
    combo += 0.5
    document.getElementById("combo").innerHTML = "combo : " + combo
  }
  else {
    combo = 0
    document.getElementById("combo").innerHTML = "combo : " + combo

  }
}

///// ALL FUNCTIONS END

///// ALL EVENT START
input.addEventListener(
  'keyup',
  function(e){
  a = e.key
  comparLetter(a)
    if(this.value.replace(' ','') == tableau[alea]) {
      console.log('ok')
      form.reset()
      comboIsPossible ++
      vitesseMot -= 1                    // quand le mot est bon
      score = score + 50 * combo
      a = -1
      console.log(score)
      addCombo()
      initialiseSpan()
      selectList()  //
      aleaWord(tableau)
      replaceScore()
    }
  }
)

game.addEventListener(
  'mousemove',
  function(e) {
    playerY = e.clientY
    displayPlayer()
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
    scrollbackground()
    menu.style.visibility="hidden"
    menu.style.display="none"
    game.style.display="block"
    game.style.visibility="visible"
    body.style.width="unset"
  }
)

window.addEventListener(
  'keyup', function(e){
    e.preventDefault()
    if (e.keyCode==32) {
      theWord.style.transition = "left " + vitesseMot + "s ease-out"
      theWord.style.left = 30 + "%"
    }
  }
)

theWord.addEventListener(
  'transitionend', function(e){
    e.preventDefault()
    let oldScore = score
    score = 0
    window.alert("vous avez perdu, votre score est de : " + oldScore)
  }
)

///// ALL EVENT START
