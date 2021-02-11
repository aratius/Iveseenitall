let button

const click = () => {
  console.log('click')
}

const init = () => {
  button = document.querySelector('#button')
  button.addEventListener('click', click)
}

window.addEventListener('DOMContentLoaded', init)