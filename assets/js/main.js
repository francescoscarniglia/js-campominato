// Descrizione
// Il computer deve generare 16 numeri casuali tra 1 e 100
//   (numeri vietati).
//
// In seguito deve chiedere all’utente di inserire un numero alla
//   volta, sempre compreso tra 1 e 100.
//
// L’utente non può inserire più volte lo stesso numero.
//
// Se il numero è presente nella lista dei numeri generati (numeri
//   vietati), la partita termina, altrimenti si continua chiedendo
//   all’utente un altro numero.
//
// La partita termina quando il giocatore inserisce un numero “vietato”
//   o raggiunge il numero massimo possibile di numeri consentiti.
//
// Al termine della partita il software deve comunicare il punteggio,
//   cioè il numero di volte
//   che l’utente ha inserito un numero
//   consentito.

// BONUS:
// All’inizio il software richiede anche una difficoltà all’utente
// che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2=> tra 1 e 50
// Utilizzate l’ approccio + semplice (prompt(), alert(), console.log() )

// 1° STEP
// Il computer deve generare 16 numeri casuali tra 1 e 100
//   (numeri vietati).

var randomPc = [];

for(var i=0; i < 16; i++) {
  var numeroPc = Math.floor(Math.random()* 100) + 1;
  randomPc.includes(numeroPc);
  randomPc.push(numeroPc);
  console.log('Numero random pc:'+  numeroPc);
}

console.log('Questa è la lunghezza dell\'array: ', randomPc.length);

// 2° STEP
// In seguito deve chiedere all’utente di inserire un numero alla
//   volta, sempre compreso tra 1 e 100.
var numeriUtente = [];
for(var i=0; i < 16; i++) {
  var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100\nhai 3 tentativi'));
  numeriUtente.includes(numeroPc);
  numeriUtente.push(numeroPc);
  console.log('Numero random pc:'+  numeroUtente);
}

while( numeroUtente < 1 || numeroUtente > 100){
  var numeroUtente = parseInt(prompt('Inserisci un numero compreso tra 1 e 100\nhai 3 tentativi'));
}

console.log('Numero inserito dall\'utente: ', numeroUtente);
