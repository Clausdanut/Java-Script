var p = document.getElementById('greenplanet')

document.getElementById('greenplanet')
p.innerHTML = '<b>An alien appeared</b>'
// Putem setastilul direct di js
// dar recomandarea este sa folosim css+clase
//p.style.color= '#64a4c5'
//p.style.backgroundColor='rgb(230, 210,200)'
p.className = 'warning'
//Adauga o clasa elementului: 
p.classList.add('warning')

// Pentru a sterge o clasa folosim remove in loc de add
//p.classList.add('warning')
var nweElement = document.createElement('p')
nweElement.innerHTML = 'Hello there!'
//Punem elementul in body la sfarsit :
document.querySelector('body').appendChild(nweElement)
p.appendChild(nweElement)
//Elementul inaintea elementului p in body:
document.querySelector('body').insertBefore( nweElement, p)

//Sterge un element:
document.querySelector('#blueplanet').remove()

//executa functia changeMessage cand se da clic pe input:

document.querySelector('input').addEventListener('click',changeMessage)
function changeMessage(){
    document.querySelector('#redplanet').classList.add('warning')
    
}