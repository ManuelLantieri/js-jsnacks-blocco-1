// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['nathan','nd','fabio','phil','carlo','lewis','luca']

for (let i = 0; i < invitati.length; i++){
    let nomeUtente = prompt("Inserisci il tuo nome")
    if (invitati[i] === nomeUtente){
        alert(`${nomeUtente}, lei è presente nella lista!!`);
    } else if(i === invitati.length -1){
            alert(`${nomeUtente}, lei non è presente nella lista`)

        
    }
}