//Creare un array di oggetti di studenti.
//Ogni oggetto studente deve avere tre proprietà: nome, cognome, eta
//Ciclare su tutti gli studenti e stampare, per ognuno di essi, nome e cognome.


const studenti = [
    { 
        nome : 'Daniele', cognome : 'Marchio', eta : 29
    },
    { 
        nome : 'Francesco', cognome : 'Grasso' , eta : 33
    },
    {
        nome : 'Alessio', cognome : 'Mucci' , eta : 24
    },
    {
        nome : 'Alvaro', cognome : 'Siffredi' , eta : 21
    }
]

// for(let i = 0 ; i < studenti.length ; i++){
//     const name = studenti[i].nome
//     const surname = studenti[i].cognome

//     console.log(`Il nome dello studente e ${name} , mentre il cognome e ${surname}`)
// }


let nuovoStudente = {
    nome : prompt('Nome del nuovo studente'),
    cognome : prompt('Cognome del nuovo studente'),
    eta : parseInt(prompt('Eta del nuovo studente'))
}
studenti.push(nuovoStudente)
console.log(studenti)

 for(let i = 0 ; i < studenti.length ; i++){
     const name = studenti[i].nome
     const surname = studenti[i].cognome
     const eta = studenti[i].eta

     console.log(`Il nome dello studente e ${name} , mentre il cognome e ${surname} l'eta di ${eta}` )
 }


