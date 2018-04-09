let input = document.querySelector('input')
let form = document.querySelector('form')
let alea

function aleaWord(array){
 alea = parseInt(Math.floor(Math.random() * array.length))
 document.getElementById("word").innerHTML = array[alea]

}
aleaWord(plaine)

input.addEventListener(
  'keyup',
  function(e){
    if(this.value.replace(' ','') == word[alea]) {
      console.log('ok')
      form.reset()
      aleaWord(plaine)

    }
  }
)
