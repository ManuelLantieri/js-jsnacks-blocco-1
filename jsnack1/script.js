// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

let num1 = prompt('inserisci un numero:')
let num2 = prompt("inserisci un'altro numero")

if (num1 > num2) {
    console.log(`il numero maggiore è: ${num1}`);
}   else {
    console.log(`il numero maggiore è: ${num2}`)
}