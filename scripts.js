const inputs = document.getElementsByTagName('input')
const arrayInputs = [... inputs]

const addActive =  ({target}) =>{
  const span = target.parentNode.childNodes[1]
  span.classList.add('span_active')
}

const removeActive = ({target}) =>{
  const span = target.parentNode.childNodes[1]
  const input  = target.parentNode.childNodes[3]
  if(!input.value){
    span.classList.remove('span_active')
  }
}
arrayInputs.forEach(input => {
  input.addEventListener('focus' , addActive)
  input.addEventListener('blur' , removeActive )
});