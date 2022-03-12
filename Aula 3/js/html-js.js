// No js existe a palavra reserva "document" que, quando ligado a uma pagina a HTML, traz esta página para dentro de uma variável
// getElementsByTagName = pegar o elemento pela tag h1, h2, div, header
let h1 = document.getElementsByTagName('h1')

// getElementById = pegar o elemento pelo id
let h2 = document.getElementById('hello-world')
h2.className = 'Tudo-bem'

// getElementbyClassName
let h2Class = document.getElementsByClassName('class-hello-world')

// querySelector - captura sempre o primeiro item que corresponder o seletor
// Por tag
let h1QuerySelector = document.querySelector('h1')

// Por Id
let h2QuerySelector = document.querySelector('#hello-world')

// Por Classe
let h2ClassQuerySelector = document.querySelector('.class-hello-world')

// querySelectorAll - captura TODOS os elementos que corresponder o selector
let h2Composto = document.querySelectorAll('.class-hello-world')

// ****************************************************

let h1TagColor = document.querySelector('#change-color')

// style - que serve para alterar ou trazer informação de estilos de css

// ***************************************************

// eventListener - são escutadores de eventos. Posso colocar evento dentro de qualquer tag, basta escolher o nome do evento

function handleEvent(){
    if(h1TagColor.style.color === 'blue'){
        h1TagColor.style.color = 'tomato'
    } else {
        h1TagColor.style.color = 'blue'
    }
    textLabel.innerHTML = input.value
}

// h2.addEventListener('mouseover', handleEvent)

let imagesPuppy = [
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Puppy_on_a_plastic_lid.jpg/1200px-Puppy_on_a_plastic_lid.jpg',
    'https://media.4-paws.org/1/e/d/6/1ed6da75afe37d82757142dc7c6633a532f53a7d/VIER%20PFOTEN_2019-03-15_001-2886x1999-1920x1330.jpg',
    'https://hips.hearstapps.com/countryliving.cdnds.net/17/47/1511194376-cavachon-puppy-christmas.jpg'
]

let textImage = [
    'Olá Mundo',
    'Olá Terra',
    'Olá Brasil'
]

let img = document.querySelector('#img-change')

let textLabel = document.querySelector('#text-label')

function handleImage(){
    let index = Math.floor(3 * Math.random())
    img.src = imagesPuppy[index]
}

let input = document.querySelector('#input-text')
