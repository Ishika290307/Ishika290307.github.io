colors = [
  '#596F62',
  '#DB5461',
  '#134074',
  '#D7D6D6'
]

function hover(element,i) {
  document.body.style.background= colors[i]
  document.querySelector('h1').style.color = "white"
  document.body.classList.add('hovering')
}

function leave(element,i) {
  document.body.style.background= "#FAF3DD"
  document.querySelector('h1').style.color = "#DB5461"
  document.body.classList.remove('hovering')
}