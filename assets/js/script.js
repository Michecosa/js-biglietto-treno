/* 
  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

  il prezzo del biglietto è definito in base ai km (0.21 € al km),
  va applicato uno sconto del 20% per i minorenni,
  va applicato uno sconto del 40% per gli over 65.,
  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


  TOOLS:
  - prompt()
  - variabili (let/const): chilometri, eta, prezzoBase, sconto, prezzoFinale
  - if/ else if/ else
  - toFixed(2)
*/





/* 
  Inizializza variabili (chilometri, eta) con i valori passati dall'utente tramite prompt()
*/
const chilometri = Number(prompt("Quanti chilometri devi percorrere?"));
const eta = Number(prompt("Quanti anni hai?"));


/* 
  Calcola il prezzoBase (prezzo senza sconto)
  Nota: il prezzo del biglietto è definito in base ai km (0.21 € al km) 
*/
const prezzoBase = chilometri * 0.21;


/* 
Verifica se l'età del passeggero rientra in una certa fascia per applicare eventuali sconti:
  - minorenne (<18): 20%; 
  - over65 (>65): 40%;
*/

let sconto = 0;
if(eta < 18) {
  sconto = 20;
} else if(eta > 65) {
  sconto = 40;
}


/* Calcolo del prezzo finale */
const prezzoFinale = Number((prezzoBase - (prezzoBase * sconto) / 100).toFixed(2));

/* 
  Mandare il prezzoFinale in console (Output)
*/
console.log(
`

********* Calcolo del biglietto *********

  Distanza: ${chilometri} km
  Età: ${eta} anni

----------------------------------------

  Prezzo base:          €${prezzoBase.toFixed(2)}
  Sconto applicato:     ${sconto}%

----------------------------------------
`
);
console.log('  PREZZO FINALE :       €', prezzoFinale);