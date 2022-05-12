// Lezione--------------------------------------------------

// Prova 1---

let ranNum = getRandomNum(50, 100);

console.log("numero 1", ranNum);


// 1000 LOC

let ranNum2 = getRandomNum(50, 100);

console.log("numero 2", ranNum2);


// la mia funzione che genera numeri random da 50 a 100
function getRandomNum(rangeMin, rangeMax){

    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}


// Prova 2---

for (let i = 1; i <= 10; i++) {
    // let min = i + 10;
    // let max = i * 10;
    let numRand2 = getRandomNumMinMax(i + 10, i * 10);
    console.log(numRand2);

}

function getRandomNumMinMax(rangeMin, rangeMax){

    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}



// Prova 3---

// let userNum = parseInt(prompt("inserisci un numero"));

let userNum = getRandomNumMinMax(10, 50);
console.log('il numero generato è', userNum);

let pariODispariResult = pariODispari(userNum);

console.log(pariODispariResult);

// funzionalità del programma
function getRandomNumMinMax(rangeMin, rangeMax){

    let result = Math.floor(Math.random() * (rangeMax - rangeMin + 1)) + rangeMin;

    return result;
}

function pariODispari(numeroCheck) {
    // ritorna una stringa "pari" se il numero passato è pariODispari, sennò dispari
    if (numeroCheck % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}


// es1
// riprodurre il giochino di pari o dispari però i nquesto caso utilizzando funzioni il più possibile
// il fatto di generare numeri random 
// il fatto di fare check se il numero è pari o dispari


// es2
// chiediamo una parola e diciamo se la parola è palindroma o no
// creare una funzione che dice come stringa se è palindroma o no
