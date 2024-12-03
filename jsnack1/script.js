// L’utente inserisce due numeri in successione, con due prompt.
// Il software stampa il maggiore

let num1;
do {
    num1 = parseFloat(prompt('inserisci un numero:'));
} while(parseFloat(num1));

console.log(num1)

// let num1 = Number(prompt('inserisci un numero:'));
// while(isNaN(num1)) {
//     num1 = Number(prompt('inserisci un numero:'));
// }


let num2;

do{
    num2 = parseFloat(prompt("inserisci un'altro numero")) 
} while (parseFloat(num2))



if (num1 > num2) {
    console.log(`il numero maggiore è: ${num1}`);
}   else if (num2 > num1) {
    console.log(`il numero maggiore è: ${num2}`);
} else {
    console.log(`i numeri inseriti sono uguali.`)
}