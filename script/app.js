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

function aleaWord(array){
 alea = parseInt(Math.floor(Math.random() * array.length))
 randomPosition()
 document.getElementById("word").innerHTML = array[alea]
}
aleaWord(tableau)

input.addEventListener(
  'keyup',
  function(e){
    if(this.value.replace(' ','') == tableau[alea]) {
      console.log('ok')
      form.reset()
      vitesseMot -= 1
      score += 10
      console.log(score)
      selectList()
      aleaWord(tableau)
<<<<<<< HEAD
=======
      replaceScore()
>>>>>>> 5387cce67c0be4fe6f1895972836ea858ae365f2


    //  defilement()
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

////////// positionement du mot
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
