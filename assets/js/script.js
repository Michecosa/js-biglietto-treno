/* 
  Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.

  Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

  il prezzo del biglietto è definito in base ai km (0.21 € al km),
  va applicato uno sconto del 20% per i minorenni,
  va applicato uno sconto del 40% per gli over 65.,
  L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.


  TOOLS:
  - prompt()
  - variabili (let/const): chilometri, eta, prezzoBase prezzoFinale
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
console.log("Il prezzo base è di €",prezzoBase.toFixed(2));


/* 
Verifica se l'età del passeggero rientra in una certa fascia per applicare eventuali sconti:
  - minorenne (<18): 20%; 
  - over65 (>65): 40%;

  Se si, applicare il relativo sconto al prezzoBase per ottenere il prezzoFinale
  Altrimenti, il prezzoFinale corrisponde al prezzoBase (18 <= eta <= 65)
*/


/* 
  Mandare il prezzoFinale in console (Output)
*/