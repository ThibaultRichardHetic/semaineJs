let input = document.querySelector('input')
let form = document.querySelector('form')
let alea

function aleaWord(array){
 alea = parseInt(Math.floor(Math.random() * array.length))
 document.getElementById("word").innerHTML = plaine[alea]

}
aleaWord(word)


input.addEventListener(
  'keyup',
  function(e){

    if(this.value.replace(' ','') == plaine[alea]) {
      console.log('ok')
      form.reset()
      aleaWord(word)

    }

  }

)
form.addEventListener(
  'submit',function(e){
    e.preventDefault()
  }
)
