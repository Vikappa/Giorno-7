/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

let num1
let num2

if (num1 > num2) {
  console.log("E' più grande il primo numero")
} else if (num2 > num2) {
  console.log("E' più grande il secondo numero")
} else {
  console.log("Pareggio")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

let numeroDaConfrontare
if (numeroDaConfrontare !== 5) {
  console.log("not equal")
} else {
  console.log("equal")
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

let numeroDaControllare
if (numeroDaConfrontare % 5 === 0) {
  console.log("divisibile per 5")
} else {
  console.log("non divisibile per 5")
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

let intero1
let intero2

if (intero1 === 8 || intero2 === 8 || (intero1 - intero2) === 8 || (intero2 - intero1) === 8 || (intero1 + intero2) === 8) {
  console.log("La condizione richiesta dall'esercizio è verificata")
} else {
  console.log("La condizione richiesta dall'esercizio NON è verificata")
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart

let prezzoFinale

if (totalShoppingCart > 50) {
  prezzoFinale = totalShoppingCart
  console.log("Consegna gratuita")
}
else {
  prezzoFinale = totalShoppingCart + 10
  console.log("Prezzo consegna 10€")
}

console.log("Prezzo finale: " + prezzoFinale)

// OPPURE

let prezzocheckOut = totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + 10

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

let prezzoFinaleBlackFriday = totalShoppingCart -= (totalShoppingCart * 0.2)

if (prezzoFinaleBlackFriday <= 50) {
  console.log("Black Friday! Hai ricevuto uno sconto del 20%. Il totale è " + prezzoFinaleBlackFriday + " + 10€ spedizione. Totale complessivo " + (prezzoFinaleBlackFriday + 10) + "€")
}
else {
  console.log("Black Friday! Hai ricevuto uno sconto del 20%. La spedizione è in omaggio perchè hai speso più di 50€. Il totale complessivo è " + prezzoFinaleBlackFriday)
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let a = 38;
let b = 73;
let c = 45;

if (a >= b && a >= c) {
  if (b >= c) {
    console.log(a + " " + b + " " + c)
  } else {
    console.log(a + " " + c + " " + b)
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log(b + " " + a + " " + c)
  } else {
    console.log(b + " " + c + " " + a)
  }
} else {
  if (a >= b) {
    console.log(c + " " + a + " " + b)
  } else {
    console.log(c + " " + b + " " + a)
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

let numeroFornito = 11
let stringafornita = "11"

if (typeof numeroFornito === "number") {
  console.log("Il valore fornito (" + numeroFornito + ") è un numero")
} else {
  console.log("Il valore fornito (" + numeroFornito + ") NON è un numero")
}

if (typeof stringafornita === "number") {
  console.log("Il valore fornito (" + stringafornita + ") è un numero")
} else {
  console.log("Il valore fornito (" + stringafornita + ") NON è un numero")
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

let numeroPariDispari

if (numeroPariDispari % 2 === 0) {
  console.log("Pari")
} else {
  console.log("Dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.

*/

let val = 7

if (val < 10 && val >= 5) {
  console.log("Meno di 10");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
//Versione che cancella un elemento senza modificare la lunghezza dell'array
delete me.skills[me.skills.length - 1]
console.log(me.skills)
//Versione che accorcia l'array
delete me.skills.pop()
console.log(me.skills)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

let arrayvuoto = []
arrayvuoto.push(1)
arrayvuoto.push(2)
arrayvuoto.push(3)
arrayvuoto.push(4)
arrayvuoto.push(5)
arrayvuoto.push(6)
arrayvuoto.push(7)
arrayvuoto.push(8)
arrayvuoto.push(9)
arrayvuoto.push(10)

console.log(arrayvuoto)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

arrayvuoto[arrayvuoto.length - 1] = 100