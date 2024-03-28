const studenti = [
    {
        nome : 'Daniele',
        cognome : 'Marchi',
        eta : 28
    },
    {
        nome : 'Alessio',
        cognome : 'Migno',
        eta : 12
    },
    {
        nome : 'Mattia',
        cognome : 'Cianfa',
        eta : 22
    },
    {
        nome : 'Johan',
        cognome : 'Malandrucco',
        eta : 10
    },
    {
        nome : 'Flavio',
        cognome : 'Bellarda',
        eta : 25
    },
    {
        nome : 'Tony',
        cognome : 'Effe',
        eta : 30
    }
]

const tBodyElement = document.getElementById('classe-studenti')

studenti.forEach(function (element) {
    
    const name = element.nome
    const surname = element.cognome
    const age = element.eta

    const trHtmlElement = 
    `
    <tr>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${age}</td>
  </tr>
  `

    tBodyElement.innerHTML += trHtmlElement
});



const formElement = document.getElementById("add-new-std")
 console.log(formElement)

formElement.addEventListener('submit', aggiungiStudente)

function aggiungiStudente(e){
    
    e.preventDefault()

    const name = document.getElementById("name").value
    const surname = document.getElementById("surname").value
    const age = document.getElementById("age").value

    const nuovoStudente = {
        nome : name,
        cognome : surname,
        eta : age
    }

    console.log(nuovoStudente)
    studenti.push(nuovoStudente)
    
    const tBodyElement = document.getElementById('classe-studenti')
    const trHtmlElement = 
    `
    <tr>
    <td>${name}</td>
    <td>${surname}</td>
    <td>${age}</td>
  </tr>
  `

    tBodyElement.innerHTML += trHtmlElement
}

console.log(studenti)