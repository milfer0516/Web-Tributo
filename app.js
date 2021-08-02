const botton = document.querySelector('#botton')
const textArea = document.querySelector('#textCom')
const containerCom = document.querySelector('#divCom')

document.addEventListener('submit', addComment)

function addComment (e) {
    e.preventDefault()
    let text = document.createElement('p')
    text.textContent = textArea.value
    containerCom.appendChild(text)
    textArea.value = ''
}




