// ES Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let myWord = prompt("Inserisci una parola");
console.log(myWord);

let palindromaResult = palindroma(myWord);
console.log(palindromaResult);

function palindroma(wordCheck) {
    // funzione che controlla se la parola è palindroma o no

    // prendo la parola, la divido in singole lettere minuscole, la inverto e la converto in stringa
    let myWordChecking = myWord.toLowerCase().split("").reverse().toString();
    console.log(typeof myWordChecking);
    console.log(typeof myWord);

    // con questa operazione condizionale controllo se la parola inserita (anch'essa divisa in singole lettere minuscole e convertita in stringa) è uguale alla variante creata sopra
    if (myWordChecking === myWord.toLowerCase().split("").toString()) {
        return "La parola è palindroma.";
    } else {
        return "La parola non è palindroma.";
    }
}
