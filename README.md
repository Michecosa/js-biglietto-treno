# 🎟️ Biglietto del Treno

Esercizio JavaScript – **Calcolo del prezzo del biglietto del treno** in base ai chilometri e all’età del passeggero.

🌐 [Check it out!](https://michecosa.github.io/js-biglietto-treno/) 
<br>Ricorda di aprire in console per vedere l'output!
<br>Nota: se non vedi il messaggio di prompt appena avviata la pagina, ricaricala (F5 o la rotella in alto)
<br>
<br>

## 🧩 Traccia

Il programma deve chiedere all’utente:

- 🚗 il numero di **chilometri** che vuole percorrere;  
- 👤 l’**età** del passeggero.

Sulla base di queste informazioni, il programma calcola il **prezzo totale del viaggio**, secondo le seguenti regole:

- il prezzo del biglietto è definito in base ai km (👉 **0.21 € al km**);
- va applicato uno **sconto del 20%** per i **minorenni** (< 18 anni);
- va applicato uno **sconto del 40%** per gli **over 65** (> 65 anni);
- il **prezzo finale** deve essere mostrato **con due decimali** (es. €16.80).

---

## 🧠 Ragionamento / Piano di lavoro

### 1. Analisi del problema
L’obiettivo è ottenere un **prezzo finale corretto** dopo aver considerato eventuali sconti.

### 2. Strumenti usati
- `prompt()` → per chiedere i dati all’utente;  
- `Number()` → per convertire i valori da stringa a numero;  
- `if / else if / else` → per gestire le fasce d’età e gli sconti;  
- `toFixed(2)` → per mostrare i prezzi con due decimali;  
- `console.log()` → per stampare il risultato in modo leggibile.

### 3. Suddivisione in sotto-task
1. Chiedere all’utente **chilometri** e **età**.  
2. Calcolare il **prezzo base** (0.21 € × km).  
3. Verificare se applicare uno **sconto**.  
4. Calcolare il **prezzo finale**.  
5. Stampare in console un **output leggibile e formattato**.
