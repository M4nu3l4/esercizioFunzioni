/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area(l1, l2) {
    return l1 * l2;
}


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
let a = 5;
let b = 12;
function crazySum(a, b) {
    if (a + b === a + b) {
        return (a + b) * 3;

    } else if (a + b !== a + b) {
        return a + b;
    }
    console.log(crazySum);
}


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(num) {
    const meno = Math.abs(num - 19);
    if (num > 19) {
        return meno * 3;
    } else {
        return meno;
    }
}
console.log(crazyDiff);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
    if (n >= 20 && n <= 100) {
        return true;

    } else if (n === 400) {
        return true;

    } else {
        return false;
    }
}
console.log(boundary);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

function epify(corso) {
    if (corso.sub(0, 7) === "EPICODE") {
        return corso;
    } else {
        return "EPICODE" + corso;
    }
}
console.log(epify);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(num) {
    if (num % 3 === 0 || num % 7 === 0) {
        console.log('il numero è multiplo di 3 o di 7')
        return true;

    } else {
        console.log('il numero non è multiplo nè di 3 nè di 7')
        return false;
    }
}

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(EPICODE) {
    EPICODE = EPICODE.split('');
    EPICODE = EPICODE.reverse();
    EPICODE = EPICODE.join('');
}
console.log(reverseString);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
let string = "cane, gatto, topo";
function upperFirst(string) {
    let parola = string.split(' '); //qui fa l'Array
    for (let i = 0; i < parola.length; i++) {  //lo ciclo
        parola[i] = parola[i].charAt(0).toUpperCase() + parola[i].slice(1);
    }
    return parola.join(' ');// qui ricompongo
}
console.log(upperFirst);

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(string) {
    return string.slice(1, string.length - 1);
}
console.log(cutString);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

function giveMeRandom(n) {
    let numRandom = [];
    for (let i = 0; i < n; i++) {
        numRandom = numRandom.push(Math.floor(Math.random(n) * 10));
        return numRandom;
    }
}
console.log(giveMeRandom);