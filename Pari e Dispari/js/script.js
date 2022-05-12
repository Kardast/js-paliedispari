// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

let evenOdd = prompt("Scegli pari o dispari");
let myNum = parseInt(prompt("Inserisci un numero da 1 a 5"));
console.log("Il mio numero è:", myNum);

let pcRanNum = pcNum();
console.log("Il numero del pc è:", pcRanNum);

let sumNums = myNum + pcRanNum;
console.log("La somma è:", sumNums);

let sumResult = sumEvenOdd(sumNums);
console.log(sumResult);

if (sumResult === evenOdd) {
    console.log("hai vinto");
} else {
    console.log("Hai perso");
}


// functions
// random numer
function pcNum() {
    let ranNum = Math.floor(Math.random() * 5) + 1;

    return ranNum;
}

// check if sum is even or odd
function sumEvenOdd(sum) {
    if (sum % 2 === 0) {
        // let even;
        return "pari";
    } else {
        // let odd;
        return "dispari";
    }
}