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
let tableau = desert
let score = 0
let playerX = 0
let playerY = 0
let wordTest, a , alea, pseudo
let letterInWord = 0
let speed = 1
let comboIsPossible = 0
let combo = 1
let playerAnim=document.querySelector('.player-anim-1')
let endGame=document.getElementById('endGame')
let musicBack = new Audio("../images/musicfond.wav");
let restart = document.getElementById('restart')
let moveIsPossiblle =0

function departGame(){
  setInterval(aleaWord(tableau), 1000);
}

function animation(fond){
  playerAnim.style.animationPlayState="running"
  setTimeout(() => {
      decorations.style.background = "url(../images/" + fond + ".png)"
      decorations.style.backgroundSize = "contain"
      playerAnim.className="player-anim-2"

  },2000)
  setTimeout(() => {
      playerAnim.className="player-anim-1"
      playerAnim.style.animationPlayState="paused"
  },4000)
}
//setInterval(aleaWord(tableau),testconsole(), 1000);


function pseudoEffect(){
  //pseudo = document.getElementById('yourPseudo').value
  console.log(document.getElementById('yourPseudo'))
  //console.log(pseudo)
}

///// ALL FUNCTIONS START


function backgroundmove(){
  speed-=1
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

////// pour la couleur début
function createSpan(letter){
  let newElement = document.createElement('span')
  newElement.textContent = letter
  let mot = theWord
  mot.appendChild(newElement)
}

function initialiseSpan(){
  for (let i = 0; i < wordTest.length; i++) {
    let d = theWord;
    let creation = document.querySelector("#word span");
    let throwawayNode = d.removeChild(creation);
  }
  letterInWord = 0
}

function comparLetter(a){ //comparaison pour chaque lettre
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
  else if ((a != tableau[alea][letterInWord]) && (a != -1) && (a != 'Backspace') && (a != 'Tab')) {
    console.log('no')
    let erreur = new Audio("../images/erreur.wav");
    erreur.play();
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

function displayPlayer(){ // plus essenciel
  player.style.top= (playerY-100) + 'px'
}

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
    theWord.style.left = 9 + "%"
  },
  2000)
}

function selectList(){
  if (score >= 100 && score < 200 && moveIsPossiblle == 0) {
    tableau = montain
    moveIsPossiblle=1
    let fond = "montain"
    animation(fond)
  }
  else if (score >= 200 && score < 300 && moveIsPossiblle == 1) {
    tableau = volcan
    moveIsPossiblle=2
    let fond = "volcan"
    animation(fond)
  }
  else if (score >= 300 && score < 400 && moveIsPossiblle == 2) {
    tableau = ice
    moveIsPossiblle=3
    let fond = "ice"
    animation(fond)
  }
  else if (score >= 400 && score < 500 && moveIsPossiblle == 3) {
    tableau = jungle
    moveIsPossiblle=4
    let fond = "jungle"
    animation(fond)
  }
  else if (score >= 500 && score < 600 && moveIsPossiblle == 4) {
    tableau = plain
    moveIsPossiblle=5
    let fond = "plain"
    animation(fond)
  }
  else if (score >= 600 && score < 700 && moveIsPossiblle == 5) {
    tableau = underWater
    moveIsPossiblle=6
    let fond = "underWater"
    animation(fond)
  }
  else if (score >= 700 && score < 800 && moveIsPossiblle == 6) {
    tableau = cloud
    moveIsPossiblle=7
    let fond = "cloudy"
    animation(fond)
  }
  else if (score >= 800 && score < 900 && moveIsPossiblle == 7) {
    tableau = beach
    moveIsPossiblle=8
    let fond = "beach"
    animation(fond)
  }
  else if (score > 900 && moveIsPossiblle == 8) {
    tableau = space
    moveIsPossiblle=9
    let fond = "space"
    animation(fond)
  }
  else {
    if (moveIsPossiblle == 0) {
      tableau = desert
      decorations.style.background = "url('../images/desert.png')"
      decorations.style.backgroundSize = "contain"
    }
  }
}

function replaceScore(){
  document.getElementById("score").innerHTML = "score : " + score
}

function addCombo(){
  if (comboIsPossible > 2) {
    if (combo <= 4) {
      combo += 0.5
    }
    document.getElementById("combo").innerHTML = "combo X  " + combo
  }
  else {
    combo = 1
    document.getElementById("combo").innerHTML = " "

  }
}

///// ALL FUNCTIONS END

///// ALL EVENT START
input.addEventListener(
  'keyup',
  function(e){
  a = e.key
  comparLetter(a)// quand le mot est bon
    if(this.value.replace(' ','') == tableau[alea]) {
      let audio = new Audio("../images/valide.wav");
      audio.play();
      console.log('ok')
      form.reset()
      comboIsPossible ++
      if (vitesseMot > 3) {
        vitesseMot -= 1
      }
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

player.style.animationPlayState="paused"

form.addEventListener(
  'submit',
  function(e){
    e.preventDefault()
  }
)

startGame.addEventListener( // quand on clique une première fois
  'click',
  function(e){
    e.preventDefault()
    selectList()
    scrollbackground()
    startGame.style.visibility="hidden"
    // launchWord()
    input.focus()
    departGame()
    pseudoEffect()

    musicBack.play();
  }
  )

window.addEventListener( //Lorsqu'une touche est actionnée
  'keyup', function(e){
    e.preventDefault()
    if (e.keyCode==32) {
      theWord.style.transition = "left " + vitesseMot + "s ease-out"
      theWord.style.left = 9 + "%"
    }
  }
)

theWord.addEventListener( // quand le joueur perd
  'transitionend', function(e){
    e.preventDefault()
    musicBack.pause()
    document.querySelector('div.endGame p').innerHTML = "Votre score : " + score
    endGame.style.visibility="visible"
    let gameOver = new Audio("../images/perdu.wav");
    gameOver.play();
    input.disabled="true"


  }
)
restart.addEventListener(
  'click',
  function(e){
    location.reload()
  }
)
function addScore(score){
    let scores = getHighScores();
    scores.push(score);
    scores = scores.sort(function(a,b){ return b-a }).slice(0,3);
    localStorage.setItem("highscores", JSON.stringify(scores));
}


///// ALL EVENT START
