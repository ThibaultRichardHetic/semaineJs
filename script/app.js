let input = document.querySelector('input')
let form = document.querySelector('form')
let alea
let play = document.getElementById('play')
let menu = document.getElementById('menu')
let game = document.getElementById('game')
let jungles = document.getElementById('jungle')
let vitesseMot = 15
let tableau = plaine
let score = 0
let changeColor = document.getElementById("word")


function aleaWord(array){
 alea = parseInt(Math.floor(Math.random() * array.length))
 randomPosition()
 changeColor.innerHTML = array[alea]
}
aleaWord(tableau)

input.addEventListener(
  'keyup',
  function(e){
    for(let i=0; i<tableau[alea].length; i++){
    if(e.key == tableau[alea][i]){
      console.log('yes')
      changeColor.style.color= "red"
    }
  }
    if(this.value.replace(' ','') == tableau[alea]) {
      console.log('ok')
      form.reset()
      vitesseMot -= 1
      score += 10
      console.log(score)
      selectList()
      aleaWord(tableau)
      replaceScore()
<<<<<<< HEAD
=======



    //  defilement()
>>>>>>> 7527dae5b7a9d3b457d2d7ddd0c8987156017b7d
    }
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

function selectList(){
  if (score >= 100) {
    tableau = savane
    document.querySelector(".mover-1").style.background = " url(images/jungle.png)"
  }
  else if (score >= 200) {
    tableau = plage
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
    window.alert("vous avez perdu")
  }
)
