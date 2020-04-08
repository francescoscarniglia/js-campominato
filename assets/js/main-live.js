
console.log('------Start esercizio ------');

// creazione bombe e dei contenitori che occorrono

var possibilita = 84; // 100 - 16
var listaBombe = []; // numeri vietati (bombe)
var numeriConsentiti = []; // numeri consentiti inseriti dall'numeriUtente (popolato ad ogni inserimento valido del giocatore)
var conteggio = 0; // storico dei tentativi riusciti
var utente = 0; //  scelta utente


// genera 16 numeri random non doppi che saranno le bombe

while (listaBombe.length < 16) {
  var numeroBomba = numeriBommbe(100);

  if(listaBombe.includes(numeroBomba) == false){
    listaBombe.push(numeroBomba);
  }
}

// debug
console.log('Lista bombe:', listaBombe);


// main loop del gioco
// loop principale del gioco

while ( (numeriConsentiti.length < possibilita) && ( listaBombe.includes(utente) !== true ) ) {

    // scelta utente
    utente = parseInt(prompt('Inserisci un numero da 1 a 100'));
    console.log('scelta utente debug: ', utente);

    //controllo numero inserito
    controlloNumero(utente);

    // controllo possibilità gioco
    if(numeriConsentiti.length == possibilita) {
      alert('hai vinto');
    }
}

console.log('------GAME OVER -------');
console.log('numeri riusciti: ', numeriConsentiti);
console.log('conteggio tentativi: ', conteggio);


// funzioni
// genera numeri random 1-100
function numeriBommbe(max) {
  return Math.floor(Math.random() * max) + 1;
}

//validazione numero all'interno di bombe
function controlloNumero(numero) {
  // verifico se il numero è nella listaBombe
   if(listaBombe.includes(numero)) {
     alert('hai perso :( hai provato:' + conteggio + 'volte prima di trovare la bomba');
   }
   // se il numero è già presente
   else if (numeriConsentiti.includes(numero)){
     alert('Numero già inserito, inseriscine un altro');
   }
   // se il numero è valido
   else if(numeriConsentiti.includes(numero) == false){
    numeriConsentiti.push(numero);
   }
   //aggiorno tentativi riusciti
   conteggio = conteggio + 1;
}
