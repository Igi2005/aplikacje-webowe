const prompt = require('prompt-sync')();
const number = Math.floor(Math.random()*10);
let uNumber = prompt('Zgadnij liczbe');
let test = false

if(uNumber == number) {
    console.log("Zgadles liczbe gratulacje !")
}
else {
    while(test == false) {
        uNumber = prompt('Zgadnij liczbe');
        if(uNumber == number) {
            test = true
        }
    }
    console.log("Zgadles liczbe!! Wylosowana liczba to " + number)
}
