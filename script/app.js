let input = document.querySelector('input')
let form = document.querySelector('form')
let alea
let play = document.getElementById('play')
let menu = document.getElementById('menu')
let game= document.getElementById('game')
let jungles = document.getElementById('jungle')

function aleaWord(array){
 alea = parseInt(Math.floor(Math.random() * array.length))
 document.getElementById("word").innerHTML = array[alea]

}
aleaWord(plaine)

input.addEventListener(
  'keyup',
  function(e){
    if(this.value.replace(' ','') == plaine[alea]) {
      console.log('ok')
      form.reset()
      aleaWord(plaine)


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
