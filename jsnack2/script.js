// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// mio esercizio

// const invitati = ['nathan','nd','fabio','phil','carlo','lewis','luca']
// for (let i = 0; i < invitati.length; i++){
//     let nomeUtente = prompt("Inserisci il tuo nome")
//     if (invitati[i] === nomeUtente){
//         alert(`${nomeUtente}, lei è presente nella lista!!`);
//     } else if(i === invitati.length -1){
//             alert(`${nomeUtente}, lei non è presente nella lista`)        
//     }
// }

// esercizio svolto
 const listNames = ['Matteo', 'Sara', 'Mirko', 'Flavia'];
 const nameToFind = prompt('inserisci il tuo nome');
 let isNameInList = false;
 for(let i = 0; i < listNames; i++){
    if(listNames[i] === nameToFind){
        isNameInList = true
    }
 }

 if (isNameInList) {
    alert("puoi entrare all'evento!");
 } else {
    alert("puoi enetrare all'evento");
 }