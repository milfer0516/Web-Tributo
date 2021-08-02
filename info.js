let titleChapter = document.querySelector('#titleChapter')
const t1c1 = document.querySelector('#t1c1')
const t1c2 = document.querySelector('#t1c2')
let title = ''
let iframe = document.querySelector('#iframe')

function filename(){
    let rutaAbsoluta = self.location.href;   
    let posicionUltimaBarra = rutaAbsoluta.lastIndexOf("/");
    let rutaRelativa = rutaAbsoluta.substring( posicionUltimaBarra + "/".length , rutaAbsoluta.length );
    return rutaRelativa;  
}

if (filename()=='index.html'){
    t1c1.addEventListener('click', getInformation1)
    t1c2.addEventListener('click', getInformation2)
}

function getInformation1 () {
    title = t1c1.textContent
    localStorage.setItem('title', title)
    console.log(title)
} 
function getInformation2 () {
    title = t1c2.textContent
    localStorage.setItem('title', title)
    console.log(title)
} 

if (filename()=='player.html'){
    document.addEventListener('DOMContentLoaded', changeTitle)
    document.addEventListener('DOMContentLoaded', changeVideo)
}
function changeTitle () {
    title = localStorage.getItem('title')
    titleChapter.textContent = title
}
function changeVideo () {
    if (title == 'C2-El cíborg superior'){
        iframe.src = 'https://www.youtube.com/embed/TQ-Rg_bQAAQ'
    }
}
