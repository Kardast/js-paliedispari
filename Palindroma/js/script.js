// ES Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


// let myWord = prompt("Inserisci una parola");
// console.log(myWord);

// let palindromaResult = palindroma(myWord);
// console.log(palindromaResult);

// function palindroma(wordCheck) {
//     // funzione che controlla se la parola è palindroma o no

//     // prendo la parola, la divido in singole lettere minuscole, la inverto e la converto in stringa
//     let myWordChecking = myWord.toLowerCase().split("").reverse().toString();
//     console.log(typeof myWordChecking);
//     console.log(typeof myWord);

//     // con questa operazione condizionale controllo se la parola inserita (anch'essa divisa in singole lettere minuscole e convertita in stringa) è uguale alla variante creata sopra
//     if (myWordChecking === myWord.toLowerCase().split("").toString()) {
//         return "La parola è palindroma.";
//     } else {
//         return "La parola non è palindroma.";
//     }
// }

let myWord = prompt("Inserisci una parola");
console.log(myWord);

let palindromaResult = palindroma(myWord);
console.log(palindromaResult);

function palindroma(wordCheck) {
    // funzione che controlla se la parola è palindroma o no

    // creazione di contenitore per la parola inversa
    let holder = "";
    // creazione di variabile che guarda la sua lunghezza -1
    let wordLen = wordCheck.length-1;
    // creazione di ciclo con i uguale alla lunghezza della parola e a ogni giro diminuisce di uno
    for (let i = wordLen; i >= 0; i--) {
        // assegnazione della lettera [i] al contenitore, dove [i] è la lettera alla posizione della lunghezza della stessa -1
        holder += wordCheck[i];
    }

    holder.toLowerCase().toString();
    console.log(typeof holder);
    console.log(typeof myWord);


    if (holder === myWord.toLowerCase().toString()) {
        return "La parola è palindroma.";
    } else {
        return "La parola non è palindroma.";
    }
}
