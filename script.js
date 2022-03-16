//Have user selectable colors
// add selector for different theme colors
// make user selectable amount of squares
// full rows are 20 squares long
// add functionality for left mouse click then hover to color squares.

const container = document.getElementById('container')
const easter = document.getElementById('easter')
const random = document.getElementById('random')
console.log(easter.checked);
const easterColors = ['#ffd4e5', '#e0cdff', '#bde8ef', '#b7d784', '#feffa2']

const colors = [
  '#00FFFF',
  '#7FFFD4',
  '#7FFF00',
  '#0000FF',
  '#DC143C',
  '#FF8C00',
  '#00BFFF',
  '#FF00FF',
  '#ADFF2F',
]
const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}
function pickRandomColor() {
  if(easter.checked){
      const colorIndex = Math.floor(Math.random() * easterColors.length)
      return easterColors[colorIndex]
  }  else if(random.checked){
    const colorIndex = Math.floor(Math.random() * colors.length)
    return colors[colorIndex]
  }
  
}

function setColor(element) {
  const color = pickRandomColor()
  element.style.background = `${color}`
  element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color} `
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px rgba(0, 0, 0)'
}
